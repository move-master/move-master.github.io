$(document).ready(function(){
   $(".overview-button").addClass("link");
   $("#overview_page").show();
   $("#mtgm_page").hide();
   $("#gsvis_page").hide();
   $("#gssv1_page").hide();
   $("#rour_page").hide();
   $("#gsgip_page").hide();
   $("#gssv2_page").hide();


   $(".overview-button").click(function(){
      $(".overview-button").addClass("link");
      $(".u-24-mtgm-button").removeClass("link")
      $(".u-24-gsvis-button").removeClass("link")
      $(".u-24-gssv1-button").removeClass("link")
      $(".s-25-rour-button").removeClass("link")
      $(".s-25-gsgip-button").removeClass("link")
      $(".s-25-gssv2-button").removeClass("link")
      $("#overview_page").show();
      $("#mtgm_page").hide();
      $("#gsvis_page").hide();
      $("#gssv1_page").hide();
      $("#rour_page").hide();
      $("#gsgip_page").hide();
      $("#gssv2_page").hide();
    });


   $(".u-24-mtgm-button").click(function(){
      $(".overview-button").removeClass("link");
      $(".u-24-mtgm-button").addClass("link")
      $(".u-24-gsvis-button").removeClass("link")
      $(".u-24-gssv1-button").removeClass("link")
      $(".s-25-rour-button").removeClass("link")
      $(".s-25-gsgip-button").removeClass("link")
      $(".s-25-gssv2-button").removeClass("link")
      $("#overview_page").hide();
      $("#mtgm_page").show();
      $("#gsvis_page").hide();
      $("#gssv1_page").hide();
      $("#rour_page").hide();
      $("#gsgip_page").hide();
      $("#gssv2_page").hide();
   });


   $(".u-24-gsvis-button").click(function(){
      $(".overview-button").removeClass("link");
      $(".u-24-mtgm-button").removeClass("link")
      $(".u-24-gsvis-button").addClass("link")
      $(".u-24-gssv1-button").removeClass("link")
      $(".s-25-rour-button").removeClass("link")
      $(".s-25-gsgip-button").removeClass("link")
      $(".s-25-gssv2-button").removeClass("link")
      $("#overview_page").hide();
      $("#mtgm_page").hide();
      $("#gsvis_page").show();
      $("#gssv1_page").hide();
      $("#rour_page").hide();
      $("#gsgip_page").hide();
      $("#gssv2_page").hide();
    });


    $(".u-24-gssv1-button").click(function(){
      $(".overview-button").removeClass("link");
      $(".u-24-mtgm-button").removeClass("link")
      $(".u-24-gsvis-button").removeClass("link")
      $(".u-24-gssv1-button").addClass("link")
      $(".s-25-rour-button").removeClass("link")
      $(".s-25-gsgip-button").removeClass("link")
      $(".s-25-gssv2-button").removeClass("link")
      $("#overview_page").hide();
      $("#mtgm_page").hide();
      $("#gsvis_page").hide();
      $("#gssv1_page").show();
      $("#rour_page").hide();
      $("#gsgip_page").hide();
      $("#gssv2_page").hide();
    });


    $(".s-25-rour-button").click(function(){
      $(".overview-button").removeClass("link");
      $(".u-24-mtgm-button").removeClass("link")
      $(".u-24-gsvis-button").removeClass("link")
      $(".u-24-gssv1-button").removeClass("link")
      $(".s-25-rour-button").addClass("link")
      $(".s-25-gsgip-button").removeClass("link")
      $(".s-25-gssv2-button").removeClass("link")
      $("#overview_page").hide();
      $("#mtgm_page").hide();
      $("#gsvis_page").hide();
      $("#gssv1_page").hide();
      $("#rour_page").show();
      $("#gsgip_page").hide();
      $("#gssv2_page").hide();
    });


    $(".s-25-gsgip-button").click(function(){
      $(".overview-button").removeClass("link");
      $(".u-24-mtgm-button").removeClass("link")
      $(".u-24-gsvis-button").removeClass("link")
      $(".u-24-gssv1-button").removeClass("link")
      $(".s-25-rour-button").removeClass("link")
      $(".s-25-gsgip-button").addClass("link")
      $(".s-25-gssv2-button").removeClass("link")
      $("#overview_page").hide();
      $("#mtgm_page").hide();
      $("#gsvis_page").hide();
      $("#gssv1_page").hide();
      $("#rour_page").hide();
      $("#gsgip_page").show();
      $("#gssv2_page").hide();
    });


    $(".s-25-gssv2-button").click(function(){
      $(".overview-button").removeClass("link");
      $(".u-24-mtgm-button").removeClass("link")
      $(".u-24-gsvis-button").removeClass("link")
      $(".u-24-gssv1-button").removeClass("link")
      $(".s-25-rour-button").removeClass("link")
      $(".s-25-gsgip-button").removeClass("link")
      $(".s-25-gssv2-button").addClass("link")
      $("#overview_page").hide();
      $("#mtgm_page").hide();
      $("#gsvis_page").hide();
      $("#gssv1_page").hide();
      $("#rour_page").hide();
      $("#gsgip_page").hide();
      $("#gssv2_page").show();
    });
});
