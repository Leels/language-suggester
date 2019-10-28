$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();

    var name = $("input#name").val();
    var question1 = parseInt($("input:radio[name=question1]:checked").val());
    var question2 = parseInt($("input:radio[name=question2]:checked").val());
    var question3 = parseInt($("input:radio[name=question3]:checked").val());
    var question4 = parseInt($("input:radio[name=question4]:checked").val());
    var question5 = parseInt($("input:radio[name=question5]:checked").val());
    var question6 = parseInt($("input:radio[name=question6]:checked").val());
    var totalScore = question1 + question2 + question3 + question4 + question5 + question6 ;


    if ((totalScore) <= 18) {
      $(".name").text(name);
      $("#result1").show();
      $("#result2").hide();
      $("#result3").hide();
      $("#result4").hide();
    }
    else if ((totalScore) <= 28) {
      $(".name").text(name);
      $("#result2").show();
      $("#result1").hide();
      $("#result3").hide();
      $("#result4").hide();
    }
    else if ((totalScore) <= 38) {
      $(".name").text(name);
      $("#result3").show();
      $("#result2").hide();
      $("#result1").hide();
      $("#result4").hide();
    }
    else {
      $(".name").text(name);
      $("#result4").show();
      $("#result2").hide();
      $("#result3").hide();
      $("#result1").hide();
    }

    document.getElementById("quiz").reset();

  });
});
