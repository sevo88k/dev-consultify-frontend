import React from "react";
import { useSelector } from "react-redux";
import { FadeLoader } from "react-spinners";
const Loader = () => {
  const isLoading = useSelector((state) => state.loaderReducer.loading);
  return (
    <>
      {isLoading &&
      (
        <div className="loader-style container-fluid">
          <FadeLoader
            className="fade-loader"
            loading={isLoading}
            color={"#2B3674"}
          />
        </div>
      )}
    </>
  );
};

export default Loader;
