var _loadedImages = 0,
  _imageArray = new Array(
    "loading.gif",
    "clicktag.png",
    "backup.png",
    "bullet.png",
    "frame-1.png",
    "frame-2.png",
    "frame-4.png",
    "frame-5.png",
    "pair_mask1.png",
    "single_mask.png",
    "logo.png",
    "logo2.png",
    "logo-lundbexk.png",
    "logo-otsuka.png"
  );
  document.addEventListener("DOMContentLoaded", function() {
    preloadImages();
    function preloadImages() {
      for (var i = 0; i < _imageArray.length; i++) {
        var _tempImage = new Image();
        _tempImage.addEventListener('load', trackProgress);
        _tempImage.src = _imageArray[i];
      }
    }
    function trackProgress() {
      _loadedImages++;
      if (_loadedImages == _imageArray.length) init();
    }
    function init() {
      var css = document.createElement('link');
      css.setAttribute('rel', 'stylesheet');
      css.setAttribute('type', 'text/css');
      css.setAttribute('href', "style.css");
      document.getElementsByTagName('head')[0].appendChild(css);
      setTimeout(initAnimations, 100);
    }
    // customScroll init
    const customScroll = OverlayScrollbars(document.getElementById('isi'), {});
    // global vars
    var _tt = new TimelineMax({ onComplete: initScroll });
    
    function initAnimations() {
      _tt.to('.banner', 0.3, {opacity: 1, ease:Power0.easeOut})
      .to('.frame1-text-wrapper', 0.5, {opacity: 1, ease:Power0.easeOut})
      .to('.frame1', 0.5, {opacity: 0, ease:Power0.easeOut}, '+=1.8')
      .to('.frame2', 0.5, {opacity: 1, ease:Power0.easeOut}, '-=0.5')
      .to('.frame2-text-wrapper', 0.5, {opacity: 1, ease:Power0.easeOut})
      .to('.frame2', 0.5, {opacity: 0, ease:Power0.easeOut}, '+=1.8')
      .to('.frame3', 0.5, {opacity: 1, ease:Power0.easeOut}, '-=0.5')
      .to('.isi-holder', 0.5, {opacity: 1, zIndex: 100, ease:Power0.easeOut}, '-=0.5')
      .to('#clickarea', 0.5, {height: 163, ease:Power0.easeOut}, '-=0.5')
      .to('.logo', 0.5, {opacity: 1, ease:Power0.easeOut})
      .to('.frame3', 0.5, {opacity: 0, ease:Power0.easeOut}, '+=0.8')
      .to('.frame4', 0.5, {opacity: 1, ease:Power0.easeOut})
      .to('.frame4', 0.35, {opacity: 0, ease:Power0.easeOut}, '+=4')
      .to('.frame5', 0.35, {opacity: 1, ease:Power0.easeOut}, '-=0.4')
      .to('.frame5-text-wrapper', 0.5, {opacity: 1, ease:Power0.easeOut}, '+=0.3')
      .to('.frame5-text-wrapper-2', 0.5, {opacity: 1, ease:Power0.easeOut}, '-=0.5')
      .to('.frame5', 1, {opacity: 0, ease:Power0.easeOut}, '+=4')
      .to('.frame6', 0.6, {opacity: 1, ease:Power0.easeOut}, '-=1')
      .to('.border', 0, {display: 'block', ease:Power0.easeOut}, '-=1')
    }
    
     // init scroll after animation
     function initScroll(){
      customScroll.scroll([ 0, 0 ]);
      customScroll.scroll([ 0, "100%" ], 230000, { y : "linear" });
  }
    // stop auto scroll handler
    const scrollHolder = document.getElementById('isi');
    scrollHolder.addEventListener('wheel', function() {
        customScroll.scrollStop();
    })
    

  });


document.getElementById("clickarea").addEventListener("click", function () {
  Enabler.exit('full_exit');
});
document.getElementById("pre_isi_link_full_pi").addEventListener("click", function () {
  Enabler.exit('exit_full_PI');
});
document.getElementById("pre_isi_link_med_guide").addEventListener("click", function () {
  Enabler.exit('exit_med_guide');
});
document.getElementById("medwatch").addEventListener("click", function () {
  Enabler.exit('exit_medwatch');
});
document.getElementById("womensmentalhealth").addEventListener("click", function () {
  Enabler.exit('exit_womensmentalhealth');
});
document.getElementById("medguide").addEventListener("click", function () {
  Enabler.exit('exit_med_guide');
});
document.getElementById("fpi").addEventListener("click", function () {
  Enabler.exit('exit_full_PI');
});
document.getElementById("logo-otsuka").addEventListener("click", function () {
  Enabler.exit('exit_otsuka_logo');
});
document.getElementById("logo-lundbeck").addEventListener("click", function () {
  Enabler.exit('exit_lundbeck_logo');
});
