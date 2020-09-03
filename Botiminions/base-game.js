(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"base_game_atlas_", frames: [[286,0,153,358],[227,720,224,217],[131,0,153,358],[441,215,217,211],[131,360,153,358],[441,0,221,213],[286,360,153,358],[0,720,225,219],[0,0,129,712]]}
];


// symbols:



(lib.boti1long = function() {
	this.spriteSheet = ss["base_game_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.boti1 = function() {
	this.spriteSheet = ss["base_game_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.boti2long = function() {
	this.spriteSheet = ss["base_game_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.boti2 = function() {
	this.spriteSheet = ss["base_game_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.boti3long = function() {
	this.spriteSheet = ss["base_game_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.boti3 = function() {
	this.spriteSheet = ss["base_game_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.boti4long = function() {
	this.spriteSheet = ss["base_game_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.boti4 = function() {
	this.spriteSheet = ss["base_game_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.tiles = function() {
	this.spriteSheet = ss["base_game_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.vida = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#386790").s().p("AgcB6QgQgDgOgGQgOgFgMgJQgMgHgKgLIAxgyQAOANAOAHQAOAGAPAAQANAAAHgFQAHgFAAgJIAAgBQAAgJgHgFQgJgFgPAAIgiAAIgLgkIA1grIhaAAIAAg/IC7AAIAAA4Ig3ApQAOAEALAGQALAGAIAJQAIAHAEALQAFAMAAAOIAAABQAAAKgDAIQgCAJgEAIQgHAPgOALQgOAKgSAGQgSAFgVAAQgSAAgQgDg");
	this.shape.setTransform(125.6,18);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#386790").s().p("AhmB9IAAg8IBlhIQAKgHAGgIQAFgHAAgHQAAgIgGgFQgGgGgJAAQgKAAgLAIQgLAGgPARIg2guQALgOAKgJQAMgKAMgHQANgHAPgDQAQgEASAAQAVAAARAGQASAGANALQANALAHAOQAHAPAAARIAAABQAAAOgEALQgDALgHAIQgGAJgJAIIgVAPIgrAcIBgAAIAABAg");
	this.shape_1.setTransform(125.9,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#386790").s().p("AgMB7IAAitIgoAIIgPg9IBIgTIA/AAIAAD1g");
	this.shape_2.setTransform(121.5,17.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#386790").s().p("AgaB9QgMgDgLgFQgLgFgJgHQgJgHgIgJQgHgIgGgLQgGgKgEgLQgEgMgCgMIgCgZIAAAAQAAgMACgMQACgMAEgMQAEgLAGgKQAGgLAHgIQAIgJAJgHQAKgIALgFQALgFAMgCQANgDAMAAQAOAAANADQAMACALAFQALAFAJAHQAJAHAIAJQAHAJAGAKQAGAKAEAMQAEALACAMIACAZIAAAAQAAAMgCANQgCAMgEALQgEAMgGAKQgGAKgHAJQgIAJgJAHQgKAHgLAFQgLAFgMADQgNADgNAAQgNAAgNgDgAgOg0QgHAEgFAIQgFAHgCAKQgDALAAAMIAAAAQAAAMADALQADAKAFAIQAFAHAGAEQAHAEAHAAQAIAAAHgEQAHgEAFgHQAFgHACgLQADgKAAgNIAAAAQAAgMgDgKQgDgLgFgHQgFgIgGgEQgHgEgIAAQgHAAgHAEg");
	this.shape_3.setTransform(127.8,17.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	// Vidas:
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#386790").s().p("AgoBfIAAhQIBRAAIAABQgAgogOIAAhRIBRAAIAABRg");
	this.shape_4.setTransform(104.7,20.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#386790").s().p("AgtBdQgfgMgOgIIAbgtQARAKATAGQASAEAQAAQALABAAgHIAAgBQABgCgFgCIgRgHIghgJQgPgGgKgGQgKgIgFgJQgFgKAAgPIAAAAQgBgQAHgMQAFgMAMgJQAKgJAQgEQAPgEASAAQAYAAAWAFQAXAHARAKIgaAvQgOgIgSgFQgQgFgNAAQgKAAAAAGIAAABQABADAEACIASAGQAUAFAMAFQAPAFAKAHQAKAIAFAJQAGAKgBAOIAAACQAAAPgFAMQgGANgLAIQgLAIgPAEQgPAFgUAAQgjgDgRgEg");
	this.shape_5.setTransform(90.2,20.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#386790").s().p("Ag8BgQgMgEgIgHQgIgJgFgKQgEgMgBgNIAAgBQAAgOAGgLQAFgLAJgHQAKgHANgEQANgFARAAQARAAAbAIIAAgDQABgOgJgHQgJgIgRAAQgOABgOADQgLACgNAGIgPg1QASgHASgDQAVgFAYAAQASABAdAGQALADAHAFQAIAFAHAGQALAKAEAPQAEAOAAAVIAABsIhPAAIAAgTQgKALgMAGQgOAHgSgBQgNAAgMgDgAgPATQgHAGABAJIAAABQgBAIAGAGQAFAEAIAAQAKAAAGgHQAHgJAAgNIAAgIQgIgDgKAAQgLAAgGAGg");
	this.shape_6.setTransform(70.4,20.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#386790").s().p("Ag6B7QgPgHgLgNQgLgNgHgTQgGgSAAgVIAAgBQAAgPAGgaQAHgSALgNQALgOAPgHQAPgHAQAAQAPAAATAIQAMAGALAMIAAhWIBPAAIAAD+IhPAAIAAgXQgMAOgLAFQgGAEgIADQgIACgLAAQgRAAgPgHgAgWAFQgJAKAAAPIAAABQAAAOAJAJQAJALANAAQANAAAKgLQAIgJABgOIAAgBQgBgOgIgKQgKgKgNABQgNAAgJAIg");
	this.shape_7.setTransform(48,17.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#386790").s().p("AgnCAIAAi+IBPAAIAAC+gAgohMIAAgzIBRAAIAAAzg");
	this.shape_8.setTransform(31.2,17.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#386790").s().p("AgmB7Ihkj1IBcAAIAvCIIAviIIBbAAIhkD1g");
	this.shape_9.setTransform(12.5,17.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,0,141.9,39);


(lib.terrarebot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AsQA8IAAh3IYhAAIAAB3g");
	this.shape.setTransform(78.5,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.terrarebot, new cjs.Rectangle(0,0,157,12), null);


(lib.tagok2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#386790").s().p("AhGBoIg1g1QgLgLAAgPQAAgPALgKQAKgKAPAAQAPAAALAKIAaAaIB3iBQALgLAPAAQAPAAALALQAKALAAAPQAAAPgKAKIiQCcQgLALgPAAQgPAAgKgLg");
	this.shape.setTransform(23.6,20,1.747,1.747);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.tagok2, new cjs.Rectangle(0,0,47.3,40.1), null);


(lib.tagok = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhGBoIg1g1QgLgLAAgPQAAgPALgKQAKgKAPAAQAPAAALAKIAaAaIB3iBQALgLAPAAQAPAAALALQAKALAAAPQAAAPgKAKIiQCcQgLALgPAAQgPAAgKgLg");
	this.shape.setTransform(23.6,20,1.747,1.747);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.tagok, new cjs.Rectangle(0,0,47.3,40.1), null);


(lib.nivell = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#386790").s().p("AgnCAIAAj/IBPAAIAAD/g");
	this.shape.setTransform(172.5,17.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#386790").s().p("AgnCAIAAi+IBOAAIAAC+gAgohMIAAgzIBRAAIAAAzg");
	this.shape_1.setTransform(162.1,17.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#386790").s().p("AgQBiIgTgGIgRgJIgOgNQgOgNgIgSIgFgTIgCgTIAAgBQAAgMAHgZQAFgMARgUIAPgMIARgKQAKgEALgCQALgCAKAAQAQAAANAEQANAEAMAHQALAHAIAJQAIAKAGAMIg6AgQgEgKgHgEQgHgFgKAAQgLAAgIAJQgJAKAAAOIAAAAQAAAPAJAKQAHAJAMAAQAKAAAHgFQAGgEAGgKIA6AhQgGAMgJAKQgJAJgLAHQgMAHgNADQgPAEgQAAQgKAAgLgCg");
	this.shape_2.setTransform(147.2,20.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#386790").s().p("Ag8CHQgMgEgIgHQgJgIgEgLQgFgLABgOIAAgBQAAgOAEgLQAGgLAKgIQAJgHANgEQAOgEARAAQAQAAAcAHIAAgDQAAgOgJgHQgJgGgRAAQgOAAgNADQgMABgNAGIgPg0QASgHASgDQAVgEAYAAQASAAAeAGQAKADAIAFQAHAFAGAGQALAKAFAPQAFANAAAVIAABtIhQAAIAAgTQgLALgMAGQgOAHgRAAQgOAAgLgEgAgPA7QgGAGgBAJIAAAAQABAJAFAFQAFAFAIAAQAJAAAHgIQAHgIAAgOIAAgIQgIgDgKAAQgLAAgGAHgAgXhHIAghDIBNAUIg5Avg");
	this.shape_3.setTransform(126.1,16.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#386790").s().p("AgxCBIAAiBIgWAAIAAg9IAWAAQAAgQAFgLQADgNAJgJQAKgKAOgEQAMgEATAAQAXAAAaAFIAAAyQgNgDgMAAQgKAAgFAEQgEAEAAAIIAAABIAsAAIAAA7IgrAAIAACBg");
	this.shape_4.setTransform(109.1,17.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#386790").s().p("AgnCAIAAj/IBPAAIAAD/g");
	this.shape_5.setTransform(87.4,17.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#386790").s().p("AgkBdIgSgJIgPgLIgMgPIgJgRIgGgTIgCgVIAAAAQAAgOAIgaQAHgRANgOIAOgNIARgJIATgFIAUgCQAMAAALACQALACAKAEQAJAEAIAGQAIAGAGAHIAKAQIAIASQAGASAAAVIAAAOIh6AAQAEAMAJAHQAKAGAMAAQAKAAAKgFQAJgFAKgKIAqAiQgHAKgIAHQgJAIgLAGQgLAFgMADQgOADgPAAQgdgDgNgEgAAbgPQgCgOgHgHQgHgIgLAAQgJAAgHAIQgGAHgCAOIAzAAIAAAAg");
	this.shape_6.setTransform(71.7,20.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#386790").s().p("AgjBgIhOi/IBTAAIAeBfIAghfIBSAAIhOC/g");
	this.shape_7.setTransform(51.1,20.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#386790").s().p("AgnCAIAAi+IBPAAIAAC+gAgohMIAAgzIBRAAIAAAzg");
	this.shape_8.setTransform(34.6,17.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#386790").s().p("AAyB6IhahwIAABwIhRAAIAAj0IBMAAIBWBsIAAhsIBRAAIAAD0g");
	this.shape_9.setTransform(15.7,17.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#386790").s().p("AgPBiIgUgGIgRgJIgPgNQgNgNgHgSIgGgTIgCgTIAAgBQAAgMAIgZQAEgMAQgUIAQgMIASgKQAKgEAKgCQALgCAKAAQAQAAAOAEQANAEAKAHQALAHAJAJQAIAKAFAMIg4AgQgGgKgGgEQgHgFgJAAQgMAAgJAJQgIAKAAAOIAAAAQAAAPAIAKQAJAJALAAQAJAAAIgFQAGgEAHgKIA5AhQgHAMgIAKQgJAJgLAHQgLAHgOADQgPAEgRAAQgJAAgKgCg");
	this.shape_10.setTransform(171.1,20.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#386790").s().p("Ag7CHIAAi+IBOAAIAAC+gAgxhDIAhhDIBNAUIg6Avg");
	this.shape_11.setTransform(157.8,16.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#386790").s().p("AgxCBIAAiBIgWAAIAAg9IAWAAQAAgQAFgLQADgNAJgJQAKgKAOgEQAMgEATAAQAXAAAaAFIAAAyQgMgDgNAAQgKAAgFAEQgEAEAAAIIAAABIAsAAIAAA7IgqAAIAACBg");
	this.shape_12.setTransform(143.2,17.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#386790").s().p("AgnCAIAAi+IBOAAIAAC+gAgohMIAAgzIBRAAIAAAzg");
	this.shape_13.setTransform(130.4,17.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#386790").s().p("Ag7B7QgOgHgLgNQgLgNgHgTQgGgSAAgVIAAgBQAAgPAGgaQAHgSALgNQALgOAOgHQAQgHAQAAQAPAAAUAIQALAGALAMIAAhWIBPAAIAAD+IhPAAIAAgXQgMAOgKAFQgIAEgHADQgIACgLAAQgRAAgQgHgAgWAFQgKAKAAAPIAAABQAAAOAKAJQAJALANAAQANAAAKgLQAIgJABgOIAAgBQgBgOgIgKQgKgKgNABQgNAAgJAIg");
	this.shape_14.setTransform(113,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:162.1}},{t:this.shape,p:{x:172.5}}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_1,p:{x:186}},{t:this.shape,p:{x:196.4}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,179.9,39);


(lib.missatgeok = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED6E2F").s().p("ABJB7IgWg3IhmAAIgXA3Ig3AAIBpj1IAxAAIBpD1gAAgAVIgghPIggBPIBAAAg");
	this.shape.setTransform(415,17.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED6E2F").s().p("AgaB6IAAjCIhKAAIAAgyIDJAAIAAAyIhKAAIAADCg");
	this.shape_1.setTransform(393,17.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ED6E2F").s().p("AgNB8QgMgDgMgEQgKgFgLgHQgKgHgIgIQgJgJgGgKQgHgKgFgLQgEgMgDgMQgCgMAAgOIAAAAQAAgMACgNQADgMAEgMQAFgLAGgKQAHgKAJgJQAIgIAKgHQALgHALgFQAMgFANgCQAMgDAOAAQARAAAOADQAOACAMAGQAPAGAZAVIgjAnQgPgNgOgHQgQgHgSAAQgOAAgNAGQgNAGgKAKQgJALgFANQgGAOAAAQIAAAAQAAAPAGAOQAFAOAJALQAKALANAGQANAGAOAAQAOAAAWgIQANgGAQgPIAiAjQgKAKgJAIQgLAIgMAGQgMAGgOACQgPAEgRAAQgNAAgNgDg");
	this.shape_2.setTransform(369,17.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ED6E2F").s().p("AhcB6IAAj0IC3AAIAAAwIiCAAIAAAyIBzAAIAAAvIhzAAIAAAzICEAAIAAAwg");
	this.shape_3.setTransform(344.7,17.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ED6E2F").s().p("AArB6Ig0hOIgqAAIAABOIg2AAIAAj0IBvAAQAQABAZAGQASAGANANQAKAKAFAOQAGAOAAARIAAABQAAAPgEAMQgEAMgHAJQgHAJgKAHQgJAGgMAFIA8BXgAgzgDIA2AAQAJAAAIgCQAIgDAFgEQAFgFADgGQADgGAAgIIAAgBQAAgIgDgHQgDgHgFgEQgGgEgIgCQgHgDgKAAIg1AAg");
	this.shape_4.setTransform(320.6,17.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ED6E2F").s().p("AArB6Ig0hOIgqAAIAABOIg2AAIAAj0IBvAAQAQABAZAGQASAGANANQAKAKAFAOQAGAOAAARIAAABQAAAPgEAMQgEAMgHAJQgHAJgKAHQgJAGgMAFIA8BXgAgzgDIA2AAQAJAAAIgCQAIgDAFgEQAFgFADgGQADgGAAgIIAAgBQAAgIgDgHQgDgHgFgEQgGgEgIgCQgHgDgKAAIg1AAg");
	this.shape_5.setTransform(295.3,17.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ED6E2F").s().p("AgbB8QgNgDgMgEQgLgFgLgHQgKgHgJgIQgIgJgHgKQgHgKgFgMQgEgLgDgMQgCgNAAgNIAAAAQAAgMACgNQADgMAFgMQAEgLAHgKQAHgKAJgJQAJgIAKgHQAKgHAMgFQAMgFANgCQANgDANAAQAOAAAOADQANACAMAFQALAFALAHQAKAGAJAJQAIAJAHAKQAHAKAFALQAEALADANQACAMAAANIAAAAQAAANgCAMQgDAMgFAMQgEALgHAKQgHALgJAIQgIAJgLAHQgKAHgMAEQgMAFgNADQgNADgOAAQgNAAgOgDgAgdhGQgNAGgKAKQgKALgFANQgGAOAAAQIAAAAQAAAPAGAOQAFAOAKALQAKALANAGQAOAGAPAAQAQAAAOgGQANgGAKgLQAKgKAFgOQAGgOAAgQIAAAAQAAgPgGgOQgFgOgKgKQgKgLgOgGQgOgGgPAAQgPAAgOAGg");
	this.shape_6.setTransform(266.9,17.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ED6E2F").s().p("AgMB8QgNgDgMgEQgKgFgKgHQgLgHgIgIQgIgJgHgKQgHgKgEgLQgFgMgCgMQgDgMAAgOIAAAAQAAgMADgNQABgMAGgMQAEgLAGgKQAIgKAIgJQAIgIALgHQAKgHALgFQAMgFANgCQAMgDAOAAQARAAAOADQAOACAMAGQAQAGAYAVIgjAnQgPgNgOgHQgQgHgRAAQgPAAgNAGQgNAGgKAKQgJALgFANQgGAOAAAQIAAAAQAAAPAGAOQAFAOAJALQAJALAOAGQANAGAPAAQAOAAAVgIQANgGAQgPIAiAjQgKAKgJAIQgLAIgMAGQgMAGgOACQgPAEgRAAQgNAAgMgDg");
	this.shape_7.setTransform(240.1,17.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ED6E2F").s().p("ABJB7IgWg3IhmAAIgXA3Ig3AAIBpj1IAxAAIBpD1gAAgAVIgghPIggBPIBAAAg");
	this.shape_8.setTransform(202.6,17.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ED6E2F").s().p("AgaB6IAAj0IA1AAIAAD0g");
	this.shape_9.setTransform(183,17.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#ED6E2F").s().p("AgMB8QgNgDgMgEQgLgFgJgHQgLgHgIgIQgJgJgGgKQgHgKgEgLQgFgMgCgMQgDgMAAgOIAAAAQAAgMADgNQABgMAGgMQAEgLAHgKQAGgKAJgJQAIgIALgHQAJgHAMgFQAMgFANgCQAMgDAOAAQARAAAOADQAOACAMAGQAQAGAYAVIgjAnQgPgNgOgHQgQgHgRAAQgPAAgNAGQgNAGgKAKQgJALgGANQgEAOAAAQIAAAAQAAAPAEAOQAGAOAJALQAJALAOAGQANAGAPAAQAOAAAVgIQANgGAQgPIAiAjQgKAKgJAIQgLAIgMAGQgMAGgOACQgPAEgRAAQgNAAgMgDg");
	this.shape_10.setTransform(164.4,17.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#ED6E2F").s().p("AA/B6Ih2iaIAACaIg1AAIAAj0IAyAAIByCXIAAiXIA1AAIAAD0g");
	this.shape_11.setTransform(137.4,17.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#ED6E2F").s().p("AhcB6IAAj0IC3AAIAAAwIiCAAIAAAyIBzAAIAAAvIhzAAIAAAzICEAAIAAAwg");
	this.shape_12.setTransform(112.4,17.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#ED6E2F").s().p("AgsB1QgKgDgIgFQgJgFgGgHQgHgHgGgIQgFgJgDgKQgEgKgCgMIgCgZIAAiMIA2AAIAACKQAAAPAEALQADALAHAJQAHAHAKAEQAKAEALgBQANABAJgEQAKgEAHgHQAHgIADgKQAEgMAAgOIAAiMIA2AAIAACJIgCAbQgCAMgEALQgDAKgGAJQgFAIgHAHQgHAHgJAFQgIAFgKADQgcAIgQAAQgfgDgNgFg");
	this.shape_13.setTransform(86.9,18);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#ED6E2F").s().p("AgNB8QgMgDgLgEQgLgFgLgHQgKgHgIgIQgIgJgHgKQgHgKgFgLQgEgMgCgMQgDgMAAgOIAAAAQAAgMADgNQACgMAEgMQAFgLAHgKQAHgKAHgJQAJgIAKgHQAKgHAMgFQAMgFANgCQAMgDAOAAQAQAAAPADQAOACAMAGQAPAGAYAVIgiAnQgPgNgOgHQgQgHgSAAQgOAAgNAGQgNAGgJAKQgKALgGANQgEAOAAAQIAAAAQAAAPAEAOQAGAOAJALQAJALANAGQAOAGAOAAQAOAAAWgIQANgGAQgPIAiAjQgKAKgKAIQgKAIgMAGQgMAGgOACQgPAEgSAAQgMAAgNgDg");
	this.shape_14.setTransform(61.1,17.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#ED6E2F").s().p("AhcB6IAAj0IC3AAIAAAwIiCAAIAAAyIBzAAIAAAvIhzAAIAAAzICEAAIAAAwg");
	this.shape_15.setTransform(36.7,17.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#ED6E2F").s().p("AgTB7QgOgCgOgFQgNgFgMgHQgNgHgLgKIAggnQASAPARAIIASAFQAKACAJAAQARAAAJgFQAKgHAAgKIAAgBQAAgLgKgGQgKgHgdgIIghgKQgQgGgKgHQgLgIgFgMQgGgNAAgSIAAAAQAAgQAGgOQAHgOALgKQALgJAQgGQAQgFATAAQAMAAANACQAMACALAEQALAEALAGIAUANIgcApQgRgMgQgGQgQgGgOgBQgPABgJAGQgHAGgBAJIAAAAQAAAMALAGQAKAHAfAIQAUAFAOAGQAOAGAKAIQAKAIAFALQAFANAAAPIAAABQAAASgHAPQgGAOgMAKQgMAJgQAFQgRAFgUAAQgNAAgNgDg");
	this.shape_16.setTransform(13,17.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.missatgeok, new cjs.Rectangle(0,0,430.9,39), null);


(lib.memoriza = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABMCSIgVhBIhtAAIgXBBIhBAAIBvkjIBAAAIBuEjgAgmAhIBMAAIglhqIgBAAg");
	this.shape.setTransform(268,46.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah6CSIAAgzICbi6IiPAAIAAg2IDlAAIAAAyIicC7ICgAAIAAA2g");
	this.shape_1.setTransform(240.7,46.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfCSIAAkjIA/AAIAAEjg");
	this.shape_2.setTransform(221.3,46.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA+CSQgFgOgCgTIgDglQgEgXgKgKQgLgLgYAAIhAAAIAAByIhAAAIAAkjICdAAQAUAAAPAGQAQAGALALQAMALAGAPQAGAOAAARQAAANgDALQgDALgFAKQgLATgZAJIAAABQAMADAIAHQAIAGAFAKQAFAJACALIADAWIABAQIABAUIADASQADAJAEAGgAg9gNIBGAAQAWAAALgKQALgKAAgWQAAgVgLgKQgFgFgJgCQgIgCgLAAIhGAAg");
	this.shape_3.setTransform(201.1,46.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag8CNQgNgGgLgHQgLgJgKgJQgTgWgJgbQgKgbAAggQAAghAKgbQAFgOAHgNQAHgMAJgLQAKgKALgIQALgJANgFQAbgMAhAAQAiAAAbAMQANAFAMAJQAKAIAKAKQAJALAHAMQAHANAFAOQAKAbAAAhQAAAggKAbQgKAbgSAWQgKAJgKAJQgMAHgNAGQgbAMgiAAQghAAgbgMgAgkhaQgPAIgKAPQgJAOgEASQgFASAAATQAAASAFARQAEARAJAOQAKAOAPAJQAPAJAVAAQAVAAAQgJQAPgJAJgOQAKgOAEgRQAEgRAAgSQAAgTgEgSQgEgSgKgOQgJgPgPgIQgQgIgVAAQgVAAgPAIg");
	this.shape_4.setTransform(169.8,46.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABiCSIAAjOIgBAAIhIDOIgxAAIhHjMIgBAAIAADMIg9AAIAAkjIBbAAIBEDIIAAAAIBBjIIBbAAIAAEjg");
	this.shape_5.setTransform(135.3,46.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhuCSIAAkjIDaAAIAAA2IiaAAIAAA+ICNAAIAAAxIiNAAIAABIICdAAIAAA2g");
	this.shape_6.setTransform(104.1,46.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABiCSIAAjOIgBAAIhIDOIgxAAIhHjMIgBAAIAADMIg9AAIAAkjIBbAAIBEDIIAAAAIBBjIIBbAAIAAEjg");
	this.shape_7.setTransform(71.6,46.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EF6D2C").s().p("A4hHMQhQAAAAhQIAAr3QAAhQBQAAMAxDAAAQBQAAAABQIAAL3QAABQhQAAg");
	this.shape_8.setTransform(165,46);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,330,92);


(lib.caixaorange = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB6F39").s().p("A3EPoQgYAAgRgQQgQgRAAgYIAA9dQAAgYAQgRQARgQAYAAMAuJAAAQAYAAARAQQAQARAAAYIAAddQAAAYgQARQgRAQgYAAg");
	this.shape.setTransform(306.9,200,2,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.caixaorange, new cjs.Rectangle(0,0,613.7,400), null);


(lib.boto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AzrTsMAAAgnXMAnXAAAMAAAAnXg");
	this.shape.setTransform(126,126);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,252,252);


(lib.botnextlevel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhhB6IAAj0IBSAAIAACvIBxAAIAABFg");
	this.shape.setTransform(176.9,17.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoB6IAAj0IBRAAIAAD0g");
	this.shape_1.setTransform(160.1,17.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSB9QgMgCgMgFQgLgEgKgHQgLgGgIgIQgJgJgHgKQgHgKgFgMQgFgLgDgNQgCgOAAgOIAAAAQAAgNACgNQADgMAFgMQAEgLAHgLIAQgTQAJgIALgHQAKgHAMgEQAMgFAMgDQANgCANAAQAUAAARAFQARAEAOAJQANAIALAMQALALAIAPIhEAnQgHgOgKgHQgLgIgQAAQgJAAgJAEQgIAEgHAHQgFAIgEAJQgDAKAAALIAAAAQAAAMADAKQAEAKAGAHQAGAHAIAEQAJAEAJAAQAIAAAHgCQAHgCAGgFQAKgHAIgPIBDAmQgIAPgKALQgLANgNAIQgPAJgRAFQgTAGgWAAQgMAAgMgDg");
	this.shape_2.setTransform(142.2,17.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag+CfIAAj0IBRAAIAAD0gAgzhjIAhg7IBQATIg4Aog");
	this.shape_3.setTransform(125.8,14.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhlB6IAAj0IDMAAIAABHIh7AAIAAAeIByAAIAAA/IhyAAIAABQg");
	this.shape_4.setTransform(107.4,17.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgoB6IAAj0IBRAAIAAD0g");
	this.shape_5.setTransform(90.2,17.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah3B6IAAj0IBeAAQASAAAPACQAQADANAEQAOAEALAGQAMAHAJAIQAKAIAGAJQAHAJAFALQAEAMACAMQADAMAAAOIAAABQAAANgDALQgCANgEALQgFAMgHAJQgHALgKAHQgJAJgMAGQgLAHgOAEQgOAFgQACQgQACgSAAgAglAzIAOAAQAOAAAKgDQAMgDAIgGQAHgHAFgJQAEgJAAgNIAAgBQAAgMgEgLQgFgJgHgGQgIgGgMgDQgKgDgOAAIgOAAg");
	this.shape_6.setTransform(71.8,17.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhhB6IAAj0IBSAAIAACvIByAAIAABFg");
	this.shape_7.setTransform(39.4,17.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhoB6IAAj0IDQAAIAABEIiAAAIAAAYIB3AAIAAA7Ih3AAIAAAbICBAAIAABCg");
	this.shape_8.setTransform(16.8,17.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgmB7Ihkj1IBcAAIAvCIIAviIIBbAAIhkD1g");
	this.shape_9.setTransform(-8.6,17.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgoB6IAAj0IBRAAIAAD0g");
	this.shape_10.setTransform(-27.6,17.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAyB6IhbhwIAABwIhRAAIAAj0IBNAAIBWBsIAAhsIBSAAIAAD0g");
	this.shape_11.setTransform(-46.8,17.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.8)").s().p("AhhB6IAAj0IBSAAIAACvIBxAAIAABFg");
	this.shape_12.setTransform(176.9,17.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.8)").s().p("AgoB6IAAj0IBRAAIAAD0g");
	this.shape_13.setTransform(160.1,17.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.8)").s().p("AgSB9QgMgCgMgFQgLgEgKgHQgLgGgIgIQgJgJgHgKQgHgKgFgMQgFgLgDgNQgCgOAAgOIAAAAQAAgNACgNQADgMAFgMQAEgLAHgLIAQgTQAJgIALgHQAKgHAMgEQAMgFAMgDQANgCANAAQAUAAARAFQARAEAOAJQANAIALAMQALALAIAPIhEAnQgHgOgKgHQgLgIgQAAQgJAAgJAEQgIAEgHAHQgFAIgEAJQgDAKAAALIAAAAQAAAMADAKQAEAKAGAHQAGAHAIAEQAJAEAJAAQAIAAAHgCQAHgCAGgFQAKgHAIgPIBDAmQgIAPgKALQgLANgNAIQgPAJgRAFQgTAGgWAAQgMAAgMgDg");
	this.shape_14.setTransform(142.2,17.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.8)").s().p("Ag+CfIAAj0IBRAAIAAD0gAgzhjIAhg7IBQATIg4Aog");
	this.shape_15.setTransform(125.8,14.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.8)").s().p("AhlB6IAAj0IDMAAIAABHIh7AAIAAAeIByAAIAAA/IhyAAIAABQg");
	this.shape_16.setTransform(107.4,17.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.8)").s().p("AgoB6IAAj0IBRAAIAAD0g");
	this.shape_17.setTransform(90.2,17.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.8)").s().p("Ah3B6IAAj0IBeAAQASAAAPACQAQADANAEQAOAEALAGQAMAHAJAIQAKAIAGAJQAHAJAFALQAEAMACAMQADAMAAAOIAAABQAAANgDALQgCANgEALQgFAMgHAJQgHALgKAHQgJAJgMAGQgLAHgOAEQgOAFgQACQgQACgSAAgAglAzIAOAAQAOAAAKgDQAMgDAIgGQAHgHAFgJQAEgJAAgNIAAgBQAAgMgEgLQgFgJgHgGQgIgGgMgDQgKgDgOAAIgOAAg");
	this.shape_18.setTransform(71.8,17.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.8)").s().p("AhhB6IAAj0IBSAAIAACvIByAAIAABFg");
	this.shape_19.setTransform(39.4,17.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.8)").s().p("AhoB6IAAj0IDQAAIAABEIiAAAIAAAYIB3AAIAAA7Ih3AAIAAAbICBAAIAABCg");
	this.shape_20.setTransform(16.8,17.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.8)").s().p("AgmB7Ihkj1IBcAAIAvCIIAviIIBbAAIhkD1g");
	this.shape_21.setTransform(-8.6,17.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.8)").s().p("AgoB6IAAj0IBRAAIAAD0g");
	this.shape_22.setTransform(-27.6,17.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.8)").s().p("AAyB6IhbhwIAABwIhRAAIAAj0IBNAAIBWBsIAAhsIBSAAIAAD0g");
	this.shape_23.setTransform(-46.8,17.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(69,69,69,0.8)").s().p("AhhB6IAAj0IBSAAIAACvIBxAAIAABFg");
	this.shape_24.setTransform(176.9,17.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(69,69,69,0.8)").s().p("AgoB6IAAj0IBRAAIAAD0g");
	this.shape_25.setTransform(160.1,17.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(69,69,69,0.8)").s().p("AgSB9QgMgCgMgFQgLgEgKgHQgLgGgIgIQgJgJgHgKQgHgKgFgMQgFgLgDgNQgCgOAAgOIAAAAQAAgNACgNQADgMAFgMQAEgLAHgLIAQgTQAJgIALgHQAKgHAMgEQAMgFAMgDQANgCANAAQAUAAARAFQARAEAOAJQANAIALAMQALALAIAPIhEAnQgHgOgKgHQgLgIgQAAQgJAAgJAEQgIAEgHAHQgFAIgEAJQgDAKAAALIAAAAQAAAMADAKQAEAKAGAHQAGAHAIAEQAJAEAJAAQAIAAAHgCQAHgCAGgFQAKgHAIgPIBDAmQgIAPgKALQgLANgNAIQgPAJgRAFQgTAGgWAAQgMAAgMgDg");
	this.shape_26.setTransform(142.2,17.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(69,69,69,0.8)").s().p("Ag+CfIAAj0IBRAAIAAD0gAgzhjIAhg7IBQATIg4Aog");
	this.shape_27.setTransform(125.8,14.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(69,69,69,0.8)").s().p("AhlB6IAAj0IDMAAIAABHIh7AAIAAAeIByAAIAAA/IhyAAIAABQg");
	this.shape_28.setTransform(107.4,17.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(69,69,69,0.8)").s().p("AgoB6IAAj0IBRAAIAAD0g");
	this.shape_29.setTransform(90.2,17.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(69,69,69,0.8)").s().p("Ah3B6IAAj0IBeAAQASAAAPACQAQADANAEQAOAEALAGQAMAHAJAIQAKAIAGAJQAHAJAFALQAEAMACAMQADAMAAAOIAAABQAAANgDALQgCANgEALQgFAMgHAJQgHALgKAHQgJAJgMAGQgLAHgOAEQgOAFgQACQgQACgSAAgAglAzIAOAAQAOAAAKgDQAMgDAIgGQAHgHAFgJQAEgJAAgNIAAgBQAAgMgEgLQgFgJgHgGQgIgGgMgDQgKgDgOAAIgOAAg");
	this.shape_30.setTransform(71.8,17.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(69,69,69,0.8)").s().p("AhhB6IAAj0IBSAAIAACvIByAAIAABFg");
	this.shape_31.setTransform(39.4,17.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(69,69,69,0.8)").s().p("AhoB6IAAj0IDQAAIAABEIiAAAIAAAYIB3AAIAAA7Ih3AAIAAAbICBAAIAABCg");
	this.shape_32.setTransform(16.8,17.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(69,69,69,0.8)").s().p("AgmB7Ihkj1IBcAAIAvCIIAviIIBbAAIhkD1g");
	this.shape_33.setTransform(-8.6,17.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(69,69,69,0.8)").s().p("AgoB6IAAj0IBRAAIAAD0g");
	this.shape_34.setTransform(-27.6,17.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(69,69,69,0.8)").s().p("AAyB6IhbhwIAABwIhRAAIAAj0IBNAAIBWBsIAAhsIBSAAIAAD0g");
	this.shape_35.setTransform(-46.8,17.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FC2330").ss(1,1,1).p("A4DkcMAwHAAAIAAI5MgwHAAAg");
	this.shape_36.setTransform(63.1,17.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(69,69,69,0.8)").s().p("A4DEdIAAo5MAwHAAAIAAI5g");
	this.shape_37.setTransform(63.1,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.5,0,251.7,39);


(lib.botjugaragain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAaB6IgthFIgSAAIAABFIhSAAIAAj0IB3AAQAQAAAOACQANACALAEQALAEAJAFQAIAFAGAGQALAMAGAOQAGAOAAATIAAAAQAAANgEAMQgDAKgHAKQgGAJgIAIQgJAHgMAFIA6BTgAglgFIAkAAQAOAAAIgGQAIgHAAgLIAAgBQAAgLgIgGQgIgGgOAAIgkAAg");
	this.shape.setTransform(210.5,17.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA3B7IgNggIhVAAIgNAgIhXAAIBnj1IBQAAIBoD1gAAWAgIgWg6IgWA6IAsAAg");
	this.shape_1.setTransform(183.2,17.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMB9QgNgCgNgFQgMgEgLgHQgLgGgKgIQgJgJgHgKQgIgKgFgMQgFgLgDgNQgDgNAAgPIAAAAQAAgNADgNQACgMAFgMQAFgLAIgLQAHgKAJgJQAJgIALgHQAKgHAMgEQANgFANgDQAOgCANAAQAQAAAOADQAOACANAFQANAFALAHQAMAGAKAJIguA3QgMgKgOgFQgNgGgPAAQgMAAgJAEQgKAFgIAHQgHAIgEALQgEAKAAAMIAAAAQAAANAEALQAEALAIAIQAIAHALAFQAJAEANAAQASAAAKgGIAAgYIgqAAIAAg0IB3AAIAABxQgKAIgMAHQgMAHgNAEQgOAFgPADQgQADgQAAQgOAAgNgDg");
	this.shape_2.setTransform(155.9,17.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxB3QgLgEgKgFQgKgFgHgHQgJgHgFgJQgHgJgDgLQgFgKgCgNQgCgOAAgPIAAiGIBTAAIAACFQAAALADAJQACAIAGAFQAEAFAIADQAGACAIAAQAJAAAGgCQAHgDAFgEQAFgGADgHQADgIAAgLIAAiHIBTAAIAACEQAAAQgCAOQgDANgDALQgFALgGAJQgGAJgJAHQgHAHgKAFQgKAFgLAEQgfAGgSAAQgigCgPgEg");
	this.shape_3.setTransform(129.5,18);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghB5QgNgCgMgHQgLgFgJgJQgIgIgHgLIA1gtQAIALAHAFQAIAGAJAAQAKAAAGgIQAGgIAAgNIAAiXIBQAAIAACWQgCAdgEANQgDAJgFAHIgLAOQgOANgSAHQgZAHgNAAQgSAAgOgEg");
	this.shape_4.setTransform(105.7,18);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA3B7IgNggIhVAAIgMAgIhYAAIBnj1IBQAAIBoD1gAAVAgIgVg6IgWA6IArAAg");
	this.shape_5.setTransform(73.7,17.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaB6IgthFIgSAAIAABFIhSAAIAAj0IB3AAQAQAAAOACQANACALAEQALAEAJAFQAIAFAGAGQALAMAGAOQAFAOABATIAAAAQAAANgEAMQgDAKgHAKQgGAJgIAIQgJAHgMAFIA6BTgAglgFIAkAAQAOAAAIgGQAIgHAAgLIAAgBQAAgLgIgGQgIgGgOAAIgkAAg");
	this.shape_6.setTransform(39.2,17.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhoB6IAAj0IDQAAIAABEIiAAAIAAAYIB3AAIAAA7Ih3AAIAAAbICBAAIAABCg");
	this.shape_7.setTransform(14.5,17.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgmB7Ihkj1IBcAAIAvCIIAviIIBbAAIhkD1g");
	this.shape_8.setTransform(-10.9,17.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhhB6IAAj0IBSAAIAACvIBxAAIAABFg");
	this.shape_9.setTransform(-30.6,17.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbB9QgNgDgMgEQgMgFgLgHQgLgHgJgIQgIgJgIgKQgHgKgFgMQgFgLgCgNQgDgMAAgOIAAAAQAAgMADgNQACgNAGgLQAFgMAHgKQAHgKAJgJQAJgIALgHQAKgHAMgFQANgFANgCQANgDANAAQAOAAAOADQANACAMAFQAMAFALAGQAKAHAJAJQAJAJAHAKQAHAKAFALQAFAMADAMQADANAAANIAAAAQAAANgDANQgDAMgFAMQgFALgHAKQgHALgJAIQgJAJgLAHQgLAHgMAEQgMAFgNADQgOADgNAAQgOAAgNgDgAgVgyQgJAEgGAIQgHAIgEAJQgDAKAAALIAAAAQAAALADAKQAEAKAHAHQAHAIAJAEQAKAFAKAAQAMAAAJgFQAJgEAHgHQAHgIADgKQAEgKAAgLIAAAAQAAgKgEgKQgDgKgHgIQgHgIgJgEQgKgEgLAAQgLAAgKAEg");
	this.shape_10.setTransform(-56,17.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgmB7Ihkj1IBcAAIAvCIIAviIIBbAAIhkD1g");
	this.shape_11.setTransform(-82.1,17.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.8)").s().p("AAaB6IgthFIgSAAIAABFIhSAAIAAj0IB3AAQAQAAAOACQANACALAEQALAEAJAFQAIAFAGAGQALAMAGAOQAGAOAAATIAAAAQAAANgEAMQgDAKgHAKQgGAJgIAIQgJAHgMAFIA6BTgAglgFIAkAAQAOAAAIgGQAIgHAAgLIAAgBQAAgLgIgGQgIgGgOAAIgkAAg");
	this.shape_12.setTransform(210.5,17.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.8)").s().p("AA3B7IgNggIhVAAIgNAgIhXAAIBnj1IBQAAIBoD1gAAWAgIgWg6IgWA6IAsAAg");
	this.shape_13.setTransform(183.2,17.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.8)").s().p("AgMB9QgNgCgNgFQgMgEgLgHQgLgGgKgIQgJgJgHgKQgIgKgFgMQgFgLgDgNQgDgNAAgPIAAAAQAAgNADgNQACgMAFgMQAFgLAIgLQAHgKAJgJQAJgIALgHQAKgHAMgEQANgFANgDQAOgCANAAQAQAAAOADQAOACANAFQANAFALAHQAMAGAKAJIguA3QgMgKgOgFQgNgGgPAAQgMAAgJAEQgKAFgIAHQgHAIgEALQgEAKAAAMIAAAAQAAANAEALQAEALAIAIQAIAHALAFQAJAEANAAQASAAAKgGIAAgYIgqAAIAAg0IB3AAIAABxQgKAIgMAHQgMAHgNAEQgOAFgPADQgQADgQAAQgOAAgNgDg");
	this.shape_14.setTransform(155.9,17.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.8)").s().p("AgxB3QgLgEgKgFQgKgFgHgHQgJgHgFgJQgHgJgDgLQgFgKgCgNQgCgOAAgPIAAiGIBTAAIAACFQAAALADAJQACAIAGAFQAEAFAIADQAGACAIAAQAJAAAGgCQAHgDAFgEQAFgGADgHQADgIAAgLIAAiHIBTAAIAACEQAAAQgCAOQgDANgDALQgFALgGAJQgGAJgJAHQgHAHgKAFQgKAFgLAEQgfAGgSAAQgigCgPgEg");
	this.shape_15.setTransform(129.5,18);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.8)").s().p("AghB5QgNgCgMgHQgLgFgJgJQgIgIgHgLIA1gtQAIALAHAFQAIAGAJAAQAKAAAGgIQAGgIAAgNIAAiXIBQAAIAACWQgCAdgEANQgDAJgFAHIgLAOQgOANgSAHQgZAHgNAAQgSAAgOgEg");
	this.shape_16.setTransform(105.7,18);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.8)").s().p("AA3B7IgNggIhVAAIgMAgIhYAAIBnj1IBQAAIBoD1gAAVAgIgVg6IgWA6IArAAg");
	this.shape_17.setTransform(73.7,17.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.8)").s().p("AAaB6IgthFIgSAAIAABFIhSAAIAAj0IB3AAQAQAAAOACQANACALAEQALAEAJAFQAIAFAGAGQALAMAGAOQAFAOABATIAAAAQAAANgEAMQgDAKgHAKQgGAJgIAIQgJAHgMAFIA6BTgAglgFIAkAAQAOAAAIgGQAIgHAAgLIAAgBQAAgLgIgGQgIgGgOAAIgkAAg");
	this.shape_18.setTransform(39.2,17.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.8)").s().p("AhoB6IAAj0IDQAAIAABEIiAAAIAAAYIB3AAIAAA7Ih3AAIAAAbICBAAIAABCg");
	this.shape_19.setTransform(14.5,17.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.8)").s().p("AgmB7Ihkj1IBcAAIAvCIIAviIIBbAAIhkD1g");
	this.shape_20.setTransform(-10.9,17.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.8)").s().p("AhhB6IAAj0IBSAAIAACvIBxAAIAABFg");
	this.shape_21.setTransform(-30.6,17.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.8)").s().p("AgbB9QgNgDgMgEQgMgFgLgHQgLgHgJgIQgIgJgIgKQgHgKgFgMQgFgLgCgNQgDgMAAgOIAAAAQAAgMADgNQACgNAGgLQAFgMAHgKQAHgKAJgJQAJgIALgHQAKgHAMgFQANgFANgCQANgDANAAQAOAAAOADQANACAMAFQAMAFALAGQAKAHAJAJQAJAJAHAKQAHAKAFALQAFAMADAMQADANAAANIAAAAQAAANgDANQgDAMgFAMQgFALgHAKQgHALgJAIQgJAJgLAHQgLAHgMAEQgMAFgNADQgOADgNAAQgOAAgNgDgAgVgyQgJAEgGAIQgHAIgEAJQgDAKAAALIAAAAQAAALADAKQAEAKAHAHQAHAIAJAEQAKAFAKAAQAMAAAJgFQAJgEAHgHQAHgIADgKQAEgKAAgLIAAAAQAAgKgEgKQgDgKgHgIQgHgIgJgEQgKgEgLAAQgLAAgKAEg");
	this.shape_22.setTransform(-56,17.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.8)").s().p("AgmB7Ihkj1IBcAAIAvCIIAviIIBbAAIhkD1g");
	this.shape_23.setTransform(-82.1,17.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(69,69,69,0.8)").s().p("AAaB6IgthFIgSAAIAABFIhSAAIAAj0IB3AAQAQAAAOACQANACALAEQALAEAJAFQAIAFAGAGQALAMAGAOQAGAOAAATIAAAAQAAANgEAMQgDAKgHAKQgGAJgIAIQgJAHgMAFIA6BTgAglgFIAkAAQAOAAAIgGQAIgHAAgLIAAgBQAAgLgIgGQgIgGgOAAIgkAAg");
	this.shape_24.setTransform(210.5,17.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(69,69,69,0.8)").s().p("AA3B7IgNggIhVAAIgNAgIhXAAIBnj1IBQAAIBoD1gAAWAgIgWg6IgWA6IAsAAg");
	this.shape_25.setTransform(183.2,17.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(69,69,69,0.8)").s().p("AgMB9QgNgCgNgFQgMgEgLgHQgLgGgKgIQgJgJgHgKQgIgKgFgMQgFgLgDgNQgDgNAAgPIAAAAQAAgNADgNQACgMAFgMQAFgLAIgLQAHgKAJgJQAJgIALgHQAKgHAMgEQANgFANgDQAOgCANAAQAQAAAOADQAOACANAFQANAFALAHQAMAGAKAJIguA3QgMgKgOgFQgNgGgPAAQgMAAgJAEQgKAFgIAHQgHAIgEALQgEAKAAAMIAAAAQAAANAEALQAEALAIAIQAIAHALAFQAJAEANAAQASAAAKgGIAAgYIgqAAIAAg0IB3AAIAABxQgKAIgMAHQgMAHgNAEQgOAFgPADQgQADgQAAQgOAAgNgDg");
	this.shape_26.setTransform(155.9,17.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(69,69,69,0.8)").s().p("AgxB3QgLgEgKgFQgKgFgHgHQgJgHgFgJQgHgJgDgLQgFgKgCgNQgCgOAAgPIAAiGIBTAAIAACFQAAALADAJQACAIAGAFQAEAFAIADQAGACAIAAQAJAAAGgCQAHgDAFgEQAFgGADgHQADgIAAgLIAAiHIBTAAIAACEQAAAQgCAOQgDANgDALQgFALgGAJQgGAJgJAHQgHAHgKAFQgKAFgLAEQgfAGgSAAQgigCgPgEg");
	this.shape_27.setTransform(129.5,18);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(69,69,69,0.8)").s().p("AghB5QgNgCgMgHQgLgFgJgJQgIgIgHgLIA1gtQAIALAHAFQAIAGAJAAQAKAAAGgIQAGgIAAgNIAAiXIBQAAIAACWQgCAdgEANQgDAJgFAHIgLAOQgOANgSAHQgZAHgNAAQgSAAgOgEg");
	this.shape_28.setTransform(105.7,18);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(69,69,69,0.8)").s().p("AA3B7IgNggIhVAAIgMAgIhYAAIBnj1IBQAAIBoD1gAAVAgIgVg6IgWA6IArAAg");
	this.shape_29.setTransform(73.7,17.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(69,69,69,0.8)").s().p("AAaB6IgthFIgSAAIAABFIhSAAIAAj0IB3AAQAQAAAOACQANACALAEQALAEAJAFQAIAFAGAGQALAMAGAOQAFAOABATIAAAAQAAANgEAMQgDAKgHAKQgGAJgIAIQgJAHgMAFIA6BTgAglgFIAkAAQAOAAAIgGQAIgHAAgLIAAgBQAAgLgIgGQgIgGgOAAIgkAAg");
	this.shape_30.setTransform(39.2,17.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(69,69,69,0.8)").s().p("AhoB6IAAj0IDQAAIAABEIiAAAIAAAYIB3AAIAAA7Ih3AAIAAAbICBAAIAABCg");
	this.shape_31.setTransform(14.5,17.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(69,69,69,0.8)").s().p("AgmB7Ihkj1IBcAAIAvCIIAviIIBbAAIhkD1g");
	this.shape_32.setTransform(-10.9,17.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(69,69,69,0.8)").s().p("AhhB6IAAj0IBSAAIAACvIBxAAIAABFg");
	this.shape_33.setTransform(-30.6,17.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(69,69,69,0.8)").s().p("AgbB9QgNgDgMgEQgMgFgLgHQgLgHgJgIQgIgJgIgKQgHgKgFgMQgFgLgCgNQgDgMAAgOIAAAAQAAgMADgNQACgNAGgLQAFgMAHgKQAHgKAJgJQAJgIALgHQAKgHAMgFQANgFANgCQANgDANAAQAOAAAOADQANACAMAFQAMAFALAGQAKAHAJAJQAJAJAHAKQAHAKAFALQAFAMADAMQADANAAANIAAAAQAAANgDANQgDAMgFAMQgFALgHAKQgHALgJAIQgJAJgLAHQgLAHgMAEQgMAFgNADQgOADgNAAQgOAAgNgDgAgVgyQgJAEgGAIQgHAIgEAJQgDAKAAALIAAAAQAAALADAKQAEAKAHAHQAHAIAJAEQAKAFAKAAQAMAAAJgFQAJgEAHgHQAHgIADgKQAEgKAAgLIAAAAQAAgKgEgKQgDgKgHgIQgHgIgJgEQgKgEgLAAQgLAAgKAEg");
	this.shape_34.setTransform(-56,17.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(69,69,69,0.8)").s().p("AgmB7Ihkj1IBcAAIAvCIIAviIIBbAAIhkD1g");
	this.shape_35.setTransform(-82.1,17.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FC2330").ss(1,1,1).p("A7zkcMA3nAAAIAAI5Mg3nAAAg");
	this.shape_36.setTransform(66.1,19.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(69,69,69,0.8)").s().p("A7zEdIAAo5MA3nAAAIAAI5g");
	this.shape_37.setTransform(66.1,19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.6,0,321.9,39);


(lib.botjugar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAaB6IgthFIgSAAIAABFIhRAAIAAj0IB2AAQAQAAAOACQANACALAEQAKAEAJAFQAJAFAGAGQAMAMAFAOQAGAOgBATIAAAAQAAANgDAMQgDAKgHAKQgFAJgKAIQgIAHgMAFIA5BTgAglgFIAkAAQAOAAAIgGQAIgHAAgLIAAgBQAAgLgIgGQgIgGgOAAIgkAAg");
	this.shape.setTransform(114.5,17.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA3B7IgNggIhVAAIgNAgIhXAAIBoj1IBQAAIBnD1gAAWAgIgWg6IgWA6IAsAAg");
	this.shape_1.setTransform(87.1,17.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMB9QgNgCgNgFQgMgEgLgHQgLgGgKgIQgJgJgHgKQgIgKgFgMQgFgLgDgNQgDgNAAgPIAAAAQAAgNADgNQACgMAFgMQAFgLAIgLQAHgKAJgJQAJgIALgHQAKgHAMgEQANgFANgDQAOgCANAAQAQAAAOADQAOACANAFQANAFALAHQAMAGAKAJIguA3QgMgKgOgFQgNgGgPAAQgMAAgJAEQgKAFgIAHQgHAIgEALQgEAKAAAMIAAAAQAAANAEALQAEALAIAIQAIAHALAFQAJAEANAAQASAAAKgGIAAgYIgqAAIAAg0IB3AAIAABxQgKAIgMAHQgMAHgNAEQgOAFgPADQgQADgQAAQgOAAgNgDg");
	this.shape_2.setTransform(59.9,17.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxB3QgMgEgJgFQgJgFgJgHQgHgHgGgJQgGgJgEgLQgFgKgCgNQgCgOAAgPIAAiGIBTAAIAACFQAAALADAJQACAIAGAFQAFAFAGADQAIACAHAAQAIAAAHgCQAHgDAFgEQAFgGADgHQACgIAAgLIAAiHIBUAAIAACEQAAAQgCAOQgCANgEALQgFALgGAJQgHAJgHAHQgIAHgKAFQgJAFgMAEQggAGgRAAQgigCgPgEg");
	this.shape_3.setTransform(33.5,18);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghB5QgNgCgMgHQgLgFgJgJQgIgIgHgLIA1gtQAIALAHAFQAIAGAJAAQAKAAAGgIQAGgIAAgNIAAiXIBQAAIAACWQgCAdgEANQgDAJgFAHQgFAIgHAGQgNANgRAHQgaAHgOAAQgQAAgPgEg");
	this.shape_4.setTransform(9.7,18);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.6)").s().p("AAaB6IgthFIgSAAIAABFIhRAAIAAj0IB2AAQAQAAAOACQANACALAEQAKAEAJAFQAJAFAGAGQAMAMAFAOQAGAOgBATIAAAAQAAANgDAMQgDAKgHAKQgFAJgKAIQgIAHgMAFIA5BTgAglgFIAkAAQAOAAAIgGQAIgHAAgLIAAgBQAAgLgIgGQgIgGgOAAIgkAAg");
	this.shape_5.setTransform(114.5,17.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.6)").s().p("AA3B7IgNggIhVAAIgNAgIhXAAIBoj1IBQAAIBnD1gAAWAgIgWg6IgWA6IAsAAg");
	this.shape_6.setTransform(87.1,17.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.6)").s().p("AgMB9QgNgCgNgFQgMgEgLgHQgLgGgKgIQgJgJgHgKQgIgKgFgMQgFgLgDgNQgDgNAAgPIAAAAQAAgNADgNQACgMAFgMQAFgLAIgLQAHgKAJgJQAJgIALgHQAKgHAMgEQANgFANgDQAOgCANAAQAQAAAOADQAOACANAFQANAFALAHQAMAGAKAJIguA3QgMgKgOgFQgNgGgPAAQgMAAgJAEQgKAFgIAHQgHAIgEALQgEAKAAAMIAAAAQAAANAEALQAEALAIAIQAIAHALAFQAJAEANAAQASAAAKgGIAAgYIgqAAIAAg0IB3AAIAABxQgKAIgMAHQgMAHgNAEQgOAFgPADQgQADgQAAQgOAAgNgDg");
	this.shape_7.setTransform(59.9,17.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.6)").s().p("AgxB3QgMgEgJgFQgJgFgJgHQgHgHgGgJQgGgJgEgLQgFgKgCgNQgCgOAAgPIAAiGIBTAAIAACFQAAALADAJQACAIAGAFQAFAFAGADQAIACAHAAQAIAAAHgCQAHgDAFgEQAFgGADgHQACgIAAgLIAAiHIBUAAIAACEQAAAQgCAOQgCANgEALQgFALgGAJQgHAJgHAHQgIAHgKAFQgJAFgMAEQggAGgRAAQgigCgPgEg");
	this.shape_8.setTransform(33.5,18);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.6)").s().p("AghB5QgNgCgMgHQgLgFgJgJQgIgIgHgLIA1gtQAIALAHAFQAIAGAJAAQAKAAAGgIQAGgIAAgNIAAiXIBQAAIAACWQgCAdgEANQgDAJgFAHQgFAIgHAGQgNANgRAHQgaAHgOAAQgQAAgPgEg");
	this.shape_9.setTransform(9.7,18);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FC2330").ss(1,1,1).p("At5kSIbzAAIAAIlI7zAAg");
	this.shape_10.setTransform(67.1,18.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("At5ETIAAolIbzAAIAAIlg");
	this.shape_11.setTransform(67.1,18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,0,129.8,39);


(lib.ahoratu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgvCQIAAhLIBfAAIAABLgAgWA2IgdiHIAAg9IBnAAIAAA9IgdCHg");
	this.shape.setTransform(288.4,46.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag6C1QgNgEgLgGQgLgGgJgIQgKgIgHgLQgHgKgFgMQgFgNgCgQQgDgPAAgRIAAieIBiAAIAACcQAAANADAKQADAJAGAHQAGAGAIADQAIADAJAAQAKAAAIgDQAIgDAGgFQAGgGADgKQADgJAAgNIAAieIBiAAIAACcQAAARgDAQQgCAPgFAOQgFAMgIALQgHALgJAIQgKAIgLAHQgLAFgNAEQglAIgVAAQgpgDgRgFgAgjh4IAmhEIBfAVIhCAvg");
	this.shape_1.setTransform(266.1,42.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvCQIAAjNIhUAAIAAhRIEHAAIAABRIhUAAIAADNg");
	this.shape_2.setTransform(236.8,46.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABBCRIgQgnIhjAAIgPAnIhmAAIB4khIBfAAIB4EhgAAZAmIgZhFIgaBFIAzAAg");
	this.shape_3.setTransform(196.2,46.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAeCQIg0hTIgVAAIAABTIhgAAIAAkeICLAAQATAAAQACQAQACANAFQAMADAKAHQAKAGAHAHQANANAHARQAGAQAAAXIAAAAQAAAQgDANQgEANgIALQgHAKgLAJQgJAIgOAHIBDBigAgrgGIApAAQARAAAJgIQAKgHAAgNIAAAAQAAgOgKgIQgJgGgRAAIgpAAg");
	this.shape_4.setTransform(166.2,46.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfCTQgQgDgOgGQgOgFgNgJQgMgHgLgLQgKgJgIgNQgJgLgGgOQgGgNgDgPQgCgPAAgPIAAgBQAAgPACgPQADgOAGgOQAHgNAIgMQAIgMALgKQALgKAMgIQAMgIAOgGQAPgGAPgDQAQgDAPAAQARAAAQADQAPADAOAGQAOAFAMAJQANAHALALQAKAKAJALQAIANAFANQAHAOACAOQAEAPAAAPIAAAAQAAAPgEAPQgCAPgHANQgFAOgJAMQgIAMgKAKQgMALgMAHQgMAJgPAFQgOAGgPADQgQACgQAAQgQAAgPgCgAgYg7QgLAFgIAKQgIAIgEAMQgEALAAANIAAAAQAAANAEALQAEAMAIAJQAJAKALAEQALAGAMAAQANAAAMgGQALgFAHgIQAJgJADgMQAFgMAAgMIAAgBQAAgMgFgLQgDgMgJgJQgHgKgMgFQgLgEgNgBQgNABgLAEg");
	this.shape_5.setTransform(133.9,46.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAsCQIAAhoIhXAAIAABoIhgAAIAAkeIBgAAIAABlIBXAAIAAhlIBgAAIAAEeg");
	this.shape_6.setTransform(101.7,46.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABBCRIgQgnIhjAAIgPAnIhmAAIB4khIBfAAIB4EhgAAZAmIgZhFIgaBFIAzAAg");
	this.shape_7.setTransform(69.7,46.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgzCQIAAg+IAciHIAuAAIAdCHIAAA+gAguhEIAAhKIBdAAIAABKg");
	this.shape_8.setTransform(46.7,46.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Capa 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EF6D2C").s().p("A4hHMQhQAAAAhQIAAr3QAAhQBQAAMAxDAAAQBQAAAABQIAAL3QAABQhQAAg");
	this.shape_9.setTransform(165,46);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = getMCSymbolPrototype(lib.ahoratu, new cjs.Rectangle(0,0,330,92), null);


(lib.missatge2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// texte
	this.botjugaragain2 = new lib.botjugaragain();
	this.botjugaragain2.parent = this;
	this.botjugaragain2.setTransform(581.5,522.6,1,1,0,0,0,63.3,19.5);
	new cjs.ButtonHelper(this.botjugaragain2, 0, 1, 2, false, new lib.botjugaragain(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaDLIAAg9IA1AAIAAA9gAgMBZIgNkCIAAghIAzAAIAAAhIgOECg");
	this.shape.setTransform(752.1,377.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggCZIgegJQgcgMgVgVQgVgWgMgcQgLgdAAgfIAAgBQAAgeALgdQAMgdAVgVQAVgXAcgLIAegKIAggDQAXABAoALQAcAMAVAWQAVAWALAcQAMAdAAAfIAAAAQAAAggMAcQgLAdgVAVQgWAWgcAMQgoANgWAAgAgthrQgTAJgPAQQgPAQgIAVQgIAVAAAYIAAAAQAAAYAJAWQAIAUAPARQAPAQAUAIQAVAJAWAAQAYAAAVgJQAUgIAPgQQAOgRAIgUQAIgWAAgXIAAgBQAAgXgIgWQgJgUgPgRQgPgQgUgJQgVgKgWAAQgYAAgVAKg");
	this.shape_1.setTransform(725.5,382.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8DNQgagLgUgUQgVgVgMgcIgJgfIgDgiIAAgCQABgYALgpQAMgcAVgUQAUgUAagLQAZgLAcAAQATAAASAGQARAFAPAIQASAMAbAhIAAi1IAtAAIAAGmIgtAAIAAg8QgcAigSANQgPAKgRAEQgSAGgSAAQgcAAgZgKgAgogxQgTAIgOAPQgPAPgJAUQgIAWAAAbIAAABQAAAaAIAWQAJAVAPAQQAOAPATAHQAUAJAUAAQAVAAATgJQAUgIAPgPQAQgQAIgVQAJgWABgZIAAgBQgBgZgJgXQgIgTgQgQQgPgPgUgJQgTgHgVAAQgVgBgTAIg");
	this.shape_2.setTransform(686.7,376.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8CWQgUgHgQgLQgQgMgJgSQgKgSAAgWIAAgBQAAgYAKgTQAIgRASgMQAQgMAYgHQAYgGAdAAQAlAAA1AMIAAgJQAAgTgGgQQgGgPgLgKQgMgKgQgGQgQgFgVAAQgZAAgXAGQgUAFgXALIgNglQAbgNAXgFQAdgIAdABQAgAAAYAIQAYAJARAPQAPARAIAVQAIAWAAAdIAAC2IgsAAIAAgsQgSAWgYANQgOAIgQAEQgQADgTAAQgVAAgUgFgAgjACQgQAFgMAIQgLAHgGAMQgFALAAAOIAAABQAAANAFAMQAHALAKAIQALAIANAEQAOADAPAAQATAAASgFQATgHANgKQAOgLAIgPQAHgPAAgRIAAgcQgzgLgkAAQgUAAgQACg");
	this.shape_3.setTransform(650.6,382.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABXCZIAAiuQgBgVgFgRQgGgQgKgMQgLgMgPgGQgQgHgTAAQgTABgQAGQgRAHgMAMQgMANgHARQgGARAAAWIAACqIgtAAIAAkrIAtAAIAAA0IAQgWQALgLAMgIQANgJAPgEQAQgEASAAQAbAAAWAJQAVAIAPAQQAPAQAHAWQAIAWAAAbIAAC5g");
	this.shape_4.setTransform(617.1,382.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag8CWQgVgHgPgLQgRgMgIgSQgKgSAAgWIAAgBQAAgYAJgTQAJgRASgMQAQgMAZgHQAXgGAdAAQAkAAA2AMIAAgJQAAgTgGgQQgGgPgMgKQgLgKgQgGQgRgFgUAAQgYAAgYAGQgUAFgWALIgOglQAcgNAWgFQAcgIAeABQAfAAAZAIQAZAJAPAPQARARAHAVQAIAWAAAdIAAC2IgsAAIAAgsQgSAWgYANQgOAIgPAEQgRADgSAAQgWAAgUgFgAgjACQgQAFgLAIQgMAHgGAMQgFALgBAOIAAABQABANAFAMQAHALAKAIQALAIANAEQAOADAPAAQAUAAARgFQATgHAOgKQANgLAIgPQAIgPAAgRIAAgcQg0gLgkAAQgTAAgRACg");
	this.shape_5.setTransform(581.4,382.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhIC+QgtgSgTgOIAUgiQAZASAdAKQAeAKAfAAQAYAAAUgHQAUgHAPgNQAOgOAHgUQAIgUAAgaIAAgkQgdAigSALQgQAJgRAEQgSAGgSAAQgcAAgZgKQgZgKgUgSQgUgTgMgZQgLgagBggIAAgBQABggALgaQAMgaAUgTQAUgTAZgJQAZgKAcAAQASAAATAEQARAFAPAJQATAKAcAgIAAg2IAtAAIAAD3QAAAigLAbQgKAbgSASQgTAUgeAKQgeAKgiAAQgmAAgigKgAgpiYQgTAGgOANQgOAOgJATQgIASAAAXIAAABQAAAWAIAUQAJARAPAOQAOAOASAHQAUAIAUAAQAVAAATgIQAVgHAOgOQAQgNAJgSQAJgTABgXIAAgBQgBgWgJgTQgJgSgQgOQgOgOgVgGQgTgIgVAAQgVAAgTAIg");
	this.shape_6.setTransform(545.4,386.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag4CQQghgMgZgUIAWggQAZASAaAKQAbAKAZAAQAbAAASgNQARgNAAgWIAAgBQAAgLgGgIQgGgIgKgGQgQgJgkgLQgwgOgTgLQgPgKgIgOQgJgPAAgTIAAgBQAAgTAIgRQAHgPAOgMQAOgLASgGQATgGAVAAQAcAAAcAJQAdAIAXAQIgUAhQgVgNgXgIQgYgIgVAAQgZAAgQANQgQAMAAATIAAABQAAAKAGAIQAGAIAMAGQAOAIAmAMIAjALQASAIANAHQAOALAIANQAIAPAAAUIAAABQAAAVgIARQgIAQgOAMQgPAMgTAFQgUAGgWAAQgfAAgigLg");
	this.shape_7.setTransform(494.7,382.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag8CWQgUgHgQgLQgQgMgJgSQgKgSAAgWIAAgBQAAgYAKgTQAJgRARgMQARgMAXgHQAYgGAcAAQAmAAA1AMIAAgJQAAgTgGgQQgFgPgMgKQgMgKgQgGQgQgFgVAAQgYAAgYAGQgUAFgXALIgNglQAbgNAXgFQAcgIAeABQAgAAAYAIQAYAJARAPQAPARAIAVQAIAWAAAdIAAC2IgsAAIAAgsQgSAWgYANQgOAIgQAEQgQADgTAAQgVAAgUgFgAgjACQgQAFgMAIQgLAHgFAMQgHALABAOIAAABQgBANAHAMQAFALALAIQALAIANAEQAOADAPAAQATAAATgFQASgHANgKQAOgLAIgPQAIgPgBgRIAAgcQgygLglAAQgTAAgRACg");
	this.shape_8.setTransform(463.1,382.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AB1DLIAAi3IjpAAIAAC3IguAAIAAmVIAuAAIAAC1IDpAAIAAi1IAuAAIAAGVg");
	this.shape_9.setTransform(425.2,377.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgjAuQAWgJAKgMQAIgMgCgRIgUAAIAAg9IA1AAIAAA0QAAARgEANQgEAOgIAJQgIAKgMAGQgLAGgRAEg");
	this.shape_10.setTransform(755.6,338);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhKCaQg0gSgXgQIAshKQAdARAfAJQAeAJAbAAQATAAAAgKIAAgBQAAgGgHgDIgegLIg2gPQgYgKgQgLQgRgMgJgQQgJgRAAgYIAAgCQAAgZAKgVQAJgTATgOQATgPAYgHQAagHAeAAQAnAAAmAKQAlAKAcARIgpBOQgZgOgcgHQgcgJgVABQgRgBAAAKIAAABQAAAFAHAEIAfAKQAgAIAWAIQAYAJAQALQARANAJAPQAIASAAAYIAAABQAAAagJAUQgKAVgRANQgTAOgZAIQgZAHggAAQg8gEgbgIg");
	this.shape_11.setTransform(733.7,321.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag8CaIgdgOIgagTIgUgYQgJgNgGgPIgKgfIgDgkIAAgBQAAgXAMgqQAMgeAWgXIAYgUIAcgPIAfgJIAigEQAUAAASAEQASAEAQAGQAQAHANAKQAMAIALAMIARAaIANAeQAKAfAAAkIgBAWIjKAAQAGAUAQAMQAQALAUgBQASAAAQgIQAPgHAQgSIBGA5QgMAQgOAMQgPANgRAJQgSAJgVAFQgWAFgZAAQgxgEgVgIgAAsgaQgDgWgMgNQgMgMgRAAQgQgBgLANQgLANgDAWIBVAAIAAAAg");
	this.shape_12.setTransform(701.7,321.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhiDLQgYgLgTgWQgSgWgLgdQgKgfAAgkIAAgBQAAgaAKgpQALgeASgXQATgXAYgLQAZgMAcAAQAYAAAhANQATAKASAVIAAiPICEAAIAAGmIiEAAIAAgnQgVAXgQAJQgMAHgMADQgPAFgRAAQgcgBgagMgAglAJQgPAQgBAYIAAABQABAYAPARQAOAQAXAAQAWAAAPgQQAPgRAAgYIAAgBQAAgXgPgRQgPgQgWAAQgXAAgOAQg");
	this.shape_13.setTransform(664.3,316.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhkCeQgTgGgOgMQgOgNgHgSQgIgTAAgXIAAgBQAAgXAIgTQAJgSAPgMQAQgMAWgHQAXgGAcAAQAaAAAvALIAAgFQAAgWgOgMQgPgMgcAAQgYAAgWAFQgTAEgXAJIgXhYQAdgLAfgFQAigHAnAAQAfAAAxAKQAQAGAOAHQANAIAKALQASARAIAZQAHAXAAAjIAACzIiDAAIAAggQgSATgUAKQgYALgcAAQgXAAgTgHgAgaAgQgKAKAAAPIAAABQAAAOAIAJQAJAIANAAQARAAALgNQALgOAAgWIAAgNQgNgFgRAAQgSAAgLAKg");
	this.shape_14.setTransform(627.1,321.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhhDLQgZgLgSgWQgUgWgJgdQgLgfAAgkIAAgBQAAgaALgpQAJgeAUgXQASgXAZgLQAYgMAcAAQAYAAAhANQATAKASAVIAAiPICEAAIAAGmIiEAAIAAgnQgUAXgRAJQgMAHgMADQgPAFgRAAQgcgBgZgMgAgmAJQgOAQAAAYIAAABQAAAYAOARQAQAQAWAAQAWAAAPgQQAPgRAAgYIAAgBQAAgXgPgRQgPgQgWAAQgWAAgQAQg");
	this.shape_15.setTransform(590,316.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhBDUIAAk8ICDAAIAAE8gAhDh/IAAhUICHAAIAABUg");
	this.shape_16.setTransform(562.2,316.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgbCjIgfgKIgcgQIgZgUQgWgXgNgeIgJgeIgDghIAAgBQAAgVAMgpQAJgUAbghIAZgVIAdgPQAQgHASgDQARgEATAAQAZAAAXAHQAWAGATAMQARALAOAQQANAQAKAUIhfA1QgIgQgLgHQgLgJgQAAQgUAAgOAQQgOAQAAAYIAAAAQAAAZAOAQQAOAQASAAQARAAAMgJQALgHAJgQIBgA3QgKAUgPAPQgPAQgSALQgTAMgXAGQgYAGgcAAQgRAAgRgDg");
	this.shape_17.setTransform(537.6,321.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhBDUIAAk8ICDAAIAAE8gAhDh/IAAhUICHAAIAABUg");
	this.shape_18.setTransform(512,316.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhBDUIAAmnICDAAIAAGng");
	this.shape_19.setTransform(494.7,316.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag8CaIgdgOIgagTIgUgYQgJgNgGgPIgKgfIgDgkIAAgBQAAgXAMgqQAMgeAWgXIAYgUIAcgPIAfgJIAigEQAUAAASAEQASAEAQAGQAQAHANAKQAMAIALAMIARAaIANAeQAKAfAAAkIgBAWIjKAAQAGAUAQAMQAQALAUgBQASAAAQgIQAPgHAQgSIBGA5QgMAQgOAMQgPANgRAJQgSAJgVAFQgWAFgZAAQgxgEgVgIgAAsgaQgDgWgMgNQgMgMgRAAQgQgBgLANQgLANgDAWIBVAAIAAAAg");
	this.shape_20.setTransform(468.8,321.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AipDLIAAmVIFTAAIAAB0IjLAAIAAAzIC8AAIAABpIi8AAIAACFg");
	this.shape_21.setTransform(434.4,317.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgZDLIAAghIANkBIAYAAIAOEBIAAAhgAgaiNIAAg9IA1AAIAAA9g");
	this.shape_22.setTransform(407.3,317.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.botjugaragain2}]}).wait(1));

	// caixa
	this.instance = new lib.caixaorange();
	this.instance.parent = this;
	this.instance.setTransform(581.6,386,1,1,0,0,0,306.9,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fons
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("EhnRA6XMAAAh0tMDOjAAAMAAAB0tg");
	this.shape_23.setTransform(661,373.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(1));

}).prototype = getMCSymbolPrototype(lib.missatge2, new cjs.Rectangle(0,0,1322,747), null);


(lib.missatge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_2 = function() {
		this.stop()
	}
	this.frame_3 = function() {
		this.stop()
	}
	this.frame_4 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// texte
	this.botjugar = new lib.botjugar();
	this.botjugar.parent = this;
	this.botjugar.setTransform(581.5,522.6,1,1,0,0,0,63.3,19.5);
	new cjs.ButtonHelper(this.botjugar, 0, 1, 2, false, new lib.botjugar(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMAQIAAgfIAYAAIAAAfg");
	this.shape.setTransform(678.5,432.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjBdQgWgHgPgOIALgOQAQANARAGQASAHASAAQAJgBAJgDQAIgCAHgFQAGgEAEgIQADgGAAgJIAAAAQAAgIgEgHQgEgFgHgFQgLgHgZgHQgggJgMgHQgKgHgGgHQgGgKAAgMIAAgBQAAgMAFgJQAFgLAIgGQAJgIALgDQAMgFANAAQASABASAFQASAGAPAJIgKAQQgOgJgPgFQgQgFgOAAQgJAAgJACQgIADgGAEQgFAFgDAGQgEAGAAAIIAAABQAAAHAFAGQAEAGAIAFQAKAFAaAIIAXAIQANADAIAFQAKAIAFAIQAFAJAAAMIAAABQAAANgFALQgFAKgJAIQgJAHgNAEQgMADgOAAQgUABgVgIg");
	this.shape_1.setTransform(664.4,424.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUBjIgTgFQgSgJgOgOQgNgOgHgRQgHgTgBgUIAAgBQABgTAHgTQAIgSANgOQANgOATgIIATgHIATgCQAPABAZAIQASAHAOAOQANAPAHASQAIASgBAUIAAAAQABAUgIATQgHASgNAOQgOAOgTAJQgZAHgOABgAgfhMQgOAGgLAMQgLALgFAPQgHAPAAARIAAAAQABARAGAQQAGAPALAMQALALAOAHQAPAGAPAAQARAAAQgGQAOgHAKgLQALgMAFgPQAHgPAAgRIAAgBQAAgQgHgPQgFgQgMgLQgLgMgOgGQgPgHgQAAQgQAAgPAHg");
	this.shape_2.setTransform(643.1,424.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgICLIAAkVIARAAIAAEVg");
	this.shape_3.setTransform(626.2,420.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfBeQgRgHgNgOQgNgNgIgSIgGgUIgBgWIAAAAQgBgUAIgSQAGgTANgOQAMgOARgHQARgJASAAQAVAAAQAJQAQAHAMAOQAMAOAGASQAGATAAAUIAAAIIigAAQACARAGAPQAHAOALAKQAKAKANAFQANAFAOAAQAOAAAYgIQAPgIANgOIAMALQgUAUgNAGQgKAGgLACQgMADgOAAQgSAAgRgIgABHgIQgCgPgFgOQgEgNgJgLQgJgKgMgGQgNgGgRAAQgNgBgMAHQgMAFgKAKQgKALgFANQgHAOgBAQICNAAIAAAAg");
	this.shape_4.setTransform(610.6,424.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAEB+QgKgDgGgGQgIgHgEgKQgFgKABgNIAAh/IgcAAIAAgQIAcAAIAAg+IASAAIAAA+IBDAAIAAAQIhDAAIAAB8QAAALADAHQADAHAEAFQAKAIASAAQANAAAPgHIAAASQgOAGgRAAQgMAAgJgDg");
	this.shape_5.setTransform(592.3,421.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcCKIAAjAIATAAIAADAgAgbhXIAhgyIAXALIgoAng");
	this.shape_6.setTransform(582,420.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhfCCIAAj+IASAAIAAArIAOgSQAJgJAJgGQAKgHAMgEQAMgEANAAQASAAARAHQAQAHAOANQAOAOAHASQAIAaAAAQIAAABQAAALgCALIgGATQgHATgOANQgOANgQAHQgRAHgSAAQgNAAgNgEQgLgDgKgHQgKgGgIgJIgOgRIAABngAgchpQgOAGgMALQgLAMgGAPQgHAQAAASIAAAAQAAASAHAPQAGAPALAMQAMALAOAFQAOAGAOAAQAQAAAOgFQAOgGAKgLQALgKAFgPQAGgPAAgTIAAgBQAAgTgGgQQgGgPgLgLQgKgLgOgGQgOgGgPAAQgOAAgOAGg");
	this.shape_7.setTransform(563.4,427.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfBeQgRgHgNgOQgOgNgHgSIgGgUIgCgWIAAAAQAAgUAIgSQAHgTAMgOQANgOAQgHQARgJASAAQAUAAASAJQAQAHAMAOQALAOAGASQAHATgBAUIAAAIIigAAQABARAHAPQAGAOALAKQAKAKAOAFQANAFAOAAQAOAAAXgIQAPgIANgOIAOALQgVAUgNAGQgKAGgLACQgMADgNAAQgTAAgRgIgABGgIQAAgPgGgOQgEgNgJgLQgJgKgMgGQgNgGgRAAQgNgBgMAHQgNAFgJAKQgKALgGANQgFAOgCAQICMAAIAAAAg");
	this.shape_8.setTransform(539.4,424.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgzBjIAAjBIASAAIAAA3QAGgNAJgLQAIgLAKgIQAMgIANgEQANgEAOABIAAAUIgCAAQgRAAgPAHQgPAGgLAMQgMANgGASQgHASAAAWIAABQg");
	this.shape_9.setTransform(522.6,424.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhHB+IgTgHIAHgQQAPAHASAAQAPAAALgKQAGgFAFgJIALgVIhdjAIAVAAIBQCsIBGisIAUAAIhUDIQgGAPgGAKQgHALgIAGQgIAHgJADQgJADgKAAQgLAAgJgCg");
	this.shape_10.setTransform(491.3,427.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdCHQgTgDgRgFQgRgGgQgJQgPgIgNgLIAvg4QAPALAfANQAQAEAfACQAMAAAFgDQAFgCAAgGIAAgBQAAgFgHgEQgIgEgVgEQgZgFgRgFQgWgIgOgIQgQgLgIgMQgFgIgCgIQgCgJAAgKIAAgCQgBgSAIgQQAHgRAPgMQAOgNAVgGQAOgFAhgCQAUAAAQADQARACAPAEQAPAEANAIQANAGALAKIgrA7QgagPgOgEQgUgGgSgBQgKAAgFAEQgFACAAAGIAAAAQAAAGAHAEQAIAEAUADQAbAFATAHQAWAGAOAKQAPAKAIANQAIAOAAAUIAAABIgCAUQgCAJgFAIQgHARgQAMQgPAMgWAFQgWAHgbAAQgSAAgUgDg");
	this.shape_11.setTransform(732.7,381);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AA2CFIhih7IAAB7IhYAAIAAkJIBTAAIBeB1IAAh1IBYAAIAAEJg");
	this.shape_12.setTransform(705.9,381);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgdCIQgOgDgOgFQgNgFgLgIQgMgHgKgKQgJgJgIgLQgIgLgFgMQgFgNgDgNQgDgOAAgPIAAAAQAAgOADgNQADgOAFgMQAGgNAHgLQAIgLAKgJQAKgKALgHQAMgIANgFQANgGAPgCQAOgDAOAAQAQAAAOADQAOACAOAGQANAFALAHQAMAIAKAJQAJAJAIALQAIAMAFAMQAFAMADAOQADAOAAAOIAAAAQAAAOgDAOQgDANgFANQgFAMgIALQgIAMgKAJQgKAKgLAHQgMAHgNAGQgNAFgPADQgOADgPAAQgPAAgOgDgAgWg2QgKAEgIAJQgHAIgEALQgEAKAAAMIAAAAQAAAMAFAKQADALAIAJQAHAIAKAFQALAFALAAQANAAAKgFQAKgFAIgIQAHgIAEgLQADgLAAgMIAAAAQAAgLgDgLQgEgLgIgIQgHgJgKgEQgLgFgMAAQgMAAgKAFg");
	this.shape_13.setTransform(675.6,381);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgsCFIAAkJIBYAAIAAEJg");
	this.shape_14.setTransform(654.2,381);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA2CFIhih7IAAB7IhYAAIAAkJIBTAAIBeB1IAAh1IBYAAIAAEJg");
	this.shape_15.setTransform(633.4,381);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgrCFIAAkJIBYAAIAAEJg");
	this.shape_16.setTransform(612.6,381);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AA9CFIAAiEIg9BeIAAAAIg+heIAACEIhXAAIAAkJIBdAAIA4BdIA5hdIBdAAIAAEJg");
	this.shape_17.setTransform(590,381);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgrCFIAAkJIBYAAIAAEJg");
	this.shape_18.setTransform(567.6,381);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgrCFIAAi+IhPAAIAAhLID1AAIAABLIhPAAIAAC+g");
	this.shape_19.setTransform(548.8,381);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgdCIQgOgDgOgFQgNgFgLgIQgMgHgKgKQgJgJgIgLQgIgLgFgMQgFgNgDgNQgDgOAAgPIAAAAQAAgOADgNQADgOAFgMQAGgNAHgLQAIgLAKgJQAKgKALgHQAMgIANgFQANgGAPgCQAOgDAOAAQAQAAAOADQAOACAOAGQANAFALAHQAMAIAKAJQAJAJAIALQAIAMAFAMQAFAMADAOQADAOAAAOIAAAAQAAAOgDAOQgDANgFANQgFAMgIALQgIAMgKAJQgKAKgLAHQgMAHgNAGQgNAFgPADQgOADgPAAQgPAAgOgDgAgWg2QgKAEgIAJQgHAIgEALQgEAKAAAMIAAAAQAAAMAFAKQADALAIAJQAHAIAKAFQALAFALAAQANAAAKgFQAKgFAIgIQAHgIAEgLQADgLAAgMIAAAAQAAgLgDgLQgEgLgIgIQgHgJgKgEQgLgFgMAAQgMAAgKAFg");
	this.shape_20.setTransform(521.7,381);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ah8CFIAAkJICUAAQASAAAcAGQASAGAMAMQAHAIAEAKQAFAKAAANIAAABQAAAMgEAKQgDAJgGAIQgGAHgJAFQgJAGgLAEQAOADAKAFQAKAFAIAJQAHAHAEALQAEAKAAANIAAABQAAARgGANQgHANgNAKQgNAKgTAGQgUAFgZAAgAglBCIArAAQAPAAAHgFQAIgFAAgKIAAAAQgBgJgGgGQgIgEgOAAIgsAAgAglgbIAmAAQANAAAIgFQAGgFABgJIAAAAQAAgKgIgEQgGgFgOABIgmAAg");
	this.shape_21.setTransform(493.4,381);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgjBdQgWgIgPgMIALgPQAQAMARAHQASAGASAAQAJAAAJgCQAIgDAHgFQAGgEAEgHQADgHAAgJIAAAAQAAgJgEgGQgEgGgHgFQgLgGgZgHQgggJgMgHQgKgGgGgJQgGgJAAgMIAAgBQAAgMAFgKQAFgKAIgHQAJgHALgEQAMgDANAAQASgBASAGQASAGAPAJIgKARQgOgKgPgFQgQgFgOAAQgJAAgJADQgIACgGAFQgFAEgDAGQgEAGAAAIIAAAAQAAAIAFAGQAEAGAIAEQAKAHAaAHIAXAHQANAEAIAGQAKAHAFAHQAFAKAAANIAAAAQAAANgFAKQgFALgJAHQgJAIgNAEQgMADgOAAQgUAAgVgHg");
	this.shape_22.setTransform(460.1,384.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgUBkIgTgHQgSgHgNgOQgOgOgHgTQgIgSAAgUIAAgBQAAgTAIgSQAHgTAOgOQAOgOARgIIATgGIAVgCQAOgBAZAJQASAIANAOQAOAOAIARQAGATABAUIAAAAQgBAUgGATQgIASgOAOQgOAPgRAHQgaAJgOgBgAgfhMQgPAGgKALQgKAMgHAPQgFAPAAARIAAAAQgBASAHAPQAGAPALALQALAMAOAGQAPAHAQAAQARAAAOgHQAPgGAKgMQALgLAGgPQAFgPAAgRIAAgBQAAgQgFgQQgGgPgLgMQgLgLgPgHQgPgGgQAAQgQAAgPAHg");
	this.shape_23.setTransform(438.8,384.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgICLIAAkVIARAAIAAEVg");
	this.shape_24.setTransform(421.9,380.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgfBeQgRgHgNgOQgNgNgIgSIgGgUIgCgWIAAAAQAAgUAIgSQAGgTANgOQAMgOARgHQARgJASABQAVgBAQAJQARAHAMAOQALAOAGASQAGATAAAUIAAAIIigAAQABASAHAOQAGAOALAKQALAKANAFQANAFAOAAQAOAAAXgIQAPgIANgOIAOALQgVAUgNAGQgKAFgLADQgMACgNAAQgTABgRgIgABHgIQgBgPgGgOQgEgNgJgLQgJgKgMgGQgNgGgRAAQgMAAgNAFQgMAGgKAKQgKAKgGAOQgFAOgCAQICNAAIAAAAg");
	this.shape_25.setTransform(751.7,336.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgkCGQgRgHgNgMQgOgOgHgTIgGgTQgCgLAAgLIAAgBQAAgQAIgaQAHgSAOgOQANgNARgHQARgHASAAQANAAAMAEQAMAEAKAGQANAJATAYIAAh+IASAAIAAEUIgSAAIAAgqQgTAYgNAIQgLAIgLADQgMAEgNAAQgSAAgRgHgAgdgmQgOAHgKAKQgLALgFAOQgGAQAAATIAAABQAAASAGAQQAGAPAKALQALAMAOAFQANAGAPAAQAPAAAOgGQAOgGALgLQAMgLAGgPQAHgQAAgSIAAAAQAAgTgHgQQgGgOgMgLQgLgLgOgGQgOgGgPAAQgPAAgOAFg");
	this.shape_26.setTransform(727.3,332.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgjBdQgWgIgPgNIALgOQAQANARAGQASAHASgBQAJAAAJgDQAIgCAHgFQAGgEAEgIQADgHAAgIIAAAAQAAgIgEgHQgEgFgHgGQgLgGgZgHQgggIgMgIQgKgHgGgIQgGgJAAgMIAAgBQAAgLAFgKQAFgLAIgGQAJgIALgEQAMgEANAAQASABASAFQASAGAPAJIgKAQQgOgJgPgFQgQgFgOAAQgJAAgJACQgIADgGAEQgFAFgDAGQgEAHAAAHIAAABQAAAHAFAGQAEAGAIAEQAKAHAaAHIAXAIQANADAIAGQAKAGAFAJQAFAJAAANIAAAAQAAANgFALQgFAKgJAIQgJAHgNAEQgMAEgOgBQgUABgVgIg");
	this.shape_27.setTransform(694.3,336.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgUBjIgTgFQgSgJgNgOQgOgOgHgRQgIgTABgUIAAgBQgBgTAIgSQAIgTANgOQANgOASgIIATgHIAVgBQAOAAAZAIQASAIAOANQANAOAIATQAHASAAAUIAAAAQAAAUgHATQgIASgNAOQgPAPgSAIQgZAHgOAAgAgfhMQgOAGgLAMQgLALgFAPQgHAQABAQIAAAAQAAARAGAQQAGAPALAMQALALAOAHQAPAGAQAAQAQAAAPgGQAOgHALgLQALgMAGgPQAFgPABgRIAAgBQgBgQgFgPQgHgQgLgLQgLgMgOgGQgPgHgQAAQgQAAgPAHg");
	this.shape_28.setTransform(673,336.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAEB+QgJgDgIgGQgHgHgEgKQgFgLABgNIAAh+IgdAAIAAgRIAdAAIAAg9IASAAIAAA9IBDAAIAAARIhDAAIAAB8QAAAKADAIQADAHAEAEQAKAJASAAQANAAAPgHIAAASQgPAGgQAAQgMAAgJgDg");
	this.shape_29.setTransform(653.7,333.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("ABBBjIAAhyQgBgPgEgMQgEgMgIgJQgIgJgLgEQgMgFgPAAQgMAAgNAFQgMAFgJAJQgJAKgGAMQgEANAAAPIAABvIgTAAIAAjAIATAAIAAAkQAFgJAGgHQAGgIAJgFQAJgGALgDQAKgDAMAAQASAAAPAGQAPAGAKAKQAKALAEAPQAGAOAAASIAAB1g");
	this.shape_30.setTransform(634.8,336.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgfBeQgRgHgNgOQgNgNgIgSIgGgUIgBgWIAAAAQgBgUAIgSQAGgTANgOQAMgOARgHQARgJASABQAVgBAQAJQARAHALAOQAMAOAGASQAGATAAAUIAAAIIigAAQABASAHAOQAGAOAMAKQAKAKANAFQANAFAOAAQAOAAAYgIQAOgIAOgOIAMALQgUAUgNAGQgKAFgLADQgMACgNAAQgTABgRgIgABHgIQgBgPgGgOQgEgNgJgLQgJgKgMgGQgNgGgRAAQgMAAgNAFQgMAGgKAKQgKAKgFAOQgGAOgCAQICNAAIAAAAg");
	this.shape_31.setTransform(612.1,336.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgICHIAAjBIARAAIAADBgAgKhsIAAgaIAVAAIAAAag");
	this.shape_32.setTransform(596.1,333);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("ACABjIAAhyQAAgPgEgNQgEgMgHgJQgIgIgKgFQgLgEgNAAQgNAAgLAFQgLAEgIAJQgJAJgFAMQgFAOAAAPIAABwIgRAAIAAhzQAAgPgEgMQgEgMgIgJQgHgIgKgFQgLgEgNAAQgNAAgLAFQgLAGgJAJQgIAKgFAMQgFANAAAPIAABuIgSAAIAAjAIASAAIAAAiQALgSANgJQAIgGAKgDQAKgDANAAQAMAAALADQAKADAIAGQAIAGAGAIQAGAHADAJIALgQQAHgIAIgFQAJgGALgEQALgDANAAQARAAAOAGQAOAFAKALQAJALAFAPQAFAPAAASIAAB0g");
	this.shape_33.setTransform(573.4,336.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgICHIAAjBIARAAIAADBgAgLhsIAAgaIAXAAIAAAag");
	this.shape_34.setTransform(550.6,333);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgHBhIhXjCIAWAAIBICsIBKisIAVAAIhXDCg");
	this.shape_35.setTransform(534.8,336.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgUBjIgTgFQgSgJgOgOQgNgOgHgRQgHgTgBgUIAAgBQABgTAHgSQAIgTANgOQANgOATgIIATgHIATgBQAPAAAZAIQASAIANANQAOAOAHATQAIASgBAUIAAAAQABAUgIATQgHASgOAOQgOAPgRAIQgaAHgOAAgAgfhMQgPAGgKAMQgKALgGAPQgGAQgBAQIAAAAQAAARAHAQQAGAPALAMQALALAOAHQAPAGAPAAQARAAAQgGQANgHALgLQALgMAFgPQAHgPgBgRIAAgBQABgQgHgPQgFgQgMgLQgKgMgPgGQgPgHgQAAQgQAAgPAHg");
	this.shape_36.setTransform(512.7,336.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("ACABjIAAhyQAAgPgEgNQgEgMgHgJQgIgIgKgFQgLgEgNAAQgNAAgLAFQgLAEgIAJQgJAJgFAMQgFAOAAAPIAABwIgRAAIAAhzQAAgPgEgMQgEgMgIgJQgHgIgKgFQgLgEgNAAQgNAAgLAFQgLAGgJAJQgIAKgFAMQgFANAAAPIAABuIgSAAIAAjAIASAAIAAAiQALgSANgJQAIgGAKgDQAKgDANAAQAMAAALADQAKADAIAGQAIAGAGAIQAGAHADAJIALgQQAHgIAIgFQAJgGALgEQALgDANAAQARAAAOAGQAOAFAKALQAJALAFAPQAFAPAAASIAAB0g");
	this.shape_37.setTransform(482.6,336.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgjBdQgWgIgPgNIALgOQAQANARAGQASAHASgBQAJAAAJgDQAIgCAHgFQAGgEAEgIQADgHAAgIIAAAAQAAgIgEgHQgEgFgHgGQgLgGgZgHQgggIgMgIQgKgHgGgIQgGgJAAgMIAAgBQAAgLAFgKQAFgLAIgGQAJgIALgEQAMgEANAAQASABASAFQASAGAPAJIgKAQQgOgJgPgFQgQgFgOAAQgJAAgJACQgIADgGAEQgFAFgDAGQgEAHAAAHIAAABQAAAHAFAGQAEAGAIAEQAKAHAaAHIAXAIQANADAIAGQAKAGAFAJQAFAJAAANIAAAAQAAANgFALQgFAKgJAIQgJAHgNAEQgMAEgOgBQgUABgVgIg");
	this.shape_38.setTransform(443.4,336.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgUBjIgTgFQgSgJgOgOQgNgOgHgRQgHgTAAgUIAAgBQAAgTAHgSQAIgTANgOQANgOATgIIATgHIAUgBQAOAAAZAIQASAIAOANQANAOAHATQAIASgBAUIAAAAQABAUgIATQgHASgNAOQgOAPgTAIQgZAHgOAAgAgfhMQgOAGgLAMQgLALgFAPQgHAQAAAQIAAAAQABARAGAQQAGAPALAMQALALAOAHQAPAGAQAAQAQAAAQgGQAOgHAKgLQALgMAFgPQAHgPAAgRIAAgBQAAgQgHgPQgFgQgMgLQgLgMgOgGQgPgHgQAAQgQAAgPAHg");
	this.shape_39.setTransform(422.1,336.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgICLIAAkVIARAAIAAEVg");
	this.shape_40.setTransform(405.2,332.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgiBhQgPgEgKgIQgLgHgGgLQgGgMgBgPIAAgBQAAgPAHgMQAFgLAMgHQALgIAQgFQAPgEASAAQAbAAAmAJIAAgJQgBgOgEgMQgEgLgIgHQgJgIgLgDQgMgEgPAAQgQAAgQAEQgOAEgOAHIgHgQQARgIAPgEQASgFASAAQATAAAQAGQAPAFALALQAKAKAEANQAGAOAAARIAAB4IgSAAIAAggQgQATgNAGQgKAGgLADQgMADgLAAQgPAAgMgEgAgbgDQgLADgJAFQgHAGgEAJQgFAIAAAKIAAABQAAAKAFAJQAEAIAIAGQAIAFAKADQAKADAMAAQANAAAOgEQANgEAKgIQAKgIAFgLQAHgLAAgNIAAgWQgmgIgcAAQgOAAgNADg");
	this.shape_41.setTransform(661.5,296.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AhTBhIAAgLICLilIiFAAIAAgRIChAAIAAALIiLClICLAAIAAARg");
	this.shape_42.setTransform(640.7,296.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgICHIAAjAIARAAIAADAgAgKhtIAAgZIAVAAIAAAZg");
	this.shape_43.setTransform(625.5,293);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgzBjIAAjBIASAAIAAA3QAGgNAJgLQAIgLAKgIQAMgIANgEQANgEAOABIAAAUIgCAAQgRAAgPAHQgPAGgLAMQgMANgGASQgHASAAAWIAABQg");
	this.shape_44.setTransform(614.3,296.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgUBkIgTgHQgSgHgOgOQgNgPgHgSQgIgSAAgUIAAgBQAAgTAIgTQAHgSAOgOQAOgPASgHIASgGIAUgDQAPAAAZAJQASAHANAPQAOAOAIARQAGATAAAUIAAAAQAAAUgGATQgIASgOAOQgOAPgRAHQgaAJgOgBgAgfhMQgPAGgKALQgKAMgHAPQgFAPgBARIAAAAQAAARAHAQQAGAPALALQALAMAOAGQAPAHAPAAQASAAAPgHQANgGALgMQALgLAFgPQAHgPgBgRIAAgBQABgQgHgQQgGgPgKgMQgMgLgOgHQgPgGgQAAQgQAAgPAHg");
	this.shape_45.setTransform(593.4,296.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("ACABjIAAhyQAAgPgEgNQgEgMgHgJQgIgIgKgFQgLgEgNAAQgNAAgLAFQgLAEgIAJQgJAJgFAMQgFAOAAAPIAABwIgRAAIAAhzQAAgPgEgMQgEgMgIgJQgHgIgKgFQgLgEgNAAQgNAAgLAFQgLAGgJAJQgIAKgFAMQgFANAAAPIAABuIgSAAIAAjAIASAAIAAAiQALgSANgJQAIgGAKgDQAKgDANAAQAMAAALADQAKADAIAGQAIAGAGAIQAGAHADAJIALgQQAHgIAIgFQAJgGALgEQALgDANAAQARAAAOAGQAOAFAKALQAJALAFAPQAFAPAAASIAAB0g");
	this.shape_46.setTransform(563.3,296.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgfBeQgRgHgNgNQgNgOgIgTIgGgTIgCgVIAAgBQAAgUAIgTQAHgSAMgOQAMgOARgIQARgHASgBQAVABAQAHQARAIALAOQAMANAGATQAGATAAAUIAAAIIigAAQABARAHAPQAGAOALAKQALAKANAFQANAFAOAAQAOAAAYgJQAOgHANgOIANALQgUAUgNAGQgKAGgLACQgMACgNAAQgTAAgRgHgABHgIQgBgPgGgNQgEgOgJgKQgJgLgMgGQgNgHgRAAQgMABgNAFQgMAGgKAKQgKALgGANQgFAOgCAQICNAAIAAAAg");
	this.shape_47.setTransform(534.2,296.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("ABpCFIAAjmIhpCYIAAAAIhqiYIAADmIgTAAIAAkJIATAAIBqCcIBqicIATAAIAAEJg");
	this.shape_48.setTransform(506.5,293.2);

	this.botjugaragain = new lib.botjugaragain();
	this.botjugaragain.parent = this;
	this.botjugaragain.setTransform(581.5,522.6,1,1,0,0,0,63.3,19.5);
	new cjs.ButtonHelper(this.botjugaragain, 0, 1, 2, false, new lib.botjugaragain(), 3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgRCFIAAgoIAjAAIAAAogAgIA6IgIipIAAgVIAiAAIAAAVIgKCpg");
	this.shape_49.setTransform(762.3,354.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgVBlIgTgGQgTgJgOgOQgNgNgIgTQgHgSAAgVIAAgBQAAgUAHgTQAIgSANgOQAPgPASgHIAUgHIAUgCQAPAAAaAJQATAHANAOQAOAOAIATQAHATABAUIAAAAQgBAUgHAUQgIASgOAOQgOAOgSAJQgbAHgOABgAgdhFQgNAFgKAKQgJALgFAOQgFAOgBAPIAAAAQABAQAFAOQAGAOAJAKQAKALANAFQAOAHAOAAQAQAAANgHQAOgFAJgLQAKgLAFgNQAGgOgBgPIAAgBQABgOgGgPQgGgNgJgLQgLgLgNgFQgOgHgOAAQgQAAgNAHg");
	this.shape_50.setTransform(744.9,357.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgMBjIhVjFIAgAAIBBCiIBDiiIAfAAIhVDFg");
	this.shape_51.setTransform(722.6,357.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AggBfQgSgHgNgNQgOgOgIgTIgFgUIgCgWQAAgUAHgTQAHgTANgOQAMgOASgHQASgJASAAQAPAAAYAJQARAHAMAPQAMAOAFATQAHATAAAVIgBAKIiaAAQABAPAHANQAFAMAKAIQAJAJAMAEQAMAEAMAAQATAAAQgIQAOgGANgNIASAQQgVAUgNAHQgKAFgMACQgMACgNABQgTAAgSgIgAA/gLQgBgNgFgNQgEgMgIgIQgIgJgLgGQgMgFgNAAQgMAAgLAFQgLAFgJAJQgIAJgGAMQgEAMgCAOIB9AAIAAAAg");
	this.shape_52.setTransform(701.3,357.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgpBeQgOgFgKgLQgKgKgFgOQgFgPAAgSIAAh5IAeAAIAAByQAAAOADALQAEALAHAIQAHAIAKADQAKAFANAAQALgBALgEQALgEAIgIQAIgJAEgLQAFgMAAgNIAAhwIAdAAIAADEIgdAAIAAgiQgPAUgLAHQgJAFgJADQgLADgLABQgSAAgOgHg");
	this.shape_53.setTransform(678.1,357.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AA5BkIAAhxQAAgOgEgLQgEgLgGgIQgIgIgKgEQgKgEgMAAQgMAAgLAFQgLAEgIAIQgIAIgEAMQgEALgBAOIAABvIgdAAIAAjDIAdAAIAAAiIALgPQAHgHAJgFQAIgGAKgCQALgDAKAAQATAAAOAFQANAGAKAKQAKALAFAOQAFAPAAARIAAB5g");
	this.shape_54.setTransform(655,357.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AggBfQgSgHgNgNQgOgOgIgTIgFgUIgCgWQAAgUAHgTQAHgTANgOQAMgOASgHQASgJASAAQAPAAAYAJQARAHAMAPQAMAOAFATQAHATAAAVIAAAKIibAAQACAPAFANQAHAMAJAIQAJAJAMAEQAMAEAMAAQATAAAQgIQAOgGANgNIASAQQgVAUgNAHQgKAFgLACQgMACgOABQgTAAgSgIgAA/gLQgBgNgFgNQgEgMgIgIQgIgJgLgGQgLgFgOAAQgMAAgLAFQgLAFgIAJQgJAJgGAMQgEAMgCAOIB9AAIAAAAg");
	this.shape_55.setTransform(620.7,357.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgnCGQgRgHgNgNQgOgNgHgTIgGgVIgCgWIAAgBQAAgQAIgaQAHgTAOgNQANgNARgHQARgHASAAQAMAAAMAEQAKACAKAHQAMAHASAVIAAh2IAdAAIAAEVIgdAAIAAgoQgSAXgMAIQgKAGgKADQgMAEgMAAQgTAAgQgHgAgaggQgNAFgJAKQgJAKgGANQgFAPAAARIAAABQAAAQAFAPQAGAOAJAKQAKAKAMAFQANAGANgBQANABANgGQAOgFAJgLQALgKAFgOQAGgOAAgQIAAgBQAAgQgGgPQgFgMgLgLQgJgKgOgGQgNgFgNAAQgNAAgNAFg");
	this.shape_56.setTransform(596.2,353.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgVBlIgTgGQgTgJgOgOQgNgNgIgTQgHgSAAgVIAAgBQAAgUAHgTQAIgSANgOQAPgPASgHIAUgHIAUgCQAPAAAaAJQATAHANAOQAOAOAIATQAHATABAUIAAAAQgBAUgHAUQgIASgOAOQgOAOgSAJQgbAHgOABgAgdhFQgNAFgKAKQgJALgFAOQgFAOgBAPIAAAAQABAQAFAOQAGAOAKAKQAJALANAFQAOAHAOAAQAQAAAOgHQAMgFAKgLQAKgLAFgNQAGgOgBgPIAAgBQABgOgGgPQgGgNgKgLQgKgLgNgFQgOgHgOAAQgQAAgNAHg");
	this.shape_57.setTransform(560.5,357.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgOCLIAAkVIAcAAIAAEVg");
	this.shape_58.setTransform(543.3,353.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgnBiQgNgEgLgIQgKgIgGgLQgGgMAAgPIAAAAQAAgQAGgMQAGgMALgHQALgIAPgEQAQgFATAAQAYAAAjAJIAAgGQAAgNgEgKQgEgKgIgHQgHgGgLgEQgLgDgNAAQgQAAgPADQgNAEgPAGIgJgYQASgIAPgEQASgEATAAQAVAAAQAFQAQAGALAKQAKALAFAOQAFAOAAATIAAB4IgcAAIAAgeQgMAPgQAIQgJAFgKADQgLADgMAAQgOAAgNgEgAgXABQgKAEgIAEQgHAFgEAIQgEAIAAAIIAAABQAAAJAEAHQAEAIAHAFQAHAFAJACQAJADAKAAQAMAAAMgEQAMgDAJgIQAJgHAFgKQAFgJAAgLIAAgTQghgHgYAAQgNAAgLABg");
	this.shape_59.setTransform(526.7,357.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AACB+QgKgDgHgHQgIgGgEgLQgEgKAAgPIAAh2IgbAAIAAgaIAbAAIAAg6IAdAAIAAA6IA9AAIAAAaIg9AAIAAByQAAARAIAJQAJAHAPAAQAOAAAPgHIAAAZQgVAJgOAAQgNAAgJgEg");
	this.shape_60.setTransform(508.4,354.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AA4BkIAAhxQAAgOgDgLQgDgLgIgIQgHgIgJgEQgLgEgMAAQgMAAgLAFQgLAEgIAIQgIAIgEAMQgFALAAAOIAABvIgdAAIAAjDIAdAAIAAAiIAMgPQAHgHAHgFQAJgGAKgCQALgDALAAQARAAAOAFQAOAGAKAKQAKALAFAOQAFAPAAARIAAB5g");
	this.shape_61.setTransform(489.4,357.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AggCHQgSgGgNgOQgOgOgIgSIgFgVIgCgVQAAgWAHgTQAHgRANgOQAMgPASgHQASgIASAAQAPAAAYAIQARAHAMAQQAMANAFATQAHASAAAWIgBAKIiaAAQABAQAHAMQAFAMAKAJQAJAIAMAEQAMAEAMAAQATABAQgIQAOgHANgNIASAQQgVAUgNAHQgKAFgMACQgMADgNAAQgTAAgSgIgAA/AdQgBgOgFgMQgEgLgIgJQgIgJgLgFQgMgFgNgBQgMAAgLAGQgLAFgJAIQgIAJgGAMQgEAMgCAOIB9AAIAAAAgAgKhWIAig4IAfAOIgrAqg");
	this.shape_62.setTransform(466.4,353.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AABB+QgJgDgHgHQgIgGgEgLQgEgKAAgPIAAh2IgcAAIAAgaIAcAAIAAg6IAdAAIAAA6IA+AAIAAAaIg+AAIAAByQAAARAJAJQAHAHAQAAQAOAAAPgHIAAAZQgVAJgOAAQgMAAgLgEg");
	this.shape_63.setTransform(447.8,354.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AA5BkIAAhxQAAgOgEgLQgDgLgIgIQgGgIgLgEQgKgEgMAAQgMAAgLAFQgLAEgIAIQgIAIgEAMQgEALgBAOIAABvIgdAAIAAjDIAdAAIAAAiIALgPQAHgHAIgFQAJgGAKgCQAKgDAMAAQARAAAOAFQAPAGAJAKQAKALAFAOQAFAPAAARIAAB5g");
	this.shape_64.setTransform(428.8,357.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgOCFIAAkJIAdAAIAAEJg");
	this.shape_65.setTransform(411.4,354.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgQCFIAAgVIAIipIAQAAIAJCpIAAAVgAgRhcIAAgoIAiAAIAAAog");
	this.shape_66.setTransform(400.8,354.2);

	this.botnextlevel = new lib.botnextlevel();
	this.botnextlevel.parent = this;
	this.botnextlevel.setTransform(581.5,522.6,1,1,0,0,0,63.3,19.5);
	new cjs.ButtonHelper(this.botnextlevel, 0, 1, 2, false, new lib.botnextlevel(), 3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgNCLIAAkVIAbAAIAAEVg");
	this.shape_67.setTransform(732.6,347.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AggBfQgSgHgNgNQgOgPgIgSIgFgUIgCgWQAAgUAHgTQAHgTANgNQAMgPASgIQASgHASgBQAPABAYAHQARAIAMAPQAMAOAFATQAHATAAAVIAAAJIibAAQACAQAFAMQAHAMAJAJQAJAJAMAEQAMAEAMAAQATAAAQgIQAOgGANgOIASAQQgVAVgNAGQgKAFgMADQgLADgOgBQgTAAgSgHgAA/gLQgBgOgEgLQgFgNgIgIQgIgKgLgEQgLgGgOAAQgMAAgLAFQgLAFgIAJQgJAIgGANQgEAMgCAOIB9AAIAAAAg");
	this.shape_68.setTransform(716.5,351.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgOCIIAAjEIAcAAIAADEgAgQhnIAAggIAhAAIAAAgg");
	this.shape_69.setTransform(679.1,347.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AA5BkIAAhxQgBgOgDgLQgDgLgIgIQgGgIgLgEQgKgEgMAAQgMAAgLAFQgLAEgIAIQgIAIgEAMQgFALAAAOIAABvIgdAAIAAjDIAdAAIAAAiIAMgPQAHgHAHgFQAJgGAKgCQALgDALAAQARAAAOAFQAPAGAJAKQAKALAFAOQAFAPAAARIAAB5g");
	this.shape_70.setTransform(662.5,351.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AggBfQgSgHgNgNQgOgPgIgSIgFgUIgCgWQAAgUAHgTQAHgTANgNQANgPARgIQARgHATgBQAPABAYAHQARAIAMAPQALAOAHATQAGATAAAVIgBAJIiaAAQABAQAHAMQAFAMAKAJQAJAJAMAEQAMAEAMAAQATAAAQgIQAOgGANgOIASAQQgVAVgNAGQgKAFgMADQgMADgNgBQgTAAgSgHgAA/gLQgBgOgFgLQgEgNgIgIQgIgKgLgEQgMgGgNAAQgMAAgLAFQgLAFgJAJQgIAIgFANQgGAMgBAOIB9AAIAAAAg");
	this.shape_71.setTransform(628.2,351.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AABB/QgJgEgHgGQgIgHgEgKQgEgMAAgOIAAh1IgbAAIAAgaIAbAAIAAg8IAdAAIAAA8IA+AAIAAAaIg+AAIAABxQAAARAJAIQAIAIAPAAQAOAAAPgHIAAAZQgVAIgOAAQgNAAgKgCg");
	this.shape_72.setTransform(609.6,348.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AA5BkIAAhxQgBgOgDgLQgDgLgIgIQgGgIgLgEQgKgEgMAAQgMAAgLAFQgLAEgIAIQgIAIgEAMQgFALAAAOIAABvIgdAAIAAjDIAdAAIAAAiIAMgPQAHgHAHgFQAJgGAKgCQALgDALAAQARAAAOAFQAPAGAJAKQAKALAFAOQAFAPAAARIAAB5g");
	this.shape_73.setTransform(590.5,351.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AggBfQgSgHgNgNQgOgPgIgSIgFgUIgCgWQAAgUAHgTQAHgTANgNQAMgPASgIQASgHASgBQAPABAYAHQARAIAMAPQAMAOAFATQAHATAAAVIAAAJIibAAQACAQAFAMQAHAMAJAJQAJAJAMAEQAMAEAMAAQATAAAQgIQAOgGANgOIASAQQgVAVgNAGQgKAFgMADQgLADgOgBQgTAAgSgHgAA/gLQgBgOgFgLQgEgNgIgIQgIgKgLgEQgLgGgOAAQgMAAgLAFQgLAFgIAJQgJAIgGANQgEAMgCAOIB9AAIAAAAg");
	this.shape_74.setTransform(567.6,351.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgOCIIAAjEIAcAAIAADEgAgQhnIAAggIAhAAIAAAgg");
	this.shape_75.setTransform(551.3,347.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgpBeQgOgFgKgKQgKgLgFgOQgFgPAAgSIAAh4IAeAAIAAByQAAANADALQAEALAHAHQAHAIAKAFQAKADANAAQALAAALgEQALgEAIgJQAIgIAEgLQAFgLAAgOIAAhvIAdAAIAADDIgdAAIAAgiQgPAUgLAHQgJAGgJACQgLADgLAAQgSABgOgHg");
	this.shape_76.setTransform(534.4,351.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgvB8QgdgLgNgJIANgXQARANATAFQATAHAVAAQAPAAANgEQANgFAKgJQAJgIAFgNQAFgOAAgRIAAgXQgSAWgNAHQgKAGgLADQgMADgMAAQgSABgRgHQgQgGgNgMQgNgNgHgRQgIgQAAgVIAAgBQAAgUAIgSQAHgRANgMQANgNARgGQAQgGASAAQANAAAMADQAKADAKAFQANAIASAUIAAgjIAdAAIAAChQAAAWgHATQgGARgMAMQgNAMgUAHQgSAHgXAAQgYAAgXgHgAgahkQgNAFgJAJQgKAIgEANQgHAMAAAPIAAAAQAAAPAHANQAEALAKAJQAKAJAMAFQAMAEAOABQAMgBAOgEQANgFAKgJQALgJAFgLQAGgMAAgPIAAgBQAAgPgGgMQgFgMgLgJQgKgJgNgFQgOgEgMAAQgOAAgMAEg");
	this.shape_77.setTransform(509.7,354.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgOCIIAAjEIAcAAIAADEgAgQhnIAAggIAhAAIAAAgg");
	this.shape_78.setTransform(492.7,347.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AglBeQgVgHgRgOIAPgVQARAMARAHQARAGAQAAQASAAAMgIQALgJAAgOIAAgBQAAgHgEgFQgEgFgHgFQgKgFgYgHQgfgJgMgIQgLgGgEgJQgGgKAAgNIAAAAQAAgNAFgKQAFgLAIgHQAKgIAMgEQAMgEAOAAQASAAATAGQASAGAQAKIgOAWQgOgJgOgFQgQgFgOAAQgQAAgLAIQgKAIAAAMIAAABQAAAHAEAFQAEAFAHAEQAKAFAZAIIAWAIQAMAFAJAEQAJAHAFAJQAFAKAAAMIAAABQAAAOgFALQgFALgJAIQgKAHgNAEQgNAEgPAAQgTAAgXgIg");
	this.shape_79.setTransform(478,351.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgnBiQgNgEgLgIQgKgIgGgLQgGgMAAgOIAAgBQAAgQAGgMQAGgMALgIQALgHAPgFQAQgDATAAQAYgBAjAJIAAgGQAAgNgEgKQgEgKgIgHQgHgHgLgDQgLgDgNAAQgQAAgPADQgNAEgPAGIgJgXQASgIAPgFQASgEATAAQAVAAAQAGQAQAFALAKQAKALAFAOQAFAOAAAUIAAB2IgcAAIAAgdQgMAPgQAIQgJAGgKACQgLADgMAAQgOAAgNgEgAgXABQgKAEgIAEQgHAGgEAHQgEAIAAAJIAAAAQAAAJAEAHQAEAIAHAFQAHAFAJADQAJACAKAAQAMAAAMgDQAMgFAJgHQAJgGAFgLQAFgJAAgMIAAgSQghgHgYAAQgNAAgLABg");
	this.shape_80.setTransform(435.9,351.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgVBkIgTgFQgTgJgOgOQgNgNgIgTQgHgTAAgUIAAgBQAAgUAHgSQAIgTANgOQAPgPASgHIAUgHIAUgBQAPgBAaAJQATAHANAOQAOAOAIATQAHATABAUIAAAAQgBAUgHAUQgIASgOAOQgOAOgSAJQgbAHgOABgAgdhGQgNAGgKAKQgJALgFAOQgFANgBAQIAAAAQABAPAFAPQAGAOAJAKQAKALANAFQAOAHAOAAQAQAAANgHQAOgFAJgLQAKgLAFgNQAFgOAAgPIAAgBQAAgOgFgPQgGgNgJgLQgLgLgNgGQgOgGgOAAQgQAAgNAGg");
	this.shape_81.setTransform(678.8,311.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgnCGQgRgHgNgNQgOgOgHgSIgGgVIgCgWIAAgBQAAgQAIgaQAHgSAOgOQANgNARgHQARgHASAAQAMAAAMAEQAKACAKAHQAMAHASAVIAAh2IAdAAIAAEVIgdAAIAAgoQgSAWgMAJQgKAGgKADQgMAEgMAAQgTAAgQgHgAgagfQgNAEgJAKQgJAKgGANQgFAPAAARIAAABQAAARAFAOQAGAOAKAKQAJAKAMAFQANAGANgBQANABANgGQAOgFAJgKQALgLAFgOQAGgOAAgQIAAgBQAAgQgGgPQgFgMgLgLQgJgKgOgFQgNgGgNAAQgNAAgNAGg");
	this.shape_82.setTransform(653.3,307.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgnBiQgNgEgLgIQgKgIgGgLQgGgMAAgPIAAAAQAAgQAGgMQAGgMALgHQALgIAPgEQAQgFATAAQAYAAAjAJIAAgGQAAgNgEgKQgEgKgIgHQgHgGgLgEQgLgEgNAAQgQABgPAEQgNADgPAGIgJgYQASgHAPgFQASgEATAAQAVAAAQAFQAQAGALALQAKAKAFAOQAFAPAAASIAAB4IgcAAIAAgeQgMAPgQAJQgJAEgKADQgLADgMAAQgOAAgNgEgAgXACQgKACgIAGQgHAEgEAIQgEAHAAAJIAAABQAAAJAEAIQAEAGAHAGQAHAFAJACQAJADAKAAQAMAAAMgEQAMgEAJgGQAJgIAFgJQAFgKAAgLIAAgTQghgHgYAAQgNAAgLACg");
	this.shape_83.setTransform(629.7,311.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AglBeQgVgHgQgOIAOgVQAQAMARAHQASAGAQAAQASAAALgIQAMgJAAgOIAAgBQAAgHgEgFQgEgFgHgFQgKgFgYgHQgfgJgMgIQgLgGgEgJQgGgKAAgNIAAAAQAAgNAFgKQAEgLAJgHQAKgIAMgEQANgEANAAQARAAATAGQAUAGAOAKIgNAWQgOgJgOgFQgQgFgOAAQgQAAgLAIQgKAIAAAMIAAABQAAAHAEAFQAEAFAIAEQAIAFAaAIIAWAIQANAFAHAEQAKAHAFAJQAGAKAAAMIAAABQAAAOgGALQgFALgKAIQgJAHgNAEQgNAEgOAAQgVAAgWgIg");
	this.shape_84.setTransform(609.6,311.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgnBiQgNgEgLgIQgKgIgGgLQgGgMAAgPIAAAAQAAgQAGgMQAGgMALgHQALgIAPgEQAQgFATAAQAYAAAjAJIAAgGQAAgNgEgKQgEgKgIgHQgHgGgLgEQgLgEgNAAQgQABgPAEQgNADgPAGIgJgYQASgHAPgFQASgEATAAQAVAAAQAFQAQAGALALQAKAKAFAOQAFAPAAASIAAB4IgcAAIAAgeQgMAPgQAJQgJAEgKADQgLADgMAAQgOAAgNgEgAgXACQgKACgIAGQgHAEgEAIQgEAHAAAJIAAABQAAAJAEAIQAEAGAHAGQAHAFAJACQAJADAKAAQAMAAAMgEQAMgEAJgGQAJgIAFgJQAFgKAAgLIAAgTQghgHgYAAQgNAAgLACg");
	this.shape_85.setTransform(588.8,311.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AhiCDIAAkBIAdAAIAAAoIAOgRQAIgIAIgGQAKgGALgDQALgEAMAAQASAAARAHQARAHANANQAOANAHATQAIAbAAAQIAAABIgCAXIgGATQgHASgOAOQgNANgRAHQgRAHgSAAQgMAAgLgEQgLgDgKgGQgJgFgIgIIgNgQIAABjgAgZhiQgNAFgKAKQgKALgGANQgGAPAAAQIAAABQAAAQAGAOQAGANAKALQAKAKANAFQAMAGANAAQAOAAANgFQANgGAJgJQAKgKAFgOQAFgOAAgRIAAgBQAAgRgFgOQgGgOgJgKQgKgKgMgFQgNgGgOAAQgNAAgMAGg");
	this.shape_86.setTransform(566.3,314.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AglBeQgVgHgQgOIAOgVQARAMAQAHQASAGAQAAQASAAALgIQAMgJAAgOIAAgBQAAgHgEgFQgEgFgHgFQgKgFgYgHQgfgJgMgIQgKgGgGgJQgFgKAAgNIAAAAQAAgNAFgKQAEgLAKgHQAJgIAMgEQANgEANAAQASAAASAGQAUAGAOAKIgNAWQgOgJgPgFQgPgFgOAAQgQAAgLAIQgKAIAAAMIAAABQAAAHAEAFQAEAFAIAEQAIAFAaAIIAWAIQAMAFAIAEQAKAHAFAJQAGAKAAAMIAAABQAAAOgGALQgFALgKAIQgJAHgNAEQgNAEgOAAQgUAAgXgIg");
	this.shape_87.setTransform(532.1,311.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgnBiQgNgEgLgIQgKgIgGgLQgGgMAAgPIAAAAQAAgQAGgMQAGgMALgHQALgIAPgEQAQgFATAAQAYAAAjAJIAAgGQAAgNgEgKQgEgKgIgHQgHgGgLgEQgLgEgNAAQgQABgPAEQgNADgPAGIgJgYQASgHAPgFQASgEATAAQAVAAAQAFQAQAGALALQAKAKAFAOQAFAPAAASIAAB4IgcAAIAAgeQgMAPgQAJQgJAEgKADQgLADgMAAQgOAAgNgEgAgXACQgKACgIAGQgHAEgEAIQgEAHAAAJIAAABQAAAJAEAIQAEAGAHAGQAHAFAJACQAJADAKAAQAMAAAMgEQAMgEAJgGQAJgIAFgJQAFgKAAgLIAAgTQghgHgYAAQgNAAgLACg");
	this.shape_88.setTransform(511.3,311.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("ABNCFIAAh3IiZAAIAAB3IgeAAIAAkJIAeAAIAAB2ICZAAIAAh2IAeAAIAAEJg");
	this.shape_89.setTransform(486.4,308.2);

	this.missatgeok = new lib.missatgeok();
	this.missatgeok.parent = this;
	this.missatgeok.setTransform(581.3,515.6,1,1,0,0,0,215.5,19.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgaDLIAAg9IA1AAIAAA9gAgMBZIgNkCIAAghIAzAAIAAAhIgOECg");
	this.shape_90.setTransform(752.1,377.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AggCZIgegJQgcgMgVgVQgVgWgMgcQgLgdAAgfIAAgBQAAgeALgdQAMgdAVgVQAVgXAcgLIAegKIAggDQAXABAoALQAcAMAVAWQAVAWALAcQAMAdAAAfIAAAAQAAAggMAcQgLAdgVAVQgWAWgcAMQgoANgWAAgAgthrQgTAJgPAQQgPAQgIAVQgIAVAAAYIAAAAQAAAYAJAWQAIAUAPARQAPAQAUAIQAVAJAWAAQAYAAAVgJQAUgIAPgQQAOgRAIgUQAIgWAAgXIAAgBQAAgXgIgWQgJgUgPgRQgPgQgUgJQgVgKgWAAQgYAAgVAKg");
	this.shape_91.setTransform(725.5,382.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("Ag8DNQgagLgUgUQgVgVgMgcIgJgfIgDgiIAAgCQABgYALgpQAMgcAVgUQAUgUAagLQAZgLAcAAQATAAASAGQARAFAPAIQASAMAbAhIAAi1IAtAAIAAGmIgtAAIAAg8QgcAigSANQgPAKgRAEQgSAGgSAAQgcAAgZgKgAgogxQgTAIgOAPQgPAPgJAUQgIAWAAAbIAAABQAAAaAIAWQAJAVAPAQQAOAPATAHQAUAJAUAAQAVAAATgJQAUgIAPgPQAQgQAIgVQAJgWABgZIAAgBQgBgZgJgXQgIgTgQgQQgPgPgUgJQgTgHgVAAQgVgBgTAIg");
	this.shape_92.setTransform(686.7,376.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("Ag8CWQgUgHgQgLQgQgMgJgSQgKgSAAgWIAAgBQAAgYAKgTQAIgRASgMQAQgMAYgHQAYgGAdAAQAlAAA1AMIAAgJQAAgTgGgQQgGgPgLgKQgMgKgQgGQgQgFgVAAQgZAAgXAGQgUAFgXALIgNglQAbgNAXgFQAdgIAdABQAgAAAYAIQAYAJARAPQAPARAIAVQAIAWAAAdIAAC2IgsAAIAAgsQgSAWgYANQgOAIgQAEQgQADgTAAQgVAAgUgFgAgjACQgQAFgMAIQgLAHgGAMQgFALAAAOIAAABQAAANAFAMQAHALAKAIQALAIANAEQAOADAPAAQATAAASgFQATgHANgKQAOgLAIgPQAHgPAAgRIAAgcQgzgLgkAAQgUAAgQACg");
	this.shape_93.setTransform(650.6,382.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("ABXCZIAAiuQgBgVgFgRQgGgQgKgMQgLgMgPgGQgQgHgTAAQgTABgQAGQgRAHgMAMQgMANgHARQgGARAAAWIAACqIgtAAIAAkrIAtAAIAAA0IAQgWQALgLAMgIQANgJAPgEQAQgEASAAQAbAAAWAJQAVAIAPAQQAPAQAHAWQAIAWAAAbIAAC5g");
	this.shape_94.setTransform(617.1,382.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("Ag8CWQgVgHgPgLQgRgMgIgSQgKgSAAgWIAAgBQAAgYAJgTQAJgRASgMQAQgMAZgHQAXgGAdAAQAkAAA2AMIAAgJQAAgTgGgQQgGgPgMgKQgLgKgQgGQgRgFgUAAQgYAAgYAGQgUAFgWALIgOglQAcgNAWgFQAcgIAeABQAfAAAZAIQAZAJAPAPQARARAHAVQAIAWAAAdIAAC2IgsAAIAAgsQgSAWgYANQgOAIgPAEQgRADgSAAQgWAAgUgFgAgjACQgQAFgLAIQgMAHgGAMQgFALgBAOIAAABQABANAFAMQAHALAKAIQALAIANAEQAOADAPAAQAUAAARgFQATgHAOgKQANgLAIgPQAIgPAAgRIAAgcQg0gLgkAAQgTAAgRACg");
	this.shape_95.setTransform(581.4,382.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AhIC+QgtgSgTgOIAUgiQAZASAdAKQAeAKAfAAQAYAAAUgHQAUgHAPgNQAOgOAHgUQAIgUAAgaIAAgkQgdAigSALQgQAJgRAEQgSAGgSAAQgcAAgZgKQgZgKgUgSQgUgTgMgZQgLgagBggIAAgBQABggALgaQAMgaAUgTQAUgTAZgJQAZgKAcAAQASAAATAEQARAFAPAJQATAKAcAgIAAg2IAtAAIAAD3QAAAigLAbQgKAbgSASQgTAUgeAKQgeAKgiAAQgmAAgigKgAgpiYQgTAGgOANQgOAOgJATQgIASAAAXIAAABQAAAWAIAUQAJARAPAOQAOAOASAHQAUAIAUAAQAVAAATgIQAVgHAOgOQAQgNAJgSQAJgTABgXIAAgBQgBgWgJgTQgJgSgQgOQgOgOgVgGQgTgIgVAAQgVAAgTAIg");
	this.shape_96.setTransform(545.4,386.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("Ag4CQQghgMgZgUIAWggQAZASAaAKQAbAKAZAAQAbAAASgNQARgNAAgWIAAgBQAAgLgGgIQgGgIgKgGQgQgJgkgLQgwgOgTgLQgPgKgIgOQgJgPAAgTIAAgBQAAgTAIgRQAHgPAOgMQAOgLASgGQATgGAVAAQAcAAAcAJQAdAIAXAQIgUAhQgVgNgXgIQgYgIgVAAQgZAAgQANQgQAMAAATIAAABQAAAKAGAIQAGAIAMAGQAOAIAmAMIAjALQASAIANAHQAOALAIANQAIAPAAAUIAAABQAAAVgIARQgIAQgOAMQgPAMgTAFQgUAGgWAAQgfAAgigLg");
	this.shape_97.setTransform(494.7,382.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("Ag8CWQgUgHgQgLQgQgMgJgSQgKgSAAgWIAAgBQAAgYAKgTQAJgRARgMQARgMAXgHQAYgGAcAAQAmAAA1AMIAAgJQAAgTgGgQQgFgPgMgKQgMgKgQgGQgQgFgVAAQgYAAgYAGQgUAFgXALIgNglQAbgNAXgFQAcgIAeABQAgAAAYAIQAYAJARAPQAPARAIAVQAIAWAAAdIAAC2IgsAAIAAgsQgSAWgYANQgOAIgQAEQgQADgTAAQgVAAgUgFgAgjACQgQAFgMAIQgLAHgFAMQgHALABAOIAAABQgBANAHAMQAFALALAIQALAIANAEQAOADAPAAQATAAATgFQASgHANgKQAOgLAIgPQAIgPgBgRIAAgcQgygLglAAQgTAAgRACg");
	this.shape_98.setTransform(463.1,382.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AB1DLIAAi3IjpAAIAAC3IguAAIAAmVIAuAAIAAC1IDpAAIAAi1IAuAAIAAGVg");
	this.shape_99.setTransform(425.2,377.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgjAuQAWgJAKgMQAIgMgCgRIgUAAIAAg9IA1AAIAAA0QAAARgEANQgEAOgIAJQgIAKgMAGQgLAGgRAEg");
	this.shape_100.setTransform(755.6,338);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AhKCaQg0gSgXgQIAshKQAdARAfAJQAeAJAbAAQATAAAAgKIAAgBQAAgGgHgDIgegLIg2gPQgYgKgQgLQgRgMgJgQQgJgRAAgYIAAgCQAAgZAKgVQAJgTATgOQATgPAYgHQAagHAeAAQAnAAAmAKQAlAKAcARIgpBOQgZgOgcgHQgcgJgVABQgRgBAAAKIAAABQAAAFAHAEIAfAKQAgAIAWAIQAYAJAQALQARANAJAPQAIASAAAYIAAABQAAAagJAUQgKAVgRANQgTAOgZAIQgZAHggAAQg8gEgbgIg");
	this.shape_101.setTransform(733.7,321.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("Ag8CaIgdgOIgagTIgUgYQgJgNgGgPIgKgfIgDgkIAAgBQAAgXAMgqQAMgeAWgXIAYgUIAcgPIAfgJIAigEQAUAAASAEQASAEAQAGQAQAHANAKQAMAIALAMIARAaIANAeQAKAfAAAkIgBAWIjKAAQAGAUAQAMQAQALAUgBQASAAAQgIQAPgHAQgSIBGA5QgMAQgOAMQgPANgRAJQgSAJgVAFQgWAFgZAAQgxgEgVgIgAAsgaQgDgWgMgNQgMgMgRAAQgQgBgLANQgLANgDAWIBVAAIAAAAg");
	this.shape_102.setTransform(701.7,321.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AhiDLQgYgLgTgWQgSgWgLgdQgKgfAAgkIAAgBQAAgaAKgpQALgeASgXQATgXAYgLQAZgMAcAAQAYAAAhANQATAKASAVIAAiPICEAAIAAGmIiEAAIAAgnQgVAXgQAJQgMAHgMADQgPAFgRAAQgcgBgagMgAglAJQgPAQgBAYIAAABQABAYAPARQAOAQAXAAQAWAAAPgQQAPgRAAgYIAAgBQAAgXgPgRQgPgQgWAAQgXAAgOAQg");
	this.shape_103.setTransform(664.3,316.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AhkCeQgTgGgOgMQgOgNgHgSQgIgTAAgXIAAgBQAAgXAIgTQAJgSAPgMQAQgMAWgHQAXgGAcAAQAaAAAvALIAAgFQAAgWgOgMQgPgMgcAAQgYAAgWAFQgTAEgXAJIgXhYQAdgLAfgFQAigHAnAAQAfAAAxAKQAQAGAOAHQANAIAKALQASARAIAZQAHAXAAAjIAACzIiDAAIAAggQgSATgUAKQgYALgcAAQgXAAgTgHgAgaAgQgKAKAAAPIAAABQAAAOAIAJQAJAIANAAQARAAALgNQALgOAAgWIAAgNQgNgFgRAAQgSAAgLAKg");
	this.shape_104.setTransform(627.1,321.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AhhDLQgZgLgSgWQgUgWgJgdQgLgfAAgkIAAgBQAAgaALgpQAJgeAUgXQASgXAZgLQAYgMAcAAQAYAAAhANQATAKASAVIAAiPICEAAIAAGmIiEAAIAAgnQgUAXgRAJQgMAHgMADQgPAFgRAAQgcgBgZgMgAgmAJQgOAQAAAYIAAABQAAAYAOARQAQAQAWAAQAWAAAPgQQAPgRAAgYIAAgBQAAgXgPgRQgPgQgWAAQgWAAgQAQg");
	this.shape_105.setTransform(590,316.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AhBDUIAAk8ICDAAIAAE8gAhDh/IAAhUICHAAIAABUg");
	this.shape_106.setTransform(562.2,316.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgbCjIgfgKIgcgQIgZgUQgWgXgNgeIgJgeIgDghIAAgBQAAgVAMgpQAJgUAbghIAZgVIAdgPQAQgHASgDQARgEATAAQAZAAAXAHQAWAGATAMQARALAOAQQANAQAKAUIhfA1QgIgQgLgHQgLgJgQAAQgUAAgOAQQgOAQAAAYIAAAAQAAAZAOAQQAOAQASAAQARAAAMgJQALgHAJgQIBgA3QgKAUgPAPQgPAQgSALQgTAMgXAGQgYAGgcAAQgRAAgRgDg");
	this.shape_107.setTransform(537.6,321.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AhBDUIAAk8ICDAAIAAE8gAhDh/IAAhUICHAAIAABUg");
	this.shape_108.setTransform(512,316.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AhBDUIAAmnICDAAIAAGng");
	this.shape_109.setTransform(494.7,316.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("Ag8CaIgdgOIgagTIgUgYQgJgNgGgPIgKgfIgDgkIAAgBQAAgXAMgqQAMgeAWgXIAYgUIAcgPIAfgJIAigEQAUAAASAEQASAEAQAGQAQAHANAKQAMAIALAMIARAaIANAeQAKAfAAAkIgBAWIjKAAQAGAUAQAMQAQALAUgBQASAAAQgIQAPgHAQgSIBGA5QgMAQgOAMQgPANgRAJQgSAJgVAFQgWAFgZAAQgxgEgVgIgAAsgaQgDgWgMgNQgMgMgRAAQgQgBgLANQgLANgDAWIBVAAIAAAAg");
	this.shape_110.setTransform(468.8,321.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AipDLIAAmVIFTAAIAAB0IjLAAIAAAzIC8AAIAABpIi8AAIAACFg");
	this.shape_111.setTransform(434.4,317.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgZDLIAAghIANkBIAYAAIAOEBIAAAhgAgaiNIAAg9IA1AAIAAA9g");
	this.shape_112.setTransform(407.3,317.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.botjugar}]}).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58,p:{x:543.3,y:353.6}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51,p:{x:722.6,y:357.7}},{t:this.shape_50},{t:this.shape_49},{t:this.botjugaragain}]},1).to({state:[{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_58,p:{x:452.5,y:347.6}},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_51,p:{x:695.2,y:351.7}},{t:this.shape_68},{t:this.shape_67},{t:this.botnextlevel}]},1).to({state:[{t:this.missatgeok}]},1).to({state:[{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.botjugaragain}]},1).wait(1));

	// caixa
	this.instance = new lib.caixaorange();
	this.instance.parent = this;
	this.instance.setTransform(581.6,386,1,1,0,0,0,306.9,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(1).to({_off:false},0).wait(1));

	// fons
	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("EhnRA6XMAAAh0tMDOjAAAMAAAB0tg");
	this.shape_113.setTransform(661,373.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_113).to({_off:true},3).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1322,747);


(lib.minion4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Capa 2
	this.boto1 = new lib.boto();
	this.boto1.parent = this;
	this.boto1.setTransform(126,126,1,1,0,0,0,126,126);
	new cjs.ButtonHelper(this.boto1, 0, 1, 2, false, new lib.boto(), 3);

	this.timeline.addTween(cjs.Tween.get(this.boto1).to({_off:true},1).wait(1));

	// Layer 3
	this.instance = new lib.boti4long();
	this.instance.parent = this;
	this.instance.setTransform(73,-140);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Capa 1
	this.instance_1 = new lib.boti4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6,252,258);


(lib.minion3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Capa 2
	this.boto1 = new lib.boto();
	this.boto1.parent = this;
	this.boto1.setTransform(126,126,1,1,0,0,0,126,126);
	new cjs.ButtonHelper(this.boto1, 0, 1, 2, false, new lib.boto(), 3);

	this.timeline.addTween(cjs.Tween.get(this.boto1).to({_off:true},1).wait(1));

	// Layer 3
	this.instance = new lib.boti3long();
	this.instance.parent = this;
	this.instance.setTransform(72,-141);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Capa 1
	this.instance_1 = new lib.boti3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,252,252);


(lib.minion2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Capa 2
	this.boto1 = new lib.boto();
	this.boto1.parent = this;
	this.boto1.setTransform(126,126,1,1,0,0,0,126,126);
	new cjs.ButtonHelper(this.boto1, 0, 1, 2, false, new lib.boto(), 3);

	this.timeline.addTween(cjs.Tween.get(this.boto1).to({_off:true},1).wait(1));

	// Layer 3
	this.instance = new lib.boti2long();
	this.instance.parent = this;
	this.instance.setTransform(69,-143);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Capa 1
	this.instance_1 = new lib.boti2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,252,252);


(lib.minion1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Capa 3
	this.boto1 = new lib.boto();
	this.boto1.parent = this;
	this.boto1.setTransform(126,126,1,1,0,0,0,126,126);
	new cjs.ButtonHelper(this.boto1, 0, 1, 2, false, new lib.boto(), 3);

	this.timeline.addTween(cjs.Tween.get(this.boto1).to({_off:true},1).wait(1));

	// Layer 3
	this.instance = new lib.boti1long();
	this.instance.parent = this;
	this.instance.setTransform(74,-140);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Capa 1
	this.instance_1 = new lib.boti1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-4,252,256);


(lib.etiquetesb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1));

	// Layer 3
	this.instance = new lib.tagok2();
	this.instance.parent = this;
	this.instance.setTransform(206.8,13.1,1,1,0,0,0,23.6,20.1);

	this.instance_1 = new lib.tagok2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(206.8,13.1,1,1,0,0,0,23.6,20.1);

	this.instance_2 = new lib.tagok2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(206.8,13.1,1,1,0,0,0,23.6,20.1);

	this.instance_3 = new lib.tagok2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(206.8,13.1,1,1,0,0,0,23.6,20.1);

	this.instance_4 = new lib.tagok2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(206.8,13.1,1,1,0,0,0,23.6,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{x:206.8}}]},1).to({state:[{t:this.instance_1,p:{x:206.8}},{t:this.instance,p:{x:256}}]},1).to({state:[{t:this.instance_2,p:{x:206.8}},{t:this.instance_1,p:{x:256}},{t:this.instance,p:{x:305.2}}]},1).to({state:[{t:this.instance_3,p:{x:206.8}},{t:this.instance_2,p:{x:256}},{t:this.instance_1,p:{x:305.2}},{t:this.instance,p:{x:354.4}}]},1).to({state:[{t:this.instance_4},{t:this.instance_3,p:{x:256}},{t:this.instance_2,p:{x:305.2}},{t:this.instance_1,p:{x:354.4}},{t:this.instance,p:{x:403.5}}]},1).wait(1));

	// Layer 2
	this.instance_5 = new lib.tagok();
	this.instance_5.parent = this;
	this.instance_5.setTransform(403.5,13.1,1,1,0,0,0,23.6,20.1);

	this.instance_6 = new lib.tagok();
	this.instance_6.parent = this;
	this.instance_6.setTransform(305.2,13.1,1,1,0,0,0,23.6,20.1);

	this.instance_7 = new lib.tagok();
	this.instance_7.parent = this;
	this.instance_7.setTransform(354.4,13.1,1,1,0,0,0,23.6,20.1);

	this.instance_8 = new lib.tagok();
	this.instance_8.parent = this;
	this.instance_8.setTransform(206.8,13.1,1,1,0,0,0,23.6,20.1);

	this.instance_9 = new lib.tagok();
	this.instance_9.parent = this;
	this.instance_9.setTransform(256,13.1,1,1,0,0,0,23.6,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(183.2,-7,244,40.1);


// stage content:
(lib.basegame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		root0 = this;
		iniciar();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// missatges
	this.missatge2 = new lib.missatge2();
	this.missatge2.parent = this;
	this.missatge2.setTransform(820,374.5,1,1,0,0,0,661,373.4);

	this.timeline.addTween(cjs.Tween.get(this.missatge2).wait(1));

	// missatges
	this.missatge = new lib.missatge();
	this.missatge.parent = this;
	this.missatge.setTransform(820,374.5,1,1,0,0,0,661,373.4);

	this.timeline.addTween(cjs.Tween.get(this.missatge).wait(1));

	// Layer 1
	this.ahoratu = new lib.ahoratu();
	this.ahoratu.parent = this;
	this.ahoratu.setTransform(740,609,1,1,0,0,0,165.5,46);

	this.timeline.addTween(cjs.Tween.get(this.ahoratu).wait(1));

	// minions
	this.botstart = new lib.memoriza();
	this.botstart.parent = this;
	this.botstart.setTransform(740,609,1,1,0,0,0,165.5,46);
	new cjs.ButtonHelper(this.botstart, 0, 1, 1);

	this.boti4 = new lib.minion4();
	this.boti4.parent = this;
	this.boti4.setTransform(1155.9,134.5,1,1,0,0,0,112.5,109.5);

	this.boti3 = new lib.minion3();
	this.boti3.parent = this;
	this.boti3.setTransform(894.9,131.5,1,1,0,0,0,110.5,106.5);

	this.boti2 = new lib.minion2();
	this.boti2.parent = this;
	this.boti2.setTransform(633.9,130.5,1,1,0,0,0,108.5,105.5);

	this.boti1 = new lib.minion1();
	this.boti1.parent = this;
	this.boti1.setTransform(373,133.5,1,1,0,0,0,112,108.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("A52nLMAztAAAIAAOXMgztAAAg");
	this.shape.setTransform(785.5,627);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.boti1},{t:this.boti2},{t:this.boti3},{t:this.boti4},{t:this.botstart}]}).wait(1));

	// vides
	this.vida = new lib.vida();
	this.vida.parent = this;
	this.vida.setTransform(1327.9,808.5,1,1,0,0,0,54.2,19.5);

	this.timeline.addTween(cjs.Tween.get(this.vida).wait(1));

	// nivell
	this.etiquetesb = new lib.etiquetesb();
	this.etiquetesb.parent = this;
	this.etiquetesb.setTransform(448.7,806.3,1.273,1.273,0,0,0,68.3,19.6);

	this.nivell = new lib.nivell();
	this.nivell.parent = this;
	this.nivell.setTransform(123.8,808.5,1,1,0,0,0,83.7,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nivell},{t:this.etiquetesb}]}).wait(1));

	// fons
	this.instance = new lib.terrarebot();
	this.instance.parent = this;
	this.instance.setTransform(1205.5,457,1,1,0,0,0,78.5,6);

	this.instance_1 = new lib.terrarebot();
	this.instance_1.parent = this;
	this.instance_1.setTransform(940.5,457,1,1,0,0,0,78.5,6);

	this.instance_2 = new lib.terrarebot();
	this.instance_2.parent = this;
	this.instance_2.setTransform(669.5,457,1,1,0,0,0,78.5,6);

	this.instance_3 = new lib.terrarebot();
	this.instance_3.parent = this;
	this.instance_3.setTransform(413.5,457,1,1,0,0,0,78.5,6);

	this.instance_4 = new lib.tiles();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,18);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBE122").s().p("EhznAH0IAAvnMDnPAAAIAAPng");
	this.shape_1.setTransform(740,805);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(740,428.6,1481,854);
// library properties:
lib.properties = {
	width: 1480,
	height: 855,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/base_game_atlas_.png?1493976237339", id:"base_game_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;