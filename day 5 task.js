// printing the odd numbers in the array

var array=[2,4,5,6,7,8,9]
var odds=array.filter((e)=>(e%2!==0))
console.log(odds);

// printing the string converted to the first letter to capital

var names= ["usha","heena","siva","valli","mani"]
function titleCase(names) {
    return names
    .map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(', ');
  }
  console.log(titleCase(names));

//printing the sum of all the elements in the array

var nums=[1,2,3,4,5,6,7,8,9]
const sum= nums
.reduce((acc,curr)=>(acc+curr));
console.log(sum);

// printing the prime numbers in the array

var numsarray=[67,29,91,98,90]
var primenums= numsarray
.filter((r)=>(r%2!==0))
.filter((y)=>(y%3!==0))
.filter((z)=>(z%7!==0))
.filter((x)=>(x%11!==0))
.filter((u)=>(u%5!==0))
console.log(primenums);

// returns all the palindromes

// var words =["wow", "madam", "racecar", "mom", "dad"]
// var palindrome= []
// var a
// for (var i=0; i<words.length; i++){
//   if (a = i.charAt(i.length-(i+1)) ){
//     palindrome= palindrome.push(a)
//   } 
// };
// console.log(palindrome)
// var abc="wow"

// function palindrome(a){
//   var word =[]
//   var length = a.length
//   var mid= Math.floor(a.length/2)
//   for (var i=0; i<mid; i++){
//     if ((a[i])==(a[length-i]){
//       word=word.push(a[i])
//   } 
//   return word
// }
// console.log(palindrome("wow"));