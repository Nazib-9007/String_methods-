//Note: When use my code please atfirst check the veriable name, because i declear duplicate veriable name...
//String method problem exersize...
const drink = '     water';
const liquid = 'water    ';
if(drink.trim() === liquid.trim()){
    console.log('Pani hani dami jani');
} else{
    console.log('Somudre pani dekhte valo khaite kalo');
}

//String method problem exersize...
//1...
const friend = 'Raju, Rana, Hasan, Kabir, Majedul';
console.log(friend.split(' '));

//2...
const friend1 = 'Raju, Rana, Hasan, Kabir, Majedul';
console.log(friend.split(','));

//3...
const str = 'Function if else while';
console.log(str.split(' '));

//4...
const language = ['javascript', 'python', 'java'];
console.log(language.join(' ; '));

//5...
const newStr = '  console log debug  ';
console.log(newStr.trim());

//6...
const str1 = 'push';
const str2 = 'pop';
const str3 = 'shift';
const str4 = 'unshift';
console.log(str1.concat(' ',str2,' ', str3,' ', str4));

//7...
const proLang = 'Hello javascript developer';
console.log(proLang.slice(6,16));

//8...
const learnWord = 'Code more learn more';
console.log(learnWord.substring(10,16));

//String method repeat problem solve...
//1...
const str = 'Hi ';
console.log(str.repeat(10));

//2...
const sentence = 'I am learning javascript. Javascript is amazing!';
console.log(sentence.replace('Javascript', 'Js'));

//3...
const fruit = 'I love apples and apples are tasty';
console.log(fruit.replaceAll('apples', 'mangoes'));

//Here when use repleace it just change 1st element which i want to change
//but when use repleaceAll it change all element which i want to change like that solved example....


