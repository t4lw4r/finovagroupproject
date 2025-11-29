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

// Account card selection
const accountCards = document.querySelectorAll('.account-card');

accountCards.forEach(card => {
  card.addEventListener('click', function () {
    // Remove selected class from siblings in same column
    const column = this.closest('.account-column');
    column.querySelectorAll('.account-card').forEach(c => c.classList.remove('selected'));

    // Add selected class to clicked card
    this.classList.add('selected');
  });
});

// Search input handler
const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();
  console.log('Searching for account:', searchTerm);
  // Add account search logic here
});

// Filter button handler
const filterBtn = document.querySelector('.filter-btn');

filterBtn.addEventListener('click', function () {
  alert('Filter options - Coming soon!');
  // Add filter modal/panel logic here
});

// Amount input validation
const amountInput = document.getElementById('transferAmount');

amountInput.addEventListener('input', function () {
  // Remove non-numeric characters except decimal point
  this.value = this.value.replace(/[^0-9.]/g, '');

  // Prevent multiple decimal points
  const parts = this.value.split('.');
  if (parts.length > 2) {
    this.value = parts[0] + '.' + parts.slice(1).join('');
  }

  // Limit to 2 decimal places
  if (parts[1] && parts[1].length > 2) {
    this.value = parseFloat(this.value).toFixed(2);
  }
});

// Transfer button handler
const transferBtn = document.querySelector('.transfer-btn');

transferBtn.addEventListener('click', function () {
  const amount = amountInput.value;
  const notes = document.querySelector('.notes-input').value;

  if (!amount || parseFloat(amount) <= 0) {
    alert('Please enter a valid amount');
    return;
  }

  if (parseFloat(amount) < 1) {
    alert('Minimum transfer amount is $1.00');
    return;
  }

  // Get selected accounts
  const fromAccount = document.querySelector('.account-column:first-child .account-card.selected .account-name');
  const toAccount = document.querySelector('.account-column:last-child .account-card.selected .account-name');

  if (!fromAccount || !toAccount) {
    alert('Please select both accounts');
    return;
  }

  // Simulate transfer
  const transferData = {
    from: fromAccount.textContent,
    to: toAccount.textContent,
    amount: parseFloat(amount),
    notes: notes,
    date: new Date().toLocaleDateString()
  };

  console.log('Transfer initiated:', transferData);

  // Show success message
  alert(`Successfully transferred $${amount} from ${transferData.from} to ${transferData.to}`);

  // Reset form
  amountInput.value = '';
  document.querySelector('.notes-input').value = '';

  // Add to history (in a real app, this would update the database)
  addHistoryItem(transferData);
});

// Add history item to the list
function addHistoryItem(transfer) {
  const historyList = document.querySelector('.history-list');

  const historyItem = document.createElement('div');
  historyItem.className = 'history-item';
  historyItem.style.animation = 'fadeIn 0.5s';

  historyItem.innerHTML = `
    <div class="history-icon">
      <span>⇄</span>
    </div>
    <div class="history-details">
      <div class="history-accounts">${transfer.from} → ${transfer.to}</div>
      <div class="history-date">${transfer.date}</div>
    </div>
    <div class="history-amount">$${transfer.amount.toFixed(2)}</div>
  `;

  // Add to top of history list
  historyList.insertBefore(historyItem, historyList.firstChild);
}

// History item click handler
const historyItems = document.querySelectorAll('.history-item');

historyItems.forEach(item => {
  item.addEventListener('click', function () {
    const accounts = this.querySelector('.history-accounts').textContent;
    const amount = this.querySelector('.history-amount').textContent;
    const date = this.querySelector('.history-date').textContent;

    alert(`Transfer Details:\n${accounts}\n${amount}\nDate: ${date}`);
  });
});