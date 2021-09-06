alert('You are beautiful!');
var data = confirm('You agree?');
if(data){
  alert('Attaboy!');
}else {
  alert('Badly');
}

var age = prompt("How old are you?",20);

console.log(age);

var person=null;
if(confirm('Are you sure?')) {
  person = prompt('What is your name?');
  alert('Hello '+ person);
} else {
  alert('This is the is wrong answer');
}
