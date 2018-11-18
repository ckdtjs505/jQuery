$(document).ready(function(){
	var headclix =0,eyeclix =0,noseclix =0,mouthclix =0 ;
	lightning_one(4000); // 4초마다 효과
	lightning_two(5000); // 5초마다 효과
	lightning_three(7000); // 7초마다 효과



	$("#head").click(function () {
			if(headclix <9 ){
				$("#head").animate({left:"-=367px"});
				headclix += 1;
			}
			else {
				$("#head").animate({left:"0px"});
				headclix = 0;
			}
	});
	$("#eyes").click(function () {
			if(eyeclix <9 ){
				$("#eyes").animate({left:"-=367px"});
				eyeclix += 1;
			}
			else {
				$("#eyes").animate({left:"0px"});
				eyeclix = 0;
			}
	});
	$("#nose").click(function () {
			if(noseclix <9 ){
				$("#nose").animate({left:"-=367px"});
				noseclix += 1;
			}
			else {
				$("#nose").animate({left:"0px"});
				noseclix = 0;
			}
	});
	$("#mouth").click(function () {
			if(mouthclix <9 ){
				$("#mouth").animate({left:"-=367px"});
				mouthclix += 1;
			}
			else {
				$("#mouth").animate({left:"0px"});
				mouthclix = 0;
			}
	});
	function lightning_one(t) {
			$("#lightning1").fadeIn(500).fadeOut(250);
			setTimeout(function () {lightning_one(t);},t);
	}
	function lightning_two(t) {
			$("#lightning2").fadeIn(250).fadeOut(250);
			setTimeout(function () {lightning_two(t);},t);
	}
	function lightning_three(t) {
			$("#lightning3").fadeIn(250).fadeOut(250);
			setTimeout(function () {lightning_three(t);},t);
	}

});//end doc.onready function
