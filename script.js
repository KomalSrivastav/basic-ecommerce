 $(document).ready(function() {
          $("#st1").hover(function() {
              $(".fa-star").css("color", "orange");
              $("#st1").css("color", "#fb641b");

          });
          $("#st2").hover(function() {
              $(".fa-star").css("color", "orange");
              $("#st1, #st2").css("color", "#fb641b");

          });
          $("#st3").hover(function() {
              $(".fa-star").css("color", "orange")
              $("#st1, #st2, #st3").css("color", "#fb641b");

          });
          $("#st4").hover(function() {
              $(".fa-star").css("color", "orange");
              $("#st1, #st2, #st3, #st4").css("color", "#fb641b");

          });
          $("#st5").hover(function() {
              $(".fa-star").css("color", "orange");
              $("#st1, #st2, #st3, #st4, #st5").css("color", "#fb641b");

          });
  jQuery("#product-caption-slider li").click(function(){
     var x = jQuery(this).attr("data-target");
	 jQuery("#zoom-anchor").attr("href",x);
	 jQuery("#zoom-image").attr("src",x);
	 //jQuery("#zoom-anchor").attr("href",x);
	 //jQuery("#zoom-image").attr("src",x);
	 $('.easyzoom').easyZoom();
  });
        });