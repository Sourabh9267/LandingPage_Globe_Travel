function btnclk(){
    console.log("Button clicked")
}


tl=gsap.timeline()

tl.fromTo("#bg>img",{
  
    scale:1.25
},{
    scale:1,
    duration:1
})

tl.fromTo("#bg>#overlay",{
   
    x:1600
},{
    x:0,

    duration:1
})

tl.fromTo("#maintext > *",{
    y:-100,
    opacity:0,
    stagger:0.5
},{
    y:0,
    opacity:1,
    stagger:0.2,
    duration:0.5
})


tl.fromTo("#navpart1 > * ",{
    y:-100,
    opacity:0,
   
},{
    y:0,
    opacity:1,
    stagger:0.5,
    duration:0.5
})

tl.fromTo("#navpart2 > * ",{
    y:-100,
    opacity:0,
   
},{
    y:0,
    opacity:1,
    stagger:0.5,
    duration:0.5
})

tl.fromTo("#navpart2 > #plusdiv",{
    y:0
},{
    y:-10
})


tl.fromTo("#leftpart > *",{
    y:-100,
    opacity:0,
    stagger:0.5
},{
    y:0,
    opacity:1,
    stagger:0.2,
    duration:0.5
})


tl.fromTo("#slider",{
    x:100,
    opacity:0,
    
},{
    x:0,
    opacity:1,
    duration:0.2
})

tl.fromTo("#slider > *",{
    x:100,
    opacity:0,
    stagger:0.5
},{
    x:0,
    opacity:1,
    stagger:0.2,
    duration:0.5
})



