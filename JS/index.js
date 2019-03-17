// let a = 2;
// let b = "2";
// if (a === b) {
//   console.log("true"); //double = se value checking and triple se tt=ype checking
// } else {
//   console.log("False");
// }
// switch (a) {
//   case 3: {
//     console.log("true");
//     break;
//   } //if case not same than goes to default. act as elif. if 1st case not true it executes all below.
//   case 2:
//     {
//       console.log("baby sai hai");
//     }
//
//     break;
//   default: {
//     console.log("false");
//   }
// }
// function baby(name, age, status='pregnant') {
//   // class creating that act as a blueprint.
//   this.name = name;
//   this.age = age;
//   this.status = status;
// }
// let sd = new baby("janu", 99); //new creates instances. object making for default give value in the class making.
// console.log(sd);
// let h = new baby("Mei", 100,'Randwa');
// console.log(h);
// (set intervals)

// setInterval(() => {
//   console.log("Adil dadu");
// }, 100); //chalaata rhta hai ye functions.
// console.log('kalo');     //pehle kalu print, than bhangu than 9 s baad shail dadi.
// setTimeout(() => {
//   console.log("sahil dadi");
// }, 3000);
// console.log('bhangu');
// let vf = new Promise(function(res, reject) {
//   setTimeout(() => {
//     res("chick"); // google se get req gai, google ne promise kia k us ko jese he samaan mile ga wh bhejde ga
//   }, 590);
// });
// vf.then(chcha => {
//   console.log("chcha");
// });
function info(name,age,schoolname) {
  this.name=name
  this.age=age
  this.schoolname=schoolname
}
let sc = new info('sherry',20,'BSS')
let vf = new Promise(function(resolve, reject) {
  setTimeout(()=>{
    resolve('')
  },1000);
});
vf.then((dict)=>{
  console.log(sc);});
