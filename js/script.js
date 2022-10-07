
// header
$(document).ready(function(){
	fixed_menu = 0;
	$(window).scroll(function(){
		if( $(this).scrollTop() > 70 ){
			if(fixed_menu==0){
				$('#headerwrap_fixed').slideDown(400);
				fixed_menu=1;
			}
		} else {
			if(fixed_menu){
				$('#headerwrap_fixed').slideUp(200);
				fixed_menu=0;
			}
		}
	});
});



// ハンバーガーメニュー
$(function(){
    $('.openbtn1').on('click', function(){
      $('.menu').toggleClass('is-active');
    });
}());


// モーダル
$(function(){
    $(".js-open").click(function(){
        $(".modal-window").fadeIn();
        $("body").addClass("no_scroll");
    });

    $(".close").click(function(){
        $("body").removeClass("no_scroll");
        $(".modal-window").hide();
    });
});



// Tab
$(function(){

    $("#sonota").hide();

    $(".tab-btn1").click(function(){

        $("#sonota").hide();

        $("#news-area").show();

        $(".current").removeClass("current");

        $(this).addClass("current");

        return false;
    });

    $(".tab-btn2").click(function(){

        $("#news-area").hide();

        $("#sonota").show();

        $(".current").removeClass("current");

        $(this).addClass("current");

        return false;
    });

});