function onSignup() {
    // get input values
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var message = document.getElementById("message");
    var Username = document.getElementById("Username");
    var conpass = document.getElementById("conpass");
    var user = {
        email: email.value,
        password: password.value,
        Username: Username.value,
        conpass: conpass.value,
    }

    var users = JSON.parse(localStorage.getItem("users")) || [];
    // get indx
    var userIdx = users.findIndex(function(val) {
        return val.email.toLowerCase() === user.email.toLowerCase()
    });
    if (userIdx === -1) {
        // this user is not exist
        users.push(user);
        // store in storage
        localStorage.setItem("users", JSON.stringify(users));
        // redirect to login page
        location.href = "login.html";

    } else if (user.email === "") {
        message.innerHTML = " ";

    } else {
        message.innerHTML = " This Email Address Is Already Registered---";
    }
    // clear state
    setTimeout(() => {
        message.innerHTML = "";
    }, 2000);


    // console.log(user);


}

function onLogin() {
    // get input values
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var message = document.getElementById("message");
    var user = {
        email: email.value,
        password: password.value,

    }

    var users = JSON.parse(localStorage.getItem("users")) || [];
    // get indx
    var currentUser = users.find(function(val) {
        return val.email.toLowerCase() === user.email.toLowerCase() && val.password === user.password;
    });

    if (currentUser) {
        localStorage.setItem("user", JSON.stringify(currentUser));
        // user login
        location.href = "index.html";
    } else {
        message.innerHTML = "Login Failed Either password or email is Incorrect";
    }
    // clear state
    setTimeout(() => {
        message.innerHTML = "";
    }, 3000);
}

function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}


function disp() {
    var y = document.getElementById("conpass");
    if (y.type === "conpass") {
        y.type = "text";
    } else {
        y.type = "conpass";
    }
}





function onLogout() {
    var message = document.getElementById("message");
    localStorage.removeItem("user");
    message.innerHTML = "Good Bye.!";
    // clear state
    setTimeout(() => {
        location.href = "login.html";
    }, 2000);
}

function getCurrentUser() {
    var detial = document.getElementById("detial");
    var user = JSON.parse(localStorage.getItem("user"));
    detial.innerHTML = "Loggedin as " + user.email.split("@")[0];
}