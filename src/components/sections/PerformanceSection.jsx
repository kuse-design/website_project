import React from 'react'

export default function PerformanceSection() {
  return (
    <section className="performance-section">
            <div className="pattern-layer" style={{backgroundImage: 'url(/assets/images/shape/shape-38.webp)'}}></div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box mr_100">
                            <div className="sec-title light">
                                <span className="sub-title">Growing Your Wealth</span>
                                <h2>Journey to Wealth Building</h2>
                            </div>
                            <div className="text-box">
                                <p>Power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed.</p>
                            </div>
                            <div className="inner-box">
                                <div className="single-item">
                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-16.png" alt="" /></div>
                                    <p>Available in <br />Different Sizes.</p>
                                </div>
                                <div className="single-item">
                                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-16.png" alt="" /></div>
                                    <p>Affordable Rental <br />Plans.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 progress-column">
                        <div className="progress-content p_relative ml_100">
                            <div className="shape" style={{backgroundImage: 'url(/assets/images/shape/shape-39.webp)'}}></div>
                            <div className="progress-box">
                                <div className="single-progress">
                                    <h5>Starting Balance</h5>
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="20%"></div>
                                        <span>20%</span>
                                    </div>
                                </div>
                                <div className="single-progress">
                                    <h5>Regular Contributions</h5>
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="50%"></div>
                                        <span>50%</span>
                                    </div>
                                </div>
                                <div className="single-progress">
                                    <h5>Interest Accumulation</h5>
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="75%"></div>
                                        <span>75%</span>
                                    </div>
                                </div>
                                <div className="single-progress">
                                    <h5>Achieve Your Goal</h5>
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="100%"></div>
                                        <span>100%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="percentage-box">
                                <span className="text">0%</span>
                                <span className="text">20%</span>
                                <span className="text">40%</span>
                                <span className="text">60%</span>
                                <span className="text">80%</span>
                                <span className="text">100%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}
