var Moment= require('moment-timezone'); // Get access to moment package

var clock= new Moment();  // Set variable for a new time



//console.log(clock.tz("America/New_York").format('h:mm:ss')); // Get current time


function getTime(){

    var t= document.getElementById("inputValue").nodeValue; 
    alert(clock.tz(t).format('h:mm:ss'));
    //return t
}

getTime();











