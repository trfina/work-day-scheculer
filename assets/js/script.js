var currentDate = (moment().format('dddd, MM/DD/YYYY'));
console.log("Moment Date: " + currentDate);

document.getElementById('currentDay').innerHTML=currentDate;

var mainContainerEl = document.querySelector('#main-container');

let schHour  = [' 9 am', '10 am', '11 am', '12pm', ' 1 pm', ' 2 pm', ' 3pm', ' 4 pm', ' 5 pm'];
let schTask = "Enter task here";
let schBtn = "Button";

//
var htmlContent = '';
for(let i = 0; i < 9 ; i++){
    htmlContent+= ` <div class="row" id="schedule-list">
    <div class="col, hour" id="child-left" >hour${schTask}</div>
    <div class="col-8" id="child-center">hi</div>
    <div class="col, saveBtn" id="child-right">there</div>
    </div>   `
}
mainContainerEl.innerHTML=htmlContent;

// var parentDiv = document.createElement('div');
// var rowHTML = ` <div class="row" id="schedule-list">
//                 <div class="col, hour" id="child-left" >hour</div>
//                 <div class="col-8" id="child-center">hi</div>
//                 <div class="col, saveBtn" id="child-right">there</div>
//                 </div>   `
// parentDiv.innerHTML = rowHTML;
// mainContainerEl.append(rowHTML);

 // parentDiv.innerHTML = '<div class="col, hour" id="child-left">' + schHour[i] + '</div>'; 
    
//    // parentDiv = document.createElement('div');
//     parentDiv.className = "row";
//     parentDiv.id = "schedule-list";
//     console.log(schTask);
//     parentDiv.innerHTML = '<div class="col-8"  id="child-center">' + schTask+ '</div>';

//     parentDiv = document.createElement('div');
//     parentDiv.className = "row";
//     parentDiv.id = "schedule-list";
//     console.log(schBtn);
//     parentDiv.innerHTML = '<div class="col, hour" id="child-right">' + schBtn + '</div>';
//var toAdd = document.createDocumentFragment();

for (var i = 0; i < schHour.length; i++){
    
}
