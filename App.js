 console.log("Hello world!");
 window.onscroll = function() {stickyHeader()};

 var header = document.getElementById("stickyHeader");

 var sticky = header.offsetTop;

 function stickyHeader() {
     if(window.pageYOffset > sticky){
         header.classList.add("sticky");
     }
     else{
         header.classList.remove("sticky");
     }
 }