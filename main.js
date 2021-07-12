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
    if (computerPaddleYPosition > 300) {
        computerPaddleYVelocity = computerPaddleYVelocity * -1;
    }
    if (computerPaddleYPosition <= 0) {
        computerPaddleYVelocity = computerPaddleYVelocity * -1
    }
}

// Call the update() function every 35ms
setInterval(update, 35);

//*******************\\
//******MY CODE*******\\
const ball = document.querySelector('.ball');

let ballXPosition = 0;
let ballXVelocity = 1;
let ballYPosition = 0;
let ballYVelocity = 1;

function updateBall() {
    ballXPosition = ballXPosition + ballXVelocity;
    ball.style.left = `${ballXPosition}px`
    ballYPosition = ballYPosition + ballYVelocity;
    ball.style.top = `${ballYPosition}px`



    if (ballXPosition <= -1 || ballXPosition >= 680) {
        ballXVelocity = ballXVelocity * -1;
        console.clear()
    }

    if (ballYPosition <= -1 || ballYPosition > 480) {
        ballYVelocity = ballYVelocity * -1;
        console.clear()
    }


}

setInterval(updateBall, 1);








let playerYPosition = 0;
let playerYVelocity = 1;
let paddleStart = 100;
const playerPaddle = document.querySelector('.player-paddle');
function updatePaddle() {
    window.addEventListener('keydown', (event) => {
        const modifier = 5;
        if (event.key === 'ArrowUp') {
            paddleStart = paddleStart - 1;
            console.log('UP', paddleStart)
            playerPaddle.style.top = `${paddleStart}px`;

            if (paddleStart < 0){
                paddleStart = 0;
                playerPaddle.style.top = '0px'
            }

        } else if (event.key === 'ArrowDown') {
            paddleStart = paddleStart + 1;
            console.log('DOWN', paddleStart)
            playerPaddle.style.top = `${paddleStart}px`;

            if (paddleStart >= 400){
                paddleStart = 400;
                playerPaddle.style.top = '400px'
            }
        }

    })
}

setInterval(updatePaddle, 500);


let paddleSurface = paddleStart + // 100px(the height of the paddles)

function reflection(){
    if (paddleStart >= ballYPosition && paddleStart + 100 <= ballYPosition){
        if (ballXPosition >=21){
        ball.style.b = 'red';
         
        }
    }
}

reflection(playerPaddle)
//     else{//setup scoring paramaters}
//      && ballXPosition >= 19){
// // use the bouncing function to reflect everything
//     }
// }
