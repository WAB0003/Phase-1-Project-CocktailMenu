//create a base URL that pulls from API data.
const BASE_API = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

//create an initial fetch function that fetches data from API
const fetchData = () => {
fetch(BASE_API)
    .then((resp) => resp.json())
    .then((data) => {
        data.drinks.forEach(drinkObj => {           
            addToDrinkMenu(drinkObj)
        })
    });
}
    
//*Create a section of Global Variable that get used throughout the code. All variables are identifying places on original HTML
const drinkList = document.querySelector("#drink-list")
const drinkName = document.querySelector("#name")
const centerImage  = document.querySelector('#image')
const ingredientsTitle = document.querySelector("#ingredientsTitle")
const ingredientList = document.querySelector("#ingredients")
const drinkForm = document.getElementById("drink-form")

//!Create a function that takes a Drink Object (either from API or form) and adds a it to the top Drink List
const addToDrinkMenu = (drinkObj) => {
    //Create a Span Element and assign class and Id for future use
    const drinkListSpan = document.createElement("span")
    drinkListSpan.classList = "drinks"
    drinkListSpan.id = `d${drinkObj.idDrink}`
    //Create an image variable in HTML and set it to the Objects image source. Add Id, alt, and a standard height.
    drinkImg = document.createElement("img")
    drinkImg.src = drinkObj.strDrinkThumb
    drinkImg.id = `img${drinkObj.idDrink}`
    drinkImg.alt = drinkObj.strDrink
    drinkImg.height = 200
    //append drink image to the drink Menu
    drinkListSpan.append(drinkImg)
    drinkList.append(drinkListSpan)
    
    //!Create breakout functions that take information created in drink drink Menu and add Event Listeners to them:
    //* break out RenderImage function to create an event listener
    renderImage(drinkImg,drinkObj)
    
    //* Add an event "mouseover" & "mouseout" event listener to drinkImg
    mouseoverEvent(drinkListSpan,drinkObj,drinkImg)
    mouseoutEvent(drinkListSpan,drinkObj,drinkImg)
}
    
//! This is the break out RenderImage function to edit each menu item that is clicked.
const renderImage = (drinkImg,drinkObj) => {
    drinkImg.addEventListener('click', (event) => {
        //Input a Title for the ingrediets list
        ingredientsTitle.textContent = "Ingredients"
        centerImage.src = event.target.src 

        //add Drink Name to detail section
        drinkName.textContent = drinkObj.strDrink

        //reset ingredient list and add new ingredients to list based on drink object selected
        ingredientList.innerHTML = "";

        //create an Array for all ingredients needed required for a drink.
        const ingredientArray = [drinkObj.strIngredient1, drinkObj.strIngredient2, drinkObj.strIngredient3, drinkObj.strIngredient4, drinkObj.strIngredient5, drinkObj.strIngredient6, drinkObj.strIngredient7]
        ingredientArray.forEach(ingredient => {
            if ((ingredient === null)||(ingredient === "")){
                return;
            } else {
                const div = document.createElement("div")
                div.textContent = ingredient
                ingredientList.append(div)
            }
        });
    });
};

//!Create a mouseover Event Listener that puts name in Image and changes opacity
const mouseoverEvent = (drinkListSpan, drinkObj,drinkImg) => {
    drinkListSpan.addEventListener("mouseover", e => {
        //create a span element within a specific id to go within image
        const drinkImgName = document.createElement("span")
        drinkImgName.textContent = drinkObj.strDrink
        drinkImgName.classList = "drinkTitle"
        drinkImgName.id = `span${drinkObj.idDrink}`
            
        drinkImg.style.opacity = 30/100
        document.querySelector(`#d${drinkObj.idDrink}`).append(drinkImgName)
    })
}

//!Create a mouseout Event Listener that removes name from menu image and reverts original opacity 
const mouseoutEvent = (drinkListSpan, drinkObj, drinkImg) => {
    drinkListSpan.addEventListener("mouseout", e => {
        drinkImg.style.opacity = 100/100
        document.querySelector(`#span${drinkObj.idDrink}`).remove()
    })
}

//!Create an Event Listener for the Form
drinkForm.addEventListener('submit', addNewDrink);
//Create a function that takes information from form and adds it to our Menu!
function addNewDrink(event) {
    event.preventDefault();
    console.log(event.target["drink-name"].value)

    const newDrink = {
        strDrink: event.target["drink-name"].value,
        strDrinkThumb: event.target["drink-image"].value,
        strIngredient1: event.target["ingredient-1"].value,
        strIngredient2: event.target["ingredient-2"].value,
        strIngredient3: event.target["ingredient-3"].value,
        strIngredient4: event.target["ingredient-4"].value,
        strIngredient5: event.target["ingredient-5"].value,
        strIngredient6: event.target["ingredient-6"].value,
    }
    drinkForm.reset()
    addToDrinkMenu(newDrink)
}

//! Creating reset button
const resetBtn = document.getElementById("reset-btn")
resetBtn.addEventListener("click",e => {
    drinkForm.reset()
    centerImage.src = "https://i2.wp.com/whatagirleats.com/wp-content/uploads/2017/06/Top-shot-Marg-Bar-2-hands.jpg"
    ingredientsTitle.textContent= ""
    ingredientList.innerHTML = ""
    drinkName.textContent = ""
})


//Initialize webapplication
 const init = () => {
    fetchData()
 }
 init()