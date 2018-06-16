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

			createFooter();
			function createFooter(){
				var footer = document.createElement("footer");
				div.appendChild(footer);

				var divCount = document.createElement("div");
				divCount.className = "count";
				footer.appendChild(divCount);

				var strong = document.createElement("strong");
				divCount.appendChild(strong);
				var textNode1 = document.createTextNode("1");
				strong.appendChild(textNode1);
				var textNode2 = document.createTextNode(" item left");
				divCount.appendChild(textNode2);

				var footUl = document.createElement("ul");
				footer.appendChild(footUl);

				var li1 = document.createElement("li");
				footUl.appendChild(li1);
				var a1 = document.createElement("a");
				a1.href = "#/";
				a1.innerText = "All";
				a1.onclick = allLi;
				li1.appendChild(a1);

 				var li2 = document.createElement("li");
				footUl.appendChild(li2);
				var a2 = document.createElement("a");
				a2.href = "#/active";
				a2.innerText = "Active";
				a2.onclick = activeList;
				li2.appendChild(a2);

				var li3 = document.createElement("li");
				footUl.appendChild(li3);
				var a3 = document.createElement("a");
				a3.href = "#/completed";			
				a3.innerText = "Completed";
				a3.onclick = completedList;
				li3.appendChild(a3);

				var clearButton = document.createElement("button");
				clearButton.innerText = "Clear completed";
				clearButton.onclick = clearAllCompleted;
				footer.appendChild(clearButton);

			}


 		} else {
 			ul = document.querySelector(".todo-list");
 		}
 		creatLi();
 		itemsLeft();

 		function creatLi(){
			var li = document.createElement("li");
			li.className = "needdo";
			ul.appendChild(li);

			var myDiv = document.createElement("div");
			li.appendChild(myDiv);

			var inputEdit = document .createElement("input");
			inputEdit.type = "text";
			inputEdit.className = "edit";
			inputEdit.onkeydown = reWrited;
			inputEdit.onblur = reWrited;
			li.appendChild(inputEdit);


			var input = document .createElement("input");
			input.type = "checkbox";
			input.className = "list";
			input.onclick = checkedlist;
			myDiv.appendChild(input);

			var label = document.createElement("label");
			label.ondblclick = reWrite;
			myDiv.appendChild(label);

			var button = document.createElement("button");
			button.className = "destroy";
			button.onclick = deleteItem;
			myDiv.appendChild(button);
			label.innerText = inputtext.value;
			inputEdit.value = inputtext.value;


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
	// 删除一个
	var delItem = event.target.parentNode.parentNode;
	delItem.parentNode.removeChild(delItem);
	list = list -1;
	if (list==0) {
		var divTodos = document.getElementById("todos");
		divTodos.removeChild(divTodos.lastChild);
		divTodos.removeChild(divTodos.lastChild);
	}else {
		checkIputAll();

	}

}


function checkedlist(event){
	// 改变选中的样式
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
	itemsLeft();
}



function changeStyle(liChecked){
	liChecked.parentNode.parentNode.classList.remove("needdo");
	liChecked.parentNode.parentNode.className = "havedone";
}
// 选中的样式
function styleChange(liUnchecked){
	liUnchecked.parentNode.parentNode.classList.remove("havedone");
	liUnchecked.parentNode.parentNode.className = "needdo";
		
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
	itemsLeft();

}
function reWrite(event){
	var reWriteLi = event.target.parentNode.parentNode;
	reWriteLi.childNodes[0].style.display = 'none';
	reWriteLi.childNodes[1].style.display = 'block';
	reWriteLi.childNodes[1].focus();
}
// 重写

function reWrited(event){
	var label = event.target.parentNode.childNodes[0].childNodes[1];
	var reWriteLi=event.target.parentNode;
	if (event.type == "blur") {
		change(reWriteLi);
	}
	else if (event.type == "keydown"&&(event.keyCode==13)) {
		change(reWriteLi);
	}
	function change(thing){
		label.innerText = event.target.value;
		thing.childNodes[0].style.display = 'block';
		thing.childNodes[1].style.display = 'none';
	}
}
// 重写完成，回车

function clearAllCompleted(event){
	var all = document.getElementsByClassName("list");				
	for (var i = all.length-1; i >=0; i--) {
		// 从末尾遍历
		if (all[i].type == "checkbox") {
			if (all[i].checked) {
				var del = all[i].parentNode.parentNode;
				del.parentNode.removeChild(del);
				list = list - 1;
			}
		}
	}
	if (list==0) {
		var divTodos = document.getElementById("todos");
		divTodos.removeChild(divTodos.lastChild);
		divTodos.removeChild(divTodos.lastChild);
	}
}
function itemsLeft(){
	var all = document.getElementsByClassName("list"),
		strong = document.querySelector("strong"),
	 	num = 0,
		div = document.querySelector(".count"),
		textNode = div.lastChild;
	for (var i = 0; i < all.length; i++) {
		if (all[i].type == "checkbox") {
			if (all[i].checked==false) {
				num = num +1;
			}
		}
	}
	if (num>1) {
		textNode.nodeValue = " items left";
	}else if (num ==1) {
		textNode.nodeValue = " item left";

	}				
	strong.innerText = String(num);
}
function checkUpCss(styleText){
	var head = document.getElementsByTagName("head")[0],
		len = head.childNodes.length;
		if (len==4) {
			head.removeChild(head.lastChild);
		}

	var style = document.createElement("style");
	style.type = "text/css";
	style.appendChild(document.createTextNode(styleText));
	var head = document.getElementsByTagName("head")[0];
	head.appendChild(style);
	
}
function allLi(){
	checkUpCss(".havedone{display:list-item;}.needdo{display:list-item}");
}

function activeList(){
	checkUpCss(".havedone{display:none;}.needdo{display:list-item}");
}
function completedList(){
	checkUpCss(".needdo{display:none;}.havedone{display:list-item}");
}