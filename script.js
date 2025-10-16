const result = document.querySelector(".output");
const buttons = document.querySelectorAll(".btn");
const dlt = document.querySelector("#delete");
const calc = document.querySelector(".calc");

let str = "";
console.log(str.at(-1))
let isCalculated = false;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (isCalculated) {
      str = "";
      result.innerHTML = str;
      isCalculated = false;
    }
    
    if (str.length === 0 && "+*/".includes(e.target.innerText)) {
        result.innerHTML = str;
    } else if ("+-*/.".includes(e.target.innerText)) {
      if (!"+-*/.".includes(str.at(-1))) {
        str += e.target.innerText;
        result.innerHTML = str;
      }
    } else {
      str += e.target.innerText;
      result.innerHTML = str;
    }
  });
});

calc.addEventListener("click", () => {
  if (!"+-*/".includes(str.at(-1)) && !(str.length === 0)) {
    try {
      str = `${eval(str)}`;
      result.innerHTML = str;
      isCalculated = true;
    } catch {
      result.innerHTML = "Error";
    }
  }
});

dlt.addEventListener("click", () => {
  str = str.slice(0, -1);
  result.innerHTML = str;
});
