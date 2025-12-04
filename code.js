AOS.init({ once: true, offset: 120 });

document.addEventListener("DOMContentLoaded", function () {
    const skills = [
        "Graphic Designer",
        "UI/UX Designer",
        "Front-End Developer",
        // "Microsoft Office Specialist",
        // "Artist & Calligrapher"
    ];

    let index = 0;
    let charIndex = 0;
    const typingTarget = document.getElementById("typing-target");

    function typeSkill() {
        if (charIndex < skills[index].length) {
            typingTarget.textContent += skills[index].charAt(charIndex);
            charIndex++;
            setTimeout(typeSkill, 80);
        } else {
            setTimeout(eraseSkill, 1500);
        }
    }

    function eraseSkill() {
        if (charIndex > 0) {
            typingTarget.textContent = skills[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseSkill, 50);
        } else {
            index = (index + 1) % skills.length;
            setTimeout(typeSkill, 200);
        }
    }

    typeSkill();
});

document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".progress-bar span");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const percent = bar.parentElement.getAttribute("data-percent");
        bar.style.width = percent + "%";
        obs.unobserve(bar);
      }
    });
  }, { threshold: 0.5 });

  bars.forEach(bar => observer.observe(bar));
});

// Simple form submit demo
document.querySelector('.contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  alert("Message sent successfully!");
  this.reset();
});

// Newsletter demo submit
document.querySelector('.newsletter-form').addEventListener('submit', function(e){
  e.preventDefault();
  alert("Subscribed successfully!");
  this.reset();
});
