var userDialog = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');



var clickIconHandler = function(){
    userDialog.classList.remove('hidden');

    document.addEventListener('keydown', function (evt) {
       if(evt.keyCode === 27){
           userDialog.classList.add('hidden');
       }
    });
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
}

var clickCloseButtonHandler = function(){
    userDialog.classList.add('hidden');
    userDialog.querySelector('.setup-similar').classList.add('hidden');
}
setupOpen.addEventListener('keydown',function(evt){
    if(evt.keyCode === 13){
        userDialog.classList.remove('hidden');
    }

});
setupOpen.addEventListener('click',clickIconHandler);
setupClose.addEventListener('click',clickCloseButtonHandler);
setupClose.addEventListener('keydown',function(evt){
    if(evt.keyCode === 13){
        userDialog.classList.add('hidden');
    }

});

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;




var heroes = [
    {
        name: "Иван Ирвинг",
        coatColor: 'rgb(101, 137, 164)',
        eyesColor: 'black'
    },

    {
        name: "Хуан Себастьян Верон",
        coatColor: 'rgb(241, 43, 107)',
        eyesColor: 'red'
    },

    {
        name: "Мария Мирабелла",
        coatColor: 'rgb(146, 100, 161)',
        eyesColor: 'blue'
    },

    {
        name: "Кристоф Вальц",
        coatColor: 'rgb(56, 159, 117)',
        eyesColor: 'yellow'
    }
];

for(var i = 0; i < heroes.length; i++ ){
    var wizzardElement = similarWizardTemplate.cloneNode(true);

    var heroName = wizzardElement.querySelector('.setup-similar-label');
    heroName.textContent = heroes[i].name//имя игрока
    var wizzardCoat = wizzardElement.querySelector('.wizard-coat');

    wizzardCoat.style.fill = heroes[i].coatColor//Цвет мантии coatColor задайте как цвет заливки fill в стилях элемента
    var wizzardEyes = wizzardElement.querySelector('.wizard-eyes');
    wizzardEyes.style.fill = heroes[i].eyesColor//Цвет глаз eyesColor задайте как цвет заливки fill в стилях элемента eyesColor
    similarListElement.appendChild(wizzardElement);
}


