
var str = "3\n3 9\n17 24\n25 100";
console.log(str);
processData(str);

function processData(input) {

  let t = Number.parseInt(input.split('\n')[0], 10);
  let result = [];

  for (var i = 1; i <= t; i++) {
    let k = 0;
    let a = Number.parseInt(input.split('\n')[i].split(' ')[0]);
    let b = Number.parseInt(input.split('\n')[i].split(' ')[1]);

    console.log(`${a}=` + Math.ceil((Math.sqrt(a))));
    console.log(`${b}=` + Math.floor((Math.sqrt(b))));
    if (Math.sqrt(a) % 1 === 0) { k++; }
    if (Math.sqrt(b) % 1 === 0 && Math.sqrt(a) !== Math.sqrt(b)) { k++; }
    let r = Math.floor((Math.sqrt(b))) - Math.floor((Math.sqrt(a))) + k;
    if (r < 0) r = 0;
    result.push(r);

  }
  console.log(result.join('\n'));

}
