import React from 'react'
import PageTitle from '../components/sections/PageTitle'
import { Link } from 'react-router-dom'
import './PrivacyPolicyPage.css'

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="boxed_wrapper">
        <PageTitle title={"Privacy Policy"} crumbs={["Legal"]} />

        <section className="privacy-section sec-pad">
          <div className="pattern-layer" style={{ backgroundImage: 'url(/assets/images/shape/shape-46.webp)' }}></div>
          <div className="auto-container">
            <div className="privacy-policy-card">
              <p className="company-line">Kaizen Microfinance Bank Limited</p>

              <h2>Introduction</h2>
              <p>
                This Privacy Policy explains how Kaizen Microfinance Bank Limited ("Kaizen," "we,"
                "us," or "our") collects, stores, and uses your personal information when you visit
                or use our website and services. We are committed to protecting your privacy and
                handling your data responsibly. Please read this policy carefully to understand our
                practices. We may update this policy from time to time, and any changes will be
                reflected on this page, so we encourage you to check back periodically.
              </p>

              <h2>Data Protection Commitment</h2>
              <p>
                We take the protection of your personal data seriously. Our data handling practices
                are designed to comply with the Nigeria Data Protection Regulation (NDPR) and
                applicable guidelines from the Central Bank of Nigeria (CBN). All staff receive
                training on the proper handling of customer information, and this standard extends
                to any third-party vendors or partners who process data on our behalf.
              </p>

              <h2>Information We Collect</h2>
              <p>When you visit our website or use our services, we may collect:</p>
              <ol className="legal-list">
                <li>Your IP address and device/browser information.</li>
                <li>Contact details, including your name, email address, and phone number.</li>
                <li>Information you provide during account opening or loan applications.</li>
                <li>Preferences and interests you share with us.</li>
                <li>
                  Data about how you interact with our website, collected through cookies and
                  similar tracking technologies.
                </li>
              </ol>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ol className="legal-list">
                <li>Process account opening, onboarding, and loan applications.</li>
                <li>Deliver, maintain, and improve our banking products and services.</li>
                <li>Communicate with you about your account or our services.</li>
                <li>
                  Meet our legal and regulatory obligations, including sharing information with
                  correspondent banks or regulators where required by law.
                </li>
                <li>Send you promotional or marketing communications, where you have consented to
                receive them.</li>
              </ol>
              <p>
                Access to your data is restricted to employees and vendors who are contractually and
                legally bound to keep it confidential.
              </p>

              <h2>Data Sharing</h2>
              <p>
                We do not sell, lease, or distribute your personal information to third parties
                without your consent. We may disclose information where required by law, regulation,
                or a valid order from a competent authority, including to correspondent banks as
                part of standard banking operations.
              </p>

              <h2>Cookies</h2>
              <p>
                Our website uses cookies to understand how visitors use our site — for example,
                which pages are most useful — so we can improve your experience. By continuing to
                use our website, you consent to our use of cookies as described here. Cookies do not
                give us control over your device; they simply help us tailor our website to your
                needs. You can disable cookies at any time through your browser settings.
              </p>

              <h2>Your Rights and Choices</h2>
              <p>You have control over your personal information. You can:</p>
              <ul className="legal-list">
                <li>Decline to provide optional information on our forms where indicated.</li>
                <li>
                  Contact us at any time to request a change to the information you've shared with
                  us.
                </li>
                <li>Ask us questions about how your personal data is used.</li>
              </ul>
              <p>To exercise any of these rights, reach out to us using the contact details below.</p>

              <h2>Data Security</h2>
              <p>
                We invest in appropriate technical and organizational measures — including secure
                systems and access controls — to protect your data from unauthorized access, loss,
                or disclosure. While no system can guarantee absolute security, we continuously
                review and update our safeguards in line with industry best practice.
              </p>

              <h2>Protecting Your Own Information</h2>
              <p>You also play a role in keeping your data safe:</p>
              <ul className="legal-list">
                <li>
                  Never share sensitive details such as your PIN or Bank Verification Number (BVN)
                  with anyone.
                </li>
                <li>Use strong, unique passwords for your online banking and mobile app access.</li>
                <li>Avoid saving your login or access details on shared or public devices.</li>
              </ul>

              <h2>Contact Us</h2>
              <p>If you have questions about this Privacy Policy or how your data is handled, please
              contact us:</p>
              <div className="legal-block">
                <p><strong>Kaizen Microfinance Bank Limited</strong></p>
                <p>154 Awolowo Road, Ikoyi, Lagos, Nigeria</p>
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