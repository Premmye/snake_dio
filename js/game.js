let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
var snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
var score = 0;
let direction = "right";

var points = 0;

var food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function CriarBG(){
    let bgcolors = ['Lightgreen','green','red']; // cores do fundo do jogo
    let bgpoints = [0,5,8]; // pontos necessários para mudar o fundo
    for( let i = 0; i < bgcolors.length; i++){
        if(score >= bgpoints[i]){
        context.fillStyle = bgcolors[i];
    }
    context.fillRect(0, 0, 16 * box, 16 * box);
}
}

function Snake(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "black";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function DrawFood(){
    context.fillStyle = "blue";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

function update(event){
    if(event.code == "KeyA" && direction != "right") {
        direction = "left";}
    if(event.code == "KeyS" && direction != "down") {
        direction = "up";}
    if(event.code == "KeyD" && direction != "left") {
        direction = "right";}
    if(event.code == "KeyW" && direction != "up") {
        direction = "down";}
}

function Start(){



    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "up") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "down") snake[0].y = 16 * box;


    for ( i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval;
            alert("Game Over - " + score +" pontos");



        }
    }


CriarBG();
Snake();
DrawFood();

let snakeX = snake[0].x;
let snakeY = snake[0].y;

if(direction == "right") snakeX += box;
if(direction == "left") snakeX -= box;
if(direction == "up") snakeY += box;
if(direction == "down") snakeY -= box;

if(snake[0].x == food.x && snake[0].y == food.y) {
    food.x = Math.floor(Math.random() * 15 + 1) * box;
    food.y = Math.floor(Math.random() * 15 + 1) * box;
    score = score + 1;
 }else{
snake.pop();
 }
 
let newhead = {
    x: snakeX,
    y: snakeY
}

snake.unshift(newhead);

}

Start();


let jogo = setInterval(Start, 100);

