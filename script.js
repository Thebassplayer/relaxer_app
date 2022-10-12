const container = document.getElementById("container");
const circleText = document.getElementById("text");

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  circleText.innerText = "Breath In";
  container.className = "container grow";

  setTimeout(() => {
    circleText.innerText = "Hold";
    setTimeout(() => {
      circleText.innerText = "Breath Out";
      container.className = "container shrink";
    }, holdTime);
  }, breathTime);
}

setInterval(breathAnimation, totalTime);
