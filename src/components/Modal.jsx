import React, { useState } from "react";
import styles from "../styles/components/modal.module.css";

import PropTypes from "prop-types";

export const Modal = ({ isOpen = true, children, onClick }) => {
  return (
    <div
      data-testid="modal-test"
      className={styles.modal}
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className={styles.modalContent}>
        <span
          data-testid="close-button"
          className={styles.close}
          onClick={() => onClick(false)}
        >
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
};
