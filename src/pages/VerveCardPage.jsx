import React from 'react'
import PageTitle from '../components/sections/PageTitle'
import { Link } from 'react-router-dom'

export default function VerveCardPage(){
  const faqs = [
    {
      question: "Can my Verve Card work on the web?",
      answer: "Yes, but only on websites that display the Interswitch or Verve acceptance mark."
    },
    {
      question: "Where can I use my Verve Card?",
      answer: "Your card is accepted at all payment channels and bank branches connected to the Interswitch network in Nigeria, and wherever the Interswitch or Verve logo is displayed."
    },
    {
      question: "How do I activate my Verve Card?",
      answer: "You can activate your card by setting your preferred PIN at our Customer Service Desk before you leave the branch, or by changing your PIN at any Kaizen MFB ATM."
    },
    {
      question: "What is my PIN?",
      answer: "Your PIN, or Personal Identification Number, is the four-digit number known only to you. It is used to authorise transactions at ATMs and other payment devices."
    },
    {
      question: "Can I use my Verve Card to shop on international websites?",
      answer: "The Verve Card is a domestic card and works only on websites bearing the Interswitch or Verve acceptance mark."
    },
    {
      question: "How do I shop online with my card?",
      answer: "Choose the item you wish to purchase, proceed to checkout, then enter your card number, expiry date, the CVV printed beside the signature panel, and your PIN using the secure keypad on screen."
    },
    {
      question: "How do I monitor transactions on my card?",
      answer: "You can check every card transaction through Kaizen internet banking or the Kaizen mobile banking app."
    },
    {
      question: "What if I need help with my card?",
      answer: "Our support team is available 24 hours a day for all card-related enquiries and complaints. Please reach out to us and we will assist."
    }
  ]

  const features = [
    {
      icon: "/assets/images/icons/icon-195.png",
      title: "Chip & PIN Secured",
      description: "Built on chip and PIN technology for enhanced protection of your funds and stronger authentication at every terminal."
    },
    {
      icon: "/assets/images/icons/icon-195.png",
      title: "Naira Denominated",
      description: "Issued and denominated in Naira, keeping your everyday spending simple and predictable."
    },
    {
      icon: "/assets/images/icons/icon-195.png",
      title: "Wide Domestic Acceptance",
      description: "Accepted wherever the Interswitch or Verve logo is displayed, across all connected payment channels in Nigeria."
    },
    {
      icon: "/assets/images/icons/icon-195.png",
      title: "24/7 Account Monitoring",
      description: "Track every card transaction through Kaizen internet banking and the Kaizen mobile banking app."
    },
    {
      icon: "/assets/images/icons/icon-195.png",
      title: "Always-On Support",
      description: "Round-the-clock access to support for all card-related enquiries and complaints."
    },
    {
      icon: "/assets/images/icons/icon-195.png",
      title: "One Card, Every Channel",
      description: "Withdraw at ATMs and pay at POS terminals, on the web and through value-added services from a single card."
    }
  ]

  const benefits = [
    {
      icon: "/assets/images/icons/icon-195.png",
      title: "Money on Your Terms",
      description: "Access your funds 24 hours a day, without carrying cash or queuing at a branch."
    },
    {
      icon: "/assets/images/icons/icon-195.png",
      title: "Value-Added Services",
      description: "Pay bills, buy airtime and handle everyday payments directly from your card."
    },
    {
      icon: "/assets/images/icons/icon-195.png",
      title: "Cardholder Discounts",
      description: "Exclusive offers and discounts reserved for Verve cardholders at participating merchants nationwide."
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
                      <p>Your Kaizen Verve Card allows you to conveniently pay for goods and services because it is accepted by all payment channels and bank branches connected to the Interswitch network in Nigeria.</p>
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
                      <p>Everything you need to spend and manage your money securely, on any channel.</p>
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
                      <p>Reasons our Verve cardholders choose it for everyday transactions.</p>
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