var tl = gsap.timeline();

tl.from(" #nav h2, #nav h4",{
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0.1,
    stagger:0.2,
});
   
tl.from("#heading-content",{
    opacity:0,
    x:-100,
    delay:0.1,
    duration:1,
       
})

tl.from("#image-content",{
    opacity:0,
    x:100,
    delay:0.1,
    duration:1,
       
})
tl.from("#bottom",{
    opacity:0,
    z:100,
    delay:1,
    duration:1,
})