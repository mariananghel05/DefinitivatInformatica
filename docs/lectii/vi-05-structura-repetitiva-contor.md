# Structura repetitivă cu contor („repetă de n ori")

> **Clasa a VI-a · domeniul Algoritmi · modulele 3–4.** A treia structură fundamentală, în varianta ei
> cea mai intuitivă: repetarea de un număr **cunoscut** de ori. Competențe specifice vizate: 2.1, 2.2.

## 1. Lecția (teorie)

**Problema care naște structura** (continuarea directă a animațiilor): pentru o mișcare fluidă am scris
același bloc „mergi 5 pași" de 20 de ori. Obositor, urât, greu de modificat. Soluția:

> **Structura repetitivă cu contor**: „**repetă de n ori** { pașii }" — pașii dintre acolade se execută
> exact de `n` ori, unul după altul.

În Scratch: blocul **„repetă de 10 ori"** (formă de C, ca și decizia — înăuntru stau pașii repetați).

```text
când se dă click pe steagul verde
repetă de 4 ori
    mergi 100 de pași
    rotește-te 90 de grade      ← ce desenează acest script? (un pătrat!)
```

Puncte-cheie:
- ce e **în interiorul** blocului se repetă; ce e **după** bloc se execută o singură dată, la final;
- numărul de repetări se stabilește **înainte** de a începe repetarea;
- repetițiile pot fi **numărate** cu o variabilă-contor afișată pe scenă (puntea spre clasa a VII-a).

**Aplicația-vedetă a lecției: desenarea figurilor geometrice** cu creionul Scratch — pătrat (4 × 90°),
triunghi (3 × 120°), hexagon (6 × 60°): geometrie + informatică într-un singur exercițiu.

## 2. Exerciții (cu metodica aplicabilă)

**Exercițiul 1 — „Scriptul umflat"** *(problematizare)*
Elevii primesc scriptul cu 8 perechi identice de blocuri și sarcina „faceți-l mai scurt fără să
schimbe comportamentul". *De ce așa:* nevoia structurii se simte pe propriul disconfort; „mai scurt și
la fel" este chiar definiția refactorizării — la nivel de clasa a VI-a.

**Exercițiul 2 — Pătratul și frații lui** *(exercițiu dirijat + descoperire)*
Se desenează pătratul împreună; apoi elevii deduc singuri triunghiul și hexagonul (câte repetări? ce
unghi?). *De ce așa:* variația parametrilor pe un model înțeles e descoperire dirijată în forma cea mai
curată; corelarea cu geometria (suma unghiurilor exterioare = 360°) e bonusul interdisciplinar.

**Exercițiul 3 — „Câte X-uri?"** *(citire de program)*
Fișă: scripturi scurte cu repetiții („repetă de 3 ori { spune «X», spune «Y» }") — ce și de câte ori se
afișează? *De ce așa:* urmărirea execuției cu repetiții e deprinderea pe care liceul o va cere constant;
începe aici, pe cazuri de 3–4 repetări.

**Exercițiul 4 — Dansul robotului** *(mini-proiect)*
O coregrafie: secvență de mișcări repetată de n ori, cu sunet. *De ce așa:* consolidare motivantă;
cerința „schimbă n și arată diferența" verifică înțelegerea rolului contorului.

## 3. Particularități

- **Greșeala tipică #1:** blocuri puse **după** „repetă" în loc de **înăuntru** — comportamentul diferă
  vizibil; exercițiul de citire o vânează explicit.
- **„Repetă la nesfârșit":** Scratch are și acest bloc; elevii îl descoperă singuri. Nu se interzice —
  se numește (repetare infinită, bună pentru animații continue) și se separă de cea cu contor.
- **Legătura cu înmulțirea:** „de 4 ori câte 3 pași" — elevii slabi la matematică beneficiază de
  vizualizarea repetării; corelare utilă, nu forțată.
- **Evaluare potrivită:** un desen-figură nou (pentagon) ca probă practică + 2 itemi de citire de
  program; ambele verifică interiorul vs. exteriorul blocului.

## Legături

- Teoria de examen (structura repetitivă): [Algoritmi](/stiintific/01-algoritmi); versiunea C++ (`for`)
  vine la [clasa a VII-a](/lectii/#clasa-a-vii-a).
- Lecția anterioară: [Animații grafice](/lectii/vi-04-animatii-grafice) ·
  Lecția următoare: [Structuri repetitive condiționate](/lectii/vi-06-repetitive-conditionate).
