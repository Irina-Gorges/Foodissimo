function getMealsTemplate(i) {
    return `<div id="mealscontent${i}" class="mealscontainer">
            <img src="img/${meals[i].image}" alt=""> 
            <p id="name_meal${meals[i].name}"></p><p id="price_meal${meals[i].price}"></p><span id="description_meal${meal[i].description}"></span>
        </div>`;
}
