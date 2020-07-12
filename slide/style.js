document.addEventListener("DOMContentLoaded", function(){
    var btn = document.querySelectorAll(".next .dot");
    var slide = document.querySelectorAll(".wrapper ul li");

    for(let i = 0; i<btn.length; i++){
        btn[i].addEventListener('click', function(){
            for(let j = 0; j<slide.length; j++){
                slide[j].classList.remove('slide-active');
            }
            var slideId = this.getAttribute('data-target');
            var thisSlide = document.getElementById(slideId);
            thisSlide.classList.add('slide-active');

        });
    }
})