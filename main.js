$(window).scroll(() => {
  var top = $(window).scrollTop();
  var vh = $(window).height();

  var bar = $("#fixed-bar");

  if (top > vh) bar.addClass("fixed-bar");
  else bar.removeClass("fixed-bar");
});

for (let index = 0; index < elements.length; index++) {
  const e = elements[index];
  console.log(index);
  e.onclick = () => {
    var target = e.getAttribute("data-gte-target"); //目標屬性
    var offset = e.getAttribute("data-gte-offset"); //位移屬性