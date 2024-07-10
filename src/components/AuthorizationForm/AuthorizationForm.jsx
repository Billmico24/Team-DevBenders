import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import scss from './AuthorizationForm.module.scss';
import { useNavigate } from 'react-router-dom';

const AuthorizationForm = ({ isRegisterForm = true, onSubmit }) => {
  const navigate = useNavigate();
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userMap = {
    name: setname,
    email: setEmail,
    password: setPassword,
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    userMap[name](value);
  };





  const handleFormSubmit = event => {
    event.preventDefault();
    if (isRegisterForm) {
      onSubmit({ email, password, username: name });
      navigate('/calculator');

      return;
    }
    onSubmit({ email, password });

  };

  return (
    <form className={scss.authorization_form} onSubmit={handleFormSubmit}>
      <h2 className={scss.authorization__title}>
        {isRegisterForm ? 'Registration' : 'Login'}
      </h2>
      {isRegisterForm && (
        <label>
          <input
            className={scss.authorization__input}
            type="text"
            id="name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Name"
            required
            onChange={handleInputChange}
          />
        </label>
      )}
      <label>
        <input
          className={scss.authorization__input}
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleInputChange}
        />
      </label>
      <label>
        <input
          className={scss.authorization__input}
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          minLength={8}
          required
          onChange={handleInputChange}
        />
      </label>
      <div className={scss.authorization__buttons_container}>
        <button className={scss.authorization__button} type="submit">
          {isRegisterForm ? 'Register' : 'Login'}
        </button>
        <Link
          className={scss.authorization__link}
          to={isRegisterForm ? '/login' : '/register'}
        >
          {isRegisterForm ? 'Login' : 'Register'}
        </Link>
      </div>
    </form>
  );
};

export default AuthorizationForm;
