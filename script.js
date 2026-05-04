// Random ocean facts for homepage
const facts = [
    "Humpback whales use complex songs to communicate across long distances.",
    "Octopuses have three hearts and blue blood.",
    "Dolphins are highly intelligent marine mammals that live in social groups.",
    "Squid can move by jet propulsion, pushing water out of their mantle.",
    "Coral reefs support more species per unit area than any other marine habitat."
];

function showRandomFact() {
    const el = document.getElementById("fact-display");
    if (!el) return;
    const index = Math.floor(Math.random() * facts.length);
    el.textContent = facts[index];
}

// Simple contact form validation
function validateContactForm(event) {
    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields before submitting.");
        event.preventDefault();
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
        return;
    }

    alert("Thank you! Your message has been submitted.");
}
