let query = document.querySelector('.query');
let searchButton =document.querySelector('.searchButton');

searchButton.onclick = function(){
  let url='https://www.google.com/search?q='+query.value;
  window.open(url, '_self');
}
const burger = document.querySelector(".burger");
const navItems = document.querySelector(".nav-items");
const hClass = document.querySelector(".h-class");
const vClass = document.querySelector(".v-class");

burger.addEventListener("click", () => {
  navItems.classList.toggle("active");
  hClass.classList.toggle("active");
  vClass.classList.toggle("active");
});

// Appointment Booking Functionality
const bookAppointmentBtn = document.querySelector(".btn2");

bookAppointmentBtn.addEventListener("click", () => {
  // Implement logic to handle appointment booking (e.g., form submission, validation)
  alert("Appointment booked successfully! We will contact you shortly.");
});

// Visit to Know More Functionality
const visitBtn = document.querySelector(".btn1");

visitBtn.addEventListener("click", () => {
  // Redirect user to a specific page with more information
  window.location.href = "https://ptandme.com/blog/your-health-is-our-top-priority/"; // Replace with the actual URL for the "know more" page
});

// Navigation Bar Functionality
const navLinks = document.querySelectorAll(".nav li");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const href = link.querySelector("a").getAttribute("href");
    const section = document.querySelector(href);

    // Scroll smoothly to the target section
    section.scrollIntoView({ behavior: "smooth" });
  });
});

// Our Services Functionality (Optional)
// You can add functionality to handle clicks on service boxes (e.g., display details in a modal)