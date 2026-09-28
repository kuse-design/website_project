import React from 'react'
import PageTitle from '../components/sections/PageTitle'
import { Link } from 'react-router-dom'
import './PrivacyPolicyPage.css'

export default function TermsAndConditionsPage() {
  return (
    <>
      <div className="boxed_wrapper">
        <PageTitle title={"Terms & Conditions"} crumbs={["Legal"]} />

        <section className="privacy-section sec-pad">
          <div className="pattern-layer" style={{ backgroundImage: 'url(/assets/images/shape/shape-46.webp)' }}></div>
          <div className="auto-container">
            <div className="privacy-policy-card">
              <p className="company-line">Kaizen Microfinance Bank Limited</p>

              <h2>Introduction</h2>
              <p>
                <strong>Effective Date: May 2025</strong>
              </p>
              <p>
                These Terms and Conditions ("Terms") govern your use of the KAIZEN MICROFINANCE
                BANK website, located at 154, Awolowo Road, Ikoyi. By accessing or using our
                website, applying for a loan, or using any services provided by KAIZEN MICROFINANCE
                BANK, you agree to be bound by these Terms & Conditions and all applicable laws and
                regulations.
              </p>

              <h2>Interest Rates and Fees</h2>
              <p>
                Interest rates and fees associated with loans are determined by the terms of your
                Loan Agreement. These rates may vary based on the loan amount, loan term, and your
                creditworthiness.
              </p>
              <p>
                You are responsible for reviewing the Loan Agreement carefully to understand all
                applicable rates and fees before agreeing to the loan.
              </p>

              <h2>Repayment</h2>
              <p>
                You agree to repay the loan in accordance with the repayment schedule outlined in
                your Loan Agreement. Late payments may incur additional fees or interest charges. If
                you experience difficulty making a payment, please contact us as soon as possible to
                discuss possible options.
              </p>

              <h2>Privacy and Data Protection</h2>
              <p>
                We respect your privacy and are committed to protecting your personal information.
                By using our website and applying for a loan, you consent to our collection, use,
                and disclosure of your personal information as outlined in our
                <Link to="/privacy-policy"> Privacy Policy</Link>.
              </p>
              <p>
                We may share your information with third parties for the purpose of processing your
                loan application, performing credit checks, or complying with legal requirements. We
                will not sell or rent your personal information to third parties without your
                consent, except as required by law.
              </p>

              <h2>Use of the Website</h2>
              <p>
                You agree to use our Website only for lawful purposes and in a manner that does not
                infringe upon the rights of others or restrict their use of the Website. You are
                prohibited from engaging in any activity that may harm, disable, or interfere with
                the Website or our services, including, but not limited to, unauthorized access,
                data scraping, or transmitting malicious code.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, KAIZEN MICROFINANCE BANK is not liable for
                any indirect, incidental, special, consequential, or punitive damages arising from
                your use of the Website or the loan services, including but not limited to, loss of
                profits, data, or business opportunities.
              </p>
              <p>
                In no event shall KAIZEN MICROFINANCE BANK be liable for any damages exceeding the
                amount you have paid for services rendered from engaging in any activity that may
                harm, disable, or interfere with the Website or our services, including, but not
                limited to, unauthorized access, data scraping, or transmitting malicious code.
              </p>

              <h2>Amendments</h2>
              <p>
                We reserve the right to modify or update these Terms at any time. Any changes will
                be effective immediately upon posting on this page, and the updated Terms will be
                effective from the date of posting. You are responsible for reviewing these Terms
                periodically to stay informed of any changes.
              </p>

              <h2>Governing Law and Dispute Resolution</h2>
              <p>
                These Terms are governed by the laws of the Federal Republic of Nigeria, without
                regard to its conflict of laws principles. Any disputes arising out of or in
                connection with these Terms or your use of the Website will be resolved through
                arbitration or mediation in Nigeria, unless otherwise required by applicable law.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions or concerns about these Terms or our services, please
                contact us at:
              </p>
              <div className="legal-block">
                <p><strong>KAIZEN MICROFINANCE BANK</strong></p>
                <p>154 Awolowo Road, Ikoyi</p>
                <p>09099900099</p>
                <p>Email: <a href="mailto:info@kaizenmfb.com">info@kaizenmfb.com</a></p>
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