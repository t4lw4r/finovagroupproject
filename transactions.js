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

// Account dropdown handler
const accountDropdown = document.querySelector('.account-dropdown');

accountDropdown.addEventListener('change', function () {
  console.log('Selected account:', this.value);
  // Add filter logic based on selected account
});

// Download button handler
const downloadBtn = document.querySelector('.download-btn');

downloadBtn.addEventListener('click', function () {
  alert('Downloading transactions...');
  // Add CSV/PDF download logic here
});

// Search input handler
const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();
  const transactions = document.querySelectorAll('.transaction-item');

  transactions.forEach(transaction => {
    const name = transaction.querySelector('.transaction-name').textContent.toLowerCase();
    const category = transaction.querySelector('.transaction-category').textContent.toLowerCase();

    if (name.includes(searchTerm) || category.includes(searchTerm)) {
      transaction.style.display = 'flex';
    } else {
      transaction.style.display = 'none';
    }
  });
});

// Filter button handler
const filterBtn = document.querySelector('.filter-btn');

filterBtn.addEventListener('click', function () {
  alert('Filter options - Coming soon!');
  // Add filter modal/panel logic here
});

// Pagination buttons
const pageButtons = document.querySelectorAll('.page-btn');

pageButtons.forEach(btn => {
  btn.addEventListener('click', function () {
    if (this.textContent === '‹') {
      console.log('Previous page');
    } else if (this.textContent === '›') {
      console.log('Next page');
    } else {
      // Remove active class from all buttons
      pageButtons.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      this.classList.add('active');
      console.log('Go to page:', this.textContent);
    }
  });
});

// Transaction item click handler
const transactionItems = document.querySelectorAll('.transaction-item');

transactionItems.forEach(item => {
  item.addEventListener('click', function () {
    const name = this.querySelector('.transaction-name').textContent;
    const amount = this.querySelector('.transaction-amount').textContent;
    console.log(`Transaction clicked: ${name} - ${amount}`);
    // Add transaction detail view logic here
  });
});