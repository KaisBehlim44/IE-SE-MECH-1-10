document.getElementById('uploadForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from reloading the page
  
  // Get the uploaded information
  const info = document.getElementById('info').value;
  
  // Display the uploaded information
  const displayDiv = document.getElementById('contentDisplay');
  displayDiv.innerHTML = <p>${info}</p>;
  
  // Clear the form
  document.getElementById('info').value = '';
});
