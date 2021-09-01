const input = document.querySelector("input");
const root = document.querySelector(".movie-list");
let allMovies = [];
input.addEventListener("keyup", (e) => {
  //adding a movie
  if (e.keyCode === 13) {
    allMovies.push({
      name: e.target.value,
      watched: false,
    });
    createUI(allMovies);
    e.target.value = "";
  }
});
var handleBtn = (event) => {
  let id = event.target.dataset.id;
  if (!allMovies[id].watched) {
    allMovies[id].watched = true;
  } else {
    allMovies[id].watched = false;
  }
  createUI(allMovies);
};
const createUI = (allMovies) => {
  root.innerHTML = "";
  allMovies.forEach((movie, i) => {
    let li = document.createElement("li");
    let cite = document.createElement("cite");
    cite.innerText = movie.name;
    let button = document.createElement("button");
    if (!movie.watched) {
      button.innerText = "To Watch";
      cite.style.textDecoration = "none";
    } else {
      button.innerText = "Watched";
      cite.style.textDecoration = "line-through";
    }
    button.setAttribute("data-id", i);
    li.append(cite, button);
    root.append(li);
    button.addEventListener("click", handleBtn);
  });
};
