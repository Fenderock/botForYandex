// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/
// @grant        none
// ==/UserScript==

let keywords = ["Как звучит флейта","Валторна","Тромбон","Кларнет","Фагот","Гобой","Саксофон"];
let randomIndex = Math.floor(Math.random()*keywords.length);
let keyword = keywords[randomIndex];
let yandexInput = document.getElementsByName('text')[0];
let btn = document.getElementsByClassName('button')[1];

if(btn!=undefined){
    let i = 0;
    let timerId = setInterval(()=>{
        yandexInput.value += keyword[i++];
        if(i==keyword.length){
            clearInterval(timerId);
            btn.click();
        }
    },250);
}else{
    let links = document.links;
    let nextYandexPage = true;
    for(let i=0; i<links.length; i++){
        let link = links[i];
        link.removeAttribute('target')
        if(link.href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai")!=-1){
            nextYandexPage = false;
            link.click(); // Кликаем по ссылке
            break; // Прерываем цикл
        }
    }
    if(nextYandexPage) document.getElementsByClassName("pager__item_kind_next")[0].click();

}
