// Reverse a string
// let str="I am sahil learinig web development"
// function reversed(str){
//     return str.split("").reverse().join('')
// }
// console.log(reversed(str))

// Check palindrome
// let str="madama";
// function isPalindrome(){
//     let newStr=str.split('').reverse().join('');
//     return str===newStr
// }
// console.log(isPalindrome(str))

// largest number in an array
// let arr=[2,3,4,35,344,45,7];
// function largestNumber(arr){
//    let newarr=arr.sort((a,b)=>a-b)
//    let setArray=new Set(newarr)
//    let finalArray=[...setArray]
   
//    return finalArray[finalArray.length-1]
// }
// console.log(largestNumber(arr))

// smallest number in an array
// let arr=[2,3,4,35,344,45,7];
// function largestNumber(arr){
//    let newarr=arr.sort((a,b)=>a-b)
//    let setArray=new Set(newarr)
//    let finalArray=[...setArray]
   
//    return finalArray[0]
// }
// console.log(largestNumber(arr))

// Remove duplicate from the array
// let arr=[2,45,6,3,4,5,6,7,3,2,65,7]
// function removeDuplicate(arr){
//     let arraySet=new Set(arr);
//     let finalArray=[...arraySet]
//     return finalArray;
// }
// console.log(removeDuplicate(arr))

//Count vowels in a string
// let str="I am sahil learinigA web development"
// let vowels='aeiouAEIOU';
// function countVowels(str,vowels){
//     let count=0;
//     for(let char of str){
//         if(vowels.includes(char)){
//             count++
//         }
//     }
//     return count
// }
// console.log(countVowels(str,vowels))

// Count Words in a sentence
// let str="I am sahil learinigA web development sahil"
// function countWords(str){
//     let strArray=str.split(" ");
//     return strArray.length;
// }
// console.log(countWords(str))

// Capitalize first letter of the String
// let str="development"
// function Capitalizefirst(str){
//     return str.charAt(0).toUpperCase()+str.slice(1)
// }
// console.log(Capitalizefirst(str))

//Check if prime number or not
// let number=25;
// function checkPalindrome(number){
//     if(number<=1) return false;
//     for(i=2;i<number;i++){
//         if(number%i===0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(checkPalindrome(number))

// sum of the array element using custom reduce
// let arr=[1,2,3,4,5,6,7,4,3,5,7,9,44];
// function sumofelement(arr){
//     result=customReduce(arr,(acc,curr)=>{
//         return acc+curr;
//     },0)
//     return result;
// }
// function customReduce(arr,callback,incitailvalue){
//     let accumulator=incitailvalue;
//     for(let i=0;i<arr.length;i++){
//         accumulator=callback(accumulator,arr[i])
//     }
//  return accumulator;
// }
// console.log(sumofelement(arr))

// find even number using customFilter
// function customFillter(arr,callback){
//     let newArray=[];
//     arr.forEach((element,Index,Arr)=>{
//         if(callback(element,Index,Arr)){
//             newArray.push(element)
//         }
//     })
//     return newArray;
// }
// let arr=[1,2,3,4,6,4,,7,8,45,44];
// function allEvenNumber(arr){
//     resultArray=customFillter(arr,x=>x%2===0)
//     return resultArray
// }
// console.log(allEvenNumber(arr))

// sort array using custom sort
// function customSort(arr){
//     let temp;
//     for(i=0;i<arr.length;i++){
//         for(j=0;j<arr.length-i;j++){
//            if(arr[j]>arr[j+1]){
//             temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//            }
//         }
//     }
//     return arr;
// }
// let arr=[1,2,4,3,2,50,0]
// console.log(customSort(arr))

// find the intersection of arr
// let arr1=[1,3,5,7,9]
// let arr2=[2,4,5,6,8,10]
// let mergedArray=[...arr1,...arr2].sort((a,b)=>a-b)
// for(let i=0;i<mergedArray.length;i++){
//     if(mergedArray[i]===mergedArray[i+1]){
//         console.log(mergedArray[i],i)
//     }
// }
// console.log(mergedArray)

