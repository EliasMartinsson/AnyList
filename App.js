let currentDropDown = 0;
let dropDownIsOpen = false;

/*
exempel på setAttrbite och getAttribute: 
let myButton = document.querySelector("button");
let buttonDropdown = myButton.getAttribute("data-dropdown");
buttonDropdown = "hej";
myButton.setAttrbute("data-dropdown", buttonDropdown); */

let dropDownLinks = document.querySelectorAll(".top-links button");

dropDownLinks.forEach((dropDownLink) => {
  dropDownLink.addEventListener("click", clickedLink);
});

function clickedLink(event) {
  dropDownIsOpen = true;
  currentDropDown = event.target.parent.getAttribute("data-dropdown");
  let dropDownElement = document.querySelector("." + currentDropDown);
  dropDownElement.classList.toggle("visible");
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
