import React, { useState } from 'react'
import PageTitle from '../components/sections/PageTitle'
import Tabs from '../components/ui/Tabs'
import './ContactPage.css'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

export default function ContactPage(){
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      // Check if response is ok before parsing JSON
      if (!res.ok) {
        const text = await res.text()
        let errorMsg = `Server error: ${res.status}`
        try {
          const data = JSON.parse(text)
          errorMsg = data.error || errorMsg
        } catch {
          errorMsg = text || errorMsg
        }
        throw new Error(errorMsg)
      }
      
      const text = await res.text()
      if (!text) {
        throw new Error('Empty response from server')
      }
      
      const data = JSON.parse(text)
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (err) {
      console.error('Contact form error:', err)
      setError(err.message || 'Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <div className="boxed_wrapper">
        <PageTitle title={"Get In Touch"} />

        {/* Location / branches section */}
        <section className="location-section sec-pad">
          <div className="auto-container">
            <div className="sec-title centred">
              <span className="sub-title">Our Location</span>
              <h2>Kaizen Microfinance Bank, Ikoyi Lagos</h2>
            </div>
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="location-image">
                  <img loading="lazy" src="/assets/images/location.jpg" alt="Kaizen Microfinance Bank, Ikoyi Lagos" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="location-card">
                  <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-86.png" alt="" /></div>
                  <h4>154 Awolowo Road, Ikoyi</h4>
                  <ul className="info-list">
                    <li><span>Zipcode:</span> 106104</li>
                    <li><span>Address:</span> 154 Awolowo Road, Ikoyi, Lagos, 106104.</li>
                    <li>
                      <span>Phone &amp; Email:</span>
                      <a href="tel:+2349099900099">+234-909-990-0099</a>
                      <a href="mailto:info@kaizenmfb.com">info@kaizenmfb.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map / location area */}
        <section className="map-section">
          <div className="auto-container">
            <div className="map-box">
              <iframe
                title="Kaizen Microfinance Bank, Ikoyi Lagos"
                src="https://maps.google.com/maps?q=154%20Awolowo%20Road%2C%20Ikoyi%2C%20Lagos%2C%20Nigeria&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Get Support + contact form */}
        <section className="contact-section sec-pad">
          <div className="auto-container">
            <div className="sec-title centred">
              <span className="sub-title">Get Support</span>
              <h2>Get Support for any Queries or Complaints</h2>
              <p>Committed to helping you meet all your banking needs.</p>
            </div>
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="corporate-block-one">
                  <div className="inner-box">
                    <div className="icon-box">
                      <div className="icon"><img loading="lazy" src="/assets/images/icons/icon-232.png" alt="" /></div>
                      <div className="overlay-icon"><img loading="lazy" src="/assets/images/icons/icon-233.png" alt="" /></div>
                    </div>
                    <h4>Corporate Office</h4>
                    <p>Our headquarters in the heart of Ikoyi, Lagos.</p>
                    <h5>154 Awolowo Road, <br />Ikoyi, Lagos, Nigeria 106104.</h5>
                  </div>
                </div>
                <div className="corporate-block-one">
                  <div className="inner-box">
                    <div className="icon-box">
                      <div className="icon"><img loading="lazy" src="/assets/images/icons/icon-234.png" alt="" /></div>
                      <div className="overlay-icon"><img loading="lazy" src="/assets/images/icons/icon-235.png" alt="" /></div>
                    </div>
                    <h4>Office Hours</h4>
                    <p>Reach us within our working hours.</p>
                    <h5>Mon - Fri: 9.00am to 5.00pm</h5>
                  </div>
                </div>
                <div className="corporate-block-one">
                  <div className="inner-box">
                    <div className="icon-box">
                      <div className="icon"><img loading="lazy" src="/assets/images/icons/icon-227.png" alt="" /></div>
                      <div className="overlay-icon"><img loading="lazy" src="/assets/images/icons/icon-228.png" alt="" /></div>
                    </div>
                    <h4>Front Desk</h4>
                    <p>Speak directly with our support team.</p>
                    <h5><a href="tel:+2349099900099">+234-909-990-0099</a></h5>
                    <h5><a href="mailto:info@kaizenmfb.com">info@kaizenmfb.com</a></h5>
                  </div>
                </div>
                <a className="theme-btn customer-care-btn" href="mailto:info@kaizenmfb.com"><span>Customer Care</span></a>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="form-inner">
                  {submitted && (
                    <div className="form-status success">Your message has been sent. Our support team will get back to you shortly.</div>
                  )}
                  {error && (
                    <div className="form-status error">{error}</div>
                  )}
                  <form id="get-in-touch-form" onSubmit={handleSubmit} noValidate>
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="form-group">
                          <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-221.png" alt="" /></div>
                          <label>Name</label>
                          <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            disabled={loading}
                          />
                        </div>
                        <div className="form-group">
                          <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-222.png" alt="" /></div>
                          <label>Email Address</label>
                          <input
                            type="email"
                            name="email"
                            placeholder="Your email address"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            disabled={loading}
                          />
                        </div>
                        <div className="form-group">
                          <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-223.png" alt="" /></div>
                          <label>Phone Number</label>
                          <input
                            type="text"
                            name="phone"
                            placeholder="Your phone number"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            disabled={loading}
                          />
                        </div>
                        <div className="form-group">
                          <label>Subject</label>
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject of your message"
                            value={formData.subject}
                            onChange={handleChange}
                            disabled={loading}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="form-group">
                          <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-236.png" alt="" /></div>
                          <label>Message</label>
                          <textarea
                            name="message"
                            placeholder="Write your message here"
                            value={formData.message}
                            onChange={handleChange}
                            disabled={loading}
                          ></textarea>
                        </div>
                        <div className="form-group message-btn">
                          <button
                            type="submit"
                            className="theme-btn"
                            name="submit-form"
                            disabled={loading}
                          >
                            <span>{loading ? 'Sending...' : 'send a message'}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Care Numbers */}
        <section className="care-section contact-section support-section sec-pad">
          <div className="auto-container">
            <div className="sec-title centred">
              <span className="sub-title">Customer Care</span>
              <h2>Customer Care Numbers</h2>
            </div>
            <Tabs className="tabs-box">
              <div className="tab-btns tab-buttons clearfix">
                <div className="tab-btn active-btn" data-tab="#tab-1"><h4>Personal Banking</h4></div>
                <div className="tab-btn" data-tab="#tab-2"><h4>Corporate Banking</h4></div>
              </div>
              <div className="tabs-content">
                <div className="tab active-tab" id="tab-1">
                  <div className="inner-container">
                    <div className="table-outer">
                      <table>
                        <thead className="cart-header">
                          <tr>
                            <th>Services</th>
                            <th>Contact Details</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><h5>General Query/Complaint</h5></td>
                            <td>
                              <span><a href="tel:+2349099900099">+234-909-990-0099</a></span>
                              <span><a href="mailto:info@kaizenmfb.com">info@kaizenmfb.com</a></span>
                            </td>
                          </tr>
                          <tr>
                            <td><h5>Debit Card</h5></td>
                            <td>
                              <span><a href="tel:+2349055492841">+234-905-549-2841</a></span>
                              <span><a href="mailto:info@kaizenmfb.com">info@kaizenmfb.com</a></span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="tab" id="tab-2">
                  <div className="inner-container">
                    <div className="table-outer">
                      <table>
                        <thead className="cart-header">
                          <tr>
                            <th>Services</th>
                            <th>Contact Details</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><h5>General Query/Complaint</h5></td>
                            <td>
                              <span><a href="tel:+2349099900099">+234-909-990-0099</a></span>
                              <span><a href="mailto:info@kaizenmfb.com">info@kaizenmfb.com</a></span>
                            </td>
                          </tr>
                          <tr>
                            <td><h5>Debit Card</h5></td>
                            <td>
                              <span><a href="tel:+2349055492841">+234-905-549-2841</a></span>
                              <span><a href="mailto:cardservices@kaizenng.com">cardservices@kaizenng.com</a></span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </Tabs>
          </div>
        </section>
      </div>
    </>
  )
}