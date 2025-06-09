import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getWebBlog } from "../../../Redux/Actions/user/userAll";
import LayoutHome from "../../Layout/LayoutHome";
import parse from "html-react-parser";
import draftToHtml from "draftjs-to-html";
import { LayoutBlackTop } from "../../Layout/LayoutBlackTop";

const WebBlogs = () => {
  const HOST_NAME = process.env.REACT_APP_HOST_NAME;
  const { id } = useParams();
  const blog = useSelector((state) => state.consultaions.websiteBlog);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWebBlog(id));
  }, []);

  const options = {
    replace: (domNode) => {
      if (domNode.attribs && domNode.attribs.class === "remove") {
        return <div></div>;
      }
    },
  };

  return (
    <LayoutBlackTop>
      <section className="blog_banner ">
        <div className="container-fluid container_inner_width">
          <div className="banner-content">
            <h1 className="mb-0">Blog</h1>
          </div>
        </div>
      </section>
      {blog?._id == id && (
        <section className="blog_detail_section blog_content_page">
          <div className="container">
            <div className="blog_inner_pannel">
              {/* <div className="review">
              <span>Review</span>
              <span>45 min ago</span>
            </div> */}
              {blog && (
                <div className="section_title">
                  <h2>{blog?.title}</h2>
                  <ul className="list-inline d-flex">
                    <li>
                      Posted:
                      <span className="text-theme-color-2 me-3">
                        {" " + blog.createdAt}
                      </span>
                    </li>
                    <li>
                      By:
                      <span className="text-theme-color-2">
                        {" " + blog.author}
                      </span>
                    </li>
                  </ul>
                </div>
              )}

              {blog?.img && (
                <div className="main_img">
                  {/* <img src={require("../../../assets/images/blog-1.jpeg")} /> */}
                  <img src={HOST_NAME + "public/uploads/" + blog?.img} />
                </div>
              )}
              {blog?.blogContent && (
                <div className="info">
                  {parse(draftToHtml(JSON.parse(blog?.blogContent, options)))}
                </div>
              )}

              <div className="blog_authore">
                <div className="authore_info">
                  <div className="avtar">
                    <img
                      src={require("../../../assets/images/place-holder-user.png")}
                    />
                  </div>
                  {blog && (
                    <div className="text">
                      <h3>By: {blog?.author}</h3>
                      <span>{blog?.createdAt}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </LayoutBlackTop>
  );
};

export default WebBlogs;
