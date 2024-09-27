---
title: Obsidian for Zettelkasten. Part 1
subtitle: Filenames in Zettelkasten style
date: 'Sep 27, 2024'
# description: Learning Google Sheets Conditional Formatting
thumbnailUrl: ''
tags: ['obsidian', 'zettelkasten']
---
<base target="_blank">

![obsidian_part1][obsidian_part1]

This is the first part of a series of articles about Zettelkasten in Obsidian.

***

Normally people put the file names in minuscules with hyphens or underscore, a good format for file-naming system because is a standard on file managers and web pages. But this is a bad format for the title of a note.

>202408272237_Zettelkasten_Rules //This is a filename

>Zettelkasten Rules //This is a title

To prevent filename from being displayed in Obsidian, you need to use the [obsidian-front-matter-title](https://github.com/Snezhig/obsidian-front-matter-title) plugin.

And in `Front Matter Title -> Features -> Everywhere set Enable`. Now the file name will be saved, but only the Title of the note will be displayed in the editor.

For automatic setting of Zettelkasten-index, read in `Templater: Auto-fill Properties`. (in the next article)

***

[obsidian_part1]: /images/202409271404_Obsidian_for_Zettelkasten.png "obsidian_part1"