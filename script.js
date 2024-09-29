const endDate = '1 Janurary 2025 12:00 AM';

document.getElementById('endDate').innerText = endDate;

let inputs = document.querySelectorAll('input');

const clock = () => {
    let end = new Date(endDate);
    let now = new Date();
    let difference = (end - now) / 1000; // covert milliseconds into seconds.
    if (difference >= 0){
        inputs[0].value = Math.floor(difference / 86400); // convert second into days.
        inputs[1].value = Math.floor(difference / 3600) % 24; // convert second into hours. 
        inputs[2].value = Math.floor(difference / 60) % 60; // convert seconds into minutes. 
        inputs[3].value = Math.floor(difference) % 60; // this is  a second
    }
        
}
/* 1 days = 24 hours
1 hour = 60 minutes so 24 hour = 1440 minutes
1 minute = 60 seconds so 1440 minutes = 86400 seconds;*/ 

/* 1 hour = 60 minutes
1 minutes = 60 second so 60 minutes = 3600 second.*/

/* 1 Minute = 60 second.*/

/* 1second = 1 second.*/

setInterval(() => {
    clock();
},1000);