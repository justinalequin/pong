// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');

// The y-velocity of the computer paddle
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 1;

// Update the pong world
function update() {


    // Update the computer paddle's position
    computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;



    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;
    computerPaddleYPosition = ballYPosition -50 ;
    // if (computerPaddleYPosition > 300) {
    //     computerPaddleYVelocity = computerPaddleYVelocity * -1;
    // }
    // if (computerPaddleYPosition <= 0) {
    //     computerPaddleYVelocity = computerPaddleYVelocity * -1;
    // }
       
}

// Call the update() function every 35ms
setInterval(update, 35);

//*******************\\
//******MY CODE*******\\
const ball = document.querySelector('.ball');


let ballXPosition = 50;
let ballXVelocity = 1;
let ballYPosition = 50;
let ballYVelocity = 1;

function updateBall() {
    ballXPosition = ballXPosition + ballXVelocity;
    ball.style.left = `${ballXPosition}px`
    ballYPosition = ballYPosition + ballYVelocity;
    ball.style.top = `${ballYPosition}px`


    if (ballYPosition <= -1 || ballYPosition >= 480) {
        ballYVelocity = ballYVelocity * -1;
    }

    if (ballXPosition <=22 && !(ballYPosition >= paddleStart && ballYPosition <= paddleStart + 100 )){
        
        ball.style.backgroundColor = 'red'
    }
    
    // if (ballXPosition === 350 && ballYPosition === 50){
    //     ball.style.backgroundColor = 'green'
    // }

    //if (ballXPosition === 660){console.log('It hit the number!!!')}
    // if ( ballXPosition >= 663) {
    //     ball.style.backgroundColor = 'red'
    //     console.log('The Ball Should Be Red', ballXPosition)

    // }

    //console.clear()
}


setInterval(updateBall, 1);

let playerYPosition = 0;
let playerYVelocity = 1;
let paddleStart = 100;

const playerPaddle = document.querySelector('.player-paddle');
function updatePaddle() {

    window.addEventListener('keydown', (event) => {
        
        if (event.key === 'ArrowUp' && paddleStart > 0) {
            console.log('UP ',paddleStart)
            paddleStart = paddleStart - 1;
            // console.log('UP', paddleStart)
            playerPaddle.style.top = `${paddleStart}px`;
            //console.log("Paddle start ",paddleStart)

            //console.log('paddleSurface ', paddleSurface)
            if (paddleStart <= 0) {
                paddleStart = 0;
                playerPaddle.style.top = '0px'
            }


        } else if (event.key === 'ArrowDown' && paddleStart < 400) {
            console.log('DOWN ',paddleStart)
            paddleStart = paddleStart + 1;
            // console.log('DOWN', pa  ddleStart)
            playerPaddle.style.top = `${paddleStart}px`;
            //console.log("Paddle start ",paddleStart)
            //console.log('paddleSurface ', paddleSurface)

            if (paddleStart >= 400) {
                paddleStart = 400;
                
                playerPaddle.style.top = '400px'
            }
        }

    })
}

setInterval(updatePaddle, 500);


console.log('ballXPosition constant',ballXPosition)

function paddleHit() {
    if (ballYPosition >= paddleStart && ballYPosition <= paddleStart + 100) {
        if (ballXPosition === 21) {
            ballYVelocity = ballYVelocity * 1;
            ballXVelocity = ballXVelocity * -1;
            ball.style.backgroundColor = 'blue';
            // console.log("LEFT PADDLE")
            // console.log('The condition at least got triggered up above')
            // console.log('ballXPosition', ballXPosition)
            // console.log('ballYPosition', ballYPosition)
            // console.log('paddleStart is ', paddleStart)
            // console.log('paddleStart plus 100 is ', paddleStart + 100)
            //setTimeout(alert("CHECK CONSOLE"), 100);
            //console.clear()
        }
    
        }

    }


setInterval(paddleHit, 1)

function computerPaddleHit(){
    if (ballXPosition === 660){console.log('It hit the number!!!')}
    if (ballYPosition >= computerPaddleYPosition && ballYPosition <= computerPaddleYPosition + 100) {
       // if (ballXPosition === 660){console.log('It hit the number!!!')}
        if (ballXPosition === 660) {
            ballYVelocity = ballYVelocity * 1;
            ballXVelocity = ballXVelocity * -1;
            // setTimeout(alert("CHECK CONSOLE"), 100);
             ball.style.backgroundColor = 'yellow';
            // console.log('The condition at least got triggered down below')
    }
}
}

setInterval(computerPaddleHit, 1)

let rightScore = 0;
let leftScore = 0;

function reset() {
   
    if (ballXPosition <= 19){
        rightScore = rightScore + 1
        ball.style.backgroundColor = 'green';
        ballXVelocity = ballXVelocity * -1;
        ballXPosition = 350;
        ballYPosition = 50;
        setTimeout(alert('USER SCORE: ' + leftScore + '                   '+' COMPUTER SCORE: '+ rightScore), 100);
    }
        
    if  (ballXPosition >= 663) {
        leftScore = leftScore + 1;
        ball.style.backgroundColor = 'green';
        ballXVelocity = ballXVelocity * -1;
        ballXPosition = 350;
        ballYPosition = 50;
        setTimeout(alert('USER SCORE: '+ leftScore + ' COMPUTER SCORE: ' + rightScore), 100);
    }    

        //ADD PAUSE AFTER COLOR CHANGE *********************
    // console.log("RESET/ SCORE")
    // console.log('computerPaddleYPosition is ' ,computerPaddleYPosition);
    // console.log('computerPaddleYPosition plus 100 is ' ,computerPaddleYPosition + 100);
    // console.log('ballYPosition is ', ballYPosition )
    // console.log('ballXPosition is ' ,ballXPosition)
    
        
      
    
        //console.clear()
    
    
}

setInterval(reset, 5);

console.log("Well, we're doing stuff");
