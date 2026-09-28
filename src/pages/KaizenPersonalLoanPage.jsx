import React from 'react'
import PageTitle from '../components/sections/PageTitle'
import LoanCalculator from '../components/sections/LoanCalculator'

const types = [
  'Salary Advance',
  'Personal Loan',
  'Consumer Loan',
  'Emergency Loan'
]

const features = [
  '6 months of working in a structured organization',
  'Loan amount between ₦100,000 – ₦5,000,000',
  'Competitive Interest rate',
  'Loan period: 30 – 365 days',
  'Direct debit Mandate for collection of repayment'
]

const requirements = [
  'Employment Letter/Contract of Employment',
  'Passport photographs (2)',
  '6 months statement of account',
  'Valid means of identification and utility bill',
  'Place of work identification / Email verification',
  'Guarantor(s)'
]

const guarantorRequirements = [
  'Passport photograph and valid means of identification',
  'Utility bill',
  'Evidence of place or work/business'
]

export default function KaizenPersonalLoanPage(){
  return (
    <>
    <div className="boxed_wrapper">
        <PageTitle title={"Kaizen Personal Loan"} crumbs={[{ label: "Apply Now", to: "/kaizen-personal" }]} />

        <section className="loan-types sec-pad">
          <div className="auto-container">
            <div className="loan-header centred mb_30">
              <span className="loan-header-label">Explore And Apply Now</span>
            </div>
            <div className="loan-description centred mb_50">
              <p>These are loans designed for individuals that are gainfully employed, that work in a structured organization and get remuneration monthly.</p>
            </div>
            <div className="sec-title centred mb_30">
              <span className="sub-title">Loan Types</span>
            </div>
            <div className="row clearfix types-grid">
              {types.map((type, index) => (
                <div key={index} className="col-lg-3 col-md-6 col-sm-12 type-block">
                  <div className="type-item">
                    <div className="icon-box">
                      <img loading="lazy" src="/assets/images/icons/icon-16.png" alt="" />
                    </div>
                    <p>{type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="loan-features sec-pad">
          <div className="auto-container">
            <div className="sec-title centred">
              <span className="sub-title">Loan Features</span>
            </div>
            <div className="row clearfix features-grid">
              {features.map((feature, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-12 feature-block">
                  <div className="feature-item">
                    <div className="icon-box">
                      <img loading="lazy" src="/assets/images/icons/icon-16.png" alt="" />
                    </div>
                    <p>{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="loan-requirements sec-pad-2">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 requirements-column">
                <div className="requirements-card">
                  <div className="sec-title">
                    <span className="sub-title">Requirements</span>
                  </div>
                  <ul className="requirements-list">
                    {requirements.map((req, index) => (
                      <li key={index}>
                        <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-16.png" alt="" /></div>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 guarantor-column">
                <div className="requirements-card guarantor-card">
                  <div className="sec-title">
                    <span className="sub-title">Guarantor Requirements</span>
                  </div>
                  <ul className="requirements-list">
                    {guarantorRequirements.map((req, index) => (
                      <li key={index}>
                        <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-16.png" alt="" /></div>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <LoanCalculator />

    </div>
    </>
  )
}