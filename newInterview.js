// const Parent=document.getElementById("parent");
// const Child=document.getElementById('child')

// Parent.addEventListener('click',(e)=>{
//     console.log("parent clicked")
// },true)

// Child.addEventListener('click',(e)=>{
    
//     console.log("child clicked")
// },true)

// Flatten nested array
// function flattenArray(arr){
//     let final=arr.flat(Infinity)
//     return final
// }

// const arr=[1,[2,3],[3,[6,8]]];
// console.log(flattenArray(arr))

// Find the second largest array

// let arr=[1,4,65,76,7,45,6,110,78,7,4,1,56]

// let removeduplicate=new Set(arr);
// console.log(removeduplicate)
// let sortedArray=[...removeduplicate].sort((a,b)=>b-a);
// console.log(sortedArray[1])

// let num=13;
// function isPrime(num){
//     if(num<=1)return false;
    
//     for(let i=2;i<num;i++){
//         if(num%i===0){
//             return false;
//         }
//         else{
//             return true;
//         }
//     }


// }

// console.log(isPrime(num))

// fibonacci series- 0,1,1,2,3,5,8

// function fibonacci(n){
//        const series=[0,1];
//        for(let i=2;i<n;i++){
//         series.push(series[i-1]+series[i-2])
//        }
//        return series
// }
// console.log(fibonacci(7))

// Write custom map function
// let arr=[1,2,3,4,5,6,7,8];
// function customMap(arr,callBack){
//     let mapfun=[];
//    arr.forEach((element,index,array)=>{
//     mapfun.push(callBack(element,index,array))
//    })
//    return mapfun;
// }

// let result=customMap(arr,function(num){

//     return num*2
// })
// console.log(result)

// Write custom reduce method

// let arr=[1,2,3,4,5,6,7,8,9,10];
// function customFilter(arr,callBack){
//     let filteredArray=[]
//     arr.forEach((element,Index,array)=>{
//         if(callBack(element,Index,array)){
//            filteredArray.push(element)
//         }
//     })
//         return filteredArray;

    
// }

// let result=customFilter(arr,(element)=>{
//     return element%2===0
// }
// )

// console.log(result)

// custom reduce method


// function customReduce(arr,callback,initialvalue){
//  let accumulator=initialvalue;
//     for(let i=0;i<arr.length;i++){
//       accumulator=callback(accumulator,arr[i],i,arr)
//     }
//     return accumulator;
// }

// let result=customReduce([1,2,3,4,5,8],(acc,curr)=>{
//     return acc+curr;
// },0)
// console.log(result)

//debounce function
// const input=document.getElementById('input');

// let debounce=(func,wait)=>{
//   let timerID;
//     return (e)=>{
//     clearTimeout(timerID)
//      timerID= setTimeout(()=>func(e),wait)
      
//     }
// }
// const callAPI=(e)=>{
//   console.log(e.target.value)
// }

// let debouncefunction=debounce(callAPI,400)
// console.log(debouncefunction)
// input.addEventListener('input',debouncefunction())