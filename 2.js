// hackerhappy
// hackerrank
// 9
// -------
// YES

// aba
// aba
// 7
// ------
// YES

var str = "h\nh\n9";
console.log(str);
processData(str);

function processData(input) {

  let s = input.split('\n')[0].trim();
  let t = input.split('\n')[1].trim();
  let k = input.split('\n')[2];

  var startCount = s.length - 1;
  if(s == t) {console.log('Yes'); return;}

  for(var i = 0; i < s.length; i++)
  {
    if (s[i] != t[i]) { startCount = i; break;}
  }
  var del = s.length - startCount;
  var append = t.length - startCount;
  if (del + append > k) 
    console.log('No');
  else
    console.log('Yes');

}