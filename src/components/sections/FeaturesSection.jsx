import React from 'react'
import { Link } from 'react-router-dom'

export default function FeaturesSection({ heading = 'Key Savings Account Features' }) {
  return (
    <section className="features-section bg-color-1 centred">
      <div className="auto-container">
        <div className="sec-title">
          <span className="sub-title">Features</span>
          <h2>{heading}</h2>
        </div>
        <div className="row clearfix">
          <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
            <div className="feature-block-one">
              <div className="inner-box">
                <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-179.png" alt="" /></div>
                <h3><Link to="/account-details">SMS Alerts</Link></h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
            <div className="feature-block-one">
              <div className="inner-box">
                <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-180.png" alt="" /></div>
                <h3><Link to="/account-details">NDIC Insured</Link></h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
            <div className="feature-block-one">
              <div className="inner-box">
                <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-181.png" alt="" /></div>
                <h3><Link to="/account-details">Free ATM Access</Link></h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
            <div className="feature-block-one">
              <div className="inner-box">
                <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-182.png" alt="" /></div>
                <h3><Link to="/account-details">Mobile App</Link></h3>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
            <div className="feature-block-one">
              <div className="inner-box">
                <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-183.png" alt="" /></div>
                <h3><Link to="/account-details">24/7 Online Banking</Link></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}