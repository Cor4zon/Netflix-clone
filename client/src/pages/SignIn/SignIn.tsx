import './SignIn.scss';
import NeflixLogo from '@/assets/images/netflix-logo.svg';

const SingIn = () => {
  return (
    <div className="signin-wrapper">
      <div className="content">
        <p>Hello world</p>
        <img src={NeflixLogo} alt="netflix logo" />
        <div className='sign-in-container'>
          <form className="signin-form" action="">
            <label>Sign In</label>
            <input type="email" name="email" placeholder='Email and phone number'/>
            <input type="password" name="password" placeholder='Password' />
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
