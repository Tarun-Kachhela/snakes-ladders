$(function(){
    i=0;
    var playersPositions = new Map();
    $(".ButtonForRandomNumber").click(function(){
        randomNumberGenerator();
    });
    $("#CreateGoti").click(function(){
        createGoti();
    });
//    document.getElementById("CreateGoti").addEventListener("click", createGoti);
    random=randomNumberGenerator();
    var addersMapper=mapper([[5,35],[17,43],[12,78],[33,67],[65,95]]);
    var snakesMapper=mapper([[32,8],[41,18],[66,36],[99,56],[87,69]]);
//    createGoti([["tarun",0],["pank",0]]);
    function createGoti(){
//    alert("hell");
    //create goti design
        $(".row1 #box1").append("<div class=\"goti\">"+i+"</div>");
        $(".row1 #box1 .goti").css("display","block");
        playersPositions.push();
        playersPositions.set(i,0);
        i++;
    }
});

function mapper(mapperingData){
    return new Map(mapperingData);  
}

function randomNumberGenerator(){
//    alert(Math.floor(Math.random() * 6)+1);
    return $(".RandomNumber").html( Math.floor(Math.random() * 6)+1);
}