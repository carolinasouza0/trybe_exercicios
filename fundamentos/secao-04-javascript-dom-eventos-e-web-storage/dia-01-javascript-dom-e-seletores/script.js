document.getElementById("header-container").style.backgroundColor =
  "rgba(81, 136, 59, 0.836)";

let emergencyTasks = document.querySelectorAll(".emergency-tasks div h3");
for (let index = 0; index < emergencyTasks.length; index += 1) {
  emergencyTasks[index].style.backgroundColor = "rgba(182, 98, 64, 0.836)";
}

let noEmergencyTasks = document.querySelectorAll(".no-emergency-tasks div h3");
for (let index = 0; index < noEmergencyTasks.length; index += 1) {
  noEmergencyTasks[index].style.backgroundColor = "rgba(182, 64, 172, 0.836)";
}
let box = document.querySelectorAll("div");
for (let index = 0; index < box.length; index += 1) {
  box[index].style.cssText = "margin: 10px;" + "border: 3px solid black";
}

let backgroundDiv = document.querySelectorAll(".emergency-tasks div");
for (let index = 0; index < backgroundDiv.length; index += 1) {
  backgroundDiv[index].style.cssText =
    "background-color: rgba(206, 128, 128, 0.795)";
}

let backgroundDiv2 = document.querySelectorAll(".no-emergency-tasks div");
for (let index = 0; index < backgroundDiv2.length; index += 1) {
  backgroundDiv2[index].style.cssText =
    "background-color: rgba(240, 167, 230, 0.863)";
}

document.querySelector("#footer-container").style.backgroundColor =
  "rgba(81, 136, 59, 0.836)";
