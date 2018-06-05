// window.onresize = function() {

// 	var pageWidth = window.innerWidth;

// 	if (pageWidth<860) {
// 		var aside = document.getElementById("sidebar")
// 		aside.style.left = '-300px';
// 		var todo = document.getElementById("todos")
// 		todo.style.paddingLeft = '0px';
// 		var foot = document.getElementById("foot")
// 		foot.style.paddingLeft = '0px';
// 	}

// }
var inputtext = document.querySelector("input");
EventUtil.addHandler(inputtext,"keydown", function(event){
	event = EventUtil.getEvent(event);
	if (event.keyCode ==13) {
		inputtext.value;
	};
});


