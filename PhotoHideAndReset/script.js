var image = document.getElementById("image");
var showButton = document.getElementById("showButton");
var hideButton = document.getElementById("hideButton");

function showImage() {
    image.style.display = "block";
    showButton.disabled = true;
    hideButton.disabled = false;
    alert("image will be shown")
}

function hideImage() {
    image.style.display = "none";
    showButton.disabled = false;
    hideButton.disabled = true;
    alert('image will be hidden')
}
