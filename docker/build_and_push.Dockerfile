FROM python:3.12.3-slim as builder-base

ENV PYTHONDONTWRITEBYTECODE=1 \
    PIP_DISABLE_PIP_VERSION_CHECK=on \
    PIP_DEFAULT_TIMEOUT=100 \
    POETRY_VERSION=1.8.2 \
    POETRY_HOME="/opt/poetry" \
    POETRY_VIRTUALENVS_IN_PROJECT=true \
    POETRY_NO_INTERACTION=1 \
    PYSETUP_PATH="/opt/pysetup" \
    VENV_PATH="/opt/pysetup/.venv"

RUN apt-get update \
    && apt-get install --no-install-recommends -y \
    curl \
    build-essential npm \
    gcc \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN --mount=type=cache,target=/root/.cache \
    curl -sSL https://install.python-poetry.org | python3 \
    && ln -s /opt/poetry/bin/poetry /usr/local/bin/poetry \
    && poetry --version

WORKDIR /app
COPY pyproject.toml poetry.lock README.md ./
COPY src/ ./src
COPY scripts/ ./scripts
RUN python -m pip install requests --user 


# Poetry-Abhängigkeiten installieren
RUN poetry lock --no-update \
    && poetry install --without dev --sync 

# Frontend-Build ausführen
RUN cd src/frontend && npm install && npm run build

# Frontend in das Backend-Verzeichnis kopieren
RUN cp -r src/frontend/build src/backend/base/langflow/frontend


# Build und Installation des Python-Wheel-Pakets
RUN poetry build -f wheel && poetry run pip install dist/*.whl

FROM python:3.12.3-slim as runtime

RUN apt-get -y update \
    && apt-get install --no-install-recommends -y \
    curl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

LABEL org.opencontainers.image.title=langflow-law
LABEL org.opencontainers.image.authors=['Langflow']
LABEL org.opencontainers.image.licenses=MIT
LABEL org.opencontainers.image.url=https://github.com/dmentx/law-langflow
LABEL org.opencontainers.image.source=https://github.com/dmentx/law-langflow

RUN useradd user -u 1000 -g 0 --no-create-home --home-dir /app/data
COPY --from=builder-base --chown=1000 /app/.venv /app/.venv
ENV PATH="/app/.venv/bin:${PATH}"

# Kopiere die virtuelle Umgebung und das Frontend-Build-Verzeichnis
COPY --from=builder-base --chown=1000 /app/.venv /app/.venv
COPY --from=builder-base /app/src/frontend/build /app/frontend

USER user
WORKDIR /app

ENV LANGFLOW_HOST=0.0.0.0
ENV LANGFLOW_PORT=7860
ENV DO_NOT_TRACK=true
ENV LANGFLOW_AUTO_LOGIN=False


CMD ["python", "-m", "langflow", "run", "--path", "/app/frontend"]
