const filterButtons = document.querySelectorAll(".filter-btn");
const healthTopics = document.querySelectorAll(".health-topics li");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove("active"));
        // Add active class to the clicked button
        button.classList.add("active");

        // Filter logic (example: filter by category)
        const filterValue = button.textContent.toLowerCase();
        healthTopics.forEach(topic => {
            if (filterValue === "all" || topic.textContent.toLowerCase().includes(filterValue)) {
                topic.style.display = "block";
            } else {
                topic.style.display = "none";
            }
        });
    });
});