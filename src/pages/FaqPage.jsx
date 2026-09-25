import React from 'react'
import PageTitle from '../components/sections/PageTitle'

const faqs = [
  {
    question: 'How do I open a new account?',
    answer: 'Opening an account with Kaizen MFB is simple and convenient. You can visit any of our branches or use our approved digital account-opening channels. Follow the registration process, provide the required information and valid identification documents, and your account will be created once verification is completed.'
  },
  {
    question: 'How can I check my account balance?',
    answer: 'You can check your account balance conveniently through our digital banking channels, including the Kaizen MFB Mobile App and Internet Banking. Simply log in securely to view your available balance and recent account activities.'
  },
  {
    question: 'Is online banking secure?',
    answer: 'Yes. Kaizen MFB\'s online banking platform is designed with security measures to help protect your account and personal information. Always keep your login details, PIN, OTP, and other security credentials confidential, and never share them with anyone.'
  },
  {
    question: 'What is the daily ATM withdrawal limit?',
    answer: 'Your daily ATM withdrawal limit depends on your account type, card profile, and applicable regulatory or banking limits. Please contact Kaizen MFB Customer Service or visit a branch for the specific withdrawal limit applicable to your card.'
  },
  {
    question: 'How do I apply for a loan?',
    answer: 'You can apply for a loan through our available digital or branch channels. Select the loan product that meets your needs, provide the required information and supporting documents, and submit your application for assessment. Once approved, the loan will be disbursed in accordance with the applicable terms and conditions.'
  },
  {
    question: 'Is online banking secure?',
    answer: 'Yes. Kaizen MFB uses security controls to protect your online banking activities and account information. For your safety, do not share your password, PIN, OTP, or other authentication details with anyone. If you notice any suspicious activity, contact us immediately.'
  },
  {
    question: 'What is the daily ATM withdrawal limit?',
    answer: 'ATM withdrawal limits vary depending on your card and account profile and may also be subject to applicable regulatory limits. For details about your specific card limit, please contact our Customer Service team.'
  },
  {
    question: 'How do I apply for a loan?',
    answer: 'To apply for a loan, log in to the relevant Kaizen MFB digital platform or visit any of our branches. Choose your preferred loan product, complete the application form, provide the required information, and submit your application. Your application will be reviewed based on the applicable eligibility and credit assessment criteria.'
  }
]

export default function FaqPage(){
  return (
    <>
    <div className="boxed_wrapper faq-dark">
      <PageTitle title={"Faq's"} crumbs={[{ label: "About", to: "/about" }]} />
      <section className="faq-section sec-pad">
        <div className="pattern-layer" style={{backgroundImage: 'url(/assets/images/shape/shape-46.png)'}}></div>
        <div className="auto-container">
          <div className="sec-title centred">
            <span className="sub-title">Faq's</span>
            <h2>Read Questions & Answers</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 accordion-column">
              <ul className="accordion-box">
                {faqs.map((faq, idx) => (
                  <li key={idx} className={`accordion block ${idx === 0 ? 'active-block' : ''}`}>
                    <div className={`acc-btn ${idx === 0 ? 'active' : ''}`}>
                      <div className="icon-box"><i className="flaticon-chevron"></i></div>
                      <h4><span>{(idx + 1).toString().padStart(2, '0')}</span>{faq.question}</h4>
                    </div>
                    <div className={`acc-content ${idx === 0 ? 'current' : ''}`}>
                      <div className="content">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}