// Fetch the content of the footer HTML file
fetch('/common/header.html')
.then(response => response.text())
.then(html => {
  // Insert the footer HTML into the container
  document.getElementById('header').innerHTML = html;

  // Show the footer after it is loaded
  document.getElementById('header').style.display = 'block';

  // Execute JavaScript code within the footer
  const scriptElements = Array.from(document.getElementById('header').getElementsByTagName('script'));
  scriptElements.forEach(script => {
    const newScript = document.createElement('script');
    newScript.textContent = script.textContent;
    document.body.appendChild(newScript);
  });
});


// Fetch the content of the footer HTML file
fetch('/common/footer.html')
  .then(response => response.text())
  .then(html => {
    // Insert the footer HTML into the container
    document.getElementById('footer').innerHTML = html;

    // Show the footer after it is loaded
    document.getElementById('footer').style.display = 'flex';

    // Execute JavaScript code within the footer
    const scriptElements = Array.from(document.getElementById('footer').getElementsByTagName('script'));
    scriptElements.forEach(script => {
      const newScript = document.createElement('script');
      newScript.textContent = script.textContent;
      document.body.appendChild(newScript);
    });
  });

