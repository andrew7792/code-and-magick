var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var anotherHeroesOpen = document.querySelector('.setup-similar');

anotherHeroesOpen.classList.remove('hidden')

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
    var wizardElement = similarWizardTemplate.cloneNode(true);

    var heroName = wizardElement.querySelector('.setup-similar-label');
    heroName.textContent = heroes[i].name//имя игрока
    var wizardCoat = wizardElement.querySelector('.wizard-coat');

    wizardCoat.style.fill = heroes[i].coatColor//Цвет мантии coatColor задайте как цвет заливки fill в стилях элемента
    var wizardEyes = wizardElement.querySelector('.wizard-eyes');
    wizardEyes.style.fill = heroes[i].eyesColor//Цвет глаз eyesColor задайте как цвет заливки fill в стилях элемента eyesColor
    similarListElement.appendChild(wizardElement);
}