// Q5_boolean_logic_access_system.js
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

function check() {
  if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
    console.log("Secure");
  } else {
    console.log("Unsafe");
  }
}

check();
isOwnerInside = false;
check();
