function errorMessage(errors, id) {
    var value = document.getElementById(id);
    value.innerHTML = errors;
}

// adding the label in html for success and error
function errorModal(input) {
    var value = document.getElementById("link_expire_container");
    if (input === "success") {
        value.innerHTML = "<strong>Successfully your form has sent!Thank you</strong><p>We will work on it</p>";
        value.classList.add("success");
    } else {
        value.innerHTML = "<strong>Error!</strong> Link got Expire<p>Please contact the customercare</p>";
        value.classList.add("error");
    }
}


//photo upload
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        var label = document.getElementById("photo_label");
        label.innerText = "";
        reader.onload = function(e) {
            $('#upload')
                .attr('src', e.target.result)
                .width(100)
                .height(100);
        };

        reader.readAsDataURL(input.files[0]);
    }

}

/* display timer */
var form = document.getElementById("contact-form");
var timer = document.getElementById("timer");
window.onload = () => {
    var is_value = "true";

    if (is_value) {
        form.style.display = "block";
        timer.style.display = "none";
    } else {
        form.style.display = "none";
        timer.style.display = "block";
    }
}

/* */