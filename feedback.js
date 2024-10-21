// Reference to the form, popup, and close button
const feedbackForm = document.getElementById('feedbackForm');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

// Event listener for form submission
feedbackForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Show an alert
  alert('Form submitted successfully!');

  // Show the popup
  showPopup();

  // Reset the form after submission
  feedbackForm.reset();
});

// Function to show the popup
function showPopup() {
  popup.style.display = 'block';
}

// Event listener to close the popup when clicking the "OK" button
closePopup.addEventListener('click', function() {
  popup.style.display = 'none'; // Hide the popup
});
