function init() {
    renderMeals();
}

function renderMeals() {
    const meals = document.getElementById("content");
    contentRef.innerHTML = "";
    for (let i = 0; i < meals.length; i++);
    contentRef.innerHTML += getMealsTemplate(i);
}
