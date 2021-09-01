const input = document.querySelector("input");
const root = document.querySelector(".movie-list");
const allMovies = [];
const elm = (type, attr = {}, ...children) => {
  const element = document.createElement(type);
  const keyArr = Object.keys(attr);
  keyArr.forEach((key) => {
    if (key.startsWith("data-")) {
      element.setAttribute(key, attr[key]);
    } else {
      element[key] = attr[key];
    }
  });
  children.forEach((child) => {
    if (typeof child === "object") {
      element.append(child);
    } else if (typeof child === "string") {
      const node = document.createTextNode(child);
      element.append(node);
    }
  });
  return element;
};
input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    allMovies.push({
      name: e.target.value,
      watched: false,
    });
    createUI(allMovies);
    e.target.value = "";
  }
});
const createUI = (allMovies) => {
  root.innerHTML = "";
  allMovies.forEach((movie, i) => {
    let li = elm(
      "li",
      {},
      elm("cite", {}, movie.name),
      elm(
        "button",
        {
          "data-id": i,
        },
        movie.watched ? "Watched" : "Yet to Watch"
      )
    );
    root.append(li);
  });
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", handleBtn);
  });
  const cites = document.querySelectorAll("cite");
  cites.forEach((cite) => {
    if (!movie.watched) {
      cite.style.textDecoration = "none";
    } else {
      cite.style.textDecoration = "line-through";
    }
  });
};

var handleBtn = (event) => {
  let id = event.target.dataset.id;
  if (!allMovies[id].watched) {
    allMovies[id].watched = true;
  } else {
    allMovies[id].watched = false;
  }
  createUI(allMovies);
};
