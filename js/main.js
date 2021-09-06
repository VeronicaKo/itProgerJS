console.log("Melon is a yellow fruit");
console.info("Watermelon is a green fruit");
console.error("Orange is a not orange fruit");
console.warn("Plum is a violet fruit");

var num = 5;
num+=7;
const fry = (60.8*3-8)/4;
if (fry>num && true)  {
  console.log(new Intl.NumberFormat().format(fry));
  console.log(fry.toFixed(2));
} else if (fry<num || true) {
  console.log(Math.min(fry, num));
} else {
  console.log(Math.PI);
}

var stroka = 'word';
switch (stroka) {
  case '6':
    console.log('6');
    break;
  case '45':
    console.log('45');
    break;
  case 'word':
    console.log('word');
    break;
  default:
    console.log('No');
}

var arr =[5,10,5,13,true,'home',-10];
console.log(arr[0]+arr.length);

var matrix = [[4,5,8],[true,'home'],[-10,'love']]
matrix[2][0]+=1;
console.log(matrix);

rul='';
for (var i = 0; i < arr.length; i++) { rul = rul + arr[i]; }
console.log('rul '+rul);

for (var i = 100; i >5; i/=3) { console.log(i.toFixed(2));}

jack=0;
while (jack<10) {
  jack+=3;
  console.log(jack);
}

var is=true;
while (is) {
  is=false;
}

var x=777;
do {
  console.log(x);
} while (x<50);

for (var i = 110; i < 210; i+=20) {
  if (i>160) {
    break;
  }
  if (i%3==0) {
    continue;
  }
  console.log(i);
}

for (var i = 0; i < 4; i++) {
  console.log('element '+ (i+1) +': ' + arr[i]);
}
