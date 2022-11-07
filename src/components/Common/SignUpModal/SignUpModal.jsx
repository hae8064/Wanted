import React, { useState } from 'react';
import './SignUpModal.css';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const SignUpModal = ({ modalOn }) => {
  const navigate = useNavigate();

  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

  const [allCheck, setAllCheck] = useState(false);
  const [firstCheck, setFirstCheck] = useState(false);
  const [secondCheck, setSecondCheck] = useState(false);
  const [password, setPassword] = useState('');
  const [passwdCheck, setPasswdCheck] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneButton, setPhoneButton] = useState('off');

  // 비밀번호 span color 기본 red 설정
  const [spanColor, setSpanColor] = useState(false);
  //회원가입 버튼 활성화
  const [signUpBtn, setSignUpBtn] = useState(false);

  const [testBtn, setTestBtn] = useState(false);

  const [testSignUpBtn, setTestSignUpBtn] = useState([]);

  //회원가입 모달창 off
  const modalOff = () => {
    modalOn(0);
  };

  const allAgreementEvent = (e) => {
    setAllCheck(!allCheck);
    setFirstCheck(!firstCheck);
    setSecondCheck(!secondCheck);
    if (firstCheck === true && secondCheck === true) {
      setAllCheck(!allCheck);
      if (allCheck === false) {
        setFirstCheck(true);
        setSecondCheck(true);
      } else {
        setFirstCheck(false);
        setSecondCheck(false);
      }
      return;
    }

    if (firstCheck === false || secondCheck === false) {
      setFirstCheck(true);
      setSecondCheck(true);
    }

    // if (firstCheck === true && secondCheck === true && testBtn === true) {
    //   setSignUpBtn(true);
    // } else {
    //   setSignUpBtn(false);
    // }
  };

  const firstagreementEvent = (e) => {
    if (allCheck === true) {
      setAllCheck(!allCheck);
    }
    setFirstCheck(!firstCheck);
  };

  const secondAgreementEvent = (e) => {
    if (allCheck === true) {
      setAllCheck(!allCheck);
    }
    setSecondCheck(!secondCheck);
  };

  const onPasswordEvent = (e) => {
    if (!passwordRegex.test(e.target.value)) {
      setSpanColor(false);
    } else {
      //비밀번호 유효성 맞으면 span text 검은색으로 변경
      setSpanColor(true);
      setPassword(e.target.value);
    }
  };

  const onPasswdCheck = (e) => {
    setPasswdCheck(e.target.value);
  };

  const onSignUp = () => {
    if (passwdCheck === password) {
      alert('회원가입 성공!');
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  };

  const onSignBtnActive = () => {
    // if (firstCheck === false && secondCheck === false) {
    //   setSignUpBtn(true);
    // } else {
    //   setSignUpBtn(false);
    // }
  };

  //useEffect를 이용해서 phone state값이 변경될 때 마다 rendering하여 inputValue delay지연
  useEffect(() => {
    let phoneSplitArr = phone.split('');
    if (
      phone.length === 11 &&
      Number(phoneSplitArr[0]) === 0 &&
      Number(phoneSplitArr[1]) === 1 &&
      Number(phoneSplitArr[2]) === 0
    ) {
      setPhoneButton('on');
    } else {
      setPhoneButton('off');
    }
  }, [phone]);

  //회원가입 버튼 활성화 (input창 5군데 + firstCheck 체크 + secondCheck 체크)
  useEffect(() => {
    if (
      testSignUpBtn.length >= 4 &&
      firstCheck === true &&
      secondCheck === true
    ) {
      if (passwdCheck === password) {
        setSignUpBtn(true);
      } else {
        setSignUpBtn(false);
      }
    } else {
      setSignUpBtn(false);
    }
  }, [testSignUpBtn, firstCheck, secondCheck, allCheck, password, passwdCheck]);

  const onPhoneNumber = (e) => {
    setPhone(e.target.value);
  };

  return (
    <section className="loginModal2">
      <div className="loginModalContainer2">
        <div className="loginModalTopIcon">
          <span>회원가입</span>
          <button onClick={modalOff}>
            <svg width="24" height="24" viewBox="0 0 24 24" color="#999">
              <path
                fill="currentColor"
                d="M17.97 19.03a.75.75 0 001.06-1.06l-6.5-6.5a.75.75 0 00-1.06 0l-6.5 6.5a.75.75 0 001.06 1.06L12 13.06l5.97 5.97zM12 10.94L6.03 4.97a.75.75 0 00-1.06 1.06l6.5 6.5a.75.75 0 001.06 0l6.5-6.5a.75.75 0 00-1.06-1.06L12 10.94z"
              ></path>
            </svg>
          </button>
        </div>

        <div className="nameInput">
          <span>이름</span>
          <input
            type="text"
            placeholder="이름을 입력해 주세요."
            onClick={() => {
              setTestSignUpBtn(testSignUpBtn.concat(true));
            }}
          />
        </div>

        <div className="numberInput">
          <span>휴대폰 번호</span>
          <div className="numberSelectInput">
            <select className="phoneNumber">
              <option value="+82">대한민국 +82 </option>
              <option value="+81">+81 Japan</option>
              <option value="+886">+886 Taiwan</option>
              <option value="+852">+852 Hong Kong</option>
              <option value="+65">+65 Singapore</option>
              <option value="+93">+93 Afghanistan</option>
              <option value="+355">+355 Albania</option>
              <option value="+213">+213 Algeria</option>
              <option value="+244">+244 Angola</option>
              <option value="+54">+54 Argentina</option>
              <option value="+374">+374 Armenia</option>
              <option value="+297">+297 Aruba</option>
              <option value="+61">+61 Australia</option>
              <option value="+43">+43 Austria</option>
              <option value="+994">+994 Azerbaijan</option>
              <option value="+973">+973 Bahrain</option>
              <option value="+880">+880 Bangladesh</option>
              <option value="+375">+375 Belarus</option>
              <option value="+32">+32 Belgium</option>
              <option value="+501">+501 Belize</option>
              <option value="+229">+229 Benin</option>
              <option value="+975">+975 Bhutan</option>
              <option value="+591">+591 Bolivia</option>
              <option value="+267">+267 Botswana</option>
              <option value="+55">+55 Brazil</option>
              <option value="+673">+673 Brunei</option>
              <option value="+359">+359 Bulgaria</option>
              <option value="+226">+226 Burkina Faso</option>
              <option value="+855">+855 Cambodia</option>
              <option value="+237">+237 Cameroon</option>
              <option value=" +1"> +1 Canada</option>
              <option value="+56">+56 Chile</option>
              <option value="+86">+86 China</option>
              <option value="+61">+61 Christmas Island</option>
              <option value="+61">+61 Cocos Islands</option>
              <option value="+57">+57 Colombia</option>
              <option value="+269">+269 Comoros</option>
              <option value="+506">+506 Costa Rica</option>
              <option value="+385">+385 Croatia</option>
              <option value="+53">+53 Cuba</option>
              <option value="+599">+599 Curacao</option>
              <option value="+357">+357 Cyprus</option>
              <option value="+420">+420 Czech Republic</option>
              <option value="+45">+45 Denmark</option>
              <option value="+253">+253 Djibouti</option>
              <option value="+593">+593 Ecuador</option>
              <option value="+20">+20 Egypt</option>
              <option value="+503">+503 El Salvador</option>
              <option value="+240">+240 Equatorial Guinea</option>
              <option value="+372">+372 Estonia</option>
              <option value="+251">+251 Ethiopia</option>
              <option value="+298">+298 Faroe Islands</option>
              <option value="+679">+679 Fiji</option>
              <option value="+358">+358 Finland</option>
              <option value="+33">+33 France</option>
              <option value="+689">+689 French Polynesia</option>
              <option value="+220">+220 Gambia</option>
              <option value="+995">+995 Georgia</option>
              <option value="+49">+49 Germany</option>
              <option value="+233">+233 Ghana</option>
              <option value="+30">+30 Greece</option>
              <option value="+299">+299 Greenland</option>
              <option value="+502">+502 Guatemala</option>
              <option value="+224">+224 Guinea</option>
              <option value="+592">+592 Guyana</option>
              <option value="+509">+509 Haiti</option>
              <option value="+504">+504 Honduras</option>
              <option value="+36">+36 Hungary</option>
              <option value="+354">+354 Iceland</option>
              <option value="+91">+91 India</option>
              <option value="+62">+62 Indonesia</option>
              <option value="+98">+98 Iran</option>
              <option value="+964">+964 Iraq</option>
              <option value="+353">+353 Ireland</option>
              <option value="+972">+972 Israel</option>
              <option value="+39">+39 Italy</option>
              <option value="+962">+962 Jordan</option>
              <option value="+7">+7 Kazakhstan</option>
              <option value="+254">+254 Kenya</option>
              <option value="+383">+383 Kosovo</option>
              <option value="+965">+965 Kuwait</option>
              <option value="+996">+996 Kyrgyzstan</option>
              <option value="+856">+856 Laos</option>
              <option value="+371">+371 Latvia</option>
              <option value="+961">+961 Lebanon</option>
              <option value="+218">+218 Libya</option>
              <option value="+423">+423 Liechtenstein</option>
              <option value="+370">+370 Lithuania</option>
              <option value="+352">+352 Luxembourg</option>
              <option value="+853">+853 Macau</option>
              <option value="+389">+389 Macedonia</option>
              <option value="+261">+261 Madagascar</option>
              <option value="+265">+265 Malawi</option>
              <option value="+60">+60 Malaysia</option>
              <option value="+960">+960 Maldives</option>
              <option value="+223">+223 Mali</option>
              <option value="+356">+356 Malta</option>
              <option value="+692">+692 Marshall Islands</option>
              <option value="+222">+222 Mauritania</option>
              <option value="+230">+230 Mauritius</option>
              <option value="+52">+52 Mexico</option>
              <option value="+373">+373 Moldova</option>
              <option value="+976">+976 Mongolia</option>
              <option value="+382">+382 Montenegro</option>
              <option value="+212">+212 Morocco</option>
              <option value="+258">+258 Mozambique</option>
              <option value="+95">+95 Myanmar</option>
              <option value="+264">+264 Namibia</option>
              <option value="+977">+977 Nepal</option>
              <option value="+31">+31 Netherlands</option>
              <option value="+687">+687 New Caledonia</option>
              <option value="+64">+64 New Zealand</option>
              <option value="+505">+505 Nicaragua</option>
              <option value="+227">+227 Niger</option>
              <option value="+234">+234 Nigeria</option>
              <option value="+47">+47 Norway</option>
              <option value="+968">+968 Oman</option>
              <option value="+92">+92 Pakistan</option>
              <option value="+680">+680 Palau</option>
              <option value="+970">+970 Palestine</option>
              <option value="+507">+507 Panama</option>
              <option value="+675">+675 Papua New Guinea</option>
              <option value="+595">+595 Paraguay</option>
              <option value="+51">+51 Peru</option>
              <option value="+63">+63 Philippines</option>
              <option value="+48">+48 Poland</option>
              <option value="+351">+351 Portugal</option>
              <option value="+974">+974 Qatar</option>
              <option value="+262">+262 Reunion</option>
              <option value="+40">+40 Romania</option>
              <option value="+7">+7 Russia</option>
              <option value="+250">+250 Rwanda</option>
              <option value="+685">+685 Samoa</option>
              <option value="+966">+966 Saudi Arabia</option>
              <option value="+221">+221 Senegal</option>
              <option value="+381">+381 Serbia</option>
              <option value="+248">+248 Seychelles</option>
              <option value="+232">+232 Sierra Leone</option>
              <option value="+421">+421 Slovakia</option>
              <option value="+386">+386 Slovenia</option>
              <option value="+677">+677 Solomon Islands</option>
              <option value="+252">+252 Somalia</option>
              <option value="+27">+27 South Africa</option>
              <option value="+211">+211 South Sudan</option>
              <option value="+34">+34 Spain</option>
              <option value="+94">+94 Sri Lanka</option>
              <option value="+249">+249 Sudan</option>
              <option value="+597">+597 Suriname</option>
              <option value="+46">+46 Sweden</option>
              <option value="+41">+41 Switzerland</option>
              <option value="+963">+963 Syria</option>
              <option value="+992">+992 Tajikistan</option>
              <option value="+255">+255 Tanzania</option>
              <option value="+66">+66 Thailand</option>
              <option value="+228">+228 Togo</option>
              <option value="+676">+676 Tonga</option>
              <option value="+216">+216 Tunisia</option>
              <option value="+90">+90 Turkey</option>
              <option value="+993">+993 Turkmenistan</option>
              <option value="+256">+256 Uganda</option>
              <option value="+380">+380 Ukraine</option>
              <option value="+971">+971 United Arab Emirates</option>
              <option value="+44">+44 United Kingdom</option>
              <option value="+1">+1 United States</option>
              <option value="+598">+598 Uruguay</option>
              <option value="+998">+998 Uzbekistan</option>
              <option value="+678">+678 Vanuatu</option>
              <option value="+58">+58 Venezuela</option>
              <option value="+84">+84 Vietnam</option>
              <option value="+967">+967 Yemen</option>
              <option value="+260">+260 Zambia</option>
              <option value="+263">+263 Zimbabwe</option>
            </select>
            <i className="MobileInput_MobileInput_select_arrow__hLBUp icon-arrow_right"></i>
          </div>
          <div className="exampleNumber">
            <input
              type="text"
              placeholder="(예시) 01024138607"
              onChange={onPhoneNumber}
              onClick={() => {
                setTestSignUpBtn(testSignUpBtn.concat(true));
              }}
            />
            <button className={'phoneButton' + phoneButton}>
              <span>인증번호 받기</span>
            </button>
          </div>
          <div className="numberResult">
            <input
              type="text"
              placeholder="인증번호를 입력해 주세요."
              onClick={() => {
                setTestSignUpBtn(testSignUpBtn.concat(true));
              }}
            />
          </div>
        </div>

        <div className="password">
          <div className="passwordTop">
            <span>비밀번호</span>
            <input
              type="password"
              placeholder="비밀번호를 입력해 주세요."
              onChange={onPasswordEvent}
              onClick={() => {
                setTestSignUpBtn(testSignUpBtn.concat(true));
              }}
            />
            <span
              className="passwordFooter"
              style={spanColor ? { color: 'black' } : { color: 'red' }}
            >
              영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합하여 8자 이상{' '}
              <br /> 입력해 주세요.
            </span>
          </div>

          <div className="passwordCheck">
            <span>비밀번호 확인</span>
            <input
              type="password"
              placeholder="비밀번호를 다시 한번 입력해 주세요."
              onClick={() => {
                setTestSignUpBtn(testSignUpBtn.concat(true));
              }}
              onChange={onPasswdCheck}
            />
          </div>
        </div>

        <div className="agreementCheck">
          <div className="checkButton">
            {/* <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M18.75 21.75H5.25a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v13.5a3 3 0 0 1-3 3zm0-1.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5h13.5z"
              ></path>
            </svg> */}
            <input
              classNameName="allAgreement"
              type="checkbox"
              checked={allCheck}
              onClick={allAgreementEvent}
              onChange={onSignBtnActive}
            />
          </div>
          <div className="allAgreement">
            <span>전체 동의</span>
          </div>
        </div>

        <div className="agreementTop">
          <div className="checkButton">
            {/* <svg width="17" height="17" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M18.75 21.75H5.25a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v13.5a3 3 0 0 1-3 3zm0-1.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5h13.5z"
              ></path>
            </svg> */}
            <input
              className="firshCheck"
              type="checkbox"
              checked={firstCheck}
              onClick={firstagreementEvent}
              onChange={onSignBtnActive}
            />
          </div>
          <div className="AgreementMiddle">
            <span>개인정보 수집 및 이용 동의 (필수)</span>
          </div>
          <div className="rightA">
            <a href="/">자세히</a>
          </div>
        </div>

        <div className="agreementBottom">
          <div className="checkButton">
            {/* <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M18.75 21.75H5.25a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v13.5a3 3 0 0 1-3 3zm0-1.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5h13.5z"
              ></path>
            </svg> */}
            <input
              className="secondCheck"
              type="checkbox"
              checked={secondCheck}
              onClick={secondAgreementEvent}
              onChange={onSignBtnActive}
            />
          </div>
          <div className="AgreementMiddle">
            <span>이벤트 소식 등 알림 정보 받기</span>
          </div>
          <div className="rightB">
            <a href="/">자세히</a>
          </div>
        </div>

        <div className="submitButton">
          <button
            type="submit"
            onClick={onSignUp}
            style={
              signUpBtn
                ? { backgroundColor: 'lightBlue', color: 'white' }
                : { backgroundColor: 'lightGrey', color: 'white' }
            }
          >
            회원가입하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignUpModal;
