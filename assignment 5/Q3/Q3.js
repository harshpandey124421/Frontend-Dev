// Q3_arrow_function_this.js
"use strict";

let user = {
  name: "Harsh",
  showName: () => {
    console.log("Arrow this.name:", this.name);
  }
};

user.showName();
// explanation: arrow functions do NOT have their own 'this'. They use outer scope.

let fixedUser = {
  name: "Harsh",
  showName: function() {
    console.log("Normal this.name:", this.name);
  }
};

fixedUser.showName();
