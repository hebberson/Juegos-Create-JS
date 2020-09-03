var lasBoles;
var maxBoles = 6;	
var eliminaBoles = false;
var inicioJuego = 0;
var rootJuego;
var rootFrame2;
var nivellJoc=1;
var FPS = 30;
leftActive=false;
rightActive=false;

function iniciarBoles(){
    lasBoles = [];
	for(var i=0 ;i<maxBoles;i++){
		lasBoles.push({ bola: null, vacio: true, id: -1}); 
	}
}
//contol teclat
document.onkeydown = function(event){
	if(event.keyCode == 37 ){
		rightActive=false;
		leftActive=true;
		
	} else if(event.keyCode == 39 ){
		leftActive=false;
		rightActive=true;
		
	}
}
document.onkeyup = function(event){
	leftActive=false;
	rightActive=false;
}
setInterval(function() {
  updateMov();
  //draw();
}, 1000/FPS);
function updateMov(){
	if(leftActive==true){
		rootJuego.cowboy.x -= 25;
	}
	if(rightActive==true){
		rootJuego.cowboy.x += 25;
	}
}	


function myTick(evento){
	
	if (evento.paused) return; 
	rootFrame2.comprovaWin();
	
	numeret = -1;
	for(var i=0;i<maxBoles;i++){
		if (lasBoles[i].vacio ){
			numeret = i;
			
		}
	}
	if(numeret>-1){
		creaBoles();
	}
	for(var i=0;i<maxBoles;i++){
		if(eliminaBoles){
			/*si eliminaBoles=true, netejara la pantalal de boles. 
			S'utilitza per sortir de la pantalla, juntament amb "createjs.Ticker.setPaused(true)"
			Es pausa desde el temporitzador, al arribar a 0 s'activa la variable*/
			evento.paused = true;
			quitarBolas();
			break;
			//alert('rootJuego.eliminaBoles=true');
		} else {
			createjs.Ticker.setPaused(false);
		}
		/*control que les boles no es surtin dels marges*/
		if (!lasBoles[i].vacio){
			if (collision(lasBoles[i].bola, rootJuego.cowboy)){
				rootJuego.swapChildren(lasBoles[i].bola,rootJuego.cowboy);
			}
			if (collision(lasBoles[i].bola, rootJuego.cowboy.sensible)){
				playSound();
				colorbola=lasBoles[i].bola.bolacolor;
			  //alert('aa');
				if(rootJuego.colorselected == colorbola){
					//si el color que colisiona es el seleccionat 
					
					if(rootJuego.vida.nivell.scaleY>0.91 ){
						rootJuego.vida.nivell.scaleY=1;
						//comprovaWin();
					} else {
						var tweenvida = new createjs.Tween(rootJuego.vida.nivell, {override:true});
						tweenvida.to({scaleY:rootJuego.vida.nivell.scaleY+0.10}, 500, createjs.Ease.quadOut)
						.call(rootJuego.comprovaWin)
					}


				} else {
					//si el color que colisiona no es el seleccionat 
					if(rootJuego.vida.nivell.scaleY>0.01 ){
						var tweenvida = new createjs.Tween(rootJuego.vida.nivell, {override:true});
					tweenvida.to({scaleY:rootJuego.vida.nivell.scaleY-0.05}, 500, createjs.Ease.quadOut)
					.call(rootJuego.comprovaWin)
					} else {
						rootJuego.vida.nivell.scaleY=0;
					}
					
				}
				fiBolesCollision(i);
			}else {
				/*si no colisiona no faci res*/
				/*INTENT DE FEr LES BOLES ReBotAR AL ARRIBAR A 600px de HIGH*/
				if (lasBoles[i].bola.y>600 && lasBoles[i].bola!=null) {
					//lasBoles[i].bola.velocitatRotacio=0;
					//alert(lasBoles[i].bola.velocitat);
					lasBoles[i].bola.velocitatRotacio=(lasBoles[i].bola.velocitat/4)*lasBoles[i].bola.rang;
					//intent per fer rebotar les boles quan no entren dintre el cowboy
					lasBoles[i].bolaBounce = createjs.Tween.get(lasBoles[i].bola)
					.to({x:lasBoles[i].bola.x+20,y:lasBoles[i].bola.y+100 ,rotation:lasBoles[i].bola.velocitatRotacio*6}, lasBoles[i].bola.velocitat/2, createjs.Ease.quadIn);
						
					//updateMov();
				}
			
				if(lasBoles[i].bola.x<0 || lasBoles[i].bola.x>1310){
					//alert('surt'+lasBoles[i].bola.id);
					
					var idBoles = lasBoles[i].bola.id;
					rootJuego.removeChild(lasBoles[i].bola);
					for(var i=0; i < maxBoles; i++){
							if (idBoles == lasBoles[i].id ){
									lasBoles[i].bola = null;
									lasBoles[i].vacio = true;
									lasBoles[i].id = -1;
							}
					}
					
				}
			}
		}
	}
}


