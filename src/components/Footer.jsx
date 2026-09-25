import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const FORMS = [
  {
    name: 'Kaizen Account Opening Form',
    file: '/Documents/Kaizen%20Account%20Opening%20Form.pdf',
    kind: 'PDF',
  },
  {
    name: 'Dormant Account Reactivation Form',
    file: '/Documents/DORMANT%20ACCOUNT%20REACTIVATION%20FORM.docx',
    kind: 'DOCX',
  },
]

export default function Footer(){
  const [formsOpen, setFormsOpen] = useState(false)

  return (
    <footer className="main-footer">
      <div className="pattern-layer" style={{backgroundImage:'url(/assets/images/shape/shape-4.png)'}}></div>
      <div className="widget-section">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 footer-column">
              <div className="footer-widget contact-widget mr_100">
                <div className="widget-content">
                  <div className="schedule-inner">
                    <div className="contact-info">
                      <h3>Enquiry</h3>
                      <ul className="list-item clearfix">
                        <li><a href="tel:+2349055492841">0905 549 2841</a> <br/><span>Personal</span></li>
                        <li><a href="tel:+2349099900099">0909 990 0099</a> <br/><span>Corporate</span></li>
                      </ul>
                    </div>
                    <div className="opening-hour">
                      <h3>Banking Hours</h3>
                      <ul className="list-item clearfix">
                        <li>8.00am to 5.00pm <br/> <span>Mon - Friday</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="support-box">
                    <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-35.png" alt=""/></div>
                    <h4><a href="mailto:info@kaizenmfb.com">info@kaizenmfb.com</a></h4>
                    <p>Send your queries.</p>
                    <div className="link-box"><a href="mailto:info@kaizenmfb.com"><i className="flaticon-right-arrow"></i></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget links-widget ml_75">
                <div className="widget-title">
                  <h3>Our Bank</h3>
                </div>
                <div className="widget-content mb_25">
                  <ul className="links-list clearfix">
                    <li><Link to="/about">About Us<i className="flaticon-next"></i></Link></li>
                    <li><Link to="/team">Leadership<i className="flaticon-next"></i></Link></li>
                    <li><Link to="/careers">Careers<i className="flaticon-next"></i></Link></li>
                  </ul>
                </div>
                <div className="widget-title">
                  <h3>Support</h3>
                </div>
                <div className="widget-content">
                  <ul className="links-list clearfix">
                    <li><Link to="/contact">Branches<i className="flaticon-next"></i></Link></li>
                    <li><Link to="/contact">Customer Care<i className="flaticon-next"></i></Link></li>
                    <li><Link to="/faq">Faq’s<i className="flaticon-next"></i></Link></li>
                    <li><Link to="/contact">Contact Us<i className="flaticon-next"></i></Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget links-widget ml_90">
                <div className="widget-title">
                  <h3>Products</h3>
                </div>
                <div className="widget-content">
                  <ul className="links-list clearfix">
                    <li><Link to="/account-details">Accounts<i className="flaticon-next"></i></Link></li>
                    <li><Link to="/kaizen-personal">Loans<i className="flaticon-next"></i></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="bottom-top">
            <ul className="list-item">
              <li>
                <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-38.png" alt=""/></div>
                <h4><Link to="/contact">Branches & ATMs</Link></h4>
              </li>
              <li>
                <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-39.png" alt=""/></div>
                <h4><Link to="/contact">Complaint Registration</Link></h4>
              </li>
              <li>
                <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-40.png" alt=""/></div>
                <h4><button type="button" onClick={() => setFormsOpen(true)}>Download Forms</button></h4>
              </li>
            </ul>
          </div>
          <div className="bottom-inner">
            <div className="licenses">
              <img loading="lazy" src="/assets/images/banner/cbn.webp" alt="CBN" />
              <img loading="lazy" src="/assets/images/banner/ndic.png" alt="NDIC" />
            </div>
            <div className="social-box">
              <span>Follow Us On</span>
              <ul className="social-links">
                <li><a href="https://www.facebook.com/share/1JPfKSqsnz/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"><i className="flaticon-facebook"></i></a></li>
                <li><a href="https://www.instagram.com/kaizen_mfb" target="_blank" rel="noopener noreferrer"><i className="flaticon-instagram-logo"></i></a></li>
                <li><a href="https://x.com/kaizen_mfb" target="_blank" rel="noopener noreferrer"><i className="flaticon-twitter"></i></a></li>
                <li><a href="https://www.linkedin.com/company/kaizen-microfinance-bank/posts/?feedView=all" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
              </ul>
            </div>
            <div className="footer-logo">
              <figure className="logo"><a href="/"><img loading="lazy" src="/assets/images/banner/logo-2.png" alt=""/></a></figure>
            </div>
            <ul className="footer-nav clearfix">
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {formsOpen && (
        <div className="forms-modal-wrap" onClick={() => setFormsOpen(false)} role="dialog" aria-modal="true">
          <div className="forms-modal" onClick={(e) => e.stopPropagation()}>
            <div className="forms-modal-head">
              <h3>Download Forms</h3>
              <button type="button" className="forms-modal-close" onClick={() => setFormsOpen(false)} aria-label="Close">&times;</button>
            </div>
            <div className="forms-modal-body">
              <p>Click a form below to download it.</p>
              <ul className="forms-list">
                {FORMS.map((form) => (
                  <li key={form.file}>
                    <div className="form-icon"><img loading="lazy" src="/assets/images/icons/icon-87.png" alt=""/></div>
                    <div className="form-meta">
                      <h4>{form.name}</h4>
                      <span>{form.kind} file</span>
                    </div>
                    <a href={form.file} download className="form-download">Download<i className="flaticon-next"></i></a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}
