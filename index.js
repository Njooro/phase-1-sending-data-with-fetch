// setup.js
function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
      .then(response => response.json())
      .then(data => {
        appendToDOM(data.id);
      })
      .catch(error => {
        appendToDOM(error.message);
      });
  }
  
  // Append the response or error message to the DOM
  function appendToDOM(message) {
    const newElement = document.createElement('div');
    newElement.innerHTML = message;
    document.body.appendChild(newElement);
  }
  
  module.exports = submitData;
  