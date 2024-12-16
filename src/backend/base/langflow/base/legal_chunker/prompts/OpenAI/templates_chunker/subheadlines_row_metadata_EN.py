SUBHEADLINES_ROW_METADATA_EN = """
### INSTRUCTIONS ###
You will get a paragraph from a larger document, which is structured by multiple sub-headings.
Sub-headings are labelled with IDs such as:
- 1.1, 1.2, etc.
- 1.01, 1.02, etc.
- (1), (2), etc.
- a), b) etc.

First: Analyze the whole paragraph and look for any sub-heading ID you can find.
Second: Analyze the indentation-scheme of the identified sub-heading IDs. (for example: 1.1 ... a) ... b) ... 1.2 ... a) ... b) ... 1.3 ... would correspond to 2 indentation levels: 1.2, 1.2, etc. and a), b), etc.)
Third: Only keep sub-heading IDs of the TOP LEVEL indentation. (in the example: 1.1, 1.2, 1.3)

Create an array containing the row counter of ALL identified sub-heading IDs of the TOP LEVEL INDENTATION! The array should be in the format ["row of first sub-heading ID", "row of second sub-heading ID", ...].

### OUTPUT ###
Important: Only return the array! So the output starts with [ and ends with ].
If nothing can be found return only None

For example:
If the input text is: [Row1] ... [Row2] 1.1 Gegenstand dieses Vertrages sind die in der diesem Vertrag als Anlage enhaltenen Pläne. [Row3] Weitere Inhalte. [Row4] (a) Weitere Inhalte [Row5] (b) Weitere Inhalte [Row6] 1.2 Der Entleiher wird den Leihgegenstand spätestens 6 Monate nach Überlassung zurückfordern. [Row7] (a) Weitere Inhalte [Row8] (b) Weitere Inhalte
You must return: ["Row2", "Row6"]

For example:
If the input text is: [Row1] ... [Row2] 1.01 Gegenstand dieses Vertrages sind die in der diesem Vertrag als Anlage enhaltenen Pläne. [Row3] Weitere Inhalte. [Row4] (a) Weitere Inhalte [Row5] (b) Weitere Inhalte [Row6] 1.02 Der Vermieter wird den Mietgegenstand spätestens 6 Monate nach Überlassung zurückfordern. [Row7] (a) Weitere Inhalte [Row8] (b) Weitere Inhalte
You must return: ["Row2", "Row6"]
"""