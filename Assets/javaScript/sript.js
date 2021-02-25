var today = moment();
$("#currentDay").text(today.format('dddd, MMMM Do'));

var currentHour = (new Date()).getHours();
console.log(currentHour)
$('.colorcode')
  .each(function(){
    var val = parseInt($(this).prop('id'));
    console.log($(this))
    if(val < currentHour){
      $(this).siblings('textarea').addClass('past');
    }
    else if(val === currentHour){
      $(this).siblings('textarea').addClass('present');
    }else{
      $(this).siblings('textarea').addClass('future');
    }
  });

// var x = 5; //minutes interval
// var times = []; // time array
// var tt = 0; // start time
// var ap = ['a.m.', 'p.m.']; // a.m.- p.m.

// //loop to increment the time and push results in array
// for (var i=0;tt<24*60; i++) {
//   var hh = Math.floor(tt/60); // getting hours of day in 0-24 format
//   var mm = (tt%60); // getting minutes of the hour in 0-55 format
//   times[i] = ("0" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2) + ap[Math.floor(hh/12)]; // pushing data in array in [00:00 - 12:00 AM/PM format]
//   tt = tt + x; // sets the interval for the number added to current time
// }
// console.log(times);

// $(function() {
//   $( "h2 #1a" ).datepicker();
// } );

// $( "h2 #1a" ).datepicker({
//   beforeShowDay: $.datepicker.noWeekends
// });
// $.datepicker.parseDate( "yy-mm-dd", "2007-01-26" );
// $.datepicker.setDefaults({
//   showOn: "both",
//   buttonImageOnly: true,
//   buttonImage: "calendar.gif",
//   buttonText: "Calendar"
// });
// document.ready
// localstorage
// on click