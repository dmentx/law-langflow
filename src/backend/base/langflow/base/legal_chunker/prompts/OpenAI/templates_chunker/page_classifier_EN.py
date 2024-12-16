PAGE_CLASSIFIER_EN = """
### INSTRUCTIONS ###
You will be given a page from a longer legal document.
Classify whether the presented page contains a table of content or is a title-page (meaning: No classic body content but instead a list of the contract-parties etc.).
If so return: table/title
Else if the page contains classic body content return: body

Only return the classification which is either "table/title" or "body".

### EXAMPLES ###

[Example 1:]
[Text:]
WALABOT-HOME RESELLER AGREEMENT
This Walabot-HOME Reseller Agreement (“Agreement”) is made and entered into as of this 31 day of July 2019
(“Effective Date”) by and between Vayyar Imaging Ltd., having its principal place of business at 3 Avraham Giron St., POB.
325, Yehud 5621717, Israel (“Supplier”), and Inde Living Holdings, Inc., having its principal place of business at 1462
Rudder Lane, Knoxville, TN 37919 (“Reseller”). Vayyar and Reseller shall be referred to individually as “Party” and
collectively as “Parties”.

1. Definitions and Introduction:
The following capitalized terms shall have the following meanings:
1.1 “Customer” means a third party who purchases the Products from Reseller within the Territory, for its internal use only (including for the personal use of its End Users), such as nursing homes.
1.2 “End User” means a third party who is a customer of Customer or is otherwise related to a customer of Customer, and who purchases and/or uses the Products within the Territory, for its personal use only.
1.3 “End User Agreement” means Supplier’s standard license agreements, which are available at https://walabot.com/walabot-home, which governs each End User’s right to use the Product, as amended by Supplier in its sole discretion from time to time.
1.4 “MOQ” means the minimum order quantity of Product units during the Initial Term, as set forth in Schedule 1.

[Classification:]
body

[Example 2:]
[Text:]
TABLE OF CONTENTS
Page
ARTICLE I
DEFINITIONS
Section 1.01. Definitions 1
ARTICLE II
RECORDATION OF INTELLECTUAL PROPERTY RIGHTS ASSIGNMENT AGREEMENTS
Section 2.01. Intellectual Property Assignment Agreements 5
Section 2.02. Recordation 5
Section 2.03. Security Interests 5
ARTICLE III
LICENSES AND COVENANTS FROM NUANCE TO SPINCO
Section 3.01. License Grants 6
Section 3.02. Other Covenants 7
ARTICLE IV
LICENSES AND COVENANTS FROM SPINCO TO NUANCE
Section 4.01. License Grants 8
Section 4.02. Other Covenants 9
ARTICLE V
ADDITIONAL INTELLECTUAL PROPERTY RELATED MATTERS
Section 5.01. Ownership 10
Section 5.02. Assignments and Licenses 10
Section 5.03. No Implied Rights 10
Section 5.04. No Obligation To Prosecute or Maintain Patents 10
Section 5.05. No Technical Assistance 10
Section 5.06. Group Members 10
ARTICLE VI
CONFIDENTIAL INFORMATION
Section 6.01. Confidentiality 10
Section 6.02. Disclosure of Confidential Technical Information 11
Section 6.03. Compulsory Disclosure of Confidential Technical Information 11
ARTICLE VII
LIMITATION OF LIABILITY AND WARRANTY DISCLAIMER

[Classification:]
table/title
"""