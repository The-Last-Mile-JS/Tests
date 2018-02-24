probToLink = {
    0: "https://raw.githubusercontent.com/The-Last-Mile-JS/Tests/master/problem1.js",
    1: "https://raw.githubusercontent.com/The-Last-Mile-JS/Tests/master/problem2.js"
}

$(document).ready(function() {
    $("button").click(function(e) {
        // hashing names
        // // create a hashcode for the student's name
        var firstName = $("#firstnamefield").val();
        var lastName = $("#lastnamefield").val();
        var name = firstName + " " + lastName

        // var hash = 0;
        // const MULT = 997;
        // const PRIME = 12289;
        // for (var i = 0; i < firstName.length; i++) {
        //     hash = (hash * MULT + firstName.charCodeAt(i)) % PRIME;
        // }
        //
        // for (var i = 0; i < lastName.length; i++) {
        //     hash = (hash * MULT + lastName.charCodeAt(i)) % PRIME;
        // }
        //
        // // using the hashcode and randomization to access the coding test link

        const length = Object.keys(probToLink).length;
        var prob_idx = Math.floor(Math.random() * length);
        var link = probToLink[prob_idx]

        // download the link
        // var url = "https://raw.githubusercontent.com/The-Last-Mile-JS/Tests/master/problem1.js"
        // e.preventDefault();
        // window.location.href = url;
        $("#enterName").click(function(event) {
            event.preventDefault();
            $("#downloadTest").attr("href", link);
        });

    });
});
