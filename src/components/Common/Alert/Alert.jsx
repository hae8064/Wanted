import React, { useState } from 'react';
import { useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import './AlertEmail.css';

function AlertEmail({ bootAlert }) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert
        className="alertEmail"
        variant="warning"
        onClose={() => bootAlert(false)}
        dismissible
      >
        <Alert.Heading>이메일 형식이 맞지않습니다 !</Alert.Heading>
        <p>이메일 형식으로 입력 해 주세요..</p>
      </Alert>
    );
  } else {
    return null;
  }
}

export default AlertEmail;
