const iconDiv = document.getElementById("icon-div");
const header = document.getElementById("header");

console.log(iconDiv);
const menu = document.getElementById("menu");

iconDiv.addEventListener("click", () => {
  //iconDiv.classList.toggle("adjust-icon");
  header.classList.toggle("header-flex");
  menu.classList.toggle("show-menu");
  iconDiv.classList.toggle("icon-toggled-margin");
  console.log("i am clicked");
});
