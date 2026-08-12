# 💶 Euro kvíz

Euro kvíz je soukromá webová aplikace pro procvičování převodu eur na české koruny.

Cílem projektu je vytvořit jednoduchou, přehlednou a motivační aplikaci pro pravidelný trénink převodu měn. Součástí aplikace je virtuální průvodkyně Eurka, která uživatele během tréninku podporuje pochvalami a povzbuzením.

## Stav projektu

🚀 Veřejná verze 0.5.0

Aplikace je zveřejněna na GitHubu a dostupná prostřednictvím GitHub Pages.

## Použitý kurz

Aplikace v současné verzi používá pevný kurz:

**1 € = 25 Kč**

Kurz je zvolen záměrně pro snadnější procvičování početních dovedností. Nejde o aktuální směnný kurz.

## Aktuální funkce

- převod eur na české koruny,
- šest příkladů v jedné lekci,
- hodnoty od 1 do 20 €,
- automatické vyhodnocení odpovědí,
- zobrazení správného výsledku,
- zobrazení výsledku po dokončení lekce,
- spuštění nové lekce bez obnovení stránky,
- náhodné pochvaly Eurky,
- náhodná povzbuzení Eurky,
- zabránění bezprostřednímu opakování stejné pochvaly,
- zabránění bezprostřednímu opakování stejného povzbuzení,
- medaile podle výsledku lekce.

## Odměny za výsledek lekce

| Správných odpovědí | Odměna | Zpráva |
| -----------------: | ------- | ------- |
| 6 | 🥇 Zlatá medaile | Fantastický výkon! |
| 5 | 🥈 Stříbrná medaile | Skvělá práce! |
| 4 | 🥉 Bronzová medaile | Děláš pokroky! |
| 1–3 | 🌱 Povzbuzení | Každý trénink se počítá. |
| 0 | 💙 Povzbuzení | Nevadí. Příště to zvládneš. |

## Plánovaný vývoj

### Verze 0.6

- návrh pravidel pro opakování chybně zodpovězených příkladů,
- opakované zařazování chybně zodpovězených příkladů do tréninku,
- tipy od Eurky,
- první grafická podoba Eurky,
- statistiky více lekcí,
- více obtížností,
- vylepšení grafického vzhledu.

## Použité technologie

- HTML5
- CSS3
- JavaScript (ES6)
- Git
- GitHub
- GitHub Pages

## Struktura projektu

```text
Euro-kviz/
├── design/
│   ├── design-guide.md
│   ├── rozhodnuti.md
│   ├── screens.md
│   └── vyvojovy-denik.md
├── CHANGELOG.md
├── TODO.md
├── README.md
├── index.html
├── script.js
└── style.css