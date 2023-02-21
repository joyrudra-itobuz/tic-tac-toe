console.log("Starts!");

gsap.from(".tr-1", {
  duration: 2,
  x: "700%",
  ease: "power3",
});
gsap.from(".tr-2", {
  duration: 2,
  x: "-700%",
  ease: "power2",
});
gsap.from(".tr-3", {
  duration: 2,
  y: "700%",
  ease: "power3",
});

setTimeout(() => {
  document.querySelector(".game-name-text").style.display = "block";

  gsap.from(".game-name-text", {
    duration: 2,
    y: "800%",
    ease: "power3",
  });
}, 1000);

setTimeout(() => {
  document.querySelector(".btn-outline-light").style.display = "block";

  gsap.from(".btn-outline-light", {
    duration: 2,
    x: "800%",
    ease: "power3",
  });
}, 1000);

const arrHorizontalRow1 = [".btn-index-1", ".btn-index-2", ".btn-index-3"];
const arrHorizontalRow2 = [".btn-index-4", ".btn-index-5", ".btn-index-6"];
const arrHorizontalRow3 = [".btn-index-7", ".btn-index-8", ".btn-index-9"];

const arrVerticalRow1 = [".btn-index-1", ".btn-index-4", ".btn-index-7"];
const arrVerticalRow2 = [".btn-index-2", ".btn-index-5", ".btn-index-8"];
const arrVerticalRow3 = [".btn-index-3", ".btn-index-6", ".btn-index-9"];

const arrDiagonal1 = [".btn-index-1", ".btn-index-5", ".btn-index-9"];
const arrDiagonal2 = [".btn-index-3", ".btn-index-5", ".btn-index-7"];

const mainArr = [
  arrHorizontalRow1,
  arrHorizontalRow2,
  arrHorizontalRow3,
  arrVerticalRow1,
  arrVerticalRow2,
  arrVerticalRow3,
  arrDiagonal1,
  arrDiagonal2,
];

const looper = () => {
  for (let i = 0; i < mainArr.length; i++) {
    let winnerCounter1 = 0;
    let winnerCounter2 = 0;

    let nextArr = mainArr[i];
    for (let j = 0; j < nextArr.length; j++) {
      let getBtnClass = nextArr[j];
      let btnChecker = document.querySelector(getBtnClass);
      if (btnChecker.textContent == "X") {
        winnerCounter1++;
      }
      if (btnChecker.textContent == "O") {
        winnerCounter2++;
      }
    }
    if (winnerCounter1 == 3) {
      for (let i = 0; i < nextArr.length; i++) {
        gsap.from(nextArr[i], {
          duration: 3,
          x: "700%",
          ease: "elastic",
        });
      }
      document.querySelector(".player-1-winning-text").style.display = "block";
      gsap.from(".player-1-winning-text", {
        duration: 3,
        y: "700%",
        ease: "bounce",
      });
      let buttons = document.querySelectorAll(".game-btn");
      for (const button of buttons) {
        button.disabled = true;
      }
      return "won";
    }
    if (winnerCounter2 == 3) {
      for (let i = 0; i < nextArr.length; i++) {
        gsap.from(nextArr[i], {
          duration: 3,
          x: "-700%",
          ease: "elastic",
        });
      }

      document.querySelector(".player-2-winning-text").style.display = "block";
      gsap.from(".player-2-winning-text", {
        duration: 3,
        y: "700%",
        ease: "bounce",
      });
      let buttons = document.querySelectorAll(".game-btn");
      for (const button of buttons) {
        button.disabled = true;
      }
      return "won";
    }
  }
};

let c = 1;

const getInput = (index) => {
  console.log("getInput Called!");

  let btnClass = ".btn-index-" + index;
  let btnSelected = document.querySelector(btnClass);

  if (c % 2 == 0) {
    console.log("If Block");
    if (btnSelected.textContent == "") {
      btnSelected.textContent = "O";
      c++;
      looper();
    }
  } else {
    console.log("Else Block");
    if (btnSelected.textContent == "") {
      btnSelected.textContent = "X";
      c++;
      looper();
    }
  }
};
