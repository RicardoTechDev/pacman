var world = [
    [2,2,2,2,2,2,2,2,2,2],
    [2,0,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2]
];

//Objeto mario con sus respectivos atributos            
var mario = {
    x: 1,
    y: 1
}

var score = 0;

function displayWorld(){
    var output = '';
    for(let i=0; i<world.length; i++){
        output += "<div class='row'>";
        for(let j=0; j<world[i].length; j++){//recorremos la matriz 
            if(world[i][j] == 2){//si encuentra un 2 dibuja una pared
                output += "<div class='brick'></div>";
            }
            else if(world[i][j] == 1){//si encuetra un 1 dibuja una moneda
                output += "<div class='coin'></div>";
            }
            else if(world[i][j] == 0){//si encuentra un 0 dibuja un espacio vacio
                output += "<div class='empty'></div>";
            }
        }
        output += "</div>";
    }
    //console.log(output);// vemos como se muestran nuestas etiquetas div de acuerdo a la matriz world
    document.getElementById('world').innerHTML = output;//dibujamos la matriz world en la pagina
}

function displayMario(){
    document.getElementById('mario').style.left = mario.x*50 + "px"
    document.getElementById('mario').style.top = mario.y*50 + "px"
}

function displayScore(){
    document.getElementById('score').innerHTML = score;
}

//Ejecutamos nuestras funciones
displayWorld();
displayMario();
displayScore()

document.onkeydown = function(e){
    if(e.keyCode == 37){
        mario.x--; 
    }    
    else if(e.keyCode == 39){
        mario.x++;
    }
    else if(e.keyCode == 38){
        mario.y--;
    }
    else if(e.keyCode == 40){
        mario.y++;
    }
    
    if(world[mario.y][mario.x] == 1){
        world[mario.y][mario.x] = 0;
        //console.log(world[mario.y][mario.x]);
        score += 100;
        displayWorld();
        displayScore();
    }
    //console.log(e.keyCode);
    displayMario();//volvemos a llamar a la función displayMario para que lo ubique en la nueva posicón
}