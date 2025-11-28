function togglePassword() {
  const input = document.getElementById("password");
  input.type = input.type === "password" ? "text" : "password";
}

// Login button functionality
const loginBtn = document.querySelector('.login-btn');

loginBtn.addEventListener('click', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Basic validation
  if (email === '' || password === '') {
    alert('Please fill in all fields');
    return;
  }

  // Simulate login (you can add actual authentication here)
  console.log('Logging in with:', email);

  // Redirect to dashboard
  window.location.href = 'dashboard.html';
});

// Google login button
const googleBtn = document.querySelector('.google-btn');

googleBtn.addEventListener('click', function () {
  alert('Google Sign-In would be implemented here');
  // Add Google OAuth logic here
  // For now, you can also redirect to dashboard:
  // window.location.href = 'dashboard.html';
});

// Enter key to submit
document.getElementById('password').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    loginBtn.click();
  }
});