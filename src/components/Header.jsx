import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function NavigationItems({ isMobile = false, onNavigate = () => {} }) {
  const [openMenus, setOpenMenus] = useState({})

  const toggleDropdown = (e, key) => {
    e.preventDefault()
    e.stopPropagation()
    setOpenMenus(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const isDropdownOpen = (key) => !!openMenus[key]

  return (
    <ul className="navigation clearfix">
      <li className="current">
        <a href="/">Home</a>
      </li>
      <li className={`dropdown ${isDropdownOpen('services') ? 'open' : ''}`}>
        <a href="#services" onClick={(e) => isMobile ? toggleDropdown(e, 'services') : null}>Services</a>
        {/* {isMobile && (
          <div className={`dropdown-btn bg-red-500 ${isDropdownOpen('services') ? 'open' : ''}`} onClick={(e) => toggleDropdown(e, 'services')}>
            <span className="fas fa-angle-down"></span>
          </div>
        )} */}
        <ul style={{ display: isMobile ? (isDropdownOpen('services') ? 'block' : 'none') : undefined }}>
          <li className={`dropdown ${isDropdownOpen('accounts') ? 'open' : ''}`}>
            <a href="#accounts" onClick={(e) => isMobile ? toggleDropdown(e, 'accounts') : null}>Accounts</a>
            {isMobile && (
              <div className={`dropdown-btn ${isDropdownOpen('accounts') ? 'open' : ''}`} onClick={(e) => toggleDropdown(e, 'accounts')}>
                <span className="fas fa-angle-down"></span>
              </div>
            )}
            <ul style={{ display: isMobile ? (isDropdownOpen('accounts') ? 'block' : 'none') : undefined }}>
              <li><Link to="/account-details" onClick={onNavigate}>Savings Account</Link></li>
              <li><Link to="/account-details-2" onClick={onNavigate}>Current Account</Link></li>
              <li><Link to="/account-details-6" onClick={onNavigate}>Business Account</Link></li>
            </ul>
          </li>
        </ul>
      </li>
      <li className={`dropdown ${isDropdownOpen('about') ? 'open' : ''}`}>
        <a href="#about" onClick={(e) => isMobile ? toggleDropdown(e, 'about') : null}>About</a>
        {isMobile && (
          <div className={`dropdown-btn ${isDropdownOpen('about') ? 'open' : ''}`} onClick={(e) => toggleDropdown(e, 'about')}>
            <span className="fas fa-angle-down"></span>
          </div>
        )}
        <ul style={{ display: isMobile ? (isDropdownOpen('about') ? 'block' : 'none') : undefined }}>
          <li><Link to="/about" onClick={onNavigate}>About Us</Link></li>
          <li><Link to="/team" onClick={onNavigate}>Leadership</Link></li>
          <li><Link to="/careers" onClick={onNavigate}>Careers</Link></li>
          <li><Link to="/faq" onClick={onNavigate}>Faq’s</Link></li>
        </ul>
      </li>
      <li className={`dropdown ${isDropdownOpen('apply') ? 'open' : ''}`}>
        <a href="#apply" onClick={(e) => isMobile ? toggleDropdown(e, 'apply') : null}>Apply Now</a>
        {isMobile && (
          <div className={`dropdown-btn ${isDropdownOpen('apply') ? 'open' : ''}`} onClick={(e) => toggleDropdown(e, 'apply')}>
            <span className="fas fa-angle-down"></span>
          </div>
        )}
        <ul style={{ display: isMobile ? (isDropdownOpen('apply') ? 'block' : 'none') : undefined }}>
          <li className={`dropdown ${isDropdownOpen('loans') ? 'open' : ''}`}>
            <a href="#loans" onClick={(e) => isMobile ? toggleDropdown(e, 'loans') : null}>Loans</a>
            {isMobile && (
              <div className={`dropdown-btn ${isDropdownOpen('loans') ? 'open' : ''}`} onClick={(e) => toggleDropdown(e, 'loans')}>
                <span className="fas fa-angle-down"></span>
              </div>
            )}
            <ul style={{ display: isMobile ? (isDropdownOpen('loans') ? 'block' : 'none') : undefined }}>
              <li><Link to="/kaizen-personal" onClick={onNavigate}>Kaizen Personal Loan</Link></li>
              <li><Link to="/kaizen-enterprise" onClick={onNavigate}>Kaizen Enterprise Loan</Link></li>
              <li><Link to="/kaizen-asset" onClick={onNavigate}>Kaizen Asset Loan</Link></li>
              <li><Link to="/kaizen-micro" onClick={onNavigate}>Kaizen Micro Loan</Link></li>
            </ul>
          </li>
          <li className={`dropdown ${isDropdownOpen('cards') ? 'open' : ''}`}>
            <a href="#cards" onClick={(e) => isMobile ? toggleDropdown(e, 'cards') : null}>Cards</a>
            {isMobile && (
              <div className={`dropdown-btn ${isDropdownOpen('cards') ? 'open' : ''}`} onClick={(e) => toggleDropdown(e, 'cards')}>
                <span className="fas fa-angle-down"></span>
              </div>
            )}
            <ul style={{ display: isMobile ? (isDropdownOpen('cards') ? 'block' : 'none') : undefined }}>
              <li><Link to="/card-details-verve" onClick={onNavigate}>Verve Card</Link></li>
              <li><Link to="/card-details-utility" onClick={onNavigate}>Utility Cards</Link></li>
            </ul>
          </li>
        </ul>
      </li>
      <li><Link to="/contact" onClick={onNavigate}>Get In Touch</Link></li>
    </ul>
  )
}

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false)
  const [activeSideTab, setActiveSideTab] = useState('branches')

  const location = useLocation()

  // Close mobile drawer on route navigation
  useEffect(() => {
    setIsMobileOpen(false)
    setIsSidePanelOpen(false)
  }, [location.pathname])

  // Sticky header scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 110) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Manage mobile-menu-visible class on document body
  useEffect(() => {
    if (isMobileOpen) {
      document.body.classList.add('mobile-menu-visible')
    } else {
      document.body.classList.remove('mobile-menu-visible')
    }
    return () => {
      document.body.classList.remove('mobile-menu-visible')
    }
  }, [isMobileOpen])

  // ESC key closes mobile menu and side panel
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.keyCode === 27) {
        setIsMobileOpen(false)
        setIsSidePanelOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const closeMobile = () => setIsMobileOpen(false)

  return (
    <>
      <header className={`main-header ${isSticky ? 'fixed-header' : ''}`}>
        {/* Header Lower */}
        <div className="header-lower">
          <div className="outer-container">
            <div className="outer-box">
              <div className="menu-area">
                <div className="logo-box mr_110">
                  <figure className="logo">
                    <a href="/"><img src="/assets/images/banner/logo-2.png" alt="" /></a>
                  </figure>
                </div>
                <div className="mobile-nav-toggler" onClick={() => setIsMobileOpen(true)}>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                </div>
                <nav className="main-menu navbar-expand-md navbar-light clearfix">
                  <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                    <NavigationItems />
                  </div>
                </nav>
              </div>
              <div className="menu-right-content">
                <div className="support-box mr_50">
                  <img loading="lazy" src="/assets/images/icons/icon-8.png" alt="" />
                  <Link to="/contact">Support</Link>
                </div>
                <div className="btn-box mr_10">
                  <Link to="/account-details" className="theme-btn"><span>New Account</span></Link>
                </div>
                <div className="nav-toggler">
                  <button
                    type="button"
                    className="side-panel-btn nav-btn"
                    onClick={() => setIsSidePanelOpen(!isSidePanelOpen)}
                  >
                    <img loading="lazy" src="/assets/images/icons/icon-10.png" alt="" />
                  </button>
                  <div className={`side-panel nav-content ${isSidePanelOpen ? 'cart-visible' : ''}`}>
                    <div className="close-icon" onClick={() => setIsSidePanelOpen(false)}>
                      <i className="fas fa-times"></i>
                    </div>
                    <div className="tabs-box">
                      <div className="tab-btns tab-buttons mb_25">
                        <div
                          className={`tab-btn ${activeSideTab === 'branches' ? 'active-btn' : ''}`}
                          onClick={() => setActiveSideTab('branches')}
                          style={{ cursor: 'pointer' }}
                        >
                          <h5>Branches</h5>
                        </div>
                        <div
                          className={`tab-btn ${activeSideTab === 'atm' ? 'active-btn' : ''}`}
                          onClick={() => setActiveSideTab('atm')}
                          style={{ cursor: 'pointer' }}
                        >
                          <h5>ATM’s</h5>
                        </div>
                      </div>
                      <div className="tabs-content">
                        <div className={`tab ${activeSideTab === 'branches' ? 'active-tab' : ''}`}>
                          <div className="inner-box">
                            <div className="form-group">
                              <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-86.png" alt="" /></div>
                              <input type="text" name="location" placeholder="Current Location" />
                            </div>
                            <div className="text">[or]</div>
                            <div className="form-group">
                              <input type="text" name="city" placeholder="City name: Lagos" />
                            </div>
                            <div className="link-box">
                              <a href="https://www.google.com/maps" target="_blank" rel="noreferrer">
                                <i className="flaticon-right-arrow"></i>Find On Map
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className={`tab ${activeSideTab === 'atm' ? 'active-tab' : ''}`}>
                          <div className="inner-box">
                            <div className="form-group">
                              <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-86.png" alt="" /></div>
                              <input type="text" name="location" placeholder="Current Location" />
                            </div>
                            <div className="text">[or]</div>
                            <div className="form-group">
                              <input type="text" name="city" placeholder="City name: Lagos" />
                            </div>
                            <div className="link-box">
                              <a href="https://www.google.com/maps" target="_blank" rel="noreferrer">
                                <i className="flaticon-right-arrow"></i>Find On Map
                              </a>
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
        </div>

        {/* Sticky Header */}
        <div className="sticky-header">
          <div className="outer-container">
            <div className="outer-box">
              <div className="menu-area">
                <div className="logo-box mr_110">
                  <figure className="logo">
                    <a href="/"><img src="/assets/images/banner/logo-2.png" alt="" /></a>
                  </figure>
                </div>
                <nav className="main-menu clearfix">
                  <NavigationItems />
                </nav>
              </div>
              <div className="menu-right-content">
                <div className="support-box mr_50">
                  <img loading="lazy" src="/assets/images/icons/icon-8.png" alt="" />
                  <Link to="/contact">Support</Link>
                </div>
                <div className="btn-box mr_10">
                  <Link to="/account-details" className="theme-btn"><span>New Account</span></Link>
                </div>
                <div className="nav-toggler">
                  <button
                    type="button"
                    className="side-panel-btn nav-btn-2"
                    onClick={() => setIsSidePanelOpen(!isSidePanelOpen)}
                  >
                    <img loading="lazy" src="/assets/images/icons/icon-10.png" alt="" />
                  </button>
                  <div className={`side-panel nav-content-2 ${isSidePanelOpen ? 'cart-visible' : ''}`}>
                    <div className="close-icon" onClick={() => setIsSidePanelOpen(false)}>
                      <i className="fas fa-times"></i>
                    </div>
                    <div className="tabs-box">
                      <div className="tab-btns tab-buttons mb_25">
                        <div
                          className={`tab-btn ${activeSideTab === 'branches' ? 'active-btn' : ''}`}
                          onClick={() => setActiveSideTab('branches')}
                          style={{ cursor: 'pointer' }}
                        >
                          <h5>Branches</h5>
                        </div>
                        <div
                          className={`tab-btn ${activeSideTab === 'atm' ? 'active-btn' : ''}`}
                          onClick={() => setActiveSideTab('atm')}
                          style={{ cursor: 'pointer' }}
                        >
                          <h5>ATM’s</h5>
                        </div>
                      </div>
                      <div className="tabs-content">
                        <div className={`tab ${activeSideTab === 'branches' ? 'active-tab' : ''}`}>
                          <div className="inner-box">
                            <div className="form-group">
                              <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-86.png" alt="" /></div>
                              <input type="text" name="location" placeholder="Current Location" />
                            </div>
                            <div className="text">[or]</div>
                            <div className="form-group">
                              <input type="text" name="city" placeholder="City name: Lagos" />
                            </div>
                            <div className="link-box">
                              <a href="https://www.google.com/maps" target="_blank" rel="noreferrer">
                                <i className="flaticon-right-arrow"></i>Find On Map
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className={`tab ${activeSideTab === 'atm' ? 'active-tab' : ''}`}>
                          <div className="inner-box">
                            <div className="form-group">
                              <div className="icon-box"><img loading="lazy" src="/assets/images/icons/icon-86.png" alt="" /></div>
                              <input type="text" name="location" placeholder="Current Location" />
                            </div>
                            <div className="text">[or]</div>
                            <div className="form-group">
                              <input type="text" name="city" placeholder="City name: Lagos" />
                            </div>
                            <div className="link-box">
                              <a href="https://www.google.com/maps" target="_blank" rel="noreferrer">
                                <i className="flaticon-right-arrow"></i>Find On Map
                              </a>
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
        </div>

        {/* Mobile Slide-Out Drawer */}
        <div className="mobile-menu">
          <div className="menu-backdrop" onClick={closeMobile}></div>
          <div className="close-btn" onClick={closeMobile}>
            <i className="fas fa-times"></i>
          </div>
          <nav className="menu-box">
            <div className="nav-logo">
              <a href="/" onClick={closeMobile}>
                <img src="/assets/images/logo-2.png" alt="" title="" />
              </a>
            </div>
            <div className="menu-outer">
              <NavigationItems isMobile={true} onNavigate={closeMobile} />
            </div>
            <div className="contact-info">
              <h4>Contact Info</h4>
              <ul>
                <li>Address: 154 Awolowo Road, Ikoyi, Lagos, 106104.</li>
                <li>Zipcode: 106104</li>
                <li>Phone: <a href="tel:+2349099900099">+234-909-990-0099</a></li>
                <li>Email: <a href="mailto:info@kaizenmfb.com">info@kaizenmfb.com</a></li>
              </ul>
            </div>
            <div className="social-links">
              <ul className="clearfix">
                <li><a href="https://www.facebook.com/share/1JPfKSqsnz/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"><i className="flaticon-facebook"></i></a></li>
                <li><a href="https://www.instagram.com/kaizen_mfb" target="_blank" rel="noopener noreferrer"><i className="flaticon-instagram-logo"></i></a></li>
                <li><a href="https://x.com/kaizen_mfb" target="_blank" rel="noopener noreferrer"><i className="flaticon-twitter"></i></a></li>
                <li><a href="https://www.linkedin.com/company/kaizen-microfinance-bank/posts/?feedView=all" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
