import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './HeaderSearch.css';
import { ReactComponent as SearchIcon2 } from '../../../assets/icon-search2.svg';
import SearchResult from '../SearchResult/SearchResult';

const HeaderSearch = ({ on, changeSearchOn }) => {
  const [searchView, setSearchView] = useState(on);
  let searchRef = useRef(null);
  const inputRef = useRef(null);
  const [inputData, setInputData] = useState('');

  // 검색 리스트 렌더링용 (true이면 보여준다)
  let [inputFocus, setInputFocus] = useState(false);

  let searchClassName = 'searchBarContaineroff';

  /* 외부 영역을 클릭했을 때 검색창이 닫히도록 */
  useEffect(() => {
    function handleOutside(e) {
      // current.contains(e.target) : 컴포넌트 특정 영역 외 클릭 감지를 위해 사용
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchView('off');
        changeSearchOn();
        console.log('close');
        setInputData('');
      }
      searchRef.current.focus();
    }
    searchRef.current.focus();

    document.addEventListener('mousedown', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
    };
  }, [searchRef, searchView, inputData]);

  useLayoutEffect(() => {
    if (searchRef.current !== null) searchRef.current.focus();
  });

  const onInputChange = (e) => {
    setInputData(e.target.value);
  };

  const onSubmitData = (e) => {
    <SearchResult title={setInputData} />;
  };
  return (
    <div className={'searchBarContainer' + on}>
      {/* <div
      ref={searchRef}
      className={
        searchView === 'on' ? 'searchBarContaineron' : 'searchBarContaineroff'
      }
    > */}
      <div className="searchInputWhite">
        <div className="formSearch">
          <form action={`/search/${inputData}`} onClick={onSubmitData}>
            <SearchIcon2 className="searchIconInput" />
            <input
              ref={searchRef}
              type="search"
              placeholder="#태그, 회사, 포지션 검색"
              autoComplete="off"
              onChange={onInputChange}
              value={inputData}
            />
          </form>
        </div>

        <div className="tagContainer">
          <div className="tagTop">
            <div className="tagTopLeft">추천태그로 검색해보세요</div>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div className="tagTopRight">
                기업태그 홈 이동하기
                <svg width="12" height="12" viewBox="0 0 12 12">
                  <path
                    fill="currentColor"
                    d="M4.22 9.72a.75.75 0 001.06 1.06l4.25-4.25a.75.75 0 000-1.06L5.28 1.22a.75.75 0 00-1.06 1.06L7.94 6 4.22 9.72z"
                  ></path>
                </svg>
              </div>
            </Link>
          </div>
          <div className="tagBottom">
            <ul className="tagUl">
              <li className="tagListItem">
                <button className="tagListButton1">#퇴사율5%이하</button>
              </li>
              <li className="tagListItem">
                <button className="tagListButton2">#어학교육</button>
              </li>
              <li className="tagListItem">
                <button className="tagListButton3">#핀테크</button>
              </li>
              <li className="tagListItem">
                <button className="tagListButton4">#연봉상위2~5%</button>
              </li>
              <li className="tagListItem">
                <button className="tagListButton5">#수유실</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="searchBlack"></div>
    </div>
  );
};

export default HeaderSearch;
