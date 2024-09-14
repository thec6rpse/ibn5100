// ARIA Progress bar
// Find the progress bar <div> in the DOM
const progressBar = document.getElementById("percent-loaded");

//Set its ARIA roles and states,
//so the assistive technologies know what kind of widget it is.
progressBar.setAttribute("role", "progressbar");
progressBar.setAttribute("aria-valuemin", 0);
progressBar.setAttribute("aria-valuemax", 100);

// Create a function that can be called at any time to update
// the value of the progress bar.
function updateProgress(percentComplete) {
    progressBar.setAttribute("aria-valuenow", percentComplete);
}