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
        displayArea.innerHTML = '<video onloadstart="this.volume=0.25" autoplay controls src="memes/black_cat.mp4" ></video>';
    } else if (selectedValue === "hampsters_with_cat") {
        displayArea.innerHTML = '<video onloadstart="this.volume=0.25" autoplay controls src="memes/hampster_cat.mp4"></video>';
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