//the omni-tool function command, how i loathe thee
function play_craps(){
    //the divine beings must hear harold of my arival
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
    else if(die1 == die2 && die1 % 2 == 0){
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