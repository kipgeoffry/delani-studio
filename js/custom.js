$(document).ready(function(){
    // display design description
    // $('#design-sec').click(function(){
    //     $('#design-desc').toggle();
    // });
    // // display development description
    // $('#dev-sec').click(function(){
    //     $('#dev-desc').toggle();
    // });
    // // display product management description
    // $('#prod-dev-sec').click(function(){
    //     $('#prod-dev-desc').toggle();
    // });

    $('.wwd').click(function() {
        // hide all other descriptions
        $('.what-we-do').not($(this).next()).hide();
        // toggle clicked description
        $(this).next().toggle();
      });



});