'use strict'
var ball1Size = 100


function onBallClick() {
    var elBall = document.querySelector('.ball1')
    ball1Size += 50 

    elBall.style.height = ball1Size + 'px'
    elBall.style.width = ball1Size  + 'px'
    elBall.innerHTML = ball1Size

}