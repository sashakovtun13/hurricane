
  $(function(){
    // let height_txt=($(".text_main").css("height"))
    // $(selector).css(margin-top, value);
  });
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
   
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
  });

