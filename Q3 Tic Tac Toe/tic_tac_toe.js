/** Forming The part for input the value in table
 * For in this case are X & O
 */
let Symbol = "X";
let Ended = false

let winPos = [
  [1, 2, 3], [4, 5, 6], 
  [7, 8, 9], [1, 4, 7], 
  [2, 5, 8], [3, 6, 9], 
  [1, 5, 9], [3, 5, 7]
];

for (let i = 1; i <= 9; i++) {
  document.getElementById(i.toString()).addEventListener(
    "click", 
    function() {
      if (this.innerHTML === "" && !Ended) {
        this.innerHTML = Symbol;
        this.classList.add(Symbol.toLowerCase());
        
        /**check of the winner */
        checkWin();
        
        /**swap of x to o */
        if (Symbol === "X")
          Symbol = "O"
        else
          Symbol = "X"
      }
    }
  );
}

function checkWin() {
  for (let i = 0; i < winPos.length; i++) {
	if (
	  document.getElementById(winPos[i][0]).innerHTML === Symbol &&
	  document.getElementById(winPos[i][1]).innerHTML === Symbol &&
	  document.getElementById(winPos[i][2]).innerHTML === Symbol
	) {
	  document.getElementById(winPos[i][0]).classList.add("win");
	  document.getElementById(winPos[i][1]).classList.add("win");
	  document.getElementById(winPos[i][2]).classList.add("win"); 
	  Ended = true;
	  setTimeout(function() {
	    alert(Symbol + " wins!");
	  }, 500);
	}
  }
}

document.getElementById("restart").addEventListener(
  "click", 
  function() {
    for (let i = 1; i <= 9; i++) {
      document.getElementById(i.toString()).innerHTML = "";
      document.getElementById(i.toString()).classList.remove("x");
      document.getElementById(i.toString()).classList.remove("o");
      document.getElementById(i.toString()).classList.remove("win");
      Ended = false;
    }
  }
);