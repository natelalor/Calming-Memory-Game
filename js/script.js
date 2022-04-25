/* 
 * our Javascript holds a lot of responsibility within our program. It has many functions that deal with adding
 * the board to the webpage, compares squares, flips and unflips squares, and also has some other
 * smaller helper functions. It helps the responsiveness of the webpage as well as communicating with the backend.
 */

$(".square").on('click', changeSquareColor);
$("#quitButton").on('click', removeFile);
$("#winningPlayAgain").on('click', function(){
    location.reload();
});
$("#winningChangeDifficulty").on('click', removeFile);
$(".levelLabel").on('click', chooseLevel);
$("#avatarID").on('click', showAvatars);
$("#playGame").on('click', checkUsername);


window.onbeforeunload = removeFile;
var score = 0;

function chooseLevel(){
    $("#levelInput").empty();
    var clickedID = $(this).attr('id');
    $(".levelLabel").each(function(){
        $(this).removeClass("activeLevel");
    })

    if(clickedID == "easyButton"){
        $("#levelInput").append("<input type = 'hidden' name = 'level' class = 'levelRadio' id = 'easySubmit' value = 'Easy'>");
        console.log("easy");
        $("#easyButton").addClass("activeLevel");
    }
    else if(clickedID == "mediumButton"){
        $("#levelInput").append("<input type = 'hidden' name = 'level' class = 'levelRadio' id = 'mediumSubmit' value = 'Medium'>");
        console.log("medium");
        $("#mediumButton").addClass("activeLevel");
    }
    else if(clickedID == "hardButton"){
        $("#levelInput").append("<input type = 'hidden' name = 'level' class = 'levelRadio' id = 'hardSubmit' value = 'Hard'>");
        console.log("hard");
        $("#hardButton").addClass("activeLevel");
    }
    else if(clickedID == "impossibleButton"){
        $("#levelInput").append("<input type = 'hidden' name = 'level' class = 'levelRadio' id = 'impossibleSubmit' value = 'Impossible'>");
        console.log("hard");
        $("#impossibleButton").addClass("activeLevel");
    }
}

function showAvatars(){
    if($("#avatarID").hasClass('showingAvatars')){
        $(".avatarAndNameWrapper").css("opacity", "0");
        setTimeout(function(){
            $("#displayAvatars").empty();
            $("#displayAvatars").removeClass('avatarIn');
            $("#displayAvatars").addClass('avatarOut');
        }, 400)
        setTimeout(function(){
            $("#displayAvatars").remove();
        }, 800)
        setTimeout(function(){
            $("#avatarID").removeClass('showingAvatars');
        }, 1500)
        $(".playGameContainer").css('border-top-left-radius', '10px');
        $(".playGameContainer").css('border-bottom-left-radius', '10px');
    }else{
        $(".playGameContainer").css('border-top-left-radius', '0px');
        $(".playGameContainer").css('border-bottom-left-radius', '0px');
        $("#avatarID").addClass('showingAvatars');
        $("<div class = 'allAvatarsContainer' id = 'displayAvatars'></div>").prependTo($('.infoContainer')[0])
        $("#displayAvatars").addClass('avatarIn')
        setTimeout(function(){
            $("#displayAvatars").append("<div class = 'avatarAndNameWrapper'><div onClick = 'setMainAvatar(this)' class = 'singleAvatarContainer' id = 'avatar_boombi'><img src='images/avatar_boombi.png'></div><p class='avatarText'>boombi</p><div>")
            $("#displayAvatars").append("<div class = 'avatarAndNameWrapper'><div onClick = 'setMainAvatar(this)' class = 'singleAvatarContainer' id = 'avatar_joble'><img src='images/avatar_joble.png'></div><p class='avatarText'>joble</p><div>")
            $("#displayAvatars").append("<div class = 'avatarAndNameWrapper'><div onClick = 'setMainAvatar(this)' class = 'singleAvatarContainer' id = 'avatar_kavka'><img src='images/avatar_kavka.png'></div><p class='avatarText'>kavka</p><div>")
            $("#displayAvatars").append("<div class = 'avatarAndNameWrapper'><div onClick = 'setMainAvatar(this)' class = 'singleAvatarContainer' id = 'avatar_lappi'><img src='images/avatar_lappi.png'></div><p class='avatarText'>lappi</p><div>")
            $("#displayAvatars").append("<div class = 'avatarAndNameWrapper'><div onClick = 'setMainAvatar(this)' class = 'singleAvatarContainer' id = 'avatar_shobe'><img src='images/avatar_shobe.png'></div><p class='avatarText'>shobe</p><div>")
            $("#displayAvatars").append("<div class = 'avatarAndNameWrapper'><div onClick = 'setMainAvatar(this)' class = 'singleAvatarContainer' id = 'avatar_teyah'><img src='images/avatar_teyah.png'></div><p class='avatarText'>teyah</p><div>")
        
        }, 400)

        setTimeout(function(){
            $(".avatarAndNameWrapper").css("opacity", "1");
        }, 500)
    }
    
}
function setMainAvatar(item){
    $(".hiddenAvatarImage").remove();
    var avatarName = $(item).attr('id');
    var color = $(item).css('background-color');
    var imageSrc = "images/" + avatarName + ".png";
    $("#avatarImage").attr('src', imageSrc);
    $("#avatarImage").css('background-color',color);
    $("#avatarID").append("<input type = 'hidden' class = 'hiddenAvatarImage' name = 'imageName' value = '"+imageSrc+"'>");
}  

