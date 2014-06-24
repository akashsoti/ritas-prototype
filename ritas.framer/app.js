var PSD, animateInCurve, animateCurveSpeed, gotoNow, gotoHome, toggler, pointerType;

PSD = Framer.Importer.load("imported/ritas");

animateCurveSpeed = 0.2;

animateCurveSpeedMenu = 0.3

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
};

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