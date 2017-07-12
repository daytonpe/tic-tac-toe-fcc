var boxVals = ['O', 'X', 'X', 
							'', '', '', 
							'', 'O', ''];

var wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

var playerTeam = 'X';
var computerTeam = 'O';

function fork(){

	//look at each of the nine boxes
	for (var i in boxVals){
		
		//if the box has something in it, move on to next one
		if (boxVals[i] != ''){
			continue;
		}
		console.log('CHECKING: ' +i)
		var winCount; //if I mark this box, how many winning paths can i set up? (either 0, 1, 2, or 3)

		//Plan from here on:
		//loop through all win possibilities that contain the current box.
		//if it contains this box + 1 blank + 1 computerTeam, increment winCount
		//if winCount for this box >2 (i.e. a fork) return that box for move

		//Loop through win possibilities
		for (var j = 0; j<wins.length; j++){

			//if the win possibility contains the box we are checking, we see if it's a possible fork path
			if (wins[j].includes(parseInt(i))){

				//loop through the indexes in the win path
				for (var k in wins[j]){

					//make sure no parts of path have player team in it.
					if (boxVals[k]==playerTeam){
						continue;
					}

					//make sure it only has one of computer team (our) markings in row
					if (wins[j].indexOf(computerTeam) == wins[j].lastIndexOf(computerTeam)){
						console.log(wins[j]+ ' is a fork path via '+i);
						console.log(wins[j].indexOf(computerTeam));
						winCount++;
					}
				}
			}
		}
	}


	return -1;
}

console.log(fork())