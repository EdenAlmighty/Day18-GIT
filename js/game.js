'use strict'

const gBalls = document.querySelectorAll('.ball')
var elBalls

function onInit() {
    elBalls = []
    for (var i = 0; i < gBalls.length; i++) {
        elBalls.push(gBalls[i])
        elBalls[i].style.backgroundColor = getRandomColor()
    }
    return elBalls
}

function onBallClick(elBall, maxDiameter) {
    if (elBall === elBalls[2]) {
        var elBallColor = elBalls[1].style.backgroundColor
        elBalls[1].style.backgroundColor = elBalls[0].style.backgroundColor
        elBalls[0].style.backgroundColor = elBallColor
    } else {
        var elBallSize = elBall.offsetWidth
        elBallSize += getRandomInt(20, 60)
        if (elBallSize >= maxDiameter) elBallSize = 100
        elBall.style.backgroundColor = getRandomColor()
        elBall.style.height = elBallSize + 'px'
        elBall.style.width = elBallSize + 'px'
        elBall.innerHTML = elBallSize
    }
}
