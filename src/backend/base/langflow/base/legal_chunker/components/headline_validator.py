import os
import sys

current_dir = os.getcwd()
parent_dir = os.path.dirname(current_dir)
sys.path.append(parent_dir)

from langchain_openai  import AzureOpenAI
from langflow.base.legal_chunker.prompts.OpenAI.templates_chunker.headline_validator_EN import (
    HEADLINE_VALIDATOR_ITERATION_1,
    HEADLINE_VALIDATOR_ITERATION_N
)




def validate_headlines(legal_text, items, exception_history, retry_iteration, client:AzureOpenAI):
    """
    Validate identified headlines from legal text.

    Args:
        legal_text (str): Legal text with row tags.
        items (str): List of headline-row-tags.
        exception_history (str): If the validator finds a discrepancy between the identified headings and the headline defaults/requirements, a new exception is raised and appended.
        retry_iteration (int): Counter of retries.  

    Returns:
        list:
            a list of validation result (bool), exception_history (str), retry_iteration (int)
    """
    
    items = eval(items)

    # print(f"Identified rows of this iteration are: {items}") #!Debugging
    indices = [int(row[3:])-1 for row in items]  
    lines = legal_text.split('\n')  
    headline_array = [lines[index] for index in indices]  
    # print(f"Identified headlines of this iteration are: {headline_array}") #!Debugging

    for index, headline_item in enumerate(headline_array):
        #print(headline_item)

        cleaned_headline = headline_array[index].replace("\n", "").replace("\r","")
        cleaned_headline = ' '.join(cleaned_headline.split())
        cleaned_pre_headline = ""

        prompt = ""
        
        if index == 0:
            prompt = HEADLINE_VALIDATOR_ITERATION_1
        else:
            cleaned_pre_headline = headline_array[index-1].replace("\n", "").replace("\r","")
            cleaned_pre_headline = ' '.join(cleaned_pre_headline.split())

            prompt = HEADLINE_VALIDATOR_ITERATION_N.format(cleaned_pre_headline=cleaned_pre_headline) 

        classification = client.generate_response(
            system_prompt= prompt,
            user_prompt= f"Input: {cleaned_headline}"
        )

        if 'FALSE' in classification and index == 0:
            #print("FALSE")
            retry_iteration += 1
            
            exception_history = exception_history + f"Iteration {retry_iteration}: ERROR: '{cleaned_headline}' in row {indices[index]+1} was identified as the first headline of the document but does not match the criteria necessary in order to be classified as a first Heading-ID (Must start with e.g. §1 or Paragraph1 or Art. 1 or No. 1 or I. or 1.). Perform a new Heading-ID search and make sure to return the first headline of the document. Do not repeat your mistake! \n\n"
            #print(exception_history)
            with open("exception_history.log", "w") as log_file:  
                log_file.write(exception_history)
            return [False, exception_history, retry_iteration]
        elif 'FALSE' in classification and index > 0:
            #print("FALSE")
            retry_iteration += 1

            exception_history = exception_history + f"Iteration {retry_iteration}: ERROR: '{cleaned_headline}' in row {indices[index]+1} does not match the criteria necessary in order to be classified as a Heading-ID (Must start with e.g. §1, §2, etc. or Paragraph1, Paragraph2, etc. or Art. 1, Art. 2, etc. or No. 1, No. 2, etc. or I., II., etc. or 1., 2., etc.). Perform a new Heading-ID search and only return rows of Heading-IDs matching the criteria. Do not repeat your mistake! \n\n"
            #print(exception_history)
            with open("exception_history.log", "w") as log_file:  
                log_file.write(exception_history)
            return [False, exception_history, retry_iteration]
        elif 'NO LOGICAL CONTINUATION' in classification:
            #print('NO LOGICAL CONTINUATION')
            cleaned_pre_headline = headline_array[index-1].replace("\n", "").replace("\r","")
            cleaned_pre_headline = ' '.join(cleaned_pre_headline.split())
            retry_iteration += 1

            exception_history = exception_history + f"Iteration {retry_iteration}: ERROR: The Heading-ID {cleaned_headline} in row {indices[index]+1} is not a logical continuation of the headline numbering. The preceding Heading-ID was {cleaned_pre_headline}. Identify the Heading-ID between {cleaned_pre_headline} and {cleaned_headline}. Make sure to not skip any Heading-ID, the resulting array should contain a continuous list. (II. follows I.; 2 follows 1, B follows A etc.) Do not repeat your mistake! \n\n"
            #print(exception_history)
            with open("exception_history.log", "w") as log_file:  
                log_file.write(exception_history)
            return [False, exception_history, retry_iteration]
    return [True, exception_history, retry_iteration]