const burger = document.getElementsByClassName("burger")[0]
const ul = document.getElementsByClassName("ul")[0]
const line = document.getElementsByClassName("burger_line")
burger.addEventListener("click", () => {
    ul.classList.toggle("ul_transform")
    line[0].classList.toggle("line1_transform")
    line[1].classList.toggle("line2_transform")
    line[2].classList.toggle("line3_transform")
})


gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({ defaults: { ease: "power1.out" } })

tl.to(".plate_img",  {rotate: 360})

ScrollTrigger.create({
    trigger: ".plate_img",
    start: "top 70%",
    end: "top top",
    animation: tl,
    toggleActions: "play none none none", 
    scrub: 0.5
})



window.addEventListener("scroll", () => {
    
    const plate_img = document.getElementsByClassName("plate_img")[0]
    const food1 = document.getElementsByClassName("plate_dish")[0]
    const food2 = document.getElementsByClassName("plate_dish")[1]
    const food3 = document.getElementsByClassName("plate_dish")[2]
    const food4 = document.getElementsByClassName("plate_dish")[3]
    if (plate_img.style.transform >= "translate3d(0px, 0px, 0px) rotate(0deg);" || plate_img.style.transform >= "translate( 0px, 0px) ") {
        food1.classList.remove("img_display")
        food2.classList.add("img_display")
        food3.classList.add("img_display")
        food4.classList.add("img_display")
    }
   
    if (plate_img.style.transform >= "translate3d(0px, 0px, 0px) rotate(90deg);") {
        food1.classList.add("img_display")
        food2.classList.remove("img_display")
        food3.classList.add("img_display")
        food4.classList.add("img_display")
    }
    if (plate_img.style.transform >= "translate3d(0px, 0px, 0px) rotate(180deg);") {
        food1.classList.add("img_display")
        food2.classList.add("img_display")
        food3.classList.remove("img_display")
        food4.classList.add("img_display")
    }
    if (plate_img.style.transform >= "translate3d(0px, 0px, 0px) rotate(270deg);") {
        food1.classList.add("img_display")
        food2.classList.add("img_display")
        food3.classList.add("img_display")
        food4.classList.remove("img_display")
    }
})