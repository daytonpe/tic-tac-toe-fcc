var boxVals = ['O', 'O', 'X', 
							'O', 'O', 'X', 
							'X', 'X', ''];

var wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

var playerTeam = 'X';
var computerTeam = 'O';

function oppositeCorner(){

	if(boxVals[0]==playerTeam){
		return 8;
	} else if(boxVals[2]==playerTeam){
		return 6;
	} else if(boxVals[6]==playerTeam){
		return 2;
	} else if(boxVals[8]==playerTeam){
		return 0;
	} else return -1;
}

console.log(oppositeCorner(boxVals))