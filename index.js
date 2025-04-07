const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
];

// 1.Vypište do stránky všechna čísla.
document.getElementById("odpoved1").innerText = `Cisla pole su ${numbers}`;

// 2.Vypište do stránky druhé mocniny všech čísel.
const druheMocniny = numbers.map((cislo) => {
    return cislo ** 2
})

document.getElementById("odpoved2").innerText = `Druhe mocniny cisel su ${druheMocniny}`;

// 3.Vypište do stránky pouze záporná čísla.
const zaporneCisla = numbers.map((cislo) => {
    if (cislo < 0) {
        return cislo
    }
})
document.getElementById("odpoved3").innerText = `Zaporne cisla su ${zaporneCisla}`;

// 4.Vypište do stránky absolutní hodnotu všech čísel.
const absolutnaHodnotacisla = numbers.map((cislo) => {
    return Math.abs(cislo)
})
document.getElementById("odpoved4").innerText = `Absolutne hodnoty cisel su ${absolutnaHodnotacisla}`;

// 5.Vypište do stránky pouze sudá čísla.
const parneCisla = numbers.map((cislo) => {
    if (cislo % 2 === 0)
        return cislo
})
document.getElementById("odpoved5").innerText = `Parne cisla su ${parneCisla}`;

// 6.Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
const cisloDelitelne3 = numbers.map((cislo) => {
    if ((Math.abs(cislo)) % 3 === 0)
        return cislo
})
document.getElementById("odpoved6").innerText = `Cisla delitelne troma bezo zvysku su ${cisloDelitelne3}`;

// 7.Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.
const odCisla5 = numbers.map((cislo) => {
    return Math.abs(5 - cislo)
});

let vystup7 = "";
numbers.forEach((cislo, index) => {
    vystup7 += `Cislo ${cislo} je od cisla 5 vzdialene  ${odCisla5[index]} \n`
});
document.getElementById("odpoved7").innerText = vystup7;

// 8.Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.
const druheMocninyvzdialenosti = odCisla5.map((cislo) => {
    return cislo ** 2
})
document.getElementById("odpoved8").innerText = `Druhé mocnicny vzdáleností všech čísel od čísla 5 su ${druheMocninyvzdialenosti}`;

// 9.Spočítejte, kolik je v seznamu záporných čísel.
let pocet = 0
const pocetZapornychcisel = numbers.forEach((cislo) => {
    if (cislo < 0) {
        pocet++;
    }
})
document.getElementById("odpoved9").innerText = `V zozname je ${pocet} záporných čísel.`;

// 10.Spočítejte součet všech čísel v poli.
let sucet = 0
let sucetCisel = numbers.forEach((cislo) => {
    sucet += cislo;
})
document.getElementById("odpoved10").innerText = `Sucet vsetkych cisel je ${sucet}`;

// 11.Spočítejte průměr všech čísel v poli.
const priemer = sucet / numbers.length
document.getElementById("odpoved11").innerText = `Priemer vsetkych cisel je ${priemer}`;

// 12.Spočítejte součet všech kladných čísel v poli.
let sucetKladnychCisel = 0
const kladneCisla = numbers.forEach((cislo) => {
    if (cislo > 0) {
        return sucetKladnychCisel += cislo
    }
})
document.getElementById("odpoved12").innerText = `Sucet kladnych cisel je ${sucetKladnychCisel}`;



