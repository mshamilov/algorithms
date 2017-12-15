// 5 2 1

// 2 + 1 - 1 = 2 - 5 

// 0

// 20 800 1 = 
// 20 40 1 = 20
// 20 40 2 = 1

// 34 - 

// ---------------
// 17 5 15

// 15 + 5 - 1 = 19 > 17

// 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 

var str = "1 \n20 805 1";
console.log(str);
processData(str);

function processData(input) {
    //Enter your code here
    var data = input.split('\n');
    var result = [];
    // console.log(data[0])
    for (var i = 1; i <= data[0]; i++) {
    	var n = data[i].split(' ')[0];
    	var m = data[i].split(' ')[1];
    	var s = data[i].split(' ')[2];

    	result[i-1] = (+m) + (+s) - 1;
    	if (result[i-1] > n) 
    		    	console.log((result[i-1] ) / n);
    		result[i-1] = result[i-1] - (Math.ceil(result[i-1]/n) - 1) * n;

    }
    console.log((result).join('\n'));
}