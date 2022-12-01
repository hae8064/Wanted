import React, { useRef, useState } from 'react';
import './RecruitPage.css';
import firebase from '../../../firebase';
// import {
//   getDownloadURL,
//   ref,
//   uploadBytes,
//   uploadBytesResumable,
// } from '@firebase/storage';
import { storage } from '../../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from '@firebase/storage';
import { useEffect } from 'react';

const RecruitPage = () => {
  const imageInput = useRef();
  const [progress, setProgress] = useState(0);
  const listRef = ref(storage, 'files/uid');
  const [fileData, setFileData] = useState([]);

  const onClickImageUpload = (e) => {
    imageInput.current.click();
    console.log(e.target.value());
  };

  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadOnclick(file);
  };

  const uploadOnclick = (file) => {
    //파일 없으면 리턴
    if (!file) return;

    const storageRef = ref(storage, `/files/${file.name}`);
    // const storageRef = ref(storage, '../../../files/testFile.txt');
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url));
        // setFileData(`${file.name}`);
        setFileData([...fileData, `${file.name}`]);
        // console.log(url);
      }
    );
  };

  useEffect(() => {
    console.log(fileData);
  }, [fileData]);

  let today = new Date();

  let year = today.getFullYear();
  let month = ('0' + (today.getMonth() + 1)).slice(-2);
  let day = ('0' + today.getDate()).slice(-2);

  let dateString = year + '-' + month + '-' + day;
  return (
    <div className="recruitPageContainer">
      <div className="topRecruitPage">
        <div
          className="eventBannerContainer"
          style={{
            backgroundImage: `Url("https://static.wanted.co.kr/career_connect/banner-back-pc-common.png")`,
          }}
        >
          <button className="recruitEventBanner">
            <div className="EventBannerButtonDiv">
              <p>이력서 작성이 쉬워진다! 1분 만에 채워지는 경력정보</p>
              <img
                className="buttonDivImg"
                src="https://static.wanted.co.kr/career_connect/trio.webp"
                alt="career-connect-icon"
              />
              <strong>내 경력 불러오기</strong>
            </div>
          </button>
        </div>
      </div>
      <div className="bottomRecruitPage">
        <div className="bottomRecruitLeft">최근 문서</div>
        <div className="bottomRecruitRight">
          원티드 이력서 소개
          <i className="icon-info_icon"></i>
        </div>
      </div>
      <div className="bottomFileUpload">
        <div className="newRecruit">
          <div className="newRecruitTop">
            <i class="icon-new_resume"></i>
          </div>
          <div className="newRecruitBottom">새 이력서 작성</div>
        </div>
        {/* <button type="submit" className="newFileUploadTop" on>
          <i class="icon-upload_resume"></i>
        </button> */}
        <form className="newFileUpload" onSubmit={formHandler}>
          <input
            type="file"
            className="newFileUploadInput"
            ref={imageInput}
            style={{ display: 'none' }}
          />
          <button
            type="submit"
            className="newFileUploadTop"
            // onClick={onClickImageUpload}
          >
            <i class="icon-upload_resume"></i>
          </button>

          <div className="newFileUploadBottom" onClick={onClickImageUpload}>
            파일 업로드
          </div>
        </form>
        {
          fileData.length >= 1 &&
            fileData.map((fildItem) => (
              <div className="newRecruitStorage">
                <div className="newRecruitTopStorage">
                  <strong>{fildItem}</strong>
                </div>
                <div className="newRecruitBottomStorage">
                  파일 업로드 완료 <br />
                  {dateString}
                </div>
              </div>
            ))
          // <div className="newRecruitStorage">
          //   <div className="newRecruitTopStorage">
          //     <strong>{fileData}</strong>
          //   </div>
          //   <div className="newRecruitBottomStorage">
          //     파일 업로드 완료 <br />
          //     {dateString}
          //   </div>
          // </div>
        }
      </div>

      {/* // <div className="newRecruitStorage">
        //   <div className="newRecruitTopStorage">
        //     <strong>data</strong>
        //   </div>
        //   <div className="newRecruitBottomStorage">업로드 완료</div>
        // </div> */}
    </div>
  );
};

export default RecruitPage;
