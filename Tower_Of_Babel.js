//reusing code, any good coder steals code, but i'm stealing from myself, so its not stealing, its just being smart.
// Drop down menu code
function displayMedia() {
    var selectedValue = document.getElementById("mediaDropdown").value;
    var displayArea = document.getElementById("media-display");

    // Clear previous content
    displayArea.innerHTML = "";

    // Display media based on selection
    if (selectedValue === "none"){
        displayArea.innerHTML = ""
    }else if (selectedValue === "black_cat") {
        displayArea.innerHTML = '<video class="meme_displayed" onloadstart="this.volume=0.25" autoplay controls src="memes/black_cat.mp4" ></video>';
    } else if (selectedValue === "hampsters_with_cat") {
        displayArea.innerHTML = '<video class="meme_displayed" onloadstart="this.volume=0.25" autoplay controls src="memes/hampster_cat.mp4"></video>';
    } else if (selectedValue === "rabbit") {
        displayArea.innerHTML = '<video class="meme_displayed" onloadstart="this.volume=1" autoplay controls src="memes/stone_rabbit.mov"></video>';
    } else if (selectedValue === "beep_cat") {
        displayArea.innerHTML = '<video class="meme_displayed" onloadstart="this.volume=0.25" autoplay controls src="memes/beep_cat.mp4"></video>';
    }
}
function play_sound() {
        //gets area where sound controls will spawn
        var sound_area = document.getElementById("sound_area");
        // sets that area to the sound and autoplays it
            sound_area.innerHTML = '<audio onloadstart="this.volume=0.25" autoplay controls loop src="memes/ambispace4.ogg"></audio> <br>';
            // sets the text to black for readability
            document.body.style.color = 'black';
}
//the omni-tool function command, how i loathe thee
function play_craps(){
    //the divine beings must hear harold of my arrival
    console.log("play_craps was called");
    //the dice of fate must be cast for the world to see
    var die1 = roll_die();
    //the fates have fortold that the first die cast shall be...
    console.log("die1 roll equals " + die1);

    var die2 = roll_die();

    console.log("die2 roll equals " + die2);
// the resulting decision of the fates is foretold in the god's breath
    var sum = die1 + die2;

    console.log("the sum of die1 and die2 equals " + sum);

    document.getElementById("die_1_result").innerHTML = "Die 1 is: " + die1;
    document.getElementById("die_2_result").innerHTML = "Die 2 is: " + die2;
    document.getElementById("sum_result").innerHTML = "The sum is: " + sum;

    //what is this game of fate we play called life
    // absolute symbol is an OR statement, double equals is checking if they are equal
    if (sum == 7 || sum == 11){
        document.getElementById("craps_result").innerHTML = "Fate has forsaken you today";
    }
    // how the beings of yore praytold that the numerical symbols were both even and equal
    else if(die1 == die2 && die1 % die2 == 0){
        document.getElementById("craps_result").innerHTML = "Fate smiles upon your good fortune";

    }
    // what to say when neither of your choices are available
    else{
        document.getElementById("craps_result").innerHTML = "Fate has not yet decided your outcome, roll again";
        
    }
}


//how the fates shall decide their allegience
function roll_die(){
    //a random number between 1-0
    var die = Math.random() * 6;
    //how to round to get rid of the pesky decimals
    return Math.ceil(die);
}

// riddle
function riddle_solver() {

    // get my riddles from the page and make string vars out of them
        var first_riddle = document.getElementById("riddle_1").value;
    
        var second_riddle = document.getElementById("riddle_2").value;
    
        var third_riddle = document.getElementById("riddle_3").value;
    // debugging to make sure they get saved
        console.log("what goes on four feet in the morning, two in the afternoon, and three at night? "+ first_riddle);
        console.log("What can run but never walks, Has a mouth but never talks, Has a bed but never sleeps, Has a head but never weeps? "+ second_riddle);
        console.log("The maker doesnt want it, the buyer does not use it, but user does not see it. "+ third_riddle);
        // if the riddle does NOT contain the word 'man', you get a wrong answer.
        // not exactly the best way of doing this but this is the quickest way to umbrella all the ways people might type out the answer
        if (!first_riddle.includes("man")){
            console.log("wrong answer");
            document.getElementById("checked_riddle_1").innerHTML ="The Sphinx is displeased";
        }
        // checks if the riddle does NOT contain river, if it doesn't you lose
        else if (!second_riddle.includes("river")){
            console.log("wrong answer");
            document.getElementById("checked_riddle_2").innerHTML ="The Sphinx is displeased";
        }
        // checks if not coffin, if not you lose
        else if (!third_riddle.includes("coffin")){
            console.log("wrong answer");
            document.getElementById("checked_riddle_3").innerHTML ="The Sphinx is displeased";
        }
        //clears all the previous lose messages and displays the success alert and secret meme.
        else{
            console.log("Riddles answered correctly");
            alert("You have correctly answered the Sphinx's riddles.");
            document.getElementById("checked_riddle_1").innerHTML ="";
            document.getElementById("checked_riddle_2").innerHTML ="";
            document.getElementById("checked_riddle_3").innerHTML ="";
            document.getElementById("secret_meme").innerHTML ='<video onloadstart="this.volume=0.25" controls src="memes/examine_birb.mp4"></video>';
    
        }
    
        return false
    }