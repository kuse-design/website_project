import React from 'react'
import PageTitle from '../components/sections/PageTitle'
import LoanCalculator from '../components/sections/LoanCalculator'

const types = [
  'Micro Business Loan',
  'Market Trader Loan',
  'Artisan Loan',
  'Petty Trader Loan'
]

const features = [
  '10% Equity Contribution',
  'Stock Hypothecation',
  'Loan period – 30 - 180 days',
  'Interest rate: 5% flat',
  'Upfront fees: 4%'
]

const requirements = [
  'Evidence of place of Business (Shop rent)',
  'Cash flow analysis / statement of account (6 Months)',
  'Utility Bill of place of business and residence',
  'Passport photograph and valid means of identification',
  'Guarantors'
]

const guarantorRequirements = [
  'One passport photograph and valid means of identification',
  'Evidence of being employed or being a business owner',
  'Home utility Bill',
  'Executed Personal Guarantee form'
]

export default function KaizenMicroLoanPage(){
  return (
    <>
    <div className="boxed_wrapper">
        <PageTitle title={"Kaizen Micro Loan"} crumbs={[{ label: "Apply Now", to: "/kaizen-micro" }]} />

        <section className="loan-types sec-pad">
          <div className="auto-container">
            <div className="loan-header centred mb_30">
              <span className="loan-header-label">Explore And Apply Now</span>
            </div>
            <div className="loan-description centred mb_50">
              <p>These are loans designed for small scale businesses and the Loan amount is between the sum of ₦50,000 – ₦5Million.</p>
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
              <div className="col-lg-7 col-md-12 col-sm-12 requirements-column">
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
              <div className="col-lg-5 col-md-12 col-sm-12 guarantor-column">
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