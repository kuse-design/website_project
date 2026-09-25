import React from 'react'
import { Link } from 'react-router-dom'

const DEFAULT_DOCUMENTS = [
  'Completed Application Form',
  'Resident [Identification Documents, Social Security Card]',
  'Non Resident [Passport, Visa, Social Security Number]'
]

export default function DocumentsSection({ documents = DEFAULT_DOCUMENTS }) {
  return (
    <section className="documents-section">
            <div className="bg-color bg-color-1"></div>
            <div className="auto-container">
                <div className="inner-container">
                    <div className="shape" style={{backgroundImage: 'url(/assets/images/shape/shape-37.png)'}}></div>
                    <div className="content-box">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 title-column">
                                <div className="sec-title light">
                                    <span className="sub-title">Required Documents</span>
                                    <h2>Required Documents for Application</h2>
                                    <p>Please upload the necessary documents to complete.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 list-column">
                                <ul className="list-item clearfix">
                                    {documents.map((doc, idx) => (
                                      <li key={idx}><i className="flaticon-sparkle"></i>{doc}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}
