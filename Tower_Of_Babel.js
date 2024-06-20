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