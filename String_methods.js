//JS Array Method Tutorial....
function double (number){
    const doubleValue = [];
    for(const key of number){
        const num = key * 2;
        doubleValue.push(num);
    }
    return doubleValue;
}
console.log(double([4,5,6,8,10]));
//Using map array method...
let arr1 = [2,3,6,8,10];
let new__aarr = arr1.map((val) => {
    return val**2;
});
console.log(new__aarr);
//using filter array method..
let arr2 = [5,10,15,20,25];
let newaarr = arr2.filter((val) => {
    return val%2 !== 0;
});
console.log(newaarr);
//Using reduce method...
let arr3 = [5,10,15,20,25];
let new_arr = arr3.reduce((result, val) => {
    return result + val;// it works previous value + current value.
});
console.log(new_arr);

//Solve some problems using array methods.....
let arr1 = [78, 80, 91, 95, 98, 75,50];
let result1 = arr1.filter((val1) => {
    return val1 > 90;
});
console.log(result1);

//Solve a problem..
let n = prompt("Enter the how many arry in there: ");
let arr = [];
for(let i =1; i<=n; i++){
    arr[i-1] = i; //1(1-1=0), 2(2-1=1), 3(3-1=2) === index(i-1)....
}
console.log(arr);

//Solve another problem...
let result = arr.reduce((res, val) => {
    return res + val;
});
console.log("Result of array: " + result);

let product = arr.reduce((por, curr) => {
    return por*curr;
});
console.log("Product of array: " + product);



//JS String Method tutorial..
//Slice method
let str1 = "I want to become a web developer";
console.log(str1.slice(3,8));//substring(start, end);
console.log(str1.substring(3, 8));//substring(start, end);
console.log(str1.substr(3,5));//substring(start, what should length you need);
console.log(str1.replace("web", "software"));//replace(what string you want to change, put new string);
console.log(str1.concat(" & web developer"));// Concat is use to add one string to another string;
let str2 = "      I am a ICT engineer    ";
console.log(str2);
console.log(str2.trim());//remove enpty spaces;
console.log(str2.trimStart());//remove just start empty space not remove end sapce;
console.log(str2.trimEnd());//remove just empty empty space not remove start sapce;
let str3 = "Hello coders!";
console.log(str3.search("o"));//Search any string;
console.log(str3.indexOf("!"));//Search index number.
console.log(str3.lastIndexOf("l"));//Search from last index.
console.log(str3.startsWith("Meow"));//If given string natch to the str3 string the return true, otherwise return false;
let human = "Karim Uddin";
console.log(human.match("din"));//match string to string;
console.log(human.includes("Udd"));//If match string to string then return true, otherwise return false;
console.log(human.startsWith("Uddin"));//return false. cos start Karim;
console.log(human.endsWith("Karim"));//return false. cos end Uddin;
