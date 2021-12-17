Cameron Benassi
Homework 5
12/16/21

For this assignment, I implemented the following features from the rubric:
    * Letter tiles in the player’s “hand” are selected randomly from a data structure with the proper distribution of the letters (code!)
    * Letter tiles can be dragged-and-dropped onto target Scrabble squares
    * Program identifies which letter tile is dropped onto which Scrabble square
    * Board includes at least two bonus squares
    * Score is tallied correctly, including consideration of bonus square multipliers
    * Any number of words can be played until the player wishes to quit or depletes all tiles
    * The board is cleared after each round so that a new word can be played
    * After playing a word, only the number of letter tiles needed to bring the player’s “hand” back
        to 7 tiles are selected
    * Score is kept for multiple words until the user restart a new game (implement next vs. restart)
    * Tiles can only be dragged from the “rack” to Scrabble board. If the user drop them anywhere
        else, they will be bounced back to the “rack”.
    * Once the tile is placed on the Scrabble board, it can be moved back to the “rack”.
    * Except for the first letter, all sub-subsequent letters must be placed directly next to or below
        another letter with no space. Else, they will bounce back to the “rack”.
    * User can always restart the game.

To implement the scrabble tiles, I used a JavaScript array to store all the infromation about the tiles. From there, I created a function
that randomly picks out tiles and displays them on the website. In this process, the function checks to make sure that there are actually
enough scrabble pieces to display. Once the pieces are on the screen, JQuery turns each of them into a draggable object, as well as each 
individual game landing square into a droppable object. When a piece is dropped onto a board piece, score is taken, as well as calculations
made to see where the user can put their next piece. Once the submit button is clicked, the pieces are erased, new tiles are dealt, and the 
score is added to the round score. 


