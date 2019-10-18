// Get Ride Input Details
const ride = {};
ride.startState = document.getElementById("startState").value;
ride.startDistrict = document.getElementById("startDistrict").value;
ride.endState = document.getElementById("endState").value;
ride.endDistrict = document.getElementById("endDistrict").value;
ride.startDate = document.getElementById("startDate").value;
ride.returnTrip = document.getElementById("returnTrip").value;
ride.returnDate = document.getElementById("returnDate").value;
ride.seats = document.getElementById("seats").value;
ride.backSeatMax = document.getElementById("backSeatMax").value;
ride.details = document.getElementById("details").value;
ride.description = document.getElementById("description").value;
ride.priceOffered = document.getElementById("priceOffered").value;
console.log(ride);
