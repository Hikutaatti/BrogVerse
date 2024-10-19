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



fetch('footer.html') //This line has fetch implemented, used to load the footer on all pages
.then(response => response.text())
.then(data => {
  document.getElementById('footer-placeholder').innerHTML = data;
})
.catch(error => console.error('Error loading footer:', error));

// Load the top navigation on all pages
fetch('topnav.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('topnav-placeholder').innerHTML = data;

    // Get the current page URL
    const currentPage = window.location.pathname.split("/").pop();

    // Select all nav links
    const navLinks = document.querySelectorAll('.topnav a');

    // Loop through each link and set the active class based on the current page
    navLinks.forEach(link => {
      const linkPage = link.getAttribute('href');
      if (linkPage === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  })
  .catch(error => console.error('Error loading topnav:', error));
