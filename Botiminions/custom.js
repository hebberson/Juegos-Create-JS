var minions = [];
var ordre = [];
var botoMemoriza;
var num;
var root0;
var intents;
var intentsSobresis;
var repeticions;
var milisegons;
var vides;
var tics;

function iniciar(){
    //guardem en un array tots els minions
    minions[1] = root0.boti1;
    minions[2] = root0.boti2;
    minions[3] = root0.boti3;
    minions[4] = root0.boti4;

    root0.boti1.name="primer";
    root0.boti2.name="segon";
    root0.boti3.name="tercer";
    root0.boti4.name="quart";

    root0.missatge2.visible=false;

    minions[1].mouseEnabled=false;
    minions[2].mouseEnabled=false;
    minions[3].mouseEnabled=false;
    minions[4].mouseEnabled=false;
    root0.botstart.mouseEnabled=false;


    //guardem en una variable el boto
    botoMemoriza = root0.botstart;

    root0.missatge.botjugar.addEventListener("click", function(event) {
        createjs.Tween.get(root0.missatge.botjugar)
            .to({scaleX:1.4,scaleY:1.4}, 80, createjs.Ease.quadOut)
            .to({scaleX:1,scaleY:1}, 80, createjs.Ease.bounceOut).call(playSo);
        //playSo();
        setTimeout(function(){
            root0.missatge.visible=false;
            root0.ahoratu.visible=false;
            botoMemoActiu();
            minions[1].mouseEnabled=true;
            minions[2].mouseEnabled=true;
            minions[3].mouseEnabled=true;
            minions[4].mouseEnabled=true;
        },200);
    });

    //boto memoriza
    root0.botstart.addEventListener("click", function(event) {
        ordre.splice(0);
        intents=0;
        vibraboto(botoMemoriza);
        playSo();

        if (root0.nivell.currentFrame==0) {
            sequencia(3);
            //sequencia(3);
        }else if (root0.nivell.currentFrame==1) {
            sequenciaDificil(5);
            //sequenciaDificil(4);
        }
        
    });

    root0.missatge.botnextlevel.addEventListener("click", function(event) {
        vibraboto(root0.missatge.botnextlevel);
        playSo();
        setTimeout(function(){
            root0.missatge.visible=false;
            botoMemoriza.visible=true;
            root0.nivell.gotoAndStop(1);
            root0.etiquetesb.gotoAndStop(0);
            ordre.splice(0);
            intents=0;
        },440);
        
    });
    //quan perds i tornes a jugar, desde el mateix nivell
    root0.missatge.botjugaragain.addEventListener("click", function(event) {
        vibraboto(root0.missatge.botjugaragain);
        playSo();
        
        setTimeout(function(){
            root0.missatge.visible=false;
            root0.ahoratu.visible=false;
            root0.etiquetesb.gotoAndStop(0);
            intents=0;
            root0.vida.gotoAndStop(0);
            anularBoti();
            botoMemoActiu();
            minions[1].mouseEnabled=true;
            minions[2].mouseEnabled=true;
            minions[3].mouseEnabled=true;
            minions[4].mouseEnabled=true;
        },440);
    });

    //quan guanyes i tornes a jugar
    root0.missatge2.botjugaragain2.addEventListener("click", function(event) {
        createjs.Tween.get(root0.missatge2.botjugaragain2)
            .to({scaleX:1.4,scaleY:1.4}, 80, createjs.Ease.quadOut)
            .to({scaleX:1,scaleY:1}, 80, createjs.Ease.bounceOut).call(playSo);
        setTimeout(function(){
            root0.missatge2.visible=false;
            root0.ahoratu.visible=false;
            root0.etiquetesb.gotoAndStop(0);
            root0.nivell.gotoAndStop(0);
            intents=0;
            root0.vida.gotoAndStop(0);
            anularBoti();
            botoMemoActiu();
        },200);
    });
}

function sequencia(n){
    botoMemoriza.mouseEnabled=false;
    var a;
    milisegons=600;

    for (var i=1; i <= n; i++) {
        setTimeout(function(){
            a=randomNum();
            movimiento(minions[a]);
            ordre.push(minions[a]);
        },milisegons);
        milisegons+=600;
    }

    //Activem Memoriza, TORN de l'usuari
    setTimeout(function(){
        activarBoti();
        root0.ahoratu.visible=true;
    },milisegons);  
    
}

 function sequenciaDificil(n){
    botoMemoriza.mouseEnabled=false;
    var a;
    milisegons=450;
    for (var i=1; i <= n; i++) {
        setTimeout(function(){
            a=randomNum();
            escalaOrig=minions[a].scaleX;
            posicioOriginalY=minions[a].y;
           minions[a].gotoAndStop(1);
                var rebot = createjs.Tween.get(minions[a])
                .to({scaleX:1.4,scaleY:1, y:390}, 250, createjs.Ease.quadIn).call(so(b))
                .to({scaleX:1,scaleY:1, y:135}, 260, createjs.Ease.quadOut);
            ordre.push(minions[a]);
        },milisegons);
        milisegons+=450;
    }
    setTimeout(function(){
        activarBoti();
        root0.ahoratu.visible=true;
        minions[a].gotoAndStop(0);
    },milisegons);
 }

