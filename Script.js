// // let arr=["vedant",10,300,"lite","c","300"];
// // let str=[];
// // let number=[];
// // let character=[];

// // arr.forEach(element => {
// //     if(typeof(element)=='number'){
// //         number.push(element);
// //     }
// //     if(typeof(element)=='string'){
// //         if(element.length>1){
// //         str.push(element)
// //         }else{
// //             character.push(element)
// //         }

// //     }
// // });

// // console.log(str);
// // console.log(number);
// // console.log(character);

// // let arr1=['vedant','dant'];

// // function check(str1,str2){
// //     for(let i=0;i < str2.length; i++){
// //     if(!str1.includes(str2[i])){
// //         return false;
// //     }
// //     }
// //     return true;
// // }
// // if(check(arr1[0],arr1[1])){
// //     console.log("yes");
// // }
// // else{
// //     console.log("No");
// // }

// // console.log('vedant' - 1000);
// //closures
// // const a=4;
// // const b=7;

// // function add(){
// //     console.log(a+b);
// // }
// // console.dir(add)

// const student={
//     name:"Sahil",
//     age:34,
//     printDetail:function(state){
//          console.log(this.name+" "+this.age)
//     }
    
// }
// const student1={
//     name:"Rahul",
//     age:45
// }

// const detail=student.printDetail.bind(student1)
// detail()
// for(let i=0;i<3;i++){
//     setTimeout(() => {
//         console.log(i)
//     }, 1000);
    
// }

// function outer(){
//     count=0;
//     return function inner(){
//       count++;
//       console.log(count)
//     }
    
    
// }
// let outerfun=outer();
// outerfun();
// let str="I am the superman of the real earth";
// let count=0;
// for(let i=0;i<str.length;i++){
//   if(str[i]==='a'|| str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u' ){
//     count++;
//   }
//   if(str[i]==='A'|| str[i]==='E' || str[i]==='I' || str[i]==='O' || str[i]==='U' ){
//     count++;
//   }

// }
// console.log(count)
// let num1=23;
// let num2=78;
// [num2,num1]=[num1,num2]
// console.log(num1,num2)

//factorial - 5*4*3*2*1=120
// let f=5;
// let total=1;
// function fact(f){
//   if(f===0){
//     return ;
//   }
//   total=f*total
//   fact(f-1);

// }
// fact(12)
// console.log(total)

//prime number

// function findPrime(num){
//    if(num<=1) return false;
//    if(num===2) return true;
//    let limit=Math.round(Math.sqrt(num))
//     console.log(limit)
//    for(let i=2;i<limit;i++){
//     if(num%i===0){
//       return false;
//     }
//     else{
//       return true;
//     }
//    }
// }
// const finalresult=findPrime(1477);
// console.log(finalresult)

// Find the sum of all elements in an array
// let arr=[1,2,45,45,34,65,36];
// const result=arr.reduce((acc,curr)=>{
//   return acc+curr;
// })
// console.log(result)

//Find the second largest number in array

// let arr=[1,2,45,45,34,65,36];

// let finalArray=[...arr].sort((a,b)=>a-b)
// console.log(finalArray[finalArray.length-2])
// console.log(arr)
// console.log(finalArray)
// let arr=[1,2,45,45,34,65,36];
// let firstArray=[];
// let secondArray=[]


// function sortedArray(arr){
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]<arr[i+1]){
//       firstArray.push(arr[i])
//     }
//     else{
//       secondArray.push(arr[i])
//     }
    
//   }
  
// let finalArray=[]

//   return finalArray=[...firstArray,...secondArray];
// }
// console.log(sortedArray(arr))
// find duplicate ffrom the array

// let arr=[1,2,43,53,34,43,53,87,45,1,65,75,85,675,45,45];
// function findDuplicate(arr){
//   let resultArray=[];
//   let sortedArray=[...arr].sort((a,b)=>a-b);
//   console.log(sortedArray)
//   for(let i=0;i<sortedArray.length;i++){
//     if(sortedArray[i]===sortedArray[i+1]){
//        resultArray.push(sortedArray[i])
//     }
//   }

//   return resultArray;
// }
// console.log(findDuplicate(arr))

// const arr1=[1,2,45,65,76];
// const arr2=[4,54,65,86]

// const finalArray=[...arr1,...arr2]
// console.log(finalArray)

// find intersection of array
// const arr1=[1,2,45,65,76];
// const arr2=[4,54,65,86]

// let intersection=arr1.filter((value)=>arr2.includes(value))
// console.log(intersection)

// remove falsy value in an array
// const arr=[1,2,3,4,"",{},[],null,undefined,3,46,43,false,"sahil"]
// const cleanedArray=arr.filter(Boolean)
// console.log(cleanedArray)
