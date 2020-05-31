import React from "react";
import { Modal, Button } from "react-bootstrap";

const Popup = ({
  title,
  children,
  textBtnLeft,
  textBtnRight,
  isOpen,
  toggle,
  onBtnLeft,
  onBtnRight,
}) => {
  return (
    <Modal show={isOpen} onHide={toggle} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onBtnLeft}>
          {textBtnLeft}
        </Button>
        <Button variant="secondary" onClick={onBtnRight}>
          {textBtnRight}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Popup;
