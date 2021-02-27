var userInput = document.getElementsByClassName('description');
var saveButton = document.getElementsByClassName("savebtn");
var enteredInfo = document.querySelector('textarea')
// Current Day
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


// localstorage
saveButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  var enteredInfo = {
    student: student.value,
    grade: grade.value,
    comment: comment.value.trim()
  };
  
  localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
  renderMessage();
  
  });