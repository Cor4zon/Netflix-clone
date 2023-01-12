import React from 'react';

export const RegisterContent = () => {
  return (
    <div className='register-content'>
      <h1 className='register-h1'>Unlimited movies, TV shows and more.</h1>
      <h5 className='register-h5'>Watch anywhere. Cancel anytime.</h5>
      <p className='register-p'>Ready to watch? Enter your email to create or restart your membership.</p>

      <form action="">
        <input className="email-input" placeholder='Email address'></input>
        <button className='register-button'>Get started</button>
      </form>
    </div>
  );
};

