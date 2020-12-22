// == Npm import
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialLinks from '../07_Contact/socialLinks';

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
            <div
              className="contact__container__description--img"
              src=""
              alt="contact drawing by me"
            />
            <div className="contact__container__description--emailPhoneLogos">
              <p className="contact__container__description--email">
                <a>
                  <FontAwesomeIcon className="contact-icon" icon="envelope" size="1x" />
                  liardcar@gmail.com
                </a>
              </p>
              <p className="contact__container__description--phone">
                <a>
                  <FontAwesomeIcon className="contact-icon" icon="phone-square-alt" size="1x" />
                  +33 620167545
                </a>
              </p>
              <div className="contact__container__description--logos">
                <SocialLinks />
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
