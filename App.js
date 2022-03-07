let currentDropDown = 0;
let dropDownIsOpen = false;

let dropDownLinks = document.querySelectorAll(".top-links button");

dropDownLinks.forEach((dropDownLink) => {
  dropDownLink.addEventListener("click", clickedLink);
});
//Fråga Sebastian om hjälp P.S lägg till så att den klickade länken byter färg
function clickedLink(event) {
  dropDownIsOpen = true;
  currentDropDown = event.target.parent.getAttribute("data-dropdown");
  if(currentDropDown === "link-dropdown"){

  }
  if(currentDropDown === "schedule-dropdown"){

  }
  if(currentDropDown === "tierlist-dropdown"){
    
  }
  if(currentDropDown === "community-dropdown"){

  }
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
