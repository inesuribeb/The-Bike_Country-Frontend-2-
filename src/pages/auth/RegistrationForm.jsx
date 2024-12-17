import React, { useState, useContext } from 'react';
import './RegistrationForm.css';
import { clientRegister } from '../../utils/js/apiCallController';
import { PageContext } from "../../utils/js/context/PageContext";
import CountryAutocomplete from './CountryAutocomplete';




const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirm: "",
    dni: "",
    address: "",
    country_id: "",
  });
  const [focusedField, setFocusedField] = useState(null);

  const { setPage } = useContext(PageContext);

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

  const handlePage = (pageName) => {
    setPage(pageName)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.passwordConfirm) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      const result = await clientRegister(formData);
      console.log('Resultado del registro:', result);
      
      alert('Registro exitoso! Por favor, inicia sesión.');
      handlePage('auth');
      
    } catch (error) {
      alert('Error en el registro: ' + (error.message || 'Error desconocido'));
    }
};

  return (
    <div className="registration-container">
      <h1 className="register-title">PERSONAL DATA</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-container">
            {(focusedField === 'name' || formData.name) && (
              <label
                htmlFor="name"
                className={focusedField === 'name' || formData.name ? 'active-label' : ''}
              >
                NAME
              </label>
            )}
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => handleFocus('name')}
              onBlur={handleBlur}
              placeholder={focusedField === 'name' ? '' : 'NAME'}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <div className="input-container">
            {(focusedField === 'surname' || formData.surname) && (
              <label
                htmlFor="surname"
                className={focusedField === 'surname' || formData.surname ? 'active-label' : ''}
              >
                SURNAME
              </label>
            )}
            <input
              type="text"
              name="surname"
              id="surname"
              value={formData.surname}
              onChange={handleChange}
              onFocus={() => handleFocus('surname')}
              onBlur={handleBlur}
              placeholder={focusedField === 'surname' ? '' : 'SURNAME'}
              required
            />
          </div>
        </div>

        <CountryAutocomplete
          value={formData.country}
          onChange={handleChange}
          onFocus={() => handleFocus('country_id')}
          onBlur={handleBlur}
        />

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
            {(focusedField === 'phone' || formData.phone) && (
              <label
                htmlFor="phone"
                className={focusedField === 'phone' || formData.phone ? 'active-label' : ''}
              >
                PHONE
              </label>
            )}
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              onFocus={() => handleFocus('phone')}
              onBlur={handleBlur}
              placeholder={focusedField === 'phone' ? '' : 'PHONE'}
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

        <div className="form-group">
          <div className="input-container">
            {(focusedField === 'passwordConfirm' || formData.passwordConfirm) && (
              <label
                htmlFor="passwordConfirm"
                className={focusedField === 'passwordConfirm' || formData.passwordConfirm ? 'active-label' : ''}
              >
                CONFIRM PASSWORD
              </label>
            )}
            <input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              value={formData.passwordConfirm}
              onChange={handleChange}
              onFocus={() => handleFocus('passwordConfirm')}
              onBlur={handleBlur}
              placeholder={focusedField === 'passwordConfirm' ? '' : 'CONFIRM PASSWORD'}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <div className="input-container">
            {(focusedField === 'dni' || formData.dni) && (
              <label
                htmlFor="dni"
                className={focusedField === 'dni' || formData.dni ? 'active-label' : ''}
              >
                PASSPORT
              </label>
            )}
            <input
              type="text"
              name="dni"
              id="dni"
              value={formData.dni}
              onChange={handleChange}
              onFocus={() => handleFocus('dni')}
              onBlur={handleBlur}
              placeholder={focusedField === 'dni' ? '' : 'PASSPORT'}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <div className="input-container">
            {(focusedField === 'address' || formData.address) && (
              <label
                htmlFor="address"
                className={focusedField === 'address' || formData.address ? 'active-label' : ''}
              >
                ADDRESS
              </label>
            )}
            <input
              type="text"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleChange}
              onFocus={() => handleFocus('address')}
              onBlur={handleBlur}
              placeholder={focusedField === 'address' ? '' : 'ADDRESS'}
              required
            />
          </div>
        </div>

        <button type="submit" className="create-account-button">
          CREATE MY ACCOUNT
        </button>
      </form>
    </div>




  );
};

export default RegistrationForm;