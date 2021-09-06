function info(text) {
  console.log('result ' + text);
}

function summa(a,b) {
  var res =a+b;
  info(res);
}
summa(5,7);

function sumo (arr) {
  var sum =0;
  for (var i = 0; i < array.length; i++) {
    sum+=array[i];
  }
  console.log(sum);
}
var array =[7,9,12,7,331,7,96,1,-50]
sumo(array);

function loon() {
  lo= 9856;
  return lo;
}
var res = loon();

var nume = 10;
function infok(){
  var nume =20;
  console.log(nume);
}
infok();
console.log(nume);

//lesson 11
var counter=0;
function onClickButton(but) {
  var selectedBGColor = document.getElementById("bgchoice").value;
  document.body.style.backgroundColor = selectedBGColor;
  but.style.backgroundColor = 'orange';
  but.color = 'lime';
  // but.style.cssText = 'border-radius: 5px; border:0;'
  counter++;
  but.innerHTML = 'You click ' + counter +' times';
  console.log(but.name);

  // var BackgroundColor="PINK";
  // document.body.style.backgroundColor=BackgroundColor;
  // alert('You did it!');
}

function changeBG() {}

function onInput(el) {
  if (el.value=='hello') {
    alert("Hello you too");
  }
  console.log(el.value);
}
