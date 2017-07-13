var boxVals = ['X', '', '', 
							'', 'O', '', 
							'', '', 'X'];

var wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

var playerTeam = 'X';
var computerTeam = 'O';

// if you (team) play this index, is it a fork for you? true/false
function isFork(index, team){

	var forkArr = [];
	var singleWinForkArr = [];

	//look at each of the nine boxes
	for (var i in boxVals){
		
		//if the box has something in it, move on to next one
		if (boxVals[i] != ''){
			continue;
		}
		
		var opponent;
		if (team=='X'){
			opponent='O';
		} else opponent = 'X';

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

				//BLOCK FORK: make sure no parts of path have computer team in it.
				if (winPathChars.includes(opponent)){
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
					forkArr.push(i);
				}
				// console.log(wins[j]+' '+winPathChars+' win count now at: '+winCount);
			}
		}
		// if (winCount==1){
		// 	singleWinForkArr.push(i);
		// }
	}

	// var arr = forkArr.concat(singleWinForkArr);
	// console.log(singleWinForkArr);
	// console.log(forkArr);

	// for (var x in arr){
	// 	if (arr[x])
	// }

	// console.log(index);
	if (forkArr.includes(index.toString())){
		return true;
	}else return false;
}

// if team plays index, where will the other team be forced to play?
function forcedMove(index, team){
	var opponent;
	if (team=='X'){
		opponent='O';
	} else opponent = 'X';

	//can't just set equal cuz it messes with global variable
	var boxValsCopy = [];
	for (var q in boxVals){
		boxValsCopy.push(boxVals[q]);
	}
	boxValsCopy[index]=team;

	// find all the paths that contain the index
	var pathList = [];
	for(var i in wins){
		if (wins[i].includes(parseInt(index))){
			pathList.push(wins[i]);
		}
	}


	var arr = [];
	for (var j in pathList){
		// console.log(pathList[j]);

		var oppoCounter = 0;
		var teamCounter = 0;
		var openSpot;
		for (var k in pathList[j]){
			if (boxValsCopy[pathList[j][k]]==opponent){
				oppoCounter++;
			}
			if (boxValsCopy[pathList[j][k]]==team){
				teamCounter++;
			}
			if(boxValsCopy[pathList[j][k]]==''){
				openSpot=pathList[j][k];
			}
		}
		if (oppoCounter==0 && teamCounter==2){
			arr.push(openSpot);
		}


	}
	if (arr.length>1){
		return arr;
	} else if (arr.length==1){
		return arr[0];
	} else return -1;
}

//if I (computer team) plays 2, will it create a fork for person?
//if so, move to next one
console.log(isFork(forcedMove(7, computerTeam),playerTeam));


