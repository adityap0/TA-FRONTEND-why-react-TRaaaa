const input = document.querySelector("input");
const root = document.querySelector(".movie-list");
const allMovies = [];
input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    allMovies.push({
      name: e.target.value,
      watched: false,
    });
    e.target.value = "";
    createUI(allMovies);
  }
});
const createUI = (allMovies) => {
  allMovies = allMovies.map((movie, i) => {
    let li = React.createElement(
      "li",
      {},
      React.createElement(
        "cite",
        {
          style: {
            textDecoration: movie.watched ? "line-through" : "none",
          },
        },
        movie.name
      ),
      React.createElement(
        "button",
        {
          "data-id": i,
          onClick: handleBtn,
        },
        movie.watched ? "Watched" : "Yet to Watch"
      )
    );
    return li;
  });
  ReactDOM.render(allMovies, root);
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
