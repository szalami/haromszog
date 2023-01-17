/*
File: app.js
Author: Faragó Csaba
Copyright: 2021, Faragó Csaba
Group: Szoft E I-1
Date: 2023-01-17
Github: https://github.com/szalami/
Licenc: GNU GPL
*/

const baseElem = document.querySelector("#base");
const heightElem = document.querySelector("#height");
const calcButton = document.querySelector("#calcButton");
const areaElem = document.querySelector("#area");

calcButton.addEventListener('click', () => {
    var base = Number(baseElem.value);
    var height = Number(heightElem.value);

    var area = calcTriangleArea(base, height);
    areaElem.value = area;
});

let calcTriangleArea = (base, height) => {
    return (base * height) / 2;
}



