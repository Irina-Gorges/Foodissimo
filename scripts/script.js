function init() {
    renderMeals();
}

function renderMeals() {
    const contentRef = document.getElementById("food_container");
    contentRef.innerHTML = "";
    for (let i = 0; i < meals.length; i++) {
        contentRef.innerHTML += getMealsTemplate(i);
    }
}
