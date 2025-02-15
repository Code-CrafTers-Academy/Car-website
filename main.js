// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Select all <section> elements on the page
    const sections = document.querySelectorAll("section");

    // Options for the Intersection Observer
    const options = {
        threshold: 0.5, // Trigger the callback when 50% of the section is visible
    };

    // Create a new Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        // Loop through each entry (section) that is being observed
        entries.forEach((entry) => {
            // Check if the section is currently intersecting (visible in the viewport)
            if (entry.isIntersecting) {
                // If the section is visible, add the "active" class to it
                entry.target.classList.add("active");
            } else {
                // If the section is not visible, remove the "active" class
                entry.target.classList.remove("active");
            }
        });
    }, options); // Pass the options to the observer

    // Loop through all the sections and start observing each one
    sections.forEach((section) => {
        observer.observe(section);
    });
});