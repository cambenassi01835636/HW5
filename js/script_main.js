/*
    File: script_main.js
    GUI Assignment: Scrabble
    Cameron Benassi, UMass Lowell Computer Science, cameron_benassi@student.uml.edu 
    Copyright (c) 2021 by Cameron.  All rights reserved.  May be freely copied or excerpted 
    for educational purposes with credit to the author. updated by CB on December 16, 2021
*/

var ScrabbleTiles = [] ;        //javascript array to store data about tiles
ScrabbleTiles["A"] = { "value" : 1,  "original-distribution" : 9,  "remain" : 9  } ;
ScrabbleTiles["B"] = { "value" : 3,  "original-distribution" : 2,  "remain" : 2  } ;
ScrabbleTiles["C"] = { "value" : 3,  "original-distribution" : 2,  "remain" : 2  } ;
ScrabbleTiles["D"] = { "value" : 2,  "original-distribution" : 4,  "remain" : 4  } ;
ScrabbleTiles["E"] = { "value" : 1,  "original-distribution" : 12, "remain" : 12 } ;
ScrabbleTiles["F"] = { "value" : 4,  "original-distribution" : 2,  "remain" : 2  } ;
ScrabbleTiles["G"] = { "value" : 2,  "original-distribution" : 3,  "remain" : 3  } ;
ScrabbleTiles["H"] = { "value" : 4,  "original-distribution" : 2,  "remain" : 2  } ;
ScrabbleTiles["I"] = { "value" : 1,  "original-distribution" : 9,  "remain" : 9  } ;
ScrabbleTiles["J"] = { "value" : 8,  "original-distribution" : 1,  "remain" : 1  } ;
ScrabbleTiles["K"] = { "value" : 5,  "original-distribution" : 1,  "remain" : 1  } ;
ScrabbleTiles["L"] = { "value" : 1,  "original-distribution" : 4,  "remain" : 4  } ;
ScrabbleTiles["M"] = { "value" : 3,  "original-distribution" : 2,  "remain" : 2  } ;
ScrabbleTiles["N"] = { "value" : 1,  "original-distribution" : 6,  "remain" : 6  } ;
ScrabbleTiles["O"] = { "value" : 1,  "original-distribution" : 8,  "remain" : 8  } ;
ScrabbleTiles["P"] = { "value" : 3,  "original-distribution" : 2,  "remain" : 2  } ;
ScrabbleTiles["Q"] = { "value" : 10, "original-distribution" : 1,  "remain" : 1  } ;
ScrabbleTiles["R"] = { "value" : 1,  "original-distribution" : 6,  "remain" : 6  } ;
ScrabbleTiles["S"] = { "value" : 1,  "original-distribution" : 4,  "remain" : 4  } ;
ScrabbleTiles["T"] = { "value" : 1,  "original-distribution" : 6,  "remain" : 6  } ;
ScrabbleTiles["U"] = { "value" : 1,  "original-distribution" : 4,  "remain" : 4  } ;
ScrabbleTiles["V"] = { "value" : 4,  "original-distribution" : 2,  "remain" : 2  } ;
ScrabbleTiles["W"] = { "value" : 4,  "original-distribution" : 2,  "remain" : 2  } ;
ScrabbleTiles["X"] = { "value" : 8,  "original-distribution" : 1,  "remain" : 1  } ;
ScrabbleTiles["Y"] = { "value" : 4,  "original-distribution" : 2,  "remain" : 2  } ;
ScrabbleTiles["Z"] = { "value" : 10, "original-distribution" : 1,  "remain" : 1  } ;
ScrabbleTiles["_"] = { "value" : 0,  "original-distribution" : 2,  "remain" : 2  } ;

var score = 0, roundScore = 0, nextTile = -1, lettersPlayed = 0, doubleWordFlag = false, alreadyDropped = new Array();

