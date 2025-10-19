"use strict";

var saveBtn = document.querySelector("#input-btn");
var inputEl = document.querySelector("#input-el");
var ulEl = document.getElementById("ul-el");
var myLeads = [];
saveBtn.addEventListener("click", function () {
  myLeads.push(String(inputEl.value));
  renderLeads();
});

function renderLeads() {
  ulEl.innerHTML = "";
  var listItems = "";
  myLeads.forEach(function (element) {
    listItems += "<li>".concat(element, "</li>");
  });
  ulEl.innerHTML = listItems;
}