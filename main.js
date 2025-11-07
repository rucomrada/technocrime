AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

const heroBackgrounds = [
 './media/01-RESPONSE-972546425874.jpeg?auto=compress&cs=tinysrgb&w=1600',
  './media/HERO-198947329123-510.jpg?auto=compress&cs=tinysrgb&w=1600',
  './media/GLE_7225A.jpg?auto=compress&cs=tinysrgb&w=1600',
  './media/GLE_7322AA.jpg?auto=compress&cs=tinysrgb&w=1600',
  './media/GLE_7153A.jpg?auto=compress&cs=tinysrgb&w=1600',
  './media/LOGOTPS.png?auto=compress&cs=tinysrgb&w=1600'
];

let currentBackgroundIndex = 0;

function rotateHeroBackground() {
  const heroBackground = document.getElementById('heroBackground');
  if (heroBackground) {
    const nextIndex = (currentBackgroundIndex + 1) % heroBackgrounds.length;

    const layer = document.createElement('div');
    layer.className = 'hero-background-layer';
    layer.style.backgroundImage = `url('${heroBackgrounds[nextIndex]}')`;

    heroBackground.appendChild(layer);

    layer.addEventListener('animationend', () => {
      heroBackground.style.backgroundImage = `url('${heroBackgrounds[nextIndex]}')`;
      layer.remove();
      currentBackgroundIndex = nextIndex;
    }, { once: true });
  }
}

function initHeroBackground() {
  const heroBackground = document.getElementById('heroBackground');
  if (heroBackground) {
    heroBackground.style.backgroundImage = `url('${heroBackgrounds[0]}')`;
    setInterval(rotateHeroBackground, 5000);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  initHeroBackground();

  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.style.padding = '0.5rem 0';
      navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
    } else {
      navbar.style.padding = '1rem 0';
      navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
  });

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
      };

      alert('Thank you for your message! We will get back to you shortly.');
      contactForm.reset();
    });
  }

  const applicationForm = document.getElementById('applicationForm');
  if (applicationForm) {
    applicationForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const formData = {
        name: document.getElementById('appName').value,
        email: document.getElementById('appEmail').value,
        phone: document.getElementById('appPhone').value,
        position: document.getElementById('appPosition').value,
        education: document.getElementById('appEducation').value,
        experience: document.getElementById('appExperience').value,
        message: document.getElementById('appMessage').value
      };

      alert('Thank you for your application! Our HR team will contact you soon.');
      applicationForm.reset();

      const modal = bootstrap.Modal.getInstance(document.getElementById('applicationModal'));
      if (modal) {
        modal.hide();
      }
    });
  }

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    });
  });
});






// AOS.init({
//   duration: 1000,
//   once: true,
//   offset: 100
// });

// const heroBackgrounds = [
  // './media/01-RESPONSE-972546425874.jpeg?auto=compress&cs=tinysrgb&w=1600',
  // './media/HERO-198947329123-510.jpg?auto=compress&cs=tinysrgb&w=1600',
  // './media/GLE_7225A.jpg?auto=compress&cs=tinysrgb&w=1600',
  // './media/GLE_7322.jpg?auto=compress&cs=tinysrgb&w=1600',
  // './media/LOGOTPS.png?auto=compress&cs=tinysrgb&w=1600'
// ];

// let currentBackgroundIndex = 0;

// function rotateHeroBackground() {
//   const heroBackground = document.querySelector('.hero-background');
//   if (heroBackground) {
//     heroBackground.classList.add('transition-out');

//     setTimeout(() => {
//       currentBackgroundIndex = (currentBackgroundIndex + 1) % heroBackgrounds.length;
//       heroBackground.style.backgroundImage = `url('${heroBackgrounds[currentBackgroundIndex]}')`;
//       heroBackground.classList.remove('transition-out');
//     }, 800);
//   }
// }

// function initHeroBackground() {
//   const heroBackground = document.querySelector('.hero-background');
//   if (heroBackground) {
//     heroBackground.style.backgroundImage = `url('${heroBackgrounds[0]}')`;
//     setInterval(rotateHeroBackground, 5000);
//   }
// }

