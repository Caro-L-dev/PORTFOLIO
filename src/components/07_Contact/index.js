// == Npm import
import React from 'react';
// import PropTypes from 'prop-types';

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
            <div className="contact__container__description--emailPhone">
              <p className="contact__container__description--email">
                liardcar@gmail.com
              </p>
              <p className="contact__container__description--phone">
                +33 620167545
              </p>
              <div className="contact__container__description--logos">
                Logos ici
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
