import App from "./app.js";

const root = document.querySelector(".transactions");
const inputField = document.querySelector(".search__box");

const showTableBtn = document.querySelector(".show-table");
const action = document.querySelector(".action");
const search = document.querySelector(".search");

showTableBtn.addEventListener("click",() => {
    action.classList.add("hidden");
    root.classList.remove("hidden");
    search.classList.remove("hidden");
})

const app = new App(root,inputField);