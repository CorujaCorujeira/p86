//Criar uma referência para tela

greencarImagewidth=75;
greencarImageheight=100;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";
greencarX=5;
greencarY=225;

function add() {
	backgroundImgTag = new Image(); //definindo uma variável com uma nova imagem
	backgroundImgTag.onload = uploadBackground; // ajustando uma função, ao carregar essa variável
	backgroundImgTag.src = backgroundImage;   // carregar a imagem

	greencarImgTag = new Image(); //definindo uma variável com uma nova imagem
	greencarImgTag.onload = uploadGreenCar; // ajustando uma função, ao carregar essa variável
	greencarImgTag.src =greencarImage;   // carregar a imagem
}


function uploadBackground() {
	ctx.drawImage(backgroundImgTag,0,0,canvas.width,canvas.height);

}

function uploadGreenCar() {
	ctx.drawImage(greencarImgTag,greencarX,greencarY,greencarImagewidth,greencarImageheight);
	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (greencarY >=0) {
		greencarY = greencarY- 10;
		console.log("Quando direcional cima for pressionada,  x = " + greencarX + " | y = " +greencarY);
		uploadBackground();
		uploadGreenCar();
	}
}

function down()
{
	if (greencarY <=350) {
		greencarY = greencarY + 10;
		console.log("Quando direcional cima for pressionada,  x = " + greencarX + " | y = " +greencarY);
		uploadBackground();
		uploadGreenCar();
	}
}

function left()
{
	if (greencarX >=0) {
		greencarX = greencarX - 10;
		console.log("Quando direcional cima for pressionada,  x = " + greencarX + " | y = " +greencarY);
		uploadBackground();
		uploadGreenCar();
	}
}

function right()
{
	if (greencarX <=750) {
		greencarX = greencarX + 10;
		console.log("Quando direcional cima for pressionada,  x = " + greencarX + " | y = " +greencarY);
		uploadBackground();
		uploadGreenCar();
	}
}
