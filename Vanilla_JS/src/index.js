/*
# Author: Nick Leslie, Max Owens
# Title: Project Failure Calculator
#
# Description: The purpose of the file is to calculate the chance
# of project failure in the IT industry
#
# Created: 16/04/2020
# Modified: 16/04/2020
*/

// For every new question section that gets added
// Please add the radio box name and weighting it has on the final project
const ALL_OF_THE_QUESTIONS = {
  "External Communication Management": {
    terms: [
      { name: "ineffective_external_interaction", weighting: 1 },
      { name: "poor_stakeholder_management", weighting: 1 }
    ]
  }
};

const FAILURE_THRESHOLD = 50;

// Calculate the results based on what the user has input
function calculateResults() {
  let results = 0;
  // Might need to do some magic math stuff here
  for (let grouping in ALL_OF_THE_QUESTIONS) {
    ALL_OF_THE_QUESTIONS[grouping]["terms"]
      /*eslint-disable */
      .forEach(term => {
        document.getElementsByName(term["name"]).forEach(radioBtn => {
          if (radioBtn.checked)
            results += parseInt(radioBtn.value, 10) * term["weighting"];
        });
        /*eslint-enable */
      });
  }
  displayResultsToUser(results);
}

// Show the calculated chance of failure results to the user
function displayResultsToUser(results) {
  let resultsText = document.getElementById("results__text");
  if (results) {
    resultsText.innerHTML = results + "% chance of project failure";

    // If failing, make sure the user knows it is bad
    if (results > FAILURE_THRESHOLD) {
      resultsText.classList.add("alert");
      resultsText.classList.add("alert-danger");
    } else {
      resultsText.classList.add("alert");
      resultsText.classList.add("alert-success");
    }
  }
}

// Display Calculate results section if there are values in any
// input section by adding an event listener to each radio button
for (let key in ALL_OF_THE_QUESTIONS) {
  ALL_OF_THE_QUESTIONS[key]["terms"].forEach(term => {
    document.getElementsByName(term["name"]).forEach(radioBtn => {
      radioBtn.addEventListener("input", function(e) {
        changeResultsDisplayState(this.value);
      });
    });
  });
}

// Make the results card appear if a non-null value is selected
function changeResultsDisplayState(input) {
  if (input) document.getElementById("results").style.display = "block";
}

// Declare and add event listener to results button
// Results button will be the final button clicked by the user
// that displays their results.
// Results == chance of project failure
var resultsBtn = document.getElementById("results__btn");
resultsBtn.addEventListener("click", calculateResults);
