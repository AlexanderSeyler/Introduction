function nameButton() {
    // Get the value of the input field with id "name"
    var x = document.getElementById("name").value;

    // Set the textContent of the element with id "name" to "Ernie"
    document.getElementById("name").textContent = "Ernie";

    // Return the value of x (optional, depends on your use case)
    return x;
}
