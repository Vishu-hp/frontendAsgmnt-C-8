let prevbtn = document.getElementById("prevbtn")
let nextbtn = document.getElementById("nextbtn")
let slides = document.getElementsByClassName("img")

let currSlide = 1;

const showSlide = (sld) => {
    if(sld>slides.length){
        currSlide=1;
    }

    if(sld < 1){
        currSlide = slides.length
    }

    for(let i=0;i<slides.length;i++){
        slides[i].style.display = 'none'
    }

    slides[currSlide-1].style.display = 'block'
}

showSlide(1)


prevbtn.addEventListener("click",() => {
    showSlide(currSlide-=1)
})

nextbtn.addEventListener("click",() => {
    showSlide(currSlide+=1)
})