// document.addEventListener('DOMContentLoaded', function() {
//   initHeroBackground();

//   const navbar = document.querySelector('.navbar');

//   window.addEventListener('scroll', function() {
//     if (window.scrollY > 50) {
//       navbar.style.padding = '0.5rem 0';
//       navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
//     } else {
//       navbar.style.padding = '1rem 0';
//       navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
//     }
//   });

//   const contactForm = document.getElementById('contactForm');
//   if (contactForm) {
//     contactForm.addEventListener('submit', function(e) {
//       e.preventDefault();

//       const formData = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         phone: document.getElementById('phone').value,
//         service: document.getElementById('service').value,
//         message: document.getElementById('message').value
//       };

//       alert('Thank you for your message! We will get back to you shortly.');
//       contactForm.reset();
//     });
//   }

//   const applicationForm = document.getElementById('applicationForm');
//   if (applicationForm) {
//     applicationForm.addEventListener('submit', function(e) {
//       e.preventDefault();

//       const formData = {
//         name: document.getElementById('appName').value,
//         email: document.getElementById('appEmail').value,
//         phone: document.getElementById('appPhone').value,
//         position: document.getElementById('appPosition').value,
//         education: document.getElementById('appEducation').value,
//         experience: document.getElementById('appExperience').value,
//         message: document.getElementById('appMessage').value
//       };

//       alert('Thank you for your application! Our HR team will contact you soon.');
//       applicationForm.reset();

//       const modal = bootstrap.Modal.getInstance(document.getElementById('applicationModal'));
//       if (modal) {
//         modal.hide();
//       }
//     });
//   }

//   const navLinks = document.querySelectorAll('.nav-link');
//   navLinks.forEach(link => {
//     link.addEventListener('click', function() {
//       const navbarCollapse = document.querySelector('.navbar-collapse');
//       if (navbarCollapse.classList.contains('show')) {
//         navbarCollapse.classList.remove('show');
//       }
//     });
//   });
// });


// AOS.init({
//   duration: 1000,
//   once: true,
//   offset: 100
// });

// document.addEventListener('DOMContentLoaded', function() {
//   const navbar = document.querySelector('.navbar');

//   window.addEventListener('scroll', function() {
//     if (window.scrollY > 50) {
//       navbar.style.padding = '0.5rem 0';
//       navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
//     } else {
//       navbar.style.padding = '1rem 0';
//       navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
//     }
//   });

//   const contactForm = document.getElementById('contactForm');
//   if (contactForm) {
//     contactForm.addEventListener('submit', function(e) {
//       e.preventDefault();

//       const formData = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         phone: document.getElementById('phone').value,
//         service: document.getElementById('service').value,
//         message: document.getElementById('message').value
//       };

//       alert('Thank you for your message! We will get back to you shortly.');
//       contactForm.reset();
//     });
//   }

//   const applicationForm = document.getElementById('applicationForm');
//   if (applicationForm) {
//     applicationForm.addEventListener('submit', function(e) {
//       e.preventDefault();

//       const formData = {
//         name: document.getElementById('appName').value,
//         email: document.getElementById('appEmail').value,
//         phone: document.getElementById('appPhone').value,
//         position: document.getElementById('appPosition').value,
//         education: document.getElementById('appEducation').value,
//         experience: document.getElementById('appExperience').value,
//         message: document.getElementById('appMessage').value
//       };

//       alert('Thank you for your application! Our HR team will contact you soon.');
//       applicationForm.reset();

//       const modal = bootstrap.Modal.getInstance(document.getElementById('applicationModal'));
//       if (modal) {
//         modal.hide();
//       }
//     });
//   }

//   const navLinks = document.querySelectorAll('.nav-link');
//   navLinks.forEach(link => {
//     link.addEventListener('click', function() {
//       const navbarCollapse = document.querySelector('.navbar-collapse');
//       if (navbarCollapse.classList.contains('show')) {
//         navbarCollapse.classList.remove('show');
//       }
//     });
//   });
// });
