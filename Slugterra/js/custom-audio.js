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

	function playSound(target) {
		//Play the sound: play (src, interrupt, delay, offset, loop, volume, pan)
		//var instance = createjs.Sound.play(target.id);
		var instance = createjs.Sound.play("sounds/bubble.mp3");
		if (instance == null || instance.playState == createjs.Sound.PLAY_FAILED) {
			return;
		}
		//target.className = "gridBox active";
		instance.addEventListener("complete", function (instance) {
			//target.className = "gridBox";
		});
	}