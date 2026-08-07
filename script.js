// ======================================
// Euro kvíz
// Verze 0.4
// ======================================

// --------------------------------------
// Nastavení aplikace
// --------------------------------------

// Kurz eura
const KURZ_EURA = 25;

// Nejvyšší hodnota v začátečnickém režimu
const MAX_EUR = 20;

// Správná odpověď aktuální otázky
let spravnaOdpoved = 0;

// Aktuální částka v eurech
let aktualniEura = 0;

// Počet příkladů v jedné lekci
const POCET_PRIKLADU = 6;

// Aktuální číslo příkladu
let cisloPrikladu = 1;

// Počet správných odpovědí
let pocetSpravnych = 0;

// Čekáme na další otázku?
let cekameNaDalsiOtazku = false;

// Pochvaly Eurky
const POCHVALY = [

    "🎉 Výborně, seš šikulka!",
    "🌸 Paráda, jedeš bomby madre!",
    "🌟 Skvělá práce, jen tak dál madre!",
    "💙 Tohle ti opravdu jde - jak to, že to dřív nešlo?",
    "😊 Mám z tebe radost!",
    "👏 Jen tak dál madre!"

];

// Poslední zobrazená pochvala
let posledniPochvala = "";

// Povzbuzení Eurky
const POVZBUZENI = [

    "😊 To vůbec nevadí.",
    "🌸 Každá chyba tě posouvá dál.",
    "💙 Příště to určitě zvládneš.",
    "🌟 Zkus to znovu, věřím ti!",
    "👏 Nevzdávej to, jde ti to čím dál lépe.",
    "😊 Každý trénink se počítá."

];

// Poslední zobrazené povzbuzení
let posledniPovzbuzeni = "";


// --------------------------------------
// Vytvoří novou otázku
// --------------------------------------

function vytvorOtazku() {

    // Aktualizujeme průběh lekce
    document.getElementById("prubeh").textContent =
        "Příklad " + cisloPrikladu + " z " + POCET_PRIKLADU;
    
    // Náhodná hodnota od 1 do 20
    aktualniEura = Math.floor(Math.random() * MAX_EUR) + 1;

    // Spočítáme správnou odpověď
    spravnaOdpoved = aktualniEura * KURZ_EURA;

    // Zobrazíme otázku
    const otazka = document.getElementById("otazka");
    otazka.textContent = "Kolik je " + aktualniEura + " €?";

    // Vymažeme předchozí odpověď
    document.getElementById("odpoved").value = "";

    // Vymažeme předchozí zprávu
    document.getElementById("zprava").innerHTML = "";
}

// --------------------------------------
// Vybere náhodný text bez opakování
// --------------------------------------

function vyberNahodnyText(seznam, posledniText) {

    let text;

    do {

        text = seznam[Math.floor(Math.random() * seznam.length)];

    } while (text === posledniText);

    return text;

}

// --------------------------------------
// Vybere náhodnou pochvalu
// --------------------------------------

function vyberPochvalu() {

    const pochvala =
    vyberNahodnyText(POCHVALY, posledniPochvala);

    posledniPochvala = pochvala;

    return pochvala;

}

// --------------------------------------
// Vybere povzbuzení
// --------------------------------------

function vyberPovzbuzeni() {

    const povzbuzeni =
        vyberNahodnyText(POVZBUZENI, posledniPovzbuzeni);

    posledniPovzbuzeni = povzbuzeni;

    return povzbuzeni;

}

// --------------------------------------
// Vrátí odměnu za výsledek lekce
// --------------------------------------

