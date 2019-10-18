//Initializations
document.addEventListener("click", function(e){
  e.preventDefault();
  if(e.target.classList.contains("footer-link")){
    test(e.target.textContent);
  }});


// GET UI Elements
const loginMenu = document.getElementById("login-menu");
const rideMenu = document.getElementById("ride-menu");

const loginMenuBtn = Array.from(document.querySelectorAll(".login"));
const signupMenuBtn = Array.from(document.querySelectorAll(".signup"));
const offerRideBtn = Array.from(document.querySelectorAll(".add-ride"));
const searchRideBtn = Array.from(document.querySelectorAll(".search-rides"));

const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const addRideForm = document.getElementById("add-ride-form");
const searchRideForm = document.getElementById("search-ride-form");

const cyear = document.getElementById("year");

// Set Initial State of Menus
let showLoginMenu = false,
  showRideMenu = false,
  showLoginForm = false,
  showSignupForm = false,
  showRideSearchForm = false,
  showRideAddForm = false;

// Copy right year
let today = new Date();
cyear.innerHTML = `${today.getFullYear()}`;

// Events
loginMenuBtn.forEach(elem => {
  elem.addEventListener("click", showLoginModal);
});

signupMenuBtn.forEach(elem => {
  elem.addEventListener("click", showSignupModal);
});

offerRideBtn.forEach(elem => {
  elem.addEventListener("click", showRideModal);
});

searchRideBtn.forEach(elem => {
  elem.addEventListener("click", showSearchModal);
});

function showLoginModal(e) {
  e.preventDefault();
  if (!showLoginMenu) {
    // Reveal Login Modal if not open
    loginMenu.classList.add("show");
    loginForm.classList.add("show");
    signupForm.classList.remove("show");
    rideMenu.classList.remove("show");

    // Reset Menu State
    showLoginMenu = true;
    showsignupForm = false;
    showRideMenu = false;
  } else if (showLoginMenu && !showLoginForm) {
    loginForm.classList.add("show");
    signupForm.classList.remove("show");
    // if Login Modal open but not login form
    showSignupForm = false;
    showLoginForm = true;
    // if Login Modal open but not login form
  } else {
    // if Login Modal open and login form open
    loginMenu.classList.remove("show");

    showLoginMenu = false;
  }
}

function showSignupModal(e) {
  e.preventDefault();
  if (!showLoginMenu) {
    // Reveal Login Modal if not open
    loginMenu.classList.add("show");
    loginForm.classList.remove("show");
    signupForm.classList.add("show");
    rideMenu.classList.remove("show");

    // Reset Menu State
    showLoginMenu = true;
    showLoginForm = false;
    showSignupForm = true;
    showRideMenu = false;
  } else if (showLoginMenu && !showSignupForm) {
    loginForm.classList.remove("show");
    signupForm.classList.add("show");
    showSignupForm = true;
    showLoginForm = false;
  } else {
    // if Login Modal open and login form open
    loginMenu.classList.remove("show");
    showLoginMenu = false;
  }
}

function showRideModal(e) {
  e.preventDefault();
  if (!showRideMenu) {
    rideMenu.classList.add("show");
    loginMenu.classList.remove("show");
    addRideForm.classList.add("show");
    searchRideForm.classList.remove("show");
    showLoginMenu = false;
    showRideMenu = true;
    showRideAddForm = true;
    showRideSearchForm = false;
  } else if (showRideMenu && !showRideAddForm) {
    addRideForm.classList.add("show");
    searchRideForm.classList.remove("show");
    showRideAddForm = true;
    showRideSearchForm = false;
  } else {
    rideMenu.classList.remove("show");

    showRideMenu = false;
  }
}

function showSearchModal(e) {
  e.preventDefault();
  if (!showRideMenu) {
    rideMenu.classList.add("show");
    loginMenu.classList.remove("show");
    addRideForm.classList.remove("show");
    searchRideForm.classList.add("show");
    showLoginMenu = false;
    showRideMenu = true;
    showRideAddForm = false;
    showRideSearchForm = true;
  } else if (showRideMenu && !showRideSearchForm) {
    addRideForm.classList.remove("show");
    searchRideForm.classList.add("show");
    showRideAddForm = false;
    showRideSearchForm = true;
  } else {
    rideMenu.classList.remove("show");

    showRideMenu = false;
  }
}
