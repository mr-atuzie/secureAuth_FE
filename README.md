# Secure Auth - 2FA with email
is a authentication platform designed to implement Two-Factor Authentication (2FA) using email.It provides a authentication mechanism that enhances security by requiring users to verify their identity through a code sent to their email and also Password Management system for Forget and Reset Password.

## Features
- User registration and login with JWT-based authentication and HTTPS cookies
- Password hashing and salting
- Sending a unique verification code to the user's email during login
- 2FA using a time-based one-time password (OTP) sent to user email
- Password management system for Forgot and reset password

## Technologies Used
### Frontend 
- React
- Redux for state management
- Tailwind CSS for styling

### Backend
- Node js
- Express js

### Database
- MongoDB
  
## Installation
### Prerequisites
- Node.js and npm installed

From your command line, first clone SecureAuth:
### 
```bash
# Clone this repository
$ git clone https://github.com/mr-atuzie/secureAuth_FE

# Go into the repository
$ cd secureAuth_FE

# Install dependencies
$ npm install
```

### Set up environment variables:
```bash
REACT_APP_BACKEND_URL=your_backend_url
```

### Start the development severs
```bash
$ npm run start
```

## Demo
[https://2fa-form.netlify.app](https://2fa-form.netlify.app)

## Related Repositories
Backend Repository: [https://github.com/mr-atuzie/secureAuth_BE](https://github.com/mr-atuzie/secureAuth_BE)

## Author 👨‍💻
- **Rex Atuzie** - **[Linkedin](www.linkedin.com/in/rex-atuzie-0ab67820)**, **[Twitter](https://twitter.com/AtuzieR)**, **[Github](https://github.com/mr-atuzie)**, **[Portfolio](https://rexatuzie.netlify.app)**  




