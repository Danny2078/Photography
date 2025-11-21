# Photography Room 7209 Booking System

Welcome to the Photography Room 7209 Booking System! This is a web-based application for managing bookings for Photography Room 7209.

## 🌐 Website

Access the booking system at: **[7209booking.com](http://7209booking.com)**

## 📸 Features

- **Student Booking System**: Create an account and book photography sessions
- **Calendar View**: Interactive calendar showing available and booked dates
- **Flexible Time Slots**: Book sessions in 30-minute increments from 9:00 AM to 4:30 PM
- **Duration Options**: Book sessions from 1 hour to 7.5 hours
- **Admin Panel**: Teachers can manage all bookings and student accounts
- **Email Notifications**: Automatic confirmation and cancellation emails
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## 🎯 Room Information

- **Room Number**: 7209
- **Floor**: 7th Floor
- **Operating Hours**: 9:00 AM - 4:30 PM daily
- **Minimum Booking**: 1 hour
- **Maximum Booking**: 7.5 hours per session

## 👥 User Roles

### Students
- Create an account with Student ID and password
- Book photography sessions
- View and manage your own bookings
- Cancel bookings up to 24 hours in advance

### Teachers/Admins
- View all bookings across the system
- Manage student accounts
- Cancel any booking
- Reset student passwords
- View booking statistics

## 🚀 Getting Started

### For Students

1. Visit [7209booking.com](http://7209booking.com)
2. Click "Student Login" in the top right
3. Click the "Register" tab to create a new account
4. Fill in your details (Name, Student ID, Email, Password)
5. Once registered, you can start booking sessions!

### For Teachers/Admins

1. Visit [7209booking.com](http://7209booking.com)
2. Click "Admin Login" in the top right
3. Enter your Teacher ID and password
4. Access the admin panel to manage bookings and students

## 🛠️ Setup Instructions

### GitHub Pages Setup

1. **Make Repository Public**:
   - Go to your repository settings on GitHub
   - Scroll down to the "Danger Zone"
   - Click "Change visibility"
   - Select "Make public"

2. **Enable GitHub Pages**:
   - In repository settings, go to "Pages" section
   - Under "Source", select the main/master branch
   - Click "Save"

3. **Configure Custom Domain** (if using 7209booking.com):
   - In the "Pages" section, enter `7209booking.com` in the custom domain field
   - Click "Save"
   - Configure your DNS settings with your domain provider:
     - For the apex domain (7209booking.com), add A records pointing to GitHub Pages IPs:
       - 185.199.108.153
       - 185.199.109.153
       - 185.199.110.153
       - 185.199.111.153
     - For www subdomain (optional), add a CNAME record pointing to `danny2078.github.io`

4. **Wait for DNS Propagation**:
   - DNS changes can take up to 24-48 hours to propagate
   - Check your domain regularly until it's accessible

### Local Development

To run the booking system locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Danny2078/Photography.git
   cd Photography
   ```

2. Open `index.html` in your web browser:
   ```bash
   # On Mac
   open index.html
   
   # On Linux
   xdg-open index.html
   
   # On Windows
   start index.html
   ```

3. Or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js http-server
   npx http-server
   ```

4. Visit `http://localhost:8000` in your browser

## 📁 File Structure

```
Photography/
├── index.html              # Main booking application
├── config.js               # Configuration and hashed credentials
├── password-generator.html # Tool for generating password hashes
├── CNAME                   # Custom domain configuration
└── README.md              # This file
```

## 🔒 Security Features

- **Password Hashing**: All passwords are hashed before storage
- **Student Authentication**: Secure login system for students
- **Admin Authentication**: Separate authentication for teachers
- **No Plain-text Credentials**: All credentials are hashed in config.js
- **Local Storage**: Data stored locally in browser (for demo purposes)

## 🧑‍💼 Default Admin Credentials

For testing purposes, the following admin accounts are configured:

- **Teacher ID**: `Tia` | **Password**: `photo2024`
- **Teacher ID**: `Bryn` | **Password**: `room7209`
- **Teacher ID**: `ADMIN` | **Password**: `photography123`

**⚠️ Important**: Change these credentials in production by updating the hashes in `config.js`

## 🔧 Configuration

### Adding New Teachers

1. Open `password-generator.html` in your browser
2. Enter the new password
3. Click "Generate Hash"
4. Copy the generated hash
5. Add to `config.js`:
   ```javascript
   teacherHashes: {
       'NewTeacherID': 'generated_hash_here'
   }
   ```

### Customizing Room Settings

Edit the `config.js` file to customize:
- Room number and information
- Time slots
- Booking duration limits
- Email templates

## 📧 Email Integration

Currently, the system logs email content to the browser console. To enable actual email sending:

1. Sign up for an email service (EmailJS, SendGrid, etc.)
2. Update the `sendConfirmationEmail` and `sendCancellationEmail` functions in `index.html`
3. Add your API credentials

## 🐛 Troubleshooting

### Website Not Loading
- Ensure repository is public
- Check that GitHub Pages is enabled in settings
- Verify CNAME file contains the correct domain

### Custom Domain Not Working
- Verify DNS settings with your domain provider
- Wait for DNS propagation (up to 48 hours)
- Check GitHub Pages settings shows the domain as verified

### Bookings Not Saving
- Check browser console for errors
- Ensure localStorage is enabled in your browser
- Try clearing browser cache and refreshing

## 📱 Browser Compatibility

- Chrome/Edge: ✅ Fully supported
- Firefox: ✅ Fully supported
- Safari: ✅ Fully supported
- Mobile browsers: ✅ Fully supported

## 📄 License

This project is for educational purposes. Feel free to use and modify as needed.

## 🤝 Support

For issues or questions about the Room 7209 booking system:
- Contact the photography department
- Or open an issue on GitHub

---

**Photography Room 7209 Booking System** - Making room reservations simple and efficient! 📸
