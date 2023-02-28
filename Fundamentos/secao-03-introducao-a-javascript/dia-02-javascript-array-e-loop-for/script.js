let array = ["java", "javascript", "python", "html", "css"];
let smallest = array[0];
let biggest = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < smallest.length) {
    smallest = array[index];
  } else if (array[index].length > biggest.length) {
    biggest = array[index];
  }
}

// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length > biggest.length) {
//     biggest = array[index];
//   }
// }
console.log("A menor palavra do array é: ", smallest);
console.log("A maior palavra do array é: ", biggest);
