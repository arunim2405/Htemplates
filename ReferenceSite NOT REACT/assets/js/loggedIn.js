// TODO: Check if Logged in
// TODO: Update UI Fields
// TODO: Get Notification counts
// TODO: Get Timers

const user = {};
const loader = "<i class='fas fa-spinner fa-pulse'></i>";

const updateUI = (email) => {
  $('.email').html(email);
  $('.name').html(email.split('@')[0]);
};

const checkIfLoggedIn = () => {
  // get details from local storage
  const email = localStorage.getItem('jojoemail');
  const pass = localStorage.getItem('jojopass');
  user.email = email && pass ? user.email = email : '';
  email && pass ? M.toast({html: `Welcome ${email}`, classes: "success", displayLength: 1000}) : M.toast({html: `Not Logged In`, classes: "error", completeCallback: () => { window.location.replace("../index.html"); }, displayLength: 1000});
  // Compare with session Data via Ajax request
  updateUI(email);
}

checkIfLoggedIn();



const logout = () => {
    localStorage.removeItem('jojoemail');
    localStorage.removeItem('jojopass');
    localStorage.removeItem('jojoid');
    M.toast({html : `loggin out &nbsp; ${loader}`, completeCallback: () => { window.location.replace("../index.html");}, displayLength: 1000 });
};

$('.logout').click(() => logout());
