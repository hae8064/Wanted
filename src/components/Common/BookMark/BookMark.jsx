import React from "react";
import "./BookMark.css";
import { useSelector, useDispatch } from "react-redux";
import { bookAdd } from "../../../redux/reducers/addsub";
import dummy from "../../../db/data.json";
import { Link } from "react-router-dom";

const BookMark = () => {
  //   const dispatch = useDispatch();

  const bookItem = useSelector((store) => store.bookReducer);

  console.log(bookItem);
  return (
    <>
      <h2>북마크 목록</h2>

      <div className="devGridContainer">
        {dummy.developGridContainer.map((item) => (
          <>
            {bookItem.map((id) => (
              <>
                {item.id === id ? (
                  <div className="gridContainerFirst">
                    <header>
                      <svg
                        class="bookmarkButton"
                        width="22"
                        height="22"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="https://www.w3.org/2000/svg"
                        // onClick={onSvgClick}
                        onClick={() => {
                          console.log("북마크 삭제@@");
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
                      <Link key={item.id} to={`/detailRecruit/${item.id}`}>
                        <img src={item.img} alt="" />
                      </Link>
                    </header>
                    <footer>
                      <span className="gridTitle">{item.gridTitle}</span>
                      <span className="gridTitle2">{item.gridTitle2}</span>
                      <button className="gridButton">
                        <span>{item.gridButton}</span>
                      </button>
                      <span className="gridTitle3">
                        {item.region} <span className="addressDot">.</span>{" "}
                        <span>{item.country}</span>
                      </span>
                      <span className="gridTitle4">
                        채용보상금{" "}
                        {item.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        원
                      </span>
                    </footer>{" "}
                  </div>
                ) : null}
              </>
            ))}
          </>
        ))}
      </div>
    </>
  );
};

export default BookMark;
