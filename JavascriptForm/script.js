document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const middleName = document.getElementById('middleName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
  
    // Generate ID
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const randomNumber = Math.floor(Math.random() * 90000) + 10000; // 5-digit random number
    const id = `NGN/${year}/${month}/${randomNumber}`;
  
    // Display form data
    const userInfoDiv = document.getElementById('user-info');
    userInfoDiv.innerHTML = `
      <p><strong>User ID:</strong> ${id}</p>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Middle Name:</strong> ${middleName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone Number:</strong> ${phoneNumber}</p>
    `;
  });
  