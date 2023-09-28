
function ValidationForm() {
    var name = document.getElementById("your-name").value;
    var email = document.getElementById("email").value
    var interest = document.getElementById("interest").value

    if (name != "" && email!="" && interest !="") {
        return true;
    }else{
        alert('Anda harus mengisi data dengan lengkap !');
    }
}

const carouselSlides = document.querySelectorAll(".slide");
let currentIndex = 0;
let interval = 3000;

function nextSlide() {
    carouselSlides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % carouselSlides.length;
    carouselSlides[currentIndex].classList.add('active');
}

function startSlide() {
    setInterval(nextSlide, interval);
}

(function() {
    startSlide()
})()
