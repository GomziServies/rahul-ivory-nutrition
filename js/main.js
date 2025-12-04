
//- 01 --PreLoader---//
//- 02 --Custom Header Sticky---//
//- 03 --Window On Scroll---//
//- 04 --Odometer Counter---//
//- 05 --Magnifique Popup---//
//- 06 --Header Auto Active Class---//
//- 07 --Custom Navbar Header---//
//- 08 --Swipper Slider---//
//- 09 --Custom Reply Box---//
//- 10 --Accordion---//
//- 11 --Dropdown Toggle---//
//- 12 --Current Year---//

$(document).ready(() => {
  "use strict";
     
    //--== Preloader ==--//
    setTimeout(function() {
      $('.preloader').fadeToggle();
    }, 1500);
    //--== Preloader ==--//

    // lenis Scroll Init
    // gsap.registerPlugin(ScrollSmoother); 
    // const lenis = new Lenis();
    // gsap.ticker.add(function (time) {
    //   lenis.raf(time * 400);
    // });
    // gsap.ticker.lagSmoothing(0);
    // ScrollTrigger.update();

    
    //Custom Text Circle
    const texts = document.querySelectorAll(".text, .text2");
    texts.forEach(text => {
      if (text) {
        text.innerHTML = text.innerText
          .split("")
          .map(
            (char, i) => `<span style="display:inline-block; transform:rotate(${i * 14}deg)">${char}</span>`
          )
          .join("");
      } else {
        console.log("print");
      }
    });

    // Click to Scroll Top
    var ScrollTop = $(".scrollToTop");
    $('.scrollToTop').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    });

    // data background
    $("[data-background]").each(function () {
      $(this).css(
        "background-image",
        "url(" + $(this).attr("data-background") + ")"
      );
    });

    //--== Sticky Header ==--//
    $(window).on("scroll", function () {
      
      var fixed_top = $(".header-section, .cmn-fixed");
      if ($(window).scrollTop() > 50) {
        fixed_top.addClass("header-fixed");
      }
      else {
        fixed_top.removeClass("header-fixed");
      }
      // Sticky Header
      if ($(window).scrollTop() > 50) {
        fixed_top.addClass("header-fixed");
      }
      else {
        fixed_top.removeClass("header-fixed");
      }
      // Check Scroll 
      if ($(this).scrollTop() < 600) {
        ScrollTop.removeClass("active");
      } else {
        ScrollTop.addClass("active");
      }

      //Current Years
      if (document.getElementById('year')) {
        document.getElementById('year').innerHTML = new Date().getFullYear();
      }

      //--== Odometer Counter ==--//
      let windowHeight = $(window).height();
      $('.odometer').children().each(function () {
        if ($(this).isInViewport({ "tolerance": windowHeight, "toleranceForLast": windowHeight, "debug": false })) {
          var section = $(this).closest(".counters");
          section.find(".odometer").each(function () {
            $(this).html($(this).attr("data-odometer-final"));
          });
        }
      });
      //--== Odometer Counter ==--//
  
    });

    //--Global SideBar--
    const toggles = document.querySelectorAll(".toggleMain-controls .bar-toggles, .cmn-overlay");
    const sidebar = document.querySelector(".toggleMain-controls .sidebar-wrapper");
    const overlay = document.querySelector(".cmn-overlay");
    toggles.forEach(toggle => {
      toggle.onclick = () => {
        sidebar?.classList.toggle("active");
        overlay?.classList.toggle("active");
      };
    });
    //--Global SideBar--

    //--- Custom Sidebar ---//
    const removeClickElements = document.querySelectorAll(".remove-click");
    const subsideBarMenu = document.querySelector(".subside-barmenu");
    removeClickElements.forEach(element => {
      element.onclick = (e) => {
        subsideBarMenu?.classList.toggle("active");
      };
    });
    //--- Custom Sidebar Start ---//

    //--- Custom Tilt Js Start ---//
    const tilt = document.querySelectorAll(".tilt");
    VanillaTilt.init(tilt, {
      reverse: true,
      max: 15,
      speed: 400,
      scale: 1.01,
      glare: true,
      reset: true,
      perspective: 800,
      transition: true,
      "max-glare": 0.45,
      "glare-prerender": false,
      gyroscope: true,
      gyroscopeMinAngleX: -45,
      gyroscopeMaxAngleX: 45,
      gyroscopeMinAngleY: -45,
      gyroscopeMaxAngleY: 45,
    });
    //--- Custom Tilt Js End ---//

    //--== Aos Animation ==--//
    $(document).ready(function () {
      $('.title').attr({
        "data-aos": "zoom-in",
        "data-aos-duration": "2000"
      });
      
      AOS.init({
        once: true,
      });

      // gsap.registerPlugin(ScrollTrigger);
      
    });
    //--== Aos Animation ==--//

    //--== Nice Select ==--//
    $('select').niceSelect();
    //--== Nice Select ==--//

    //--== Magnigiq Popup Initial ==--//
    $('.popup-video').magnificPopup({
      type: 'iframe'
    });

    $('.popup_img').magnificPopup({
        type:'image',
        gallery:{
            enabled:true
        }
    });
    //--== Magnigiq Popup Initial ==--//

    //--== Custom Navbar Header ==--//
    $('.navbar-toggle-btn').on('click', function () {
      $('.navbar-toggle-item').slideToggle(300);
      $('body').toggleClass('overflow-hidden');
      $(this).toggleClass('open');
    });
    $('.menu-item, .active-button').on('click', function () {
      $(this).siblings("ul").slideToggle(300);
    });
    //--== Custom Navbar Header ==--//

   //---- Shop Grid&List View -----//
    const listViewButton = document.querySelector('.list-view-button');
    const gridViewButton = document.querySelector('.grid-view-button');
    const productItems = document.querySelectorAll('.product-items');
    // Check if the buttons exist on the page
    if (listViewButton && gridViewButton) {
        gridViewButton.classList.add('active');
        listViewButton.onclick = function () {
            if (productItems.length > 0) {
                productItems.forEach(item => {
                    item.classList.add('grid-view-filter');
                    item.classList.remove('list-view-filter');
                });
            }
            gridViewButton.classList.remove('active');
            listViewButton.classList.add('active');
        };
        gridViewButton.onclick = function () {
            if (productItems.length > 0) {
                productItems.forEach(item => {
                    item.classList.add('list-view-filter');
                    item.classList.remove('grid-view-filter');
                });
            }

            // Update active class on buttons
            listViewButton.classList.remove('active');
            gridViewButton.classList.add('active');
        };
    }
    //---- Shop Grid&List View -----//

    //---- CountDown Timer View -----//
    (function () {
      const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
  
      let today = new Date(),
          dd = String(today.getDate()).padStart(2, "0"),
          mm = String(today.getMonth() + 1).padStart(2, "0"),
          yyyy = today.getFullYear(),
          nextYear = yyyy + 2,
          dayMonth = "10/30/",
          birthday = dayMonth + yyyy;
      
      today = mm + "/" + dd + "/" + yyyy;
      if (today > birthday) {
        birthday = dayMonth + nextYear;
      }
      //end
  
      const countDown = new Date(birthday).getTime(),
          x = setInterval(function() {        
            const now = new Date().getTime(),
                  distance = countDown - now;
            
            // Check if the required elements exist before accessing them
            const daysElement = document.getElementById("days"),
                  hoursElement = document.getElementById("hours"),
                  minutesElement = document.getElementById("minutes"),
                  secondsElement = document.getElementById("seconds"),
                  countdownElement = document.getElementById("countdown"),
                  contentElement = document.getElementById("content");
  
            if (daysElement && hoursElement && minutesElement && secondsElement) {
              daysElement.innerText = Math.floor(distance / (day));
              hoursElement.innerText = Math.floor((distance % (day)) / (hour));
              minutesElement.innerText = Math.floor((distance % (hour)) / (minute));
              secondsElement.innerText = Math.floor((distance % (minute)) / second);
            }
  
            //do something later when date is reached
            if (distance < 0) {
              if (countdownElement) countdownElement.style.display = "none";
              if (contentElement) contentElement.style.display = "block";
              clearInterval(x);
            }
            //seconds
          }, 1000); // Update every second
    }());
    //---- CountDown Timer View -----//

    //---- Range Slide -----//
    const minInput = document.querySelector('.min');
    const maxInput = document.querySelector('.max');
    const minLabel = document.querySelector('.min-label');
    const maxLabel = document.querySelector('.max-label');
    const sliderRange = document.querySelector('.slider-range');  
    function updateSlider() {
        let minVal = parseInt(minInput.value);
        let maxVal = parseInt(maxInput.value);

        if (minVal > maxVal) {
            if (this === minInput) {
                maxVal = minVal;
                maxInput.value = maxVal;
            } else {
                minVal = maxVal;
                minInput.value = minVal;
            }
        }

        minLabel.textContent = minVal;
        maxLabel.textContent = maxVal;

        const minPercent = ((minVal - minInput.min) / (minInput.max - minInput.min)) * 100;
        const maxPercent = ((maxVal - minInput.min) / (minInput.max - minInput.min)) * 100;

        sliderRange.style.left = `${minPercent}%`;
        sliderRange.style.width = `${maxPercent - minPercent}%`;
    }
    if (minInput && maxInput) {
        minInput.addEventListener('input', updateSlider);
        maxInput.addEventListener('input', updateSlider);

        updateSlider(); // Initial call to set up the slider
    }
    //---- Range Slide -----//
  
    //--== Swipper SLider Init Area ==--//
    // banner Version1 //
    const bannerversionwrap = new Swiper(".banner-version-wrap", {
      spaceBetween: 0,
      speed: 1200,
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-prevteam",
        prevEl: ".swiper-button-nextteam",
      },
    });

     // Hero9 Product //
     const hero9wrapperproduct = new Swiper(".hero9-wrapper-product", {
      spaceBetween: 0,
      speed: 1200,
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-pre",
      },
      breakpoints: {
        1399: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 19,
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 18,
        },
        400: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        0: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
      },
    });

    // Testimonial 1 //
    const servicewrapper = new Swiper(".testimonial-wrapper2", {
      spaceBetween: 24,
      speed: 1200,
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".pagination-custom1",
      },
      breakpoints: {
        1399: {
          slidesPerView: 4.8,
        },
        991: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        400: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
      },
    });

    // Sponsor Slider //
    const sponsorwrapper = new Swiper(".sponsor-wrapper1", {
      spaceBetween: 16,
      speed: 1200,
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      breakpoints: {
        1399: {
          slidesPerView: 7,
        },
        991: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        400: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        0: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
      },
    });

    // Testimonial4 //
    const testimonialwrap4 = new Swiper(".testimonial-wrap4", {
      spaceBetween: 24,
      speed: 1200,
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      breakpoints: {
        1399: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 19,
        },
        767: {
          slidesPerView: 3,
          spaceBetween: 18,
        },
        575: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
      },
    });

    // Testimonial5 //
    const testimonialwrapper5 = new Swiper(".testimonial-wrapper5", {
      spaceBetween: 24,
      speed: 1200,
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      breakpoints: {
        1399: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 2,
          spaceBetween: 19,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
      },
    });

    // Testimonial-custom //
    const horizontalMycustom = new Swiper(".horizontal-mycustom", {
      spaceBetween: 24,
      speed: 800,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      breakpoints: {
        1399: {
          slidesPerView: 2.2,
        },
        991: {
          slidesPerView: 2,
          spaceBetween: 19,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
        500: {
          slidesPerView: 1.5,
          spaceBetween: 15,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
      },
    });

    // Multi Product6  //
    const productwrapper6 = new Swiper(".product-wrapper6", {
      spaceBetween: 0,
      speed: 1200,
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: ".product-next",
        prevEl: ".product-prev",
      },
    });

    // Multi Product6  //
    const productwrapperstandard = new Swiper(".product-wrapper-standard", {
      spaceBetween: 24,
      speed: 1200,
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: ".product-next",
        prevEl: ".product-prev",
      },
      pagination: {
        el: ".swiper-pagination-product",
      },
      breakpoints: {
        1399: {
          slidesPerView: 3,
        },
        1199: {
          slidesPerView: 3,
          spaceBetween: 19,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 18,
        },
        575: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
      },
    });

    // Multi Product6  //
    const productwrapperstandard2 = new Swiper(".product-wrapper-standard2", {
      spaceBetween: 24,
      speed: 1200,
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: ".product-next",
        prevEl: ".product-prev",
      },
      pagination: {
        el: ".swiper-pagination-product",
      },
      breakpoints: {
        1399: {
          slidesPerView: 4,
        },
        1199: {
          slidesPerView: 4,
          spaceBetween: 19,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 18,
        },
        575: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
      },
    });

    // Authentication Slide1  //
    const authenticationTestimonialWrap = new Swiper(".authentication-testimonial-wrap", {
      spaceBetween: 24,
      slidesPerView: 1,
      loop: true,
      grabCursor: true,
      direction: 'vertical',
      freeMode: true,
      speed: 5000,
      freeModeMomentum: false,
      autoplay: {
        delay: 0,
        disableOnInteraction: true,
      },
      breakpoints: {
        1399: {
          slidesPerView: 2.7,
        },
        1199: {
          slidesPerView: 2.6,
          spaceBetween: 19,
        },
        1000: {
          slidesPerView: 2.5,
          spaceBetween: 18,
        },
        575: {
          slidesPerView: 2.2,
          spaceBetween: 18,
        },
        0: {
          slidesPerView: 2.1,
          spaceBetween: 18,
        },
      },
    });

    // Authentication Slide2  //
    const authenticationTestimonialWrap2 = new Swiper(".authentication-testimonial-wrap2", {
      spaceBetween: 24,
      slidesPerView: 1,
      loop: true,
      grabCursor: true,
      direction: 'vertical',
      freeMode: true,
      speed: 5000,
      freeModeMomentum: false,
      autoplay: {
        delay: 0,
        disableOnInteraction: true,
        reverseDirection: true,
      },
      breakpoints: {
        1399: {
          slidesPerView: 2.7,
        },
        1199: {
          slidesPerView: 2.6,
          spaceBetween: 19,
        },
        1000: {
          slidesPerView: 2.5,
          spaceBetween: 18,
        },
        575: {
          slidesPerView: 2.2,
          spaceBetween: 18,
        },
        0: {
          slidesPerView: 2.1,
          spaceBetween: 18,
        },
      },
    });

    //Shop Details
    var swiper = new Swiper(".mySwiper", {
      loop: true,
      spaceBetween: 5,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
      direction: "vertical",
      breakpoints: {
        0: {
          slidesPerView: 3,
          direction: "horizontal",
          spaceBetween: 5,
        },
        991: {
          slidesPerView: 3,
        },
        1199: {
          slidesPerView: 3,
          spaceBetween: 18,
        }
      },
    });
    var swiper2 = new Swiper(".mySwiper2", {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });
    //Shop Details
  
    //--Follow Wrapper Slider --//
    const explorewrapper = new Swiper(".explore-wrapper", {
      spaceBetween: 24,
      speed: 1400,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-prevteam04",
        prevEl: ".swiper-button-nextteam04",
      },
      breakpoints: {
        1199: {
          slidesPerView: 1,
        },
        991: {
          slidesPerView: 1,
          spaceBetween: 14,
        },
        767: {
          slidesPerView: 1,
          spaceBetween: 14,
        },
        575: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    });

    //--== Custom Comment / Review Reply Box ==--//
    $(".reply").on("click", function () {
      $(this).toggleClass("reply-active");
      $(this).parent().next(".reply-content").slideToggle();
    });
    //--== Custom Comment / Review Reply Box ==--//

    //--== Custom Accordion ==--//
    $('.accordion-single .header-area').on('click', function () {
      if ($(this).closest(".accordion-single").hasClass("active")) {
        $(this).closest(".accordion-single").removeClass("active");
        $(this).next(".content-area").slideUp();
      } else {
        $(".accordion-single").removeClass("active");
        $(this).closest(".accordion-single").addClass("active");
        $(".content-area").not($(this).next(".content-area")).slideUp();
        $(this).next(".content-area").slideToggle();
      }
    });
    //--== Custom Accordion ==--//

    // Custom Tabs
    $(".tablinks .nav-links").each(function () {
      var targetTab = $(this).closest(".singleTab");
      targetTab.find(".tablinks .nav-links").each(function() {
        var navBtn = targetTab.find(".tablinks .nav-links");
        navBtn.click(function(){
          navBtn.removeClass('active');
          $(this).addClass('active');
          var indexNum = $(this).closest("li").index();
          var tabcontent = targetTab.find(".tabContents .tabItem");
          $(tabcontent).removeClass('active');
          $(tabcontent).eq(indexNum).addClass('active');
        });
      });
    });

    // Function to filter items
    function applyFilter(filterItem) {
      var filter = filterItem.data('filter');
      $('.filter-list .filter-links').removeClass('active');
      filterItem.find('.filter-links').addClass('active');
      var singleFilter = filterItem.closest('.singleFilter');
      var tabItem = singleFilter.find('.filterItems');
      var filterTags = filter.split(' ');
      tabItem.find('> div').removeClass('active');
      if (filter === '*') {
        tabItem.find('> div').addClass('active');
      } else {
        tabItem.find('> div').each(function() {
          var itemTags = $(this).data('tag').split(' ');
          for (var i = 0; i < filterTags.length; i++) {
            if (itemTags.includes(filterTags[i])) {
              $(this).addClass('active');
              break;
            }
          }
        });
      }
    }
    $('.filter-item.active').each(function() {
      applyFilter($(this));
    });
    $('.filter-list li').each(function(index) {
        $(this).on('click', function () {
          applyFilter($(this));
        });
    });

    //--== DropDown Toggle ==--//
    $('.dropdown-toggle').dropdown()
    //--== DropDown Toggle ==--//

    // Mouse Follower
    const follower = document.querySelector(".mouse-follower .cursor-outline");
    const dot = document.querySelector(".mouse-follower .cursor-dot");
    window.addEventListener("mousemove", (e) => {
      follower.animate(
        [{
          opacity: 1,
          left: `${e.clientX}px`,
          top: `${e.clientY}px`,
          easing: "ease-in-out"
        }],
        {
          duration: 3000,
          fill: "forwards"
        }
      );
      dot.animate(
        [{
          opacity: 1,
          left: `${e.clientX}px`,
          top: `${e.clientY}px`,
          easing: "ease-in-out"
        }],
        {
          duration: 1500,
          fill: "forwards"
        }
      );
    });

    // Mouse Follower Hide Function
    $("a, button").on('mouseenter mouseleave', function () {
      $('.mouse-follower').toggleClass('hide-cursor');
    });

    var terElement = $('h1, h2, h3, h4, .display-one, .display-two, .display-three, .display-four, .display-five, .display-six');
    $(terElement).on('mouseenter mouseleave', function () {
      $('.mouse-follower').toggleClass('highlight-cursor-head');
      $(this).toggleClass('highlight-cursor-head');
    });
    
    var terElement = $('p');
    $(terElement).on('mouseenter mouseleave', function () {
      $('.mouse-follower').toggleClass('highlight-cursor-para');
      $(this).toggleClass('highlight-cursor-para');
    });
      
    //-- Use Gsap Animation --// 
    // Visible From Right Animation
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let visibleFromRight = entry.target;
          let split_item = new SplitText(visibleFromRight, { type: "chars, words" });
          gsap.from(split_item.chars, { duration: 0.2, x: 15, autoAlpha: 0, stagger: 0.1 });
          observer.unobserve(visibleFromRight);
        }
      });
    }, { threshold: 0.1 }); 
    document.querySelectorAll('.visible-from-right').forEach(element => {
      observer.observe(element);
    });

    // Visible From Right Slowly Animation
    let visibleSlowlyRight = document.querySelectorAll(".visible-slowly-right");
    if ($(visibleSlowlyRight).length > 0) {
      let char_come = gsap.utils.toArray(visibleSlowlyRight);
      char_come.forEach((char_come) => {
        let split_char = new SplitText(char_come, {
          type: "chars, words",
          lineThreshold: 0.5,
        });
        const tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: char_come,
            start: "top 90%",
            end: "bottom 60%",
            scrub: false,
            markers: false,
            toggleActions: "play none none none",
          },
        });
        tl2.from(split_char.chars, {
          duration: 0.8,
          x: 70,
          autoAlpha: 0,
          stagger: 0.03,
        });
      });
    }

    // Visible From Bottom Animation
    let visibleFromBottom = gsap.utils.toArray(".visible-from-bottom");
    visibleFromBottom.forEach(splitArea => {
      const trigger = gsap.timeline({
        scrollTrigger: {
          trigger: splitArea,
          start: 'top 90%',
          end: 'bottom 60%',
          scrub: false,
          markers: false,
        }
      });
      const contentSplitted = new SplitText(splitArea, { type: "words, lines" });
      gsap.set(splitArea, { perspective: 400 });
      contentSplitted.split({ type: "lines" })
      trigger.from(contentSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -75, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
    });

    // Visible Slowly From Bottom Animation 
    const visibleSlowlyBottom = document.querySelectorAll(".visible-slowly-bottom");
    function visibleSlowly() {
      visibleSlowlyBottom.forEach(splitArea => {
        if (splitArea.anim) {
          splitArea.anim.progress(1).kill();
          splitArea.split.revert();
        }
        splitArea.split = new SplitText(splitArea, {
          type: "lines,words,chars",
          linesClass: "split-line"
        });
        splitArea.anim = gsap.from(splitArea.split.chars, {
          scrollTrigger: {
            trigger: splitArea,
            toggleActions: "restart pause resume reverse",
            start: 'top 90%',
          },
          duration: 0.8,
          ease: "circ.out",
          y: 70,
          stagger: 0.02
        });
      });
    }
    ScrollTrigger.addEventListener("refresh", visibleSlowly);
    visibleSlowly();

    // Btn Custom Animation
    // button Vivacity
    let btnVivacity = document.querySelectorAll(".btn-vivacity");
    if (btnVivacity) {
      VanillaTilt.init(btnVivacity, {
        max: 14,
        speed: 2800,
        perspective: 500,
      });
    }

    // Box Style 
    const targetBtn = document.querySelectorAll('.box-style')
    if (targetBtn) {
      targetBtn.forEach((element) => {
        element.addEventListener('mousemove', (e) => {
          const x = e.offsetX + 'px';
          const y = e.offsetY + 'px';
          element.style.setProperty('--x', x);
          element.style.setProperty('--y', y);
        })
      })
    }

     // image right to left 
     gsap.registerPlugin(ScrollTrigger);
     let revealContainers = document.querySelectorAll(".reveal-one");
     revealContainers.forEach((container) => {
     let image = container.querySelector(".reveal-image-one");
     let rts = gsap.timeline({
         scrollTrigger: {
         trigger: container,
         toggleActions: "restart none none reset",
         start: "top 90%",
         end: "top 0%",
         }
     });
     rts.set(container, {
         autoAlpha: 1
     });
     rts.from(container, 1.5, {
         xPercent: 100,
         ease: Power2.out
     });
     rts.from(image, 1.5, {
         xPercent: -100,
         scale: 1.3,
         delay: -1.5,
         ease: Power2.out
     });
    });

    //Reveal SlideTop
    function revealSlideTop() {
      const reveals = document.querySelectorAll(".revealSlideTop");
      const windowHeight = window.innerHeight;
      const elementVisible = 150;
    
      reveals.forEach(reveal => {
        const elementTop = reveal.getBoundingClientRect().top;
    
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add("active");
        } else {
          reveal.classList.remove("active");
        }
      });
    }
    window.addEventListener("scroll", revealSlideTop);
    
    // reveal-fourth
    let revealContainersFourth = document.querySelectorAll(".reveal-fourth");
    revealContainersFourth.forEach((container) => {
      let image = container.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "restart none none reset"
        }
      });
      tl.set(container, { autoAlpha: 1 });
      tl.from(container, 1.5, {
        xPercent: 100,
        ease: Power2.out
      });
      tl.from(image, 1.5, {
        xPercent: -100,
        scale: 1.3,
        delay: -1.5,
        ease: Power2.out
      });
    });
    
    // Increment product count
    const createQuantityControl = (container) => {
      const minusBtn = container.querySelector(".minus");
      const plusBtn = container.querySelector(".plus");
      const inputBox = container.querySelector(".input-box");
      const updateButtonStates = () => {
          const value = parseInt(inputBox.value);
          minusBtn.disabled = value <= 1;
          plusBtn.disabled = value >= parseInt(inputBox.max);
      };
      const decreaseValue = () => {
          let value = parseInt(inputBox.value);
          value = isNaN(value) ? 1 : Math.max(value - 1, 1);
          inputBox.value = value;
          updateButtonStates();
          handleQuantityChange();
      };
      const increaseValue = () => {
          let value = parseInt(inputBox.value);
          value = isNaN(value) ? 1 : Math.min(value + 1, parseInt(inputBox.max));
          inputBox.value = value;
          updateButtonStates();
          handleQuantityChange();
      };
      const handleQuantityChange = () => {
          let value = parseInt(inputBox.value);
          value = isNaN(value) ? 1 : value;
          console.log("Quantity changed:", value);
      };
      updateButtonStates();

      minusBtn.onclick = decreaseValue;
      plusBtn.onclick = increaseValue;
      inputBox.oninput = handleQuantityChange;
    };

    // Apply to multiple quantity containers
    document.querySelectorAll(".quantity").forEach((container) => {
      createQuantityControl(container);
    });
});

