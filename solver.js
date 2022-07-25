// ==UserScript==
// @name         Semantix Solver
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Ruendan
// @match        https://cemantix.herokuapp.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cemantix.herokuapp.com
// @grant        none
// ==/UserScript==

function loop(i, listWords){
    const input = document.querySelector("#cemantix-guess");
    const button = document.querySelector("#cemantix-guess-btn");
    setTimeout(x => {
        const a = "somethingElse";
        console.log("somethingElse");
        if(i < listWords.length) {
            input.value = listWords[i];
            button.click();
            console.log(listWords[i]);
            loop(i + 1, listWords);
        }
        i++;
    }, 500);
}

(function() {
    'use strict';
    const listWords = ["herbe", "vert", "arbre"];
    loop(0, listWords);
})();