$(document).ready(function () {
    var entries = [];

    // Event handler for the submit button
    $("#submitBtn").click(function (e) {
        e.preventDefault(); // Prevent form submission

        var entry1 = $("#textbox1").val().trim();
        var entry2 = $("#textbox2").val().trim();

        if (entry1 !== "" && entry2 !== "") {
            // Add the entries to the array
            entries.push(entry1);
            entries.push(entry2);

            // Display the updated array
            for(let i = 0; i < entries.length; i++) {


            $("#result"+i).text(entries);
            }

        // Clear the textboxes
        $("#textbox1").val("");
        $("#textbox2").val("");
    }});

for(let i = 0; i < entries.length; i++) {
    for(entry in entries) {
    $("#result"+i).text(entry);
    document.getElementById("myImg").src = entry;
    }
}});
