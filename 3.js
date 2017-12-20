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