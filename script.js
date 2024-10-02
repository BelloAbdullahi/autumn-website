document.querySelector("button").addEventListener("click", function () {
  const query = document.querySelector("input").value;
  if (query) {
    alert(`Searching for ${query}...`);
  } else {
    alert("Please enter something to search!");
  }
});

let isShow = false;

function toggleNav() {
  const navItems = document.querySelector("#navItems");

  isShow = !isShow;

  isShow
    ? navItems.setAttribute("class", "showNav")
    : navItems.setAttribute("class", "navLinks");
}
