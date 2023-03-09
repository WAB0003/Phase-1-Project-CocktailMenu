# Phase 1 Project - `mrgrtMxr`
Group project: Bill, Wally, Tom

# Project Description
The webpage displayed by the code herein is an online menu for cocktails. Upon opening the web page, the screen will automatically pull 5 margaritas from a free API at the following address and display their images at the top of the screen:

* Cocktail API Address: https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita 


# How to use this Project
As a user, I can:
* View five distinct margarita images at the top of the page upone opening.
* Hover my mouse over each margarita image and see its name appear over the image.
* Click on each image and see its name, larger image, and ingredients in the details section on the middle of the page, persisting until another cocktail image is clicked.
* View and interact with a form at the bottom of the page. This form allows a user to enter the name, an image file path, and up to 6 ingredients used in the drink. After entering each ingredient, user shall be able to submit new drink to the menu above.
* (Note that if I refresh the page, my additional margarita will disappear.)

# Methodologies Employed
We started the project employing three different event listener types:

* CLICK - Clicking on the margarita image to make its name, image, and ingredients appear in the Details section of the page.
* SUBMIT - For the user to (optimistically) add their own margarita using the supplied form.
* MOUSEOVER - "Hovering" the user mouse over each margarita image at the top, causing its name to appear over the image, as well as changing the image's opacity.

However, we encountered a problem with MOUSEOVER -- The margarita's name persisted over the image, even when the mouse was moved away. And each time the mouse moved over the image again, the name would be repeatedly added to the MOUSEOVER text.  To solve this problem, we employed:

* MOUSEOUT - Once the mouse stops hovering over an image, the margarita name and opacity disappear and the image returns to normal.  Re-hovering does not cause multiple repeats of the name to appear.

