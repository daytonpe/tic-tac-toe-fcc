var boxVals = ['O', '', '', 
							'', 'X', '', 
							'', '', 'X'];

var wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

var playerTeam = 'X';
var computerTeam = 'O';

function fork(team){

	//look at each of the nine boxes
	for (var i in boxVals){
		
		//if the box has something in it, move on to next one
		if (boxVals[i] != ''){
			continue;
		}
		// console.log('CHECKING: ' +i)
		var winCount=0; //if I mark this box, how many winning paths can i set up? (either 0, 1, 2, or 3)

		//Plan from here on:
		//loop through all win possibilities that contain the current box.
		//if it contains this box + 1 blank + 1 computerTeam, increment winCount
		//if winCount for this box >2 (i.e. a fork) return that box for move

		//Loop through win possibilities
		for (var j = 0; j<wins.length; j++){

			//if the win possibility contains the box we are checking, we see if it's a possible fork path
			if (wins[j].includes(parseInt(i))){


				//build a symbol array for the win path i.e. ['X', '', 'O']
				var winPathChars = [];
				for (var k in wins[j]){
					winPathChars.push(boxVals[wins[j][k]]);
				}

				//ensure winpath isn't empty
				function isEmpty(str) { return str == '';}
				if (winPathChars.every(isEmpty)){
					continue;
				}


				//MAKE FORK: make sure no parts of path have player team in it.
				//BLOCK FORK: make sure no parts of path have computer team in it.
				if (winPathChars.includes(team)){
					continue;
				}
				
				//make sure there are two blank spaces in winpath
				if (winPathChars.indexOf('') == winPathChars.lastIndexOf('')){ //if only one ''
					continue;
				}

				//if it passes all the tests, then it is a valid fork option and we increment
				winCount++;

				//if wincount get's to 2, we play there
				if (winCount==2){
					return i;
				}
				// console.log(wins[j]+' '+winPathChars+' win count now at: '+winCount);
			}
		}
	}
	return -1;
}

console.log(fork(computerTeam));