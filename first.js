window.addEventListener('scroll', function() {
    var nav = document.querySelector('.nav');
    nav.style.top = (window.pageYOffset || document.scrollTop) + 'px';
  });
  