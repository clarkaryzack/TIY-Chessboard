var A8 = document.getElementById("A8");
var H1 = document.getElementById("H1");
var playpause = document.getElementById("playpause")

var bb = document.createElement("img");
bb.id = "bb";
bb.src = "chesspieces/bb.png";

(function blackbishop() {
	A8.appendChild(bb);
})();

function movepiece(piece,tospace) {
	tospace.appendChild(piece);
}

playpause.addEventListener("click", function() {
	movepiece(bb,H1)
});

// playpause.onClick(movepiece(bb,H1));
