// wird beim laden der Seite ausgeführt
function init() {
    renderMeals();
    renderToCard();
}

//  rendert den food_Container mit Daten aus dem Array
function renderMeals() {
    const contentRef = document.getElementById("food_Container");
    contentRef.innerHTML = "";
    for (let i = 0; i < meals.length; i++) {
        contentRef.innerHTML += getMealsTemplate(i);
    }
}

//  Fügt das ausgewählte Produkt dem Warenkorb hinzu
function addToCard(i) {
    let cardContRef = document.getElementById("basket");
    if (document.getElementById(`${meals[i].name}`)) {
        calculatePrice("+", i);
    } else {
        saveToLocalStorage(i, meals[i].price, 1);
        calculateTotalPrice();
        renderToCard();
    }
}

//  Löscht das ausgewählte Produkt aus dem Warenkorb (LocalStorage) raus
function removeFromCard(i) {
    let deleteRef = document.getElementById(`${meals[i].name}`);
    if (deleteRef) {
        deleteRef.remove();
        localStorage.removeItem(i);
        renderToCard();
        calculateTotalPrice();
    }
}

function loadLocalData(i) {
    return JSON.parse(localStorage.getItem(i));
}

function updateLocalData(i, newPrice, newMultiplier) {
    saveToLocalStorage(i, newPrice.toFixed(2), newMultiplier);
}

function handleDecrease(i, priceWert, multiWert) {
    if (multiWert > 1) {
        updateLocalData(i, priceWert - meals[i].price, multiWert - 1);
    } else {
        removeFromCard(i);
    }
    calculateTotalPrice();
    renderToCard();
}

function handleIncrease(i, priceWert, multiWert) {
    updateLocalData(i, priceWert + meals[i].price, multiWert + 1);
    calculateTotalPrice();
    renderToCard();
}

function resetMultiplier(i) {
    let multiplierTemplateRef = document.getElementById(`multiplier${i}`);
    multiplierTemplateRef.innerHTML = 1;
    calculateTotalPrice();
    renderToCard();
}

function calculatePrice(w, i) {
    let localRef = loadLocalData(i);
    let priceWert = parseFloat(localRef[0]);
    let multiWert = parseInt(localRef[1]);

    switch (w) {
        case "-":
            handleDecrease(i, priceWert, multiWert);
            break;
        case "+":
            handleIncrease(i, priceWert, multiWert);
            break;
        default:
            resetMultiplier(i);
            break;
    }
}

function getLocalStorageData() {
    let localRef = [];
    for (let z = 0; z < localStorage.length; z++) {
        let localKeyRef = localStorage.key(z);
        localRef.push(JSON.parse(localStorage.getItem(localKeyRef)));
    }
    return localRef;
}

function calculateTotalFromData(localRef) {
    let totalPrice = 0;
    for (let i = 0; i < localRef.length; i++) {
        totalPrice += parseFloat(localRef[i][0]);
    }
    return totalPrice;
}

function updateTotalPriceUI(totalPrice) {
    let totalPriceRef = document.getElementById("totalPrice");
    totalPriceRef.innerHTML =
        "Gesamtpreis: " +
        parseFloat(totalPrice).toFixed(2) +
        "&nbsp;€&nbsp;<button id='toPay' class='to_PayBtn' onclick='toPay()'>Bestellen</button>";

    let toPayRef = document.getElementById("toPayFinal");
    if (toPayRef) {
        toPayRef.innerHTML = "";
    }
}

function calculateTotalPrice() {
    let localRef = getLocalStorageData();
    let totalPrice = calculateTotalFromData(localRef);
    updateTotalPriceUI(totalPrice);
}

function saveToLocalStorage(i, price, multiplier) {
    if (localStorage) {
        localStorage.setItem(i, JSON.stringify([price, multiplier]));
    } else {
        localStorage.setItem(i, JSON.stringify([price, multiplier]));
    }
}

function renderToCard() {
    let cardContRef = document.getElementById("basket");
    cardContRef.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
        let localKeyRef = localStorage.key(i);
        cardContRef.innerHTML += addToCardTemplate(localKeyRef);
    }
}

function toPay() {
    let totalPriceRef = document.getElementById("totalPrice");
    let toPayRef = document.getElementById("toPayFinal");
    if (confirm("Drücke ok für Bestellung abschliessen!")) {
        if (localStorage.length != 0) {
            localStorage.clear();
            calculateTotalPrice();
            renderToCard();
        }
    }
}

function toggleCloseEvent() {
    let toggleRef = document.getElementById("basket_Wrapper");
    toggleRef.classList.toggle("d_none");

    let contentRef = document.getElementById("content");
    contentRef.classList.toggle("d_none");
}
