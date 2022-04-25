<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Memory Game</title>
    
    <!-- nate's audio testing -->
    <!-- AUDIO CREDIT: -->
    <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" 
    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/326480267&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
    </iframe>
    
    <link rel = "stylesheet"
        href = "css/custom.css?version=<?php print time(); ?>"
        type = "text/css">
    <script
        src="https://code.jquery.com/jquery-3.4.1.js"
        integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
        crossorigin="anonymous"></script>
     <script src="js/script.js" defer></script>
</head>
<body class = "gameBoardBody">
    <div class = "scoreBoardContainer">
        <div class = "profilePic">
            <img src = '<?php print $_POST["imageName"]?>'>
        </div>
        <p class = "usernameBoard"><?php 
            print $_POST["username"];
            $randomNum = rand();
            if($_POST["username"] == "Guest"){
                print $randomNum;
            }
        ?></p>
        <input type = 'button' onclick = 'getDataInfo()' id = "test" value = "return table">
        <p class = "scoreP">Moves: <span id = "currentScore">0</span></p>
        <input type = "button" name = "quitButton" id = "quitButton" value = "Quit">
    </div>
    <div class = "boardContainer">
        <?php
            $dimX = 4;
            $dimY = 2;
            if($_POST["level"] == "Easy"){
                $dimX = 4;
                $dimY = 2;
            }
            else if($_POST["level"] == "Medium"){
                $dimX = 4;
                $dimY = 4;
            }
            else if($_POST["level"] == "Hard"){
                $dimX = 6;
                $dimY = 4;
            }
            else if($_POST["level"] == "Impossible"){
                $dimX = 10;
                $dimY = 10;
            }
            print "<input type = 'hidden' name = 'fileName'id = 'fileName' value = '".$randomNum."'>";
            $fileName = $randomNum . ".txt";
            $command_touch = escapeshellcmd("touch " . $randomNum . ".txt");
            $touch_output = shell_exec($command_touch);
            shell_exec("g++ -std=c++1y main.cpp -o main.exe");
            $output = shell_exec("./main.exe board " . $dimX . " " . $dimY . " " . $fileName);
            echo $output;
        ?>
    </div>
</body>
</html>