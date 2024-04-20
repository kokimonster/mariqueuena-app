import React from 'react';
import Toast from 'react-bootstrap/Toast';

function VerificationToast({ show, onClose }) {
  return (
    <Toast show={show} onClose={onClose}>
      <Toast.Header>
        <strong className="me-auto">Admin Notification</strong>
      </Toast.Header>
      <Toast.Body>You have new users to verify!</Toast.Body>
    </Toast>
  );
}

export default VerificationToast;