function movimiento(b){
   // b.gotoAndStop(1);
    escalaOrig=b.scaleX;
    posicioOriginalY=b.y;
    function canviarboti(){
        b.gotoAndStop(1);
    }

    var rebot = createjs.Tween.get(b).wait(30).call(canviarboti)
    .to({scaleX:1.4,scaleY:1, y:390}, 300, createjs.Ease.quadIn).call(so(b))
    .to({scaleX:escalaOrig,scaleY:escalaOrig, y:posicioOriginalY}, 300, createjs.Ease.quadOut);
    setTimeout(function(){
        b.gotoAndStop(0);
    },400);
    
}

function randomNum(){
    num = Math.floor((Math.random()*4)+1);
    return num;
}

function botoMemoActiu(){
    botoMemoriza.mouseEnabled = true;
}

function move(b){
    escalaOrig=b.scaleX;
    posicioOriginalY=b.y;
    //el minion clicat no es correcte en lordre
    if (ordre[intents].name!=b.name) {
        //quan ja no ens queden mes vides
        if (root0.vida.currentFrame==2) {
            root0.missatge.alpha=1;
            playLose();
            root0.vida.gotoAndStop(3);
            root0.missatge.visible=true;
            root0.missatge.gotoAndStop(1);
            minions[1].mouseEnabled=false;
            minions[2].mouseEnabled=false;
            minions[3].mouseEnabled=false;
            minions[4].mouseEnabled=false;
        }else{
            //perdem una vida e intents = 0, perque lusuari tingui que ficar lordre desde el principi
            vibra(b);
            playFallo();
            root0.vida.gotoAndStop(root0.vida.currentFrame+1);
            intents=0;
        }
        
    //si el clicat es el correcte, fa el moviment i comproba si es el final, si no ho es suma 1 als intents
    }else if (b.name==ordre[intents].name) {
        b.gotoAndStop(1);
        var rebot = createjs.Tween.get(b).call(anularBoti).wait(60)
        .to({scaleX:1.4,scaleY:1, y:390}, 300, createjs.Ease.quadIn).call(so(b))
        .to({scaleX:escalaOrig,scaleY:escalaOrig, y:posicioOriginalY}, 300, createjs.Ease.quadOut).wait(100).call(comprovarFinal);
        setTimeout(function(){
            b.gotoAndStop(0);
        },400);
    }
}

function anularBoti(){
    minions[1].removeAllEventListeners("click");
    minions[2].removeAllEventListeners("click");
    minions[3].removeAllEventListeners("click");
    minions[4].removeAllEventListeners("click");
}

function activarBoti(){
    minions[1].on("click",handleMouseEvent);
    minions[2].on("click",handleMouseEvent);
    minions[3].on("click",handleMouseEvent);
    minions[4].on("click",handleMouseEvent);
}

function comprovarFinal(){
    //quan encertes, els intents avancen, per a passar al seguent valor de larray ordre[]
    if (ordre[intents+1] === undefined) {

        root0.missatge.visible=true;
        botoMemoriza.visible=false;
        root0.ahoratu.visible=false;
        root0.etiquetesb.gotoAndStop(root0.etiquetesb.currentFrame+1);

        if (root0.nivell.currentFrame==1 && root0.etiquetesb.currentFrame==5) {
            //alert("FELICIDADES HAS GANADO!!");
            root0.missatge.visible=false;
            root0.missatge2.visible=true;
        }

        if (root0.etiquetesb.currentFrame<5) {
            //if (root0.etiquetesb.currentFrame<2) {
            //mostrar 2 segons el missatge "secuencia completa"
            root0.missatge.gotoAndStop(3);
            apareixSecuencia(root0.missatge.missatgeok);

            setTimeout(function(){
                botoMemoriza.visible=true;
                root0.missatge.visible=false;
            },3000); 
        }else {
            //per passar al seguent nivell
            root0.missatge.alpha=1;
            playWin();
            root0.missatge.gotoAndStop(2);
        }


        botoMemoActiu();
        anularBoti();

    }else{
        intents++;
        activarBoti();
    }
}

function vibra(bola){
    escalaOrig=bola.scaleX;
        createjs.Tween.get(bola)
        .to({scaleX:1.4,scaleY:1.4}, 80, createjs.Ease.quadOut)
        .to({scaleX:1,scaleY:1}, 80, createjs.Ease.bounceOut)
        .to({scaleX:1.4,scaleY:1.4}, 80, createjs.Ease.quadOut)
        .to({scaleX:1,scaleY:1}, 80, createjs.Ease.bounceOut)
        .to({scaleX:1.4,scaleY:1.4}, 80, createjs.Ease.quadOut)
        .to({scaleX:escalaOrig,scaleY:escalaOrig}, 80, createjs.Ease.bounceOut);
}

function vibraboto(a){
    createjs.Tween.get(a)
        .to({scaleX:1.3,scaleY:1.3}, 220, createjs.Ease.quadOut)
        .to({scaleX:1,scaleY:1}, 220, createjs.Ease.bounceOut);
}

function apareixSecuencia(b){
    root0.missatge.missatgeok.alpha=1;
    createjs.Tween.get(b).call(playWin)
        .to({scaleX:1.5,scaleY:1.8}, 600, createjs.Ease.quadOut)
        .to({scaleX:1,scaleY:1}, 800, createjs.Ease.bounceOut)
        .wait(500)//1900 / 3000
        .to({scaleX:1.2,scaleY:1.3}, 300, createjs.Ease.quadOut)
        .to({scaleX:1,scaleY:1,alpha:0}, 150, createjs.Ease.quadOut);
}

function so(b){
    if (b.name=="primer") {playRebot()}
    else  if (b.name=="segon") {playRebot2()}
        else  if (b.name=="tercer") {playRebot3()}
            else  if (b.name=="quart") {playRebot4()}
}