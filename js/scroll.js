const navbar = document.getElementById("navbar");
const footer = document.getElementById("footer");
const main = document.getElementById("root");

document.addEventListener("scroll", () => {
  console.log(window.scrollY);

  // FIXME: Footer should only appear after scrolling to bottom.
  // Header should change to 50% opacity when scrolling down some.

  // if(window.scrollY >= 100)
  //   navbar.style.opacity = "50%";
  // else
  //   navbar.style.opacity = "100%";
  //
  // if((window.scrollY + window.innerHeight) == main.offsetHeight)
  //   footer.style.opacity = "100%";
  // else
  //   footer.style.opacity = "0%";
});
