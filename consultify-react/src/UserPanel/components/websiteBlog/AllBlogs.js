import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWebsiteBlogs } from "../../../Redux/Actions/user/userAll";
import { LayoutBlackTop } from "../../Layout/LayoutBlackTop";
import { Link } from "react-router-dom";
const AllBlogs = () => {
  const HOST_NAME = process.env.REACT_APP_HOST_NAME;
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.consultaions.websiteBlogs);
  useEffect(() => {
    dispatch(getWebsiteBlogs());
  }, []);

  console.log(blogs)
  return (
    <LayoutBlackTop>
      <section className="blog_banner ">
        <div className="container-fluid container_inner_width">
          <div className="banner-content">
            <h1 className="mb-0">All Blogs</h1>
          </div>
        </div>
      </section>
      {blogs && (
        <section className="section-divide p-120 blog_content_page">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="blog_inner_part">
                  <ul className="blogs_details d-flex justify-content-center all_blogs_content">
                    {blogs &&
                      blogs?.map((blog) => {
                        return (
                          <li key={blog?.id}>
                            <img
                              src={HOST_NAME + blog?.img}
                              // src={require("../../../assets/images/blogs/blog-1.png")}
                              alt="blog"
                              className="img-fluid"
                            />
                            <div className="blog_inner">
                              <div className="blog_title">
                                <h4>{blog?.title}</h4>
                                <p>{blog?.author}</p>
                              </div>
                              <div className="read_more_btn">
                                <Link
                                  to={`/blog/${blog?.id}`}
                                  className="light_btn"
                                >
                                  Read More
                                </Link>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </LayoutBlackTop>
  );
};

export default AllBlogs;
