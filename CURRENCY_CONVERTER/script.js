// ==========================================
// CURRENCY API
// ==========================================

const API_URL =
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const FALLBACK_URL =
    "https://latest.currency-api.pages.dev/v1/currencies";


// ==========================================
// SELECT HTML ELEMENTS
// ==========================================

const dropdowns = document.querySelectorAll(".dropdown select");

const btn = document.querySelector("form button");

const fromCurr = document.querySelector(".from select");

const toCurr = document.querySelector(".to select");

const msg = document.querySelector(".msg");


// ==========================================
// CREATE CURRENCY OPTIONS
// ==========================================

for (let select of dropdowns) {

    for (let currCode in countryList) {

        let newOption = document.createElement("option");

        newOption.innerText = currCode;

        newOption.value = currCode;

        // Default FROM currency
        if (
            select.name === "from" &&
            currCode === "USD"
        ) {
            newOption.selected = true;
        }

        // Default TO currency
        if (
            select.name === "to" &&
            currCode === "INR"
        ) {
            newOption.selected = true;
        }

        select.append(newOption);
    }


    // Update flag when currency changes
    select.addEventListener("change", function (evt) {

        updateFlag(evt.target);

    });
}


// ==========================================
// UPDATE COUNTRY FLAG
// ==========================================

const updateFlag = (element) => {

    let currCode = element.value;

    let countryCode = countryList[currCode];

    let newSrc =
        `https://flagsapi.com/${countryCode}/flat/64.png`;

    let img =
        element.parentElement.querySelector("img");

    img.src = newSrc;
};


// ==========================================
// GET EXCHANGE RATE
// ==========================================

const updateExchangeRate = async () => {

    try {

        // Get amount
        let amount =
            document.querySelector(".amount input");

        let amtVal =
            parseFloat(amount.value);


        // Validate amount
        if (
            isNaN(amtVal) ||
            amtVal <= 0
        ) {

            amtVal = 1;

            amount.value = 1;
        }


        // Get currencies
        const from =
            fromCurr.value.toLowerCase();

        const to =
            toCurr.value.toLowerCase();


        // Same currency
        if (from === to) {

            msg.innerText =
                `${amtVal} ${fromCurr.value} = ${amtVal} ${toCurr.value}`;

            return;
        }


        // Show loading message
        msg.innerText =
            "Getting exchange rate...";


        // ==========================================
        // FIRST API
        // ==========================================

        let URL =
            `${API_URL}/${from}.json`;

        let response =
            await fetch(URL);


        // ==========================================
        // FALLBACK API
        // ==========================================

        if (!response.ok) {

            console.log(
                "Primary API failed. Trying fallback..."
            );

            URL =
                `${FALLBACK_URL}/${from}.json`;

            response =
                await fetch(URL);
        }


        // If both APIs fail
        if (!response.ok) {

            throw new Error(
                `API Error: ${response.status}`
            );
        }


        // Convert response to JSON
        const data =
            await response.json();


        console.log("API Data:", data);


        // ==========================================
        // GET RATE
        // ==========================================

        const rate =
            data[from]?.[to];


        if (
            rate === undefined ||
            rate === null
        ) {

            throw new Error(
                `Exchange rate not available for ${fromCurr.value} to ${toCurr.value}`
            );
        }


        // ==========================================
        // CALCULATE FINAL AMOUNT
        // ==========================================

        const finalAmount =
            (amtVal * rate).toFixed(2);


        // ==========================================
        // DISPLAY RESULT
        // ==========================================

        msg.innerText =
            `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;


    } catch (error) {

        console.error(
            "Currency API Error:",
            error
        );

        msg.innerText =
            "Unable to get exchange rate. Please try again.";
    }
};


// ==========================================
// BUTTON CLICK
// ==========================================

btn.addEventListener("click", function (evt) {

    evt.preventDefault();

    updateExchangeRate();

});


// ==========================================
// LOAD DEFAULT RATE
// ==========================================

window.addEventListener("load", function () {

    updateExchangeRate();

});