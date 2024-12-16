def remove_first_line(input_string):
    """
    Remove first line from a string.

    Args:
        input_string (str)

    Returns:
        str:
            input_string minus first line
    """  
    # split string in rows  
    lines = input_string.split('\n')  
    # remove first row  
    lines = lines[1:]  
    # recombine  
    return '\n'.join(lines) 