// ==UserScript==
// @name         Semantix Solver
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Ruendan "Purple CemantixSolver"
// @match        https://cemantix.herokuapp.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cemantix.herokuapp.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const input = document.querySelector("#cemantix-guess");
    const button = document.querySelector("#cemantix-guess-btn");
    const listWords = ["ange", "coeur", "alligator"];
    listWords.forEach(e => {
        input.value = e;
        button.click();
        setTimeout(e => {}, 20);
    });
})();