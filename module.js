console.log(comparing(processData("1\n3\n1 2 3"), 'NO'));
console.log(comparing(processData("1\n5\n0 0 0 0 1"), 'YES'));
console.log(comparing(processData("1\n4\n1 2 3 3"), 'YES'));
console.log(comparing(processData("1\n4\n0 0 0 0"), 'YES'))
console.log(comparing(processData("1\n4\n0 0 0 1"), 'YES'));
console.log(comparing(processData("1\n4\n1 0 0 1"), 'YES'));
console.log(comparing(processData("1\n4\n0 0 1 1"), 'NO'));
console.log(comparing(processData("1\n4\n0 0 0 1"), 'YES'));
console.log(comparing(processData("1\n2\n0 1"), 'YES'));
console.log(comparing(processData("1\n2\n0 0"), 'YES'));
console.log(comparing(processData("1\n2\n2 1"), 'NO'));
console.log(comparing(processData("1\n4\n9 7 8 1"), 'YES'));
console.log(comparing(processData("1\n11\n5 5 5 5 5 5 5 5 5 5 5"), 'YES'));
console.log(comparing(processData("1\n11\n1 1 0 0 0 0 0 0 0 1 1"), 'YES'));
console.log(comparing(processData("1\n1\n1"), 'YES'));

function processData(input) {

  let t = Number.parseInt(input.split('\n')[0], 10);
  let result = [];

  for(var i = 1; i <= t*2; i+=2)
  {

    let n =  Number.parseInt(input.split('\n')[i].split(' ')[0]);
    if (n == 1) {
      result.push('YES'); continue;
    }
    let a =  input.split('\n')[i+1].split(' ');

    let sum = 0;
    for(var j = 0; j < n; j++)
      sum += +a[j];

    let sumL = +a[0];
    let sumR = sum - sumL;
    let res = 'NO';

    for(var j = 1; j <= n; j++) {
      if(sumL == sumR - +a[j]) { 
        res = 'YES'; 
        break; 
      }
      else {
        sumL += +a[j];
        sumR -= +a[j];
      }

    }
    result.push(res);
    // console.log('-----------');
   }
  return (result.join('\n'));

}

function comparing(a,b) {
  if (a===b) return true;
  return false;
}