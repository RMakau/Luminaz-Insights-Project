document.addEventListener("DOMContentLoaded", function() {
    const learnMoreButtons = document.querySelectorAll(".learn-more-btn");
    
    learnMoreButtons.forEach(button => {
        button.addEventListener("click", function() {
            const serviceId = this.closest(".service").id;
            window.location.href = `blog.html#${serviceId}`;
        });
    });
});
