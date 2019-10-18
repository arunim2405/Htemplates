// TODO: Check if logged in
// TODO: Get User Data
// TODO: Set UI 

const name_reg=/^[a-z]{3,}$/i;
const email_reg=/^[a-z]+(_|\.)?[a-z0-9]*@[a-z]+\.[a-z]{2,}$/i;
const password_reg= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#\$%\^&\*])(?=.{8,})");
const date_reg = /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{4})*$/;
const username_reg = /^[0-9A-Za-z_.-]{4,}$/;
const loader = "<i class='fas fa-spinner fa-pulse'></i>";


const markAsValid = (field) => {
  field.classList.add("valid");
  field.classList.remove("invalid");
  $(`label[for=${field.id}]`).css({
    'color': 'green'
  })
}

const markAsInvalid = (field) => {
  field.classList.remove("valid");
  field.classList.add("invalid");
    $(`label[for=${field.id}]`).css({
    'color': 'red'
  })
}

const unmark = (field) => {
  field.classList.remove("valid");
  field.classList.remove("invalid");
  $(`label[for=${field.id}]`).css({
    'color': 'grey'
  })
  $(`span[id=connection-${field.id}]`).html("");
}

const flagIfInvalid = (field, isValid) => {
  isValid ? markAsValid(field) : markAsInvalid(field);
};

const checkEmail = ({target}) => {
  const intent = target.getAttribute('data-intent');
  const value = target.value;
  isValid = email_reg.test(value) ? true : false ;
  isValid ? checkIfRegistered(target) : flagIfInvalid(target, isValid);
  return isValid;
} 

const checkName = ({target}) => {
  const value = target.value;
  isValid = name_reg.test(value) ? true : false;
  flagIfInvalid(target, isValid);
  isValid ? $(`span[id=connection-${target.id}]`).html("is Ok") : $(`span[id=connection-${target.id}]`).html("A-Z only > 3");
  return isValid; 
}

const checkAge = (target) => {
  const value = date_reg.test(target.value) ? new Date(target.value) : false ;
  value ? ageinSec = today - value : ageinSec = false;
  isValid = ageinSec > 0 ? true: false;
  let noOfYears = Math.floor(ageinSec / (365 * 24 * 60 * 60 * 1000));
  isofAge = noOfYears >= 18 && noOfYears < 120 ? true : false;
  flagIfInvalid(target, isofAge); 
  // console.log(isofAge + " " + ageinSec + " " + typeof(ageinSec) + " " + noOfYears +"years old");
  isofAge ? $(`span[id=connection-${target.id}]`).html("is Ok") : $(`span[id=connection-${target.id}]`).html("must be > 18"); 
  return isofAge;
}

const checkUsername = ({target}) => {
  value = target.value;
  isValid = username_reg.test(value) ? true : false ;
  isValid ? checkIfAvailable(target) : $("#connection-username").html("letters, numbers, uderscore > 4");
  flagIfInvalid(target, isValid);
  return isValid;
}

const enableButton = (targetId, isValid) => {
  $(`#${targetId}`).toggleClass('disabled', !isValid);
}

$('#first-name, #last-name').on('blur', checkName);
document.querySelector('#login-email').addEventListener('blur', checkEmail);
document.querySelector('#signup-email').addEventListener('blur', checkEmail);
document.querySelector('#username').addEventListener('blur', checkUsername);
$(document).on('focusin',`#login-email, #signup-email, .name, #username, #pass1, #pass2`,function(){unmark(this)});
$(document).on('keyup', '#birthdate', function(){checkAge(this)});
$("#login-email, #login-password").on('keyup', function(){
  const email = $('#login-email').val();
  const password = $('#login-password').val();
  isValid = email_reg.test(email) && password_reg.test(password) ? true : false;
  enableButton('login-btn', isValid);
})

$('#login-btn').click(()=>{
  $('#login-btn').html(`Signing In ${loader}`).addClass('disabled');
  loginUser($('#login-email').val(), $('#login-password').val());
})

const showform = (num) => {
  stage = [...document.querySelectorAll('.sup')];
  stage[num].style.display = "block";
  num > 0 ? stage[num-1].style.display ="none" : stage[num].style.display = "block";
  num === 0 ? stage[num+1].style.display ="none" : stage[num].style.display = "block"; 
};

let currentForm = 0;
showform(currentForm);

const checkDetails1 = () => {
  namesValid = name_reg.test($('#first-name').val()) && name_reg.test($('#last-name').val()) ? true : false;
  gender = $('#gender').val() === null ? false : true;
  emailValid = email_reg.test($('#signup-email').val());
  isOfAge = checkAge(document.querySelector('#birthdate'));
  namesValid && gender && emailValid && isOfAge ? nextStep = localStorage.getItem('jojoisdbvalid'): nextStep = false;
  console.log(`${namesValid} && ${gender} && ${emailValid} && ${isOfAge} && ${nextStep}`);
  enableButton('signup-next', nextStep);  
};

const checkDetails2 = () => {
  let username = username_reg.test($("#username").val());
  let pass1 = $("#pass1").val();
  let pass2 = $("#pass2").val();
  let validPass = password_reg.test(pass1) ? true : false ;
  validPass ? $(`#connection-pass1`).html("is Ok") : $(`#connection-pass1`).html("needs uppercase, lowercase, numbers and symbol > 8");
  flagIfInvalid(document.querySelector("#pass1"), validPass);
  bothValid = validPass && pass1 === pass2 ? true : false;
  bothValid ? $(`#connection-pass2`).html("is Ok") : $(`#connection-pass2`).html("- Password Missmatch");
  flagIfInvalid(document.querySelector('#pass2'), bothValid);
  allowsup = username && validPass && bothValid ? true: false;
  enableButton('signup-next', allowsup); 
};

$('#s1 input').on('keyup', checkDetails1);
$('#s2 input').on('keyup', checkDetails2);
$('#gender').on('change', checkDetails1);

const user = {};

const addDetails1 = () => {
  user.firstname = $('#first-name').val();
  user.lastname = $('#last-name').val();
  user.email = $('#signup-email').val();
  user.gender =  $('#gender').val();
  user.birthdate = $('#birthdate').val();
};

const addDetails2 = () => {
  user.username = $('#username').val();
  user.pass = $('#pass2').val();
  M.toast({html : `email sent to ${user.email}`, classes: 'success', displayLength: 1500});
}

$('#signup-next').on('click', function(){
  let data = $('#signup-next').attr('data');
  let nextId = $('#signup-next').attr('id');
  let prevId = $('#signup-back').attr('id');

  if(data === "1"){
    addDetails1();
    showform(data);
    console.log(user);
    enableButton(nextId, false);
    enableButton(prevId, true);
  }else if(data === 2){
    addDetails2();
    showform(data);
    console.log(user);
    enableButton(nextId, false);
    enableButton(prevId, false);
    
  }
   
});