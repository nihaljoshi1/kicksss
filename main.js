
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navUl = document.querySelector('.nav-ul');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      navUl.classList.toggle('active');
      const icon = this.querySelector('i');
      if (navUl.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }

  const navLinks = document.querySelectorAll('.nav-ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navUl.classList.remove('active');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  });

  initAnimations();
});

function initAnimations() {
  if (window.innerWidth >= 1025) {
    setupDesktopAnimations();
  } else {
    setupMobileAnimations();
  }
}

function setupDesktopAnimations() {
  
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

  ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 4,
    effects: true,
  });

  let isShortHeight = window.screen.height < 1050;  

  gsap.to('#shoess', {
    scrollTrigger: {
      trigger: '#section2',
      start: 'top bottom',
      end: 'center center',
      scrub: true,
    },
    y: '85vh',
    x: '18vw',
    width: '32vw',
    rotate: 90,
    ease: 'power1.inOut',
    immediateRender: false
  });

  gsap.to('#shoess', {
    scrollTrigger: {
      trigger: '#section3',
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: true,
    },
    y: '250vh',
    x: '0',
    width: '35vw',
    rotate: 35,
    ease: 'power1.inOut',
    immediateRender: false
  });

  gsap.to('#shoess', {
    scrollTrigger: {
      trigger: '#section4',
      start: 'top bottom',
      end: 'center center',
      scrub: true,
    },
    y: '370vh',
    width: '40vw',
    rotate: 0,
    ease: 'power1.inOut',
    immediateRender: false
  });

  gsap.to('#shoess', {
    scrollTrigger: {
      trigger: '#section5',
      start: 'top bottom',
      end: 'center bottom',
      scrub: true,
    },
    y: isShortHeight ? '390vh' : '420vh',
    width: '28vw',
    ease: 'power1.inOut',
    immediateRender: false
  });

  // Content animations
  gsap.from('#section2 .content-wrapper', {
    scrollTrigger: {
      trigger: '#section2',
      start: '-50% bottom',
      end: 'center center',
      scrub: true,
    },
    y: '140%',
    ease: 'power1.inOut',
  });

  gsap.from('#section3 .heading', {
    scrollTrigger: {
      trigger: '#section3',
      start: 'top bottom',
      end: 'center bottom',
      scrub: true,
    },
    y: '140%',
    ease: 'power1.inOut',
  });

  gsap.from('#section4 img', {
    scrollTrigger: {
      trigger: '#section4',
      start: 'top bottom',
      end: 'center center',
      scrub: true,
    },
    width: 0,
    opacity: 0,
    ease: 'power1.inOut',
  });

  gsap.from('#section6 .content-wrapper', {
    scrollTrigger: {
      trigger: '#section6',
      start: 'top bottom',
      end: 'center center',
      scrub: true,
    },
    y: '40%',
    duration: 2,
    ease: 'power1.inOut',
  });

  // Hero section text animation
  let split = new SplitText('#section1 .heading', {
    type: 'chars, words, lines',
    linesClass: 'mask-line'
  });

  gsap.from(split.chars, {
    yPercent: () => gsap.utils.random(-100, 100),
    rotation: () => gsap.utils.random(-30, 30),
    autoAlpha: 0,
    ease: 'back.out(1.5)',
    stagger: {
      amount: 0.5,
      from: 'random'
    },
    duration: 1.5
  });

  gsap.from('#shoess', {
    opacity: 0,
    scale: 0,
    duration: 1,
    delay: 1,
    ease: 'power1.inOut'
  });
}

// Mobile/tablet scroll animations
function setupMobileAnimations() {
  // Animate sections as they come into view
  gsap.utils.toArray('#main > div, #section6, .section7-content').forEach(section => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    });
  });

  // Animate feature cards
  gsap.utils.toArray('.about-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      y: 50,
      opacity: 0,
      duration: 0.6,
      delay: i * 0.1,
      ease: "back.out(1)"
    });
  });

  // Animate products
  gsap.utils.toArray('.product').forEach((product, i) => {
    gsap.from(product, {
      scrollTrigger: {
        trigger: product,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      y: 50,
      opacity: 0,
      duration: 0.6,
      delay: i * 0.1,
      ease: "back.out(1)"
    });
  });

  // Animate contact cards
  gsap.utils.toArray('.contact-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      y: 50,
      opacity: 0,
      duration: 0.6,
      delay: i * 0.1,
      ease: "back.out(1)"
    });
  });
}

window.addEventListener('resize', function() {
  ScrollTrigger.refresh();
  initAnimations();
});