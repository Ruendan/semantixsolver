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
    const listWords = ["maison","tête","ville","temps","porte ","pays ","route","raison ","homme","cœur","femme","dieu","amour","monde ","voiture ","jour ","temps ","monsieur ","bien","personne ","fois ","part","rue ","chambre","monde","lent","fort ","rapide","magnifique","méchant","merveilleux","belle ","brave","intelligent ","dynamique ","ancien","élégant ","nouveau","énervé ","triste","Sombre","heureux ","Mauvais","Adorable ","Possible ","Timide ","Moyen","bon ","fatigant ","sage","lent","fort ","rapide","magnifique","méchant","merveilleux","belle ","brave","intelligent ","Dynamique ","ancien","élégant ","nouveau","énervé ","triste","Sombre","heureux ","Mauvais","Adorable ","Possible ","Timide ","Moyen","bon ","Fatigant ","Sage","Rapidement","presque ","Malheureusement","bientôt ","Lentement","cependant ","Couramment ","désormais","Egalement ","davantage","Parfois","Vraiment","encore","habituellement","tellement","régulièrement","certainement","calmement.","probablement","tranquillement","précisément","jamais","beaucoup","partout","souvent"];
    loop(0, listWords);
})();
