import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Tabs from '../ui/Tabs'

const LOAN_TYPES = [
  {
    id: 'tab-21',
    label: 'Kaizen Personal Loan',
    amount: { min: 50000, max: 5000000, default: 500000, labels: ['₦50,000', '₦5 Million'] },
    term: { min: 6, max: 12, default: 12, labels: ['6 Months', '12 Months'] },
    rate: { value: '3.5%' }
  },
  {
    id: 'tab-22',
    label: 'Kaizen Enterprise Loan',
    amount: { min: 50000, max: 25000000, default: 1000000, labels: ['₦50,000', '₦25 Million'] },
    term: { min: 6, max: 12, default: 12, labels: ['6 Months', '12 Months'] },
    rate: { value: '3.5%' }
  },
  {
    id: 'tab-23',
    label: 'Kaizen Asset Loan',
    amount: { min: 25000000, max: 500000000, default: 50000000, labels: ['₦25 Million', '₦500 Million'] },
    term: { min: 6, max: 12, default: 12, labels: ['6 Months', '12 Months'] },
    rate: { value: '3.5%' }
  },
  {
    id: 'tab-24',
    label: 'Kaizen Micro Loan',
    amount: { min: 50000, max: 5000000, default: 200000, labels: ['₦50,000', '₦5 Million'] },
    term: { min: 6, max: 12, default: 6, labels: ['6 Months', '12 Months'] },
    rate: { value: '4%' }
  },
]

const formatCurrency = (value) => {
  if (value >= 1000000) {
    return `₦${(value / 1000000).toFixed(value % 1000000 === 0 ? 0 : 1)} Million`
  }
  if (value >= 1000) {
    return `₦${(value / 1000).toFixed(0)}K`
  }
  return `₦${value.toLocaleString()}`
}

const calculateEMI = (principal, rate, months) => {
  const monthlyRate = rate / 100 / 12
  if (monthlyRate === 0) return principal / months
  const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1)
  return emi
}

const calculateInterest = (emi, months, principal) => {
  return (emi * months) - principal
}

const LEFT_CONTENT = (
  <div className="left-content mr_30">
    <div className="sec-title">
      <span className="sub-title">Loan Calculator</span>
      <h2>Flexible <br />Online Loan Calculator</h2>
      <p>Estimate your loan payments quickly & easily with our calculator.</p>
    </div>
    <div className="lower-text">
      <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-31.png" alt="" /></div>
      <h5>Loan Questions? Check Our <Link to="/faq">Faq's</Link> Page.</h5>
    </div>
  </div>
)

export default function LoanCalculator() {
  console.log('NEW_LOAN_CALCULATOR_CODE_EXECUTING');
  const [activeTab, setActiveTab] = useState('tab-21')
  const [amount, setAmount] = useState(LOAN_TYPES[0].amount.default)
  const [term, setTerm] = useState(LOAN_TYPES[0].term.default)

  const currentLoan = LOAN_TYPES.find(l => l.id === activeTab)

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    const loan = LOAN_TYPES.find(l => l.id === tabId)
    setAmount(loan.amount.default)
    setTerm(loan.term.default)
  }

  const amountPercent = ((amount - currentLoan.amount.min) / (currentLoan.amount.max - currentLoan.amount.min)) * 100
  const termPercent = ((term - currentLoan.term.min) / (currentLoan.term.max - currentLoan.term.min)) * 100

  const emi = calculateEMI(amount, parseFloat(currentLoan.rate.value), term)
  const interest = calculateInterest(emi, term, amount)

  const RIGHT_CONTENT = (
    <div className="right-content">
      <div className="progress-block-one">
        <div className="title-box">
          <h5>Loan Amount</h5>
          <h6>{formatCurrency(amount)}</h6>
        </div>
        <div className="inner-box">
          <div className="text-box">
            <span>{currentLoan.amount.labels[0]}</span>
            <span>{currentLoan.amount.labels[1]}</span>
          </div>
          <div className="bar">
            <input
              type="range"
              className="bar-inner count-bar"
              min={currentLoan.amount.min}
              max={currentLoan.amount.max}
              step={10000}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
            <div className="bar-fill" style={{ width: `${amountPercent}%` }}></div>
          </div>
        </div>
      </div>
      <div className="progress-block-one">
        <div className="title-box">
          <h5>Loan Term</h5>
          <h6>{term} Months</h6>
        </div>
        <div className="inner-box">
          <div className="text-box">
            <span>{currentLoan.term.labels[0]}</span>
            <span>{currentLoan.term.labels[1]}</span>
          </div>
          <div className="bar">
            <input
              type="range"
              className="bar-inner count-bar"
              min={currentLoan.term.min}
              max={currentLoan.term.max}
              step={1}
              value={term}
              onChange={(e) => setTerm(Number(e.target.value))}
            />
            <div className="bar-fill" style={{ width: `${termPercent}%` }}></div>
          </div>
        </div>
      </div>
      <div className="progress-block-one">
        <div className="title-box">
          <h5>Interest Rate</h5>
          <h6>{currentLoan.rate.value}</h6>
        </div>
        <div className="inner-box">
          <div className="text-box">
            <span>Fixed Rate</span>
            <span>Per Annum</span>
          </div>
          <div className="bar">
            <div className="bar-inner count-bar" data-percent="100"></div>
          </div>
        </div>
      </div>
    </div>
  )

  const AMOUNT_BOX = (
    <div className="amount-box">
      <div className="emi-box centred">
        <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-32.png" alt="" /></div>
        <h5>Monthly EMI</h5>
        <h3>₦{emi.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>
        <div className="btn-box"><Link to="/"><span>Apply Online</span></Link></div>
      </div>
      <div className="interest-amount">
        <div className="single-amount">
          <div className="icon-box"><i className="flaticon-sparkle"></i></div>
          <h5>Total Interest</h5>
          <span>₦{interest.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>
        <div className="single-amount">
          <div className="icon-box"><i className="flaticon-sparkle"></i></div>
          <h5>Total Payment</h5>
          <span>₦{(emi * term).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        </div>
      </div>
    </div>
  )

  return (
    <section className="calculator-section pt_120 pb_120">
      <figure className="image-layer">
        <img loading="lazy" src="/assets/images/resource/men-2.webp" alt="" />
      </figure>
      <div className="calculator-container">
        <div className="inner-container">
          <Tabs className="tabs-box">
            <div className="tab-btn-box">
              <div className="tab-btns tab-buttons clearfix">
                {LOAN_TYPES.map((tab) => (
                  <div
                    className={`tab-btn ${activeTab === tab.id ? 'active-btn' : ''}`}
                    key={tab.id}
                    data-tab={`#${tab.id}`}
                    onClick={() => handleTabChange(tab.id)}
                  >
                    <h4>{tab.label}</h4>
                  </div>
                ))}
              </div>
            </div>
            <div className="tabs-content">
              {LOAN_TYPES.map((tab) => (
                <div className={`tab ${activeTab === tab.id ? 'active-tab' : ''}`} id={tab.id} key={tab.id}>
                  <div className="row clearfix">
                    <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                      <div className="content-box">
                        <div className="row clearfix">
                          <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                            {LEFT_CONTENT}
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 right-column">
                            {RIGHT_CONTENT}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 amount-column">
                      {AMOUNT_BOX}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
