/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let getNames = () => {
    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger", "racoon"];

    for (let i = 0; i < noun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < pronoun.length; k++) {
          document.write(pronoun[k] + adj[j] + noun[i] + "." + "com" + "<br>");
        }
      }
    }
  };
  document.querySelector("#namesId").innerHTML = getNames();
};