function checkUsername(){
    var username = $("#username").val();
    // if username is not chosen, makes a random guest user
    if (username == ""){
        username = "Guest";
        $("#username").val(username);
    }
}
/*
 * addDimensions adds HTML to the webpage based on user input of "play". Then,
 * prompts user for game difficulty - easy, medium, hard - then will send that information
 * to PHP, which includes board size and username.
 */
function addDimensions(){
    var gameContainer = $(".playGameContainer");
    var username = $("#username").val();

    // if username is not chosen, makes a random guest user
    if (username == ""){
        username = "Guest";
    }

    gameContainer.empty();
    gameContainer.append("<h3 class = 'dimensionsTitle'>Choose Difficulty</h3>");
    // FORM 1: EASY //
    gameContainer.append("<form id = \"easyForm\" enctype=\"multipart/form-data\" action=\"gameBoard.php\" method=\"POST\"></form>");
    var easyForm = $("#easyForm");
        // easy
    easyForm.append("<input type = 'submit' name = 'easySubmit' id = 'easySubmit' value = 'Easy'>");
    easyForm.append("<input type = 'hidden' name = 'dimensionX' id = 'easySubmit' value = '4'>");
    easyForm.append("<input type = 'hidden' name = 'dimensionY' id = 'easySubmit' value = '2'>");
    easyForm.append("<input type = 'hidden' name = 'username' id = 'username' value = '"+username+"'>");
    // FORM 2: MEDIUM //
    gameContainer.append("<form id = \"mediumForm\" enctype=\"multipart/form-data\" action=\"gameBoard.php\" method=\"POST\"></form>");
    var mediumForm = $("#mediumForm");
        // medium
    mediumForm.append("<input type = 'submit' name = 'mediumSubmit' id = 'mediumSubmit' value = 'Medium'>");
    mediumForm.append("<input type = 'hidden' name = 'dimensionX' id = 'mediumSubmit' value = '4'>");
    mediumForm.append("<input type = 'hidden' name = 'dimensionY' id = 'mediumSubmit' value = '4'>");
    mediumForm.append("<input type = 'hidden' name = 'username' id = 'username' value = '"+username+"'>");
    // FORM 3: HARD //
    gameContainer.append("<form id = \"hardForm\" enctype=\"multipart/form-data\" action=\"gameBoard.php\" method=\"POST\"></form>");
    var hardForm = $("#hardForm");
        // hard
    hardForm.append("<input type = 'submit' name = 'hardSubmit' id = 'hardSubmit' value = 'Hard'>");
    hardForm.append("<input type = 'hidden' name = 'dimensionX' id = 'hardSubmit' value = '6'>");
    hardForm.append("<input type = 'hidden' name = 'dimensionY' id = 'hardSubmit' value = '4'>");
    hardForm.append("<input type = 'hidden' name = 'username' id = 'username' value = '"+username+"'>");

};
/*
 * changeSquareColor is called when you click a square. Then, it takes the information
 * about the square, and sends to PHP and backend. It also calls flipSquare() method, found below,
 * which flips a square.
 */
