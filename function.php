<?php
include 'database.php';
    $funcName = $_POST['fName'];
    $x = $_POST['xVal'];
    $y = $_POST['yVal'];
    $file = $_POST['file'];
    if($funcName == 'getColor'){
        $output = shell_exec("./main.exe color " . $x . " " . $y . " " . $file);
        print $output;
    }
    else if($funcName == 'compareSquares'){
        $x2 = $_POST['xVal2'];
        $y2 = $_POST['yVal2'];
        $file = $_POST['file'];
        $output = shell_exec("./main.exe compare " . $x . " " . $y . " " . $x2 . " " . $y2 . " 2" . " " . $file);
        print $output;
    }
    else if($funcName == 'removeFile'){
        $file = $_POST['file'];
        $command_rm = escapeshellcmd("rm " . $file . ".txt");
        $output_rm = shell_exec($command_rm);
        print $output_rm;
    }
    else if($funcName == 'retrieveData') {
        //get info from database
        $sql = 'SELECT * FROM userData;';
        
        $statement = $this->pdo->prepare($sql);

        echo $statement;

        $statement->execute();

        $recordSet = $statement->fetchAll(PDO::FETCH_ASSOC);
        $statement->closeCursor();

        
        // $username = $recordSet['username'];
        // $moves = $recordSet['moves'];
        // $datePlayed = $recordSet['datePlayed'];
        // $avatar = $recordSet['avatarURL'];
        // $userInfo = array($username, $moves, $datePlayed, $duration, $avatar);


        echo $recordSet;

        
        
    }
    else if($funcName == 'saveData') {

    }
?>
