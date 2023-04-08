$(document).ready(function(){
    // display design description
    $('#design-sec').click(function(){
        $('#design-desc').toggle();
    });
    // display development description
    $('#dev-sec').click(function(){
        $('#dev-desc').toggle();
    });
    // display product management descriptions
    $('#prod-dev-sec').click(function(){
        $('#prod-dev-desc').toggle();
    });

    // hover on portfolio
    $("#work4").mouseover(function(){
        $("#hover_design1").show();
      }).mouseout(function(){
        $("#hover_design1").hide();
      });

      $("#work3").mouseover(function(){
        $("#hover_design2").show();
      }).mouseout(function(){
        $("#hover_design2").hide();
      });

      $("#work2").mouseover(function(){
        $("#hover_design3").show();
      }).mouseout(function(){
        $("#hover_design3").hide();
      });

      $("#work1").mouseover(function(){
        $("#hover_design4").show();
      }).mouseout(function(){
        $("#hover_design4").hide();
      });

      $("#work5").mouseover(function(){
        $("#hover_design5").show();
      }).mouseout(function(){
        $("#hover_design5").hide();
      });

      $("#work6").mouseover(function(){
        $("#hover_design6").show();
      }).mouseout(function(){
        $("#hover_design6").hide();
      });

      $("#work7").mouseover(function(){
        $("#hover_design7").show();
      }).mouseout(function(){
        $("#hover_design7").hide();
      });

      $("#work8").mouseover(function(){
        $("#hover_design8").show();
      }).mouseout(function(){
        $("#hover_design8").hide();
      });


});