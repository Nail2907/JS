var click = document.querySelectorAll('.our')
var sekil = document.querySelectorAll('.saftali')

click.forEach(item => {
    item.addEventListener("click", function () {
        click.forEach(li => { li.classList.remove("active") })
        item.classList.add("active")

        var filter = item.getAttribute("filter")

        sekil.forEach(element => {
            element.style.display = "none";
            if (filter == element.getAttribute('sekilid')) {
                element.style.display = "block"
            }
        })
    })
})