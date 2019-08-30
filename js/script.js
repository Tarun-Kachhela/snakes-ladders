$(function(){
    i=0,random=0,whichPlayer=0,previousPosition=0;
    var playersPositions = new Map();
    var laddersMapper=mapper([[5,35],[17,43],[12,78],[33,67],[65,95]]);
    var snakesMapper=mapper([[32,8],[41,18],[66,36],[99,56],[87,69]]);
    var rankList = mapper()
    
    $(".ButtonForRandomNumber").click(function(){
        $("#CreateGoti").hide();
        random=randomNumberGenerator();
        playerPosition =playersPositions.get(whichPlayer)+random;
        if(laddersMapper.has(playerPosition)){
            playerPosition= laddersMapper.get(playerPosition);
            previousPosition=playersPositions.get(whichPlayer);
            alert(previousPosition);
            $(".boxes #goti"+previousPosition).remove();
            $(".boxes #box"+playerPosition).html("<div class =\"goti\" id=\"goti"+whichPlayer+"\">"+whichPlayer+"</div>");
            $(".boxes #box"+playerPosition+" #goti"+whichPlayer).css("display","block");
        }
        else if(snakesMapper.has(playerPosition)){
            playerPosition = snakesMapper.get(playerPosition);
            previousPosition=playersPositions.get(whichPlayer);
            alert(previousPosition);
            $(".boxes #goti"+previousPosition).remove();
            $(".boxes #box"+playerPosition).html("<div class =\"goti\" id=\"goti"+whichPlayer+"\">"+whichPlayer+"</div>");
            $(".boxes #box"+playerPosition+" #goti"+whichPlayer).css("display","block");
        }
        if(playerPosition == 100){
            playersPositions.delete(whichPlayer);
            previousPosition=playersPositions.get(whichPlayer);
            alert(previousPosition);
            $(".boxes #goti"+previousPosition).remove();
            $(".boxes #box"+playerPosition).html("<div class =\"goti\" id=\"goti"+whichPlayer+"\">"+whichPlayer+"</div>");
            $(".boxes #box"+playerPosition+" #goti"+whichPlayer).css("display","block");
//            alert(playersPositions.get(0) +" "+playersPositions.get(1) +" "+whichPlayer+" "+random);
        }
        else if(playerPosition<=100){
            playersPositions.set(whichPlayer,playerPosition);
            previousPosition=playersPositions.get(whichPlayer);
            alert(previousPosition);
            $(".boxes #goti"+previousPosition).remove();
            $(".boxes #box"+playerPosition).html("<div class =\"goti\" id=\"goti"+whichPlayer+"\">"+whichPlayer+"</div>");
            $(".boxes #box"+playerPosition+" #goti"+whichPlayer).css("display","block");
//            alert(playersPositions.get(0) +" "+playersPositions.get(1) +" "+whichPlayer+" "+random);
        }
        if((playersPositions.size-1)==whichPlayer)
            whichPlayer=0;
        else
            whichPlayer++;
    });
    $("#CreateGoti").click(function(){
        createGoti();
    });
//    document.getElementById("CreateGoti").addEventListener("click", createGoti);
    function createGoti(){
        $(".row1 #box1").append("<div class =\"goti\" id=\"goti"+i+"\">"+i+"</div>");
        $(".row1 #box1 #goti"+i).css("display","block");
//        playersPositions.push();
        playersPositions.set(i,0);
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