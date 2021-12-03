var currentDate = (moment().format('dddd, MM/DD/YYYY'));
console.log("Moment Date: " + currentDate);

document.getElementById('currentDay').innerHTML=currentDate;

var scheduleListEl = document.querySelector('#schedule-list');
var taskHourEl = document.querySelector("#child-left");
var taskToDoEl = document.querySelector('#child-center');
var taskBtnEl = document.querySelector("child-right");

let schHour  = [' 9 am', '10 am', '11 am', '12pm', ' 1 pm', ' 2 pm', ' 3pm', ' 4 pm', ' 5 pm'];
let schTask = "Enter task here";
let schBtn = "Button";


//var toAdd = document.createDocumentFragment();

for (var i = 0; i < schHour.length; i++){
    var parentDiv = document.createElement('div');
    parentDiv.className = "row";
    parentDiv.id = "schedule-list";
    console.log(schHour[i]);
    parentDiv.innerHTML = '<div class="col, hour" id="child-left">' + schHour[i] + '</div>'; 
    
    parentDiv = document.createElement('div');
    parentDiv.className = "row";
    parentDiv.id = "schedule-list";
    console.log(schTask);
    parentDiv.innerHTML = '<div class="col-8"  id="child-center">' + schTask+ '</div>';

    parentDiv = document.createElement('div');
    parentDiv.className = "row";
    parentDiv.id = "schedule-list";
    console.log(schBtn);
    parentDiv.innerHTML = '<div class="col, hour" id="child-right">' + schBtn + '</div>';
    //let newDivParent = document.create
    //let newDiv = document.createElement('div');
    //newDiv.id = "child-left";
    //newDiv.className = "col, hour";
    //toAdd.appendChild(newDiv);
    //console.log(newDiv);
    
    
    //console.log(div);
    //div.textContent = schHour[i];
    //console.log(div.textContent);
    //scheduleListEl.appendChild(div);
    //div.textContent = schTask;
    //console.log(div.textContent);
    //scheduleListEl.appendChild(div);
    //console.log(div.textContent);
    //div.texContent = schBtn;
    //scheduleListEl.appendChild(div);
   // console.log(div.textContent);
}

//document.appendChild(toAdd);
