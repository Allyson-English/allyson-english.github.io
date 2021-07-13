
  $( function() {
    $( "#puzzle1" ).draggable();

    $("#puzzle1").mouseup(function() {
      var pos = $( "#puzzle1" ).offset();

      check_position(pos);

      // var key = $( "#puzzlekey" ).offset();

// #puzzlekey


    });
  } );



function check_position(puzzlepiece) {

  var puzzlepiece_l = parseInt(puzzlepiece.left);
  var puzzlepiece_t = parseInt(puzzlepiece.top);

  var key = $( "#puzzlekey" ).offset();

  var key_l = parseInt(key.left);
  var key_t = parseInt(key.top);

  if (puzzlepiece_l-15 <= key_l && puzzlepiece_l+15 >= key_l) {
    if (puzzlepiece_t-15 <= key_t && puzzlepiece_t+15 >= key_t) {

    $(" #puzzletext ").css("background-color", "#ffc978");
    $(" #puzzletext ").attr("href", "https://allyson-english.github.io/viral_load/index");
    $(" #puzzletext ").attr("target", "__blank");

    $(" #puzzlekey ").css("color", "#ffac30");
    $(" #puzzle1 ").css("display", "none");

    $(" #puzzletext ").hover(function() {
      $(" #puzzletext ").css('cursor', 'pointer');
      $(this).css('text-decoration', 'underline');
    });
    $(" #puzzletext ").mouseout(function() {
      $(" #puzzletext ").css('cursor', 'pointer');
      $(this).css('text-decoration', 'none');
    });

    };
  };
};


function check_position_mobile(puzzlepiece) {

  var puzzlepiece_l = parseInt(puzzlepiece.left);
  var puzzlepiece_t = parseInt(puzzlepiece.top);

  var key = $( "#puzzlekey" ).offset();

  var key_l = parseInt(key.left);
  var key_t = parseInt(key.top);

  if (puzzlepiece_l-50 <= key_l && puzzlepiece_l+50 >= key_l) {
    if (puzzlepiece_t-50 <= key_t && puzzlepiece_t+50 >= key_t) {

    $(" #puzzletext ").css("background-color", "#ffc978");
    $(" #puzzletext ").attr("href", "https://allyson-english.github.io/viral_load/index");
    $(" #puzzletext ").attr("target", "__blank");

    $(" #puzzlekey ").css("color", "#ffac30");
    $(" #puzzle1 ").css("display", "none");

    $(" #puzzletext ").hover(function() {
      $(" #puzzletext ").css('cursor', 'pointer');
      $(this).css('text-decoration', 'underline');
    });
    $(" #puzzletext ").mouseout(function() {
      $(" #puzzletext ").css('cursor', 'pointer');
      $(this).css('text-decoration', 'none');
    });

    };
  };
};



  $( function() {
    $( "#puzzle2" ).draggable();
  } );
  $( function() {
    $( "#puzzle3" ).draggable();
  } );
    $( function() {
    $( "#puzzle4" ).draggable();
  } );
  $( function() {
    $( "#puzzle5" ).draggable();
  } );



if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

  $( function() {
      $( "#puzzle1" ).draggable();

          $("#puzzle1").mousedown(function() {
              $(" #puzzle1" ).css("font-size", "1800%");
              });

          $("#puzzle1").mouseup(function() {
              $(" #puzzle1").css("font-size", "500%");
            var pos = $( "#puzzle1" ).offset();
            check_position_mobile(pos);
              });

  });
};



if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {


  $( function() {
      $( "#puzzle2").draggable();

          $("#puzzle2").mousedown(function() {
              $(" #puzzle2").css("font-size", "1800%");
              });

          $("#puzzle2").mouseup(function() {
              $(" #puzzle2").css("font-size", "500%");
              });
  });

};

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {


  $( function() {
      $( "#puzzle3").draggable();

          $("#puzzle3").mousedown(function() {
              $(" #puzzle3").css("font-size", "1800%");
              });

          $("#puzzle3").mouseup(function() {
              $(" #puzzle3").css("font-size", "500%");
              });
  });

};

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {


  $( function() {
      $( "#puzzle4").draggable();

          $("#puzzle4").mousedown(function() {
              $(" #puzzle4").css("font-size", "1800%");
              });

          $("#puzzle4").mouseup(function() {
              $(" #puzzle4").css("font-size", "500%");
              });
  });

};

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {


  $( function() {
      $( "#puzzle5").draggable();

          $("#puzzle5").mousedown(function() {
              $(" #puzzle5").css("font-size", "1800%");
              });

          $("#puzzle5").mouseup(function() {
              $(" #puzzle5").css("font-size", "500%");
              });
  });

};