$(function(){
    generateTiles(7);       //generates starting hand


    //makes starting hand draggable, as well as making the board droppable
    $(".tile").draggable({      
        revert: "invalid"
    });
    
    $("#rackWrapper").droppable({
        tolerance: "intersect",
        accept: ".tile",
        drop: function(event, ui) {}
    });
    $(".blank").droppable({
        tolerance: "intersect",
        accept: ".tile",
        drop: function(event, ui) {
            if(nextTile == -1){
                nextTile = parseInt($(this).attr("id")) + 1;
                
                var letter = $(ui.draggable).attr("id");
                roundScore += ScrabbleTiles[letter].value;
                alreadyDropped.push(letter);
                lettersPlayed++;
            } 
            else if(nextTile != parseInt($(this).attr("id"))){
                ui.draggable.draggable('option','revert',true); 
            }
            else{
                ui.draggable.draggable('option','revert',false); 
                nextTile++;
                
                var letter = $(ui.draggable).attr("id");
                roundScore += ScrabbleTiles[letter].value;
                alreadyDropped.push(letter);
                lettersPlayed++;
            }
        }
    });
    $(".doubleWord").droppable({
        tolerance: "intersect",
        drop: function(event, ui) {
            if(nextTile == -1){
                nextTile = parseInt($(this).attr("id")) + 1;
                
                var letter = $(ui.draggable).attr("id");
                roundScore += ScrabbleTiles[letter].value;
                alreadyDropped.push(letter);
                lettersPlayed++;
            } 
            else if(nextTile != parseInt($(this).attr("id"))){
                ui.draggable.draggable('option','revert',true); 
            }
            else{
                ui.draggable.draggable('option','revert',false); 
                nextTile++;
                
                var letter = $(ui.draggable).attr("id");
                roundScore += ScrabbleTiles[letter].value;
                alreadyDropped.push(letter);
                lettersPlayed++;
            }
        }
    });
    $(".doubleLetter").droppable({
        tolerance: "intersect",
        drop: function(event, ui) {
            if(nextTile == -1){
                nextTile = parseInt($(this).attr("id")) + 1;
                
                var letter = $(ui.draggable).attr("id");
                roundScore += ScrabbleTiles[letter].value;
                alreadyDropped.push(letter);
                lettersPlayed++;
            } 
            else if(nextTile != parseInt($(this).attr("id"))){
                ui.draggable.draggable('option','revert',true); 
            }
            else{
                ui.draggable.draggable('option','revert',false); 
                nextTile++;
                
                var letter = $(ui.draggable).attr("id");
                roundScore += ScrabbleTiles[letter].value;
                alreadyDropped.push(letter);
                lettersPlayed++;
            }
        }
    });
    
    //when user clicks submit, score is tallied, pieces are taken off, new pieces are dealt
    $("#submit").click(function(){
        if(doubleWordFlag){roundScore *= 2;}
        score += roundScore;
        roundScore = 0;
        doubleWordFlag = false;
        document.getElementById("scoreValue").innerText = score;

        for(i = 0; i < alreadyDropped.length; i++){
            var letter = alreadyDropped[i];
            $("#" + letter).remove();
        }
        alreadyDropped = [];
        
        generateTiles(lettersPlayed);
        lettersPlayed = 0;    

        $(".tile").draggable({
            revert: "invalid"
        });
        nextTile = -1;
    });

    //refreshes the website to restart the game
    $("#restart").click(function(){
        document.location.reload();
    });
});

//function that takes in a number of tiles to be dealt, randomly choses leftover tiles
//to give to user, based on information from array
function generateTiles(numLetters){
    for(var i = 0; i < numLetters; i++){
        var randomNum = Math.floor(Math.random() * (27 - 1 + 1) + 1)
        var letter;

        if(randomNum != 27)
            letter = String.fromCharCode(randomNum + 64);
        else
            letter = "_";
            
        if(ScrabbleTiles[letter].remain == 0){
            randomNum = Math.floor(Math.random() * (27 - 1 + 1) + 1)
            if(randomNum != 27)
                letter = String.fromCharCode(randomNum + 64);
            else
                letter = "_";
        }
        ScrabbleTiles[letter].remain--;
        
        document.getElementById("tiles").innerHTML += "<img class=\"tile\" id=\"" + letter + "\" src=\"assets/Scrabble_Tiles/" + letter + ".jpg\"></img>";
    }
    
}
