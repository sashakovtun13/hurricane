
  $(function(){

 //Центр текста
    let height_txt=($(".test").css("height"))
    $(".test").css("padding-top", "calc(60vh - "+height_txt+"/2");






//Скрол
  
  var ale_n=$(".ale_n");
  var ale_n_b=$(".ale_n_b");
  //ale_n.css("color", "red");
  ale_n_b.css("background", "#C82929");
  var block_2 = $(".block_2").offset();

    // alert(block_2.top)
    // alert(ale_n.top)
    window.addEventListener('scroll', function() {    
    if(ale_n.offset().top+10 > block_2.top){
      ale_n_b.css("background", "#161616");
      ale_n.css("color", "white");
    }
    else{
      ale_n_b.css("background", "#C82929");
      ale_n.css("color", "#000000");
    }
  });


    // alert(
    //   ale_n.top
    // )
   
 







//Плавный скрол
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
   
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');

  });
});

