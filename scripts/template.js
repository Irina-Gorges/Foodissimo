function getMealsTemplate(i) {
    return `<div id="mealsContent${i}" class="mealsContainer">
  <img class="food_Photo" src="img/${meals[i].image}" alt="">
            <div id="info_Meal" class="infoMeal"><p id="name_Meal" class="nameMeal">${
                meals[i].name
            }</p><p id="price_Meal" class="priceMeal">${meals[i].price.toFixed(
        2
    )}&nbsp;€</p><p id="description_Meal" class="descriptionMeal">${
        meals[i].description
    }</p></div><button id="btn${i}" class="btn" onclick="addToCard(${i})">+</button></div>`;
}

function addToCardTemplate(i) {
    return `<div id="${
        meals[i].name
    }" class="info_MealW"><p id="name_Meal" class="nameMealW">${
        meals[i].name
    }</p><div id="calc"><button class="operator" onclick="calculatePrice("-")">-</button><div id="multiplier">1</div><button class="operator" onclick="calculatePrice("+")>+</button><p id="price_Meal" class="priceMealW">${meals[
        i
    ].price.toFixed(
        2
    )}&nbsp;€</p><button id="clear" onclick="removeFromCard(${i})">&#128465;</button></div></div>`;
}
