var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

console.log(1);
document.querySelector('.setup-similar').classList.remove('hidden');


var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var arrObjects = [ // объявление массива

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

var randomTemplate = document.querySelector('#similar-wizard-template');
for(var i =0; i < arrObjects.length; i++ ){


    for(var j = 0; j < arrObjects.length; j++){


    }

}



var nameHero = function(arrObjects){
    document.querySelector('.setup-similar-label');
    //.appendChild(arrObjects[i].name)

}