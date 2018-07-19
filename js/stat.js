var fireballSize = 22;
var getFireballSpeed = function (left){
    if (left===true){
        return 5;
    }else{
        return 2;
    }
}
var wizardSpeed = 3;
var wizardWidth = 70;
function getWizardHeight(ballWidth){
    ballWidth = ballWidth * 1.337;
    return ballWidth;
}
function getWizardX(width){
    width = width / 2;
    return width;
}
function getWizardY(height){
    height = height * 2/3;
    return height;
}

window.renderStatistics = function(ctx, names, times){
    /*text*/
    ctx.fillText("Ура вы победили!", 250, 77);
    ctx.fillText("Список результатов:", 250, 97);
    ctx.font="30px Georgia";
    ctx.fillStyle = "black";
    ctx.stroke();
    /*---text---*/
    /*shadow*/
    ctx.shadowBlur = 20;
    ctx.shadowColor = "rgba(0, 0, 0, 0.7)";
    /*---shadow---*/
    /*cloud*/
    ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
    ctx.fillRect(100, 10,420,270);
    /*---cloud---*/
}
