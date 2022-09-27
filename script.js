window.onload = function(){
    const year = new Date().getFullYear()
    const countDownDate = new Date("Dec 25, " + year + " 00:00:00").getTime();


    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        
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