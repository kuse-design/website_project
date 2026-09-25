import React from 'react'

const DEFAULT_DOCUMENTS = [
  'Completed Application Form',
  'Resident [Identification Documents, BVN & NIN, Utility Bill]',
  'Non Resident [Int. Passport, Visa, Utility Bill]',
  'Passport Size Photographs'
]

const BUSINESS_DOCUMENTS = [
  'Completed Application Form',
  'CAC Certificate',
  'MEMART',
  'Board Resolution',
  'Tax Identification Number (TIN)',
  'Passport photographs and valid IDs of directors/signatories',
  'Utility bill (proof of address)',
  'SCUML Certificate (if applicable)',
  'Resident [Identification Documents, BVN & NIN, Utility Bill]',
  'Non Resident [Int. Passport, Visa, Utility Bill]',
  'Passport Size Photographs'
]

const CURRENT_DOCUMENTS = [
  'Completed Application Form',
  'Resident [Identification Documents, BVN & NIN, Utility Bill]',
  'Non Resident [Int. Passport, Visa, Utility Bill]',
  'Reference Letter',
  'Passport Size Photographs'
]

const SAVINGS_DOCUMENTS = [
  'Completed Application Form',
  'Resident [Identification Documents, BVN & NIN, Utility Bill]',
  'Non Resident [Int. Passport, Visa, Utility Bill]',
  'Passport Size Photographs'
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
                  <h2>Required Documents for Account Opening</h2>
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

export { DEFAULT_DOCUMENTS, BUSINESS_DOCUMENTS, CURRENT_DOCUMENTS, SAVINGS_DOCUMENTS }