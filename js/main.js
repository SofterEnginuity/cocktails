//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getCocktail)

function getCocktail(){
    const userInput = document.querySelector('input').value

const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${userInput}`// remove "vodka" and told it to search whatever the user puts in
      
fetch(url)
    .then(res => res.json())
    .then(data =>{
        console.log(data)

        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        
    })

}

