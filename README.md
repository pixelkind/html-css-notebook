# Stylebook

### A HTML & CSS Notebook for Visual Studio Code

With the HTML & CSS Notebook extension for Visual Studio Code you can easily create Notebooks that run HTML and CSS code.

You can create code cells with HTML code and combine them with cells that contain CSS code to see the result combining both of them together.

The code will be executed from top to bottom. That means, if you write some HTML code in your first cell and run it, it will only execute the HTML code and display the result. If you create a second cell with CSS after the first cell and execute it, the output will diplay both cells executed in the order they are in your document.

If you execute a specific cell, all cells upon to this cell will be executed but not further. You don't have to execute the cells before that by hand. That means it works differently compared to regular Jupyter notebooks where you can run cells in any order and execute a single cell only.

## Getting started

To get started you can open the command palette and call **New Stylebook** to get a simple example Stylebook. It will contain one _markdown_ cell, one _HTML_ cell, and one _CSS_ cell.

Alternatively you can create a new file and use the file-ending _.stylebook_. Visual Studio Code will recognize and render it if you have this extension installed.

## Background

This extension is used to teach beginners the basics of HTML and CSS. In the future, I will share some examples from the courses here as well.

## License

This Library is licensed under the MIT License. Please refer to the LICENSE.txt for more information.
