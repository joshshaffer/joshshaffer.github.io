

$(function() {

  // Init ScrollMagic Controller
  var controller = new ScrollMagic.Controller();

  // Animation will be ignored and replaced by scene value in this example
  var tween = TweenMax.to('#letters', 60, {
    left: 1000
  });

  // Create the Scene and trigger when visible
  var scene = new ScrollMagic.Scene({
    triggerElement: '#trigger1',
    offset: 200,
    duration: 800 /* How many pixels to scroll / animate */
  })
  .setTween(tween)
  .addTo(controller);

  // Add debug indicators fixed on right side
  //  scene.addIndicators();


  // Init ScrollMagic Controller
  var controller = new ScrollMagic.Controller();

  // Animation will be ignored and replaced by scene value in this example
  var tween = TweenMax.to('#car', 70, {
    right: 1800
  });

  // Create the Scene and trigger when visible
  var scene = new ScrollMagic.Scene({
    triggerElement: '#trigger2',
    offset: 200,
    duration: 800 /* How many pixels to scroll / animate */
  })
  .setTween(tween)
  .addTo(controller);

  //  scene.addIndicators();


  // Init ScrollMagic Controller
  var controller = new ScrollMagic.Controller();

  // Animation will be ignored and replaced by scene value in this example
  var tween = TweenMax.to('#train', 70, {
    left: 1800
  });

  // Create the Scene and trigger when visible
  var scene = new ScrollMagic.Scene({
    triggerElement: '#trigger3',
    offset: 200,
    duration: 800 /* How many pixels to scroll / animate */
  })
  .setTween(tween)
  .addTo(controller);

  //  scene.addIndicators();


});
