document.addEventListener("DOMContentLoaded", function() {
    let slides = document.querySelector(".slides");
    let progress = document.querySelector(".progres0");
    let prevButton = document.querySelector(".antes");
    let nextButton = document.querySelector(".despues");

    let totalSlides = document.querySelectorAll(".slides img").length;
    let currentSlide = 0;

    function updateProgress() {
        let progressPercentage = (currentSlide + 1) / totalSlides * 100;
        progress.style.width = progressPercentage + "%";
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateProgress();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateProgress();
    }

    // Avanzar al siguiente slide al hacer clic en el botón "next"
    nextButton.addEventListener("click", nextSlide);

    // Retroceder al slide anterior al hacer clic en el botón "prev"
    prevButton.addEventListener("click", prevSlide);

    // Avanzar al siguiente slide cada 3 segundos
    setInterval(nextSlide, 3000);
});
