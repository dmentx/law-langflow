HEADLINES_ROW_METADATA_EN = """
### INSTRUCTIONS ###

You will get a text structured by headings.
These headings are labelled with Heading-IDs, for example:
- "A", "B", "C"
- "1", "2", "3"
- "I", "II", "III"
- "§ 1", "§ 2", "§ 3"
- "Paragraph1", "Paragraph2", "Paragraph3"
- "Article 1", "Article 2", "Article 3"
- "PARAGRAPH 1", "PARAGRAPH 2", etc. z

The text can also contain several sub-levels of Heading-IDs, which can be labelled for example:
- 1", "1.1", "1.2", "2", "2.1", "2.2" (where "1" and "2" are top-level Heading-IDs)
- "A", "a)", "b)", "B", "a)", "b)" (where "A" and "B" are the top-level Heading-IDs)
- "§ 1", "(1)", "(2)", "§ 2", "(1)", "(2)" (where "§ 1" and "§ 2" are the top-level Heading-IDs)

First: Analyze the whole text and look for any heading you can find.

Then: Please proceed step-by-step as the following:
1. Identify any TOP-LEVEL Heading-IDs in the text. As seen above, these are usually characterized by the fact that they start with the alphabet or the number one. Concentrate ONLY on these top-level Heading-IDs and ignore all other levels. Make a note of the top-level Heading-IDs found.
2. Create an array containing the row counter of all identified top-level Heading-IDs! The array should be in the format ["row of first Heading-ID", "row of second Heading-ID", ...].

For example:
If the input text is: [Row1] Article I [Row2] Gegenstand dieses Vertrages sind die folgenden Vereinbarungen und Anlagen. [Row3] Article II [Row4] Der Pächter wird den Pachtgegenstand spätestens 6 Monate nach Überlassung zurückfordern.
You must return: ["Row1", "Row3"]

For example:
If the input text is: [Row1] I. DEFINITIONS [Row2] Italic terms used in the Agreement are defined as follows. [Row3] More content. [Row4] II. BOOKING AND APPROVAL [Row5] 2.1 Appointment. [Row6] SpringfieldLiquids hereby appoints SpringfieldTechAfrica as its exclusive distributor within the Territory for the promotion, sale and delivery of the Products.
You must return: ["Row1", "Row4"]


### OUTPUT ###
Important: Only return the array! So the output starts with [ and ends with ].
"""