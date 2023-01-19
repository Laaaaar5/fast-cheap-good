const fast = document.querySelector("#fast");
const cheap = document.querySelector("#cheap");
const good = document.querySelector("#good");
let compare = [];

function checked() {
  if (fast.checked && compare.includes("fast") === false) {
    compare.push("fast");
  } else if (cheap.checked && compare.includes("cheap") === false) {
    compare.push("cheap");
  } else if (good.checked && compare.includes("good") === false) {
    compare.push("good");
  } else if (fast.checked === false && compare.includes("fast")) {
    compare.splice(1, compare.indexOf("fast"));
  } else if (cheap.checked === false && compare.includes("cheap")) {
    compare.splice(1, compare.indexOf("cheap"));
  } else if (good.checked === false && compare.includes("good")) {
    compare.splice(1, compare.indexOf("good"));
  }

  if (fast.checked && cheap.checked && good.checked) {
    // mittleren wert von checked auslesen
    if (compare[1] === "fast") {
      fast.checked = false;
      compare.splice(1, 1);
    } else if (compare[1] === "cheap") {
      cheap.checked = false;
      compare.splice(1, 1);
    } else if (compare[1] === "good") {
      fast.checked = false;
      good.splice(1, 1);
    }
  }
  console.log(compare);
}

/* function checkedFast () {
    if (fast.checked && compare.includes("fast") === false) {
        compare.push("fast");} 
}

function checkedCheap () {
    if (fast.checked && compare.includes("cheap") === false) {
        compare.push("cheap");
}

function checkedGood () {
    if (fast.checked && compare.includes("good") === false) {
        compare.push("good");
}

document.querySelector("#fast").addEventListener("change", checkedFast);
document.querySelector("#cheap").addEventListener("change", checkedCheap);
document.querySelector("#good").addEventListener("change", checkedGood);
*/
