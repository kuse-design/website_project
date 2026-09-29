import React from 'react'
import PageTitle from '../components/sections/PageTitle'
import { Link } from 'react-router-dom'

export default function UtilityCardsPage(){
  const features = [
    {
      icon: "/assets/images/icons/icon-195.png",
      title: "Naira Denominated",
      description: "Issued and denominated in Naira, so there is no currency conversion for the cardholder to manage."
    },
    {
      icon: "/assets/images/icons/icon-195.png",
      title: "Three-Year Validity",
      description: "The card stays valid for three years, giving you long-term value from a single issue."
    },
    {
      icon: "/assets/images/icons/icon-195.png",
      title: "EMV Chip Security",
      description: "Secured by EMV chip technology, which prevents card cloning and unauthorised access to cardholders' funds."
    },
    {
      icon: "/assets/images/icons/icon-195.png",
      title: "Personalised or Standard",
      description: "Personalise the card to bear the cardholder's name, or purchase it off the shelf as a standard card."
    },
    {
      icon: "/assets/images/icons/icon-195.png",
      title: "Co-Branding Ready",
      description: "Flexible for co-branding with organisations and corporate bodies, including your own logo and colours."
    }
  ]

  const fees = [
    { label: "Card Issuance", amount: "₦2,000 (generic)" },
    { label: "PIN Reissue", amount: "Free" },
    { label: "POS & Web Transactions", amount: "Free" },
    { label: "Minimum Card Balance", amount: "None" },
    { label: "Annual Maintenance Fee", amount: "None" }
  ]

  const whoCanApply = [
    "Walk-in customers",
    "Employers of contract workers",
    "MFB & PMI customers",
    "Organisations seeking co-branded opportunities",
    "Students of higher institutions (for ID and payment)",
    "Citizens / Tax payers"
  ]

  const faqs = [
    {
      question: "How do I apply for the Utility Card?",
      answer: "Visit your nearest Kaizen MFB branch of choice. For corporate requests, please contact your account officer."
    },
    {
      question: "Must I have a Kaizen MFB account before I can apply?",
      answer: "No. The card can be purchased by both existing customers and non-customers of the bank. Simply provide your minimum KYC details — name, address and phone number — along with a valid means of identification or a utility bill."
    },
    {
      question: "How do I fund the card?",
      answer: "You can fund your card via pay direct at any Kaizen MFB branch or any other bank of your choice. You can also fund it online using your debit card to transfer funds to the card number."
    },
    {
      question: "How do I check my card balance?",
      answer: "Your card balance can be checked at any ATM."
    },
    {
      question: "How can I get a statement for my card?",
      answer: "Your card statement will be made available to you on request at our branches or through our support line."
    },
    {
      question: "Can the card be used outside Nigeria?",
      answer: "No. The Utility Card is a purely domestic card."
    },
    {
      question: "Can the card be linked to a customer's existing accounts?",
      answer: "No. The card is not linked to any account — funding is done using the card number."
    },
    {
      question: "What is the maximum amount that can be loaded on this card?",
      answer: "Card balance is regulated at a maximum amount of ₦250,000."
    },
    {
      question: "Can the spending limit be increased on request?",
      answer: "Yes, subject to the regulatory limit. The cardholder will also be required to fulfil full KYC requirements at their branch of request."
    },
    {
      question: "Is there a minimum card balance or annual maintenance fee?",
      answer: "No minimum card balance or annual maintenance fee is applicable to the card."
    }
  ]

  return (
    <>
      <div className="boxed_wrapper">
        <PageTitle title={"Utility Cards"} crumbs={[{ label: "Apply Now", to: "/kaizen-personal" }]} />

        <section className="card-details sec-pad">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-3 col-md-12 col-sm-12 sidebar-side">
                <div className="cards-sidebar pt_110 pb_120">
                  <div className="contact-widget">
                    <div className="inner-box" style={{backgroundImage: 'url(/assets/images/banner/holdingutility.webp)'}}>
                      <h3>Get Your Utility Card</h3>
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
                      <h2>Utility Card</h2>
                      <p>The Kaizen Utility Card is a re-loadable naira-denominated domestic card that requires no banking relationship with cardholders by way of account opening and maintenance.</p>
                    </div>

                    <div className="image-box mb_50">
                      <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                          <figure className="image"><img loading="lazy" src="/assets/images/banner/utility.webp" alt="Utility card" /></figure>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                          <figure className="image"><img loading="lazy" src="/assets/images/banner/kaizen_card_back.webp" alt="Utility card back" /></figure>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features Section */}
                  <div className="content-section mb_70">
                    <div className="text-box mb_35">
                      <h2>Features</h2>
                      <p>Built to be simple to issue, simple to fund and simple to control.</p>
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
                      <p>The Utility Card is accessible to a wide range of individuals and organisations.</p>
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
                        <p>Please visit your nearest Kaizen MFB branch to complete the form and obtain your card. You can also purchase it off the shelf, or have it personalised to bear the cardholder's name.</p>
                        <p className="mt_15"><strong>Bring with you:</strong> Your name, address and phone number, along with a valid means of identification or a utility bill.</p>
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
