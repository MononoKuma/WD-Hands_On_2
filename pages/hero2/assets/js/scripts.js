document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.display = "none";
        document.body.style.overflow = "auto"; // Allow scrolling after loading
    }, 2000); // Set timeout duration to 2 seconds
});