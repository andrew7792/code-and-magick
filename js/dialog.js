'use strict';
var userDialog = document.querySelector('.setup');
var dialogHandle = userDialog.querySelector('.setup-user-pic');

dialogHandle.addEventListener('mousedown', function(evt){
  evt.preventDefault();

  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };

    var onMouseMove = function(moveEvt){
    moveEvt.preventDefault();

    var shift = {
      x: startCoords.x -moveEvt.clientX,
      y: startCoords.x -moveEvt.clientY
    };
    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    setup.style.top = (userDialog.offsetTop - shift.y) + 'px';
    setup.style.left = (userDialog.offsetTop - shift.x) + 'px';

    };

  document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

var shopElement = document.querySelector('.setup-artifacts-shop');
var draggedItem = null;

shopElement.addEventListener('dragstart', function(evt){
  if(evt.target.tagName.toLowerCase() === 'img'){
    draggedItem = evt.target;
    evt.dataTransfer.setData('text/plain', evt.target.alt);
  }
});
var artifactsElement = document.querySelector('.setup-artifacts');

artifactsElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
});

artifactsElement.addEventListener('drop', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.target.appendChild(draggedItem.cloneNode(true));
    evt.preventDefault();
});

artifactsElement.addEventListener('dragenter', function (evt) {
    evt.target.style.backgroundColor = 'yellow';
    evt.preventDefault();
});

artifactsElement.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
});