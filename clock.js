const dayToString = function (weekDay){
    return days[weekDay-1]
}

const monthToString = function (currentMonth){
    return months[currentMonth]
}

const checkTrailingzero = function(number){
    if (parseInt(number).toString().length==2){
        return parseInt(number);
    }
    else{
        return "0"+parseInt(number);
    }
}

const tickSecond=function(){
    let today=new Date();
    document.querySelector(".seconds").innerHTML=checkTrailingzero(today.getSeconds());

}

const tickMinute=function(){
    let today=new Date();
    document.querySelector(".minutes").innerHTML=today.getMinutes();
}

const tickHour=function(){
    let today=new Date();
    document.querySelector(".hours").innerHTML=today.getHours();
}

const tickDay=function(){
    let today=new Date();
    document.querySelector(".day").innerHTML=dayToString(today.getDay());
}

const tickMonth=function(){
    let today=new Date();
    document.querySelector(".month").innerHTML=dayToString(today.getMonth());
}

const months=["January","February","March","April","May","June","July","August","September","October","November","December"]
const days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

const today=new Date();

// CREATE TIME DIV
const timeDiv=document.createElement("div");
timeDiv.classList.add("timeDiv");
document.body.appendChild(timeDiv);
let timeHtml = `<p class="timeP">
                <span class="hours">${today.getHours()}</span>
                <span>:</span>
                <span class="minutes">${today.getMinutes()}</span>
                <span class="seconds">${today.getSeconds()}</span>
                </p>`;
timeDiv.innerHTML=timeHtml;

// CREATE DATE DIV
const dateDiv=document.createElement("div");
dateDiv.classList.add("dateDiv");
document.body.appendChild(timeDiv);
let dateHtml = `<p class="dateP"><span class="day">${dayToString(today.getDay())}</span> - <span class="month">${monthToString(today.getMonth())}</span> <span class="date">${today.getDate()}</span></p>`;
dateDiv.innerHTML=dateHtml;
dateParagraph=document.querySelector(".dateP")
timeDiv.insertAdjacentElement("beforeend",dateDiv);

setInterval(function(){
    tickSecond();
    tickMinute();
    tickHour();
}, 1000); 
