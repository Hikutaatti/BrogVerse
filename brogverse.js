function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}



// load the footer on all pages:
fetch('footer.html')
.then(response => response.text())
.then(data => {
  document.getElementById('footer-placeholder').innerHTML = data;
})
.catch(error => console.error('Error loading footer:', error));

// Reference to the form, popup, and close button
const feedbackForm = document.getElementById('feedbackForm');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

// Event listener for form submission
feedbackForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

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
