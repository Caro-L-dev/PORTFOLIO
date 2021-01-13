// == Npm import
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialLinks from '../07_Contact/socialLinks';
import Avatar from './avatar-contact.png';

// == Import
import './contact.scss';

// == Composant
function Contact() {
  return (
    <>
      <section className="contact">
        <main className="contact__container">
          <div className="contact__container--title">
            <h1>Contact</h1>
          </div>
          <div className="contact__container__description">

            <div className="split left">
              <img
                className="contact__container__description--img centered"
                src={Avatar}
                alt="contact drawing by me"
              />
            </div>

            <div className="split right">
              <div className="contact__container__description--emailPhoneLogos centered">
                <p className="contact__container__description--email">
                  <a>
                    <FontAwesomeIcon className="contact-icon envelope" icon="envelope" size="1x" color="#e6a336" />
                    liardcar@gmail.com
                  </a>
                </p>
                <p className="contact__container__description--phone">
                  <a>
                    <FontAwesomeIcon className="contact-icon" icon="phone-square-alt" size="1x" color="#e6a336" />
                    +33 6 20 16 75 45
                  </a>
                </p>
                <div className="contact__container__description--logos">
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

// == Export
export default Contact;
