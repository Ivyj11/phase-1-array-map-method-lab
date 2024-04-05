const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased(){
    //get each array element i.e each sentence and use variable 'tutorial' to access it
  return  tutorials.map(function(tutorial){
    //now that we have each array item, split each sentence into each word. split where you find space i.e (" ")
    const originalText = tutorial.split(" ");

    const eachString = originalText.map(function(originalText){
      return originalText.charAt(0).toUpperCase() + originalText.slice(1);}).join (" ");

      return eachString;
    });

}

console.log (titleCased);

// const eachTutorial = tutorials.map(function(tutorial){
//   const originalText = tutorial.split(" ");
//   const eachSentence = originalText;
//   const eachWord = eachSentence.map(function(eachWord){
//         //console.log(eachWord);    
//     const titleCase = eachWord.charAt(0).toUpperCase()
// + eachWord.slice(1)
// console.log (titleCase);
// return tutorial;
// });

// });

// const splitText = tutorials.split(" ");
// const oneWord = splitText[1];
// console.log (oneWord);


// function titleCase(str) {
//   return str.toLowerCase().split(' ').map(function(word) {
//     return word.replace(word[0], word[0].toUpperCase());
//   }).join(' ');
// }

// const titleCased = tutorials.map((tutorial) => titleCase(tutorial));
// console.log(titleCased);
//const rollCall = skiSchool.map((student) => student + " the skier");
