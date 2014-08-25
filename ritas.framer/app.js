var PSD, animateInCurve, animateCurveSpeed, gotoNow, gotoHome, toggler, pointerType;

PSD = Framer.Importer.load("imported/ritas");

animateCurveSpeed = 0.2;

animateCurveSpeedMenu = 0.3;

animateInCurve = "spring(200,15,2)";

gotoNow = function() {
	PSD["body"].animate({
	  properties: {
	    y: 1050
	  },
	  curve: animateInCurve,
	  time: animateCurveSpeed
	});

	PSD["backmenu"].animate({
	  properties: {
	    opacity: 1,
	    scale: 1
	  },
	  time: animateCurveSpeedMenu
	});

	PSD["hamburger"].visible = false

	PSD["close"].visible = true
};

gotoHome = function() {
	PSD["body"].animate({
	  properties: {
	    y: 0
	  },
	  curve: animateInCurve,
	  time: animateCurveSpeed
	});

	PSD["backmenu"].animate({
	  properties: {
	    opacity: 0,
	    scale: 0.8
	  },
	  time: animateCurveSpeedMenu
	});

	PSD["earnrewards"].visible = false

	PSD["hamburger"].visible = true	

	PSD["close"].visible = false

	PSD["body"].visible = true

	PSD["scan"].visible = false

	PSD["share"].visible = false

};

PSD["scan"].visible = false

gotoScanPage = function() {
	PSD["scan"].visible = true
	PSD["scan"].animate({
		curve: animateInCurve,
    time: animateCurveSpeed
	});
	PSD["hamburger"].visible = false
	PSD["body"].visible = false
	PSD["scan-line"].animate({ properties : {y: 820}, curve: "ease-in-sine", time: 1, repeat: 100});
	PSD["capture-scan"].on(pointerType, function (){
		gotoSharePage();
	});
}

gotoSharePage = function() {
	PSD["share"].visible = true
	PSD["scan"].visible = false
	
}
/* Set stage */

gotoHome();

/* Check pointer types */

pointerType = "click";


/* Trigger animation on click/tap anywhere */

toggler = Utils.toggle(gotoNow, gotoHome);


PSD["hamburger"].on(pointerType, function(e) {
  var movePage;
  movePage = void 0;
  e.preventDefault();
  movePage = toggler();
  return movePage();
});

PSD["close"].on(pointerType, function(e) {
  var movePage;
  movePage = void 0;
  e.preventDefault();
  movePage = toggler();
  return movePage();
});


PSD["meter"].visible = false;

PSD["meter-full"].on(Events.TouchStart, function() {
	PSD["meter-full"].animate({
		properties: {
	  	scale: 0.5
	  },
    curve: animateInCurve,
    time: animateCurveSpeed
	});
});

PSD["meter-full"].on(Events.TouchEnd, function() {
	PSD["meter-full"].animate({
		properties: {
	  	scale: 1
	  },
    curve: animateInCurve,
    time: animateCurveSpeed
	});
	gotoScanPage();
});

PSD["close-scan"].on(Events.TouchStart, function(e) {
	this.animate({
		properties: {
	  	scale: 0.5
	  },
    curve: animateInCurve,
    time: animateCurveSpeed
	});
});

PSD["close-scan"].on(Events.TouchEnd, function(e) {
	this.animate({
		properties: {
	  	scale: 1
	  },
    curve: animateInCurve,
    time: animateCurveSpeed
	});
	gotoHome();
});