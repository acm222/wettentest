// Verwenden Sie addEventListener anstelle von onclick-Attributen
document.addEventListener('DOMContentLoaded', function() {
    // Verwenden Sie touchstart und touchend statt click-Events
    var button = document.querySelector('button');
    button.addEventListener('touchstart', function() {
      scrollToSection('wetten');
    });
    button.addEventListener('click', function() {
      scrollToSection('wetten');
    });
  });
  
  // Verwenden Sie requestAnimationFrame anstelle von setTimeout oder setInterval
  function scrollToSection(id) {
    var section = document.getElementById(id);
    var start = window.pageYOffset;
    var destination = section.getBoundingClientRect().top;
    var startTime = null;
  
    function step(timestamp) {
      if (startTime === null) startTime = timestamp;
      var progress = timestamp - startTime;
      var currentPosition = start + (progress / 1000) * (destination - start);
      window.scrollTo(0, currentPosition);
  
      if (progress < 11000) {
        window.requestAnimationFrame(step);
      }
    }
  
    window.requestAnimationFrame(step);
  }