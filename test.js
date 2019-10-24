 var positions=[40,30,10,40,50];
 var scores=[300,300,100,200,200];
 var maxscore=0;
	          for (var i=0;i<positions.length;i++){
	          	if (scores[i]>maxscore) maxscore=scores[i];
	          }
 if (maxscore>0){

	          	var winners=[];
		        for(var j=0;j<scores.length;j++){
		          	if(scores[j]==maxscore)	winners.push(j); 
	          	}
	          	console.log(winners);
	          	if (winners.length==1) {
	          		console.log("Player "+winners);
	          	} else {
	          		var max_position=positions[winners[0]];
	          		for (var n=0;n<winners.length;n++){
	          			if (positions[winners[n]]>max_position) max_position=positions[winners[n]];
	          		}
	          		var listWinners=[];
	          		for (var m=0;m<winners.length;m++){

	          			if (positions[winners[m]]==max_position) {
	          				listWinners.push(winners[m]);
	          				console.log(winners[m]);
	          			}
	          		}
	          		winners=listWinners;
	          		console.log("Winners are:"+winners);
	          	}
}

var usedTasks=[];
  var taskNumber;
  var randValue;
  for (var i=0; i<19;i++){
  	var checkValue=true;
  do{
    randValue=Math.floor(Math.random()*21);
    if (usedTasks.indexOf(randValue)==-1) checkValue=false;
  } while(checkValue);
  taskNumber=randValue;
  console.log(taskNumber);
  usedTasks.push(taskNumber);
  }
 //  <task>
	// 	<description></description>
	// 	<choice></choice>
	// 	<choice></choice>
	// 	<choice></choice>
	// 	<answer></answer>
	// </task>
  