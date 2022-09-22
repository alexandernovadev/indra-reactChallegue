import React, { useState } from "react";
import styles from "../styles/components/modal.module.css";

export const Modal = ({ isOpen = true, children, onClick }) => {


  return (
    <div
      className={styles.modal}
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={() => onClick(false)}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};
