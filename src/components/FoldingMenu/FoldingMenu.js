const arrows = document.querySelectorAll(".folding-menu-arrow")
const allArrows = Array.from(arrows)
const descriptionMenu = document.querySelectorAll(".folding-menu-second-section")
const allDescriptionMenu = Array.from(descriptionMenu)
// const descriptionText = document.querySelector(".folding-menu-description")
// const allDescriptionText = Array.from(descriptionText)

function scrollFoldingMenu() {
    for (let i = 0; i < allArrows.length; i++) {
        let up = true
        allArrows[i].addEventListener("click", function() {
            if (up === true) {
                allDescriptionMenu[i].style.height = "120px"
                allArrows[i].style.transform = "rotate(-180deg)" 
                // descriptionText[i].style.transform = "translateY(0px)"
                up = false
            } else {
                allDescriptionMenu[i].style.height = "0px"
                allArrows[i].style.transform = "rotate(0deg)" 
                // descriptionText[i].style.transform = "translateY(-80px)"
                up = true
            }
        })
    }
}

scrollFoldingMenu()