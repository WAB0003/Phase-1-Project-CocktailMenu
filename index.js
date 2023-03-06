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
    console.log(drinkObj)
const drinkList = document.querySelector("#drink-list")

//creating a variable that takes image info from object
drinkImg = document.createElement("img")
drinkImg.src = drinkObj.strDrinkThumb
drinkImg.id = drinkObj.idDrink
drinkImg.alt = drinkObj.strDrink
drinkImg.width = 200
//append drink image to the drink Menu
drinkList.append(drinkImg)
}