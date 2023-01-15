import React from 'react';
import EnjoyOfferImg from './images/offers/enjoy-offer.png';
import KidsOfferImg from './images/offers/kids-offer.png';
import OfflineOfferImg from './images/offers/offline-offer.png';

export const RegisterContent = () => {
  return (
    <>
      <div className="register-content">
        <h1 className="register-h1">Unlimited movies, TV shows and more.</h1>
        <h5 className="register-h5">Watch anywhere. Cancel anytime.</h5>
        <p className="register-p">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <form className="register-form" action="">
          <input className="email-input" placeholder="Email address"></input>
          <button className="register-button">Get started</button>
        </form>
      </div>

      {/* <img src={require('./logo.jpeg')} /> */}

      <div className="offer-container">
        <img src={EnjoyOfferImg} alt="enjoy-offer" />
        <div className="offer-text-container">
          <h3>Enjoy on your TV.</h3>
          <p>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players,
            and more.
          </p>
        </div>
      </div>

      <div className="offer-container">
        <div className="offer-text-container">
          <h3>Download your shows to watch offline.</h3>
          <p>Save your favorites easily and always have something to watch.</p>
        </div>
        <img src={KidsOfferImg} alt="enjoy-offer" />
      </div>

      <div className="offer-container">
        <img src={OfflineOfferImg} alt="enjoy-offer" />
        <div className="offer-text-container">
          <h3>Watch everywhere.</h3>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV
            without paying more.
          </p>
        </div>
      </div>

      <div className='faq-container'>
        {/* https://doka.guide/html/details/ */}
      </div>
    </>
  );
};
