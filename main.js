//VARIABLES
//Clock hands
let hourHand = document.getElementById("hourHand");
let minuteHand = document.getElementById("minuteHand");
let secondHand = document.getElementById("secondHand");

//GETTING TIME UNITS
const clockTime = () => {
  let d = new Date();
  let s = d.getSeconds() / 60;
  let m = d.getMinutes() / 60;
  let h = d.getHours() / 12;
  //Rotate the hands
  secondHand.style.transform = "rotate(" + s * 360 + "deg)";
  minuteHand.style.transform = "rotate(" + m * 360 + "deg)";
  hourHand.style.transform = "rotate(" + h * 360 + "deg)";
  setInterval(clockTime, 1000);
};

clockTime();
