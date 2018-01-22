import '.././vendor/normwheel';
import { resizeDeps } from '.././modules/resize-dependencies';
import { typingText } from '.././modules/typing-text';

// fast temp fix
let scrollBody,
  horizontalScreen,
  callUsBlock,
  $window,
  pause,
  playSpeed,
  currentStep,
  animationStepsQuantity,
  isPlaying,
  easeFunc,
  callUsPngPrefix,
  callUsPng,
  callUsPngDark,
  videoForward,
  bgVideo,
  sideNav,
  sideNavTitles,
  sideNavButton,
  xDown,
  yDown,
  oops,
  menuItemOurApproach,
  menuItemLinkOurWork,
  showContactUs,
  popupButton,
  windowLocation,
  logo
  ;

if (document.getElementsByClassName('home').length > 0) {
  scrollBody = document.getElementById('global-scroll');
  horizontalScreen = document.getElementById('horizontal-screen');
  callUsBlock = document.getElementById('call-us');
  $window = jQuery(window);
  pause;
  playSpeed = .6; // demo tweenMax play speed
  currentStep = 1;
  animationStepsQuantity = 7;
  isPlaying = false;
  easeFunc = Power2.easeOut;
  callUsPngPrefix = "/wp-content/themes/nvetheme/img/tmp-img/"
  callUsPng = callUsPngPrefix + "call-us.png"
  callUsPngDark = callUsPngPrefix + "call-us-dark.png";
  videoForward;
  bgVideo = document.getElementById('hero-video');
  sideNav = document.getElementById('side-navigation');
  sideNavTitles = sideNav.getElementsByClassName('main-navigation_title');
  sideNavButton = sideNav.getElementsByClassName('circle');
  // menu items
  menuItemOurApproach = document.querySelector('.menu-item-our-approach a');
  menuItemLinkOurWork = document.querySelector('.menu-item-link-our-work a');
  showContactUs = document.getElementById('show-contact-us');
  popupButton = document.getElementById('popup-button');
  // text after # in url
  windowLocation = window.location.hash.substr(1);
  logo = document.getElementById('logo').getElementsByTagName('img')[0];
  // steps
  // positions
  xDown = null;
  yDown = null;
  //
  oops = "¯\\_(ツ)_/¯"
}

let text1 = new typingText({
  rotateLetterContainer: document.getElementById('mask_content_wrapper'),
  fontSizeCoefficient: 6.5,
  lineHeight: 1.2,
  gutter: 40,
  text: 'Our work',
  speed: 75,
});
text1.init();

let text2 = new typingText({
  rotateLetterContainer: document.getElementById('our-work-typing'),
  fontSizeCoefficient: 6.5,
  lineHeight: 1.2,
  gutter: 40,
  text: 'Projects',
  speed: 75,
});
text2.init();


function handleTouchStart(evt) {
  xDown = evt.touches[0].clientX;
  yDown = evt.touches[0].clientY;
};

