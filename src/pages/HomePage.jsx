import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../components/ui/Carousel";
import Tabs from "../components/ui/Tabs";
import NiceSelect from "../components/ui/NiceSelect";
import LoanCalculator from "../components/sections/LoanCalculator";

export default function HomePage() {
  return (
    <>
      <div className="boxed_wrapper">
        <section className="banner-section p_relative">
          <Carousel className="banner-carousel owl-theme owl-carousel">
            <div className="slide-item p_relative full-bg">
              <div
                className="bg-layer"
                style={{
                  backgroundImage: "url(/assets/images/banner/image1.1.webp)",
                }}
              ></div>
              <div className="overlay-layer"></div>
              <div className="outer-container">
                <div className="content-box">
                  <h5>
                    <span>Kaizen Savings</span> Grow every naira
                  </h5>
                  <h2>
                    It's your turn to achieve more with Kaizen Microfiance Bank.
                  </h2>
                  <div className="btn-box">
                    <Link to="/account-details" className="theme-btn">
                      <span>Open an Account</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-item p_relative full-bg">
              <div
                className="bg-layer"
                style={{
                  backgroundImage: "url(/assets/images/banner/image2.1.jpg)",
                }}
              ></div>
              <div className="overlay-layer"></div>
              <div className="outer-container">
                <div className="content-box">
                  <h5>
                    <span>Kaizen Channels</span> Banking that fits your life
                  </h5>
                  <h2>There is a Kaizen banking channel for you!</h2>
                  <div className="btn-box">
                    <Link to="/contact" className="theme-btn">
                      <span>Get In Touch</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-item p_relative full-bg">
              <div
                className="bg-layer"
                style={{
                  backgroundImage: "url(/assets/images/banner/image3.0.jpeg)",
                }}
              ></div>
              <div className="overlay-layer"></div>
              <div className="outer-container">
                <div className="content-box">
                  <h5>
                    <span>Kaizen For All</span> Personal & business banking
                  </h5>
                  <h2>
                    Whatever your lifestyle or business needs are, we've got you
                    covered.
                  </h2>
                  <div className="btn-box">
                    <Link to="/account-details" className="theme-btn">
                      <span>Explore Products</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </section>

        <section className="online-service">
          <div className="auto-container">
            <div className="inner-container">
              <div className="row d_flex">
                <div className="col-lg-12 col-md-12 col-sm-12 left-column">
                  <div className="left-content" style={{ marginLeft: 0 }}>
                    <div className="info-box">
                      <div className="icon-box">
                        <img
                          loading="lazy"
                          src="/assets/images/icons/icon-11.png"
                          alt=""
                        />
                      </div>
                      <h4>Mobile App</h4>
                      <p>Instant Banking, Instant Peace.</p>
                    </div>
                    <div className="btn-box">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.kaizenmfb.kaizenmfbmobile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="store-badge"
                      >
                        <img loading="lazy" src="/assets/images/google-play-badge.png" alt="Get it on Google Play" />
                      </a>
                      <a
                        href="https://apps.apple.com/ng/app/kaizen-mfb/id6748022197"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="store-badge"
                      >
                        <img loading="lazy" src="/assets/images/app-store-badge.svg" alt="Download on the App Store" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="banking-service sec-pad">
          <div className="auto-container">
            <div className="sec-title centred">
              <span className="sub-title">Custom Banking</span>
              <h2>Banking For Your Needs</h2>
            </div>
            <Tabs className="tabs-box">
              <div className="tab-btn-box mb_70">
                <Tabs className="tab-btns tab-buttons tab-btn-carousel owl-carousel owl-theme owl-dots-none">
                  <div className="tab-btn active-btn" data-tab="#tab-1">
                    <div className="icon-box">
                      <img
                        loading="lazy"
                        src="/assets/images/icons/icon-12.png"
                        alt=""
                      />
                    </div>
                    <h3>Fixed Deposit</h3>
                    <p>Higher Returns & Security.</p>
                  </div>
                  <div className="tab-btn" data-tab="#tab-2">
                    <div className="icon-box">
                      <img
                        loading="lazy"
                        src="/assets/images/icons/icon-13.png"
                        alt=""
                      />
                    </div>
                    <h3>Accounts</h3>
                    <p>Duty the obligations business.</p>
                  </div>
                  <div className="tab-btn" data-tab="#tab-3">
                    <div className="icon-box">
                      <img
                        loading="lazy"
                        src="/assets/images/icons/icon-14.png"
                        alt=""
                      />
                    </div>
                    <h3>Investments</h3>
                    <p>Secure you & your family.</p>
                  </div>
                  <div className="tab-btn" data-tab="#tab-4">
                    <div className="icon-box">
                      <img
                        loading="lazy"
                        src="/assets/images/icons/icon-15.png"
                        alt=""
                      />
                    </div>
                    <h3>Family 360o</h3>
                    <p>Complete banking solutions.</p>
                  </div>
                  <div className="tab-btn" data-tab="#tab-5">
                    <div className="icon-box">
                      <img
                        loading="lazy"
                        src="/assets/images/icons/icon-12.png"
                        alt=""
                      />
                    </div>
                    <h3>Fixed Deposit</h3>
                    <p>Higher Returns & Security.</p>
                  </div>
                  <div className="tab-btn" data-tab="#tab-6">
                    <div className="icon-box">
                      <img
                        loading="lazy"
                        src="/assets/images/icons/icon-13.png"
                        alt=""
                      />
                    </div>
                    <h3>Accounts</h3>
                    <p>Duty the obligations business.</p>
                  </div>
                  <div className="tab-btn" data-tab="#tab-7">
                    <div className="icon-box">
                      <img
                        loading="lazy"
                        src="/assets/images/icons/icon-14.png"
                        alt=""
                      />
                    </div>
                    <h3>Investments</h3>
                    <p>Secure you & your family.</p>
                  </div>
                  <div className="tab-btn" data-tab="#tab-8">
                    <div className="icon-box">
                      <img
                        loading="lazy"
                        src="/assets/images/icons/icon-15.png"
                        alt=""
                      />
                    </div>
                    <h3>Family 360o</h3>
                    <p>Complete banking solutions.</p>
                  </div>
                </Tabs>
              </div>
              <div className="tabs-content">
                <div className="tab active-tab" id="tab-1">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                      <div className="image-box mr_35">
                        <figure className="image">
                          <img
                            loading="lazy"
                            src="/assets/images/banner/ATM machine.webp"
                            alt=""
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                      <div className="content-box mr_50">
                        <h2>Fixed Deposit</h2>
                        <p>
                          Beguiled and demoralized by the charms of pleasure of
                          the so blinded by desire that they cannot foresee.
                        </p>
                        <div className="inner-box">
                          <h6>Key Benefits:</h6>
                          <ul className="list-style-one clearfix">
                            <li>
                              <div className="icon-box">
                                <img
                                  loading="lazy"
                                  src="/assets/images/icons/icon-16.png"
                                  alt=""
                                />
                              </div>
                              100% Guaranteed returns
                            </li>
                            <li>
                              <div className="icon-box">
                                <img
                                  loading="lazy"
                                  src="/assets/images/icons/icon-16.png"
                                  alt=""
                                />
                              </div>
                              Loan against FD available
                            </li>
                            <li>
                              <div className="icon-box">
                                <img
                                  loading="lazy"
                                  src="/assets/images/icons/icon-16.png"
                                  alt=""
                                />
                              </div>
                              Flexible tenure options
                            </li>
                          </ul>
                          <div className="inner">
                            <div className="icon-box">
                              <img
                                loading="lazy"
                                src="/assets/images/icons/icon-17.png"
                                alt=""
                              />
                            </div>
                            <h4>
                              Guide to <br />
                              Fixed Deposits
                            </h4>
                            <h6>pdf 6.8mb</h6>
                            <button type="button" className="theme-btn">
                              <span>Download</span>
                            </button>
                          </div>
                        </div>
                        <div className="lower-text">
                          <div className="icon-box">
                            <i className="flaticon-sparkle"></i>
                          </div>
                          <h5>
                            Find the Perfect <Link to="/">FD Option</Link> for
                            Your Needs.
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab" id="tab-2">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                      <div className="image-box mr_35">
                        <figure className="image">
                          <img
                            loading="lazy"
                            src="/assets/images/banner/ATM machine.webp"
                            alt=""
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                      <div className="content-box mr_50">
                        <h2>Accounts</h2>
                        <p>
                          Beguiled and demoralized by the charms of pleasure of
                          the so blinded by desire that they cannot foresee.
                        </p>
                        <div className="inner-box">
                          <h6>Key Benefits:</h6>
                          <ul className="list-style-one clearfix">
                            <li>
                              <div className="icon-box">
                                <img
                                  loading="lazy"
                                  src="/assets/images/icons/icon-16.png"
                                  alt=""
                                />
                              </div>
                              100% Guaranteed returns
                            </li>
                            <li>
                              <div className="icon-box">
                                <img
                                  loading="lazy"
                                  src="/assets/images/icons/icon-16.png"
                                  alt=""
                                />
                              </div>
                              Loan against FD available
                            </li>
                            <li>
                              <div className="icon-box">
                                <img
                                  loading="lazy"
                                  src="/assets/images/icons/icon-16.png"
                                  alt=""
                                />
                              </div>
                              Flexible tenure options
                            </li>
                          </ul>
                          <div className="inner">
                            <div className="icon-box">
                              <img
                                loading="lazy"
                                src="/assets/images/icons/icon-17.png"
                                alt=""
                              />
                            </div>
                            <h4>
                              Guide to <br />
                              Fixed Deposits
                            </h4>
                            <h6>pdf 6.8mb</h6>
                            <button type="button" className="theme-btn">
                              <span>Download</span>
                            </button>
                          </div>
                        </div>
                        <div className="lower-text">
                          <div className="icon-box">
                            <i className="flaticon-sparkle"></i>
                          </div>
                          <h5>
                            Find the Perfect <Link to="/">FD Option</Link> for
                            Your Needs.
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab" id="tab-3">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                      <div className="image-box mr_35">
                        <figure className="image">
                          <img
                            loading="lazy"
                            src="/assets/images/banner/ATM machine.webp"
                            alt=""
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                      <div className="content-box mr_50">
                        <h2>Investments</h2>
                        <p>
                          Beguiled and demoralized by the charms of pleasure of
                          the so blinded by desire that they cannot foresee.
                        </p>
                        <div className="inner-box">
                          <h6>Key Benefits:</h6>
                          <ul className="list-style-one clearfix">
                            <li>
                              <div className="icon-box">
                                <img
                                  loading="lazy"
                                  src="/assets/images/icons/icon-16.png"
                                  alt=""
                                />
                              </div>
                              100% Guaranteed returns
                            </li>
                            <li>
                              <div className="icon-box">
                                <img
                                  loading="lazy"
                                  src="/assets/images/icons/icon-16.png"
                                  alt=""
                                />
                              </div>
                              Loan against FD available
                            </li>
                            <li>
                              <div className="icon-box">
                                <img
                                  loading="lazy"
                                  src="/assets/images/icons/icon-16.png"
                                  alt=""
                                />
                              </div>
                              Flexible tenure options
                            </li>
                          </ul>
                          <div className="inner">
                            <div className="icon-box">
                              <img
                                loading="lazy"
                                src="/assets/images/icons/icon-17.png"
                                alt=""
                              />
                            </div>
                            <h4>
                              Guide to <br />
                              Fixed Deposits
                            </h4>
                            <h6>pdf 6.8mb</h6>
                            <button type="button" className="theme-btn">
                              <span>Download</span>
                            </button>
                          </div>
                        </div>
                        <div className="lower-text">
                          <div className="icon-box">
                            <i className="flaticon-sparkle"></i>
                          </div>
                          <h5>
                            Find the Perfect <Link to="/">FD Option</Link> for
                            Your Needs.
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab" id="tab-4">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                      <div className="image-box mr_35">
                        <figure className="image">
                          <img
                            loading="lazy"
                            src="/assets/images/banner/ATM machine.webp"
                            alt=""
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                      <div className="content-box mr_50">
                        <h2>Family 360o</h2>
                        <p>
                          Beguiled and demoralized by the charms of pleasure of
                          the so blinded by desire that they cannot foresee.
                        </p>
                        <div className="inner-box">
                          <h6>Key Benefits:</h6>
                          <ul className="list-style-one clearfix">
                            <li>
                              <div className="icon-box">
                                <img
                                  loading="lazy"
                                  src="/assets/images/icons/icon-16.png"
                                  alt=""
                                />
                              </div>
                              100% Guaranteed returns
                            </li>
                            <li>
                              <div className="icon-box">
                                <img
                                  loading="lazy"
                                  src="/assets/images/icons/icon-16.png"
                                  alt=""
                                />
                              </div>
                              Loan against FD available
                            </li>
                            <li>
                              <div className="icon-box">
                                <img
                                  loading="lazy"
                                  src="/assets/images/icons/icon-16.png"
                                  alt=""
                                />
                              </div>
                              Flexible tenure options
                            </li>
                          </ul>
                          <div className="inner">
                            <div className="icon-box">
                              <img
                                loading="lazy"
                                src="/assets/images/icons/icon-17.png"
                                alt=""
                              />
                            </div>
                            <h4>
                              Guide to <br />
                              Fixed Deposits
                            </h4>
                            <h6>pdf 6.8mb</h6>
                            <button type="button" className="theme-btn">
                              <span>Download</span>
                            </button>
                          </div>
                        </div>
                        <div className="lower-text">
                          <div className="icon-box">
                            <i className="flaticon-sparkle"></i>
                          </div>
                          <h5>
                            Find the Perfect <Link to="/">FD Option</Link> for
                            Your Needs.
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab" id="tab-5">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                      <div className="image-box mr_35">
                        <figure className="image">
                          <img
                            loading="lazy"
                            src="/assets/images/banner/ATM machine.webp"
                            alt=""
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                      <div className="content-box mr_50">
                        <h2>Fixed Deposit</h2>
                        <p>
                          Beguiled and demoralized by the charms of pleasure of
                          the so blinded by desire that they cannot foresee.
                        </p>
                        <div className="inner-box">
                          <h6>Key Benefits:</h6>
                          <ul className="list-style-one clearfix">
                            <li>
                              <div className="icon-box">
                                <img
                                  loading="lazy"
                                  src="/assets/images/icons/icon-16.png"
                                  alt=""
                                />
                              </div>
                              100% Guaranteed returns
                            </li>
                            <li>
                              <div className="icon-box">
                                <img
                                  loading="lazy"
                                  src="/assets/images/icons/icon-16.png"
                                  alt=""
                                />
                              </div>
                              Loan against FD available
                            </li>
                            <li>
                              <div className="icon-box">
                                <img
                                  loading="lazy"
                                  src="/assets/images/icons/icon-16.png"
                                  alt=""
                                />
                              </div>
                              Flexible tenure options
                            </li>
                          </ul>
                          <div className="inner">
                            <div className="icon-box">
                              <img
                                loading="lazy"
                                src="/assets/images/icons/icon-17.png"
                                alt=""
                              />
                            </div>
                            <h4>
                              Guide to <br />
                              Fixed Deposits
                            </h4>
                            <h6>pdf 6.8mb</h6>
                            <button type="button" className="theme-btn">
                              <span>Download</span>
                            </button>
                          </div>
                        </div>
                        <div className="lower-text">
                          <div className="icon-box">
                            <i className="flaticon-sparkle"></i>
                          </div>
                          <h5>
                            Find the Perfect <Link to="/">FD Option</Link> for
                            Your Needs.
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab" id="tab-6">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                      <div className="image-box mr_35">
                        <figure className="image">
                          <img
                            loading="lazy"
                            src="/assets/images/banner/ATM machine.webp"
                            alt=""
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                      <div className="content-box mr_50">
                        <h2>Accounts</h2>
                        <p>
                          Beguiled and demoralized by the charms of pleasure of
                          the so blinded by desire that they cannot foresee.
                        </p>
                        <div className="inner-box">
                          <h6>Key Benefits:</h6>
                          <ul className="list-style-one clearfix">
                            <li>
                              <div className="icon-box">
                                <img
                                  loading="lazy"
                                  src="/assets/images/icons/icon-16.png"
                                  alt=""
                                />
                              </div>
                              100% Guaranteed returns
                            </li>
                            <li>
                              <div className="icon-box">
                                <img
                                  loading="lazy"
                                  src="/assets/images/icons/icon-16.png"
                                  alt=""
                                />
                              </div>
                              Loan against FD available
                            </li>
                            <li>
                              <div className="icon-box">
                                <img
                                  loading="lazy"
                                  src="/assets/images/icons/icon-16.png"
                                  alt=""
                                />
                              </div>
                              Flexible tenure options
                            </li>
                          </ul>
                          <div className="inner">
                            <div className="icon-box">
                              <img
                                loading="lazy"
                                src="/assets/images/icons/icon-17.png"
                                alt=""
                              />
                            </div>
                            <h4>
                              Guide to <br />
                              Fixed Deposits
                            </h4>
                            <h6>pdf 6.8mb</h6>
                            <button type="button" className="theme-btn">
                              <span>Download</span>
                            </button>
                          </div>
                        </div>
                        <div className="lower-text">
                          <div className="icon-box">
                            <i className="flaticon-sparkle"></i>
                          </div>
                          <h5>
                            Find the Perfect <Link to="/">FD Option</Link> for
                            Your Needs.
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab" id="tab-7">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                      <div className="image-box mr_35">
                        <figure className="image">
                          <img
                            loading="lazy"
                            src="/assets/images/banner/ATM machine.webp"
                            alt=""
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                      <div className="content-box mr_50">
                        <h2>Investments</h2>
                        <p>
                          Beguiled and demoralized by the charms of pleasure of
                          the so blinded by desire that they cannot foresee.
                        </p>
                        <div className="inner-box">
                          <h6>Key Benefits:</h6>
                          <ul className="list-style-one clearfix">
                            <li>
                              <div className="icon-box">
                                <img
                                  loading="lazy"
                                  src="/assets/images/icons/icon-16.png"
                                  alt=""
                                />
                              </div>
                              100% Guaranteed returns
                            </li>
                            <li>
                              <div className="icon-box">
                                <img
                                  loading="lazy"
                                  src="/assets/images/icons/icon-16.png"
                                  alt=""
                                />
                              </div>
                              Loan against FD available
                            </li>
                            <li>
                              <div className="icon-box">
                                <img
                                  loading="lazy"
                                  src="/assets/images/icons/icon-16.png"
                                  alt=""
                                />
                              </div>
                              Flexible tenure options
                            </li>
                          </ul>
                          <div className="inner">
                            <div className="icon-box">
                              <img
                                loading="lazy"
                                src="/assets/images/icons/icon-17.png"
                                alt=""
                              />
                            </div>
                            <h4>
                              Guide to <br />
                              Fixed Deposits
                            </h4>
                            <h6>pdf 6.8mb</h6>
                            <button type="button" className="theme-btn">
                              <span>Download</span>
                            </button>
                          </div>
                        </div>
                        <div className="lower-text">
                          <div className="icon-box">
                            <i className="flaticon-sparkle"></i>
                          </div>
                          <h5>
                            Find the Perfect <Link to="/">FD Option</Link> for
                            Your Needs.
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab" id="tab-8">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                      <div className="image-box mr_35">
                        <figure className="image">
                          <img
                            loading="lazy"
                            src="/assets/images/banner/ATM machine.webp"
                            alt=""
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                      <div className="content-box mr_50">
                        <h2>Family 360o</h2>
                        <p>
                          Beguiled and demoralized by the charms of pleasure of
                          the so blinded by desire that they cannot foresee.
                        </p>
                        <div className="inner-box">
                          <h6>Key Benefits:</h6>
                          <ul className="list-style-one clearfix">
                            <li>
                              <div className="icon-box">
                                <img
                                  loading="lazy"
                                  src="/assets/images/icons/icon-16.png"
                                  alt=""
                                />
                              </div>
                              100% Guaranteed returns
                            </li>
                            <li>
                              <div className="icon-box">
                                <img
                                  loading="lazy"
                                  src="/assets/images/icons/icon-16.png"
                                  alt=""
                                />
                              </div>
                              Loan against FD available
                            </li>
                            <li>
                              <div className="icon-box">
                                <img
                                  loading="lazy"
                                  src="/assets/images/icons/icon-16.png"
                                  alt=""
                                />
                              </div>
                              Flexible tenure options
                            </li>
                          </ul>
                          <div className="inner">
                            <div className="icon-box">
                              <img
                                loading="lazy"
                                src="/assets/images/icons/icon-17.png"
                                alt=""
                              />
                            </div>
                            <h4>
                              Guide to <br />
                              Fixed Deposits
                            </h4>
                            <h6>pdf 6.8mb</h6>
                            <button type="button" className="theme-btn">
                              <span>Download</span>
                            </button>
                          </div>
                        </div>
                        <div className="lower-text">
                          <div className="icon-box">
                            <i className="flaticon-sparkle"></i>
                          </div>
                          <h5>
                            Find the Perfect <Link to="/">FD Option</Link> for
                            Your Needs.
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tabs>
          </div>
        </section>

        <section className="custom-banking sec-pad">
          <div
            className="pattern-layer"
            style={{ backgroundImage: "url(/assets/images/shape/shape-4.png)" }}
          ></div>
          <div className="auto-container">
            <div className="title-box">
              <div className="sec-title light">
                <span className="sub-title">Custom Banking</span>
                <h2>Banking For Your Needs</h2>
              </div>
              <div className="support-box">
                <h5>Get Support</h5>
                <div className="phone-box">
                  <div className="icon-box">
                    <img
                      loading="lazy"
                      src="/assets/images/icons/icon-26.png"
                      alt=""
                    />
                  </div>
                  <a href="tel:09099900099">09099900099</a>
                  <span>8.00 am to 5.00 pm</span>
                </div>
              </div>
            </div>
            <Tabs className="tabs-box">
              <figure className="support-image">
                <img
                  loading="lazy"
                  src="/assets/images/banner/support.jpg"
                  alt=""
                />
              </figure>
              <div className="tabs-content">
                <div className="tab active-tab" id="tab-9">
                  <Tabs className="tabs-box-2">
                    <div className="row clearfix">
                      <div className="col-lg-4 col-md-12 col-sm-12 button-column">
                        <div className="tab-btn-two">
                          <ul className="tab-btns tab-buttons-2">
                            <li
                              className="tab-btn-2 active-btn-2"
                              data-tab="#tab-11"
                            >
                              <h4>Savings Accounts</h4>
                              <p>High interest...</p>
                            </li>
                            <li className="tab-btn-2" data-tab="#tab-12">
                              <h4>Consumer Loans</h4>
                              <p>Low collateral...</p>
                            </li>
                            <li className="tab-btn-2" data-tab="#tab-13">
                              <h4>Debit Cards</h4>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                        <div className="tabs-content-2">
                          <div className="tab-2 active-tab-2" id="tab-11">
                            <div className="content-box">
                              <div className="title-box">
                                <div className="icon-box">
                                  <img
                                    loading="lazy"
                                    src="/assets/images/icons/icon-21.png"
                                    alt=""
                                  />
                                </div>
                                <h4>Savings Account</h4>
                                <h2>
                                  Invest in Your Future, <br />
                                  Start Saving.
                                </h2>
                              </div>
                              <div className="inner-box">
                                <p>
                                  Every pleasure is to be welcomed and every
                                  pain avoided duty or the obligations of
                                  business our power of choice is untrammelled
                                  and when nothing prevents.
                                </p>
                                </div>
                            </div>
                          </div>
                          <div className="tab-2" id="tab-12">
                            <div className="content-box">
                              <div className="title-box">
                                <div className="icon-box">
                                  <img
                                    loading="lazy"
                                    src="/assets/images/icons/icon-21.png"
                                    alt=""
                                  />
                                </div>
                                <h4>Consumer Loans</h4>
                                <h2>
                                  Kaizenbank in Your Future, Consumer Loans.
                                </h2>
                              </div>
                              <div className="inner-box">
                                <p>
                                  Get the financial support you need for your personal needs
                                  and everyday expenses. Our Consumer Loan offers flexible
                                  financing with convenient repayment options, helping you
                                  achieve your goals with ease.
                                </p>
                                </div>
                            </div>
                          </div>
                          <div className="tab-2" id="tab-13">
                            <div className="content-box">
                              <div className="title-box">
                                <div className="icon-box">
                                  <img
                                    loading="lazy"
                                    src="/assets/images/icons/icon-21.png"
                                    alt=""
                                  />
                                </div>
                                <h4>Debit Cards</h4>
                                <h2>
                                  <strong>KAIZEN Debit Card</strong>
                                </h2>
                              </div>
                              <div className="inner-box">
                                <p>
                                  Enjoy easy and secure access to your money wherever you go.
                                  Our Debit Cards make everyday payments, withdrawals, and
                                  online transactions simple and convenient.
                                </p>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tabs>
                </div>
              </div>
            </Tabs>
          </div>
        </section>

        <section className="funfact-section centred">
          <div className="outer-container clearfix">
            <div className="funfact-block-one">
              <div className="inner-box">
                <div className="icon-box">
                  <img
                    loading="lazy"
                    src="/assets/images/icons/icon-27.png"
                    alt=""
                  />
                </div>
                <div className="count-outer">
                  <span className="odometer" data-count="8.5">
                    00
                  </span>
                  <span className="symble">k</span>
                </div>
                <p>Happy Customers World Wide.</p>
              </div>
            </div>
            <div className="funfact-block-one">
              <div className="inner-box">
                <div className="icon-box">
                  <img
                    loading="lazy"
                    src="/assets/images/icons/icon-28.png"
                    alt=""
                  />
                </div>
                <div className="count-outer">
                  <span className="odometer" data-count="0.5">
                    00
                  </span>
                  <span className="symble">m</span>
                </div>
                <p>Transactions Processed Daily.</p>
              </div>
            </div>
            <div className="funfact-block-one">
              <div className="inner-box">
                <div className="icon-box">
                  <img
                    loading="lazy"
                    src="/assets/images/icons/icon-29.png"
                    alt=""
                  />
                </div>
                <div className="count-outer">
                  <span className="odometer" data-count="10000">
                    00
                  </span>
                  <span className="symble">+</span>
                </div>
                <p>ATMs and Branches Globally.</p>
              </div>
            </div>
            <div className="funfact-block-one">
              <div className="inner-box">
                <div className="icon-box">
                  <img
                    loading="lazy"
                    src="/assets/images/icons/icon-30.png"
                    alt=""
                  />
                </div>
                <div className="count-outer">
                  <span className="odometer" data-count="50">
                    00
                  </span>
                  <span className="symble">+</span>
                </div>
                <p>Years of Trusted Banking Service.</p>
              </div>
            </div>
          </div>
        </section>

        <LoanCalculator />

        <section className="creditcard-section sec-pad">
          <div
            className="pattern-layer"
            style={{ backgroundImage: "url(/assets/images/shape/shape-4.png)" }}
          ></div>
          <span className="big-text">
            Spending <br />
            Secure
          </span>
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 card-column">
                <div className="card-inner">
                  <div
                    className="shape"
                    style={{
                      backgroundImage: "url(/assets/images/shape/shape-3.png)",
                    }}
                  ></div>
                  <figure className="card-box">
                    <img
                      loading="lazy"
                      src="/assets/images/icons/card-1.png"
                      alt=""
                    />
                  </figure>
                  <span className="highlights-one">Cashback Up to: 25%</span>
                  <span className="highlights-two">Average APR: 5.50%</span>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content-box">
                  <div className="sec-title light">
                    <span className="sub-title">Debit Cards</span>
                    <h2>
                      Discover Our <br />
                      Range of Debit Cards
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="partners-section sec-pad">
          <div className="auto-container">
            <div className="sec-title centred">
              <span className="sub-title">Trusted Partners</span>
              <h2>Our Trusted Partners</h2>
            </div>
            <div className="row clearfix trusted-partners-grid">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="partner-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <img
                        loading="lazy"
                        src="/assets/images/partners/bankOne logo.jpeg"
                        alt="BankOne"
                      />
                    </div>
                    <h3>BankOne</h3>
                    <p>Core Banking Technology</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="partner-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <img
                        loading="lazy"
                        src="/assets/images/partners/Epay plus.jpeg"
                        alt="ePay Plus"
                      />
                    </div>
                    <h3>ePay Plus</h3>
                    <p>Digital & Agent Banking</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="partner-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <img
                        loading="lazy"
                        src="/assets/images/partners/lendgrid.jpg.webp"
                        alt="Lendgrid"
                      />
                    </div>
                    <h3>Lendgrid</h3>
                    <p>Lending Infrastructure</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="partner-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <img
                        loading="lazy"
                        src="/assets/images/partners/paystack.jpeg"
                        alt="Paystack"
                      />
                    </div>
                    <h3>Paystack</h3>
                    <p>Online & Card Payments</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="partner-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <img
                        loading="lazy"
                        src="/assets/images/partners/providusBank.png"
                        alt="Providus Bank"
                      />
                    </div>
                    <h3>Providus Bank</h3>
                    <p>Commercial Banking</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="partner-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <img
                        loading="lazy"
                        src="/assets/images/partners/verve.jpeg"
                        alt="Verve"
                      />
                    </div>
                    <h3>Verve</h3>
                    <p>Card & Payment Scheme</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="partner-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <img
                        loading="lazy"
                        src="/assets/images/partners/remita logo.webp"
                        alt="Remita"
                      />
                    </div>
                    <h3>Remita</h3>
                    <p>Payments & Collections</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="partner-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <img
                        loading="lazy"
                        src="/assets/images/partners/Sterling_bank_logo_wk.png"
                        alt="Sterling Bank"
                      />
                    </div>
                    <h3>Sterling Bank</h3>
                    <p>Commercial Bank</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="partner-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <img
                        loading="lazy"
                        src="/assets/images/partners/CBN-logo.jpg"
                        alt="Central Bank of Nigeria"
                      />
                    </div>
                    <h3>Central Bank of Nigeria</h3>
                    <p>CBN</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="partner-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <img
                        loading="lazy"
                        src="/assets/images/partners/NDIC.png"
                        alt="NDIC"
                      />
                    </div>
                    <h3>Nigeria Deposit Insurance Corporation</h3>
                    <p>NDIC</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="partner-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <img
                        loading="lazy"
                        src="/assets/images/partners/NIBSS.png"
                        alt="NIBSS"
                      />
                    </div>
                    <h3>Nigeria Inter-Bank Settlement System</h3>
                    <p>NIBSS</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="partner-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <img
                        loading="lazy"
                        src="/assets/images/partners/CAC bureau Limited .jpeg"
                        alt="Corporate Affairs Commission"
                      />
                    </div>
                    <h3>Corporate Affairs Commission</h3>
                    <p>CAC</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="partner-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <img
                        loading="lazy"
                        src="/assets/images/partners/CreditRegistry.jpeg"
                        alt="CreditRegistry"
                      />
                    </div>
                    <h3>CreditRegistry</h3>
                    <p>Nigeria's Largest Credit Bureau</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="partner-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <img
                        loading="lazy"
                        src="/assets/images/partners/FirstCentral.png"
                        alt="FirstCentral Credit Bureau"
                      />
                    </div>
                    <h3>FirstCentral Credit Bureau</h3>
                    <p>Nigeria's First Licensed Credit Bureau</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="partners-marquee">
              <div className="marquee-track">
                <div className="marquee-group">
                  <div className="marquee-item">
                    <img loading="lazy" src="/assets/images/partners/bankOne logo.jpeg" alt="BankOne" />
                  </div>
                  <div className="marquee-item">
                    <img loading="lazy" src="/assets/images/partners/Epay plus.jpeg" alt="ePay Plus" />
                  </div>
                  <div className="marquee-item">
                    <img loading="lazy" src="/assets/images/partners/lendgrid.jpg.webp" alt="Lendgrid" />
                  </div>
                  <div className="marquee-item">
                    <img loading="lazy" src="/assets/images/partners/paystack.jpeg" alt="Paystack" />
                  </div>
                  <div className="marquee-item">
                    <img loading="lazy" src="/assets/images/partners/providusBank.png" alt="Providus Bank" />
                  </div>
                  <div className="marquee-item">
                    <img loading="lazy" src="/assets/images/partners/verve.jpeg" alt="Verve" />
                  </div>
                  <div className="marquee-item">
                    <img loading="lazy" src="/assets/images/partners/remita logo.webp" alt="Remita" />
                  </div>
                  <div className="marquee-item">
                    <img loading="lazy" src="/assets/images/partners/Sterling_bank_logo_wk.png" alt="Sterling Bank" />
                  </div>
                  <div className="marquee-item">
                    <img loading="lazy" src="/assets/images/partners/CBN-logo.jpg" alt="Central Bank of Nigeria" />
                  </div>
                  <div className="marquee-item">
                    <img loading="lazy" src="/assets/images/partners/NDIC.png" alt="NDIC" />
                  </div>
                  <div className="marquee-item">
                    <img loading="lazy" src="/assets/images/partners/NIBSS.png" alt="NIBSS" />
                  </div>
                  <div className="marquee-item">
                    <img loading="lazy" src="/assets/images/partners/CAC bureau Limited .jpeg" alt="Corporate Affairs Commission" />
                  </div>
                  <div className="marquee-item">
                    <img loading="lazy" src="/assets/images/partners/CreditRegistry.jpeg" alt="CreditRegistry" />
                  </div>
                  <div className="marquee-item">
                    <img loading="lazy" src="/assets/images/partners/FirstCentral.png" alt="FirstCentral Credit Bureau" />
                  </div>
                </div>
                <div className="marquee-group" aria-hidden="true">
                  <div className="marquee-item">
                    <img loading="lazy" src="/assets/images/partners/bankOne logo.jpeg" alt="" />
                  </div>
                  <div className="marquee-item">
                    <img loading="lazy" src="/assets/images/partners/Epay plus.jpeg" alt="" />
                  </div>
                  <div className="marquee-item">
                    <img loading="lazy" src="/assets/images/partners/lendgrid.jpg.webp" alt="" />
                  </div>
                  <div className="marquee-item">
                    <img loading="lazy" src="/assets/images/partners/paystack.jpeg" alt="" />
                  </div>
                  <div className="marquee-item">
                    <img loading="lazy" src="/assets/images/partners/providusBank.png" alt="" />
                  </div>
                  <div className="marquee-item">
                    <img loading="lazy" src="/assets/images/partners/verve.jpeg" alt="" />
                  </div>
                  <div className="marquee-item">
                    <img loading="lazy" src="/assets/images/partners/remita logo.webp" alt="" />
                  </div>
                  <div className="marquee-item">
                    <img loading="lazy" src="/assets/images/partners/Sterling_bank_logo_wk.png" alt="" />
                  </div>
                  <div className="marquee-item">
                    <img loading="lazy" src="/assets/images/partners/CBN-logo.jpg" alt="" />
                  </div>
                  <div className="marquee-item">
                    <img loading="lazy" src="/assets/images/partners/NDIC.png" alt="" />
                  </div>
                  <div className="marquee-item">
                    <img loading="lazy" src="/assets/images/partners/NIBSS.png" alt="" />
                  </div>
                  <div className="marquee-item">
                    <img loading="lazy" src="/assets/images/partners/CAC bureau Limited .jpeg" alt="" />
                  </div>
                  <div className="marquee-item">
                    <img loading="lazy" src="/assets/images/partners/CreditRegistry.jpeg" alt="" />
                  </div>
                  <div className="marquee-item">
                    <img loading="lazy" src="/assets/images/partners/FirstCentral.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section sec-pad bg-color-1">
          <div className="auto-container">
            <div className="sec-title centred">
              <span className="sub-title">Faq’s</span>
              <h2>Read Questions & Answers</h2>
            </div>
            <div className="row clearfix">
              <div className="col-lg-4 col-md-12 col-sm-12 category-column">
                <div className="category-box">
                  <h3>Categories</h3>
                  <p>Wide range of topics to address common queries.</p>
                  <ul className="category-list clearfix">
                    <li>
                      <Link to="/">Account</Link>
                    </li>
                    <li>
                      <Link to="/">Online Banking</Link>
                    </li>
                    <li>
                      <Link to="/">Mobile Banking</Link>
                    </li>
                    <li>
                      <Link to="/">Deposits</Link>
                    </li>
                    <li>
                      <Link to="/">Withdrawals</Link>
                    </li>
                    <li>
                      <Link to="/">Loans</Link>
                    </li>
                    <li>
                      <Link to="/">Business</Link>
                    </li>
                  </ul>
                  </div>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 accordion-column">
                <ul className="accordion-box">
                  <li className="accordion block active-block">
                    <div className="acc-btn active">
                      <div className="icon-box">
                        <i className="flaticon-chevron"></i>
                      </div>
                      <h4>
                        <span>01</span>How do I open a new account?
                      </h4>
                    </div>
                    <div className="acc-content current">
                      <div className="content">
                        <p>
                          Repudiated and annoyances accepted the wise man
                          therefore always holds in these matters to this
                          principle selection he rejects pleasures to secures.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="accordion block">
                    <div className="acc-btn">
                      <div className="icon-box">
                        <i className="flaticon-chevron"></i>
                      </div>
                      <h4>
                        <span>02</span>How can I check my account balance?
                      </h4>
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <p>
                          Repudiated and annoyances accepted the wise man
                          therefore always holds in these matters to this
                          principle selection he rejects pleasures to secures.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="accordion block">
                    <div className="acc-btn">
                      <div className="icon-box">
                        <i className="flaticon-chevron"></i>
                      </div>
                      <h4>
                        <span>03</span>Is online banking secure?
                      </h4>
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <p>
                          Repudiated and annoyances accepted the wise man
                          therefore always holds in these matters to this
                          principle selection he rejects pleasures to secures.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="accordion block">
                    <div className="acc-btn">
                      <div className="icon-box">
                        <i className="flaticon-chevron"></i>
                      </div>
                      <h4>
                        <span>04</span>What is the daily ATM withdrawal limit?
                      </h4>
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <p>
                          Repudiated and annoyances accepted the wise man
                          therefore always holds in these matters to this
                          principle selection he rejects pleasures to secures.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="accordion block">
                    <div className="acc-btn">
                      <div className="icon-box">
                        <i className="flaticon-chevron"></i>
                      </div>
                      <h4>
                        <span>05</span>How do I apply for a loan?
                      </h4>
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <p>
                          Repudiated and annoyances accepted the wise man
                          therefore always holds in these matters to this
                          principle selection he rejects pleasures to secures.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
