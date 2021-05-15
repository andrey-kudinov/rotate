function start(elClass) {
  const div = (text, index) => {
    const nodeWrap = document.createElement("div");
    nodeWrap.textContent = text;
    nodeWrap.classList.add(elClass.replace(/[.]/g, "") + "-letter");
    return nodeWrap;
  };

  const byLetter = (text) => [...text].map(div);

  document.querySelectorAll(elClass).forEach((node) => {
    let nodes = null;
    nodes = byLetter(node.innerText);
    if (nodes && node.firstChild) node.firstChild.replaceWith(...nodes);
  });
  document.querySelectorAll(".first-letter").forEach((el) => {
    el.addEventListener("mouseover", function () {
      el.classList.toggle("close");

      for (
        let i = 0;
        i < document.querySelectorAll(".second-letter").length;
        i++
      ) {
        if (
          document.querySelectorAll(".first-letter")[i] &&
          document
            .querySelectorAll(".first-letter")
            [i].classList.contains("close")
        ) {
          if (document.querySelectorAll(".second-letter")[i]) {
            document
              .querySelectorAll(".second-letter")
              [i].classList.add("open");
          }
        } else {
          if (document.querySelectorAll(".second-letter")[i]) {
            document
              .querySelectorAll(".second-letter")
              [i].classList.remove("open");
          }
        }
      }
    });
  });
}

start(".first");
start(".second");

document.querySelector(".in").oninput = function () {
  document.querySelector(".first").innerHTML =
    document.querySelector(".in").value;
    document
    .querySelectorAll(".second-letter").forEach(el=>{
      el.classList.remove("open");
    })
  start(".first");
};
document.querySelector(".out").oninput = function () {
  document.querySelector(".second").innerHTML =
    document.querySelector(".out").value;
  start(".second");
};

document.querySelectorAll(".first-letter").forEach((el) => {
  el.addEventListener("mouseover", function () {
    el.classList.toggle("close");

    for (
      let i = 0;
      i < document.querySelectorAll(".second-letter").length;
      i++
    ) {
      if (
        document.querySelectorAll(".first-letter")[i] &&
        document
          .querySelectorAll(".first-letter")
          [i].classList.contains("close")
      ) {
        if (document.querySelectorAll(".second-letter")[i]) {
          document.querySelectorAll(".second-letter")[i].classList.add("open");
        }
      } else {
        if (document.querySelectorAll(".second-letter")[i]) {
          document
            .querySelectorAll(".second-letter")
            [i].classList.remove("open");
        }
      }
    }
  });
});
