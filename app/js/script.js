let a = document.querySelector(".header__top__search__bar")
let b = document.querySelector(".header__top__search")
let c = document.querySelector(".lupe")


a.addEventListener("focusin", function(){

    b.style.backgroundColor = '#ffffff'
    c.style.fill = "#EE3643"
})
a.addEventListener("focusout", function(){
    b.style.backgroundColor = '#293449'
    c.style.fill = "#ffffff"
})


let categories = document.querySelectorAll(".main__category__first__categories")
let colors = ["#FFBF47", "#3BBCE3", "#DC91D8", "#8ED78F", "#FFC047"]
let count = 0

categories.forEach(element=>{
    element.style.backgroundColor = colors[count]
    count++
})
let buttonCategories = document.querySelectorAll(".main__category__first__categories__tagline")
let buttonColors = ["#FDBD46", "#3ABAE1", "#DA8FD6", "#8CD58D", "#FDBE46"]
count = 0
buttonCategories.forEach(element=>{
    element.style.backgroundColor = buttonColors[count]
    count++
})





// let brands = document.querySelector(".main__popular__brands")
// let i =1
// while(i!=7){
//     let testDiv = document.createElement("DIV")
    
    
//     brands.appendChild(testDiv)
//     i++
// }