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

// Search input handler
const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();
  const investments = document.querySelectorAll('.investment-item');

  investments.forEach(investment => {
    const name = investment.querySelector('.investment-name').textContent.toLowerCase();
    const type = investment.querySelector('.investment-type').textContent.toLowerCase();

    if (name.includes(searchTerm) || type.includes(searchTerm)) {
      investment.style.display = 'flex';
    } else {
      investment.style.display = 'none';
    }
  });
});

// Filter button handler
const filterBtn = document.querySelector('.filter-btn');

filterBtn.addEventListener('click', function () {
  alert('Filter options - Coming soon!');
  // Add filter modal/panel logic here
});

// Details buttons click handler
const detailsButtons = document.querySelectorAll('.details-btn');

detailsButtons.forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    const investmentName = this.closest('.investment-item').querySelector('.investment-name').textContent;
    alert(`Opening details for: ${investmentName}`);
    // Add investment detail view logic here
  });
});

// Investment item click handler
const investmentItems = document.querySelectorAll('.investment-item');

investmentItems.forEach(item => {
  item.addEventListener('click', function () {
    const name = this.querySelector('.investment-name').textContent;
    const amount = this.querySelector('.investment-amount').textContent;
    console.log(`Investment clicked: ${name} - ${amount}`);
    // Add investment summary view logic here
  });
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