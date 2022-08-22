// ==UserScript==
// @name         Semantix Solver
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Ruendan
// @include      https://cemantix.herokuapp.com/*
// @include      https://www.semantus.fr/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cemantix.herokuapp.com
// @grant        none
// ==/UserScript==

let input = document.querySelector("#word-field")
let button = document.querySelector("#go")
let ret = false;
switch(window.location.href){
    case "https://cemantix.herokuapp.com/":
        input = document.querySelector("#cemantix-guess");
        button = document.querySelector("#cemantix-guess-btn");
        break;
    case "https://cemantix.herokuapp.com/pedantix":
        input = document.querySelector("#pedantix-guess");
        button = document.querySelector("#pedantix-guess-btn");
        break;
    case "https://www.semantus.fr/clap/":
        input = document.querySelector("#word-field");
        button = document.querySelector("#go");
        break;
    default:
        ret = true;
}
function loop(i, listWords){
    if(ret) return;
    setTimeout(x => {
        if(i < listWords.length) {
            input.value = listWords[i];
            button.click();
            loop(i + 1, listWords);
        }
        i++;
    }, 500);
}

(function() {
    'use strict';
    const listWords = [
        "a", "z", "e", "r", "t", "y", "u", "i", "o", "p", "q", "s", "d", "f", "g", "h", "j", "k", "l", "m", "w", "x", "c", "v", "b", "n",
        "mais", "ou", "et", "donc", "or", "ni", "car", "a", "à", "dans", "par", "pour", "en", "vers", "avec", "deux", "de", "sans", "sous", "si", "chez",
        "je", "tu", "il", "elle", "on", "nous", "vous", "ils", "elles",
        "le", "la", "les", "un", "une", "de", "des", "selon", "mon", "ton", "son", "ses", "ces", "mien", "sien", "notre", "votre", "ce", "se", "cette",
        "avoir", "être", "prendre", "faire", "voir", "croire", "pouvoir", "savoir", "connaître", "vivre", "mourir", "découvert",
        "qui", "que", "quoi", "dont", "ou", "quand", "comment", "pourquoi",
        "toujours", "jamais", "souvent", "parfois", "ensemble", "maximum", "minimum",
        "enfant", "enfants", "fils", "fille", "parent", "parents", "père", "mère", "adulte", "mature", "seul",
        "guerre", "soldat", "militaire", "bataille", "Vietnam", "golf",
        "temps", "seconde", "minute", "heure", "plus", "mois", "taille", "gros", "petit", "moyen", "grand", "jour", "mois", "année", "an", "cette"
    ];
    loop(0, listWords);
})();