function ziskejOdmenu() {

    if (pocetSpravnych === 6) {

        return {

            ikona: "🥇",
            nazev: "Zlatá medaile",
            zprava: "🌟 Fantastický výkon, madre! Dnes ti to opravdu sedlo!"

        };

    }

    if (pocetSpravnych === 5) {

        return {

            ikona: "🥈",
            nazev: "Stříbrná medaile",
            zprava: "💙 Skvělá práce, madre! Už jsi opravdu blízko zlaté medaili."

        };

    }

    if (pocetSpravnych === 4) {

        return {

            ikona: "🥉",
            nazev: "Bronzová medaile",
            zprava: "🌸 Mám z tebe radost, madre! Děláš krásné pokroky."

        };

    }

    if (pocetSpravnych >= 1) {

        return {

            ikona: "🌱",
            nazev: "Pokračuj v tréninku",
            zprava: "😊 Každý trénink se počítá, madre. Jen tak dál!"

        };

    }

    return {

        ikona: "💙",
        nazev: "Nevzdávej to",
        zprava: "🌱 Nevadí, madre. Důležité je, že trénuješ. Příště to zvládneš!"

    };

}

// --------------------------------------
// Ukončí lekci
// --------------------------------------

function ukoncitLekci() {

    const odmena = ziskejOdmenu();

    document.getElementById("otazka").innerHTML =
        "🎉 Lekce dokončena!<br><br>" +
        "Správně: " + pocetSpravnych + " z " + POCET_PRIKLADU +
        "<br><br>" +
        odmena.ikona + " <strong>" + odmena.nazev + "</strong><br>" +
        odmena.zprava;

    document.getElementById("prubeh").textContent = "";

    document.querySelector(".odpoved").style.display = "none";

    document.getElementById("tlacitko").style.display = "none";

    document.getElementById("novaLekce").style.display = "inline-block";

    document.getElementById("zprava").innerHTML = "";

}

// --------------------------------------
// Spustí novou lekci
// --------------------------------------

function novaLekce() {

    cisloPrikladu = 1;

    pocetSpravnych = 0;

    cekameNaDalsiOtazku = false;

    document.querySelector(".odpoved").style.display = "flex";

    document.getElementById("tlacitko").style.display = "inline-block";

    document.getElementById("novaLekce").style.display = "none";

    document.getElementById("tlacitko").textContent = "Ověřit";

    document.getElementById("zprava").innerHTML = "";

    vytvorOtazku();

}

// --------------------------------------
// Zkontroluje odpověď uživatele
// --------------------------------------

function zkontrolujOdpoved() {

    // Kliknutí na "Další otázka"
    if (cekameNaDalsiOtazku) {

        cekameNaDalsiOtazku = false;

        if (cisloPrikladu >= POCET_PRIKLADU) {
            ukoncitLekci();
            return;
        }

        cisloPrikladu++;
        vytvorOtazku();

        document.getElementById("tlacitko").textContent = "Ověřit";

        return;
    }

    const odpoved = Number(document.getElementById("odpoved").value);

    const zprava = document.getElementById("zprava");
    const tlacitko = document.getElementById("tlacitko");

    if (odpoved === spravnaOdpoved) {

        pocetSpravnych++;

        console.log("Počet správných:", pocetSpravnych);

        const pochvala = vyberPochvalu();

        zprava.innerHTML =
            "<strong>" + pochvala + "</strong><br><br>" +
            aktualniEura + " × " + KURZ_EURA + " = " + spravnaOdpoved + " Kč";

        tlacitko.textContent = "Další otázka";
        cekameNaDalsiOtazku = true;

    } else {

        const povzbuzeni = vyberPovzbuzeni();

        zprava.innerHTML =
        "<strong>" + povzbuzeni + "</strong><br><br>" +
        aktualniEura + " × " + KURZ_EURA + " = " + spravnaOdpoved + " Kč";

        tlacitko.textContent = "Další otázka";
        cekameNaDalsiOtazku = true;
    }

}


// --------------------------------------
// Spuštění aplikace
// --------------------------------------

vytvorOtazku();

document
    .getElementById("tlacitko")
    .addEventListener("click", zkontrolujOdpoved);

    document
    .getElementById("novaLekce")
    .addEventListener("click", novaLekce);