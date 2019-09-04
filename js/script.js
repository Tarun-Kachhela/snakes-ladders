$(function(){
    i=1,random=0,whichPlayer=1,previousPosition=1;
    var playersPositions = new Map();
    var laddersMapper=mapper([[9,51],[5,27],[66,88],[22,60],
                              [71,92],[85,97],[53,69],[28,54],[44,79]]);
    var snakesMapper=mapper([[13,7],[37,19],[80,43],[86,46],[91,41],[99,4]]);
    var rankList = mapper()
    var numOfPlayers;
    $(".ButtonForRandomNumber").click(function(){
        random=randomNumberGenerator();
        playerPosition =playersPositions.get(whichPlayer)+random;
        if(laddersMapper.has(playerPosition)){
            playerPosition= laddersMapper.get(playerPosition);
            previousPosition=playersPositions.get(whichPlayer);
//            alert("previousPosition "+previousPosition+"whichPlayer " +whichPlayer);
            $(".boxes #goti"+whichPlayer).remove();
            $(".boxes #box"+playerPosition).append("<div class =\"goti\" id=\"goti"+whichPlayer+"\">"+whichPlayer+"</div>");
            $(".boxes #box"+playerPosition+" #goti"+whichPlayer).css("display","block");
        }
        else if(snakesMapper.has(playerPosition)){
            playerPosition = snakesMapper.get(playerPosition);
            previousPosition=playersPositions.get(whichPlayer);
//            alert("previousPosition"+previousPosition+" whichPlayer" +whichPlayer);
            $(".boxes #goti"+whichPlayer).remove();
            $(".boxes #box"+playerPosition).append("<div class =\"goti\" id=\"goti"+whichPlayer+"\">"+whichPlayer+"</div>");
            $(".boxes #box"+playerPosition+" #goti"+whichPlayer).css("display","block");
        }
        if(playerPosition == 100){
            
            previousPosition=playersPositions.get(whichPlayer);
            alert("previousPosition "+previousPosition+"whichPlayer " +whichPlayer);
            $(".boxes #goti"+whichPlayer).remove();
            $(".boxes #box"+playerPosition).append("<div class =\"goti\" id=\"goti"+whichPlayer+"\">"+whichPlayer+"</div>");
            $(".boxes #box"+playerPosition+" #goti"+whichPlayer).css("display","block");
            playersPositions.delete(whichPlayer);
            console.log(playersPositions);
//            alert(playersPositions.get(0) +" "+playersPositions.get(1) +" "+whichPlayer+" "+random);
        }
        else if(playerPosition<=100){
            previousPosition=playersPositions.get(whichPlayer);
//            alert("previousPosition "+previousPosition+"whichPlayer " +whichPlayer);
            $(".boxes #goti"+whichPlayer).remove();
            
            
            $(".boxes #box"+playerPosition).append("<div class =\"goti\" id=\"goti"+whichPlayer+"\">"+whichPlayer+"</div>");
            $(".boxes #box"+playerPosition+" #goti"+whichPlayer).css("display","block");
            playersPositions.set(whichPlayer,playerPosition);
//            alert(playersPositions.get(0) +" "+playersPositions.get(1) +" "+whichPlayer+" "+random);
        }
        if(numOfPlayers==whichPlayer)
            whichPlayer=1;
        else
            whichPlayer++;
    });
    $("#selectNoOfPlayer").change(function(){
//        alert($("#selectNoOfPlayer option:selected").attr("value"));
        var players=document.getElementById("selectNoOfPlayer").value;
        for(k=0;k<players;k++)
            createGoti();
        numOfPlayers = playersPositions.size; 
        
        $("#selectNoOfPlayer,.para").hide();
        
    });
    function createGoti(){
        $(".row1 #box1").append("<div class =\"goti\" id=\"goti"+i+"\">"+i+"</div>");
        $(".row1 #box1 #goti"+i).css("display","block");
//        playersPositions.push();
        playersPositions.set(i,1);
        i++;
    }
});

function mapper(mapperingData){
    return new Map(mapperingData);  
}

function randomNumberGenerator(){
//    alert(Math.floor(Math.random() * 6)+1);
    newNumber = Math.floor(Math.random() * 6)+1;
    $(".RightContainer .RandomNumber").html(newNumber);
    return newNumber;
}