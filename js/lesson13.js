id = setInterval(my_func,1000);

let counter = 0;
function my_func() {
  counter++;
  console.log(counter);
  if (counter>2) {
    clearInterval(id);
  }
}

// or
// let counter = 0;
// setInterval(function() {
//   counter++;
//   console.log(counter);
// },1000);

setTimeout(function () {
  console.log('Timer is stoped')
},3000);
