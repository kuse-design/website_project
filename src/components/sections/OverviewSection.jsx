import React from 'react'
import { Link } from 'react-router-dom'

export default function OverviewSection({ h2 = 'Savings Accounts', eligibility = 'Savings Account Eligibility', showRate = true, showEligibility = true, description = 'Fail in their duty through weakness of will which is the same saying through shrinking from toil and pain cases are perfectly simple and occurs that pleasures be repudiated to distinguish.' }) {
  return (
    <section className="overview-section sec-pad">
      <div className="auto-container">
        <div className="row clearfix">
          <div className={`col-lg-${showEligibility ? '6' : '12'} col-md-12 col-sm-12 content-column`}>
            <div className="content-box">
              <div className="sec-title">
                <span className="sub-title">Overview</span>
                <h2>Earn More with <br />Our {h2}</h2>
              </div>
              <div className="text-box">
                {showRate && (
                  <>
                    <h4>Get up to</h4>
                    <h2>8.25% <span>Interest per annum</span></h2>
                  </>
                )}
                <p>{description}</p>
              </div>
              <div className="btn-box">
                <a className="theme-btn" href="https://kaizenmfb.qoreonline.com/" target="_blank" rel="noreferrer"><span>Open Your Account</span></a>
              </div>
            </div>
          </div>
          {showEligibility && (
            <div className="col-lg-6 col-md-12 col-sm-12 inner-column">
              <div className="inner-box">
                <h3>{eligibility}</h3>
                <div className="inner-content clearfix">
                  <div className="shape" style={{ backgroundImage: 'url(/assets/images/shape/shape-36.webp)' }}></div>
                  <div className="shape-2"></div>
                  <div className="single-item">
                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-174.png" alt="" /></div>
                    <h4>Age Requirements</h4>
                    <div className="text-box">
                      <p>Valid ID & proof <br />of address required for account verification.</p>
                    </div>
                  </div>
                  <div className="single-item">
                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-175.png" alt="" /></div>
                    <h4>ID & Documents</h4>
                    <div className="text-box">
                      <p>Valid ID & proof <br />of address required for account verification.</p>
                    </div>
                  </div>
                  <div className="single-item">
                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-176.png" alt="" /></div>
                    <h4>Financial Criteria</h4>
                    <div className="text-box">
                      <p>Valid ID & proof <br />of address required for account verification.</p>
                    </div>
                  </div>
                  <div className="single-item">
                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-177.png" alt="" /></div>
                    <h4>Residency & Citizenship</h4>
                    <div className="text-box">
                      <p>Valid ID & proof <br />of address required for account verification.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}