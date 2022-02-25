let currentDropDown = 0;
let dropDownIsOpen = false;

let dropDownLinks = document.querySelectorAll(".top-links button");

dropDownLinks.forEach((dropDownLink) => {
  dropDownLink.addEventListener("click", clickedLink);
});

function clickedLink(event) {
  dropDownIsOpen = true;
  currentDropDown = event.target.parent.getAttribute("data-drop-down");
}

console.log(dropDownLinks);

window.onscroll = function () {
  stickyHeader();
};

let header = document.getElementById("header");

let sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
