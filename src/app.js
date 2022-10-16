/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let excuse =
    getExcuse(who) +
    " " +
    getExcuse(action) +
    " " +
    getExcuse(what) +
    " " +
    getExcuse(when);
  document.querySelector("#excuse").innerHTML = excuse;
};
function getExcuse(array) {
  let position = getRandomInt(array.length);
  return array[position];
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
