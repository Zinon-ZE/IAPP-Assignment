// Purpose: Validate that Name, Email, and Feedback content are not empty

document
  .getElementById("FeedbackForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Get input values safely using IDs
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var feedback = document.getElementById("feedback").value.trim();

    var message = document.getElementById("message");

    // Check if any required field is empty
    if (name === "" || email === "" || feedback === "") {
      message.style.color = "red";
      message.textContent = "Please fill in all required fields!";
      return;
    }

    // Success state
    message.style.color = "green";
    message.textContent = "Thank you! Your feedback has been submitted.";

    // Optional: Reset form fields after successful submission
    this.reset();
  });
