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