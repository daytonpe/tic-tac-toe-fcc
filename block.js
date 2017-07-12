var boxVals = ['O', 'X', 'X', 
							'', '', '', 
							'', '', ''];

var wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

var playerTeam = 'X';
var computerTeam = 'O';

function block(){

	for (var a = 0; a<wins.length; a++){
	
		var canWin = true;

		// row needs two of computer team characters and the third to be open
		var inRow = 0;

		// is the other teams char taken by one of the numbers in the win?
		for (var b = 0; b<3; b++){

			var activeBox = wins[a][b];

			if (boxVals[activeBox] == playerTeam){
				inRow++;
			}

			if (boxVals[activeBox] == computerTeam){
				canWin = false;
				// console.log('canWin now false')
			}

		}

		// if there is a a place to win, return the board index of the move
		if (canWin && inRow == 2){
			for (var c = 0; c<3; c++){
				if(boxVals[wins[a][c]]==''){
					// console.log([wins[a][c]]);
					return wins[a][c];
				}
			}
		}

	}

	return -1;
}

console.log(block())