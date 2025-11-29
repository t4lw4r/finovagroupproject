// Navigation item clicker
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
  item.addEventListener('click', function () {
    const text = this.textContent.trim();

    // Navigation 
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

// Send msg func
function sendMessage() {
  const chatInput = document.getElementById('chatInput');
  const message = chatInput.value.trim();

  if (message === '') {
    return;
  }

  // Add user msg
  addUserMessage(message);

  // Clear
  chatInput.value = '';

  // bot response
  setTimeout(() => {
    addBotResponse(message);
  }, 1000);
}

// Add user messag
function addUserMessage(text) {
  const chatMessages = document.getElementById('chatMessages');

  const messageDiv = document.createElement('div');
  messageDiv.className = 'message user-message';

  messageDiv.innerHTML = `
    <div class="message-bubble user-bubble">
      ${text}
    </div>
  `;

  chatMessages.appendChild(messageDiv);
  scrollToBottom();
}

// Add bot response
function addBotResponse(userMessage) {
  const chatMessages = document.getElementById('chatMessages');

  const messageDiv = document.createElement('div');
  messageDiv.className = 'message bot-message';

  // Generate bot response 
  let botText = generateBotResponse(userMessage);

  messageDiv.innerHTML = `
    <div class="message-avatar bot-avatar">
      <span>🤖</span>
    </div>
    <div class="message-bubble bot-bubble">
      <p>${botText}</p>
    </div>
  `;

  chatMessages.appendChild(messageDiv);
  scrollToBottom();
}

// Generate bot response based on keywords
function generateBotResponse(message) {
  const lowerMessage = message.toLowerCase();

  // Transfer-related questi
  if (lowerMessage.includes('transfer') && lowerMessage.includes('long')) {
    return 'Transfers between your Finova accounts are instant! External transfers typically take 1-3 business days.';
  }

  if (lowerMessage.includes('transfer') && (lowerMessage.includes('fee') || lowerMessage.includes('cost'))) {
    return 'Great news! There are no fees for transfers between your Finova accounts. External transfers may have a small fee depending on the institution.';
  }

  if (lowerMessage.includes('limit') || lowerMessage.includes('maximum')) {
    return 'Daily transfer limits vary by account type. Checking accounts have a $10,000 daily limit, while savings accounts have a $5,000 daily limit.';
  }

  // Account que
  if (lowerMessage.includes('balance') || lowerMessage.includes('how much')) {
    return 'You can view your account balances on the Dashboard. Would you like me to help you navigate there?';
  }

  if (lowerMessage.includes('transaction') || lowerMessage.includes('history')) {
    return 'You can view your transaction history by clicking on "Transactions" in the sidebar. It shows all your recent activity.';
  }

  // Investment quest
  if (lowerMessage.includes('invest')) {
    return 'I can help you with investment questions! Check the Investments page to see your portfolio performance and manage your investments.';
  }

  // Help and greet
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return 'Hello! How can I assist you with your Finova account today?';
  }

  if (lowerMessage.includes('help')) {
    return 'I\'m here to help! You can ask me about transfers, account balances, transactions, investments, or any other banking questions.';
  }

  if (lowerMessage.includes('thank')) {
    return 'You\'re welcome! Is there anything else I can help you with?';
  }

  // Default 
  return 'I\'m here to help! Could you please provide more details about your question? You can ask me about transfers, account balances, transactions, or investments.';
}

// Scroll to bottom of chat
function scrollToBottom() {
  const chatMessages = document.getElementById('chatMessages');
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Handle Enter 
function handleKeyPress(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
}

// Auto-scroll 
window.addEventListener('load', () => {
  scrollToBottom();
});