function handleTouchEnd(evt) {
  const callUsOffsetHeight = $('#call-us').offset().top;
  const burgerOffsetHeight = $('#burger').offset().top;
  const offset1 = $('.info-item').offset().top;
  const offset2 = $('#mobile-capabilities').offset().top;
  const offset3 = $('#horizontal_section-clients').offset().top;
  const offset4 = $('#contact').offset().top;
  // call us offset
  if (callUsOffsetHeight < offset1) {
    $("#call-us").removeClass('grey');
  } else if (callUsOffsetHeight > offset1 && callUsOffsetHeight < offset2) {
    $("#call-us").addClass('grey');
  } else if (callUsOffsetHeight > offset2 && callUsOffsetHeight < offset3) {
    $("#call-us").removeClass('grey');
  } else if (callUsOffsetHeight > offset3 && callUsOffsetHeight < offset4) {
    $("#call-us").addClass('grey');
  } else if (callUsOffsetHeight > offset4) {
    $("#call-us").removeClass('grey');
  }
  // burger offset
  if (burgerOffsetHeight < offset1) {
    $("#burger").removeClass('grey');
  } else if (burgerOffsetHeight > offset1 && burgerOffsetHeight < offset2) {
    $("#burger").addClass('grey');
  } else if (burgerOffsetHeight > offset2 && burgerOffsetHeight < offset3) {
    $("#burger").removeClass('grey');
  } else if (burgerOffsetHeight > offset3 && burgerOffsetHeight < offset4) {
    $("#burger").addClass('grey');
  } else if (burgerOffsetHeight > offset4) {
    $("#burger").removeClass('grey');
  }
};

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    /*most significant*/
    if (xDiff > 0) {
      /* left swipe */
    } else {
      /* right swipe */
    }
  } else {
    if (yDiff > 0) {
      /* up swipe */
      // alert('swipe up')

      scrollDetector.masterTimeline.play()
    } else {
      /* down swipe */
      // alert('swipe down')
      scrollDetector.masterTimeline.reverse()
    }
  }
  /* reset values */
  xDown = null;
  yDown = null;
};
//
//
//
export let scrollDetector = {
  fakeScroll: function (event) {
    if (isPlaying == false) { // scroll if animation is not active
      event.preventDefault();
      isPlaying = true; // prevent scroll before animation ends
      let delta = event.deltaY; // wheel direction
      this.srollEffect(delta) // scroll per window;
    }
  },
  masterTimeline: new TimelineMax({ // Timeline that performs global scroll and animation
    // paused: true,
    delay: 0.1,
    repeat: -1,
    repeatDelay: 0.1
    // yoyo: true, // ???? no need ?
  }),
  //
  animationSteps: {
    step1: function () { // Hidin' hero screen , show video
      varTimeLine = new TimelineMax({
        id: 'step1',
        ease: Power2.easeOut
      });
      // Hidin' hero
      //TimeLine.add(function () {
      //   currentStep = 1;
      // })
      //TimeLine.add(function () {
      //   scrollDetector.removeActiveNav();
      //   sideNavButton[0].classList.add('active');
      // })
     TimeLine
        .add("hero")
        .fromTo("#call-us", .3, { alpha: 1 }, { alpha: 0 }, "hero")
        .staggerFromTo("#hero .letters-father .text-line .letter", .1, { alpha: 1 }, { alpha: 0 }, .01, "hero") // disapear hero tie
        .to("#hero-mask", 1, { alpha: 0 }, easeFunc, "hero") // hide mask
        .add(function () {
          currentStep = 1;
          scrollDetector.removeActiveNav();
          sideNavButton[0].classList.add('active');
        })
        // show video
        .set('#hero-video', { 'display': 'none' }) // for reverse animation
        .set('#hero-video', { 'display': 'block', 'z-index': 4 }) // show video container
        .fromTo('#hero-video', .6, { alpha: 0 }, { alpha: 1 }) // show video
        .add(function () { videoForward = true })
        .add(function (params) { // start video
          // console.log("Video forward - " + videoForward)
          if (videoForward == true) {

            bgVideo.play();
            bgVideo.onended = function () {
              if (currentStep == 1) { // play forweard only if stays in a same step with video
                scrollDetector.masterTimeline.play()
              }
            };
          }
        })
      //TimeLine.add(function () {
      //   bgVideo.play();
      // });
     TimeLine.add(function () { videoForward = false });




      //TimeLine.add(function () {
      //   scrollDetector.removeActiveNav();
      //   sideNavButton[0].classList.add('active');
      // });
      //TimeLine.add(function () {
      //   currentStep = 1;
      //   console.log('1 end  ')
      // })
      returnTimeLine;
    },
    step2: function () { // Hide video , scroll to about screen
      varTimeLine = new TimelineMax({
        id: 'step2',
        ease: Power2.easeOut
      });
      // stop video
      // play animation of apearance of horizontal screen
     TimeLine.add(function (params) {
        if (videoForward == true) {
          bgVideo.pause();
          bgVideo.onended = function () {
          };
        }
      })
     TimeLine.to(scrollBody, playSpeed, { yPercent: -20 }, easeFunc)
      //TimeLine.to(scrollBody, playSpeed, { 'transform': 'translateY(-100vh)' }, easeFunc)
     TimeLine.add(function () {
        currentStep = 1;
        scrollDetector.removeActiveNav();
        sideNavButton[0].classList.add('active');
      })
     TimeLine.add("horizont-l-title")
      //TimeLine.fromTo("#horizontal_section-left .title-cont-bg .line-bg", .2, { 'transform': 'translateX(-100vw)' }, { 'transform': 'translateX(0)' }, "horizont-l-title")
     TimeLine.fromTo("#horizontal_section-left .section-bg", .2, { alpha: 0 }, { alpha: 1 }, '-=.6')  // animage bg image
     TimeLine.fromTo("#horizontal_section-left .section-bg", .6, { y: -200 }, { y: 0 }, '-=.5') // animage bg image
     TimeLine.fromTo("#horizontal_section-left .gradient-title_cont-bg .line-bg", .2, { alpha: 0 }, { alpha: 1 })
     TimeLine.to("#call-us", .3, { alpha: 1 }, '-=.5')
     TimeLine.staggerFromTo("#horizontal_section-left .gradient-title_cont-bg .line-bg", .3, { x: -100 }, { x: 0 })
     TimeLine.fromTo("#horizontal_section-left .gradient-title_cont", .4, { alpha: 0 }, { alpha: 1 }, "-=.3")
     TimeLine.to('#side-navigation', .6, { fill: '#939598', stroke: '#939598', color: "#939598" }, "-=.3") // change navigation color
      //TimeLine.staggerFromTo("#horizontal_section-left .title-cont .line span", .3, { backgroundColor: '#fff' }, { backgroundColor: 'transparent' }, 0.05, '-=0.6')
      // .add("left-horizontal")
      // .fromTo('#horizontal_section-left .info-item_title', .6, { alpha: 0, y: 120 }, { alpha: 1, y: 0 }, "left-horizontal")
     TimeLine.add(function () {
        currentStep = 2;
        scrollDetector.removeActiveNav();
        sideNavButton[1].classList.add('active');
      })
     TimeLine.fromTo('#horizontal_section-left .info-item_txt', .6, { alpha: 0, y: 120 }, { alpha: 1, y: 0 }, "left-horizontal")
      returnTimeLine;
    },
    step3: function () { // animate horizontal scroll
      varTimeLine = new TimelineMax({
        id: 'step3',
        ease: Power2.easeOut
      });
      // clear text after typing
     TimeLine.add(function () {
        text1.clear();
      })
     TimeLine.add("slide-from-start")
      // hide about screen content
     TimeLine.add(function () {
        currentStep = 2;
        scrollDetector.removeActiveNav();
        sideNavButton[1].classList.add('active');
      })
     TimeLine.to('#horizontal_section-left .info-item_txt', .6, { alpha: 0 }, "slide-from-start") // apear text
     TimeLine.staggerTo("#horizontal_section-left .gradient-title_cont-bg .line-bg", .3, { x: -100 }) // title backgroun disapear
     TimeLine.to("#horizontal_section-left .gradient-title_cont", .4, { alpha: 0 }, "-=.3")  // title animation
     TimeLine.to("#horizontal_section-left .gradient-title_cont-bg .line-bg", .2, { alpha: 0 }) // title backgroun disapear
      //
     TimeLine.to('#side-navigation', .6, { fill: 'transparent', stroke: 'transparent', color: "transparent" }, "-=.3") // change navigation color
      //
     TimeLine.fromTo(".horizontal-screen .mask-animate, .horizontal-screen .mask_content", 1, { x: '50%' }, { x: '0%' }, "slide-from-start")
     TimeLine.set(".horizontal-screen .mask-animate, .horizontal-screen .mask_content", { 'display': 'none' }, "slide-from-start")
     TimeLine.set(".horizontal-screen .mask-animate, .horizontal-screen .mask_content", { 'display': 'block' }, "slide-from-start")
     TimeLine.to(".horizontal-screen .mask-animate, .horizontal-screen .mask_content", 1, { 'alpha': '1' }, "slide-from-start")
     TimeLine.fromTo(horizontalScreen, 1, { x: '0%' }, { x: '-25%' }, "slide-from-start")
      //
     TimeLine.add("start");
     TimeLine.add(function () { text1.animate(); }, "start")  // typing text
     TimeLine.to(".horizontal-screen .mask-animate", 2, { alpha: 1 }, "start")
      //
     TimeLine.add("slide-from-center")
     TimeLine.to(".horizontal-screen .mask-animate", 1, { x: '-50%' }, "slide-from-center") // animate mask
     TimeLine.to(".horizontal-screen .mask-animate", 1, { alpha: 0 }, "slide-from-center") // animate mask
     TimeLine.add(function () {
        $("#burger,#call-us").toggleClass('grey');
      }, "slide-from-center")
      //
     TimeLine.set(".horizontal-screen .mask-animate, .horizontal-screen .mask_content", { 'display': 'block' }, "slide-from-center+=0.9") // mask content hide
     TimeLine.set(".horizontal-screen .mask-animate, .horizontal-screen .mask_content", { 'display': 'none' }, "slide-from-center+=1") // mask content hide
      // // clear text after typing
      //TimeLine.add(function () {
      //   let spans = document.getElementById('mask_content_wrapper').getElementsByTagName('span');
      //   [].forEach.call(spans, (elem) => {
      //     elem.classList.remove('is-visible');
      //   })
      // })
      // end horizontal scroll
     TimeLine.to(horizontalScreen, 1, { x: '-50%' }, "slide-from-center")
      // call us fade out
     TimeLine.add(function () {
        currentStep = 3;
        scrollDetector.removeActiveNav();
        sideNavButton[2].classList.add('active');
      })
     TimeLine.add("horiz-r-texts", "-=1") // label for capabilities screen
     TimeLine.to('#side-navigation', .6, { fill: '#fff', stroke: '#fff', color: "#fff" }, "-=.6") // change navigation color
     TimeLine.staggerFromTo('#horizontal_section-right .tab', .6, { alpha: 0 }, { alpha: 1 }, .1, "horiz-r-texts") // animate tabs
      //TimeLine.fromTo('#horizontal_section-right .info-item_image', .6,
      //   { alpha: 0, y: 50, height: 200 },
      //   { alpha: 1, y: 0, height: 330 },
      //   "horiz-r-texts"
      // ) // animate image appear
      //TimeLine.fromTo('#horizontal_section-right .info-item_title', .6, { alpha: 0, y: -50 }, { alpha: 1, y: 0 }, "horiz-r-texts")// animate text part
      //TimeLine.fromTo('#horizontal_section-right .info-item_txt', .6, { alpha: 0, y: 50 }, { alpha: 1, y: 0 }, "horiz-r-texts") // animate text part
      //TimeLine.fromTo('#horizontal_section-right .btn', .6, { alpha: 0 }, { alpha: .5 }, "horiz-r-texts") // button animation
      //TimeLine.add("horizontal-btn")
      //TimeLine.to('#horizontal_section-right .btn', .3, { alpha: 1 }, "horizontal-btn") // button animation
      //TimeLine.from('#horizontal_section-right .btn', .3, { y: 25 }, "horizontal-btn") // button animation
      // call us fade in
      returnTimeLine;
    },
    step4: function () { // animate apperance of works
      varTimeLine = new TimelineMax({
        id: 'step4',
        ease: Power2.easeOut
      });
     TimeLine.add("scroll-to-works")
     TimeLine.fromTo('#horizontal_section-right .tabs_container', 1, { y: 0 }, { y: 150 }, "scroll-to-works") // paralax text effect
     TimeLine.add(function () {
        currentStep = 3;
        scrollDetector.removeActiveNav();
        sideNavButton[2].classList.add('active');
      })
     TimeLine.to(scrollBody, playSpeed, { yPercent: -40 }, "scroll-to-works") // scroll screen to works

     TimeLine.set("#works .typing-our-works", { 'display': 'block' })
     TimeLine.add("typing")

     TimeLine.add(function () {
        $("#burger,#call-us").toggleClass('grey');
        text2.clear();
        text2.animate();
        //TimeLine.set({}, {}, "+=4");
        // this.pause();
      })
      //TimeLine.addPause()
     TimeLine.to('#works .works-preview_img', 0.8, { scale: 1 }, "+=0.6"); // apear of works preview
     TimeLine.to('#our-work-typing h3', 0.8, { alpha: 0.6 }, "-=1")
      //TimeLine.to('#works .works-preview', .3, { alpha: 0 });
     TimeLine.set('#works .works-preview', { display: 'none' });

      //TimeLine.from(".work-slider", 1, { scaleX: 0.8, scaleY: 0.8 });


     TimeLine.add(function () {
        currentStep = 4;
        scrollDetector.removeActiveNav();
        sideNavButton[3].classList.add('active');
      })
     TimeLine.add("reveal-work")


     TimeLine.to("#works #our-work-typing", 1, { alpha: 0 }, "reveal-work")
     TimeLine.set("#works .typing-our-works", { 'display': 'block' }, "reveal-work+=1")
     TimeLine.set("#works .typing-our-works", { 'display': 'none' }, "reveal-work+=1")

     TimeLine.fromTo('#works .pretitle', .4, { alpha: 0 }, { alpha: 1 }, "reveal-work") // works slider title apear
     TimeLine.staggerFromTo('#works .pretitle .letter', .4, { alpha: 0 }, { alpha: 1 }, 0) // works slider title apear
     TimeLine.fromTo('#works .title', .4, { alpha: 0 }, { alpha: 1 }, "-=.2") // works slider title apear
     TimeLine.fromTo('#works .subtitle', .4, { alpha: 0 }, { alpha: 1 }, "-=.2") // works slider title apear
     TimeLine.fromTo('#works .btn-group .btn', .2, { alpha: 0, y: 20 }, { alpha: 1, y: 0 }, "-=.2") // animate only buttons on first screen

     TimeLine.add(function () {
        text2.clear();
      })
      //TimeLine.add(function () {
      //   scrollDetector.removeActiveNav();
      //   sideNavButton[3].classList.add('active');
      // })
      //TimeLine.staggerFromTo('#works .btn-group .btn', .2, { alpha: 0, y: 20 }, { alpha: 1, y: 0 }, "+=.5") // animate only buttons on first screen
      returnTimeLine;
    },
    step5: function () { // animate apperance of clients
      varTimeLine = new TimelineMax({
        id: 'step5',
        ease: Power2.easeOut
      });
     TimeLine.add("hideTitle", "=+1")
     TimeLine.add(function () {
        currentStep = 4;
        scrollDetector.removeActiveNav();
        sideNavButton[3].classList.add('active');
      })
     TimeLine.set("#works .typing-we-keep", { 'display': 'block' }, "hideTitle+=1")
     TimeLine.to('#works .pretitle', .4, { alpha: 0 }, "hideTitle") // works animate title dissapear
     TimeLine.to('#works .title', .4, { alpha: 0 }, "hideTitle") // works animate title dissapear
     TimeLine.to('#works .subtitle', .4, { alpha: 0 }, "hideTitle")  // works animate title dissapear
     TimeLine.to('#works .btn-group .btn', .2, { alpha: 0 }, "hideTitle") // animate only buttons on first screen
      //TimeLine.staggerFromTo('#works .btn-group .btn', .2, { alpha: 0, y: 20 }, { alpha: 1, y: 0 }, "+=.5") // animate only buttons on first screen
      //TimeLine.add(function () { companyText.animate(); })
     TimeLine.fromTo('#horizontal-works-clients', playSpeed * 2, { x: '0%' }, { x: '-50%' }) // scroll horizontaly to clients section
     TimeLine.to('#side-navigation', .6, { fill: '#939598', stroke: '#939598', color: "#939598" }, "-=.3") // change navigation color
      //
     TimeLine.fromTo("#clients .gradient-title_cont-bg .line-bg", .2, { alpha: 0 }, { alpha: 1 }) // animate title backgroun
     TimeLine.add(function () {
        currentStep = 5;
        scrollDetector.removeActiveNav();
        sideNavButton[4].classList.add('active');
      })
     TimeLine.add("show-clients")
     TimeLine.staggerFromTo("#clients .gradient-title_cont-bg .line-bg", .3, { x: -100 }, { x: 0 }, "show-clients") // animate title backgroun
     TimeLine.fromTo("#clients .gradient-title_cont", .4, { alpha: 0 }, { alpha: 1 }, "show-clients") // animate title text
     TimeLine.staggerFromTo('#clients .client', .5, { alpha: 0, x: -10 }, { alpha: 1, x: 0 }, .01, "show-clients") // animate appearence of clients
      //TimeLine.fromTo("#clients .clients_bg", .6, { scale: 1.2 }, { scale: 1 }, "-=.2") // animate background image
     TimeLine.add(function () {
        scrollDetector.removeActiveNav();
        sideNavButton[4].classList.add('active');
      })
      returnTimeLine;
    },
    step6: function () { // animate apperance of team
      varTimeLine = new TimelineMax({
        id: 'step6',
        ease: Power2.easeOut
      });
     TimeLine.to(scrollBody, playSpeed, { yPercent: -60 })
     TimeLine.add(function () {
        currentStep = 5;
        scrollDetector.removeActiveNav();
        sideNavButton[4].classList.add('active');
      })
     TimeLine.add("team") // team animation label
     TimeLine.add(function () {
        currentStep = 6;
        scrollDetector.removeActiveNav();
        sideNavButton[5].classList.add('active');
      })
     TimeLine.add(function () {
        $("#burger,#call-us").toggleClass('grey');
      }, "team")
     TimeLine.from('#team .team-grid', .6, { y: 50 }, "team") // slide up team members
     TimeLine.staggerFromTo('#team .title .text-line .letter', .1, { backgroundColor: '#f3f3f3' }, { backgroundColor: 'transparent' }, .01, "team") 
     TimeLine.fromTo('#team .team_txt', .6, { alpha: 0 }, { alpha: 1 }, "-=.2") // animate text
     TimeLine.fromTo('#team .btn', .6, { alpha: 0 }, { alpha: 1 }, "-=.2") // animate button
     TimeLine.staggerFromTo('#team .team-item', .2, { alpha: 0 }, { alpha: 1 }, 0.15, "team") // animate team members
     TimeLine.set('.team-hover-cont', { 'display': 'block' }) // turn on hover zone
      returnTimeLine;
    },
    step7: function () { // animate apperance of contact us
      varTimeLine = new TimelineMax({
        id: 'step7',
        ease: Power2.easeOut
      });
     TimeLine.add(function () {
        currentStep = 6;
        scrollDetector.removeActiveNav();
        sideNavButton[5].classList.add('active');
      })
     TimeLine.to(scrollBody, playSpeed, { yPercent: -80 }) // scroll down page to contact us section
     TimeLine.add(function () {
        $("#burger,#call-us").toggleClass('grey');
      })
     TimeLine.add(function () {
        currentStep = 7;
        scrollDetector.removeActiveNav();
        sideNavButton[6].classList.add('active');
      })
     TimeLine.to('#side-navigation', .6, { fill: '#fff', stroke: '#fff', color: "#fff" }, "-=.3") // change navigation color
     TimeLine.staggerFromTo("#contact .contact_item h2", .3, { alpha: 0, y: -20 }, { alpha: 1, y: 0 }) // stagger animation title
     TimeLine.staggerFromTo("#contact .contact_item p", .3, { alpha: 0, y: -20 }, { alpha: 1, y: 0 }) // stagger animation text

      returnTimeLine;
    },
    step8: function () { // animate apperance of footer
      let footerH = document.getElementsByClassName('main-footer')[0].clientHeight;
      varTimeLine = new TimelineMax({
        id: 'step8',
        ease: Power2.easeOut
      });
     TimeLine.add(function () {
        currentStep = 7;
        scrollDetector.removeActiveNav();
        sideNavButton[6].classList.add('active');
      })
     TimeLine.to(scrollBody, playSpeed, { yPercent: -85 }) // scroll down to footer
     TimeLine.to('#side-navigation', .6, { fill: 'transparent', stroke: 'transparent', color: "transparent" }, "-=.3") // change navigation color
     TimeLine.set('#side-navigation', { "display": 'none' }) // change navigation color
    TimeLine.fromTo('#call-us', .3, { alpha: 1 }, { alpha: 0 })
     TimeLine.set('#call-us', { y: 200 })
     TimeLine.add(function () {
        currentStep = 8;
      })
     TimeLine.staggerFromTo('.footer-col', .3, { x: -20, alpha: 0 }, { x: 0, alpha: 1 }, .1) // stagger footer items appearance
      returnTimeLine;
    },
  },
  buildMasterTimeline: function (params) {
    this.masterTimeline
      .add(function () {
        isPlaying = false;
        this.masterTimeline.pause();
      }.bind(this))
      .add('step1-start')
      .add(this.animationSteps.step1())
      .add('step1-reverse')
      .add(function () {
        isPlaying = false;
        this.masterTimeline.pause();
      }.bind(this))
      .add('step2-start')
      .add(this.animationSteps.step2())
      .add('step2-reverse')
      .add(function () {
        isPlaying = false;
        this.masterTimeline.pause();
      }.bind(this))
      .add('step3-start')
      .add(this.animationSteps.step3())
      .add('step3-reverse')
      .add(function () {
        isPlaying = false;
        this.masterTimeline.pause();
      }.bind(this))
      .add("step4-start")
      .add(this.animationSteps.step4())
      .add("step4-reverse")
      .add(function () {
        isPlaying = false;
        this.masterTimeline.pause();
      }.bind(this))
      .add('step5-start')
      .add(this.animationSteps.step5())
      .add('step5-reverse')
      .add(function () {
        isPlaying = false;
        this.masterTimeline.pause();
      }.bind(this))
      .add('step6-start')
      .add(this.animationSteps.step6())
      .add('step6-reverse')
      .add(function () {
        isPlaying = false;
        this.masterTimeline.pause();
      }.bind(this))
      .add('step7-start')
      .add(this.animationSteps.step7())
      .add('step7-reverse')
      .add(function () {
        isPlaying = false;
        this.masterTimeline.pause();
      }.bind(this))
      .add("step8-start")
      .add(this.animationSteps.step8())
      .add('step8-reverse')
      .add(function () {
        isPlaying = false;
        this.masterTimeline.pause();
      }.bind(this));

    function gsapCustomPause() {
      let that = this;
      return function add(params) {
        isPlaying = false;
        that.masterTimeline.pause()
      }
    }
  },

  srollEffect: function (delta) {

    if (delta > 0 && currentStep < 8) {
      this.masterTimeline.play().timeScale(1)
    }
    else if (delta < 0 && currentStep > 1) {
      this.masterTimeline.reverse().timeScale(1)
    }
    else { isPlaying = false }

  },
  customScrollEvent: function () {
    document.addEventListener('wheel', this.fakeScroll.bind(this))
  },
  scrollAfterLoad: function () {
    console.log(windowLocation);

    switch (windowLocation) {
      case 'our-approach': {
        console.log('gooo1!')
        this.masterTimeline.seek('step2-start', false).play();
        break;
      };

      case 'our-work': {
        console.log('gooo2!')
        this.masterTimeline.seek('step3-start', false).play();
        break;
      };

      case 'contact-us': {
        console.log('gooo3!')
        this.masterTimeline.seek('step7-start', false).play();
        break;
      };

    }
  },
  sideNavigationEvent: function () {
    sideNav.addEventListener("click", function (e) {
      let target = e.target;
      let anchor = target.closest('circle')
      if (Boolean(anchor) == true && isPlaying == false) {
        let goTo = Number(anchor.dataset.goTo);
        console.log(currentStep + " currentStep on click start")
        console.log(isPlaying + " isPlaying on click start")

        if (currentStep > goTo) { // reverse animation
          isPlaying = true;
          // currentStep = goTo;
          if (goTo == 1) {
            console.log('go fiirst')
            this.masterTimeline.seek('step' + (goTo) + '-reverse', false).timeScale(2).reverse();
          }
          else {
            this.masterTimeline.seek('step' + (goTo + 1) + '-reverse', false).timeScale(2).reverse();
          }
          // this.masterTimeline.seek('step' + goTo - 1 + '-start');
          console.log('currentStep manual change to - ' + currentStep)
          // this.masterTimeline.seek('step' + goTo + '-reverse', false).timeScale(2).reverse();
          // this.masterTimeline.seek('step' + (Number(goTo) + 2) + '-start', false).timeScale(2).reverse();
          console.groupEnd()
        }
        else if (currentStep < goTo) { // forward animation // 3 -> 7 // 6-7
          console.log('step' + (goTo) + '-start')
          isPlaying = true;
          // this.masterTimeline.play('step' + goTo + '-start'); // original one
          // currentStep = goTo;
          // console.log('currentStep manual change to - ' + currentStep)
          this.masterTimeline.seek('step' + (goTo) + '-start', false).timeScale(2).play();
          // this.masterTimeline.play();
          console.groupEnd()
        }
        else {
          console.log('u already here ')
        }
        // highlight active nav item
        // this.removeActiveNav();
        // anchor.classList.add('active')
      }
    }.bind(this));
    // main menu: Our Approach
    menuItemOurApproach.addEventListener("click", function (e) {
      e.preventDefault();
      if (currentStep == 2) return;
      if (currentStep > 2)
        this.masterTimeline.seek('step' + (4) + '-start', false).timeScale(2).reverse();
      else
        this.masterTimeline.seek('step' + (2) + '-start', false).timeScale(2).play();
    }.bind(this));
    // main menu: Our work
    menuItemLinkOurWork.addEventListener("click", function (e) {
      e.preventDefault();
      if (currentStep == 3) return;
      if (currentStep > 3)
        this.masterTimeline.seek('step' + (5) + '-start', false).timeScale(2).reverse();
      else
        this.masterTimeline.seek('step' + (3) + '-start', false).timeScale(2).play();
    }.bind(this));
    // mail icon in bottom
    callUsBlock.addEventListener("click", goToContactUs.bind(this));
    // link in footer
    showContactUs.addEventListener("click", goToContactUs.bind(this));
    //button in pop up
    popupButton.addEventListener("click", goToContactUs.bind(this));
    function goToContactUs() { // slide to contac us screen
      // console.log(currentStep);
      // console.log(resizeDeps.vars.isMobile + ' is mobile');
      // console.log('Need isMobile state');
      if (resizeDeps.vars.isMobile == false) {
        // this.masterTimeline.seek('step8-reverse', false).timeScale(2).reverse(); // ask Ivan
        if (currentStep == 7) return;
        if (currentStep > 7)
          // this.masterTimeline.seek('step' + (8) + '-start', false).reverse();
          this.masterTimeline.seek('step8-reverse', false).timeScale(2).reverse();
        else
          this.masterTimeline.seek('step8-start', false).timeScale(2).play();
      }
      else {
        $('html, body').animate({
          scrollTop: $("#contact").offset().top
        }, 800);
      }
      // this.masterTimeline.seek('step' + (7) + '-start', false).timeScale(2).play();
    }

    sideNav.addEventListener("mouseover", function (e) { // Side nav hover circle
      let target = e.target;
      document.getElementById('main-navigation-mask').classList.add('is-active');
      let anchor = target.closest('circle');
      sideNav.classList.add('is-hovered');
      if (anchor) {
        let index = anchor.dataset.index;
        sideNavTitles[index - 1].classList.add('active');
      }
    }.bind(this));
    sideNav.addEventListener("mouseout", function (e) { // Side navigation blur
      let target = e.target;
      let anchor = target.closest('circle')
      document.getElementById('main-navigation-mask').classList.remove('is-active');
      sideNav.classList.remove('is-hovered');
      if (anchor) {
        for (let i = 0; i < sideNavTitles.length; i++) {
          sideNavTitles[i].classList.remove('active');
        }
      }
    }.bind(this));
  },
  removeActiveNav: function () {
    for (let i = 0; i < sideNavButton.length; i++) {
      sideNavButton[i].classList.remove('active');
    }
  },
  switchMechanic: function () {
    let windowWidth = resizeDeps.vars.wWidth;
    let mobileWidth = 1024;
    console.log(windowWidth + " windowWidth")
    if (windowWidth > mobileWidth) {
      console.log('not mobile')
      this.buildMasterTimeline();
    }
    else {
      console.log('mobile')
    }
  },
  init: function () {
    this.switchMechanic();
    this.customScrollEvent();
    this.sideNavigationEvent(); //

    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);
    document.addEventListener('touchend', handleTouchEnd, false);

    window.addEventListener('scroll', function () {
      let windowWidth = resizeDeps.vars.wWidth;
      let mobileWidth = 1024;
      let bodyY = scrollBody.getBoundingClientRect().y;
      if (windowWidth <= mobileWidth) {
        if (-(bodyY) > window.innerHeight) {
          logo.style.transform = "scale(.7)"
        }
        else {
          logo.style.transform = "scale(1)"
        }
      }
    });

    function reinitTimeline() {
      window.addEventListener('resize', function (params) {
        console.log(resizeDeps.vars.footerHeight + " footerHeight in px");
        console.log(scrollDetector.masterTimeline)

      }.bind(this))
    }
    reinitTimeline();

    this.scrollAfterLoad();

  }
}
if (document.getElementsByClassName('home').length > 0) {
  scrollDetector.init();
}
