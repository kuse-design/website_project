import React from 'react'
import PageTitle from '../components/sections/PageTitle'
import LoanCalculator from '../components/sections/LoanCalculator'

const types = [
  'LPO financing',
  'Overdraft facility',
  'Term Loan',
  'Invoice Discounting'
]

const features = [
  'For registered Organizations',
  'No Equity Contribution required',
  'Tenor: 30 – 365 days',
  'Interest rate: 3.5% flat',
  'Direct debit mandate',
  'Upfront fees: 4%'
]

const requirements = [
  'CAC documents',
  'Board resolution to open account and borrow, signed by two directors and sealed',
  'Passport photographs of Directors and signatories to the account',
  '12 months Bank statements',
  'Valid means of identifications of Directors and Signatories to the account',
  'Guarantors',
  'Evidence of business operation / place of business',
  'Collateral – 200% of loan amount',
  'Post-dated Cheques'
]

const guarantorRequirements = [
  'A passport photograph',
  'Valid means of identification',
  'Home utility Bill',
  'Executed Personal Guarantee form'
]

export default function KaizenEnterpriseLoanPage(){
  return (
    <>
    <div className="boxed_wrapper">
        <PageTitle title={"Kaizen Enterprise Loan"} crumbs={[{ label: "Apply Now", to: "/kaizen-enterprise" }]} />

        <section className="loan-types sec-pad">
          <div className="auto-container">
            <div className="loan-header centred mb_30">
              <span className="loan-header-label">Explore And Apply Now</span>
            </div>
            <div className="loan-description centred mb_50">
              <p>This is a loan for business owners, small and medium business owners as a form working capital, for augmentation of business resources. They are loans between the sums ₦50,000 - ₦25Million.</p>
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