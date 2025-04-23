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

// Optional: Gerichte Slider hinzufügen
// Funktion zum Essen zum Warenkorb hinzufügen
// Funktion zum Essen aus dem Warenkorb entfernen
// Funktion zum Essen im Warenkorb anzeigen
// Funktion zum Essen im Warenkorb leeren
// Funktion zum Essen im Warenkorb preis berechnen
// Funktion zum Essen im Warenkorb preis anzeigen
// Optional: Lieferkosten berechnen
