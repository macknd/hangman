const submit_button=$("#submit");
let hidden=[0,0,0,0,0,0,0,0];
let word_output=$("#word");
word_output.html(hidden);
let counter=0;
let tally=$("#tally");
tally.html(counter);
const word=["G","A","T","O","R","A","D","E"];
submit_button.click((event)=>{
    event.preventDefault();
    let letter=$("#letter").val();
    if(letter===""){
        alert("Enter a letter before you submit!");
    }else{
        for(i=0; i < word.length; i++){
            if(letter.toUpperCase()===word[i]){
                hidden[i]=word[i];
            }
        }
        word_output.html(hidden);
        if(!word.includes(letter.toUpperCase())){
            counter+=1;
        }
        tally.html(counter);
        if(counter>=10){
            alert("Game Over! You guessed wrong 10 times! The word was GATORADE.");
            resetGame();
        }

        if(!hidden.includes(0)){
            alert("Congrats! You won the game! The word was GATORADE.");
            resetGame();
        }
    }
    $("#letter").val("");
    
})

function resetGame(){
    hidden=[0,0,0,0,0,0,0,0];
    counter=0;
    word_output.html(hidden);
    tally.html(counter);
}