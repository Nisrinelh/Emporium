//Nav bar fixed sticky




let nav = document.getElementById('navbar')

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (
        document.body.scrollTop > 600 ||
        document.documentElement.scrollTop > 600

    ) {
        //fixer la navbar
        nav.classList.add('fixed-top','py-3',)
        nav.style.transition = '3s'


    } else {
        nav.classList.remove('fixed-top','py-3',)
        nav.style.transition = '3s'
    }
}



        
            
			











//Animation carousel
let carousel = document.querySelector("#carousel .row");
let icons = document.querySelectorAll("#carousel i");

const moveCarousel = (pos) => {
   carousel.style.transform = `translateX(${-pos * 33.33}%)`;
};

for (let i = 0; i < icons.length; i++) {
   icons[i].addEventListener("click", () => {
       icons.forEach(element => {
           element.classList.add("far");
           element.classList.remove("fas");
       });
       icons[i].classList.add("fas");
       icons[i].classList.remove("far");
       moveCarousel(i);
   });
};

// carousel.style.transform = translateX(30%) // ne fonctionne pas ?

//Animation pour changer la couleur du body(noir et blanc)

let noir = document.getElementById("noir");
let blanc = document.getElementById("blanc");
let body = document.body

let changeColor = () => {
   body.style.backgroundColor = "grey";
   body.style.transition = "3s";
   nav.style.backgroundColor ="grey"
   nav.classList.remove('bg-white')
   nav.style.transition ='3s'

}
noir.addEventListener("click", changeColor)


let changeColor2 = () => {
   body.style.backgroundColor = "";
   body.style.transition = "3s";
   nav.classList.add('bg-white')
   nav.style.transition ='3s'


}
blanc.addEventListener("click", changeColor2)