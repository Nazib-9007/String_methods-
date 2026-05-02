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
