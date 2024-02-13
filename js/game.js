'use strict'
// var ballSize = 100

function onBallClick(elBall, maxDiameter) {
    var elBallSize = elBall.offsetWidth
        elBallSize += getRandomInt(20, 60)
        if (elBallSize >= maxDiameter) elBallSize = 100
    
        elBall.style.backgroundColor = getRandomColor()
        elBall.style.height = elBallSize + 'px'
        elBall.style.width = elBallSize + 'px'
        elBall.innerHTML = elBallSize
}