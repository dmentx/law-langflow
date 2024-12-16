def get_article_sections(article_text, line_numbers):
    """
    Split a text into sections.

    Args:
        article_text (str): Legal text with row-tags.
        line_numbers (list): List of row-tags.

    Returns:
        list:
            List of section strings.
    """   
    lines = article_text.split("\n")  
    sections = []    
    for i in range(len(line_numbers)):    
        start_line = line_numbers[i]  
        if i < len(line_numbers) - 1:  
            end_line = line_numbers[i+1]  
        else:  
            end_line = len(lines)  
        section_text = "\n".join(lines[start_line:end_line]).strip()
        # print(section_text[0:20] + " ...") #! DEBUGGING
        sections.append(section_text)    
    return sections