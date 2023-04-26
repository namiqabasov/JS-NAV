const container = document.querySelectorAll(".container");
const btn1 = document.querySelectorAll(".btn1");
const rmov = document.querySelectorAll(".rmov");
const ulclass = document.querySelector(".ulclass");
const divbut = document.querySelector(".divbut");
btn1[0].addEventListener("click", () => {
  container[0].classList.add("son1");
  ulclass.classList.add("yeniul");
  divbut.classList.add("arxafon");
  btn1[0].classList.add("arxafon");
  console.log(divbut.className);
});

rmov[0].addEventListener("click", function () {
  container[0].classList.remove("son1");
  ulclass.classList.remove("yeniul");
  divbut.classList.remove("arxafon");
  btn1[0].classList.remove("arxafon");
});
