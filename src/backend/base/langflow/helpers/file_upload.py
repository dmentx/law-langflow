
from datetime import datetime, timedelta
import os
from pathlib import Path
import uuid
from azure.storage.blob import BlobServiceClient, generate_blob_sas, BlobSasPermissions


def upload_blob_file(path:Path, file_extenstion:str):
    connect_str = os.environ["AZURE_STORAGE_CONNECTION_STRING"]
    account_key = os.environ["AZURE_STORAGE_ACCOUNT_KEY"]
    blob_service_client = BlobServiceClient.from_connection_string(connect_str)
    container_client = blob_service_client.get_container_client(container="langflow-file-container")
    with open(file=path,mode="rb") as data:
        blob_name = f"{str(uuid.uuid1())}{file_extenstion}"
        blob_client = container_client.upload_blob(name=blob_name, data=data)
    sas_token = generate_blob_sas(
        account_name=blob_service_client.account_name,
        container_name="langflow-file-container",
        blob_name=blob_name,
        account_key=account_key,
        permission=BlobSasPermissions(read=True),
        expiry=datetime.now() + timedelta(hours=1)
    )
    blob_client_url = f"https://{blob_service_client.account_name}.blob.core.windows.net/langflow-file-container/{blob_name}"
    return f"{blob_client_url}?{sas_token}"