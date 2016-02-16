/**
 *
 */

document.write('ALL FUNCTIONS IN CONSOLE!');
// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(a , b){
    "use strict";
    if (a > b){
      return a;
    } else {
      return b;
    }
}
console.log('largest of 2 numbers:',max(10, 12));

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c){
    "use strict";
    if (a > b && a > c){
      return a;
    }else if (b > a && b > c){
      return b;
    }else {
      return c;
    }
}
console.log('largest of 3 numbers:', maxOfThree(1,2,3));

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u" || char == "y"){
      return true;
    }else{
      return false;
    }
}
console.log('Character is vowel:',isVowel("e"));
// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    var splitPhrase = phrase.split("");
    for (var i = 0; i < splitPhrase.length; i++){
      splitPhrase[i];
      if (splitPhrase[i] == "a" || splitPhrase[i] == "e" || splitPhrase[i] == "i" || splitPhrase[i] == "o" || splitPhrase[i] == "u" || splitPhrase[i] == "y" || splitPhrase[i] == " "){
      }else{
        splitPhrase[i] =splitPhrase[i] + "o" + splitPhrase[i];
      }
    }
  return splitPhrase.join('');
}
console.log('Rovarspraket language:', rovarspraket('My name is Gabe'));
// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(a, b, c, d){
    "use strict";
    var sum = a + b + c + d;
    return sum;
}
console.log('all numbers added:', sum(2, 2, 2, 2));
function multiply(a, b, c, d){
    "use strict";
    var multi = a * b * c * d;
    return multi;
}
console.log('       ^^^all numbers multiplied:', multiply(2, 2, 2, 2));

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(word){
    "use strict";
  return  word.split('').reverse().join('');
}

console.log('Reversed phrase:',reverse("Hello sock boy!"));
    console.log('  ^^^Normal phrase:', 'Hello sock boy!');
// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    for (var i = 0; i < words.length; i++){
      words[i];
    }
    if (words[0].length > words[1].length && words[0].length > words[2].length){
      return words[0].length;
    }else if (words[1].length > words[0].length && words[1].length > words[2].length){
      return words[1].length;
    }else{
      return words[2].length;
    }
}
var listOfWords = ['helicopter', 'hello', 'codepen']
console.log('length of longest word:',findLongestWord(listOfWords));
// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    var keyWords = [];
    for (var a = 0; a < words.length; a++){
      words[a];
      if (words[a].length > i){
        keyWords.push(words[a]);
      }
    }
    return keyWords;
}

var wordList = ['camp', 'hammock', 'ax', 'castiron']
console.log('Array  of words longer than integer:', filterLongWords(wordList, 5));


// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    var frequencyList = {};
      for (var i = 0; i < string.length; i++){
        if (frequencyList[string[i]]){
          frequencyList[string[i]]++
        }else{
          frequencyList[string[i]] = 1;
        }
      }
      return frequencyList;
      // for (var letter in frequencyList){
      //
      // }
}

console.log('Frequency Listing as Object:',charFreq('aaababbbabbabbaaaaaaaabab'));
