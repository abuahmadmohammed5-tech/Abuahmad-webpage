// Youth Hub training areas
const trainingAreas = [
    "Entrepreneurship",
    "Leadership",
    "Sustainability",
    "Operations Management",
    "Maritime Innovation"
];

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

    } else {

        // Check whether the selected area exists
        let validArea = false;

        for (let i = 0; i < trainingAreas.length; i++) {

            if (area === trainingAreas[i]) {
                validArea = true;
                break;
            }
        }

        if (validArea) {

            registrationMessage.textContent =
                "Thank you, " + name +
                "! Your registration for " + area +
                " has been received.";

            registrationForm.reset();

        } else {

            registrationMessage.textContent =
                "Please select a valid training area.";
        }
    }
});