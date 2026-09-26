import React from 'react'
import TestimonialCarousel from '../components/sections/TestimonialCarousel'
import ClientsSection from '../components/sections/ClientsSection'
import WorkingSection from '../components/sections/WorkingSection'
import { Link } from 'react-router-dom'
import Carousel from '../components/ui/Carousel'
import Tabs from '../components/ui/Tabs'
import NiceSelect from '../components/ui/NiceSelect'
import CircularText from '../components/ui/CircularText'

export default function HomeSpotlightPage(){
  return (
    <>


    <div className="boxed_wrapper home_3">


        


        
        


        


        


        
        <section className="banner-style-three p_relative">
            <div className="pattern-layer" style={{backgroundImage: 'url(/assets/images/shape/shape-11.png)'}}></div>
            <div className="inner-container">
                <div className="inner-box clearfix">
                    <div className="content-box">
                        <div className="shape" style={{backgroundImage: 'url(/assets/images/shape/shape-12.png)'}}></div>
                        <div className="light-icon"><img loading="lazy" src="/assets/images/icons/icon-97.png" alt="" /></div>
                        <figure className="doller-box"><img loading="lazy" src="/assets/images/resource/doller-1.png" alt="" /></figure>
                        <div className="rotate-box">
                            <CircularText className="curved-circle" radius={77}>Business Loan Interst Rate</CircularText>
                            <div className="text">
                                <span>From</span>
                                <h3>8.5%</h3>
                                <h6>apr</h6>
                            </div>
                        </div>
                        <div className="sec-title">
                            <span className="sub-title">Business Loan</span>
                            <h2>Business <br /><span>Dreams</span> Realized</h2>
                        </div>
                        <p>Proudly recognized for our commitment to excellence.</p>
                        <div className="btn-box">
                            <Link to="/index-3"><i className="flaticon-right-arrow"></i>Find Out More</Link>
                        </div>
                        <div className="appointment-box">
                            <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-98.png" alt="" /></div>
                            <h5>Make an Appointment</h5>
                            <p>Consultation with our executive today.</p>
                            <div className="link"><Link to="/index-3"><i className="flaticon-right-arrow"></i></Link></div>
                        </div>
                    </div>
                    <div className="image-box">
                        <figure className="image"><img loading="lazy" src="/assets/images/banner/banner-img-1.jpg" alt="" /></figure>
                    </div>
                </div>
                <div className="form-inner">
                    <div className="shape" style={{backgroundImage: 'url(/assets/images/shape/shape-14.png)'}}></div>
                    <h3>Banking Portal</h3>
                    <Tabs className="tabs-box">
                        <div className="tab-btns tab-buttons mb_30">
                            <div className="tab-btn active-btn" data-tab="#tab-1"><h5>Personal</h5></div>
                            <div className="tab-btn" data-tab="#tab-2"><h5>Business</h5></div>
                        </div>
                        <div className="tabs-content">
                            <div className="tab active-tab" id="tab-1">
                                <div className="form-content">
                                    <form method="post" action="index-3.html">
                                        <div className="form-group">
                                            <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-99.png" alt="" /></div>
                                            <input type="text" name="phone" placeholder="Mobile Num" required />
                                        </div>
                                        <div className="text-box pt_6 pb_16 centred">[or]</div>
                                        <div className="form-group">
                                            <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-100.png" alt="" /></div>
                                            <input type="text" name="name" placeholder="User Name" required />
                                        </div>
                                        <div className="form-group">
                                            <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-101.png" alt="" /></div>
                                            <input type="password" name="password" placeholder="Password" required />
                                        </div>
                                        <div className="message-btn pt_10"><button type="submit" className="theme-btn"><span>Login Your Account</span></button></div>
                                        <div className="forgot-password pt_18 pb_12 centred">
                                            <button type="button">Forgot Username?</button>
                                        </div>
                                        <div className="text centred"><p>New to banking? <Link to="/index-3">Sign Up.</Link></p></div>
                                    </form>
                                </div>
                            </div>
                            <div className="tab" id="tab-2">
                                <div className="form-content">
                                    <form method="post" action="index-3.html">
                                        <div className="form-group">
                                            <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-99.png" alt="" /></div>
                                            <input type="text" name="phone" placeholder="Mobile Num" required />
                                        </div>
                                        <div className="text-box pt_6 pb_16 centred">[or]</div>
                                        <div className="form-group">
                                            <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-100.png" alt="" /></div>
                                            <input type="text" name="name" placeholder="User Name" required />
                                        </div>
                                        <div className="form-group">
                                            <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-101.png" alt="" /></div>
                                            <input type="password" name="password" placeholder="Password" required />
                                        </div>
                                        <div className="message-btn pt_10"><button type="submit" className="theme-btn"><span>Login Your Account</span></button></div>
                                        <div className="forgot-password pt_18 pb_12 centred">
                                            <button type="button">Forgot Username?</button>
                                        </div>
                                        <div className="text centred"><p>New to banking? <Link to="/index-3">Sign Up.</Link></p></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Tabs>
                </div>
            </div>
        </section>
        


        
        <section className="apps-section sec-pad">
            <div className="pattern-layer">
                <div className="pattern-1" style={{backgroundImage: 'url(/assets/images/shape/shape-15.png)'}}></div>
                <div className="pattern-2" style={{backgroundImage: 'url(/assets/images/shape/shape-16.png)'}}></div>
            </div>
            <figure className="image-layer"><img loading="lazy" src="/assets/images/resource/apps-2.png" alt="" /></figure>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-xl-6 col-lg-12 col-md-12 offset-xl-6 content-column">
                        <div className="content-box p_relative pl_200">
                            <span className="big-text">anytime <br />bank</span>
                            <div className="inner-box">
                                <div className="sec-title light">
                                    <span className="sub-title">Mobile App</span>
                                    <h2>Download Our Mobile App</h2>
                                    <p>Our mobile app for secure, convenient banking anytime, anywhere.</p>
                                </div>
                                <div className="download-btn">
                                    <Link to="/index-2"><i className="flaticon-play-store"></i><span>Google Play</span></Link>
                                    <Link to="/index-2"><i className="flaticon-apple"></i><span>App Store</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="custom-banking-two alternat-2">
            <div className="auto-container">
                <div className="sec-title centred">
                    <span className="sub-title light">Custom Banking</span>
                    <h2>Banking For Your Needs</h2>
                </div>
                <Carousel className="three-item-carousel owl-carousel owl-theme owl-nav-none dots-style-one">
                    <div className="banking-block-one">
                        <div className="inner-box">
                            <div className="text-box">
                                <h3><Link to="/index-2">Account</Link></h3>
                                <p>Perfectly simple and easy to distinguishto the claims of duty ...</p>
                            </div>
                            <div className="image-box">
                                <figure className="image"><img loading="lazy" src="/assets/images/resource/banking-2.jpg" alt="" /></figure>
                                <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-102.png" alt="" /></div>
                                <div className="btn-box"><Link to="/index-2"><span>Read More</span></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="banking-block-one">
                        <div className="inner-box">
                            <div className="text-box">
                                <h3><Link to="/index-2">Loan</Link></h3>
                                <p>Duty through weakness of will, which is the same as saying through...</p>
                            </div>
                            <div className="image-box">
                                <figure className="image"><img loading="lazy" src="/assets/images/resource/banking-3.jpg" alt="" /></figure>
                                <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-103.png" alt="" /></div>
                                <div className="btn-box"><Link to="/index-2"><span>Read More</span></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="banking-block-one">
                        <div className="inner-box">
                            <div className="text-box">
                                <h3><Link to="/index-2">Investment</Link></h3>
                                <p>Choice is untrammelled when nothing prevents our being able to do...</p>
                            </div>
                            <div className="image-box">
                                <figure className="image"><img loading="lazy" src="/assets/images/resource/banking-4.jpg" alt="" /></figure>
                                <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-104.png" alt="" /></div>
                                <div className="btn-box"><Link to="/index-2"><span>Read More</span></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="banking-block-one">
                        <div className="inner-box">
                            <div className="text-box">
                                <h3><Link to="/index-2">Account</Link></h3>
                                <p>Perfectly simple and easy to distinguishto the claims of duty ...</p>
                            </div>
                            <div className="image-box">
                                <figure className="image"><img loading="lazy" src="/assets/images/resource/banking-2.jpg" alt="" /></figure>
                                <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-102.png" alt="" /></div>
                                <div className="btn-box"><Link to="/index-2"><span>Read More</span></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="banking-block-one">
                        <div className="inner-box">
                            <div className="text-box">
                                <h3><Link to="/index-2">Loan</Link></h3>
                                <p>Duty through weakness of will, which is the same as saying through...</p>
                            </div>
                            <div className="image-box">
                                <figure className="image"><img loading="lazy" src="/assets/images/resource/banking-3.jpg" alt="" /></figure>
                                <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-103.png" alt="" /></div>
                                <div className="btn-box"><Link to="/index-2"><span>Read More</span></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="banking-block-one">
                        <div className="inner-box">
                            <div className="text-box">
                                <h3><Link to="/index-2">Investment</Link></h3>
                                <p>Choice is untrammelled when nothing prevents our being able to do...</p>
                            </div>
                            <div className="image-box">
                                <figure className="image"><img loading="lazy" src="/assets/images/resource/banking-4.jpg" alt="" /></figure>
                                <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-104.png" alt="" /></div>
                                <div className="btn-box"><Link to="/index-2"><span>Read More</span></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="banking-block-one">
                        <div className="inner-box">
                            <div className="text-box">
                                <h3><Link to="/index-2">Account</Link></h3>
                                <p>Perfectly simple and easy to distinguishto the claims of duty ...</p>
                            </div>
                            <div className="image-box">
                                <figure className="image"><img loading="lazy" src="/assets/images/resource/banking-2.jpg" alt="" /></figure>
                                <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-102.png" alt="" /></div>
                                <div className="btn-box"><Link to="/index-2"><span>Read More</span></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="banking-block-one">
                        <div className="inner-box">
                            <div className="text-box">
                                <h3><Link to="/index-2">Loan</Link></h3>
                                <p>Duty through weakness of will, which is the same as saying through...</p>
                            </div>
                            <div className="image-box">
                                <figure className="image"><img loading="lazy" src="/assets/images/resource/banking-3.jpg" alt="" /></figure>
                                <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-103.png" alt="" /></div>
                                <div className="btn-box"><Link to="/index-2"><span>Read More</span></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="banking-block-one">
                        <div className="inner-box">
                            <div className="text-box">
                                <h3><Link to="/index-2">Investment</Link></h3>
                                <p>Choice is untrammelled when nothing prevents our being able to do...</p>
                            </div>
                            <div className="image-box">
                                <figure className="image"><img loading="lazy" src="/assets/images/resource/banking-4.jpg" alt="" /></figure>
                                <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-104.png" alt="" /></div>
                                <div className="btn-box"><Link to="/index-2"><span>Read More</span></Link></div>
                            </div>
                        </div>
                    </div>
                </Carousel>
                <div className="more-text centred">
                    <h5><i className="flaticon-sparkle"></i>Discover <Link to="/service">More Services</Link> – Tailored to Meet Your Financial Needs.</h5>
                </div>
            </div>
        </section>
        


        
        <section className="custom-banking home-3 alternat-2 sec-pad">
            <div className="pattern-layer" style={{backgroundImage: 'url(/assets/images/shape/shape-4.png)'}}></div>
            <div className="auto-container">
                <div className="title-box">
                    <div className="sec-title light">
                        <span className="sub-title">Custom Banking</span>
                        <h2>Banking For Your Needs</h2>
                    </div>
                    <div className="support-box">
                        <h5>Get Support</h5>
                        <div className="phone-box">
                            <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-105.png" alt="" /></div>
                            <a href="tel:49556789091">+49 55 678 90 & 91</a>
                            <span>9.00 am to 7.00 pm</span>
                        </div>
                    </div>
                </div>
                <Tabs className="tabs-box">
                    <figure className="support-image"><img loading="lazy" src="/assets/images/banner/support1.png" alt="" /></figure>
                    <div className="tab-btn-one">
                        <ul className="tab-btns tab-buttons clearfix">
                            <li className="tab-btn active-btn" data-tab="#tab-9">Business</li>
                            <li className="tab-btn" data-tab="#tab-10">Individual</li>
                        </ul>
                    </div>
                    <div className="tabs-content">
                        <div className="tab active-tab" id="tab-9">
                            <Tabs className="tabs-box-2">
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-12 col-sm-12 button-column">
                                        <div className="tab-btn-two">
                                            <ul className="tab-btns tab-buttons-2">
                                                <li className="tab-btn-2 active-btn-2" data-tab="#tab-11">
                                                    <h4>Savings Accounts</h4>
                                                    <p>High interest...</p>
                                                </li>
                                                <li className="tab-btn-2" data-tab="#tab-12">
                                                    <h4>Consumer Loans</h4>
                                                    <p>Low collateral...</p>
                                                </li>
                                                <li className="tab-btn-2" data-tab="#tab-13">
                                                    <h4>Debit Cards</h4>
                                                    <p>No fees...</p>
                                                </li>
                                                <li className="tab-btn-2" data-tab="#tab-14">
                                                    <h4>Advisory Services</h4>
                                                    <p>Financial advice...</p>
                                                </li>
                                                <li className="tab-btn-2" data-tab="#tab-15">
                                                    <h4>Insurance Products</h4>
                                                    <p>Fits your needs...</p>
                                                </li>
                                                <li className="tab-btn-2" data-tab="#tab-51">
                                                    <h4>Savings Account</h4>
                                                    <p>Banking Products</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                        <div className="tabs-content-2">
                                            <div className="tab-2 active-tab-2" id="tab-11">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-21.png" alt="" /></div>
                                                        <h4>Savings Account</h4>
                                                        <h2>Invest in Your Future, <br />Start Saving.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img loading="lazy" src="/assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img loading="lazy" src="/assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-25.png" alt="" /></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required />
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-2" id="tab-12">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-21.png" alt="" /></div>
                                                        <h4>Consumer Loans</h4>
                                                        <h2>Kaizenbank in Your Future, Consumer Loans.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img loading="lazy" src="/assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img loading="lazy" src="/assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-25.png" alt="" /></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required />
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-2" id="tab-13">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-21.png" alt="" /></div>
                                                        <h4>Debit Cards</h4>
                                                        <h2>Kaizenbank in Your Future, <br />Debit Cards.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img loading="lazy" src="/assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img loading="lazy" src="/assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-25.png" alt="" /></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required />
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-2" id="tab-14">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-21.png" alt="" /></div>
                                                        <h4>Advisory Services</h4>
                                                        <h2>Kaizenbank is Provided, Advisory Services.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img loading="lazy" src="/assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img loading="lazy" src="/assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-25.png" alt="" /></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required />
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-2" id="tab-15">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-21.png" alt="" /></div>
                                                        <h4>Insurance Products</h4>
                                                        <h2>Kaizenbank is Protected, Your life Insurance.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img loading="lazy" src="/assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img loading="lazy" src="/assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-25.png" alt="" /></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required />
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-2" id="tab-51">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-21.png" alt="" /></div>
                                                        <h4>Banking Products</h4>
                                                        <h2>Kaizenbank is Protected, Your Savings Account.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img loading="lazy" src="/assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img loading="lazy" src="/assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-25.png" alt="" /></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required />
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tabs>
                        </div>
                        <div className="tab" id="tab-10">
                            <Tabs className="tabs-box-2">
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-12 col-sm-12 button-column">
                                        <div className="tab-btn-two">
                                            <ul className="tab-btns tab-buttons-2">
                                                <li className="tab-btn-2 active-btn-2" data-tab="#tab-16">
                                                    <h4>Savings Accounts</h4>
                                                    <p>High interest...</p>
                                                </li>
                                                <li className="tab-btn-2" data-tab="#tab-17">
                                                    <h4>Consumer Loans</h4>
                                                    <p>Low collateral...</p>
                                                </li>
                                                <li className="tab-btn-2" data-tab="#tab-18">
                                                    <h4>Debit Cards</h4>
                                                    <p>No fees...</p>
                                                </li>
                                                <li className="tab-btn-2" data-tab="#tab-19">
                                                    <h4>Advisory Services</h4>
                                                    <p>Financial advice...</p>
                                                </li>
                                                <li className="tab-btn-2" data-tab="#tab-20">
                                                    <h4>Insurance Products</h4>
                                                    <p>Fits your needs...</p>
                                                </li>
                                                <li className="tab-btn-2" data-tab="#tab-52">
                                                    <h4>Savings Account</h4>
                                                    <p>Banking Products</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                        <div className="tabs-content-2">
                                            <div className="tab-2 active-tab-2" id="tab-16">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-21.png" alt="" /></div>
                                                        <h4>Savings Account</h4>
                                                        <h2>Invest in Your Future, <br />Start Saving.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img loading="lazy" src="/assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img loading="lazy" src="/assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-25.png" alt="" /></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required />
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-2" id="tab-17">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-21.png" alt="" /></div>
                                                        <h4>Consumer Loans</h4>
                                                        <h2>Kaizenbank in Your Future, Consumer Loans.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img loading="lazy" src="/assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img loading="lazy" src="/assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-25.png" alt="" /></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required />
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-2" id="tab-18">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-21.png" alt="" /></div>
                                                        <h4>Debit Cards</h4>
                                                        <h2>Kaizenbank in Your Future, <br />Debit Cards.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img loading="lazy" src="/assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img loading="lazy" src="/assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-25.png" alt="" /></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required />
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-2" id="tab-19">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-21.png" alt="" /></div>
                                                        <h4>Advisory Services</h4>
                                                        <h2>Kaizenbank is Provided, Advisory Services.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img loading="lazy" src="/assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img loading="lazy" src="/assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-25.png" alt="" /></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required />
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-2" id="tab-20">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-21.png" alt="" /></div>
                                                        <h4>Insurance Products</h4>
                                                        <h2>Kaizenbank is Protected, Your life Insurance.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img loading="lazy" src="/assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img loading="lazy" src="/assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-25.png" alt="" /></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required />
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-2" id="tab-52">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-21.png" alt="" /></div>
                                                        <h4>Banking Products</h4>
                                                        <h2>Kaizenbank is Protected, Your Savings Account.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img loading="lazy" src="/assets/images/icons/icon-22.png" alt="" />2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img loading="lazy" src="/assets/images/icons/icon-22.png" alt="" />4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link to="/"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="index.html">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-23.png" alt="" /></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-24.png" alt="" /></div>
                                                                    <input type="email" name="email" placeholder="Email" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-25.png" alt="" /></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required />
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
                                                                </div>
                                                            </form>
                                                        </div>
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
                        <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-110.png" alt="" /></div>
                        <div className="count-outer">
                            <span className="odometer" data-count="8.5">00</span><span className="symble">k</span>
                        </div>
                        <p>Happy Customers World Wide.</p>
                    </div>
                </div>
                <div className="funfact-block-one">
                    <div className="inner-box">
                        <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-111.png" alt="" /></div>
                        <div className="count-outer">
                            <span className="odometer" data-count="0.5">00</span><span className="symble">m</span>
                        </div>
                        <p>Transactions Processed Daily.</p>
                    </div>
                </div>
                <div className="funfact-block-one">
                    <div className="inner-box">
                        <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-112.png" alt="" /></div>
                        <div className="count-outer">
                            <span className="odometer" data-count="10000">00</span><span className="symble">+</span>
                        </div>
                        <p>ATMs and Branches Globally.</p>
                    </div>
                </div>
                <div className="funfact-block-one">
                    <div className="inner-box">
                        <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-113.png" alt="" /></div>
                        <div className="count-outer">
                            <span className="odometer" data-count="50">00</span><span className="symble">+</span>
                        </div>
                        <p>Years of Trusted Banking Service.</p>
                    </div>
                </div>
            </div>
        </section>
        


        
        <section className="calculator-section alternat-2 pt_120 pb_120">
            <figure className="image-layer"><img loading="lazy" src="/assets/images/resource/men-2.webp" alt="" /></figure>
            <span className="big-text text-black">Calculation <br />Instant</span>
            <div className="auto-container">
                <div className="inner-container">
                    <Tabs className="tabs-box">
                        <div className="tab-btn-box">
                            <div className="tab-btns tab-buttons clearfix">
                                <div className="tab-btn active-btn" data-tab="#tab-21"><h4>Kaizen Personal Loan</h4></div>
                                <div className="tab-btn" data-tab="#tab-22"><h4>Kaizen Enterprise Loan</h4></div>
                                <div className="tab-btn" data-tab="#tab-23"><h4>Kaizen Asset Loan</h4></div>
                                <div className="tab-btn" data-tab="#tab-24"><h4>Kaizen Micro Loan</h4></div>
                            </div>
                        </div>
                        <div className="tabs-content">
                            <div className="tab active-tab" id="tab-21">
                                <div className="row clearfix">
                                    <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                        <div className="content-box">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                                                    <div className="left-content mr_30">
                                                        <div className="sec-title">
                                                            <span className="sub-title light">Loan Calculator</span>
                                                            <h2>Flexible <br />Online Loan Calculator</h2>
                                                            <p>Estimate your loan payments quickly & easily with our calculator.</p>
                                                        </div>
                                                        <div className="lower-text">
                                                            <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-114.png" alt="" /></div>
                                                            <h5>Loan Questions? Check Our <Link to="/faq">Faq’s</Link> Page.</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 right-column">
                                                    <div className="right-content">
                                                        <div className="progress-block-one">
                                                            <div className="title-box">
                                                                <h5>Loan Amount</h5>
                                                                <h6>$500000</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>$50,000</span>
                                                                    <span>$2.5 million</span>
                                                                </div>
                                                                <div className="bar">
                                                                    <div className="bar-inner count-bar" data-percent="20%"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-block-one">
                                                            <div className="title-box">
                                                                <h5>Loan Term (Years)</h5>
                                                                <h6>20</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>20 Years</span>
                                                                    <span>40 Years</span>
                                                                </div>
                                                                <div className="bar">
                                                                    <div className="bar-inner count-bar" data-percent="50%"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-block-one">
                                                            <div className="title-box">
                                                                <h5>Interest Rate</h5>
                                                                <h6>8.5%</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>6%</span>
                                                                    <span>18%</span>
                                                                </div>
                                                                <div className="bar">
                                                                    <div className="bar-inner count-bar" data-percent="33.333%"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12 amount-column">
                                        <div className="amount-box">
                                            <div className="emi-box centred">
                                                <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-115.png" alt="" /></div>
                                                <h5>Monthly EMI</h5>
                                                <h3>$4,340.00</h3>
                                                <div className="btn-box"><Link to="/"><span>Apply Online</span></Link></div>
                                            </div>
                                            <div className="interest-amount">
                                                <div className="single-amount">
                                                    <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                    <h5>Interest Amount</h5>
                                                    <span>$541,388</span>
                                                </div>
                                                <div className="single-amount">
                                                    <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                    <h5>Interest Amount</h5>
                                                    <span>$541,388</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab" id="tab-22">
                                <div className="row clearfix">
                                    <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                        <div className="content-box">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                                                    <div className="left-content mr_30">
                                                        <div className="sec-title">
                                                            <span className="sub-title light">Loan Calculator</span>
                                                            <h2>Flexible <br />Online Loan Calculator</h2>
                                                            <p>Estimate your loan payments quickly & easily with our calculator.</p>
                                                        </div>
                                                        <div className="lower-text">
                                                            <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-114.png" alt="" /></div>
                                                            <h5>Loan Questions? Check Our <Link to="/faq">Faq’s</Link> Page.</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 right-column">
                                                    <div className="right-content">
                                                        <div className="progress-block-one">
                                                            <div className="title-box">
                                                                <h5>Loan Amount</h5>
                                                                <h6>$500000</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>$50,000</span>
                                                                    <span>$2.5 million</span>
                                                                </div>
                                                                <div className="bar">
                                                                    <div className="bar-inner count-bar" data-percent="20%"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-block-one">
                                                            <div className="title-box">
                                                                <h5>Loan Term (Years)</h5>
                                                                <h6>20</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>20 Years</span>
                                                                    <span>40 Years</span>
                                                                </div>
                                                                <div className="bar">
                                                                    <div className="bar-inner count-bar" data-percent="50%"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-block-one">
                                                            <div className="title-box">
                                                                <h5>Interest Rate</h5>
                                                                <h6>8.5%</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>6%</span>
                                                                    <span>18%</span>
                                                                </div>
                                                                <div className="bar">
                                                                    <div className="bar-inner count-bar" data-percent="33.333%"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12 amount-column">
                                        <div className="amount-box">
                                            <div className="emi-box centred">
                                                <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-115.png" alt="" /></div>
                                                <h5>Monthly EMI</h5>
                                                <h3>$4,340.00</h3>
                                                <div className="btn-box"><Link to="/"><span>Apply Online</span></Link></div>
                                            </div>
                                            <div className="interest-amount">
                                                <div className="single-amount">
                                                    <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                    <h5>Interest Amount</h5>
                                                    <span>$541,388</span>
                                                </div>
                                                <div className="single-amount">
                                                    <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                    <h5>Interest Amount</h5>
                                                    <span>$541,388</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab" id="tab-23">
                                <div className="row clearfix">
                                    <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                        <div className="content-box">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                                                    <div className="left-content mr_30">
                                                        <div className="sec-title">
                                                            <span className="sub-title light">Loan Calculator</span>
                                                            <h2>Flexible <br />Online Loan Calculator</h2>
                                                            <p>Estimate your loan payments quickly & easily with our calculator.</p>
                                                        </div>
                                                        <div className="lower-text">
                                                            <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-114.png" alt="" /></div>
                                                            <h5>Loan Questions? Check Our <Link to="/faq">Faq’s</Link> Page.</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 right-column">
                                                    <div className="right-content">
                                                        <div className="progress-block-one">
                                                            <div className="title-box">
                                                                <h5>Loan Amount</h5>
                                                                <h6>$500000</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>$50,000</span>
                                                                    <span>$2.5 million</span>
                                                                </div>
                                                                <div className="bar">
                                                                    <div className="bar-inner count-bar" data-percent="20%"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-block-one">
                                                            <div className="title-box">
                                                                <h5>Loan Term (Years)</h5>
                                                                <h6>20</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>20 Years</span>
                                                                    <span>40 Years</span>
                                                                </div>
                                                                <div className="bar">
                                                                    <div className="bar-inner count-bar" data-percent="50%"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-block-one">
                                                            <div className="title-box">
                                                                <h5>Interest Rate</h5>
                                                                <h6>8.5%</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>6%</span>
                                                                    <span>18%</span>
                                                                </div>
                                                                <div className="bar">
                                                                    <div className="bar-inner count-bar" data-percent="33.333%"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12 amount-column">
                                        <div className="amount-box">
                                            <div className="emi-box centred">
                                                <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-115.png" alt="" /></div>
                                                <h5>Monthly EMI</h5>
                                                <h3>$4,340.00</h3>
                                                <div className="btn-box"><Link to="/"><span>Apply Online</span></Link></div>
                                            </div>
                                            <div className="interest-amount">
                                                <div className="single-amount">
                                                    <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                    <h5>Interest Amount</h5>
                                                    <span>$541,388</span>
                                                </div>
                                                <div className="single-amount">
                                                    <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                    <h5>Interest Amount</h5>
                                                    <span>$541,388</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab" id="tab-24">
                                <div className="row clearfix">
                                    <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                        <div className="content-box">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                                                    <div className="left-content mr_30">
                                                        <div className="sec-title">
                                                            <span className="sub-title light">Loan Calculator</span>
                                                            <h2>Flexible <br />Online Loan Calculator</h2>
                                                            <p>Estimate your loan payments quickly & easily with our calculator.</p>
                                                        </div>
                                                        <div className="lower-text">
                                                            <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-114.png" alt="" /></div>
                                                            <h5>Loan Questions? Check Our <Link to="/faq">Faq’s</Link> Page.</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 right-column">
                                                    <div className="right-content">
                                                        <div className="progress-block-one">
                                                            <div className="title-box">
                                                                <h5>Loan Amount</h5>
                                                                <h6>$500000</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>$50,000</span>
                                                                    <span>$2.5 million</span>
                                                                </div>
                                                                <div className="bar">
                                                                    <div className="bar-inner count-bar" data-percent="20%"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-block-one">
                                                            <div className="title-box">
                                                                <h5>Loan Term (Years)</h5>
                                                                <h6>20</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>20 Years</span>
                                                                    <span>40 Years</span>
                                                                </div>
                                                                <div className="bar">
                                                                    <div className="bar-inner count-bar" data-percent="50%"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-block-one">
                                                            <div className="title-box">
                                                                <h5>Interest Rate</h5>
                                                                <h6>8.5%</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>6%</span>
                                                                    <span>18%</span>
                                                                </div>
                                                                <div className="bar">
                                                                    <div className="bar-inner count-bar" data-percent="33.333%"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12 amount-column">
                                        <div className="amount-box">
                                            <div className="emi-box centred">
                                                <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-115.png" alt="" /></div>
                                                <h5>Monthly EMI</h5>
                                                <h3>$4,340.00</h3>
                                                <div className="btn-box"><Link to="/"><span>Apply Online</span></Link></div>
                                            </div>
                                            <div className="interest-amount">
                                                <div className="single-amount">
                                                    <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                    <h5>Interest Amount</h5>
                                                    <span>$541,388</span>
                                                </div>
                                                <div className="single-amount">
                                                    <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                    <h5>Interest Amount</h5>
                                                    <span>$541,388</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab" id="tab-25">
                                <div className="row clearfix">
                                    <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                        <div className="content-box">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                                                    <div className="left-content mr_30">
                                                        <div className="sec-title">
                                                            <span className="sub-title light">Loan Calculator</span>
                                                            <h2>Flexible <br />Online Loan Calculator</h2>
                                                            <p>Estimate your loan payments quickly & easily with our calculator.</p>
                                                        </div>
                                                        <div className="lower-text">
                                                            <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-114.png" alt="" /></div>
                                                            <h5>Loan Questions? Check Our <Link to="/faq">Faq’s</Link> Page.</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 right-column">
                                                    <div className="right-content">
                                                        <div className="progress-block-one">
                                                            <div className="title-box">
                                                                <h5>Loan Amount</h5>
                                                                <h6>$500000</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>$50,000</span>
                                                                    <span>$2.5 million</span>
                                                                </div>
                                                                <div className="bar">
                                                                    <div className="bar-inner count-bar" data-percent="20%"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-block-one">
                                                            <div className="title-box">
                                                                <h5>Loan Term (Years)</h5>
                                                                <h6>20</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>20 Years</span>
                                                                    <span>40 Years</span>
                                                                </div>
                                                                <div className="bar">
                                                                    <div className="bar-inner count-bar" data-percent="50%"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="progress-block-one">
                                                            <div className="title-box">
                                                                <h5>Interest Rate</h5>
                                                                <h6>8.5%</h6>
                                                            </div>
                                                            <div className="inner-box">
                                                                <div className="text-box">
                                                                    <span>6%</span>
                                                                    <span>18%</span>
                                                                </div>
                                                                <div className="bar">
                                                                    <div className="bar-inner count-bar" data-percent="33.333%"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12 amount-column">
                                        <div className="amount-box">
                                            <div className="emi-box centred">
                                                <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-115.png" alt="" /></div>
                                                <h5>Monthly EMI</h5>
                                                <h3>$4,340.00</h3>
                                                <div className="btn-box"><Link to="/"><span>Apply Online</span></Link></div>
                                            </div>
                                            <div className="interest-amount">
                                                <div className="single-amount">
                                                    <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                    <h5>Interest Amount</h5>
                                                    <span>$541,388</span>
                                                </div>
                                                <div className="single-amount">
                                                    <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                    <h5>Interest Amount</h5>
                                                    <span>$541,388</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tabs>
                </div>
            </div>
        </section>
        


        
        <WorkingSection modClass="bg-color-4 centred" icons={["icon-116.png","icon-117.png","icon-118.png","icon-119.png"]} light />
        


        
        <section className="creditcard-section alternat-2 sec-pad">
            <div className="pattern-layer" style={{backgroundImage: 'url(/assets/images/shape/shape-20.png)'}}></div>
            <span className="big-text">Spending <br />Secure</span>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 card-column">
                        <div className="card-inner">
                            <div className="shape" style={{backgroundImage: 'url(/assets/images/shape/shape-21.png)'}}></div>
                            <figure className="card-box"><img loading="lazy" src="/assets/images/icons/card-2.png" alt="" /></figure>
                            <span className="highlights-one">Cashback Up to: 25%</span>
                            <span className="highlights-two">Average APR: 5.50%</span>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            <div className="sec-title light">
                                <span className="sub-title">Debit Cards</span>
                                <h2>Discover Our <br />Range of Debit Cards</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        
        <ClientsSection modClass="centred sec-pad" light />
        


        
        <TestimonialCarousel modClass="pt_90 pb_90" />
        


        
        <section className="deals-section alternat-2 sec-pad-2 bg-color-4">
            <div className="auto-container">
                <div className="sec-title centred">
                    <span className="sub-title light">Exclusive Offers</span>
                    <h2>Special Deals Just for You</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 deals-block">
                        <div className="deals-block-one">
                            <div className="inner-box">
                                <div className="title-box">
                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-74.png" alt="" /></div>
                                    <span className="category">Medical</span>
                                    <p>Expire On: 25th Oct’24</p>
                                </div>
                                <h3>Get 10% cashback on trust care medical.</h3>
                                <div className="lower-box">
                                    <div className="link-box"><Link to="/index-2"><i className="flaticon-right-arrow"></i>Read More</Link></div>
                                    <div className="share-box">
                                        <div className="share-text"><img loading="lazy" src="/assets/images/icons/icon-79.png" alt="" /><span>Share</span></div>
                                        <ul className="social-links">
                                            <li><Link to="/index-2"><i className="flaticon-facebook"></i></Link></li>
                                            <li><Link to="/index-2"><i className="flaticon-instagram-logo"></i></Link></li>
                                            <li><Link to="/index-2"><i className="flaticon-youtube"></i></Link></li>
                                            <li><Link to="/index-2"><i className="flaticon-vimeo"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 deals-block">
                        <div className="deals-block-one">
                            <div className="inner-box">
                                <div className="title-box">
                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-75.png" alt="" /></div>
                                    <span className="category">Restaurant</span>
                                    <p>Expire On: 31st Oct’24</p>
                                </div>
                                <h3>Get 15% discount on classic cuisine restaurant.</h3>
                                <div className="lower-box">
                                    <div className="link-box"><Link to="/index-2"><i className="flaticon-right-arrow"></i>Read More</Link></div>
                                    <div className="share-box">
                                        <div className="share-text"><img loading="lazy" src="/assets/images/icons/icon-79.png" alt="" /><span>Share</span></div>
                                        <ul className="social-links">
                                            <li><Link to="/index-2"><i className="flaticon-facebook"></i></Link></li>
                                            <li><Link to="/index-2"><i className="flaticon-instagram-logo"></i></Link></li>
                                            <li><Link to="/index-2"><i className="flaticon-youtube"></i></Link></li>
                                            <li><Link to="/index-2"><i className="flaticon-vimeo"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 deals-block">
                        <div className="deals-block-one">
                            <div className="inner-box">
                                <div className="title-box">
                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-76.png" alt="" /></div>
                                    <span className="category">Electronics</span>
                                    <p>Expire On: 31st Oct’24</p>
                                </div>
                                <h3>Tech zone electronics offers 20% discount.</h3>
                                <div className="lower-box">
                                    <div className="link-box"><Link to="/index-2"><i className="flaticon-right-arrow"></i>Read More</Link></div>
                                    <div className="share-box">
                                        <div className="share-text"><img loading="lazy" src="/assets/images/icons/icon-79.png" alt="" /><span>Share</span></div>
                                        <ul className="social-links">
                                            <li><Link to="/index-2"><i className="flaticon-facebook"></i></Link></li>
                                            <li><Link to="/index-2"><i className="flaticon-instagram-logo"></i></Link></li>
                                            <li><Link to="/index-2"><i className="flaticon-youtube"></i></Link></li>
                                            <li><Link to="/index-2"><i className="flaticon-vimeo"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 deals-block">
                        <div className="deals-block-one">
                            <div className="inner-box">
                                <div className="title-box">
                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-77.png" alt="" /></div>
                                    <span className="category">Movies</span>
                                    <p>Expire On: 10th Nov’24</p>
                                </div>
                                <h3>Book Your ticket in starlight cinema & get 5% off.</h3>
                                <div className="lower-box">
                                    <div className="link-box"><Link to="/index-2"><i className="flaticon-right-arrow"></i>Read More</Link></div>
                                    <div className="share-box">
                                        <div className="share-text"><img loading="lazy" src="/assets/images/icons/icon-79.png" alt="" /><span>Share</span></div>
                                        <ul className="social-links">
                                            <li><Link to="/index-2"><i className="flaticon-facebook"></i></Link></li>
                                            <li><Link to="/index-2"><i className="flaticon-instagram-logo"></i></Link></li>
                                            <li><Link to="/index-2"><i className="flaticon-youtube"></i></Link></li>
                                            <li><Link to="/index-2"><i className="flaticon-vimeo"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 newsletter-block">
                        <div className="newsletter-inner">
                            <div className="shape" style={{backgroundImage: 'url(/assets/images/shape/shape-22.png)'}}></div>
                            <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-78.png" alt="" /></div>
                            <div className="newsletter-content">
                                <h3>Newsletter</h3>
                                <p>Subscribe to get news, offers & other updates.</p>
                                <form method="post" action="contact.html">
                                    <div className="form-group">
                                        <div className="icon"><img loading="lazy" src="/assets/images/icons/icon-108.png" alt="" /></div>
                                        <input type="email" name="email" placeholder="Email address..." required />
                                        <button type="submit"><i className="flaticon-right-arrow"></i><span>Subscribe</span></button>
                                    </div>
                                </form>
                                <div className="lower-text"><img loading="lazy" src="/assets/images/icons/icon-81.png" alt="" />Relevant Updates, No Spam.</div>
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
