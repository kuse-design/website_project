import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LOAN_TYPES = [
  {
    id: 'personal',
    label: 'Kaizen Personal Loan',
    amount: { min: 50000, max: 5000000, default: 500000, labels: ['₦50,000', '₦5 Million'] },
    term: { min: 1, max: 12, default: 12, labels: ['1 Month', '12 Months'] },
    rate: { value: '3.5%' }
  },
  {
    id: 'enterprise',
    label: 'Kaizen Enterprise Loan',
    amount: { min: 50000, max: 25000000, default: 1000000, labels: ['₦50,000', '₦25 Million'] },
    term: { min: 1, max: 12, default: 12, labels: ['1 Month', '12 Months'] },
    rate: { value: '3.5%' }
  },
  {
    id: 'asset',
    label: 'Kaizen Asset Loan',
    amount: { min: 25000000, max: 500000000, default: 50000000, labels: ['₦25 Million', '₦500 Million'] },
    term: { min: 1, max: 12, default: 12, labels: ['1 Month', '12 Months'] },
    rate: { value: '3.5%' }
  },
  {
    id: 'micro',
    label: 'Kaizen Micro Loan',
    amount: { min: 50000, max: 5000000, default: 200000, labels: ['₦50,000', '₦5 Million'] },
    term: { min: 1, max: 12, default: 6, labels: ['1 Month', '12 Months'] },
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

/**
 * Simple interest calculation per Kaizen MFB specification:
 * Monthly Repayment = (Principal + (Principal × Rate × months)) / months
 * Total Interest = Principal × Rate × months
 * Total Payment = Principal + Total Interest
 * Rate is annual (e.g., 3.5% = 0.035)
 */
const calculateResults = (principal, annualRatePercent, months) => {
  const rate = annualRatePercent / 100
  const safeMonths = Math.max(1, months)
  const totalInterest = principal * rate * safeMonths
  const totalPayment = principal + totalInterest
  const emi = totalPayment / safeMonths
  return { emi, totalInterest, totalPayment }
}

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

/** Step size that keeps huge ranges (e.g. ₦25M–₦500M) smooth to drag. */
const adaptiveStep = (min, max) => {
  const raw = (max - min) / 200
  if (!(raw > 0)) return 1
  return Math.pow(10, Math.floor(Math.log10(raw)))
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
  const [activeTab, setActiveTab] = useState(LOAN_TYPES[0].id)
  const [amount, setAmount] = useState(LOAN_TYPES[0].amount.default)
  const [term, setTerm] = useState(LOAN_TYPES[0].term.default)

  const currentLoan = LOAN_TYPES.find((l) => l.id === activeTab) ?? LOAN_TYPES[0]

  const handleTabChange = (tabId) => {
    if (tabId === activeTab) return
    const loan = LOAN_TYPES.find((l) => l.id === tabId)
    if (!loan) return
    setActiveTab(tabId)
    setAmount(clamp(loan.amount.default, loan.amount.min, loan.amount.max))
    setTerm(clamp(loan.term.default, loan.term.min, loan.term.max))
  }

  const amountSpan = currentLoan.amount.max - currentLoan.amount.min
  const termSpan = currentLoan.term.max - currentLoan.term.min
  const amountPercent = amountSpan > 0 ? ((amount - currentLoan.amount.min) / amountSpan) * 100 : 100
  const termPercent = termSpan > 0 ? ((term - currentLoan.term.min) / termSpan) * 100 : 100

  const { emi, totalInterest, totalPayment } = calculateResults(
    amount,
    parseFloat(currentLoan.rate.value),
    term
  )
  const fmt = (n) =>
    n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })

  return (
    <section className="calculator-section pt_120 pb_120">
      {/* Mobile-first: image as block element first */}
      <div className="mobile-image-block">
        <img loading="lazy" src="/assets/images/resource/men-2.webp" alt="" />
      </div>
      {/* Desktop: absolutely positioned image layer */}
      <figure className="image-layer">
        <img loading="lazy" src="/assets/images/resource/men-2.webp" alt="" />
      </figure>
      <div className="auto-container">
        <div className="inner-container">
          {/* NOTE: plain div, not the <Tabs> wrapper — React owns tab state here.
              (No data-tab attributes, so the legacy DOM tab binder ignores this widget.) */}
          <div className="tabs-box">
            <div className="tab-btn-box">
              <div className="tab-btns tab-buttons clearfix" role="tablist">
                {LOAN_TYPES.map((tab) => (
                  <button
                    type="button"
                    className={`tab-btn ${activeTab === tab.id ? 'active-btn' : ''}`}
                    key={tab.id}
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    style={{ border: 'none', font: 'inherit' }}
                  >
                    <h4>{tab.label}</h4>
                  </button>
                ))}
              </div>
            </div>
            <div className="tabs-content">
              <div className="tab active-tab" role="tabpanel">
                <div className="row clearfix">
                  <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                    <div className="content-box">
                      <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                          {LEFT_CONTENT}
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 right-column">
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
                                  <div className="bar-fill" style={{ width: `${amountPercent}%` }}></div>
                                  <input
                                    type="range"
                                    aria-label="Loan amount"
                                    min={currentLoan.amount.min}
                                    max={currentLoan.amount.max}
                                    step={adaptiveStep(currentLoan.amount.min, currentLoan.amount.max)}
                                    value={clamp(amount, currentLoan.amount.min, currentLoan.amount.max)}
                                    onChange={(e) => setAmount(Number(e.target.value))}
                                  />
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
                                  <div className="bar-fill" style={{ width: `${termPercent}%` }}></div>
                                  <input
                                    type="range"
                                    aria-label="Loan term in months"
                                    min={currentLoan.term.min}
                                    max={currentLoan.term.max}
                                    step={1}
                                    value={clamp(term, currentLoan.term.min, currentLoan.term.max)}
                                    onChange={(e) => setTerm(Number(e.target.value))}
                                  />
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
                                  <div className="bar-fill" style={{ width: '100%' }}></div>
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
                        <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-32.png" alt="" /></div>
                        <h5>Monthly Repayment</h5>
                        <h3>₦{fmt(emi)}</h3>
                        <div className="btn-box"><Link to="/"><span>Apply Online</span></Link></div>
                      </div>
                      <div className="interest-amount">
                        <div className="single-amount">
                          <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                          <h5>Total Interest</h5>
                          <span>₦{fmt(totalInterest)}</span>
                        </div>
                        <div className="single-amount">
                          <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                          <h5>Total Payment</h5>
                          <span>₦{fmt(totalPayment)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
