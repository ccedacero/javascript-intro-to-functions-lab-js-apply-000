function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toLowerCase());
}

function logWhispe(string) {
  console.log(string.toLowerCase());
}
// function sayHiToGrandma(string) {
//   if (string === string.toLowerCase()) {
//     return 'I can\'t hear you!';
//   }
// }

function sayHiToGrandma(string) {
  if (string === string.toUpperCase()) {
    return 'YES INDEED';
  }
}

function sayHiToGrandma(string) {
  let output = "I love you, Grandma.";
  if (string.equals(output) === true) {
    return 'I love you, too'
  }
}