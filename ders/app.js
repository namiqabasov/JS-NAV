const btn=document.querySelector(".btn")
const ulclass=document.querySelector(".ulclass")
const yeni=document.querySelector(".yeni")

btn.addEventListener("click",function () {
    ulclass.classList.toggle("yeniul")
    yeni.classList.toggle("navbar")
})