function collision(obj1, obj2){
	//window["console"]["log"] = mylog;
	if( obj1 !== null && obj2!==null){
		//rootJuego.obj1.text=obj1.x+"/"+obj1.y;
		//rootJuego.obj2.text=obj2.x+"/"+obj2.y;
		var x1 = obj1.x;
		var y1 = obj1.y;
		var w1 = obj1.getBounds().width*obj1.scaleX;
		var h1 = obj1.getBounds().height*obj1.scaleY;
		
		var x2 = obj2.x+obj2.parent.x;
		var y2 = obj2.y+obj2.parent.y;
		var w2 = obj2.getBounds().width*obj2.scaleX;
		var h2 = obj2.getBounds().height*obj2.scaleY;;		
		if ( x1 < (x2 + w2) 
			&& (x1 + w1) > x2 
			&& y1 < (y2 + h2) 
			&& (h1 + y1) > y2 ){
			return true;
		}
	}
	return false;
	
}


function creaBoles(evento){
	
		
		lasBoles[numeret].bola = new lib.bola();
		lasBoles[numeret].id = lasBoles[numeret].bola.id;
		boles = lasBoles[numeret].bola;
		//lasBoles[numeret].bola.miss.text = numeret;
		lasBoles[numeret].bola.x = Math.random() * 1480;
		lasBoles[numeret].bola.y = -50;
		//lasBoles[numeret].bola.rotation = lasBoles[numeret].bola.rotation++;
		lasBoles[numeret].bola.scaleX=lasBoles[numeret].bola.scaleY= (Math.floor(Math.random() * (10 - 5 + 1)) + 5)/10;
		lasBoles[numeret].bola.gotoAndStop(Math.ceil(Math.random() * 5));
		rootJuego.addChild(lasBoles[numeret].bola);
		rootJuego.swapChildren(lasBoles[numeret].bola,rootJuego.logo);
		
		lasBoles[numeret].vacio = false;
		lasBoles[numeret].bola.velocitat=3000 + Math.random()*5000;//3000 + Math.random()*5000 original
		lasBoles[numeret].bola.rang=Math.random() < 0.5 ? -1 : 1;//random positiu/negatiu
		lasBoles[numeret].bola.velocitatRotacio=0;
	    lasBoles[numeret].bola.velocitatRotacio=(lasBoles[numeret].bola.velocitat/8)*lasBoles[numeret].bola.rang;
		lasBoles[numeret].bola.angleCaiguda=lasBoles[numeret].bola.x+(150 + Math.random()*150)*lasBoles[numeret].bola.rang;
		//lasBoles[numeret].bola.miss.text = numeret +'/'+lasBoles[numeret].bola.id+'/'+lasBoles[numeret].bola.angleCaiguda;
		lasBoles[numeret].bolaTween = createjs.Tween.get(lasBoles[numeret].bola)
					.to({x:lasBoles[numeret].bola.angleCaiguda,y:820,rotation:lasBoles[numeret].bola.velocitatRotacio}, lasBoles[numeret].bola.velocitat, createjs.Ease.quadIn)
					//.to({x:Math.random() * 1480,y:820}, 3000 + Math.random()*5000, createjs.Ease.quadIn)
					//.to({x:(Math.random() * 1480)/3,y:820}, 2500 + Math.random()*5000, createjs.Ease.quadIn)
					.call(fiBoles);
					//.call(fiBoles(numeret));
		
	function fiBoles(obj){
		//rootJuego.eliminaBoles=true;
		var idBoles = obj.target.id;
		rootJuego.removeChild(obj.target);
		for(var i=0; i < maxBoles; i++){
			if (idBoles == lasBoles[i].id ){
					lasBoles[i].bola = null;
					lasBoles[i].vacio = true;
					lasBoles[i].id = -1;
			}
		}
	}	
}

function fiBolesCollision(indice){
			rootJuego.removeChild(lasBoles[indice].bola);
			lasBoles[indice].bola = null;
			lasBoles[indice].vacio = true;
}
function quitarBolas(){
	
	
	
	for(var i=0;i<maxBoles;i++){
		fiBolesCollision(i);
	}
}
