window.onload = function(){
	console.log("ss");
	getTodos();
	localStorage.clear();
}

window.onbeforeunload = function(){
	console.log("sadass")
	todos();
}

function todos(){
	var classNames = new Array(),
	liValue = new Array();
	var listt = document.querySelectorAll("section ul li");
	for (var i = 0; i < listt.length; i++) {
		classNames[i]= listt[i].className;
		liValue[i] = listt[i].lastChild.value;

	}
	classNames.length = list.length;
	liValue.length = list.length;
	localStorage.setItem("class", JSON.stringify(classNames));
	localStorage.setItem("todoList", JSON.stringify(liValue));
	localStorage.setItem("listNum", JSON.stringify(list));
}

function getTodos(){
	var classNname = localStorage.getItem("class"),
		liVvalue = localStorage.getItem("todoList"),
		list = localStorage.getItem("listNum");
		classNname = JSON.parse(classNname);
		liVvalue = JSON.parse(liVvalue);
		list = JSON.parse(list);
	if (list>0) {

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

		for (var i = 0; i < classNname.length; i++) {

			var li = document.createElement("li");
			li.className = classNname[i];
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
			if (classNname[i]=="havedone") {
				input.checked = true;
			}
			input.onclick = checkedlist;
			myDiv.appendChild(input);

			var label = document.createElement("label");
			label.ondblclick = reWrite;
			myDiv.appendChild(label);

			var button = document.createElement("button");
			button.className = "destroy";
			button.onclick = deleteItem;
			myDiv.appendChild(button);

			label.innerText = liVvalue[i];
			inputEdit.value = liVvalue[i];
		}		
	}
}		
