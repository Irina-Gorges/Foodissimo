function init() {
    renderMeals();
    renderToCard();
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
        calculatePrice("+", i);
    } else {
        saveToLocalStorage(i, meals[i].price, 1);
        calculateTotalPrice();
        renderToCard();
    }
}

function removeFromCard(i) {
    let deleteRef = document.getElementById(`${meals[i].name}`);
    if (deleteRef) {
        deleteRef.remove();
        localStorage.removeItem(i);
        renderToCard();
        calculateTotalPrice();
    }
}

function calculatePrice(w, i) {
    let localRef = JSON.parse(localStorage.getItem(i));
    let multiWert = parseInt(localRef[1]);
    let priceWert = parseFloat(localRef[0]);

    switchFunction(w, i, multiWert, priceWert);
    calculateTotalPrice();
    renderToCard();
    // switch (w) {
    //     case "-":
    //         if (multiWert > 1) {
    //             saveToLocalStorage(
    //                 i,
    //                 (priceWert - meals[i].price).toFixed(2),
    //                 multiWert - 1
    //             );
    //             calculateTotalPrice();
    //             renderToCard();
    //         } else {
    //             removeFromCard(i);
    //             calculateTotalPrice();
    //             renderToCard();
    //         }

    //         break;

    //     case "+":
    //         saveToLocalStorage(
    //             i,
    //             (priceWert + meals[i].price).toFixed(2),
    //             multiWert + 1
    //         );
    //         calculateTotalPrice();
    //         renderToCard();
    //         break;

    //     default:
    //         multiplierTemplateRef.innerHTML = "";
    //         multiplierTemplateRef.innerHTML = 1;
    //         calculateTotalPrice();
    //         renderToCard();
    //         break;
    // }
}

function calculateTotalPrice() {
    let totalPriceRef = document.getElementById("totalPrice");
    // let classMealPriceRef = document.getElementsByClassName("priceMealW");
    // let totalPrice = 0;
    // let localRef = [];
    // for (let z = 0; z < localStorage.length; z++) {
    //     let localKeyRef = localStorage.key(z);
    //     localRef.push(JSON.parse(localStorage.getItem(localKeyRef)));
    // }
    // for (let i = 0; i < localRef.length; i++) {
    //     totalPrice += parseFloat(localRef[i][0]);
    // }
    // totalPriceRef.innerHTML = "";
    // totalPriceRef.innerHTML =
    //     "Gesamtpreis: " +
    //     parseFloat(totalPrice).toFixed(2) +
    //     "&nbsp;€&nbsp;<button id='toPay' class='to_PayBtn' onclick='toPay()'>Bestellen</button>";
    // let toPayRef = document.getElementById("toPayFinal");
    // toPayRef.innerHTML = "";
    totalPriceTemplate(totalPriceRef);
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
    if (localStorage.length != 0) {
        localStorage.clear();
        calculateTotalPrice();
        renderToCard();
    }
}

function toggleCloseEvent() {
    let toggleRef = document.getElementById("basket_Wrapper");
    toggleRef.classList.toggle("d_none");

    let contentRef = document.getElementById("content");
    contentRef.classList.toggle("d_none");
}
