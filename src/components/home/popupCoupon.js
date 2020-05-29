import React from "react";
import { Modal, Button } from "react-bootstrap";

const PopupCoupon = ({ isOpen, toggle, onService, onOrder }) => {
  return (
    <Modal show={isOpen} onHide={toggle} centered>
      <Modal.Header closeButton>
        <Modal.Title>쿠폰 구매 </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        승인하기 위해 시간이 부족해 시간 구매가 필요합니다. 원하시는 구매형태를
        선택해주세요
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onService}>
          시간제 쿠폰 구매하기
        </Button>
        <Button variant="secondary" onClick={onOrder}>
          30 시간만 구매하기
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopupCoupon;
