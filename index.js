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
        const drinkListSpan = document.createElement("span")
        drinkListSpan.classList = "drinks"
        drinkListSpan.id = `d${drinkObj.idDrink}`

        drinkImg = document.createElement("img")
        drinkImg.src = drinkObj.strDrinkThumb
        drinkImg.id = `img${drinkObj.idDrink}`
        drinkImg.alt = drinkObj.strDrink
        drinkImg.height = 200
        //append drink image to the drink Menu
        drinkListSpan.append(drinkImg)
        drinkList.append(drinkListSpan)
        
        //! break out RenderImage function to create an event listener
        renderImage(drinkImg)
        
        // ! Add an event "mouseover" & "mouseout" event listener to drinkImg
        mouseoverEvent(drinkListSpan,drinkObj,drinkImg)
        mouseoutEvent(drinkListSpan,drinkObj,drinkImg)
    }
    
//! This is the break out RenderImage function
    const renderImage = (drinkImg) => {
        const centerImage = document.querySelector('#image')
        drinkImg.addEventListener('click', (event) => {
            
            centerImage.src = event.target.src 
        })   
    }

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
function formSubmit(event) {
    document.getElementById('drink-form')
    formSubmit.addEventListener('submit', function(event) {
    event.preventDefault()
    console.log(event.target.name.value)

    const addNewDrink = {
        name: event.target.name.value,
        image: event.target.image.value,
        
        }
    formSubmit(addNewDrink)

    });


}
