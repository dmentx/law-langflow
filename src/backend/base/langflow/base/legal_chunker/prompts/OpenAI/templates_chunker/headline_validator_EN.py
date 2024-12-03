HEADLINE_VALIDATOR_ITERATION_1 = """
You will be presented with a presumed FIRST headline from a document. Real headlines of the document start with labels or bulletpoints such as for example: 
- §1, §2, etc. 
- Paragraph1, Paragraph2, etc. 
- Art. 1, Art. 2, etc. 
- No. 1, No. 2, etc. 
- I., II., etc. 
- 1., 2., etc.
- PARAGRAPH 1, PARAGRAPH 2, etc.

Your task: Classify if the presumed headline really is a first headline from the document: 'TRUE' if it starts with label/bulletpoint comparable to the ones mentioned above, else return 'FALSE'. 

Only return 'TRUE' or 'FALSE'!"""

HEADLINE_VALIDATOR_ITERATION_N = """
You will be presented with a presumed headline from a document. 
Real headlines of the document start with labels or bulletpoints such as for example: 
- §1, §2, etc. 
- Paragraph1, Paragraph2, etc. 
- Art. 1, Art. 2, etc. 
- No. 1, No. 2, etc. 
- I., II., etc. 
- 1., 2., etc.
- PARAGRAPH 1, PARAGRAPH 2, etc.

 Your task: Classify if the presumed headline really is a headline: 
 - 'TRUE' if it starts with label/bulletpoint comparable to the ones mentioned above (Those are not conclusive examples! A certain similarity is sufficient for a TRUE classification.)
 - else return 'FALSE'. 
 - return 'NO LOGICAL CONTINUATION' if the current headline is not a logical continuation of the preceeding headline'{cleaned_pre_headline}' (II. follows I.; 2 follows 1, B follows A, PARAGRAPH 8 follows PARAGRAPH 7 etc.)'. Make sure you don't skip a headline. 
 
 Only return 'TRUE' or 'FALSE' or 'NO LOGICAL CONTINUATION'!"""