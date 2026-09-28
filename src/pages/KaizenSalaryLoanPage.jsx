import React from 'react'
import PageTitle from '../components/sections/PageTitle'
import LoanCalculator from '../components/sections/LoanCalculator'

const types = [
  'Salary Advance',
  'Group Salary Loan',
  'Employee Loan',
  'Payroll Loan'
]

const features = [
  'The organization signs an indemnity to ensure collection of the loan repayment from the employees account from source for onward remittance to the Bank',
  'The Parent Organization must have an account with the Bank',
  'This is open ONLY to Private Organizations',
  'Minimum work force – 5 employees',
  'Loan period: 30 – 180 days',
  'Interest: 4% flat',
  'Attractive fee'
]

const requirements = [
  'Letter of introduction of the employee from the Organization, which must include the staff salary',
  '6 Months statement of account',
  'Employment Letter / Contract of employment',
  'Passport Photograph and utility Bill',
  'Valid means of identification / Work Identification',
  'Guarantors (Internal and External)'
]

export default function KaizenSalaryLoanPage(){
  return (
    <>
    <div className="boxed_wrapper">
        <PageTitle title={"Kaizen Salary Loan"} crumbs={[{ label: "Apply Now", to: "/kaizen-salary" }]} />

        <section className="loan-types sec-pad">
          <div className="auto-container">
            <div className="loan-header centred mb_30">
              <span className="loan-header-label">Explore And Apply Now</span>
            </div>
            <div className="loan-description centred mb_50">
              <p>This loan is designed for groups of employees of structured organizations that have need for organized loan facilities.</p>
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
              <div className="col-lg-12 col-md-12 col-sm-12 requirements-column">
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
            </div>
          </div>
        </section>

        <LoanCalculator />

    </div>
    </>
  )
}