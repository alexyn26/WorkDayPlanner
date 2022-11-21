$(document).ready(function () {


    // DISPLAYS DATE
    $('#currentDay').text(moment().format('dddd, MMMM Do'));


    //CLICK EVENT FOR SAVE BUTTON
    $('.saveBtn').on('click', function () {
      // ASSIGNS VALUE AND TIME TO TEXT INPUT AT SPECIFIC TIME
      var reminder = $(this).siblings('.description').val();
      var eventTime = $(this).parent().attr('id');
  
      // SAVES TIME AND VALUE FROM ABOVE INTO LOCAL STORAGE
    
      localStorage.setItem(eventTime, reminder);
  
    
    });
  
    function timeUpdate() {
        //TELLS WHAT CURRENT TIME (HOUR) IT IS

      var currentHour = moment().hours();
  
      //FOR EACH TIME BLOCK LOOP
      $('.time-block').each(function () {
        var blockHour = parseInt($(this).attr('id').split('-')[1]);
  
        // check if we've moved past this time
        //IF TIME HAS PAST TURN TIME BLOCK WHTE
        if (blockHour < currentHour) {
          $(this).addClass('past');
          //IF TIME IS CURRENT TURN TIME BLOCK RED
        } else if (blockHour === currentHour) {
          $(this).removeClass('past');
          $(this).addClass('present');
          //IF TIME IS FUTURE TURN TIME BLOCK GREEN
        } else {
          $(this).removeClass('past');
          $(this).removeClass('present');
          $(this).addClass('future');
        }
      });
    }
  
    timeUpdate();
  // DOES TIME NEED TO BE UPDATED?
    var interval = setInterval(timeUpdate, 15000);
  
    // PUTS EVENT FROM LOCAL STORAGE INTO SPECIFIC TIME VALUE
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
    $('#hour-18 .description').val(localStorage.getItem('hour-18'));
    $('#hour-19 .description').val(localStorage.getItem('hour-19'));
    $('#hour-20 .description').val(localStorage.getItem('hour-20'));
    $('#hour-21 .description').val(localStorage.getItem('hour-21'));
    $('#hour-22 .description').val(localStorage.getItem('hour-22'));
    $('#hour-23 .description').val(localStorage.getItem('hour-23'));
    $('#hour-24 .description').val(localStorage.getItem('hour-24'));

  
    // DISPLAYS DATE
    $('#currentDay').text(moment().format('dddd, MMMM Do'));
  });
  