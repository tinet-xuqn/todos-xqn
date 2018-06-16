function Todo(title, checked) {
	this.title = title;
	this.checked = checked;
}

function todos(){
	var checked = document.getElementById("select-all").checked;
	localStorage.setItem("check", checked);
}