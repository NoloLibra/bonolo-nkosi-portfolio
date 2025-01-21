// Animate the title and subtitle
gsap.fromTo(
    ".title",
    { opacity: 0, y: 50 }, // Start state
    { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" } // End state
  );
  
  gsap.fromTo(
    ".subtitle",
    { opacity: 0, y: 50 }, // Start state
    { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.5 } // End state with delay
  );
  