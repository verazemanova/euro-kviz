# Vývojový deník

---

# Verze 0.1

## Dokončeno

- založen projekt Euro kvíz,
- vytvořeny soubory `index.html`, `style.css` a `script.js`,
- aplikace zobrazí náhodnou otázku (1–20 €),
- uživatel může zadat odpověď,
- aplikace zkontroluje výsledek.

---

# Verze 0.2

## Dokončeno

- zobrazuje se správný výpočet,
- připravena struktura projektu,
- vytvořena projektová dokumentace,
- vytvořen Design Guide,
- navrženy obrazovky aplikace.

---

# Verze 0.3

## Dokončeno

- lekce obsahuje 6 příkladů,
- zobrazuje se průběh lekce,
- tlačítko se přepíná mezi „Ověřit“ a „Další otázka“,
- lekce se ukončí po šestém příkladu,
- začalo počítání správných odpovědí,
- vytvořen první Git repozitář,
- vytvořen první Git commit.

## Rozpracováno

- zobrazení statistik po skončení lekce,
- refaktoring JavaScriptu,
- možnost spustit novou lekci.

### Doplněno po commitu

- vytvořena funkce `ukoncitLekci()`,
- vytvořena funkce `novaLekce()`,
- přidáno tlačítko „Nová lekce“,
- dokončen celý cyklus jedné lekce,
- proveden první refaktoring JavaScriptu.

# Verze 0.4

## Dokončené funkce

- Dokončen základní průběh lekce.
- Přidána funkce `ukoncitLekci()`.
- Přidána funkce `novaLekce()`.
- Přidáno tlačítko „Nová lekce“.
- Přidána funkce `vyberNahodnyText()`.
- Přidána funkce `vyberPochvalu()`.
- Přidána funkce `vyberPovzbuzeni()`.
- Přidány náhodné pochvaly Eurky.
- Přidána náhodná povzbuzení Eurky.
- Zabráněno opakování stejné pochvaly dvakrát po sobě.
- Zabráněno opakování stejného povzbuzení dvakrát po sobě.

## Opravy

- Opravena logika přechodu mezi otázkami.
- Opravena logika ukončení lekce.
- Opravena chyba `Unexpected end of input`.

## Stav projektu

Projekt obsahuje první plně funkční verzi jedné lekce. Uživatel může absolvovat celou lekci, zobrazit výsledek, zahájit novou lekci a během tréninku dostává náhodné pochvaly a povzbuzení.

# Verze 0.5

## Dokončené funkce

- Přidána funkce `ziskejOdmenu()`.
- Přidány medaile za výsledek lekce.
- Přidána motivační zpráva podle dosaženého výsledku.
- Oddělena logika výpočtu odměny od zobrazení výsledku.

## Stav projektu

Aplikace nyní obsahuje kompletní průběh jedné lekce včetně motivačního systému a odměn za dosažený výsledek.