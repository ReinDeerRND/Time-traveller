// const coords=[[20,250],
// [20,310], [70,310],[120, 310],[170,310],[220,310],[270, 308],[320,305],[370, 301], [420,294],[470,288],
// [520,270],[565,250], [600,220],[640,193],[680,165],[720,135],[760,110],[800,83],[840,65],[880,45],
// [925,32], [970,20],[1020,17],[1070,15], [1120, 13],[1170,13],[1220,15],[1270,15],[1320,18],[1370,21],
// [1415,27],[1460,35],[1505,50],[1550,70],[1590,95],[1630,120],[1670,150],[1705,180],[1740,210],[1775,240],
// [1800,280],[1825,320],[1840,360],[1845,405],[1845,450],[1840,495],[1825,540],[1800,580],[1775,620],[1745,655],
// [1710,690],[1675,725],[1635,745],[1590,760],[1545, 771],[1500,777],[1455,781],[1410,782],[1365,783],[1320,783],
// [1275,783],[1230,783],[1185,783],[1145,783],[1100,783],[1055,783],[1010,780],[965,778],[920,775],[875,770],
// [830,765],[740,755],[695,750],[650,745],[605,740],[560,730],[520,715],[485,685],[465,640],[460, 595],
// [470,550],[490,510],[530,480],[570,460],[615,450],[660,450],[705,455],[745,475],[780,502],[800,543],
// [803,592],[802,638],[797,687],[793,735],[782,780],[758,820],[720,850],[670,865],[625,863],[575,860],
// [525,855],[475,850],[425,840],[375,825],[325,805],[285,775],[255,735],[240,690],[230,645],[228,600],
// [232,555],[250,510],[280,470],[315,435],[355,410],[400,395],[445,385],[490,370],[535,350],[580,335],
// [625,320],[660,298],[705, 272],[750,245],[795,220],[840,195],[885,170],[930,155],[975,138],[1020,128],
// [1065,125],[1110,128],[1155,135],[1198,145],[1240,160],[1282,178],[1323,195],[1365,220],[1400,245],[1445,270],
// [1525,300]];

const coords=[[20,250],[20,310], [70,310],[120, 310],
[170,310],[220,310],[270, 310],[320,310],[370,310],[420,310],
[470,310],[520,310],[570,310],[620,310],[670,310],[720,310],
[770,310],[820,310],[870,310],[920,310],[970,310],
[915,355], [865,370],[815,385],[765,400],[715,415],[665,430],
[615,445],[565,460],[515,475],[465,490],[415,505],[365,520],
[315,535],[265,550],[215,565],[365,570],
[420,570],[470,570],[520,570],[570,570],[620,570],[670,570],[720,570],
[770,570],[820,570],[870,570],[920,570],

[990,520]];//current for testing

 var positions=[]; //the positions of players, are changing while a game
 var station=true; //block all actions while making a task (in position false)
 var finishFlag=false; //show the end of game and count the results

