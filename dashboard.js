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
      alert('Transfer Funds page - Coming soon!');
    } else if (text === 'Settings') {
      alert('Settings page - Coming soon!');
    }
  });
});

// Action buttons click handler
const actionButtons = document.querySelectorAll('.action-btn');

actionButtons.forEach(btn => {
  btn.addEventListener('click', function () {
    alert('Action: ' + this.textContent);
    // Add your action logic here
  });
});

// Card buttons click handler
const cardButtons = document.querySelectorAll('.card-btn');

cardButtons.forEach(btn => {
  btn.addEventListener('click', function () {
    if (this.classList.contains('summary-btn')) {
      alert('Opening card summary...');
      // Add summary view logic
    } else if (this.classList.contains('edit-btn')) {
      alert('Opening card editor...');
      // Add edit card logic
    }
  });
});

// Notification icon click handler
const notificationIcon = document.querySelector('.notification-icon');

notificationIcon.addEventListener('click', function () {
  alert('You have no new notifications');
  // Add notification panel logic here
});

// User avatar click handler
const userAvatar = document.querySelector('.user-avatar');

userAvatar.addEventListener('click', function () {
  alert('User profile menu');
  // Add user menu dropdown logic here
});

// Info icons click handler
const infoIcons = document.querySelectorAll('.info-icon');

infoIcons.forEach(icon => {
  icon.addEventListener('click', function () {
    const statTitle = this.parentElement.querySelector('.stat-title').textContent;
    alert('Information about: ' + statTitle);
    // Add tooltip or modal logic here
  });
});