function changeSquareColor(){
    var fileName = $("#fileName").val();
    console.log(fileName);
    fileName = fileName+".txt";
    var clickBtnId = $(this).attr('id');
    var rowCol = clickBtnId.split('c');

    //sets x value and checks if x value is two digits long
    var x = rowCol[0].charAt(3);
    if(rowCol.length == 5){
        x = x + rowCol[0].charAt(4);
    }
    //sets y value and checks if y value is two digits long
    var y = rowCol[1].charAt(5);
    if(rowCol.length == 7){
        y = y + rowCol[1].charAt(6);
    }
    var funcName = 'getColor';
    var ajaxurl = 'function.php';
    data =  {'fName': funcName, 'xVal': x-1, 'yVal': y-1, 'file': fileName};
    $.post(ajaxurl, data, function (response) {
        // Response div goes here.
        console.log(response);
        var color = "rgb("+response+")";
        flipSquare(clickBtnId, color);
    });
}
/*
 * flipSquare() method takes in an id and a color, and flips the square that
 * corresponds to that id, then shows the color it is. Then, if class "flipped" is
 * equal to 2, meaning 2 cards have been flipped, it calls compareSquares() that compares
 * both the squares to see if it's a match.
 */
function flipSquare(clickBtnId, color){
    if(($("#"+clickBtnId).hasClass('flipped'))||($("#"+clickBtnId).hasClass('matched'))){
        $("#"+clickBtnId).css("border", "solid 2px red")
        $("#"+clickBtnId).animate({border: "solid 2px red"}, "slow");
    }else{
        console.log("num flipped: "+$(".flipped").length);
        if($(".flipped").length < 2){
            document.getElementById(clickBtnId).classList.remove("unflipped");
            document.getElementById(clickBtnId).classList.add("flipped");
            $('#'+clickBtnId).css("background-color", color);
            $('#'+clickBtnId).css("border", "solid 2px white");

            // if 2 cards are flipped
            if($(".flipped").length == 2){
                
                $(".matched").each(function(){
                    $(this).css("border", "solid 2px white");
                })
                var score = parseInt($("#currentScore").text());
                $("#currentScore").html(score+1);
                
                compareSquares();
            }
        }
    }
}

/* 
 * unflipSquare() method grabs every card that currently has the class
 * of "flipped", and unflips them.
 */
function unflipSquare(){
    $('.flipped').each(function(){
        $(this).removeClass("flipped");
        $(this).css("background-color", "#555638");
        $(this).css("border", "none");
    })
}

/*
 * compareSquares takes sees the squares currently holding the "flipped" class,
 * and will add their specific id attribute to an array, which makes it able to
 * compare the two squares. 
 */
function compareSquares(clickBtnId){
    // allFlipped is an array that holds the 2
    // squares that are flipped
    var fileName = $("#fileName").val();
    fileName = fileName+".txt";
    var allFlipped = $(".flipped");
    
    // setting square1 and square2 as the 2 flipped squares we want
    var square1 = allFlipped[0].getAttribute('id');
    var square2 = allFlipped[1].getAttribute('id');

    // now that we have square1 square2, we can get their info to send to C++ to compare
    var x1 = square1.charAt(3);
    var y1 = square1.charAt(10);
    var x2 = square2.charAt(3);
    var y2 = square2.charAt(10);
    console.log("x1: "+x1)
    console.log("y1: "+y1)
    console.log("x2: "+x2)
    console.log("y2: "+y2)
    var funcName = 'compareSquares';
    var ajaxurl = 'function.php',

    // send said info to C++
    data =  {'fName': funcName, 'xVal': x1, 'yVal': y1, 'xVal2': x2, 'yVal2': y2, 'file': fileName};
    $.post(ajaxurl, data, function (response) {

        // Response div goes here.
        var compOut = "Comparison : " + response;
        console.log(compOut)
        if(response == 2){

            //hit win condition
        } else if(response == 1){

            //squares are equal
            $("#"+square1).removeClass("flipped");
            $("#"+square1).addClass("matched");
            $("#"+square2).removeClass("flipped");
            $("#"+square2).addClass("matched");
            checkWinStatus();
        } else {
            //squares not equal
            setTimeout(unflipSquare, 800);
        }   
    });
}
/*
 * checkWinStatus() method checks to see if all squares have class "matched", 
 * which means all are done and showing which means you win and the game is over.
 */
