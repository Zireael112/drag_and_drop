/* eslint-disable no-unused-vars */
const fotter1 = document.querySelector(".fotter1");
const fotter2 = document.querySelector(".fotter2");
const fotter3 = document.querySelector(".fotter3");

const inputDisplay1 = document.querySelector(".inputDisplay1");
const inputDisplay2 = document.querySelector(".inputDisplay2");
const inputDisplay3 = document.querySelector(".inputDisplay3");

const inputCross1 = document.querySelector(".cross1");
const inputCross2 = document.querySelector(".cross2");
const inputCross3 = document.querySelector(".cross3");

const btn1 = inputDisplay1.querySelector("button");
const btn2 = inputDisplay2.querySelector("button");
const btn3 = inputDisplay3.querySelector("button");

const inp1 = inputDisplay1.querySelector("input");
const inp2 = inputDisplay2.querySelector("input");
const inp3 = inputDisplay3.querySelector("input");

const cardTitle1 = document.querySelector(".column-title1");
const cardTitle2 = document.querySelector(".column-title2");
const cardTitle3 = document.querySelector(".column-title3");

let actualElement;
let cardsWithContent;
let crossCardContent;

const hide = (event) => {
  const targetDOM = event.target.closest("div");
  targetDOM.classList.add("hidden");
  if (targetDOM.classList.contains("fotter1")) {
    inputDisplay1.classList.add("visible");
  }

  if (targetDOM.classList.contains("fotter2")) {
    inputDisplay2.classList.add("visible");
  }

  if (targetDOM.classList.contains("fotter3")) {
    inputDisplay3.classList.add("visible");
  }
};

fotter1.addEventListener("click", hide);

fotter2.addEventListener("click", hide);

fotter3.addEventListener("click", hide);

inputCross1.addEventListener("click", () => {
  inputDisplay1.classList.remove("visible");
  fotter1.classList.remove("hidden");
  inp1.value = null;
});

inputCross2.addEventListener("click", () => {
  inputDisplay2.classList.remove("visible");
  fotter2.classList.remove("hidden");
  inp2.value = null;
});

inputCross3.addEventListener("click", () => {
  inputDisplay3.classList.remove("visible");
  fotter3.classList.remove("hidden");
  inp3.value = null;
});

btn1.addEventListener("click", () => {
  if (!inp1.value) {
    return;
  }
  fotter1.classList.remove("hidden");
  inputDisplay1.classList.remove("visible");

  const contentCard = document.createElement("div");
  contentCard.classList.add("for-hover");
  contentCard.innerHTML = `
    <div class="card-content">${inp1.value}<div class="cross-content" style="display: none">&times;</div></div>
  `;
  cardTitle1.insertAdjacentElement("afterend", contentCard);

  inp1.value = null;
});

btn2.addEventListener("click", () => {
  if (!inp2.value) {
    return;
  }
  fotter2.classList.remove("hidden");
  inputDisplay2.classList.remove("visible");

  const contentCard = document.createElement("div");
  contentCard.innerHTML = `
    <div class="card-content">${inp2.value}<div class="cross-content" style="display: none">&times;</div></div>
  `;
  cardTitle2.insertAdjacentElement("afterend", contentCard);

  inp2.value = null;
});

btn3.addEventListener("click", () => {
  if (!inp3.value) {
    return;
  }
  fotter3.classList.remove("hidden");
  inputDisplay3.classList.remove("visible");

  const contentCard = document.createElement("div");
  contentCard.innerHTML = `
    <div class="card-content">${inp3.value}<div class="cross-content" style="display: none">&times;</div></div>
  `;
  cardTitle3.insertAdjacentElement("afterend", contentCard);

  inp3.value = null;
});

const btnCreateContent = document.querySelectorAll(".add-card-btn");

const onMouseUp = (e) => {
  const mouseUpItem = e.target;

  mouseUpItem.insertAdjacentElement("beforeend", actualElement);
  actualElement.classList.remove("dragged");
  actualElement = undefined;

  document.documentElement.removeEventListener("mouseup", onMouseUp);
  document.documentElement.removeEventListener("mouseover", onMouseOver);
};

const onMouseOver = (e) => {
  actualElement.style.top = e.clientY + "px";
  actualElement.style.left = e.clientX + "px";
};

btnCreateContent.forEach((el) => {
  el.addEventListener("click", () => {
    setTimeout(() => {
      cardsWithContent = document.querySelectorAll(".card-content");
      crossCardContent = document.querySelectorAll(".cross-content");
      cardsWithContent.forEach((els) => {
        crossCardContent[
          Array.from(cardsWithContent).indexOf(els)
        ].addEventListener("click", () => {
          els.remove();
        });
      });

      cardsWithContent.forEach((els) => {
        els.addEventListener("mousedown", (e) => {
          e.preventDefault();
          actualElement = e.target;
          actualElement.classList.add("dragged");

          document.documentElement.addEventListener("mouseup", onMouseUp);
          document.documentElement.addEventListener("mouseover", onMouseOver);
        });
      });
    }, 0);
  });
});
