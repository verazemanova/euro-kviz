# Design Guide – Euro kvíz

**Projekt:** Euro kvíz  
**Verze dokumentu:** 1.0  
**Stav:** Pracovní dokument

---

# 1. Účel dokumentu

Tento dokument definuje pravidla návrhu, vzhledu a chování webové aplikace Euro kvíz.

Jeho cílem je zajistit jednotný vývoj aplikace, konzistentní uživatelské rozhraní a jednoznačná pravidla pro budoucí rozšiřování funkcí.

Dokument slouží jako referenční materiál při návrhu nových funkcí i při implementaci aplikace.

---

# 2. Cíl aplikace

Euro kvíz je webová aplikace určená pro procvičování převodu eur na české koruny.

Primárním cílem aplikace je podpořit vytvoření početních návyků prostřednictvím opakování, jednoduchého ovládání a pozitivní zpětné vazby.

Aplikace není koncipována jako test znalostí, ale jako prostředek pro postupné osvojování dovednosti.

---

# 3. Cílová skupina

Aplikace je určena uživatelům bez omezení věku.

Předpokládá se zejména využití:

- začátečníky,
- žáky,
- studenty,
- dospělými,
- seniory.

Použití aplikace nevyžaduje žádné předchozí znalosti.

---

# 4. Základní principy návrhu

Při návrhu aplikace jsou uplatňovány následující principy:

- jednoduchost,
- přehlednost,
- konzistentní ovládání,
- minimální počet rušivých prvků,
- pozitivní motivace uživatele,
- krátké a srozumitelné texty.

Každá nová funkce musí být v souladu s těmito principy.

---

# 5. Uživatelské rozhraní

## 5.1 Rozvržení

Aplikace používá jednu hlavní kartu umístěnou uprostřed obrazovky.

Na jedné obrazovce je vždy pouze jeden hlavní úkol.

## 5.2 Dominantní prvek

Nejvýraznějším prvkem každé lekce je otázka.

Otázka musí být vizuálně dominantní vůči ostatním prvkům.

## 5.3 Ovládání

Na obrazovce je vždy pouze jedno hlavní tlačítko.

Jeho význam se mění podle aktuálního stavu aplikace (např. Ověřit, Další otázka, Nová lekce).

---

# 6. Grafický styl

Grafický styl aplikace je:

- klidný,
- jednoduchý,
- moderní,
- elegantní.

Používá se:

- světlé pozadí,
- bílá hlavní karta,
- modrá jako primární barva,
- zaoblené prvky,
- jemné stíny.

Animace jsou krátké a nenápadné.

---

# 7. Eurka

Eurka je průvodkyní aplikace.

Není součástí každé obrazovky.

Zobrazuje se pouze v situacích, kdy poskytuje uživateli přidanou hodnotu.

Typické situace:

- uvítání,
- tip,
- povzbuzení,
- gratulace,
- závěr lekce.

Eurka nikdy nehodnotí uživatele negativním způsobem.

## 7.1 Osobnost a způsob komunikace

Eurka působí jako laskavá, povzbudivá a přátelská průvodkyně.

Mluví přirozeně, jednoduše a srozumitelně. Její komunikace je neformální a osobní, ale nikdy není přehnaně infantilní.

Eurka uživatele oslovuje jako člověka, kterého dobře zná a kterému fandí. Vhodně používá oslovení „madre“, které je charakteristickým prvkem jejího způsobu komunikace.

### 7.1.1 Reakce na správnou odpověď

Při správné odpovědi Eurka uživatele pochválí a dá mu najevo radost z jeho úspěchu.

Pochvala:

- je krátká,
- je pozitivní,
- působí osobně,
- nesmí se opakovat dvakrát bezprostředně po sobě.

Eurka nepoužívá stále stejnou formulaci. Pochvaly se vybírají náhodně ze stanoveného seznamu.

### 7.1.2 Reakce na chybnou odpověď

Při chybné odpovědi Eurka uživatele nepřísně nehodnotí.

Reakce:

- nevyvolává pocit selhání,
- podporuje pokračování v tréninku,
- připomíná, že chyba je součástí učení,
- obsahuje správný výsledek příkladu.

Eurka uživatele nikdy nezesměšňuje ani nekritizuje.

Povzbuzení se vybírají náhodně ze stanoveného seznamu a nesmí se opakovat dvakrát bezprostředně po sobě.

### 7.1.3 Styl komunikace

Eurka používá:

- krátké věty,
- běžný a přirozený jazyk,
- pozitivní formulace,
- přiměřené používání emoji,
- osobní a povzbudivý tón.

Eurka nepoužívá:

- odborný nebo příliš formální jazyk,
- dlouhá vysvětlení tam, kde stačí krátká reakce,
- ironii namířenou proti uživateli,
- zesměšňování chyb,
- negativní hodnocení uživatele,
- opakování stejné reakce dvakrát bezprostředně po sobě.

### 7.1.4 Charakter Eurky

Eurka je:

- laskavá,
- povzbudivá,
- trpělivá,
- hravá,
- osobní,
- optimistická.

Jejím hlavním úkolem není pouze sdělovat výsledek, ale podporovat uživatele v pravidelném procvičování.
---

# 8. Struktura lekce

Jedna lekce obsahuje šest příkladů.

Každý příklad obsahuje:

1. pořadí příkladu,
2. otázku,
3. vstupní pole,
4. hlavní tlačítko,
5. zpětnou vazbu.

Po dokončení lekce se zobrazí souhrn výsledků.

---

# 9. Pravidla tréninku

V první verzi aplikace:

- kurz je pevně nastaven na 25 Kč za 1 €,
- používají se hodnoty 1–20 €,
- stejná hodnota se může objevit opakovaně,
- chybně zodpovězené příklady mohou být zařazeny znovu.

Další úrovně obtížnosti budou přidány v pozdějších verzích.

## 9.1 Opakování chybně zodpovězených příkladů

Od verze 0.6 se chybně zodpovězené příklady zařazují do opakovací části lekce.

Každá lekce obsahuje šest základních příkladů. Po dokončení základní části následuje opakovací část, pokud uživatel alespoň jeden základní příklad zodpověděl chybně.

Každý chybně zodpovězený příklad se v opakovací části zobrazí právě jednou.

Opakovací příklady se zobrazují ve stejném pořadí, v jakém byly chybně zodpovězeny v základní části.

Správná odpověď na opakovaný příklad se zaznamená, ale nemění počet správných odpovědí ani výslednou odměnu za lekci.

Pokud uživatel opakovaný příklad zodpoví znovu chybně, příklad se v rámci stejné lekce již znovu nezobrazí.

Výsledek lekce se určuje pouze podle počtu správně zodpovězených příkladů z původních šesti základních příkladů.

Pokud byly všechny základní příklady zodpovězeny správně, opakovací část se přeskočí.

---

# 10. Přístup k vývoji

Vývoj aplikace probíhá iterativně.

Každá nová funkce prochází následujícími kroky:

1. návrh,
2. schválení návrhu,
3. implementace,
4. testování,
5. zápis do vývojového deníku.

Funkce se implementují po malých samostatně otestovatelných celcích.

---

# 11. Související dokumenty

- README.md
- TODO.md
- vyvojovy-denik.md
- rozhodnuti.md