(function() {
  var $$, mySlider, ptrContent, view1, view2, view3, view4, zhe;

  zhe = new Framework7();

  $$ = Dom7;

  view1 = zhe.addView("#view-1");

  view2 = zhe.addView("#view-2", {
    dynamicNavbar: true
  });

  view3 = zhe.addView("#view-3");

  view4 = zhe.addView("#view-4");

  mySlider = zhe.slider(".slider-container", {
    speed: 400,
    loop: true,
    autoplay: 3000,
    pagination: ".slider-pagination"
  });

  ptrContent = $$(".pull-to-refresh-content");

  ptrContent.on("refresh", function(e) {
    return setTimeout((function() {
      zhe.pullToRefreshDone();
    }), 2000);
  });

}).call(this);
