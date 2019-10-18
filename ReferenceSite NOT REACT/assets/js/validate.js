$("#ride-next").click(function(e) {
  e.preventDefault();
  let number = e.target.getAttribute("data-to");
  let state = parseInt(number, 10);
  let nextState = state + 1;

  if (nextState < 5) {
    console.log(`${state} ${nextState}`);
    e.target.setAttribute("data-to", nextState);
    $("#ride-back").attr("data-to", state);
    $(`#${state}`).addClass("show-out-left");
    $(`#${nextState}`).addClass("show-in");
    $(`#${nextState}`).removeClass("show-out-right");
  } else {
    $(`#${state}`).addClass("show-out-left");
    $(`#${nextState}`).addClass("show-in");
    $(`#${nextState}`).removeClass("show-out-right");
    $("#ride-back").attr("data-to", 4);
    console.log(`${state} ${nextState}`);
    M.toast({
      html: "Ride Added Successfully!",
      classes: "rounded",
      displayLength: "3000"
    });
  }
});

$("#ride-back").click(function(e) {
  e.preventDefault();
  let number = e.target.getAttribute("data-to");
  let prevState = parseInt(number, 10);
  let currState = prevState + 1;
  let endState = currState + 1;
  let nextBack = prevState - 1;
  if (prevState > 0) {
    console.log(`${currState} ${prevState}`);
    $(`#${currState}`).addClass("show-out-right");
    $(`#${prevState}`).addClass("show-in");
    $(`#${prevState}`).removeClass("show-out-left");
    e.target.setAttribute("data-to", nextBack);
    $("#ride-next").attr("data-to", prevState);
  } else {
    M.toast({
      html: "Can't Go Back sorry!",
      classes: "rounded",
      displayLength: "3000"
    });
  }
});

