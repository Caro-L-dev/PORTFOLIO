import React from 'react';
import './modal.css';

const Modal = (props) => {
  /* This block means we will handle show/hide
  by props.show value.
  <Modal show={true} />: show the modal
  <Modal show={false} />: hide the modal */
  if (!props.show) {
    return null;
  }
  return (
    /* bind onClick event on modal which is similar to the close button */
    /* we allow outside click to close only so we need to prevent for inside click */
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={event => event.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">{props.title}</h4>
        </div>
        <div className="modal-body">{props.children}
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="button"
            onClick={props.onClose}
          >Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
