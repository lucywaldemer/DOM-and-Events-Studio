// Write your JavaScript code here.
// Remember to pay attention to page loading!
//window.addEventListener("load", function(){ is a different way than init
// document.addEventListener('readystatechange', function(){
//     if(document.readyState === 'complete'){
//         init();
//     }
// });
onload = function init(){

  const takeOff = document.getElementById("takeoff");
  const flightStatus = document.getElementById("flightStatus");
  const flightScreen = document.getElementById("shuttleBackground");
  const shuttleHeight = document.getElementById("spaceShuttleHeight");
  const land = document.getElementById("landing");
  const abortMission = document.getElementById("missionAbort");
  const up = document.getElementById("up");
  const down = document.getElementById("down");
  const right = document.getElementById("right");
  const left = document.getElementById("left");
  const rocketImage = document.getElementById("rocket");
  const flightDisplay = document.getElementById("flightDisplay");
  // rocket positioning
  rocketImage.style.position = "absolute";

  rocketImage.style.width = "10%";
  rocketImage.style.bottom = "0%";
  rocketImage.style.right = "45%";

  //takeoff button
  takeOff.addEventListener("click", function() {
    const confirmTakeoff = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if (confirmTakeoff){
      flightStatus.innerHTML = "Shuttle in flight.";
      flightScreen.style.backgroundColor = "blue" ;
      shuttleHeight.innerHTML = "10000";
    }
  });

  // landing button
  land.addEventListener("click", function() {
    alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed.";
    flightScreen.style.backgroundColor = "green" ;
    shuttleHeight.innerHTML = "0";
  });

  //Abort mission button
  abortMission.addEventListener("click", function() {
    const abortMissionConfirm = window.confirm("Confirm that you want to abort the mission.")
    if (abortMissionConfirm){
      flightStatus.innerHTML = "Mission aborted.";
      flightScreen.style.backgroundColor = "green" ;
      shuttleHeight.innerHTML = "0";
      rocketImage.style.bottom = "0";
      rocketImage.style.right = "45%";
    }
  });

  // up, down, left, right buttons
  up.addEventListener("click" , function() {
    let originalPositionUp = parseInt(rocketImage.style.bottom);
    let newPositionUp = originalPositionUp + 2;
    let newPositionPixelsUp = newPositionUp + '%';
    rocketImage.style.bottom = newPositionPixelsUp;
  });

  down.addEventListener("click" , function() {
    let originalPositionDown = parseInt(rocketImage.style.bottom);
    let newPositionDown = originalPositionDown - 2;
    let newPositionPixelsDown = newPositionDown + '%';
    rocketImage.style.bottom = newPositionPixelsDown;
  });

  right.addEventListener("click" , function() {
    let originalPositionRight = parseInt(rocketImage.style.right);
    let newPositionRight = originalPositionRight - 2;
    let newPositionPixelsRight = newPositionRight + '%';
    rocketImage.style.right= newPositionPixelsRight;
  });

  left.addEventListener("click" , function() {
    let originalPositionLeft = parseInt(rocketImage.style.right);
    let newPositionLeft = originalPositionLeft + 2;
    let newPositionPixelsLeft = newPositionLeft + '%';
    rocketImage.style.right= newPositionPixelsLeft;
  });

};
