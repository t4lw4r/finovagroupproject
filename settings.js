// Navigation items click handler
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
  item.addEventListener('click', function () {
    const text = this.textContent.trim();

    // Navigation logic
    if (text === 'Dashboard') {
      window.location.href = 'dashboard.html';
    } else if (text === 'Transactions') {
      window.location.href = 'transactions.html';
    } else if (text === 'Investments') {
      window.location.href = 'investments.html';
    } else if (text === 'Transfer Funds') {
      window.location.href = 'transfer.html';
    } else if (text === 'Settings') {
      window.location.href = 'settings.html';
    }
  });
});

// Change photo button
const changePhotoBtn = document.querySelector('.change-photo-btn');

changePhotoBtn.addEventListener('click', function () {
  alert('Photo upload functionality - Coming soon!');
  // Add file upload logic here
});

// Save Changes button (Profile)
const saveButtons = document.querySelectorAll('.save-btn');

saveButtons[0].addEventListener('click', function () {
  const firstName = document.querySelectorAll('.form-input')[0].value;
  const lastName = document.querySelectorAll('.form-input')[1].value;
  const email = document.querySelectorAll('.form-input')[2].value;
  const phone = document.querySelectorAll('.form-input')[3].value;

  if (!firstName || !lastName || !email || !phone) {
    alert('Please fill in all fields');
    return;
  }

  console.log('Profile updated:', { firstName, lastName, email, phone });
  alert('Profile settings saved successfully!');
});

// Update Password button
if (saveButtons[1]) {
  saveButtons[1].addEventListener('click', function () {
    const currentPassword = document.querySelectorAll('.form-input')[4].value;
    const newPassword = document.querySelectorAll('.form-input')[5].value;
    const confirmPassword = document.querySelectorAll('.form-input')[6].value;

    if (!currentPassword || !newPassword || !confirmPassword) {
      alert('Please fill in all password fields');
      return;
    }

    if (newPassword !== confirmPassword) {
      alert('New passwords do not match!');
      return;
    }

    if (newPassword.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }

    console.log('Password updated');
    alert('Password updated successfully!');

    // Clear password fields
    document.querySelectorAll('.form-input')[4].value = '';
    document.querySelectorAll('.form-input')[5].value = '';
    document.querySelectorAll('.form-input')[6].value = '';
  });
}

// Save Preferences button
if (saveButtons[2]) {
  saveButtons[2].addEventListener('click', function () {
    const language = document.querySelectorAll('.form-select')[0].value;
    const currency = document.querySelectorAll('.form-select')[1].value;
    const timezone = document.querySelectorAll('.form-select')[2].value;

    console.log('Preferences saved:', { language, currency, timezone });
    alert('Preferences saved successfully!');
  });
}

// Toggle switches
const toggleSwitches = document.querySelectorAll('.toggle-switch input');

toggleSwitches.forEach(toggle => {
  toggle.addEventListener('change', function () {
    const optionTitle = this.closest('.security-option, .notification-option')
      .querySelector('.option-title').textContent;
    const status = this.checked ? 'enabled' : 'disabled';

    console.log(`${optionTitle} ${status}`);

    // Show notification
    showNotification(`${optionTitle} ${status}`);
  });
});

// Delete Account button
const deleteBtn = document.querySelector('.danger-btn');

deleteBtn.addEventListener('click', function () {
  const confirmation = confirm(
    'Are you sure you want to delete your account? This action cannot be undone.\n\n' +
    'All your data, including transactions, investments, and personal information will be permanently deleted.'
  );

  if (confirmation) {
    const secondConfirmation = confirm(
      'This is your last chance! Are you absolutely sure you want to delete your account?'
    );

    if (secondConfirmation) {
      alert('Account deletion initiated. You will receive a confirmation email shortly.');
      console.log('Account deletion requested');
      // Add account deletion logic here
    }
  }
});

// Show notification helper
function showNotification(message) {
  // Create notification element
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #5c1a8d;
    color: white;
    padding: 15px 25px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    z-index: 10000;
    animation: slideIn 0.3s ease;
  `;
  notification.textContent = message;

  document.body.appendChild(notification);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);