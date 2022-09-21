 //scroll links
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.intro').addEventListener('click', function(event) {
      event.preventDefault();
      window.scrollTo({
          top: document.querySelector('#about').offsetTop,
          behavior: 'smooth'
      })
      return false;
  })

    document.querySelector('.projects').addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: document.querySelector('#projects').offsetTop,
            behavior: 'smooth'
        })
        return false;
    })

    document.querySelector('.about').addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: document.querySelector('#about').offsetTop,
            behavior: 'smooth'
        })
        return false;
    })

    document.querySelector('.introArrow').addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: document.querySelector('#projects').offsetTop,
            behavior: 'smooth'
        })
        return false;
    })
});

(function() {
  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
    
    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
    /**
     * Porfolio isotope and filter
     */
     window.addEventListener('load', () => {
        let portfolioContainer = select('#portfolio-grid');
        if (portfolioContainer) {
          let portfolioIsotope = new Isotope(portfolioContainer, {
            itemSelector: '.item',
          });
    
          let portfolioFilters = select('#filters a', true);
    
          on('click', '#filters a', function(e) {
            e.preventDefault();
            portfolioFilters.forEach(function(el) {
              el.classList.remove('active');
            });
            this.classList.add('active');
    
            portfolioIsotope.arrange({
              filter: this.getAttribute('data-filter')
            });
            portfolioIsotope.on('arrangeComplete', function() {
              AOS.refresh()
            });
          }, true);
        }
    
      });
    
    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      })
    });
  
  })()

// typewriter effect
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString("Hi, I'm <span style='color: #6780C3'>Amanda Chen</span>.")
    .pauseFor(1500)
    .typeString(" I'm a <span style='color:#FFC300'>data visualization designer</span>.")
    .pauseFor(2500)
    .deleteChars(29)
    .pauseFor(200)
    .typeString('<span style="color: #E0692E"> developer</span>.')
    .pauseFor(2500)
    .deleteChars(11)
    .pauseFor(200)
    .typeString('<span style="color: #D0B0CF"> storyteller</span>.')
    .pauseFor(2500)
    .start();

