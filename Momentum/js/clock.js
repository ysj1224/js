const clock = document.querySelector("#clock");


function getClock(){    
    const date = new Date();
    const hours = makepad(date.getHours());
    const min = makepad(date.getMinutes());
    const sec = makepad(date.getSeconds());
    clock.innerText = `${hours}:${min}:${sec}`;
}

function makepad(time){
    return String(time).padStart(2,"0");
}

getClock();
setInterval(getClock,1000);