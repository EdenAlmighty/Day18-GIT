'use strict'

const gBalls = document.querySelectorAll('.ball')
var elBalls

function createBalls() {
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
        return
    }
    if (elBall === elBalls[3]) {
      shrinkBall(0)
      shrinkBall(1)
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

function shrinkBall(i) {
    var elBallSize = parseInt(elBalls[i].style.height)
    var ranDiff = getRandomInt(20, 60)
    if (elBallSize < 100) {
        elBalls[i].style.height = 100 + 'px'
        elBalls[i].style.width = 100 + 'px'
    } else {
        var newSize = elBallSize - ranDiff
        if(newSize < 100) newSize = 100
    }
    elBalls[i].style.height = newSize + 'px'
    elBalls[i].style.width = newSize + 'px'
    elBalls[i].innerText = newSize
}