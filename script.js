var i = 0;

function duplicate() {
	i = i+1;
	console.log(i);
	var original = document.getElementById("question0");
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = "question0" + i;
    for(b = 0; b > 5; b++){
    	clone.children[b].id = original.children.id[b].val() + i;
    }
    // or clone.id = ""; if the divs don't need an ID
    original.appendChild(clone);
}

function startGame(){
	for(a = 0; a < i; a++){
		var questionString = document.getElementById("question"+a);
		console.log(questionString);
	}
}