import React from "react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        marginRight: "100px",
        background: "green",
        width: "30px",
        height: "60px",
        opacity: "0.5",
        borderRadius: "15px",
        backgroundColor: "#fff",
        fontSize: "16px",
        position: "absolute",
        right: "60px",
        zIndex: "1",
        left: "125px",
        top: "150px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <div className="slick-prev2">
        <svg class="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
          <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
        </svg>
      </div>
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          marginRight: "100px",
          background: "green",
          width: "30px",
          height: "60px",
          opacity: "0.5",
          borderRadius: "15px",
          backgroundColor: "#fff",
          fontSize: "16px",
          position: "absolute",
          right: "60px",
        }}
        onClick={onClick}
      />
    </>
  );
}

export { SampleNextArrow, SamplePrevArrow };
