// slideshow
var slideIndex = 0;
showSlides();
function showSlides(){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000);
}

// smoothscroll effect
function smoothScroll(target,duration){
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition;// - startPosition;
  var startTime = null;
  function animation(currentTime){
      if(startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed,startPosition,distance,duration);
      window.scrollTo(0,run);//vertically scroll
      if(timeElapsed < duration) requestAnimationFrame(animation);
  }
  function ease (t, b, c, d) { // loveed it
      t /= d/2;
      if (t < 1) return c/2 * Math.pow( 2, 10 * (t - 1) ) + b;
      t--;
      return c/2 * ( -Math.pow( 2, -10 * t) + 2 ) + b;
  };
  requestAnimationFrame(animation);
}
