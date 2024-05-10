gsap.registerPlugin(ScrollTrigger);

function homePageAnim() {
  const tl = gsap.timeline();
  tl.from("#nav-left", {
    y: -50,
    opacity: 0,
    delay: 0.3,
    duration: 0.5,
  });

  tl.from("#nav-right ul li, #nav-right button", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
  });

  tl.from("#hero-left h1", {
    x: -150,
    opacity: 0,
    duration: 0.7,
  });

  tl.from("#hero-left p", {
    x: -50,
    opacity: 0,
    duration: 0.3,
  });

  tl.from("#hero-left button", {
    opacity: 0,
    scale: 0.8,
    duration: 0.5,
  });

  tl.from(
    "#hero-right img",
    {
      opacity: 0,
      scale: 0.8,
      duration: 1,
    },
    "-=1"
  );

  tl.from("#home-page-footer .first-half", {
    x: -300,
    opacity: 0,
    duration: 0.7,
    stagger: true,
  });

  tl.from(
    "#home-page-footer .second-half",
    {
      x: 300,
      opacity: 0,
      stagger: true,
      duration: 0.7,
    },
    "-=.7"
  );
}

function page1Anim() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page-1",
      scroller: "body",
      markers: true,
      start: "top 80%",
      end: "top 0%",
      scrub: 3,
    },
  });

  tl.from("#page-1-intro > h2", {
    x: -30,
    opacity: 0,
    duration: 0.5,
  });
    
  tl.from("#page-1-intro > p", {
    opacity: 0,
    duration: 0.5,
  });
    
      tl.from(".left.top", {
        x: -300,
          duration: 0.5,
        opacity: 0
      }, "sync");
      tl.from(".right.top", {
        x: 300,
          duration: 0.5,
        opacity: 0
      }, "sync");
      
      tl.from(".left.bottom", {
        x: -300,
          duration: 0.5,
        opacity: 0
      }, "sync1");
      tl.from(".right.bottom", {
        x: 300,
          duration: 0.5,
        opacity: 0
      }, "sync1");

    
    
}

// homePageAnim();
page1Anim();
