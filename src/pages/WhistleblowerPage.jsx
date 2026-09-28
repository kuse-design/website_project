import React from 'react'
import PageTitle from '../components/sections/PageTitle'
import { Link } from 'react-router-dom'
import './PrivacyPolicyPage.css'

export default function WhistleblowerPage() {
  return (
    <>
      <div className="boxed_wrapper">
        <PageTitle title={"Whistleblower Policy"} crumbs={["Legal"]} />

        <section className="privacy-section sec-pad">
          <div className="pattern-layer" style={{ backgroundImage: 'url(/assets/images/shape/shape-46.webp)' }}></div>
          <div className="auto-container">
            <div className="privacy-policy-card">
              <p className="company-line">Kaizen Microfinance Bank Limited</p>

              <h2>Introduction</h2>
              <p>
                Kaizen Microfinance Bank Limited ("Kaizen," "we," "us," or "our") is committed to
                maintaining the highest standards of integrity, transparency, and accountability in
                all our operations. This Whistleblower Policy provides a safe and confidential
                channel for employees, customers, vendors, and other stakeholders to report concerns
                about suspected misconduct, fraud, corruption, or violations of laws and regulations
                without fear of retaliation.
              </p>

              <h2>Our Commitment</h2>
              <p>
                We take all reports seriously and are committed to investigating them promptly,
                fairly, and thoroughly. No individual who makes a good faith report under this policy
                will suffer harassment, retaliation, or adverse employment consequences, regardless
                of the outcome of the investigation.
              </p>

              <h2>What Can Be Reported</h2>
              <p>This policy covers reports of suspected:</p>
              <ul className="legal-list">
                <li>Fraud, theft, or misappropriation of funds or assets</li>
                <li>Corruption, bribery, or kickbacks</li>
                <li>Violations of banking regulations, CBN guidelines, or applicable laws</li>
                <li>Breaches of our Code of Conduct or internal policies</li>
                <li>Money laundering or terrorist financing activities</li>
                <li>Insider trading or misuse of confidential information</li>
                <li>Harassment, discrimination, or workplace misconduct</li>
                <li>Health, safety, or environmental violations</li>
                <li>Any other unethical or illegal activity</li>
              </ul>

              <h2>How to Report</h2>
              <p>Reports can be made through any of the following confidential channels:</p>
              <div className="legal-block">
                <p><strong>Email:</strong> <a href="mailto:whistleblower@kaizenmfb.com">whistleblower@kaizenmfb.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+2349099900099">+234-909-990-0099</a> (Ask for the Whistleblower Hotline)</p>
                <p><strong>Postal Address:</strong> Whistleblower Unit, Kaizen Microfinance Bank Limited, 154 Awolowo Road, Ikoyi, Lagos, Nigeria</p>
              </div>
              <p>
                You may choose to remain anonymous. However, providing your contact information helps
                us conduct a more thorough investigation and follow up with you on the outcome.
              </p>

              <h2>Confidentiality and Anonymity</h2>
              <p>
                We protect the identity of whistleblowers to the fullest extent permitted by law.
                Information disclosed during the reporting and investigation process will be kept
                confidential and shared only with those who have a legitimate need to know for the
                purpose of investigating and resolving the matter. If you choose to remain anonymous,
                we will not attempt to identify you.
              </p>

              <h2>Protection Against Retaliation</h2>
              <p>
                Kaizen strictly prohibits retaliation against anyone who makes a good faith report
                or participates in an investigation. Retaliation includes, but is not limited to:
              </p>
              <ul className="legal-list">
                <li>Termination, demotion, or suspension</li>
                <li>Reduction in pay, benefits, or responsibilities</li>
                <li>Threats, harassment, or intimidation</li>
                <li>Negative performance reviews motivated by the report</li>
                <li>Exclusion from meetings, projects, or opportunities</li>
              </ul>
              <p>
                Any employee who retaliates against a whistleblower will face disciplinary action,
                up to and including termination of employment.
              </p>

              <h2>Investigation Process</h2>
              <p>Upon receiving a report, we will:</p>
              <ol className="legal-list">
                <li>Acknowledge receipt within 5 business days (if contact information is provided)</li>
                <li>Assess the report to determine the appropriate investigative approach</li>
                <li>Conduct a fair, impartial, and timely investigation</li>
                <li>Document findings and take appropriate corrective action</li>
                <li>Communicate the outcome to the reporter (subject to legal and confidentiality constraints)</li>
              </ol>

              <h2>False Reports</h2>
              <p>
                Reports made maliciously, recklessly, or with knowledge of their falsity are not
                protected under this policy. Individuals who knowingly make false allegations may
                face disciplinary or legal action.
              </p>

              <h2>Regulatory Reporting</h2>
              <p>
                In accordance with Central Bank of Nigeria (CBN) guidelines and the Nigeria Data
                Protection Regulation (NDPR), certain matters may be reported to relevant regulatory
                authorities. We will comply with all mandatory reporting obligations while maintaining
                confidentiality to the extent legally permissible.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have questions about this Whistleblower Policy or need guidance on making a
                report, please contact our Compliance Department:
              </p>
              <div className="legal-block">
                <p><strong>Kaizen Microfinance Bank Limited</strong></p>
                <p>154 Awolowo Road, Ikoyi, Lagos, Nigeria</p>
                <p>Email: <a href="mailto:compliance@kaizenmfb.com">compliance@kaizenmfb.com</a></p>
              </div>

              <div className="lower-box">
                <Link to="/" className="theme-btn"><span>Back to Home</span></Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}