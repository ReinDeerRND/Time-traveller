var usedTasks0=[];
var usedTasks1=[];
var usedTasks2=[];

function getTask(diceNumber) {
  var task;
  var level;

  if(diceNumber<3) {//simple
    task="tasks_tt.xml"; 
    var usedTasks=usedTasks0;}
  else if (diceNumber<5) {//medium
    task="medTasks.xml"; 
    var usedTasks=usedTasks1;}
  else if(diceNumber<7) {//difficult
    task="diffTasks.xml";
    var usedTasks=usedTasks2;} 

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    loadTask(this, usedTasks);
    }
  };
  xhttp.open("GET", task, true);
  xhttp.send();
}

function loadTask(xml,usedTasks) {
  
  var xmlDoc = xml.responseXML;
  var tasks = xmlDoc.getElementsByTagName("task");

  var taskNumber;
  var randValue;
  var checkValue=true;
  do{
    randValue=Math.floor(Math.random()*tasks.length);
    if (usedTasks.indexOf(randValue)==-1) checkValue=false;
  } while(checkValue);
  taskNumber=randValue;
  usedTasks.push(taskNumber);

  if( usedTasks.length==tasks.length) {
    while (usedTasks.length!=0) {
      usedTasks.pop();
    };
  }

  var desc=tasks[taskNumber].getElementsByTagName("description")[0].childNodes[0].nodeValue;
  $(".task").html(desc);
  for (var i=0;i<3;i++){
    $("#answer"+i).html(tasks[taskNumber].getElementsByTagName("choice")[i].childNodes[0].nodeValue);
  }
  rightAnswer=Number(tasks[taskNumber].getElementsByTagName("answer")[0].childNodes[0].nodeValue);
}