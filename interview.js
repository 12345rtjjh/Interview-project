// Hoist



// var func=()=>{
//     console.log("ehllp")
// }
// func()

// truty and fasle
// if(null){
//     console.log("hello")
// }

// arrow function
// name="Sahil"
// const obj = {
//     name: "John",
//     regularFunc: function() {
//          console.log(this.name); // 'John' - 'this' refers to obj
         
         
//     },
//     arrowFunc: () => {
//         console.log(this.name); // undefined - 'this' refers to outer scope
    
//     }
// };
// obj.regularFunc();
// obj.arrowFunc();

// higher Order function
// function higherOrder(func) {
//     return function(x) {
//         return func(x) * 2;
//     };
// }

// // Function that returns a function
// function multiplier(factor) {
//     return function(x) {
//         return x * factor;
//     };
// }
// console.log(multiplier(2)(9))

// const double = multiplier(2);
// console.log(double(5)); // 10

// Array methods are higher-order functions
// [1, 2, 3].map(x => x * 2); // [2, 4, 6]

// Pure function
// function add(a, b) {
//     return a + b; // No side effects, deterministic
// }

// // Impure function
// let counter = 0;
// function increment() {
//     counter++; // Side effect: modifies external state
//     return counter;
// }

// // Impure function
// function getRandom() {
//     return Math.trunc(10000*Math.random()); // Different output for same input
// }
// console.log(add(1,2))
// console.log(increment())
// console.log(increment())
// console.log(getRandom())

// closure

// function outer(){
//     var count=0;

//     return function Inner(){
//         count++;
//         return count;
//     }
// }

// let as=outer();
// console.log(as());
// console.log(as())

// function openAccount(amount){
//     let balance=amount;
//     return {
//         getbalance:function(){
//             return balance;
//         },
//         addAmount:function(add){
//             balance+=add
//             return balance;
//         },
//         withdraw:function(amounttowithdraw){
//             balance-=amounttowithdraw;
//             return balance;
//         }
//     }
// }
// console.log(openAccount(1000).addAmount(500))
// console.log(withdraw(500))
// console.log('05'==5)
// console.log(null === undefined)

// console.log(typeof(false))

// console.log(abc);
// console.log(xyz)
// var abc=100;
// let xyz=200;

// function parent(){
//     const a=2;
//     const b=5;
//     return function(){
//         return a+b;
//     }
// }
// let arr=parent();
// console.log(arr())
// console.log(arr())

// function abc(...b){
//     console.log(b[0]);

// }
// abc(1,2,3,4,5,6,7)
// 
// arr=[1,2,3,4,5,6];
// console.log(arr.find((e)=>e%2==0))

// function merge(str1,str2){
//     let mergedString='';
//     let str3=String(str1);
//     let str4=String(str2)
//     const mergedlength=Math.max(str3.length,str4.length);
//     for(let i=0;i<mergedlength;i++){
//         if(i<str3.length){
//             mergedString+=str3[i]
//         }
//         if(i<str4.length){
//             mergedString+=str4[i]
//         }
//     }
//     return mergedString
// }
// const finalString=merge(1003357570,"nitinn");
// console.log(finalString)
// let name="nitin"
// const student={
//     name:"Sahil",
//     age:34,
//     printDetail:()=>{
//         console.log(this)
//     }
// }
// student.printDetail()

// let a=100;
// let z=a++;
// console.log(a)

// let str="My name is Sahil";
// function reversed(str){
//     let newstr=str.split("");
//     let result=[]
//     for(let i=1;i<str.length+1;i++){
//          result=result+newstr[str.length-i]
//     }
//     console.log(result)
// }

// reversed(str)

// let arr=[1,10,18,14,6];
// function abc(b,...a){
//     console.log(a)
// }
// abc(8,9,10,11,12)
// const arr=["a",1,"b",2,"c",3]
// let chararr=[];
// let Numarr=[]
// for(let i=0;i<arr.length;i++){
//      if(typeof arr[i]==="string")
//         chararr+=arr[i];
//     if(typeof arr[i]==="number")
//     {
//         Numarr+=arr[i]
//     }
// }
// console.log(Numarr,chararr)

// let num1=11;
// let num2=6;
// // num1=num1+num2;
// // num2=num1-num2;
// // num1=num1-num2;
// // console.log(num1,num2)
// [num1,num2]=[num2,num1];
// console.log(num1,num2)
// let arr1=[1,2,3,4,5];
// let arr2=[4,5,8,1,9]
// let result=[];
// let maxlenth=Math.max(arr1.length,arr2.length);
// for(let i=0;i<maxlenth;i++){
//     for(let j=0;j<maxlenth;j++){
//        if(arr1[i]===arr2[j])
//        {
//         result.push(arr1[i])
//        }
//     }
// }
// console.log(result)
// const arr=[1,2,3,4,5]
// const newarr= arr.reduce((acc,curr)=>{
//      return acc*curr;
// })
// console.log(newarr)

// const newQnimal=Animal.slice(1,4)
// console.log(newQnimal)
// console.log(Animal)

// const Animal=["cat","dag","elephant","cow","lion"]

// const newQnimal=Animal.splice(1,2,"dog","Rat")
// console.log(newQnimal)
// console.log(Animal)
// console.log("2"-"2")
// console.log("2"+2)
// console.log(2-"2"-1)
// console.log("sahil"-"khan")
// const str="sahil khan"
// let newStr="";
// for(let i=str.length-1;i>=0;i--){
//         newStr+=str[i];
// }
// console.log(str)
// console.log(newStr)
// let num1=30;
// let num2=40;
// [nu2,nu1]=[num1,num2]
// console.log(nu1,nu2)
// for(let i=0;i<3;i++){
    
// }

let arr=[2,3,1,5,4];
function sorted(arr){
    let temp=0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i;j++){
            if(arr[j]>arr[j+1]){
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }

}
sorted(arr);
console.log(arr)




