document.addEventListener("DOMContentLoaded", function() {
    var footerHeaders = document.querySelectorAll('.footer-header');
    var media = matchMedia('(max-width: 768px)');

    // Function to handle click event
    function handleClick() {
        var ulElement = this.parentNode; // Using parentNode to get the parent element
        var iconElement = this.querySelector('.icon');
        
        ulElement.classList.contains('h-[32px]') 
        ? (ulElement.classList.remove('h-[32px]'), ulElement.classList.add('h-[95%]')) 
        : (ulElement.classList.remove('h-[95%]'), ulElement.classList.add('h-[32px]'));

        iconElement.classList.toggle('rotate-icon');
    }

    // Initial call to set up event listeners based on initial screen size
    if (media.matches) {
        footerHeaders.forEach(function(footerHeader) {
            footerHeader.addEventListener('click', handleClick);
        });
    }

    // Add event listener for change in media query
    media.addEventListener("change", function(event) {
        if (event.matches) {
            footerHeaders.forEach(function(footerHeader) {
                footerHeader.addEventListener('click', handleClick);
            });
        } else {
            footerHeaders.forEach(function(footerHeader) {
                footerHeader.removeEventListener('click', handleClick);
            });
        }
    });

    
    var carousel1 = document.querySelector('.carousel1');
    var slides = document.querySelectorAll('.slides');

    function updateCarouselWidth() {
        var carouselWidth = carousel1.offsetWidth;

        for (var i = 0; i < slides.length; i++) {
            slides[i].style.width = carouselWidth + 'px';
        }
    }

    function showSlide(index) {
        var carouselWidth = carousel1.offsetWidth;
        var slideWidth = document.querySelector('.slides').offsetWidth;
       console.log(slideWidth);
        carousel1.style.transform = `translateX(-${index * carouselWidth}px)`;
    }

    // Add event listeners to the radio buttons and call the showSlide function accordingly
    document.getElementById("radio1").addEventListener("click", function() {
        showSlide(0);
    });

    document.getElementById("radio2").addEventListener("click", function() {
        showSlide(1);
    });

    document.getElementById("radio3").addEventListener("click", function() {
        showSlide(2);
    });

    // // Call the function initially to set the width
    // updateCarouselWidth();

    // // Add an event listener for window resize to update the width dynamically
    // window.addEventListener('resize', function() {
    //     updateCarouselWidth();
    // });
    
    

    // Function to check if element is completely out of viewport
    function isElementOutOfViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= window.innerHeight ||
          rect.left >= window.innerWidth ||
          rect.bottom <= 0 ||
          rect.right <= 0
        );
      }
  
      // Function to handle visibility check
      function handleVisibility() {
        var targetElement = document.getElementById('target-element');
        var triggerElement = document.getElementById('trigger-element');
        
        if (isElementOutOfViewport(targetElement)) {
            triggerElement.style.top = '0'; // Show trigger element with transition
      
        } else {
            triggerElement.style.top = '-100px'; // Hide trigger element with transition
            
        }
      }
  
      // Attach scroll event listener to window
      window.addEventListener('scroll', handleVisibility);
      window.addEventListener('resize', handleVisibility); // Handle resize events as well
  
      // Initial check on page load
      window.onload = handleVisibility;
    
    var modal = document.getElementById("myModal");
    var btn = document.querySelector(".play-btn");

    btn.onclick = function() {
        modal.style.display = "block";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    const carousel = document.querySelector(".carousel");
    const arrows = document.querySelectorAll('.buttons button');
    const firstSlide = carousel.querySelectorAll('.slide')[0];
    
    let firstImgWidth = firstSlide.getBoundingClientRect().width;


    arrows.forEach(icon => {
        icon.addEventListener('click', () => {
            console.log(icon.id);
            carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        })
    });


    setInterval(autoScrollCarousel(), 3000);

    
    function autoScrollCarousel() {
        const scrollAmount = firstImgWidth;
        const delay = 3000;
        
        function scroll() {
            carousel.scrollLeft += scrollAmount;
            if (carousel.scrollLeft+1 >= carousel.scrollWidth - carousel.clientWidth) {
              carousel.scrollLeft = 0;
              
            }
        }
        setInterval(scroll, delay);
        
    }

    const container = document.querySelector(".item-container");
    const items = document.querySelectorAll('.item-container > div');
    const text = document.getElementById('text');
    
    const defaultItem = document.getElementById('item3');

    defaultItem.querySelectorAll('div')[1].classList.remove('opacity-0');
    defaultItem.querySelector('div:first-child > img').classList.remove('contrast-[.05]');

    text.innerText = "Flowers always make people better, happier, and more helpful they are medicine for the soul.";

    items.forEach(item => {
        item.addEventListener('click', () => {
    
            items.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelectorAll('div')[1].classList.add('opacity-0', 'opacity-transition');
                    otherItem.querySelector('div:first-child > img').classList.add('contrast-[.05]');
                }
            });

    
            item.querySelectorAll('div')[1].classList.remove('opacity-0', 'opacity-transition');
            item.querySelector('div:first-child > img').classList.remove('contrast-[.05]');

    
            switch (item.id) {
                case 'item1':
                    text.classList.remove('text-transition');
                    text.innerText = "A person growing a garden, if he is growing it organically, is improving a piece of the world.";
                    break;
                case 'item2':
                    text.classList.remove('text-transition');
                    text.innerText = "There is nothing comparable to it, as satisfactory or as thrilling as gathering vegetables one has grown.";
                    break;
                case 'item3':
                    text.classList.add('text-transition');
                    text.innerText = "Flowers always make people better, happier, and more helpful they are medicine for the soul.";
                    break;
                case 'item4':
                    text.classList.remove('text-transition');
                    text.innerText = "Even if I knew that tomorrow, the world would go to pieces, I would still plant my apple tree.";
                    break;
                case 'item5':
                    text.classList.remove('text-transition');
                    text.innerText = "A society grows great when old men plant trees whose shade they know they shall never sit in.";
                    break;
                default:
                    text.classList.add('text-transition');
                    text.innerText = "Flowers always make people better, happier, and more helpful they are medicine for the soul.";
                    break;
            }
        })
    })


    
});