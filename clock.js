const dayToString = function (weekDay){
    return days[weekDay-1]
}

const monthToString = function (currentMonth){
    return months[currentMonth]
}

const checkTrailingzero = function(number){
    if (number.length+1<2){
        return "0"+number;
    }
}

// const addSecond=function(number){

// }

const months=["January","February","March","April","May","June","July","August","September","October","November","December"]
const days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

const today=new Date();

const timeDiv=document.createElement("div");
timeDiv.classList.add("timeDiv");
document.body.appendChild(timeDiv);
let timeHtml = `<p class="timeP"><span class="hours">${today.getHours()}</span>:<span class="minutes">${today.getMinutes()}</span> <span class="seconds">${today.getSeconds()}</span></p>`;
timeDiv.innerHTML=timeHtml;


// document.body.innerHTML=timeHtml;
// timeParagraph=document.querySelector(".timeP");

const dateDiv=document.createElement("div");
dateDiv.classList.add("dateDiv");
document.body.appendChild(timeDiv);
let dateHtml = `<p class="dateP"><span>${dayToString(today.getDay())}</span> - <span class="month">${monthToString(today.getMonth())}</span> <span class="date">${today.getDate()}</span></p>`;
dateDiv.innerHTML=dateHtml;
dateParagraph=document.querySelector(".dateP")
timeDiv.insertAdjacentElement("beforeend",dateDiv);




// // document.body.i ("beforeend",dateParagraph)
// // dateParagraph=document.querySelector(".dateP");
console.log(timeDiv)
// console.log("hellp")

// var x = setTimeout(myfonction, 5000); 
// clearTimeout(x);

console.log(09);
