import './SignIn.scss';
import NeflixLogo from '@/assets/images/netflix-logo.svg';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SingIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const login = async () => {
      const result = await axios({
        method: 'post',
        url: `http://localhost:8080/api/auth/login`,
        data: {
          email,
          password,
        },
      });
      localStorage.setItem('token', result.data.accessToken);
      console.log(result);
      navigate('/');
    };

    try {
      login();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signin-wrapper">
      <div className="content">
        <p>Hello world</p>
        <img src={NeflixLogo} alt="netflix logo" />
        <div className="sign-in-container">
          <form
            className="signin-form"
            method="post"
            action=""
            onSubmit={(event) => loginHandler(event)}>
            <label>Sign In</label>
            <input
              type="email"
              name="email"
              placeholder="Email and phone number"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
