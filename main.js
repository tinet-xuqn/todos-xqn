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
inputtext.onkeydown = createList;
function createList(event){
	if (event.keyCode == 13 &&(inputtext.value.length>0)) {
 		// 长度条件，防止没输入内容
 		var ul;
 		if (list==0) {
 			var section = document.createElement("section");
 			section.className = "main";
			section.style.display = "block";
			var div = document.getElementById("todos");
			div.appendChild(section);

			var inputall = document .createElement("input");
			inputall.type = "checkbox";
			inputall.id = "select-all";
			inputall.onclick = selectAll;
			section.appendChild(inputall);
			// 全选按钮

			ul = document.createElement("ul");
			ul.className = "todo-list";
			section.appendChild(ul);
 		} else {
 			ul = document.querySelector(".todo-list");
 		}
 		creatLi();

 		function creatLi(){
			var li = document.createElement("li");
			ul.appendChild(li);

			var myDiv = document.createElement("div");
			li.appendChild(myDiv);

			var inputEdit = document .createElement("input");
			inputEdit.type = "text";
			inputEdit.className = "edit";
			li.appendChild(inputEdit);


			var input = document .createElement("input");
			input.type = "checkbox";
			input.className = "list";
			input.onclick = checkedlist;
			myDiv.appendChild(input);

			var label = document.createElement("label");
			myDiv.appendChild(label);

			var button = document.createElement("button");
			button.className = "destroy";
			button.onclick = deleteItem;
			myDiv.appendChild(button);
			label.innerText = inputtext.value;


			var inputall = document.getElementById("select-all");
			inputall.checked=false;
			// 新增时
			list=list+1;
			inputtext.value = null;
			// 文本框内容清除
		}

	};
}

function deleteItem(event){
	var delItem = event.target.parentNode.parentNode;
	delItem.parentNode.removeChild(delItem);
	list = list -1;
	if (list==0) {
		var inputall = document.getElementById("select-all");
		inputall.parentNode.parentNode.removeChild(inputall.parentNode);
	}else {
		checkIputAll();

	}

}


function checkedlist(event){
	var checkedLi = event.target;
	if (event.target.checked) {
		changeStyle(checkedLi);
	} else {
		styleChange(checkedLi);
	}
	checkIputAll();
}


function checkIputAll(){
// 改变全选框的状态
	var all = document.getElementsByClassName("list");				
	var inputall = document.getElementById("select-all");
	outermost:
	for (var i = 0; i < all.length; i++) {
		if (all[i].type == "checkbox") {
			if (all[i].checked==false) {
				inputall.checked =false;
				break outermost;
			}
		inputall.checked = true;	
		}
	}
}



function changeStyle(liChecked){
	liChecked.parentNode.childNodes[1].style.textDecoration = "line-through";
	liChecked.parentNode.childNodes[1].style.color = '#d9d9d9';
	liChecked.parentNode.className = "havedone";
}
// 选中的样式
function styleChange(liUnchecked){
	liUnchecked.parentNode.childNodes[1].style.textDecoration = "none";
	liUnchecked.parentNode.childNodes[1].style.color = 'gray';
	liUnchecked.parentNode.classList.remove("havedone");		
}
// 消选中的样式



function selectAll(event){	
	var all = document.getElementsByClassName("list");
	if (event.target.checked){
		for (var i = 0; i < all.length; i++) {
		  	if (all[i].type =="checkbox") {
		  		all[i].checked=true;
		  		changeStyle(all[i]);
		  	}
		  }  
	// 全选	  
	} else {
		for (var i = 0; i < all.length; i++) {
		  	if (all[i].type =="checkbox") {
		  		all[i].checked=false;
		  		styleChange(all[i]);
		  	}
		  }		
	}

}


