var player,form, game;
var database;
var gameState=0;
var playerCount;
var playerInfo;


function setup(){
    createCanvas(400,400);
    database = firebase.database();
    game = new Game();
    game.getState();
    console.log(gameState);
    game.start();
    console.log(gameState);
}

function draw(){
    background("white");
    console.log(gameState);
    if(playerCount === 4){
        game.updateState(1);
      }
      if(gameState === 1){
        clear();
        game.play();
      }  
 //   drawSprites();
}
