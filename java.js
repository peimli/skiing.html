// Get all the navigation links
const links = document.querySelectorAll("nav a");

// Loop through the links and add an event listener to each one
links.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();

    // Get the data-section attribute of the clicked link
    const sectionId = this.getAttribute("data-section");

    // Get all the sections
    const sections = document.querySelectorAll("section");

    // Loop through the sections and hide them all
    sections.forEach(section => {
      section.style.display = "none";
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = "block";
  });
});