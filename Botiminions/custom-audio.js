function soundLoaded(event) {
	//examples.hideDistractor();
	var div = document.getElementById(event.id);
}

function stop() {
	if (preload != null) {
		preload.close();
	}
	createjs.Sound.stop();
}

function playSo(target) {
	var instance = createjs.Sound.play("sounds/bubble.mp3");
	if (instance == null || instance.playState == createjs.Sound.PLAY_FAILED) {
		return;
	}
	instance.addEventListener("complete", function (instance) {
	});
}

function playRebot(target) {
	var instance = createjs.Sound.play("sounds/jump.mp3");
	if (instance == null || instance.playState == createjs.Sound.PLAY_FAILED) {
		return;
	}
	instance.addEventListener("complete", function (instance) {
	});
}

function playRebot2(target) {
	var instance = createjs.Sound.play("sounds/jump2.mp3");
	if (instance == null || instance.playState == createjs.Sound.PLAY_FAILED) {
		return;
	}
	instance.addEventListener("complete", function (instance) {
	});
}

function playRebot3(target) {
	var instance = createjs.Sound.play("sounds/jump3.mp3");
	if (instance == null || instance.playState == createjs.Sound.PLAY_FAILED) {
		return;
	}
	instance.addEventListener("complete", function (instance) {
	});
}

function playRebot4(target) {
	var instance = createjs.Sound.play("sounds/jump4.mp3");
	if (instance == null || instance.playState == createjs.Sound.PLAY_FAILED) {
		return;
	}
	instance.addEventListener("complete", function (instance) {
	});
}

function playFallo(target) {
	var instance = createjs.Sound.play("sounds/fallo.mp3");
	if (instance == null || instance.playState == createjs.Sound.PLAY_FAILED) {
		return;
	}
	instance.addEventListener("complete", function (instance) {
	});
}

function playLose(target) {
	var instance = createjs.Sound.play("sounds/gameover.mp3");
	if (instance == null || instance.playState == createjs.Sound.PLAY_FAILED) {
		return;
	}
	instance.addEventListener("complete", function (instance) {
	});
}

function playWin(target) {
	var instance = createjs.Sound.play("sounds/win.mp3");
	if (instance == null || instance.playState == createjs.Sound.PLAY_FAILED) {
		return;
	}
	instance.addEventListener("complete", function (instance) {
	});
}