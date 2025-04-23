function getMealsTemplate(i) {
  return `<div id="mealscontent${i}" class="mealscontainer">
            <img class="food_photo" src="img/${
              meals[i].image
            }" alt=""><div id="info_meal"><p id="name_meal" class="namemeal">${
    meals[i].name
  }</p><p id="price_meal">${meals[i].price.toFixed(
    2
  )}&nbsp;€</p><span id="description_meal">${meals[i].description}</span></div>
          
        <button id="btn${i}" class="btn">+</button></div>`;
}
