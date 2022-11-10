import React, { useCallback, useEffect, useState } from "react";
import "./GridContainer.css";
import dummy from "../../../db/data.json";
import { json, Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { addBook, deleteBook } from "../../../redux/actions";
import bookReducer from "../../../redux/reducers/book-reducer";

function GridContainer() {
  const dispatch = useDispatch();

  //무한 스크롤 구현 state
  const [itemIndex, setItemIndex] = useState(0);
  const [result, setResult] = useState(dummy.developGridContainer.slice(0, 8));

  //북마크 아이콘 배경 blue 변경
  const [blueIcon, setBlueIcon] = useState("off");
  const [bookId, setBookId] = useState([]);

  const bookItem = useSelector((store) => store.bookReducer);

  const _infiniteScroll = useCallback(() => {
    console.log("@@@@");
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight <= scrollHeight) {
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
    window.addEventListener("scroll", _infiniteScroll, true);
    return () => window.removeEventListener("scroll", _infiniteScroll, true);
  }, [_infiniteScroll]);

  useEffect(() => {
    console.log("북마크 id목록 " + bookId);
  }, [bookId]);

  return (
    <div className="devGridContainer">
      {result.map((container) => (
        <div className="gridContainerFirst">
          <header>
            {/* {bookId.find(container.id) ? setBlueIcon("on") : setBlueIcon("off")} */}
            <svg
              className={"bookmarkButton" + blueIcon}
              width="22"
              height="22"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
              // onClick={onSvgClick}
              onClick={() => {
                console.log("북마크 추가@@");
                dispatch(addBook(container.id));
                // setBookId(bookId.concat(container.id));
                setBookId((prevList) => [...prevList, container.id]);

                //만약 북마크 한번 더 누르면 제거
                // if (bookId.find((v) => v === container.id)) {
                //   setBookId(bookId.filter((e) => e !== container.id));
                //   dispatch(deleteBook(container.id));
                // }

                if (bookItem.find((v) => v === container.id)) {
                  dispatch(deleteBook(container.id));
                }
              }}
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

            <Link
              key={container.id}
              to={`/detailRecruit/${container.id}`}
              style={{ height: "190px" }}
            >
              <img src={container.img} alt="" />
            </Link>
          </header>
          <footer>
            <span className="gridTitle">{container.gridTitle}</span>
            <span className="gridTitle2">{container.gridTitle2}</span>
            <button className="gridButton">
              <span>{container.gridButton}</span>
            </button>
            <span className="gridTitle3">
              {container.region} <span className="addressDot">.</span>{" "}
              <span>{container.country}</span>
            </span>
            <span className="gridTitle4">
              채용보상금{" "}
              {container.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              원
            </span>
          </footer>
        </div>
      ))}
    </div>
  );
}

export default GridContainer;
