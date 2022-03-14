
document.querySelector("form").addEventListener("submit", todoList);
let listContainer = document.querySelector("#todoList");
let todoListItems = [
];

function removeItem(id) {
    let itemToRemove = todoListItems.find( (item) => item.id === id );
    todoListItems.splice(todoListItems.indexOf(itemToRemove), 1);
    updateList();
}

function todoList(event) {
    event.preventDefault();
    const todoInput = document.querySelector("#todoInput");
    let item = todoInput.value;
    let id = Date.now().toString();
    if (item.trim() != "") {
        todoListItems.push({ name: item.trim(), id: id});
    }   
    console.table(todoListItems);
    let text = document.createTextNode(item);
    const newItem = document.createElement('li');
    newItem.appendChild(text);
    const button = document.createElement('button');
    button.innerHTML = " delete";
    button.classList.add("remove-btn");
    button.addEventListener("click", () => { removeItem(id) })
    newItem.appendChild(button);
    
    document.getElementById('todoList').appendChild(newItem);
    todoInput.value = "";
}

function updateList()
 {
     // 1. Empty list
     listContainer.innerHTML = "";
     // 2. Repopulate lsit to match the content of todoListItems
    todoListItems.forEach((item) => {
        
    }) 
 }

let currentDropDown = 0;
let dropDownIsOpen = false;

/*
exempel på setAttrbite och getAttribute: 
let myButton = document.querySelector("button");
let buttonDropdown = myButton.getAttribute("data-dropdown");
buttonDropdown = "hej";
myButton.setAttrbute("data-dropdown", buttonDropdown); */

let dropDownLinks = document.querySelectorAll(".lower-nav a");

dropDownLinks.forEach((dropDownLink) => {
  dropDownLink.addEventListener("click", clickedLink);
});

function clickedLink(event) {
  dropDownIsOpen = true;
  currentDropDown = event.target.parent.getAttribute("data-dropdown");
  let dropDownElement = document.querySelector("." + currentDropDown);
  dropDownElement.classList.toggle("visibility");
}

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
