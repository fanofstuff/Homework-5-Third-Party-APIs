$(document).ready(function() {
  var hourBlocksArray = $("textarea");

  var updateTime = function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));
    currentHour = moment().format("kk");
    console.log(currentHour);
    for (i = 0; i < hourBlocksArray.length; i++) {
      var dataSetHour = hourBlocksArray[i].dataset.hour;
      console.log(dataSetHour);

      if (dataSetHour < currentHour) {
        hourBlocksArray[i].className += " past";
      } else if (dataSetHour === currentHour) {
        hourBlocksArray[i].className += " present";
      } else if (dataSetHour > currentHour) {
        hourBlocksArray[i].className += " future";
      }
    }
  };

  for (var i = 9; i < hourBlocksArray.length + 9; i++) {
    $("#textArea" + i + "00").val(localStorage.getItem("textArea" + i));
  }

  $("#btn9").on("click", function() {
    localStorage.setItem("textArea9", $("#textArea900").val());
  });

  $("#btn10").on("click", function() {
    localStorage.setItem("textArea10", $("#textArea1000").val());
  });

  $("#btn11").on("click", function() {
    localStorage.setItem("textArea11", $("#textArea1100").val());
  });

  $("#btn12").on("click", function() {
    localStorage.setItem("textArea12", $("#textArea1200").val());
  });

  $("#btn13").on("click", function() {
    localStorage.setItem("textArea13", $("#textArea1300").val());
  });

  $("#btn14").on("click", function() {
    localStorage.setItem("textArea14", $("#textArea1400").val());
  });

  $("#btn15").on("click", function() {
    localStorage.setItem("textArea15", $("#textArea1500").val());
  });

  $("#btn16").on("click", function() {
    localStorage.setItem("textArea16", $("#textArea1600").val());
  });

  $("#btn17").on("click", function() {
    localStorage.setItem("textArea17", $("#textArea1700").val());
  });

  updateTime();
  setInterval(updateTime, 300000);
});
