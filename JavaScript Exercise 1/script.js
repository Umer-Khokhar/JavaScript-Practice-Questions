const box = document.getElementById("box");

box.addEventListener("mousemove", e => {
    let boxAllVal = box.getBoundingClientRect();
    let outerVal = e.clientX - boxAllVal.left
    
    if (outerVal < boxAllVal.width/2) {
        let redColor = gsap.utils.mapRange(0, boxAllVal.width/2, 255, 0, outerVal);
        
        gsap.to(box, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4,
        })
    } else {
        let blueColor = gsap.utils.mapRange(boxAllVal.width/2,boxAllVal.width, 0, 255, outerVal);
        gsap.to(box, {
            backgroundColor: `rgb(0,0,${blueColor})`,
            ease: Power4
        })
    }
})

box.addEventListener("mouseleave", () => {
    gsap.to(box, {
        backgroundColor: `rgba(0, 0, 0, 0)`,
        ease: Power4
    })
})
