const currencyFirstEl = document.getElementById("currency-first");

const worthFirstEl = document.getElementById("worth-first");

const currencySecondEl = document.getElementById("currency-second");

const worthSecondEl = document.getElementById("worth-second")

const exchnageRateEl = document.getElementById("exchange-rate")

updateRate()

function updateRate(){
fetch(`https://v6.exchangerate-api.com/v6/8b080a4dd01ae8e132aaff0a/latest/${currencyFirstEl.value}`)
.then((res)=>res.json())
.then((data)=>{const rate = data.conversion_rates[currencySecondEl.value]
console.log(rate);
 exchnageRateEl.innerText = `1 ${currencyFirstEl.value}= 
 ${rate + " " + currencySecondEl.value}`;
 worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2)
});
}
currencyFirstEl.addEventListener("change", updateRate)

currencySecondEl.addEventListener("change", updateRate)

worthFirstEl.addEventListener("change", updateRate)



