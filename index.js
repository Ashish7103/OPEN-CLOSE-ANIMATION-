'use strict'

const menu = document.querySelector(".menu");
menu.addEventListener("click", function() {
  menu.classList.toggle("active");
  menu.classList.toggle("line-1-anime")
  menu.classList.toggle("line-2-anime")
  menu.classList.toggle("line-3-anime")
})