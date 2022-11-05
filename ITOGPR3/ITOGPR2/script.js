var width = 312; //ширина 

var list = document.querySelector('.images'); //поместим списо к в переменную list

var pictures = document.querySelectorAll('li');//поместим все пункты списка в переменную pictures

var position = 0;//обозначаем нолик в системе коорди


document.querySelector('.prev').onclick = function() {
    position += width;
    position = Math.min(position,0)
    list.style.marginLeft = position + 'px';
    }
document.querySelector('.next').onclick = function(){
    position -= width;
    position = Math.max(position, -width * (pictures.length - 1));
    list.style.marginLeft = position + 'px';

}
var page = document.querySelector('.body');
var themeButton = document.querySelector('.themeButton')

themeButton.onclick = function(){
    page.classList.toggle('lightTheme')
    page.classList.toggle('darkTheme')
}