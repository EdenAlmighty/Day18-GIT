'use strict'
var ball1Size = 100


function onBallClick() {
    var elBall = document.querySelector('.ball1')
    ball1Size += getRandomInt(20, 60) 
    if (ball1Size >= 400) ball1Size = 100

    elBall.style.backgroundColor = getRandomColor()
    elBall.style.height = ball1Size + 'px'
    elBall.style.width = ball1Size  + 'px'
    elBall.innerHTML = ball1Size

}