function makeMap(rootDiv){
	var coordLen=coords.length;
        for(var i=0;i<coordLen;i++){
          var emptyCircle=$("<div></div>");
          if (i==0) {
            emptyCircle.addClass("start");
            emptyCircle.html("START");
          }
          else if(i==(coordLen-1)){
            emptyCircle.addClass("finish");
            var finishText=$("<p>FINISH</p>");
            finishText.css({"vertical-align": "middle", "margin-top":"50px"});
            emptyCircle.append(finishText);
          }
          else{
            emptyCircle.addClass("circle");
            emptyCircle.html(i);
          } 
          emptyCircle.css({"left": coords[i][0]+"px", "top":coords[i][1]+"px"});
          $(rootDiv).append(emptyCircle);
        }
}
 const avatars=['url("pics/fin.png")', 'url("pics/jake.png")','url("pics/buble.png")',
  'url("pics/vamp.png")', 'url("pics/pup.png")'];
 const names=["Finn the Human","Jake the Dog","Princess Bubblegum",
  "Marceline the Vampire Queen","Lumpy Space Princess"];

 function makePlayer(playerNumber, rootDiv){
 	var newPlayer=$("<div></div>");
 	newPlayer.addClass("player_account");
  if (playerNumber==0) newPlayer.addClass("activePlayer");
 	newPlayer.attr("id", playerNumber);
 	newPlayer.css("background-image", avatars[playerNumber]);
    var score=$("<div></div>").text("0");
    score.addClass("score");
  newPlayer.append(score);

 	$(rootDiv).append(newPlayer);

 }
 

 function makeDice(rootDiv){
 	var circle1=$("<div></div>");
    var circle11=$("<div></div>").html("&#9679;");
    circle1.append(circle11);
    circle1.addClass("dice dice1");

    var circle2=$("<div></div>");
    var circle21=$("<div></div>").html("&#9679;");
    circle21.addClass("dice_bottom");
    var circle22=$("<div></div>").html("&#9679;");
    circle22.addClass("dice_top");
    circle2.addClass("dice dice2");
    circle2.append(circle21, circle22);

    var circle3=$("<div></div>");
    var circle31=$("<div></div>").html("&#9679;");
    circle31.addClass("dice_bottom");
    var circle32=$("<div></div>").html("&#9679;");
    circle32.addClass("dice_center");
    var circle33=$("<div></div>").html("&#9679;");
    circle33.addClass("dice_top");
    circle3.addClass("dice dice3");
    circle3.append(circle31, circle32, circle33);

    var circle4=$("<div></div>");
    circle4.addClass("dice dice4");
    var circle41=$("<div></div>").html("&#9679;");
    var circle42=$("<div></div>").html("&#9679;");
    var circle43=$("<div></div>").html("&#9679;");
    var circle44=$("<div></div>").html("&#9679;");
    circle4.append(circle41, circle42, circle43, circle44);

    var circle5=$("<div></div>");
    circle5.addClass("dice dice5");
      var circle51=$("<div></div>");
      circle51.addClass("dice_col");
        var circle511=$("<div></div>").html("&#9679;");
        var circle512=$("<div></div>").html("&#9679;");
      circle51.append(circle511, circle512);
      var circle52=$("<div></div>");
      circle52.addClass("dice_col");
        var circle521=$("<div></div>").html("&#9679;");
      circle52.append(circle521);
      var circle53=$("<div></div>");
      circle53.addClass("dice_col");
        var circle531=$("<div></div>").html("&#9679;");
        var circle532=$("<div></div>").html("&#9679;");
      circle53.append(circle531, circle532);
    circle5.append(circle51, circle52, circle53);

    var circle6=$("<div></div>");
    circle6.addClass("dice dice6");
    var circle61=$("<div></div>").html("&#9679;");
    var circle62=$("<div></div>").html("&#9679;");
    var circle63=$("<div></div>").html("&#9679;");
    var circle64=$("<div></div>").html("&#9679;");
    var circle65=$("<div></div>").html("&#9679;");
    var circle66=$("<div></div>").html("&#9679;");
    circle6.append(circle61, circle62, circle63, circle64, circle65, circle66);

     $(rootDiv).append(circle1, circle2, circle3, circle4, circle5, circle6);
   
 }

const colors=["white",  "#fec129", "#fe66cb","#050a1e","#cd93f9"];

function makeRound(playerNumber, rootDiv, amountPlayers){
    var round=$("<div></div>");
    round.addClass("round");
    round.attr("id", "round"+playerNumber);
    
    round.css({left:(coords[0][0]+playerNumber*45)+3+"px", top:(coords[0][1])+4+"px",
     "border-color": colors[playerNumber]});
    $(rootDiv).append(round);
}

function moveActivePlayer(playerNumber){
    
    $(".player_account").removeClass("activePlayer");
    var nextPlayer=Number(playerNumber)+1;
    if(nextPlayer==ammountPlayers) nextPlayer=0;
    $("#"+nextPlayer).addClass("activePlayer");
    $(".task_board").css("opacity","0");
    $("input:radio").prop("checked", false);
}

function abberateRounds(){

  var abberatedPlayers=[];
  for (var n=0;n<positions.length;n++){
      abberatedPlayers[n]=false;
  }
  var dubPlayer1;
  var dubPlayer2;
  var dubPlayer3;
  var dubPlayer4;

  var dubPlayers=[];
   for (var i=0;i<positions.length;i++){
    if (positions[i]==0) continue;
    dubPlayers=[];
    if (abberatedPlayers[i]==true) continue;

      for (var j=i+1;j<positions.length;j++){
        if (positions[i]==positions[j] && abberatedPlayers[j]==false){
          dubPlayers.push(j);
          abberatedPlayers[j]=true;
        }
      }
      abberatedPlayers[i]=true;

      if (dubPlayers.length>0){
        dubPlayer1=dubPlayers[0];
        $("#round"+dubPlayer1).css("left", coords[positions[dubPlayer1]][0]+8+"px");
      }
      if (dubPlayers.length>1){
        playerNumber2=dubPlayers[1];
        $("#round"+playerNumber2).css("left", coords[positions[playerNumber2]][0]-8+"px");
      }
      if(dubPlayers.length>2){
        playerNumber3=dubPlayers[2];
        $("#round"+playerNumber3).css("top", coords[positions[playerNumber3]][1]-8+"px");
      }
      if(dubPlayers.length>3){
        playerNumber4=dubPlayers[3];
        $("#round"+playerNumber4).css("top", coords[positions[playerNumber4]][1]+8+"px");
      }

      $("#round"+i).css({"left":coords[positions[i]][0]+1+"px", 
      "top":coords[positions[i]][1]+1+"px"});
  }
}
