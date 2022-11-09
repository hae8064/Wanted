import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Password.css';

const Password = ({ modalOn, setHeaderLogin }) => {
  //비밀번호 value 임시로 저장해놓기
  const pwd = 'bonghee1234@';
  const [password, setPassword] = useState('');
  //비밀번호 일치하는지 확인 State
  const [pwdCheck, setPwdCheck] = useState(false);

  const [buttonActive, setButtonActive] = useState('off');

  //비밀번호 모달 off
  const modalOff = () => {
    modalOn(0);
  };

  const onLoginEvent = () => {
    if (pwdCheck === false) {
      alert('비밀번호가 일치하지 않습니다!');
      setPassword('');
    } else {
      setHeaderLogin(true);
      modalOn(0);
    }
  };

  useEffect(() => {
    if (password === pwd) {
      setPwdCheck(true);
      setButtonActive('on');
    }
  }, [password]);

  const onPasswordCheck = (e) => {
    setPassword(e.target.value);
  };

  return (
    <section className="passwordModal">
      <div className="passwordContainer">
        <div className="loginModalTopIcon">
          <i className="icon-logo_new"></i>
          {/* <button onClick={() => navigate(-1)}> */}
          <button onClick={modalOff}>
            <svg width="24" height="24" viewBox="0 0 24 24" color="#999">
              <path
                fill="currentColor"
                d="M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="loginModalMiddle">
          <div className="MiddleText">이메일</div>
          <div className="MiddleLoginInput">
            <input
              type="email"
              className="inputEmail"
              placeholder="이메일을 입력해 주세요."
              value="lbh8064@naver.com"
            />
          </div>
          <div className="password">비밀번호</div>
          <div className="passwordInput">
            <input
              type="password"
              className="inputPassword"
              placeholder="비밀번호를 입력 해 주세요"
              onChange={onPasswordCheck}
              value={password}
            />
          </div>
        </div>
        <button
          className={'passwordloginModalButton' + buttonActive}
          type="submit"
          onClick={onLoginEvent}
        >
          <div className="loginIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g fill="none" fill-rule="evenodd" stroke="#FFF" strokeWidth="2">
                <rect width="17.2" height="14" x="3.4" y="5" rx="3"></rect>
                <path d="M3.2 5.6L12 12l8.8-6.4"></path>
              </g>
            </svg>
          </div>
          {/* <div className="loginText">이메일로 계속하기</div> */}
          <div className="loginText">로그인</div>
        </button>
      </div>
    </section>
  );
};

export default Password;
