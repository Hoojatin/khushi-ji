document.getElementById("button").addEventListener("click", function() {
    // Hide the heart text button and message
    document.getElementById("heartTxt").style.display = "none";

    // Show the testingCode div
    document.getElementById("testingCode").style.display = "block"; // You can also use "block" depending on your layout

    // Optionally, you can add a delay if needed, e.g., after 200ms:
    // setTimeout(function() {
    //     document.getElementById("testingCode").style.display = "flex";
    // }, 200);
});