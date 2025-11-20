// Q6_event_based_counter_simulation.js
let count = 0;

function increment() {
  function go() {
    count++;
    console.log("Count:", count);
  }
  go();
}

function decrement() {
  function go() {
    count--;
    console.log("Count:", count);
  }
  go();
}

increment();
increment();
decrement();
increment();
