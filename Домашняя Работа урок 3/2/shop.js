var sum = 0;
var arr = [
	['Футболка', 900, 1],
	['Джинсы', 3500, 1],
]
for(var i = 0; i < arr.length; i++) {
	for(var j = 0; j < arr.length; j++) {	
		sum = (arr[i][1] * arr[i][2]) + (arr[j][1] * arr[j][2]);
	}
}

alert(sum);
