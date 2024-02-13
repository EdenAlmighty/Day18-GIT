'use strict'


var ball1 = document.querySelector('.ball1')
var ball2 = document.querySelector('.ball2')
var ball3 = document.querySelector('.ball3')

var elBalls = [ball1, ball2, ball3]

function onBallClick(elBall, maxDiameter) {
    console.log(elBall);
 
        if(elBall === elBalls[2]) {
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
