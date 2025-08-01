 document.querySelectorAll(`a[href^='#']`).forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scroll({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });