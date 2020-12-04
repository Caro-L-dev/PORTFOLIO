// == Npm import
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// == Import
import './contact.scss';

// == Composant
function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contact__container">
          <div className="contact__container--title">
            <h1>Contact</h1>
          </div>
          <div className="contact__container__description">
            <div
              className="contact__container__description--img"
              src=""
              alt="contact image"
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
                <a target="_blank"  href="https://www.linkedin.com/in/liardcaroline/" className="contact-link">
                  <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" />
                </a>
                <a target="_blank"  href="https://github.com/Caro-L-dev" className="contact-link">
                  <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
                </a>
                <a target="_blank" href="https://www.artstation.com/caroline_liard" className="contact-link">
                  <FontAwesomeIcon icon={['fab', 'artstation']} size="2x" />
                </a>
                <a target="_blank" href="https://www.instagram.com/caro.line_ld/" className="contact-link">
                  <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// == Export
export default Contact;
