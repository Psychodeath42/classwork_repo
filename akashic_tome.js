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


// Drop down menu code
function displayMedia() {
    var selectedValue = document.getElementById("mediaDropdown").value;
    var displayArea = document.getElementById("media-display");

    // Clear previous content
    displayArea.innerHTML = "";

    // Display media based on selection
    if (selectedValue === "cats") {
        displayArea.innerHTML = '<video onloadstart="this.volume=0.25" controls src="memes/Cats.mov" ></video>';
    } else if (selectedValue === "warcrimes") {
        displayArea.innerHTML = '<img src="memes/warcrimes.gif" alt="Image">';
    } else if (selectedValue === "possums") {
        displayArea.innerHTML = '<video onloadstart="this.volume=0.25" controls src="memes/chonky_possum.mp4"></video>';
    } else if (selectedValue === "snowboarding_cat") {
        displayArea.innerHTML = '<video onloadstart="this.volume=0.25" controls src="memes/cat_snowboard.mp4"></video>';
    } else if (selectedValue === "doggy_dango") {
        displayArea.innerHTML = '<video onloadstart="this.volume=0.25" controls src="memes/doggy_dango.mp4"></video>';
    } else if (selectedValue === "otter_jazz") {
        displayArea.innerHTML = '<video onloadstart="this.volume=0.25" controls src="memes/otter_jazz.mov"></video>';
    }else if (selectedValue === "dummy_guy") {
        displayArea.innerHTML = '<video onloadstart="this.volume=0.25" controls src="memes/dummy_little_guy.mp4"></video>';
    }
}

// our function to validate the log in information
function val_login_form() {

// gets the name variable from the html and puts it as a jscript var
    var first_name = document.getElementById("first_name").value;

    var last_name = document.getElementById("last_name").value;

    var zip = document.getElementById("zip").value;

    console.log("first name:"+ first_name);
    console.log("last name:"+ last_name);
    console.log("zip code:"+ zip);

    // create variable to consolidate the info
    var full_info = first_name + " " + last_name;
    console.log("full name: " + full_info);
    // checks for greater than 20 characters or if no characters were inputted
    if (full_info.length > 20 || full_info.length == 1){
        console.log("Invalid name");
        document.getElementById("return_info").innerHTML ="You have angered the ArchFae";
    }
    else if (zip.length != 5){
        console.log ("invalid zipcode");
        document.getElementById("return_info_zip").innerHTML ="Your presence is displeasing the entities";
    }
    else{
        console.log("Sacrifice accepted");
        alert("Your name has been forfeited to the ArchFae");
        document.getElementById("return_info_zip").innerHTML ="";
        document.getElementById("return_info").innerHTML ="";
        document.getElementById("secret_meme").innerHTML ='<video onloadstart="this.volume=0.25" controls src="memes/eek_the_cat.mp4"></video>';

    }

    return false
}

var interval_id = 0;
// function that makes the dvd logo go to a random spot
function dvd_bounce() {
// get the dvd logo
    var DVD = document.getElementById("dvd_icon");
//sets the interval
    interval_id = setInterval(function(){
// get new X co-ord
        var new_x = get_random_coord();
//gets new Y co-ord
        var new_y = get_random_coord();
// sets the DVD variables position to the new X and Y
        DVD.style.left = new_x + "px";
        DVD.style.top = new_y + "px";
// logs it for my sake
        console.log("x: " + DVD.style.left + " y: " + DVD.style.top);
    }, 1000); // the 1000 is equal to 1 second in milliseconds
// this will move the dvd every one second  
}

function dvd_stop(){
    clearInterval(interval_id)
}

function get_random_coord(){
    return Math.floor(Math.random() * 1000);
}

function pali_check(){

    document.getElementById("pali_word").innerHTML ="";

    //var pali_word = document.getElementById("pali_word").value;
    //console.log("THIS= " + pali_word)
    //console.log(pali_auth(pali_word) );
    
    var b_continue = true;

    do{
        //gets the word from the text input
        var pali_word = document.getElementById("pali_word").value;
        // checks text input for palidrome
        var pali_bool = pali_auth(pali_word)

        var message = "";

        if(pali_bool){
            message = pali_word + " has been accepted by the council...";
            
            document.getElementById("secret_meme2").innerHTML ='<video onloadstart="this.volume=0.25" controls src="memes/lizard_dance.mp4"></video>';
        }
        else{
            message = pali_word + " has incured the wrath of the council!";
        }

        document.getElementById("pali_result").innerHTML = (message);
        
        var still_play = prompt("Do you still wish to submit? y/n")

        if (still_play = "n"){
            b_continue = false;
        }
    }

    while(b_continue);
}

function pali_auth(pali_word){
    //get rid of spaces and lower the case of submitted word
    var pali_clean = pali_word.replace(/\s/g, "").toLowerCase();

    console.log("palidrome=" + pali_clean);
 //splits it into array and reverses it
    var word_array = pali_clean.split("");

    var reved_array = word_array.reverse();

    var reved_join = reved_array.join("");

    console.log("reversed word=" + reved_join)

    return pali_clean == reved_join;
}