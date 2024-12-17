import React, { useState, useContext } from 'react';
import Button from '../../components/button/Button';
import { PageContext } from "../../utils/js/context/PageContext";
import { clientLogin } from '../../utils/js/apiCallController';
import './LoginForm.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [focusedField, setFocusedField] = useState(null);

  const { setPage } = useContext(PageContext);

  const handlePage = (pageName) => {
    setPage(pageName)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    const result = await clientLogin(formData);
    if (result) {
      handlePage('clientProfile')
    }
  };

  return (
    <div className="login-container">
      <h1 className="form-title">LOG IN OR SIGN UP</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-container">
            {(focusedField === 'email' || formData.email) && (
              <label
                htmlFor="email"
                className={focusedField === 'email' || formData.email ? 'active-label' : ''}
              >
                EMAIL
              </label>
            )}
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => handleFocus('email')}
              onBlur={handleBlur}
              placeholder={focusedField === 'email' ? '' : 'EMAIL'}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-container">
            {(focusedField === 'password' || formData.password) && (
              <label
                htmlFor="password"
                className={focusedField === 'password' || formData.password ? 'active-label' : ''}
              >
                PASSWORD
              </label>
            )}
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              onFocus={() => handleFocus('password')}
              onBlur={handleBlur}
              placeholder={focusedField === 'password' ? '' : 'PASSWORD'}
              required
            />
          </div>
        </div>
        <button type="submit" className="login-button">
          LOG IN
        </button>
        <Button className="register-button" onClick={() => handlePage('register')}>
          REGISTER
        </Button>

      </form>
    </div>
  );
};

export default LoginForm;