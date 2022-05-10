(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    
    const countDown = new Date("05/15/2022").getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
            document.getElementById("days").innerText = (Math.floor(distance / (day)))+1;
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("text").style.display = "block";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("btn-segale").classList.remove("disabled");
          }
          //seconds
        }, 0)
    }());