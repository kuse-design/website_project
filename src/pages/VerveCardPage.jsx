import React from 'react'
import PageTitle from '../components/sections/PageTitle'
import { Link } from 'react-router-dom'

export default function VerveCardPage(){
  const faqs = [
    {
      question: "How do I apply for my Verve Prepaid Card?",
      answer: "Visit the nearest Kaizen MFB branch of choice. For Corporate requests, please contact your account officer."
    },
    {
      question: "Must I have a Kaizen MFB account before I can apply for the Verve Prepaid Card?",
      answer: "Verve Prepaid Card can be purchased by existing customers and non-customers of the bank. Simply provide your minimum KYC details i.e. Name, Address and Phone number and provide a valid means of ID or Utility bill."
    },
    {
      question: "How do I fund my Verve Prepaid Card?",
      answer: "You can fund your card via pay direct at any Kaizen MFB branch or other banks of choice, you can also fund your card via Quick teller online using your debit card to transfer funds to the card number."
    },
    {
      question: "How do I check my Verve Prepaid Card balance?",
      answer: "Card balance can be checked on the ATM."
    },
    {
      question: "How can I get my Verve Prepaid Card Statement?",
      answer: "Your Verve Prepaid card statement will be made available to you on request at our branches or Kaizen Contact."
    },
    {
      question: "Can the Verve Prepaid Card be used outside Nigeria?",
      answer: "No, the Verve Prepaid Card is a purely domestic card."
    },
    {
      question: "Can the card be linked to a customer's existing accounts?",
      answer: "Cardholder will also be required to fulfil full KYC requirement at his/her branch of request."
    },
    {
      question: "Is there any minimum card balance and annual maintenance fee?",
      answer: "No minimum card balance / annual maintenance fee is applicable to card."
    }
  ]

  const features = [
    {
      icon: "/assets/images/icons/icon-195.png",
      title: "Easy to Get & Use",
      description: "No credit check is required to get the card. Simple onboarding process."
    },
    {
      icon: "/assets/images/icons/icon-195.png",
      title: "Fund Protection",
      description: "Non-exposure of unintended funds and accounts for enhanced security."
    },
    {
      icon: "/assets/images/icons/icon-195.png",
      title: "Convenient Loading",
      description: "Load funds at any Kaizen MFB branch or via Quickteller online."
    },
    {
      icon: "/assets/images/icons/icon-195.png",
      title: "Multi-Channel Usage",
      description: "Make purchases online, pay bills, and access cash at ATMs nationwide."
    },
    {
      icon: "/assets/images/icons/icon-195.png",
      title: "Secure Online Transactions",
      description: "Extra protection for web-based transactions with Safe Token OTP."
    },
    {
      icon: "/assets/images/icons/icon-195.png",
      title: "24/7 Access",
      description: "Round-the-clock access to your funds across all payment channels."
    }
  ]

  const benefits = [
    {
      icon: "/assets/images/icons/icon-195.png",
      title: "Access Control Ready",
      description: "Can be enabled for access control with MI-fare chip embedded."
    },
    {
      icon: "/assets/images/icons/icon-195.png",
      title: "Staff Identity & Payment",
      description: "Ideal as a staff card for identity, access control, and payment of incentives."
    },
    {
      icon: "/assets/images/icons/icon-195.png",
      title: "Campus Cashless Payments",
      description: "Drive cashless payments of goods and services on campus environments."
    }
  ]

  const fees = [
    { label: "Card Issuance", amount: "₦2,000 (generic)" },
    { label: "PIN Reissue", amount: "Free" },
    { label: "POS & Web Transactions", amount: "Free" }
  ]

  const whoCanApply = [
    "Walk-in customers",
    "Employers of contract workers",
    "MFB & PMI Customers",
    "Organizations seeking co-branded opportunities",
    "Students of higher institutions (as ID / payment)",
    "Citizens / Tax payers"
  ]

  return (
    <>
      <div className="boxed_wrapper">
        <PageTitle title={"Verve Card"} crumbs={[{ label: "Cards", to: "/card-details-verve" }, { label: "Verve Card" }]} />

        <section className="card-details sec-pad">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-3 col-md-12 col-sm-12 sidebar-side">
                <div className="cards-sidebar pt_110 pb_120">
                  <div className="contact-widget">
                    <div className="inner-box" style={{backgroundImage: 'url(/assets/images/banner/holdingcard.webp)'}}>
                      <h3>Get Your Verve Card</h3>
                      <span className="text">Issued within 24 Hours</span>
                      <Link to="/contact" className="theme-btn btn-style-two"><span>Apply Now</span></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-9 col-md-12 col-sm-12 content-side">
                <div className="card-details-content pt_110 pb_120">

                  {/* Description Section */}
                  <div className="content-section mb_70">
                    <div className="text-box mb_45">
                      <h6>About This Card</h6>
                      <h2>Verve Card</h2>
                      <p>Verve card is a re-loadable naira-denominated domestic card that requires no banking relationship with cardholders by way of account opening and maintenance.</p>
                      <p>It is acceptable for payment of goods & services on all payment channels – domestic sites, POS and ATM in Nigeria. Simply top-up your card with a desired amount and you can use it on all payment channels.</p>
                    </div>

                    <div className="image-box mb_50">
                      <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                          <figure className="image"><img loading="lazy" src="/assets/images/banner/kaizen_card_front.webp" alt="Kaizen Verve Card front" /></figure>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                          <figure className="image"><img loading="lazy" src="/assets/images/banner/kaizen_card_back.webp" alt="Kaizen Verve Card back" /></figure>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features Section */}
                  <div className="content-section mb_70">
                    <div className="text-box mb_35">
                      <h2>Features</h2>
                      <p>Enjoy a range of features designed for convenience, security, and everyday spending.</p>
                    </div>
                    <div className="row clearfix">
                      {features.map((feature, index) => (
                        <div key={index} className="col-lg-6 col-md-6 col-sm-12 single-column">
                          <div className="single-item">
                            <div className="icon-box"><img loading="lazy" src={feature.icon} alt="" /></div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits Section */}
                  <div className="content-section mb_70">
                    <div className="text-box mb_35">
                      <h2>Benefits</h2>
                      <p>Additional advantages for corporate and institutional use cases.</p>
                    </div>
                    <div className="row clearfix">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-12 single-column">
                          <div className="single-item">
                            <div className="icon-box"><img loading="lazy" src={benefit.icon} alt="" /></div>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cost & Fees Section */}
                  <div className="content-section mb_70">
                    <div className="text-box mb_35">
                      <h2>Cost & Fees</h2>
                      <p>Transparent pricing with no hidden charges.</p>
                    </div>
                    <div className="table-responsive">
                      <table className="fees-table">
                        <thead>
                          <tr>
                            <th>Service</th>
                            <th>Fee</th>
                          </tr>
                        </thead>
                        <tbody>
                          {fees.map((fee, index) => (
                            <tr key={index}>
                              <td>{fee.label}</td>
                              <td>{fee.amount}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="mt_20"><strong>Note:</strong> All fees are inclusive of applicable taxes. VAT at 7.5% applies to fees as stipulated by the Nigerian government.</p>
                  </div>

                  {/* Who Can Apply Section */}
                  <div className="content-section mb_70">
                    <div className="text-box mb_35">
                      <h2>Who Can Apply?</h2>
                      <p>The Verve Card is accessible to a wide range of individuals and organizations.</p>
                    </div>
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <ul className="list-style-two">
                          {whoCanApply.slice(0, 3).map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <ul className="list-style-two">
                          {whoCanApply.slice(3).map((item, index) => (
                            <li key={index + 3}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* How to Apply Section */}
                  <div className="content-section mb_70">
                    <div className="text-box mb_35">
                      <h2>How to Apply</h2>
                    </div>
                    <div className="apply-box">
                      <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-86.png" alt="" /></div>
                      <div className="text-content">
                        <h4>Visit Kaizen Microfinance Bank</h4>
                        <p>Please visit your nearest Kaizen MFB branch to complete the form and obtain your card.</p>
                        <p className="mt_15"><strong>Address:</strong> 154 Awolowo Road, Ikoyi, Lagos, 106104</p>
                        <p><strong>Phone:</strong> <a href="tel:+2349099900099">+234-909-990-0099</a></p>
                        <p><strong>Email:</strong> <a href="mailto:info@kaizenmfb.com">info@kaizenmfb.com</a></p>
                        <p className="mt_15"><strong>For Corporate Requests:</strong> Contact your account officer.</p>
                      </div>
                    </div>
                  </div>

                  {/* FAQ Section */}
                  <div className="content-section">
                    <div className="text-box mb_35">
                      <h2>Frequently Asked Questions</h2>
                    </div>
                    <div className="accordion-box">
                      {faqs.map((faq, index) => (
                        <div key={index} className="accordion block">
                          <div className="acc-btn">
                            <h4>{faq.question}</h4>
                          </div>
                          <div className="acc-content">
                            <div className="content">
                              <p>{faq.answer}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}