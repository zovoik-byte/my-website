const button = document.querySelector("#cheer");
const count = document.querySelector("#count");

let cheers = 0;

button.addEventListener("click", () => {
    cheers = cheers + 1;
    count.textContent = cheers + " cheers";
  });
