let lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

let lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

let lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

function nightShift(obj, key, value) {
  obj[key] = value;
}
nightShift(lesson2, "turno", "noite");
console.log(lesson2);

function keyList(obj) {
  return Object.keys(obj);
}
console.log(keyList(lesson1));

function objectSize(obj) {
  return Object.keys(obj).length;
}
console.log(objectSize(lesson1));

function objectValues(obj) {
  return Object.values(obj);
}
console.log(objectValues(lesson1));

let allLessons = Object.assign(
  {},
  { lesson1: lesson1, lesson2: lesson2, lesson3: lesson3 }
);
console.log(allLessons);
