//interacciones con click derecho y letras A y Z

var anchoC = 2;
var altoC = 2;
var ulanchoC = 279; // ultimo ancho del Cuadrado
var ulaltoC = 279;

function setup() {
  createCanvas(700, 500);
  background("#8BC34A");
  angleMode(DEGREES);
}

function draw() {
  
  background("#8BC34A");
  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      background("#EC9C96"); 
  } else {
    background("#8BC34A");
  }
  }

  // sombra quad amarillo//
  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      translate(-300, 250);
    }
  }
  fill("#636E2F");
  noStroke();
  quad(310, 30, 460, 30, 660, 240, 510, 240);

  //quad amarillo//
  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      translate(6, -35); 
    }
  }
  fill("#E4F3A0");
  noStroke();
  quad(300, 40, 450, 40, 650, 250, 500, 250);

  //rectangulo naranja1//

  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      translate(-80, 20); 
    }
  }
  push();
  rectMode(CENTER);
  translate(530, 137);
  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      rotate(frameCount * 2.4);
    }
  }
  noStroke();
  fill("#F29033");
  rect(0, 0, 250, 25);
  pop();

  //CUADRADO LOKO//
  push();

  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      translate(415, -230);
    }
  }

  if (keyIsPressed) {
    if (key == "z" || key == "Z") {
      /*if((mouseX > 142) && (mouseX < 421) &&
       (mouseY >60) && (mouseY < 339)){*/
      //que el ancho y alto vayan aumentando de 2 en 2
      anchoC++, altoC++;
    }
  }

  rectMode(CENTER);
  noFill();
  stroke("#9B32F7");

  strokeWeight(10);
  rect(280, 200, anchoC, altoC);

  strokeWeight(9);
  rect(280, 200, 25, 25);

  strokeWeight(8);
  rect(280, 200, 48, 48);

  strokeWeight(7.5);
  rect(280, 200, 70, 70);

  strokeWeight(6.8);
  rect(280, 200, 90, 90);

  strokeWeight(6);
  rect(280, 200, 105, 105);

  strokeWeight(6);
  rect(280, 200, 120, 120);

  strokeWeight(5);
  rect(280, 200, 135, 135);

  strokeWeight(4);
  rect(280, 200, 148, 148);

  strokeWeight(3);
  rect(280, 200, 160, 160);

  strokeWeight(2.5);
  rect(280, 200, 170, 170);

  strokeWeight(2.5);
  rect(280, 200, 180, 180);

  strokeWeight(2);
  rect(280, 200, 188, 188);

  strokeWeight(2);
  rect(280, 200, 196, 196);

  strokeWeight(1.5);
  rect(280, 200, 202, 202);

  strokeWeight(1.5);
  rect(280, 200, 208, 208);

  strokeWeight(1.5);
  rect(280, 200, 215, 215);

  strokeWeight(1.5);
  rect(280, 200, 223, 223);

  strokeWeight(1.3);
  rect(280, 200, 230, 230);

  strokeWeight(1.3);
  rect(280, 200, 237, 237);

  strokeWeight(1.3);
  rect(280, 200, 244, 244);

  strokeWeight(1.3);
  rect(280, 200, 251, 251);

  strokeWeight(1);
  rect(280, 200, 258, 258);

  strokeWeight(1);
  rect(280, 200, 265, 265);

  strokeWeight(1);
  rect(280, 200, 272, 272);

  if (keyIsPressed) {
    if (key == "a" || key == "A") {
      /* if(mouseIsPressed){
    if((mouseX > 142) && (mouseX < 421) &&
       (mouseY >60) && (mouseY < 339)){*/
      ulanchoC--, ulaltoC--;
    }
  }

  strokeWeight(1);
  rect(280, 200, ulanchoC, ulaltoC);
  pop();
  //FIN CUADRADO LOKO//

  //rectangulo naranja2//
  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      translate(580, -230);
    }
  }
  noStroke();
  fill("#F29033");
  rect(140, 130, 170, 25);

  //rectangulo fucsia1//
  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      translate(10, 30);
    }
  }
  noStroke();
  fill("#F32188");
  rect(245, 200, 100, 20);

  //quad azul//
  if (mouseIsPressed) {
    if (mouseButton == LEFT) {
      fill("#A89F4B");
      translate(-150, -130);
    }
  }
  fill(23, 0, 255, 85);
  noStroke();
  quad(186, 107, 310, 107, 600, 400, 476, 400);
  //sombra del quad azul//
  fill("#243E5A");
  noStroke();
  quad(310, 107, 325, 107, 599, 383, 599, 399);

  //rectangulo fucsia2//
  noStroke();
  fill("#F32188");
  rect(410, 200, 100, 20);

  console.log(`X: ${mouseX}, Y: ${mouseY}`);
}
