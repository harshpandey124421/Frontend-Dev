// Q4_custom_form_builder.js
"use strict";

class FormBuilder {
  constructor(fields) {
    this.fields = fields;
  }

  renderForm(containerId) {
    let formHTML = "";
    this.fields.forEach(f => {
      formHTML += `<label>${f.label}</label><input type="${f.type}" id="${f.label}"><br>`;
    });
    document.getElementById(containerId).innerHTML = formHTML + '<button onclick="getData()">Submit</button>';
  }
}

function getData() {
  let data = {};
  document.querySelectorAll("input").forEach(inp => {
    data[inp.id] = inp.value;
  });
  console.log("Form Data:", data);
}
