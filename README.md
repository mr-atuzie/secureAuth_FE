## Table of Contents
- Introduction
- Features
- Technologies Used.
- Installation
- Environment Variables
- Usage
- Demo
- Contributing
- Author

## Secure Auth - 2FA with email - User Interace
is a authentication platform designed to implement Two-Factor Authentication (2FA) using email.It provides a authentication mechanism that enhances security by requiring users to verify their identity through a code sent to their email and also Password Management system for Forget and Reset Password.

## Features
- **User Authentication:** Secure user login and registration with JWT-based authentication, Password hashing and salting.
- **2FA with email:** Sending a unique verification code to the user's email during login.
- **Password management system:** Send one-time token  for Forgot and reset password.
- **Responsive Design:** Fully responsive design ensuring a smooth experience on both desktop and mobile devices.

## Technologies Used
### Frontend 
- React
- Redux for state management
- Tailwind CSS for styling

### Libaries
- React-router-dom
- Axios
  
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
Ensure your backend server is running
```bash
REACT_APP_BACKEND_URL=your_backend_url
```

### Start the development severs
```bash
$ npm run start
```
## Related Repositories 
Backend Repository: [https://github.com/mr-atuzie/secureAuth_BE](https://github.com/mr-atuzie/secureAuth_BE)

## Usage
- Open your browser and navigate to http://localhost:3000.
- Log in using your credentials.
- Upon successful login, you will be prompted to enter a 2FA code sent to your mobile device or email.
- Enter the 2FA code to gain access to your account.

## Demo
[https://2fa-form.netlify.app](https://2fa-form.netlify.app)

## Contributions
Steps to Contribute
### 1-Fork the repository
Click on the "Fork" button at the top right of the repository page to create a copy of this repository under your own GitHub account.

### 2-Clone your forked repository
```bash
$ git clone https://github.com/yourusername/react-2fa-frontend.git
$ cd secureAuth_FE
```
### 3-Create a new branch:
```bash
$ git checkout -b feature/your-feature-name
```
### 4-Make your changes
Make the necessary changes or additions to the codebase.

### 5-Commit your changes
```bash
$ git add .
$ git commit -m "Add feature: description of the feature"
```
### 6-Push your changes to your forked repository
```bash
$git push origin feature/your-feature-name
```

### 7-Create a pull request
- Go to the original repository on GitHub and you should see a prompt to create a pull request from your new branch. Follow the instructions to open a pull request.
- Ensure your pull request description clearly explains the changes and why they are necessary.

### 8-Review process
- Your pull request will be reviewed by the project maintainers. You might be asked to make some changes before it gets merged.

## Author 👨‍💻
- **Rex Atuzie** - **[Linkedin](www.linkedin.com/in/rex-atuzie-0ab67820)**, **[Twitter](https://twitter.com/AtuzieR)**, **[Github](https://github.com/mr-atuzie)**, **[Portfolio](https://rexatuzie.netlify.app)**  




