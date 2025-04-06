const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
];

// 1.Vypište do stránky všechna čísla.
document.body.innerHTML += `Cisla pole su ${numbers} <br>`

// 2.Vypište do stránky druhé mocniny všech čísel.
const druheMocniny = numbers.map((cislo) => {
    return cislo ** 2
})

document.body.innerHTML += `Druhe mocniny cisel su ${druheMocniny} <br>`

// 3.Vypište do stránky pouze záporná čísla.
const zaporneCisla = numbers.map((cislo) => {
    if (cislo < 0) {
        return cislo
    }

})
document.body.innerHTML += `Zaporne cisla su ${zaporneCisla} <br>`

// 4.Vypište do stránky absolutní hodnotu všech čísel.
const absolutnaHodnotacisla = numbers.map((cislo) => {
    return Math.abs(cislo)

})
document.body.innerHTML += `Absolutne hodnoty cisel su ${absolutnaHodnotacisla} <br>`

// 5.Vypište do stránky pouze sudá čísla.
const parneCisla = numbers.map((cislo) => {
    if (cislo % 2 === 0)
        return cislo
})
document.body.innerHTML += `Parne cisla su ${parneCisla} <br>`

// 6.Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
const cisloDelitelne3 = numbers.map((cislo) => {
    if ((Math.abs(cislo)) % 3 === 0)
        return cislo
})
document.body.innerHTML += `Cisla delitelne troma bezo zvysku su ${cisloDelitelne3} <br>`

// 7.Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.
const odCisla5 = numbers.map((cislo) => {
    return Math.abs(5 - cislo)
});

numbers.forEach((cislo, index) => {
    document.body.innerHTML += `Cislo ${cislo} je od cisla 5 vzdialene  ${odCisla5[index]} <br>`
});

// 8.Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.
const druheMocninyvzdialenosti = odCisla5.map((cislo) => {
    return cislo ** 2
})

document.body.innerHTML += `Druhé mocnicny vzdáleností všech čísel od čísla 5 su ${druheMocninyvzdialenosti} <br>`

// 9.Spočítejte, kolik je v seznamu záporných čísel.

let pocet = 0
const pocetZapornychcisel = numbers.forEach((cislo) => {
    if (cislo < 0) {
        pocet++;
    }
})
document.body.innerHTML += `V zozname je ${pocet} záporných čísel. <br>`;

// 10.Spočítejte součet všech čísel v poli.

let sucet = 0
let sucetCisel = numbers.forEach((cislo) => {
    sucet += cislo;
})
document.body.innerHTML += `Sucet vsetkych cisel je ${sucet}  <br>`;

// 11.Spočítejte průměr všech čísel v poli.
const priemer = sucet / numbers.length

document.body.innerHTML += `Priemer vsetkych cisel je ${priemer}  <br>`;

// 12.Spočítejte součet všech kladných čísel v poli.
let sucetKladnychCisel = 0
const kladneCisla = numbers.forEach((cislo) => {
    if (cislo > 0) {
        return sucetKladnychCisel += cislo
    }
})
document.body.innerHTML += `Sucet kladnych cisel je ${sucetKladnychCisel}  <br>`;