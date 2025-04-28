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

function switchFunction(w, i, multiWert, priceWert) {
    let multiplierTemplateRef = document.getElementById(`multiplier${i}`);
    let priceTemplateRef = document.getElementById(`price_Meal${i}`);
    switch (w) {
        case "-":
            if (multiWert > 1) {
                saveToLocalStorage(
                    i,
                    (priceWert - meals[i].price).toFixed(2),
                    multiWert - 1
                );
            } else {
                removeFromCard(i);
            }

            break;

        case "+":
            saveToLocalStorage(
                i,
                (priceWert + meals[i].price).toFixed(2),
                multiWert + 1
            );
            break;

        default:
            multiplierTemplateRef.innerHTML = "";
            multiplierTemplateRef.innerHTML = 1;
            break;
    }
}

function totalPriceTemplate(totalPriceRef) {
    let totalPrice = 0;
    let localRef = [];
    for (let z = 0; z < localStorage.length; z++) {
        let localKeyRef = localStorage.key(z);
        localRef.push(JSON.parse(localStorage.getItem(localKeyRef)));
    }
    for (let i = 0; i < localRef.length; i++) {
        totalPrice += parseFloat(localRef[i][0]);
    }
    totalPriceRef.innerHTML = "";
    totalPriceRef.innerHTML =
        "Gesamtpreis: " +
        parseFloat(totalPrice).toFixed(2) +
        "&nbsp;€&nbsp;<button id='toPay' class='to_PayBtn' onclick='toPay()'>Bestellen</button>";
    let toPayRef = document.getElementById("toPayFinal");
    toPayRef.innerHTML = "";
}
