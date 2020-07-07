/* function validation() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "10px";

    if(name.length <3){
        text = "Please Enter valid name";
        error_message.innerHTML = text;
        return false;
    }

    if (isNaN(phone) || phone.length != 10 ) {
        text = " please enter valid number";
        error_message.innerHTML = text;
        return false;
    }

    if (email.indexOf("@") == -1 || email.length < 4) {
        text = " please enter valid email";
        error_message.innerHTML = text;
        return false;
    }

    if (message.length <= 140) {
        text = " please enter more than 140 characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully")
    return true;
}
