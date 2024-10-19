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

const path = window.location.pathname;

// Clear any active classes
document.querySelectorAll('.topnav a').forEach(link => {
    link.classList.remove('active');
});

// Check if the current page is the home page or if path is empty
if (path === '/' || path.includes('index.html') || path === '') {
    document.getElementById('home-link').classList.add('active');
} else if (path.includes('news.html')) {
    document.getElementById('news-link').classList.add('active');
} else if (path.includes('review.html')) {
    document.getElementById('review-link').classList.add('active');
} else if (path.includes('about.html')) {
    document.getElementById('about-link').classList.add('active');
}