
document.querySelector(".hamburguer").addEventListener("click", function () {
    document.querySelector(".container").classList.add("show-menu")
})
document.querySelector(".menu").addEventListener("click", function () {
		document.querySelector(".container").classList.remove("show-menu")
})

