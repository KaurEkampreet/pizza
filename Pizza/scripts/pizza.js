document.getElementById("pizza-form").onsubmit = validate;

function validate() {

    var isValid = true;

    //clear all error message
    var errors = document.getElementsByClassName("err");
    for (var i = 0; i<errors.length; i++) {
        errors[i].style.visibility = "hidden";
    }

    // var isValid;
    //check the first name
    var first = document.getElementById("firstName").value;
    if (first == "") {
        var errFirst = document.getElementById("err-fname");
        errFirst.style.visibility = 'visible';
        isValid = false;
    }

    //check last name
    var last = document.getElementById("lastName").value;
    if (last == "") {
        var errLast = document.getElementById("err-lname");
        errLast.style.visibility = 'visible';
        isValid = false;
    }

    //check size
    var size = document.getElementById("size").value;
    if (size == "none") {
        var errSize = document.getElementById("err-size");
        errSize.style.visibility = 'visible';
        isValid = false;

        return isValid;
    }

    alert("Hello, World!");
}