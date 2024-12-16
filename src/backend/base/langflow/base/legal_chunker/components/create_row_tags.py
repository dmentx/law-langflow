def create_row_tags(text):
    """
    Add [Row]-tags to each row of a string.

    Args:
        text (str): Text to add tags to.

    Returns:
        str:
            Text with row-tags
    """
    lines = text.splitlines()  
    
    text_rowmetadata = ""  
    for i, line in enumerate(lines):  
        row_tag = f"[Row{i+1}]"  
        text_rowmetadata += f"{row_tag} {line}\n"
    return text_rowmetadata