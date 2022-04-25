<?php
    $databaseName = 'TALLEMBE_memoryGame';
    $dsn = 'mysql:host=webdb.uvm.edu;dbname='.$databaseName;
    $usernameWriter = 'tallembe_writer';
    $passwordWriter = '2Xz2qVrPwTaX';

    $usernameReader = 'tallembe_reader';
    $passwordReader = 'SpKc8hUBhnlb';
    
    $pdoWriter = new PDO($dsn, $usernameWriter, $passwordWriter);
    $pdoReader = new PDO($dsn, $usernameReader, $passwordReader);
?>