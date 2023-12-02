let textDataNode = document.querySelector(`#text-data-base`);
let btnSendNode = document.querySelector(`#btn-go`);
let site = document.querySelector(`body`);
let theme = document.querySelector(`#theme`);

btnSendNode.addEventListener(`click`, function() {
    textDataNode.innerHTML = `Мы обязательно вам ответим`;})
theme.addEventListener(`click`, function(){
    site.classList.toggle(`black`)
})
