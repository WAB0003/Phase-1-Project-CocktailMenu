const BASE_API = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

fetch(BASE_API)
    .then((resp) => resp.json())
    .then((data) => {
        // console.log(data.drinks[0])
        data.drinks.forEach(drinkObj => {           
            addToDrinkMenu(drinkObj)
        })
    });

document.getElementById("drink-form").addEventListener('submit', addNewDrink);


//*Create a Global Variable for the Drinklist area in our HTML
const drinkList = document.querySelector("#drink-list")

//!Create a function that takes and Drink Object and adds a it to the top Drink List
const addToDrinkMenu = (drinkObj) => {
    //Create a Span Element and assign and Id
    const drinkListSpan = document.createElement("span")
    drinkListSpan.classList = "drinks"
    drinkListSpan.id = `d${drinkObj.idDrink}`
    //Create an image variable in our HTML and set it to the Objects image source. Add Id, alt, and height.
    drinkImg = document.createElement("img")
    drinkImg.src = drinkObj.strDrinkThumb
    drinkImg.id = `img${drinkObj.idDrink}`
    drinkImg.alt = drinkObj.strDrink
    drinkImg.height = 200
    //append drink image to the drink Menu
    drinkListSpan.append(drinkImg)
    drinkList.append(drinkListSpan)
        
    //! break out RenderImage function to create an event listener
    renderImage(drinkImg,drinkObj)
        
    // ! Add an event "mouseover" & "mouseout" event listener to drinkImg
    mouseoverEvent(drinkListSpan,drinkObj,drinkImg)
    mouseoutEvent(drinkListSpan,drinkObj,drinkImg)
}
    
//! This is the break out RenderImage function
    const renderImage = (drinkImg,drinkObj) => {
        const centerImage  = document.querySelector('#image')
        drinkImg.addEventListener('click', (event) => {
            //create an ingredients Title
            // const detailInfo = document.querySelector("#detailed-info")
            // const ingredientsTitle = document.createElement("h4")
            // ingredientsTitle.textContent = "Ingredients"
            // detailInfo.append(ingredientsTitle)
            

            centerImage.src = event.target.src 
            //add Drink Name to detail section
            const drinkName = document.querySelector("#name")

            drinkName.textContent = drinkObj.strDrink

            //add ingredients to the detail section
            const ingredientList = document.querySelector("#ingredients")
            ingredientList.innerHTML = "";
            
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

//!Create a mouseover Event Listener that puts name in Image
    const mouseoverEvent = (drinkListSpan, drinkObj,drinkImg) => {
        drinkListSpan.addEventListener("mouseover", e => {
            //create a span element within a specific id to go within image
            
            const drinkName = document.createElement("span")
            drinkName.textContent = drinkObj.strDrink
            drinkName.classList = "drinkTitle"
            drinkName.id = `span${drinkObj.idDrink}`
            
            
            drinkImg.style.opacity = 30/100
            document.querySelector(`#d${drinkObj.idDrink}`).append(drinkName)
        })
    }

    //!Create a mouseout Event Listener that puts name in Image
    const mouseoutEvent = (drinkListSpan, drinkObj, drinkImg) => {
        drinkListSpan.addEventListener("mouseout",e => {
            //create a span element within a specific id to go within image
            const drinkName = document.createElement("span")
            drinkName.textContent = drinkObj.strDrink
            drinkName.classList = "drinkTitle"
            
            drinkImg.style.opacity = 100/100
            document.querySelector(`#span${drinkObj.idDrink}`).remove()
        })
    }



// Tom workspace
  
   
 


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
    console.log(newDrink)
    addToDrinkMenu(newDrink)

// function formReset(newDrink)
// document.getElementById("reset-btn").value.reset();

// formReset()
}

 