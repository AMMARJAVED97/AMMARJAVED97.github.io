
let popped = 0;

document.addEventListener('mouseover', function(e){
    
    if (e.target.className === "balloon"){
        
                e.target.style.backgroundColor = "#ededed";
               
                e.target.textContent = "POP!";
                
                
                popped++;
                removeEvent(e);
                checkAllPopped();
    }   
});

function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
        
    })
};

function checkAllPopped(){
    if (popped === 24){
        console.log('all popped!');
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
};
const onSignup = () => {
    // getting values from HTML
    const userName = document.getElementById("userName").value,
        email = document.getElementById("email").value,
        password = document.getElementById("password").value;
    // getting button to show error messages
    let regBtn = document.getElementById("regBtn");
    // checking that fields are not empty
    if (userName && email && password) {

        // getting or creating new main object in localstorage
        let teamReporter = JSON.parse(localStorage.getItem("teamReporter")) || {};
        // getting or creating new sub object from main object in localstorage
        teamReporter.users = teamReporter.users || {};

        // getting all users uid in array
        let validation = Object.keys(teamReporter.users);
        // checking user if already exist or not
        let userIdx = validation.findIndex(val => teamReporter.users[val]["email"].toLowerCase() === email.toLowerCase());

        if (userIdx === -1) {
            // this user doesn't exist
            // creating uid for new user
            let uid = new Date().getTime();
            // setting user through his uid as child object of object user, child of main object
            teamReporter.users[uid] = {
                    uid,
                    userName,
                    email,
                    password,
                    admin: [],
                    members: []
                }
                // store in storage
            localStorage.setItem("teamReporter", JSON.stringify(teamReporter));
            // redirect to login page
            location.href = "login.html";
        } else {
            regBtn.value = "Email Already Exist!";
            regBtn.classList.add("red-btn");
            regBtn.classList.remove("input-btn");
        }
    } else {
        regBtn.value = "All Fields Are Required!";
        regBtn.classList.add("red-btn");
        regBtn.classList.remove("input-btn");
    }
    // clear state
    setTimeout(() => {
        regBtn.value = "Register";
        regBtn.classList.remove("red-btn");
        regBtn.classList.add("input-btn");
    }, 2000);
}

const onLogin = () => {
    // getting values from HTML
    const email = document.getElementById("email").value,
        password = document.getElementById("password").value;
    // getting button to show error messages
    let loginBtn = document.getElementById("loginBtn");
    // checking that fields are not empty
    if (email && password) {
        // getting main object to see if user exist?
        const teamReporter = JSON.parse(localStorage.getItem("teamReporter"));
        // getting all users uid in array
        let validation = Object.keys(teamReporter.users);
        // checking in all users, if that email exist?
        let userIdx = validation.find(val => teamReporter.users[val]["email"].toLowerCase() === email.toLowerCase());
        if (userIdx) {
            // user email exist
            // checking if that email exist with this password?
            let currentUser = validation.find(val => teamReporter.users[val].email.toLowerCase() === email.toLowerCase() && teamReporter.users[val].password === password);
            if (currentUser) {
                // correct email password
                // setting current user in LS
                localStorage.setItem("user", JSON.stringify(teamReporter.users[currentUser]));
                // redirecting to login page
                location.href = "./index.html";
            } else {
                loginBtn.value = "Incorrect Password!";
                loginBtn.classList.remove("input-btn");
                loginBtn.classList.add("red-btn");
            }
        } else {
            loginBtn.value = "Email Not Registered!";
            loginBtn.classList.remove("input-btn");
            loginBtn.classList.add("red-btn");
        }
    } else {
        loginBtn.value = "All Fields Are Required!";
        loginBtn.classList.remove("input-btn");
        loginBtn.classList.add("red-btn");
    }
    // clear state
    setTimeout(() => {
        loginBtn.value = "Login";
        loginBtn.classList.remove("red-btn");
        loginBtn.classList.add("input-btn");
    }, 2000);
}

const locationCheck = () => {
    // getting current user object from LS
    const user = JSON.parse(localStorage.getItem("user"));
    // if present, redirecting to dashboard
    if (user) {
        location.href = "./index.html";
    }
}