window.onload = function(){

var countDownDate = new Date("Dec 25, 2019 00:00:00").getTime();


var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  if (distance < 0) {
    clearInterval(x);

    if(new Date().getMonth == 12 && (new Date().getDay == 25 || new Date().getDay) == 26){
        document.getElementById("countdown").innerHTML = "Merry Christmas!!!";
    }
    else{
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }


  }
}, 1000);
}