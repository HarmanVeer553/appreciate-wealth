import React, { useState } from 'react';
import '../styles/Login.css'; // Assuming you style this separately
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const dummyUser = {
    email: 'test@fruitai.com',
    password: '123456',
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === dummyUser.email && password === dummyUser.password) {
      // Redirect to homepage
      window.location.href = "/home";
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </span>
          </div>
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember password
          </label>
          <a href="/">Forget password</a>
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="login-btn">
          Login
        </button>

        <p>or connect with</p>
        <div className="social-login">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-pinterest"></i>
          <i className="fab fa-linkedin"></i>
        </div>

        <div className="fingerprint-login">
          <img src="/fingerprint-icon.png" alt="Fingerprint Login" />
        </div>
      </form>
    </div>
  );
};

export default Login;
