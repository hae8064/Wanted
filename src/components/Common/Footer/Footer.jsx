import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div class="footer">
      <div class="footerTop">
        <div class="footerTopLeft">
          <div class="footerLogo">
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
              alt=""
            />
          </div>
          <div class="footerInfo">기업소개</div>
          <div class="footerInfo">이용약관</div>
          <div class="footerInfo">개인정보 처리방침</div>
          <div class="footerInfo">고객센터</div>
        </div>

        <div class="footerTopRight">
          <div class="footerTag">
            <a href="/">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_instagram.png&w=20&q=100"
                alt=""
              />
            </a>
            <a href="/">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_youtube.png&w=25&q=100"
                alt=""
              />
            </a>
            <a href="/">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_facebook.png&w=20&q=100"
                alt=""
              />
            </a>
            <a href="/">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_blog.png&w=20&q=100"
                alt=""
              />
            </a>
            <a href="/">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_kakao.png&w=19&q=100"
                alt=""
              />
            </a>
            <a href="/">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_post.png&w=20&q=100"
                alt=""
              />
            </a>
            <a href="/">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_apple.png&w=17&q=100"
                alt=""
              />
            </a>
            <a href="/">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_google.png&w=17&q=100"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      <div class="footerBottom">
        <div class="footerBottomText">
          <p class="Footer_footerText__CTqnd kr">
            (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300
            롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147
            <br />
            유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 |
            (국외) 서울동부-유-2020-2 | 사업자등록번호 : 299-86-00021 |
            02-539-7118
            <br />© Wantedlab, Inc.
          </p>
        </div>

        <div class="language">
          <img
            src="https://static.wanted.co.kr/images/userweb/ico_KR.svg"
            alt=""
          />
          <select class="languageChoice" id="">
            <option value="KR">한국(한국어)</option>
            <option value="KR">日本 (日本語)</option>
            <option value="KR">Worldwide (English)</option>
          </select>
          <i class="icon-arrow_bottom_fill"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
