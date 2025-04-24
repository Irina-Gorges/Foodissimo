function getMealsTemplate(i) {
  return `<div id="mealscontent${i}" class="mealscontainer">
  <img class="food_photo" src="img/${meals[i].image}" alt="">
            <div id="info_meal" clas="infomeal"><p id="name_meal" class="namemeal">${
              meals[i].name
            }</p><p id="price_meal" class="pricemeal">${meals[
    i
  ].price.toFixed(2)}&nbsp;€</p><p id="description_meal" class="descriptionmeal">${
    meals[i].description
  }</p></div><button id="btn${i}" class="btn" onklick="addToCart">+</button></div>`;
}


