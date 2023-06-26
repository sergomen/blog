---
title: Google Sheets. Highlighting Rows Based on the Current Date via Conditional Formatting
subtitle: Learning Google Sheets Conditional Formatting
date: 'May 29, 2023'
# description: Learning Google Sheets Conditional Formatting
thumbnailUrl: ''
tags: ['google sheets', 'conditional formatting', 'highlighting a row depending on the current date']
---
<base target="_blank">

# Introduction

I don't use Google Sheets often as an instrument for programming. Sometimes an idea comes to my mind that I want to implement as quickly as possible because I want to join the process I came up with. In that case, I'm using Google Sheets because you can share with people and make the process very interesting and fun.
And several days ago, I wanted to know **how to highlight a row depending on the current date**.

***

> Google Sheets Conditional Formatting is a feature to automatically change the font properties of a specific cell, row, column, and even the background color of the cell, based on rules you set.

So, what is conditional formatting? Where can I find it?
Glad you're asking.)

# Solution

Go to the main menu on the top of your window in Google Sheets and find `Format`.
![Conditional Formatting in Main Menu](/images/1/menu_conditional_formatting.png "Conditional Formatting in Main Menu")

Now click on Conditional Formatting, and a right sidebar will appear. There you choose a `range` and a `custom formula`.

![Adjusting Conditional Formattings](/images/1/adjusting_conditional_formatting.png "Adjusting Conditional Formatting")

After that, you copy and paste the necessary code into a field for a custom formula.

![Field for Custom Formula](/images/1/field_for_custom_formula.png "Field For Custom Formula")

I found two ways to achieve this goal.

**First way**

Use the function below with a range A1:D10.

    =ISNUMBER(SEARCH(TODAY(), $A1:$A10))

And it finds the current date in your table if there is one.

![Result of Searching a Current Date](/images/1/first_way.png "Result of Searching a Current Date")

It works if you format dates as in the picture. But if you will change to another format, for example, 05/28/2023 or 5/28/23, it doesn't find the current date.

**Second way**

Use the function below with a range A1:D10.

    =$A1:$A10 = TODAY()

Now you see, it works!

![Result of Searching a Current Date](/images/1/second_way.png "Result of Searching a Current Date")

***

# Conclusion

Now you know what is `Conditional Formatting` in Google Sheets and how to use it. You can find a current date and highlight any rows or columns and cells based on this date. The first way is more specific than the second. You can use the `SEARCH()` function to find exact data with the current date, while the second way is more abstract, which works excellently with the problem described in the article.

## Related Links

- [*TODAY Function – Google Sheets*](https://sheetshelp.com/today/#:~:text=The%20TODAY%20function%20returns%20the,date%20in%20the%20same%20value.)
- [*Google Sheets Date Format | The How to Guide For Beginners*](https://blog.coupler.io/google-sheets-date-format-guide/)
- [*How to highlight rows based on date in Goolge sheet?*](https://www.extendoffice.com/documents/excel/5078-google-sheets-highlight-row-based-on-date.html)