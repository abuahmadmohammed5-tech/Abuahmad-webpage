// Youth Hub training areas
const trainingAreas = [
    "Entrepreneurship",
    "Leadership",
    "Sustainability",
    "Operations Management",
    "Maritime Innovation"
];

// Google Apps Script Web App URL
const googleSheetURL = "https://script.google.com/macros/s/AKfycbx_1HbeulgL0hV7Gxvf9MmS1mfJyYzxJGKUeHS2PMLiRMKR3W6-J9EARuU8Xz6gQGAr/exec";

// Get the registration form
const registrationForm = document.getElementById("registrationForm");

// Get the message area
const registrationMessage = document.getElementById("registrationMessage");

// Registration form event
registrationForm.addEventListener("submit", function(event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Get user information
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const area = document.getElementById("area").value;

    // Check if all information has been entered
    if (name === "" || email === "" || area === "") {

        registrationMessage.textContent =
            "Please complete all the registration fields.";

        return;
    }

    // Check whether the selected area exists
    let validArea = false;

    for (let i = 0; i < trainingAreas.length; i++) {

        if (area === trainingAreas[i]) {
            validArea = true;
            break;
        }
    }

    if (!validArea) {

        registrationMessage.textContent =
            "Please select a valid training area.";

        return;
    }

    // Prepare registration information
    const registrationData = {
        name: name,
        email: email,
        area: area
    };

    // Send registration to Google Sheets
    fetch(googleSheetURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(registrationData)
    })
    .then(function() {

        registrationMessage.textContent =
            "Thank you, " + name +
            "! Your registration for " + area +
            " has been received.";

        registrationForm.reset();

    })
    .catch(function() {

        registrationMessage.textContent =
            "Your registration could not be submitted. Please try again.";

    });

});