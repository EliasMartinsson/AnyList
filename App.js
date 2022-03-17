
document.querySelector("form").addEventListener("submit", list);
let listContainer = document.querySelector("#listMaker");
let listItems = [];

function removeItem(id) {
	let itemToRemove = listItems.find( (item) => item.id === id );
	listItems.splice(listItems.indexOf(itemToRemove), 1);
	updateList();
}

function list(event) {
	event.preventDefault();
	const listInput = document.querySelector("#listInput");
	let item = listInput.value;
	let id = Date.now().toString();
	if (item.trim() != "") {
		listItems.push({ name: item.trim(), id: id});
	}
	updateList();	
	
}

function updateList()
 {
	 listContainer.innerHTML = "";
   
	listItems.forEach((item) => {
		for(let i = 0; i < Array.length; i++) 
		{
			let text = document.createTextNode(item.name);
			const newItem = document.createElement('li');
			newItem.appendChild(text);
			const btn = document.createElement('button');
			btn.innerHTML = " remove";
			btn.classList.add("remove-btn");
			btn.addEventListener("click", () => { removeItem(item.id) })
			newItem.appendChild(btn);
			document.getElementById('listMaker').appendChild(newItem);
			listInput.value = "";
		}
	}) 
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
