import React from "react";
import Layout from "../../Layout/Layout";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { viewBlog } from "../../../Redux/Actions/user/userAll";
import parse from "html-react-parser";
import draftToHtml from "draftjs-to-html";
import { startstopLoading } from "../../../Redux/Reducers/globalSlice";

const ViewBlogUser = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const blog = useSelector((state) => state?.consultaions?.viewBlog);
  console.log(id, "blog");
  const HOST_NAME = process.env.REACT_APP_HOST_NAME;

  const options = {
    replace: (domNode) => {
      if (domNode.attribs && domNode.attribs.class === "remove") {
        return <div></div>;
      }
    },
  };

  useEffect(() => {
    dispatch(startstopLoading(true));
    dispatch(viewBlog(id)).then((res) => {
      if (res.payload.success == true || res.payload.success == false) {
        dispatch(startstopLoading(false));
      }
    });
  }, [id]);
  return (
    blog != null && (
      <Layout>
        <div className="col-lg-10">
          <div className="desc_area pb-0">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <div>
                    <span className="small_text">Blogs</span>
                    <h4 className="mb-sm-0 font-size-28">Blogs</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="row blog_detail_page">
              <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-6 col-sm-6 mb-4">
                <h2 className=" mb-2">{blog?.title}</h2>
                <div className="media-body d-flex justify-content-between">
                  <ul className="list-inline d-flex">
                    <li>
                      Posted:{" "}
                      <span className="text-theme-color-2 me-3">
                        {blog?.createdAt}
                      </span>
                    </li>
                    <li>
                      By:{" "}
                      <span className="text-theme-color-2">{blog?.author}</span>
                    </li>
                  </ul>
                </div>
                <img
                  src={HOST_NAME.concat("public/uploads/").concat(
                    "",
                    blog?.img
                  )}
                  className="card-img-top"
                  alt="blog"
                />
                <div className="px-0 pb-0">
                  <div className="media mt-4 mb-0 pt-1">
                    <div className="media-body blog-content-html">
                      {parse(
                        draftToHtml(JSON.parse(blog?.blogContent, options))
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  );
};

export default ViewBlogUser;
