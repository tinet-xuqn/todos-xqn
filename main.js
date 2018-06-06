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
var inputtext = document.getElementById("myText");
var list = 0;

EventUtil.addHandler(inputtext,"keydown", function(event){
	event = EventUtil.getEvent(event);
	if (event.keyCode == 13 &&(inputtext.value.length>0)) {
 		// 长度条件，防止没输入内容
 		if (list==0) {
 			var section = document.createElement("section");
			section.style.display = "block";
			var div = document.getElementById("todos");
			div.appendChild(section);
			var ul = document.createElement("ul");
			ul.className = "todo-list";
			section.appendChild(ul);



			var li = document.createElement("li");
			ul.appendChild(li);
			var input = document .createElement("input");
			input.type = "checkbox";
			input.className = "list";
			input.setAttribute("onclick", "checkedlist()");

			li.appendChild(input);
			var label = document.createElement("label");
			li.appendChild(label);
			var button = document.createElement("button");
			button.className = "destroy";
			button.setAttribute("onclick", "shanchu()");
			// button.onclick = function(){shanchu()}；

			li.appendChild(button);
			label.innerText = inputtext.value;
 		} else {
 			var ul = document.querySelector(".todo-list");
 			var li = document.createElement("li");
			ul.appendChild(li);
			var input = document .createElement("input");
			input.type = "checkbox";
			input.className = "list";
			input.setAttribute("onclick", "checkedlist()");

			li.appendChild(input);
			var label = document.createElement("label");
			li.appendChild(label);
			var button = document.createElement("button");
			button.className = "destroy";
			button.setAttribute("onclick", "shanchu()");

			// button.onclick = function(){shanchu()}；

			li.appendChild(button);
			label.innerText = inputtext.value;

 		}
		list=list+1;
		inputtext.value = null;
		// 文本框内容清除
	};
});
function shanchu(){

	event.target.parentNode.parentNode.removeChild(event.target.parentNode);
	// list = list -1;


}
function checkedlist(){
	if (event.target.checked) {
		event.target.parentNode.childNodes[1].style.textDecoration = "line-through";
		event.target.parentNode.childNodes[1].style.color = '#d9d9d9';

		event.target.parentNode.className = "havedone";

	} else {
		event.target.parentNode.childNodes[1].style.textDecoration = "none";
		event.target.parentNode.childNodes[1].style.color = 'gray';
		event.target.parentNode.classList.remove("havedone");	
	}
}