function checkWinStatus(){
    var numSquares = $(".square").length;
    var numMatched = $(".matched").length;

    //adds the "confetti" just before game is over
    console.log("# squares: " + numSquares);
    if(numMatched == numSquares - 2){
        var body = $(".gameBoardBody");
        var width = $('.gameBoardBody').width();
        for(var i = 0; i < 50; ++i){
            body.append("<div class = 'winningBall'></div>");
        }

        //set starting index of each ball
        for(var i = 0; i < $(".winningBall").length; ++i){
            var randomLeft = getRandomNumber(300, width-300);
            var randDimensions = getRandomNumber(10, 40);
            var randRed = getRandomNumber(0, 255)
            var randGreen = getRandomNumber(0, 255)
            var randBlue = getRandomNumber(0, 255)
            var color = "rgb("+randRed+", "+randGreen+", "+randBlue+")";
            var aBall = $(".winningBall")[i];
            aBall.style.left = randomLeft + "px";
            aBall.style.width = randDimensions + "px";
            aBall.style.height = randDimensions + "px";
            aBall.style.backgroundColor = color;
        }
    }
    if(numSquares == numMatched){
        var score = parseInt($("#currentScore").text());
        $(".boardContainer").append("<div class = 'winPopUp'></div>");
        $(".winPopUp").append("<h1>Congratulations!</h1>");
        $(".winPopUp").append("<h2>You won in "+score+" moves</h2>");
        $(".winPopUp").append("<div class = 'winningButtonsContainer'></div>");
        winningAnimation();
    }
}
/* 
 * removes specific game file made earlier using function.php
 */
function removeFile(){
    var fileName = $("#fileName").val();
    var funcName = 'removeFile';
    var ajaxurl = 'function.php',
    // send said info to C++
    data =  {'fName': funcName, 'file': fileName};
    $.post(ajaxurl, data, function (response) {
        //removeal of file using function.php successful
        window.location.replace("index.html");
    });
}
/* 
 * helper function to return a random number using min & max as inputs
 */
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
/* 
 * if you win, we added some fun animations using javascript and css!
 */
function winningAnimation(){
    var numSquares = $(".square").length;
    var numMatched = $(".matched").length;
    var body = $(".gameBoardBody");
    var width = $('.gameBoardBody').width();
    
    for(var i = 0; i < $(".winningBall").length; ++i){
        randomHorzGoTo = getRandomNumber(300, width-300);
        randomVertGoTo = getRandomNumber(100, 300);

        var aBall = $(".winningBall")[i];
        aBall.style.transition = "all 1000ms ease-out";
        aBall.style.left = randomHorzGoTo + "px";
        aBall.style.top = randomVertGoTo + "px";
        aBall.style.opacity = "0";
    }


}

function getDataInfo() {
    var funcName = 'retrieveData';
    var ajaxurl = 'function.php';
    console.log("inside get data info");

    data = {'fName': funcName};
    $.post(ajaxurl, data, function (response) {
        //response is array of user data, which we can parse
        console.log("Response: "+response);
        // var username = reponse[0];
        // var moves = response[1];
        // var datePlayed = response[2];
        // var avatar = response[3];
    });

    // put this info into an array
    //var userData = [username, moves, datePlayed, avatar];



}