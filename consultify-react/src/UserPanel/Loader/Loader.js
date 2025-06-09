import React from "react";
import { useSelector } from "react-redux";
import { FadeLoader } from "react-spinners";
const Loader = () => {
  const isLoading = useSelector((state) => state.globalSlice.value);
  return (
    <>
      {isLoading &&
      (
        <div className="loader-style container-fluid">
          <FadeLoader
            className="fade-loader"
            // loading={isLoading}
            loading={true}
            color={"#1B95BC"}
          />
        </div>
      )}
    </>
  );
};

export default Loader;
