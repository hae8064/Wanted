import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Hamburger.css';
import dummy from '../../../db/data.json';

const Hamburger = ({ view, setHamHover }) => {
  const [viewContainer, setViewContainer] = useState(view);
  const [subTitle, setSubTitle] = useState('');

  console.log(`mainHamburger ` + view);
  return (
    <div
      className={'mainHamburger ' + view}
      onMouseLeave={() => setHamHover(false)}
    >
      <div className="mainHamburgerContainer">
        <ul className="hamburgerSubList">
          <Link
            to="/developPage"
            style={{ textDecoration: 'none', marginBottom: 0 }}
          >
            <em>
              <span className="mainHamburgerTitle">직군전체</span>
            </em>
          </Link>
          {dummy.hamburgerData.map((hamdata) => (
            <li
              key={hamdata.index}
              className={hamdata.subSection}
              onMouseEnter={() => setSubTitle(hamdata.subSection)}
            >
              {hamdata.title}
            </li>
          ))}
          <li class="Explore_GigsCategoryItem__l4LhT Explore_hasCurrentCategory__wxhIs">
            <a
              href="https://www.wanted.co.kr/gigs/projects"
              class="Explore_GigsCategoryItem_link__OlnwE"
              aria-label=""
              target="_blank"
              rel="noopener noreferrer"
              data-attribute-id="jobCategoryMenu__banner__click"
            >
              <div class="Explore_GigsCategoryItem_banner__eRpF8">
                <span>프리랜서</span>
              </div>
            </a>
          </li>
        </ul>
      </div>

      {subTitle === '' ? null : (
        <div
          className={'container ' + subTitle}
          style={
            subTitle === 'develop' ? { width: '650px' } : { width: '450px' }
          }
        >
          <ul>
            {dummy.develop.map((data) => (
              <li key={data.index} className="hamSubTitle">
                <Link to="/">
                  <span>{data.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
