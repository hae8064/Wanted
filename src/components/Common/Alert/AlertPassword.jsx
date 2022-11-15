import React, { useState } from 'react';
import { useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import './AlertEmail.css';

function AlertPassword({ bootAlert }) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert
        className="alertPassword"
        variant="warning"
        onClose={() => bootAlert(false)}
        dismissible
      >
        <Alert.Heading>비밀번호가 다릅니다.</Alert.Heading>
        <p>올바른 비밀번호를 입력 해 주세요.</p>
      </Alert>
    );
  } else {
    return null;
  }
}

export default AlertPassword;
