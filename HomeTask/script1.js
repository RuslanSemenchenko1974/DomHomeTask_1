/**
 * Отслеживание изменения ориентации экрана:
Напишите код, который отслеживает изменение ориентации экрана устройства (с портретной на ландшафтную и наоборот) и выводит сообщение об этом на веб-странице.
 */

const widthEl = window.screen.availWidth;
const hightEl = window.screen.availHeight;
console.log(widthEl/hightEl>1?'ландшафт':'портрет');

document.querySelector('.screen').textContent = `Ориентация экрана: ${widthEl/hightEl>1?'ландшафт':'портрет'}`;

window.addEventListener('resize', even => {
const widthEl = window.screen.availWidth;
const hightEl = window.screen.availHeight;
console.log(widthEl/hightEl>1?'ландшафт':'портрет');
document.querySelector('.screen').textContent = `Ориентация экрана: ${widthEl/hightEl>1?'ландшафт':'портрет'}`;
   });