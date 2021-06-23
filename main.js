/*let _hello = 3 ;
let $money = 100 ;
$money = 50;
let myBirthDay = '20 march' ;
const pi = 3.14 ;*/

/*console.log (start);
console.log (score);
console.log (gameArea);
console.dir (start);*/

/*start.onclick = function () {
    start.classList.add ('hide');
};*/

const score = document.querySelector('.score'),
    start = document.querySelector('.start'),
    gameArea = document.querySelector('.gameArea'),
    car = document.createElement('div');

car.classList.add('car');

start.addEventListener('click', startGame);
document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);

const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false
};

const setting ={
    start: false,
    score:  0,
    speed: 3
}

function startGame(){
    start.classList.add ('hide');
    setting.start = true;
    gameArea.appendChild(car);
    requestAnimationFrame(playGame);
}

function playGame(){
    console.log('Play game!');
    if(setting.start){
        requestAnimationFrame(playGame);
    }
}

function startRun(event){
    event.preventDefault();
    /*console.log (event.key);*/
    keys[event.keys] = true;
}

function stopRun(event){
    event.preventDefault();
    /*console.log (event.key);*/
    keys[event.keys] = false;
}
