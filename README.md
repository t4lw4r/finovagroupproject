# Finova - Personal Banking Dashboard

A modern, responsive personal banking web application with AI-powered assistance, built with HTML, CSS, and JavaScript.

![Finova Logo](logovariant1.png)

## Features

### Core Functionality
- **User Authentication** - Secure login with password visibility toggle
- **Dashboard Overview** - Real-time account balance display ($48,902)
- **Transaction Management** - View and search transaction history
- **Investment Portfolio** - Track investments across multiple accounts
- **Fund Transfers** - Easy transfers between accounts with validation
- **AI Chatbot Assistant** - Context-aware help for banking queries
- **Settings Management** - Comprehensive user preferences and security settings

### User Interface
- Clean, modern purple-themed design
- Fully responsive layout (desktop, tablet, mobile)
- Smooth animations and transitions
- Interactive toggle switches and form validations
- Real-time search and filtering
- Toast notifications for user actions

##  Project Structure

```
finova/
├── index.html              # Login page
├── style.css              # Login page styles
├── script.js              # Login functionality
├── dashboard.html         # Main dashboard
├── dashboard.css         # Dashboard styles
├── dashboard.js          # Dashboard interactivity
├── transactions.html     # Transaction history page
├── transactions.css      # Transaction styles
├── transactions.js       # Transaction functionality
├── investments.html      # Investment portfolio page
├── investments.css       # Investment styles
├── investments.js        # Investment functionality
├── transfer.html         # Fund transfer page
├── transfer.css          # Transfer styles
├── transfer.js           # Transfer functionality
├── chatbot.html          # AI chatbot interface
├── chatbot.css           # Chatbot styles
├── chatbot.js            # Chatbot AI logic
├── settings.html         # User settings page
├── settings.css          # Settings styles
├── settings.js           # Settings functionality
├── logo.png              # Finova logo image
├── google-icon.png       # Google OAuth icon
└── README.md             # This file
```

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies or installations required

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/t4lw4r/finova.git
   cd finova
   ```

2. **Add logo images**
   - Place your `logo.png` file in the root directory
   - Place your `google-icon.png` file in the root directory

3. **Open the application**
   - Open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve
     ```

4. **Access the application**
   - Navigate to `http://localhost:8000` in your browser

## Pages Overview

### 1. Login Page (`index.html`)
- Email/username and password authentication
- Google Sign-In integration (UI ready)
- Remember me checkbox
- Password visibility toggle
- Responsive split-screen design

### 2. Dashboard (`dashboard.html`)
- Account balance overview
- Credit card management (2 cards with details)
- Quick action buttons (6 actions)
- Financial statistics (Earnings, Spending, Income, Revenue)
- Trend indicators with percentage changes

### 3. Transactions (`transactions.html`)
- Transaction history with search
- Filters by account type and date
- Credit/Debit badges
- Transaction details (merchant, category, amount, dates)
- Pagination support

### 4. Investments (`investments.html`)
- Total investment balance ($30,789.41)
- Portfolio breakdown:
  - Crypto Wallet ($2,640.55, +12.8%)
  - TFSA Growth Portfolio ($12,450.32, -3.5%)
  - Non-Registered Portfolio ($5,781.44, -3.1%)
- Details button for each investment
- Performance indicators

### 5. Transfer Funds (`transfer.html`)
- From/To account selection
- Amount input with validation (min $1)
- Notes field for transfer description
- Transfer history with IDs
- Month filter dropdown
- Real-time form validation

### 6. AI Chatbot (`chatbot.html`)
- Floating chat interface overlay
- Context-aware responses
- Handles queries about:
  - Transfer timing and fees
  - Account balances and limits
  - Transaction history
  - Investment questions
  - General banking help
- Auto-scroll to latest messages
- Enter key support

### 7. Settings (`settings.html`)
- **Profile Settings**: Name, email, phone, avatar
- **Security**: Password change, 2FA, login alerts
- **Notifications**: Email, SMS, push, marketing preferences
- **Preferences**: Language, currency, timezone
- **Danger Zone**: Account deletion with double confirmation

## Design Features

### Color Scheme
- Primary Purple: `#2b0048` (sidebar)
- Accent Purple: `#5c1a8d` (buttons, headers)
- Light Purple: `#f4e8ff` (background)
- Button Purple: `#9b72b8` (action buttons)

### Typography
- Font Family: Arial, sans-serif
- Headings: 32px (page titles)
- Body: 14-16px
- Small text: 12-13px

### Responsive Breakpoints
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px
- Small mobile: < 480px

## ⚙️ Configuration

### Customization Options

**Update User Information** (in respective HTML files):
```javascript
// Example: Change username in dashboard.html
<h1 class="welcome-text">Welcome back, YourName!</h1>
```

**Modify Account Balances**:
```html
<!-- In dashboard.html -->
<div class="balance-amount">$48,902</div>
```

**Change Color Scheme** (in CSS files):
```css
/* Update primary color */
.sidebar {
  background: #2b0048; /* Change this */
}
```

## Security Features

- Password visibility toggle
- Two-factor authentication toggle
- Login alert notifications
- Secure password change with validation
- Account deletion with double confirmation
- No actual backend (demo purposes only)

## Testing

### Manual Testing Checklist
- [ ] Login form validation
- [ ] Navigation between all pages
- [ ] Search functionality on Transactions/Investments
- [ ] Transfer form validation (min $1)
- [ ] Chatbot responses
- [ ] Toggle switches in Settings
- [ ] Responsive design on mobile/tablet
- [ ] AI chatbot button appears on all pages

## Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | Latest  | ✅ Full |
| Firefox | Latest  | ✅ Full |
| Safari  | Latest  | ✅ Full |
| Edge    | Latest  | ✅ Full |
| IE 11   | -       | ❌ Not Supported |

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Rohit Talwar**
- GitHub: [@t4lw4r](https://github.com/t4lw4r)
- Email: rohittalwar8588@gmail.com

## Acknowledgments

- Design inspiration from modern banking applications
- Icons and emojis from Unicode standards
- Community feedback and suggestions

## Support

For support, email rohittalwar8588@gmail.com or open an issue in the repository.

## 🗺️ Roadmap

### Planned Features
- [ ] Backend API integration
- [ ] Real authentication system
- [ ] Database for transactions and accounts
- [ ] Export transactions to PDF/CSV
- [ ] Advanced charting and analytics
- [ ] Mobile app (React Native)
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Bill payment integration
- [ ] Budget planning tools

## Version History

### v1.0.0 (Current)
- Initial release
- All core pages implemented
- Basic AI chatbot functionality
- Responsive design
- Form validations

---

**Note**: This is a demo application for educational purposes. Do not use with real banking credentials or sensitive information.
