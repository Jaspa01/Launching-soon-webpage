const countDown = () => {

    const launchDate = new Date("March 15, 2028").getTime();
    const now = new Date().getTime();
    const gap = launchDate - now;

    // TIME
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //CALCULATION 
    const numDay = Math.floor(gap / day);
    const numHour = Math.floor((gap % day) / hour);
    const numMin = Math.floor((gap % hour) / minute);
    const numSec = Math.floor((gap % minute) / second);

    const days = document.getElementById("days").innerText = numDay;
    const hours = document.getElementById("hours").innerText = numHour;
    const minutes = document.getElementById("minutes").innerText = numMin;
    const seconds = document.getElementById("seconds").innerText = numSec;


};
setInterval(countDown, 1000);