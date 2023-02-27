let ang1 = 45;
let ang2 = 45;
let ang3 = 90;

if (ang1 + ang2 + ang3 == 180 && ang1 > 0 && ang2 > 0 && ang3 > 0) {
  console.log("true");
} else if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
  console.log("Algum ângulo é inválido. Reveja!");
} else {
  console.log("false");
}
