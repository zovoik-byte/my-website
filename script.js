const button = document.querySelector("#cheer");
const count = document.querySelector("#count");

let cheers = 0;

button.addEventListener("click", () => {
    cheers = cheers + 1;
    count.textContent = cheers + " cheers";
  });

  colors = ["red", "yellow", "green", "pink"]
  colors = 0;
  window.setInterval(() => {
    color = (color + 1) % colors.length;
    document.querySelector("#color-change").style.color
  },1000)

