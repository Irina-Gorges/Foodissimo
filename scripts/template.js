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
    let localRef = JSON.parse(localStorage.getItem(i));
    let multiWert = parseInt(localRef[1]);
    let priceWert = parseFloat(localRef[0]);
    return `<div id="${
        meals[i].name
    }" class="info_MealW"><p id="name_Meal" class="nameMealW">${
        meals[i].name
    }</p><div id="calc"><button class="operator" onclick="calculatePrice('-', ${i})">-</button><div id="multiplier${i}">${multiWert}</div><button class="operator" onclick="calculatePrice('+', ${i})">+</button><p id="price_Meal${i}" class="priceMealW">${priceWert.toFixed(
        2
    )}&nbsp;€</p><button id="clear" onclick="removeFromCard(${i})">&#128465;</button></div></div>`;
}
