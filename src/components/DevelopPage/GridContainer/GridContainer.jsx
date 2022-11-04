import React, { useCallback, useEffect, useState } from 'react';
import './GridContainer.css';
import dummy from '../../../db/data.json';
import { json, Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

function GridContainer() {
  const [productList, setProductList] = useState([]);
  const [items, setItems] = useState(10);
  const [preItems, setPreItems] = useState(0);

  //새로운 블로그
  const [itemIndex, setItemIndex] = useState(0);
  const [result, setResult] = useState(dummy.developGridContainer.slice(0, 8));

  const _infiniteScroll = useCallback(() => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight === scrollHeight) {
      setTimeout(() => {
        setItemIndex(itemIndex + 8);
        setResult(
          result.concat(
            dummy.developGridContainer.slice(itemIndex + 8, itemIndex + 16)
          )
        );
      }, 1500);
    } else if (scrollTop + clientHeight <= scrollHeight) {
      setTimeout(() => {
        setItemIndex(itemIndex + 8);
        setResult(
          result.concat(
            dummy.developGridContainer.slice(itemIndex + 8, itemIndex + 16)
          )
        );
      }, 1500);
    }
  }, [itemIndex, result]);

  useEffect(() => {
    window.addEventListener('scroll', _infiniteScroll, true);
    return () => window.removeEventListener('scroll', _infiniteScroll, true);
  }, [_infiniteScroll]);

  const fetchData = () => {
    setTimeout(() => {
      // fetch(`/db/data.json`, {
      //   method: "GET",
      // })
      // .then(res => res.json())
      // .then(data => )
      // fetch('/db/data.json')
      //   .then((res) => res.json())
      //   .then((res) => {
      //     let result = res.data.slice(ths);
      //   });
    }, 3000);
  };

  return (
    <div class="devGridContainer">
      {result.map((container) => (
        <Link
          key={container.id}
          to={`/detailRecruit/${container.id}`}
          className="gridContainerFirst"
        >
          <header>
            <svg
              class="bookmarkButton"
              width="22"
              height="22"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
                fill="white"
              ></path>
              <path
                d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
                fill="black"
                fill-opacity="0.25"
              ></path>
            </svg>
            <img src={container.img} alt="" />
          </header>
          <footer>
            <span class="gridTitle">{container.gridTitle}</span>
            <span class="gridTitle2">{container.gridTitle2}</span>
            <button class="gridButton">
              <span>{container.gridButton}</span>
            </button>
            <span class="gridTitle3">
              {container.region} <span class="addressDot">.</span>{' '}
              <span>{container.country}</span>
            </span>
            <span class="gridTitle4">
              채용보상금{' '}
              {container.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              원
            </span>
          </footer>
        </Link>
      ))}
    </div>
  );
}

export default GridContainer;
