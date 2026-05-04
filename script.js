// SIMPLE OCEAN FACTS
const oceanFacts = [
    "Humpback whales can travel thousands of miles during migration.",
    "Dolphins use echolocation to navigate and hunt for food.",
    "Octopuses have three hearts and blue blood.",
    "Squid are some of the fastest invertebrates in the ocean.",
    "Whales are mammals and must come to the surface to breathe air."
];

// RANDOM FACT BUTTON
document.addEventListener("DOMContentLoaded", function () {
    const factButton = document.getElementById("fact-button");
    const factOutput = document.getElementById("fact-output");

    if (factButton && factOutput) {
        factButton.addEventListener("click", function () {
            const index = Math.floor(Math.random() * oceanFacts.length);
            factOutput.textContent = oceanFacts[index];
        });
    }

    // IMAGE ROLLOVER (INTERACTIVE IMAGE FEATURE)
    const featureImg = document.getElementById("feature-animal");
    if (featureImg && featureImg.dataset.altSrc) {
        const originalSrc = featureImg.src;
        const altSrc = featureImg.dataset.altSrc;

        featureImg.addEventListener("mouseover", function () {
            featureImg.src = altSrc;
        });

        featureImg.addEventListener("mouseout", function () {
            featureImg.src = originalSrc;
        });
    }

    // SIMPLE FORM VALIDATION
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const message = document.getElementById("message");

            if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
                alert("Please fill out all fields before submitting.");
                e.preventDefault();
                return;
            }

            if (!email.value.includes("@")) {
                alert("Please enter a valid email address.");
                e.preventDefault();
                return;
            }

            alert("Thank you! Your message has been submitted.");
        });
    }
});
