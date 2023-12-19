// Preload images to ensure smooth transitions
$(document).ready(function(){
    $('#myCarousel').carousel('pause'); // Pause carousel to prevent flickering

    // Preload images
    var images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    for (var i = 0; i < images.length; i++) {
      var img = new Image();
      img.src = images[i];
    }

    // Restart carousel after images are preloaded
    $('#myCarousel').carousel('cycle');
  });

  function animateCounter(targetNumber, duration, counterId) {
    const counterElement = document.getElementById(counterId);
    const increment = (targetNumber / duration) * 100; // Calculate the increment based on percentage

    let currentNumber = 0;

    const intervalId = setInterval(() => {
      currentNumber += increment;
      counterElement.textContent = Math.floor(currentNumber);

      if (currentNumber >= targetNumber) {
        clearInterval(intervalId);
        counterElement.textContent = targetNumber;
      }
    }, 100);
  }

  // Call the animateCounter function for each counter with your target number and duration
  animateCounter(100, 2000, 'counter1');
  animateCounter(230, 3000, 'counter2');
  animateCounter(210, 2500, 'counter3');
  animateCounter(170, 4000, 'counter4');

// Review-Slider


$('.slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

// Mobile-Mobile-Advance-Filter
$(document).ready(function() {
  // Attach a click event handler to the button
  $('#search').click(function() {
    console.log("done");
    // Add or remove the 'absolutePosition' class on the target element
    $('#search-filter').toggleClass('show');
  });
});