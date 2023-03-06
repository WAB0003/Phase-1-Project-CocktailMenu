const BASE_API = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

fetch(BASE_API)
    .then((resp) => resp.json())
    .then((data) => {
        // console.log(data.drinks[0])
        data.drinks.forEach(drinkObj => {           
            addToDrinkMenu(drinkObj)
        })
    });

    
    const addToDrinkMenu = (drinkObj) => {
        // console.log(drinkObj)
        const drinkList = document.querySelector("#drink-list")
        
        //creating a variable that takes image info from object
        drinkImg = document.createElement("img")
        drinkImg.src = drinkObj.strDrinkThumb
        drinkImg.id = drinkObj.idDrink
        drinkImg.alt = drinkObj.strDrink
        drinkImg.height = 200
        //append drink image to the drink Menu
        drinkList.append(drinkImg)
        
        // break out RenderImage function to create an event listener
        renderImage(drinkImg)
        
        // ! Add an event "mouseover" event listener to drinkImg
        mouseoverEventListener(drinkImg,drinkObj)
    }
    
    //This is our function to add an event listener to display Large Image
    const renderImage = (drinkImg) => {
        const centerImage = document.querySelector('#image')
        drinkImg.addEventListener('click', (event) => {
            
            centerImage.src = event.target.src
            
            
        })  
        
    }
    
    const mouseoverEventListener = (drinkObj) => {
        drinkImg.addEventListener("mouseover",e => {
            //create a div element within a specific id to go within image
            drinkName = document.createElement("h1")
            drinkName.textContent = drinkObj.strDrink
            drinkName.class = "menuName"
            // drinkList.append(drinkName)
        })

    }