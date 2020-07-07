var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

/*anime.timeline({loop: false})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  });
*/


anime.timeline({loop: false})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 1,
    delay: (el, i) => 80 * (i+1)
  }).add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 1500
  }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  });

//lightbox settings
// lightbox.option({
//     disableScrolling:true
// })

//navbar collapse
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

//change background colors on document scroll
function changeBackgrounds(){
    var overlay = $(".overlay");
    var navbar = $(".navbar");
    var brand = $(".navbar-brand");
    overlay.toggleClass('scrolled', $(window).scrollTop() > $(window).height() - 50);
    brand.toggleClass('logo', $(window).scrollTop() > $(window).height() - 50);
    navbar.toggleClass('scrolled', $(window).scrollTop() > $(window).height() - 50);
}

$(function () {
  $(document).ready(function () {
    changeBackgrounds();
    setCopyright();
  });
  $(document).scroll(function () {
    changeBackgrounds();
  });
});

// if navbar is expanded or not
$(window).resize(function() {
  if ($(this).width() < 768) {
    //do something
  }
});

//footer copyright
function setCopyright(){
    $(".copyright span").text("©" + new Date().getFullYear());
}