// Flatten nested array
// let arr=[1,2,[2,56,6,[45,76],[3,4,5]]]
// function flattenNexted(arr){
//     return arr.flat(Infinity)
// }
// console.log(flattenNexted(arr))

// find missing value in array
// function findMissing(arr){
//     let n=arr.length+1;
    
//     let expectedSum=(n*(n+1))/2;
//     let actualSum=arr.reduce((acc,curr)=>{
//         return acc+curr
//     },0)
//     return expectedSum-actualSum;
// }
// console.log(findMissing([1,2,3,5,6,7]))

// reverse Each word in a String
// let str="I am sahil learinig web development"
// function reverseEachWord(str){
//     let Words=str.split(" ");
//     let reverseWords=Words.map((word)=>{
//         return word.split('').reverse().join('')
//     })
//     return reverseWords.join(" ")

// }
// console.log(reverseEachWord(str))

// find longest word in the sentence
// let str="I am sahil learinig web development"
// function findLongest(str){
//     return str.split(" ").sort((a,b)=>b.length-a.length)[0]
// }

// console.log(findLongest(str))

// remove spaces from the string
// let str="I am sahil learinig web development"

// function removeSpace(str){
//     return str.replace(/\s/g,"");
// }
// console.log(removeSpace(str))

// let str="I am sahil learinig web development"
// let word='aA'
// function Occurance(str,word){
//     let count=0;
//     for(let char of str){
//     if(word.includes(char)){
//         count++
//         }
    
//     }
//      return {'a':count}

// }
// console.log(Occurance(str,word))

// Check Anagram
// let str2='heart'
// let str1='earth'
// function checkAnagram(str,str1){
//     let firststr=str1.split('').sort().join('');
//     let secongstr=str2.split('').sort().join('');
//     return firststr===secongstr;
// }
// console.log(checkAnagram(str2,str1))

//Convert string to title case
// let str="I am the boss of this country";
// function titleCase(str){
//     finalArray=[]
//    let firststr=str.split(" ")
//     for(let i=0;i<firststr.length;i++){
//     let secondstr=firststr[i].charAt(0).toUpperCase()+firststr[i].slice(1)
//     finalArray.push(secondstr)
//     }
//     return finalArray.join(' ')
// }
// console.log(titleCase(str))

// remove duplicate characters
// let str="I am the boss of this country";
// function removeDuplicatechar(str){
//     let newString=str.replace(/\s/g,"")
//     let secondstr=newString.split('');
//     let final=new Set(secondstr)
//     return [...final].join('')
// }
// removeDuplicatechar(str)

//Find first non-repeating charcter
// let str="I am the boss of this country";

// Check if a string contain a substrin
// function checkSubstring(str1,str2){
//     if(str1.includes(str2)){
//         return true;
//     }
//     else return false;
// }
// console.log(checkSubstring("javascript developer",""))

// let str="I am the boss of this country";
// function Convertstringtoarray(str){
//     return str.split(' ')
// }
// console.log(Convertstringtoarray(str))

// fibonacci series
// function fibonacci(num){
//     let fibArray=[0,1];
//     for(let i=2;i<num;i++){
//         fibArray.push(fibArray[i-1]+fibArray[i-2]);

//     }
//     return fibArray;
// }
// console.log(fibonacci(10))

//fictorial of a number
// let fict=1;
// function fictorial(num){
//     if(num===1 || num===0){
//         console.log(fict);
//         return;
//     }
//     fict=fict*num;
//     fictorial(num-1)
    
// }
// fictorial(6)

// Swap two number without using third variable
// let num1=23;
// let num2=45;
// // [num1,num2]=[num2,num1];
// num1=num1+num2;
// num2=num1-num2;
// num1=num1-num2
// console.log(num1,num2)

// generate random rumber
// function randomNumber(){
//     return Math.round(Math.random()*10000)
// }
// console.log(randomNumber())

// const obj1={
//     name:"sahil",
//     age:23,
//     newobj:{
//         subject:"math"
//     }
// }
// const obj2=JSON.parse(JSON.stringify(obj1))
// obj2.name="anurag"
// obj2.newobj.subject="english"
// console.log(obj1)
// console.log(obj2)

// debounc function
function debounce(str){
debount()
    console.log(str);
}
debounce("hello")

