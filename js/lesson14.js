let date=new Date();

console.log(date.getFullYear()+'/'+(date.getMonth()+1) +'/'+date.getDate() + ' '+date.getHours() +':'+date.getMinutes()+':'+date.getSeconds());

let arr=[10,2,8,9,5];
function compareNum(a, b) {
    return a-b;  }
arr=arr.sort(compareNum);
console.log(arr.join("|"));
console.log(arr.reverse());
console.log(arr.join(",").split(','));

class Person {
  constructor(name,age,work) {
    this.name = name;
    this.age = age;
    this.work = work;
  }
  info(){
    console.log('human: '+this.name+' Age: '+this.age+' Job: '+this.work);
  }
}

let alex = new Person('alex',45,false);
let kate = new Person('kate',44,true);
console.log(alex.age +' in love with ' + kate.age);
alex.info();
