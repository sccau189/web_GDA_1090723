$(window).scroll(() => {
    var top = $(window).scrollTop();
    var vh = $(window).height();
    
    var bar = $("#fixed-bar");
    
    if (top > vh) bar.addClass("fixed-bar");
    else bar.removeClass("fixed-bar");
  });