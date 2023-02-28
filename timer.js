let count = 0.0;

let timer = document.createElement("input")
timer.type = "text"
timer.style.color = "white"
timer.id = "timerText"
document.body.appendChild(timer)
timer.style.backgroundColor = "black"
timer.value = "0.0";
timer.style.fontSize = "32px"
timer.style.width = "50%"
timer.style.borderColor = "black"
timer.style.textAlign = "center"

let button1 = document.createElement("button")
button1.onclick = timerClick
button1.textContent = "start"
button1.style.width = "95%"
button1.style.backgroundColor = "white"
button1.style.fontSize = "32px"
document.body.appendChild(button1)

try{
    timer.value = document.cookie.split("timer=")[1].split("expires")[0]
}
catch{
    console.log("timer not found")
}

function timerClick(){
    if(button1.textContent === "start"){
        button1.textContent = "stop"
        count = Number(timer.value)
    }
    else{
        button1.textContent = "start"
    }
}

setInterval(function() {
    if(button1.textContent == "stop"){
        count += 0.1;
        count = Math.round(count*10)
        count /=10
        if(count%1 == 0){
            timer.value = count + ".0"
        }
        else{
            timer.value = count;
        }
    }
}, 100);
