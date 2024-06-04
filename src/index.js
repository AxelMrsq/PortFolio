import "./styles.scss";
import Parallax from "parallax-js";
import { generateStars } from "./stars/stars";
import { generateCometaFromStar } from "./cometa/cometa";

var scene = document.getElementById("scene");
new Parallax(scene);
var starsPosition = generateStars();

for (let count = 0; count < 4; count++) {
  generateCometaFromStar(starsPosition);
}