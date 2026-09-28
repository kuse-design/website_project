import React from 'react'
import PageTitle from '../components/sections/PageTitle'
import { Link } from 'react-router-dom'

import Carousel from '../components/ui/Carousel'
import CircularText from '../components/ui/CircularText'
export default function AboutUsPage(){
  return (
    <>
    <div className="boxed_wrapper">

        <PageTitle title={"About Us"} crumbs={[{ label: "About", to: "/about" }]} />

        {/* Values section */}
        <section className="about-section pt_110 pb_120">
            <div className="auto-container">
                <div className="upper-content pb_110">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 title-column">
                            <div className="title-box p_relative">
                                <div className="shape" style={{backgroundImage: 'url(/assets/images/shape/shape-41.webp)'}}></div>
                                <div className="sec-title">
                                    <span className="sub-title">Our Values</span>
                                    <h2>Explore Our Core Values &amp; Commitments</h2>
                                </div>
                                <div className="certified-box">
                                    <div className="rotate-box">
                                        <CircularText className="curved-circle-2" radius={57}>ISO 27001 Certified Bank</CircularText>
                                        <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-196.png" alt="" /></div>
                                    </div>
                                    <h6>ISO Certification</h6>
                                    <h4>Our Commitment to Quality and <br />Secure banking.</h4>
                                    <span className="text">2000-2001</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <div className="text-box mb_30">
                                    <p>We are not just a bank; we are a catalyst for positive change, working to reduce poverty and create opportunities for financial independence.</p>
                                    <p>We offer competitive interest rates and flexible repayment terms to ensure our services are accessible to all.</p>
                                </div>
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <div className="icon"><img loading="lazy" src="/assets/images/icons/icon-197.png" alt="" /></div>
                                        <span className="big-text">Why Kaizen</span>
                                    </div>
                                    <ul className="list-item">
                                        <li>Community-driven financial empowerment</li>
                                        <li>Competitive rates &amp; flexible terms</li>
                                        <li>Dedicated professional support team</li>
                                        <li>Accessible and customer-focused banking</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lower-content">
                    <div className="row clearfix">
                        <div className="col-lg-8 col-md-12 col-sm-12 left-column">
                            <div className="left-content">
                                <figure className="image-box"><img loading="lazy" src="/assets/images/banner/aboutus.jpg" alt="About Kaizenbank" /></figure>
                                <div className="content-box">
                                    <div className="bg-layer" style={{backgroundImage: 'url(/assets/images/shape/shape-42.webp)'}}></div>
                                    <div className="shape" style={{backgroundImage: 'url(/assets/images/shape/shape-43.webp)'}}></div>
                                    <h2>29<span>+</span></h2>
                                    <h6>Years of experience in the Banking Sector.</h6>
                                    <Link to="/about"><i className="flaticon-right-arrow"></i>Our History</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 right-column">
                            <div className="video-content">
                                <div className="inner-box" style={{backgroundImage: 'url(/assets/images/resource/video-1.jpg)'}}>
                                    <div className="video-btn centred mb_60">
                                        <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="lightbox-image video-btn" data-caption=""><i className="fas fa-play"></i></a> 
                                    </div>
                                    <div className="author-box">
                                        <span className="designation">CEO &amp; Founder of Kaizen MFB</span>
                                        <h4>Leo George</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Numbers section */}
        <section className="funfact-section centred">
            <div className="outer-container clearfix">
                <div className="funfact-block-one">
                    <div className="inner-box">
                        <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-27.png" alt="" /></div>
                        <div className="count-outer">
                            <span className="odometer" data-count="1">00</span><span className="symble"></span>
                        </div>
                        <p>Our Network — 1 Branch, Multiple Service Points.</p>
                    </div>
                </div>
                <div className="funfact-block-one">
                    <div className="inner-box">
                        <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-28.png" alt="" /></div>
                        <div className="count-outer">
                            <span className="odometer" data-count="10000">00</span><span className="symble">+</span>
                        </div>
                        <p>Happy Customers — Thousands of Happy Customers.</p>
                    </div>
                </div>
                <div className="funfact-block-one">
                    <div className="inner-box">
                        <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-29.png" alt="" /></div>
                        <div className="count-outer">
                            <span className="odometer" data-count="50">00</span><span className="symble">+</span>
                        </div>
                        <p>Experienced &amp; Professional Employees.</p>
                    </div>
                </div>
                <div className="funfact-block-one">
                    <div className="inner-box">
                        <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-30.png" alt="" /></div>
                        <div className="count-outer">
                            <span className="odometer" data-count="258">00</span>
                        </div>
                        <p>Loans Disbursed — 45.6 Cr Loans for 258 Customers.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Mission / Vision / Core Values section */}
        <section className="statements-section sec-pad-2 centred">
            <div className="auto-container">
                <div className="sec-title centred">
                    <span className="sub-title">Statements</span>
                    <h2>Our Purpose and Principles</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 statements-block">
                        <div className="statements-block-one">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img loading="lazy" src="/assets/images/banner/ourmission.jpg" alt="Our Mission" /></figure>
                                    <h3>Our Mission</h3>
                                </div>
                                <div className="text-box">
                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-199.png" alt="" /></div>
                                    <p>To transform lives by providing tailored financial services, leveraging technology, and fostering continuous improvement while empowering individuals, entrepreneurs, and small businesses through ethical banking practices.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 statements-block">
                        <div className="statements-block-two">
                            <div className="inner-box">
                                <div className="shape" style={{backgroundImage: 'url(/assets/images/shape/shape-44.webp)'}}></div>
                                <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-201.png" alt="" /></div>
                                <h3>Our Core Values</h3>
                                <ul className="list-item clearfix">
                                    <li><strong>Continuous Improvement (Kaizen)</strong> – We embrace a culture of constant learning, innovation, and efficiency to better serve our customers.</li>
                                    <li><strong>Financial Inclusion</strong> – We are dedicated to providing equal financial opportunities for underserved communities.</li>
                                    <li><strong>Customer-Centricity</strong> – We prioritize our customers' financial well-being by offering tailored solutions with integrity and transparency.</li>
                                    <li><strong>Innovation & Technology</strong> – We leverage cutting-edge technology to enhance accessibility, security, and efficiency in our services.</li>
                                    <li><strong>Integrity & Trust</strong> – We operate with honesty, fairness, and accountability in all our interactions.</li>
                                    <li><strong>Social & Economic Impact</strong> – We empower individuals and businesses to create sustainable economic growth and community development.</li>
                                    <li><strong>Collaboration & Partnership</strong> – We believe in working with stakeholders to foster shared success and financial resilience.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 statements-block">
                        <div className="statements-block-one">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img loading="lazy" src="/assets/images/banner/ourvision.jpg" alt="Our Vision" /></figure>
                                    <h3>Our Vision</h3>
                                </div>
                                <div className="text-box">
                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-200.png" alt="" /></div>
                                    <p>To be the leading microfinance institution driving financial inclusion and economic empowerment through innovative, accessible, and sustainable banking solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Better Value Banking */}
        <section className="awards-section alternat-2 pt_110 pb_110">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-5 col-md-12 col-sm-12 title-column">
                        <div className="title-inner">
                            <div className="sec-title">
                                <span className="sub-title">Better Value</span>
                                <h2>Better Value Banking Experience</h2>
                                <p>Discover a banking experience built on better value—where innovative technology, thoughtful service, and clear financial benefits work in harmony to enrich your everyday financial life.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-sm-12 content-column">
                        <div className="content-box centred pl_100 mt_7">
                            <Carousel className="two-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one">
                                <div className="award-block-one">
                                    <div className="inner-box">
                                        <div className="shape" style={{backgroundImage: 'url(/assets/images/shape/shape-9.webp)'}}></div>
                                        <h3>Community <br />Empowerment</h3>
                                        <div className="icon-box"><img loading="lazy" src="/assets/images/icons/award-1.png" alt="" /></div>
                                        <p>Financial inclusion for underserved communities.</p>
                                        <span>Our Commitment</span>
                                    </div>
                                </div>
                                <div className="award-block-one">
                                    <div className="inner-box">
                                        <div className="shape" style={{backgroundImage: 'url(/assets/images/shape/shape-9.webp)'}}></div>
                                        <h3>Customer <br />Satisfaction</h3>
                                        <div className="icon-box"><img loading="lazy" src="/assets/images/icons/award-2.png" alt="" /></div>
                                        <p>Accessible, reliable, and customer-focused banking.</p>
                                        <span>Our Promise</span>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Why Choose Us */}
        <section className="chooseus-section sec-pad">
            <div className="pattern-layer" style={{backgroundImage: 'url(/assets/images/shape/shape-45.webp)'}}></div>
            <div className="auto-container">
                <div className="sec-title light centred">
                    <span className="sub-title">Why Choose Us</span>
                    <h2>Reasons for Choosing Kaizen MFB</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image-box">
                            <figure className="image"><img loading="lazy" src="/assets/images/resource/chooseus-1.jpg" alt="" /></figure>
                            <div className="chart-box centred">
                                <h6> Financial Growth</h6>
                                <div className="chart mb_12"><img loading="lazy" src="/assets/images/icons/chart-1.png" alt="" /></div>
                                <ul className="option-list mb_7 clearfix">
                                    <li>
                                        <div className="check-box">
                                            <input className="check" type="radio" id="checkbox1" name="same" checked="" />
                                            <label htmlFor="checkbox1">Option&nbsp;1</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="check-box">
                                            <input className="check" type="radio" id="checkbox2" name="same" />
                                            <label htmlFor="checkbox2">Option&nbsp;2</label>
                                        </div>
                                    </li>
                                </ul>
                                <span className="text">Growth</span>
                                <span className="price">₦42,467</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            <div className="chooseus-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-203.png" alt="" /></div>
                                    <h3>Community <br />Empowerment</h3>
                                    <p>We are not just a bank; we are a catalyst for positive change, working to reduce poverty and create opportunities for financial independence.</p>
                                </div>
                            </div>
                            <div className="chooseus-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-204.png" alt="" /></div>
                                    <h3>Innovative Financial <br />Solutions</h3>
                                    <p>Fostering sustainable growth and financial inclusion by providing accessible, reliable, and customer-focused banking services.</p>
                                </div>
                            </div>
                            <div className="chooseus-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-205.png" alt="" /></div>
                                    <h3>Accessible <br />Banking</h3>
                                    <p>Affordable and accessible financial products for individuals, micro-entrepreneurs, and small businesses.</p>
                                </div>
                            </div>
                            <div className="chooseus-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-206.png" alt="" /></div>
                                    <h3>Expert Financial <br />Guidance</h3>
                                    <p>Our dedicated team of professionals is always ready to assist, providing guidance and support whenever needed.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
    </>
  )
}
