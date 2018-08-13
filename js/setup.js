'use strict';
window.userDialog = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var onPopupEscPress = function(evt){
    if(evt.keyCode === ESC_KEYCODE){
        closePopup();
    }
}

var openPopup = function(){
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
}

var closePopup = function(){
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
}

setupOpen.addEventListener('click',function(){
    openPopup();
});

setupOpen.addEventListener('keydown',function(evt){
    if(evt.keyCode === ENTER_KEYCODE){
        openPopup();
    }
});


setupClose.addEventListener('click',function(){
    closePopup();
});


setupClose.addEventListener('keydown',function(evt){
    if(evt.keyCode === ENTER_KEYCODE){
        closePopup();
    }
});

/*color heroes*/
 var setupColorsSelector = document.querySelector('.setup-wizard');

/*COAT COLORS*/
var wizardCoatRandom = setupColorsSelector.querySelector('.wizard-coat');

var wizardColorsCoats = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', ' rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

wizardCoatRandom.addEventListener('click', function(){
    wizardCoatRandom.style.fill = wizardColorsCoats[Math.floor(Math.random() * 5)];
});
/*---COAT COLORS---*/

/*EYES COLORS*/
var wizardEyesRandom = document.querySelector('.wizard-eyes');

var wizardColorsEyes = ['black', 'red', 'blue', 'yellow', 'green'];

wizardEyesRandom.addEventListener('click', function(){
    wizardEyesRandom.style.fill = wizardColorsEyes[Math.floor(Math.random() * 4)];
});
/*---EYES COLORS---*/

/*FIREBALL COLORS*/
var wizardFireball = document.querySelector('.setup-fireball-wrap');

var wizardColorsFireballs = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

wizardFireball.addEventListener('click', function(){
    wizardFireball.style.background = wizardColorsFireballs[Math.floor(Math.random() * 4)];
});
/*---FIREBALL COLORS---*/

/*---color heroes---*/


