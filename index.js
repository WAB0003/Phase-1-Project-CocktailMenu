const BASE_API = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

fetch(BASE_API)
    .then((resp) => resp.json())
    .then((data) => {
        // console.log(data.drinks[0])
        data.drinks.forEach(drinkObj => {           
            addToDrinkMenu(drinkObj)
        })
    });

//*Move drinkList to be a global variable
const drinkList = document.querySelector("#drink-list")
    
    const addToDrinkMenu = (drinkObj) => {
        // console.log(drinkObj)
        
        //creating a variable that takes image info from object
        const drinkListDiv = document.createElement("div")
        drinkListDiv.classList = "drinks"
        drinkListDiv.id = `d${drinkObj.idDrink}`

        drinkImg = document.createElement("img")
        drinkImg.src = drinkObj.strDrinkThumb
        drinkImg.alt = drinkObj.strDrink
        drinkImg.height = 200
        //append drink image to the drink Menu
        drinkListDiv.append(drinkImg)
        drinkList.append(drinkListDiv)
        
        //! break out RenderImage function to create an event listener
        renderImage(drinkImg)
        
        // ! Add an event "mouseover" & "mouseout" event listener to drinkImg
        mouseoverEvent(drinkImg,drinkObj)
        mouseoutEvent(drinkImg,drinkObj)
    }
    
//! This is the break out RenderImage function
    const renderImage = (drinkImg) => {
        const centerImage = document.querySelector('#image')
        drinkImg.addEventListener('click', (event) => {
            
            centerImage.src = event.target.src 
        })   
    }

//!Create a mouseover Event Listener that puts name in Image
    const mouseoverEvent = (drinkImg, drinkObj) => {
        drinkImg.addEventListener("mouseover",e => {
            //create a div element within a specific id to go within image
            const drinkName = document.createElement("div")
            drinkName.textContent = drinkObj.strDrink
            drinkName.classList = "drinkTitle"
            drinkName.id = `div${drinkObj.idDrink}`
            

            drinkImg.style.opacity = 30/100
            document.querySelector(`#d${drinkObj.idDrink}`).append(drinkName)
        })
    }

    //!Create a mouseout Event Listener that puts name in Image
    const mouseoutEvent = (drinkImg, drinkObj) => {
        drinkImg.addEventListener("mouseout",e => {
            //create a div element within a specific id to go within image
            const drinkName = document.createElement("div")
            drinkName.textContent = drinkObj.strDrink
            drinkName.classList = "drinkTitle"
            
            drinkImg.style.opacity = 100/100
            document.querySelector(`#div${drinkObj.idDrink}`).remove()
        })
    }