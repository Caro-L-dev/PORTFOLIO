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
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Modal title</h4>
        </div>
        <div className="modal-body">This is modal content
        </div>
        <div className="modal-footer">
          <button type="button" className="button">Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;