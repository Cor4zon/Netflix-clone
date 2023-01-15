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

      <div className="faq-container">
        {/* https://doka.guide/html/details/ */}
        <details>
          <summary>What is Netflix?</summary>
          <p>
            Netflix is a streaming service that offers a wide variety of award-winning TV
            shows, movies, anime, documentaries, and more on thousands of
            internet-connected devices. You can watch as much as you want, whenever you
            want without a single commercial – all for one low monthly price. There's
            always something new to discover and new TV shows and movies are added every
            week!
          </p>
        </details>
        <details>
          <summary>How much does Netflix cost?</summary>
          <p>
            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming
            device, all for one fixed monthly fee. Plans range from EUR9.39 to EUR13.99 a
            month. No extra costs, no contracts.
          </p>
        </details>
        <details>
          <summary>Where can I watch?</summary>
          <p>
            Watch anywhere, anytime. Sign in with your Netflix account to watch instantly
            on the web at netflix.com from your personal computer or on any
            internet-connected device that offers the Netflix app, including smart TVs,
            smartphones, tablets, streaming media players and game consoles. You can also
            download your favorite shows with the iOS, Android, or Windows 10 app. Use
            downloads to watch while you're on the go and without an internet connection.
            Take Netflix with you anywhere.
          </p>
        </details>

        <details>
          <summary>How do I cancel?</summary>
          <p>
            Netflix is flexible. There are no pesky contracts and no commitments. You can
            easily cancel your account online in two clicks. There are no cancellation
            fees – start or stop your account anytime.
          </p>
        </details>
        <details>
          <summary>What can I watch on Netflix?</summary>
          <p>
            Netflix has an extensive library of feature films, documentaries, TV shows,
            anime, award-winning Netflix originals, and more. Watch as much as you want,
            anytime you want.
          </p>
        </details>

        <details>
          <summary>Is Netflix good for kids?</summary>
          <p>
            The Netflix Kids experience is included in your membership to give parents
            control while kids enjoy family-friendly TV shows and movies in their own
            space. Kids profiles come with PIN-protected parental controls that let you
            restrict the maturity rating of content kids can watch and block specific
            titles you don’t want kids to see.
          </p>
        </details>

        <details>
          <summary>Why am I seeing this language?</summary>
          <p>Your browser preferences determine the language shown here.</p>
        </details>
      </div>
    </>
  );
};
