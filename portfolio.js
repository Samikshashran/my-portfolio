// Navigation Menu Toggle
document.getElementById('nav-toggle').addEventListener('click', function() {
    var navList = document.getElementById('nav-list');
    navList.classList.toggle('active');
  });
  
  // Smooth Scrolling for Links
  document.querySelectorAll('.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Image Slider
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  slides[currentSlide].classList.add('active-slide');
  
  function showSlide(index) {
    slides[currentSlide].classList.remove('active-slide');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active-slide');
  }
  
  setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000);
  
  // Contact Form Validation
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const status = document.getElementById('form-status');
  
    if (!name || !email || !message) {
      status.innerText = "All fields are required!";
      status.style.color = "red";
      return;
    }
  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      status.innerText = "Please enter a valid email!";
      status.style.color = "red";
      return;
    }
  
    status.innerText = "Message sent successfully!";
    status.style.color = "green";
    document.getElementById('contactForm').reset();
  });
  
  // Dynamic Portfolio Section
  const portfolioData = [
    { title: "Project 1", description: "This is project 1", image: "image1.jpg" },
    { title: "Project 2", description: "This is project 2", image: "image2.jpg" },
    { title: "Project 3", description: "This is project 3", image: "image3.jpg" }
  ];
  
  function loadPortfolio() {
    const portfolioContainer = document.getElementById('portfolio-container');
    portfolioData.forEach(project => {
      const projectDiv = document.createElement('div');
      projectDiv.classList.add('portfolio-item');
      projectDiv.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      `;
      portfolioContainer.appendChild(projectDiv);
    });
  }
  
  window.onload = loadPortfolio;
  
  // Back to Top Button
  const backToTopButton = document.getElementById('back-to-top');
  
  window.onscroll = function() {
    if (window.scrollY > 200) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  };
  
  backToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  