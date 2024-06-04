import { maxStarsPosition, minStarsPosition } from "../constants";

export const generateCometaFromStar = function(starsLocation) {
  let position = Math.floor(
    Math.random() * (maxStarsPosition - minStarsPosition) + minStarsPosition
  );
  let coord = starsLocation[position];
  let element = document.getElementsByClassName("star-type1 " + position)[0];
  if (element.classList.contains("animated")) {
    element.classList.remove("animated");
  }

  //add start light
  setTimeout(() => {
    element.classList.add("animated-cometa");
  }, position * 1000);
};
