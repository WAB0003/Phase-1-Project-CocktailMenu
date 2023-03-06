const BASE_API = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

fetch(BASE_API)
    .then((resp) => resp.json())
    .then((data) => console.log(data));
    