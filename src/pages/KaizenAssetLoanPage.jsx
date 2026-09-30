import React from 'react'
import PageTitle from '../components/sections/PageTitle'
import LoanCalculator from '../components/sections/LoanCalculator'

// This product has no loan-type variants, so the page has no types grid — only
// the intro banner, then features and requirements.
const features = [
  'For individuals and registered businesses',
  'Loan range: ₦50,000 – ₦50 Million',
  'Tenor: Up to 12 months',
  'Interest rate: 3.5% per annum',
  'Asset accepted as security',
  'Direct debit mandate'
]

const requirements = [
  '30% Equity contribution',
  'Valid means of identification of applicant and signatories',
  'Certificate of incorporation and business registration (corporate applicants)',
  'Board resolution to borrow, signed by two directors',
  'Passport photographs of Directors and signatories',
  '12 months Bank statements',
  'Evidence of business operation / place of business',
  'Post-dated Cheques',
  'Valuation report of the asset by an independent valuer'
]

const securityRequirements = [
  'Proof of ownership of the asset offered as security',
  'Original vehicle certificate or title deed',
  'Comprehensive insurance cover on the asset',
  'Photocopies of the asset’s registration documents'
]

export default function KaizenAssetLoanPage(){
  return (
    <>
    <div className="boxed_wrapper">
        <PageTitle title={"Kaizen Asset Loan"} crumbs={[{ label: "Apply Now", to: "/kaizen-asset" }]} />

        <section className="loan-types sec-pad">
          <div className="auto-container">
            <div className="loan-header centred mb_30">
              <span className="loan-header-label">Explore And Apply Now</span>
            </div>
            <div className="loan-description centred mb_50">
              <p>This is a loan secured against a specific asset you own, such as a vehicle, property or equipment. You keep the asset and keep using it, while the loan is repaid over an agreed period. Loans are between the sums ₦50,000 - ₦50 Million.</p>
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
                    <span className="sub-title">Asset &amp; Security</span>
                  </div>
                  <ul className="requirements-list">
                    {securityRequirements.map((req, index) => (
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
