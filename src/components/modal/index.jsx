import React, { useState } from "react";
import "./modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="modal fixed inset-0 overflow-y-auto">
          <div className="modal-overlay" onClick={onClose}></div>

          <div className="modal-container">
            <div className="modal-content">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
