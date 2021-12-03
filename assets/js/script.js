var currentDate = (moment().format('dddd, MM/DD/YYYY'));
console.log("Moment Date: " + currentDate);

document.getElementById('currentDay').innerHTML=currentDate;

var mainContainerEl = document.querySelector('#main-container');

let schHour  = [' 9 am', '10 am', '11 am', '12 pm', ' 1 pm', ' 2 pm', ' 3 pm', ' 4 pm', ' 5 pm'];
let schTask = "Tasks go Here";
let schBtn = "Edit";

var htmlContent = '';
for(let i = 0; i < 9 ; i++){
    htmlContent+= ` <div class="row" id="schedule-list">
                        <div class="hour" id="task-hour" >${schHour[i]}</div>
                        <div class="col" id="task-to-do">${schTask}</div>
                        <div class="saveBtn" id="Edit">${schBtn}</div>
                    </div> `
}
mainContainerEl.innerHTML=htmlContent;



