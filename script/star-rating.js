$(document).ready(function() {
    $(".my-rating-1").starRating({
      initialRating: 4.5,
      disableAfterRate: false,
      readOnly: true,
      onHover: function (currentIndex, currentRating, $el) {
        var $liveRating = $el.closest('.my-rating-container').find('.live-rating1');
        $liveRating.text(currentIndex);
      },
      onLeave: function (currentIndex, currentRating, $el) {
        var $liveRating = $el.closest('.my-rating-container').find('.live-rating1');
        $liveRating.text(currentRating);
      }
    });
  
    var initialRating = $(".my-rating-1").starRating('getRating');
    $('.live-rating1').text(initialRating);
  });
  


  $(document).ready(function() {
    $(".my-rating-2").starRating({
      initialRating: 1,
      disableAfterRate: false,
      readOnly: true,
      onHover: function (currentIndex, currentRating, $el) {
        var $liveRating = $el.closest('.my-rating-container').find('.live-rating2');
        $liveRating.text(currentIndex);
      },
      onLeave: function (currentIndex, currentRating, $el) {
        var $liveRating = $el.closest('.my-rating-container').find('.live-rating2');
        $liveRating.text(currentRating);
      }
    });
  
    var initialRating = $(".my-rating-2").starRating('getRating');
    $('.live-rating2').text(initialRating);
  });



  $(document).ready(function() {
    $(".my-rating-3").starRating({
      initialRating: 3,
      disableAfterRate: false,
      readOnly: true,
      onHover: function (currentIndex, currentRating, $el) {
        var $liveRating = $el.closest('.my-rating-container').find('.live-rating3');
        $liveRating.text(currentIndex);
      },
      onLeave: function (currentIndex, currentRating, $el) {
        var $liveRating = $el.closest('.my-rating-container').find('.live-rating3');
        $liveRating.text(currentRating);
      }
    });
  
    var initialRating = $(".my-rating-3").starRating('getRating');
    $('.live-rating3').text(initialRating);
  });
  
  
  $(document).ready(function() {
    $(".my-rating-4").starRating({
      initialRating: 4,
      disableAfterRate: false,
      readOnly: true,
      onHover: function (currentIndex, currentRating, $el) {
        var $liveRating = $el.closest('.my-rating-container').find('.live-rating4');
        $liveRating.text(currentIndex);
      },
      onLeave: function (currentIndex, currentRating, $el) {
        var $liveRating = $el.closest('.my-rating-container').find('.live-rating4');
        $liveRating.text(currentRating);
      }
    });
  
    var initialRating = $(".my-rating-4").starRating('getRating');
    $('.live-rating4').text(initialRating);
  });
  

  $(document).ready(function() {
    $(".my-rating-5").starRating({
      initialRating: 5,
      disableAfterRate: false,
      readOnly: true,
      onHover: function (currentIndex, currentRating, $el) {
        var $liveRating = $el.closest('.my-rating-container').find('.live-rating5');
        $liveRating.text(currentIndex);
      },
      onLeave: function (currentIndex, currentRating, $el) {
        var $liveRating = $el.closest('.my-rating-container').find('.live-rating5');
        $liveRating.text(currentRating);
      }
    });
  
    var initialRating = $(".my-rating-5").starRating('getRating');
    $('.live-rating5').text(initialRating);
  });



  
  $(document).ready(function() {
    $(".my-rating-6").starRating({
      initialRating: 1,
      disableAfterRate: false,
      readOnly: true,
      onHover: function (currentIndex, currentRating, $el) {
        var $liveRating = $el.closest('.my-rating-container').find('.live-rating6');
        $liveRating.text(currentIndex);
      },
      onLeave: function (currentIndex, currentRating, $el) {
        var $liveRating = $el.closest('.my-rating-container').find('.live-rating6');
        $liveRating.text(currentRating);
      }
    });
  
    var initialRating = $(".my-rating-6").starRating('getRating');
    $('.live-rating6').text(initialRating);
  });



    
  $(document).ready(function() {
    $(".my-rating-7").starRating({
      initialRating: 2,
      disableAfterRate: false,
      readOnly: true,
      onHover: function (currentIndex, currentRating, $el) {
        var $liveRating = $el.closest('.my-rating-container').find('.live-rating7');
        $liveRating.text(currentIndex);
      },
      onLeave: function (currentIndex, currentRating, $el) {
        var $liveRating = $el.closest('.my-rating-container').find('.live-rating7');
        $liveRating.text(currentRating);
      }
    });
  
    var initialRating = $(".my-rating-7").starRating('getRating');
    $('.live-rating7').text(initialRating);
  });



  $(document).ready(function() {
    $(".my-rating-8").starRating({
      initialRating: 3,
      disableAfterRate: false,
      readOnly: true,
      onHover: function (currentIndex, currentRating, $el) {
        var $liveRating = $el.closest('.my-rating-container').find('.live-rating8');
        $liveRating.text(currentIndex);
      },
      onLeave: function (currentIndex, currentRating, $el) {
        var $liveRating = $el.closest('.my-rating-container').find('.live-rating8');
        $liveRating.text(currentRating);
      }
    });
  
    var initialRating = $(".my-rating-8").starRating('getRating');
    $('.live-rating8').text(initialRating);
  });

