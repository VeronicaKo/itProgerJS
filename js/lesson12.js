let text = document.getElementById('text');
text.style.color= 'violet';
text.innerHTML= 'How color <br>do you <br>want?';

let spans =document.getElementsByTagName('span');
let cl = 918526;
for (var i = 0; i < spans.length; i++) {
  spans[i].style.color = "#" + cl;
  cl = cl/2;
}

let spans1 = document.getElementsByClassName('simple-text');
for (var i = 0; i < spans1.length; i++) {
  console.log(spans1[i].innerHTML);
}

function checkForm(el) {
  // let name  = document.getElementById('name').value;
  
  let name = el.name.value;
  let pass = el.pass.value;
  let repass = el.repass.value;
  let state = el.state.value;
  let fail='';
  if (name=='' || pass=='' || repass=='' || state=='' ) {
    fail = 'Fill in all the fields ';
  } else if (name.lenght < 2 || name.lenght > 50){
    fail = 'name is wrong';
  } else if (pass!=repass) {
    fail ='passwords is different';
  } else if (pass.split('&').lenght>1) {
    fail ='password is wrong';
  }
if (fail!='') {
  document.getElementById('error').innerHTML=fail;
  return false;
}else {
  window.location ='https://www.duolingo.com/learn';
  return false;
  // return true;
}

}

document.getElementById('main-form').addEventListener('submit',checkForm);
