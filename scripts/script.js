function init() {
    renderMeals();
}

function renderMeals() {
    const contentRef = document.getElementById("food_Container");
    contentRef.innerHTML = "";
    for (let i = 0; i < meals.length; i++) {
        contentRef.innerHTML += getMealsTemplate(i);
    }
}

function addToCard(i) {
    let cardContRef = document.getElementById("basket");
    if (document.getElementById(`${meals[i].name}`)) {
    } else {
        cardContRef.innerHTML += addToCardTemplate(i);
    }
}

function removeFromCard(i) {
    let deleteRef = document.getElementById(`${meals[i].name}`);
    if (deleteRef) {
        deleteRef.remove();
    }
}

function calculatePrice(w, i) {
    switch (w) {
        case "-":
            document.getElementById(`${meals[i].price}`) - 1;
            break;

        case "+":
            document.getElementById(`${meals[i].price}`) + 1;
            break;

        default:
            document.getElementById(`${meals[i].price}`);
            break;
    }
}
// Optional: Gerichte Slider hinzufügen

// Funktion zum Essen aus dem Warenkorb entfernen

// Funktion zum Essen im Warenkorb leeren
// Funktion zum Essen im Warenkorb preis berechnen
// Funktion zum Essen im Warenkorb preis anzeigen
// Optional: Lieferkosten berechnen
