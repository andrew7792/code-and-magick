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




(function () {
    var titleX = 220;
    var titleY = 25;
    var titleGap = 25;//

    var columnWidth = 40;
    var columnHeight = 150;
    var columnX = 150;//
    var columnY = 255;//
    var columnGap = 50;

    var fontGap = 10;//
    var numberGap = 30;//



    function getMaxElement(arr) {
        var maxElement = arr[0];

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > maxElement) {
                maxElement = arr[i];
            }
        }
        return maxElement;
    }

    window.renderStatistics = function (ctx, names, times) {
        //cloud
        ctx.shadowBlur = '20';
        ctx.shadowColor = "rgba(0, 0, 0, 0.7)";
        ctx.shadowOffsetX = 15;
        ctx.shadowOffsetY = 15;
        ctx.fillStyle =  "rgba(255, 255, 255, 0.7)";
        ctx.fillRect(100, 10, 420, 270);


        //titles
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        ctx.font = '16px PT Mono';
        ctx.textBaseline = 'hanging';
        ctx.fillText('Ура вы победили!', titleX, titleY);
        ctx.fillStyle = 'black';
        ctx.fillText('Список результатов:', titleX, titleY + titleGap);

        var maxTime = getMaxElement(times);

        //graphic
        for (var i = 0; i < names.length; i++) {
            ctx.fillStyle = 'rgba( ' + (Math.random() * 250).toFixed(0) +',' + (Math.random() * 250).toFixed(0) + ',' + (Math.random() * 250).toFixed(0) + ',' + (Math.random() + 0.4).toFixed(1) + ')';
            if (names[i] === 'Вы') {
                ctx.fillStyle = 'rgba(255, 0, 0, 1)';
            }
            ctx.fillRect(columnX + (columnWidth + columnGap) * i, columnY - fontGap, columnWidth, columnHeight * times[i] / maxTime * -1);
            ctx.fillText(names[i], columnX + (columnWidth + columnGap) * i, columnY);
            ctx.fillText(times[i].toFixed(0), columnX + (columnWidth + columnGap) * i, columnY - (columnHeight * times[i] / maxTime) - numberGap);
        }


    };
})();
