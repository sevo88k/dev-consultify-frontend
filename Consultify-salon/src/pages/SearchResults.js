import React, { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  createSalonSearchHistory,
  getcontraindicationlistsAction,
} from "../Redux/Actions/user/salon";
import { Encryptedid } from "../utils/BcruptEncyptid";
import LargeBannerLayout from "../components/Layout/LargeBannerLayout";
import { Form, InputGroup } from "react-bootstrap";

const SearchResults = () => {
  const dispatch = useDispatch();
  const urlSearchParams = new URLSearchParams(window.location.search);

  const search = urlSearchParams.get("search");
  const search_id = urlSearchParams.get("search_id");

  const [scroll, setScroll] = useState(false);
  const [searchvalue, setSearchvalue] = useState("search");
  const [searchtitle, setSearchtitle] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(
      getcontraindicationlistsAction({
        search: search || searchtitle,
      })
    );
    setSearchtitle(search);
    setSearchvalue(search == "" ? "search" : search);
  }, []);

  var getsearchresults = useSelector(
    (state) => state?.myaccount?.getsearchresults
  );

  var handelconsultationform = useCallback((id, searchtitlevalue, object) => {
    const encodedEncrypted = Encryptedid(id);

    dispatch(
      createSalonSearchHistory({
        search_id: search_id,
        viewDuringSession: {
          title: object?.title,
          enterytype: object?.enterytype?.title,
        },
      })
    ).then((item) => {
      if (item?.payload?.success) {
        navigate(
          "/detail_screen/" +
            searchtitlevalue +
            "/" +
            encodedEncrypted +
            `?search=${search}&search_id=${item?.payload?.data?._id}`
        );
        //navigate(`/search_results?search=${search}&search_id=${item?.payload?.data?._id}`);
      }
    });
  }, []);

  //       var getsearchresults = getsearchresults.filter((val) =>
  //   val.title.toLowerCase().includes(searchtitle.toLowerCase())
  // );

  const keyPress = (e) => {
    if (e.key === "Enter") {
      dispatch(
        getcontraindicationlistsAction({
          search: searchtitle,
        })
      );
      dispatch(
        createSalonSearchHistory({
          search_id: search_id,
          typedSearch: searchtitle,
        })
      );
    }
  };

  useEffect(() => {
    console.log(search, "urlSearchParams");
  }, []);

  console.log(getsearchresults, "search_id");
  return (
    <LargeBannerLayout>
      <div className="resultbanner_main">
        <section className="search_result">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="form-grp d-flex justify-content-between align-items-end">
                  <div className="search-input">
                    <InputGroup className="">
                      <InputGroup.Text className="group-box-search">
                        <img
                          src={require("../assets/img/search.svg").default}
                          alt="search"
                        />
                      </InputGroup.Text>
                      <Form.Control
                        type="search"
                        className="form-control"
                        placeholder="Type here.."
                        value={searchtitle}
                        onChange={(e) => {
                          setSearchtitle(e.target.value);
                        }}
                        onKeyDown={keyPress}
                      />
                    </InputGroup>
                  </div>
                </div>
              </div>
            </div>
            {getsearchresults?.map(function (object, i) {
              return (
                <div
                  className="col-lg-12"
                  key={i}
                  onClick={() => {
                    handelconsultationform(object?._id, searchvalue, object);
                  }}
                >
                  <div className="searchresult_inner">
                    <h2 className="hdng">{object.title}</h2>
                    <h6 className="sub_hdng">{object?.enterytype?.title}</h6>
                    <p>{object.description}</p>
                    <div className="bottom_info">
                      <ul>
                        {/* <li> <Nav.Link href="/detail_screen">Side Effects (5)</Nav.Link></li> */}
                        {/* <li><Nav.Link href="/detail_screen">Products (23).</Nav.Link></li>
                                    <li><Nav.Link href="/detail_screen">Medical Conditions (10)</Nav.Link></li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
            {getsearchresults?.length == 0 && (
              <>
                <div className="search-results-text-in">
                  <p>No Search Results Found</p>
                </div>
              </>
            )}

            {/* <div className="col-lg-12">
                        <div className="searchresult_inner">
                            <h2 className="hdng">Botox Injections</h2>
                            <h6 className="sub_hdng">Treatment</h6>
                            <p>Botox injections, also known as botulinum toxin injections, are a medical procedure used to reduce the appearance of facial wrinkles and fine lines. Botox is a neurotoxin produced by the bacterium Clostridium botulinum.</p>
                            <div className="bottom_info">
                                <ul>
                                    <li><Nav.Link href="/detail_screen">Ingredients (10)</Nav.Link></li>
                                    <li><Nav.Link href="/detail_screen">Products (23).</Nav.Link></li>
                                    <li><Nav.Link href="/detail_screen">Medical Conditions (10)</Nav.Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="searchresult_inner">
                            <h2 className="hdng">Botox Injections</h2>
                            <h6 className="sub_hdng">Treatment</h6>
                            <p>Botox injections, also known as botulinum toxin injections, are a medical procedure used to reduce the appearance of facial wrinkles and fine lines. Botox is a neurotoxin produced by the bacterium Clostridium botulinum.</p>
                            <div className="bottom_info">
                                <ul>
                                    <li><Nav.Link href="/detail_screen">Ingredients (10)</Nav.Link></li>
                                    <li><Nav.Link href="/detail_screen">Products (23).</Nav.Link></li>
                                    <li><Nav.Link href="/detail_screen">Medical Conditions (10)</Nav.Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="searchresult_inner">
                            <h2 className="hdng">Botox Injections</h2>
                            <h6 className="sub_hdng">Treatment</h6>
                            <p>Botox injections, also known as botulinum toxin injections, are a medical procedure used to reduce the appearance of facial wrinkles and fine lines. Botox is a neurotoxin produced by the bacterium Clostridium botulinum.</p>
                            <div className="bottom_info">
                                <ul>
                                    <li><Nav.Link href="/detail_screen">Ingredients (10)</Nav.Link></li>
                                    <li><Nav.Link href="/detail_screen">Products (23).</Nav.Link></li>
                                    <li><Nav.Link href="/detail_screen">Medical Conditions (10)</Nav.Link></li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
          </div>
        </section>
      </div>
    </LargeBannerLayout>
  );
};

export default SearchResults;
