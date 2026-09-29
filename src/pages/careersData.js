const departments = [
  { id: 'sales', name: 'Sales & Marketing' },
  { id: 'risk', name: 'Risk & Compliance' },
  { id: 'operations', name: 'Operations' },
  { id: 'corporate', name: 'Corporate Affairs' }
]

const jobOpenings = [
  {
    id: 1,
    title: 'Head of Sales',
    dept: 'sales',
    level: 'Leadership',
    type: 'Full Time',
    workplaceType: 'On-site',
    location: 'Ikeja, Lagos, Nigeria',
    postedDate: '2026-09-14',
    deadline: '2026-10-30',
    jobPurpose:
      'To lead the sales function of the Bank by building a disciplined, customer-first distribution engine that grows deposits, loans and cross-sell across our branches and agent network.',
    education:
      "Bachelor's Degree in Business Administration, Marketing, Finance or a related discipline. An MBA is an added advantage.",
    responsibilities: [
      'Own the annual sales strategy and translate it into branch, channel and product-level targets',
      'Drive acquisition of savings, current and business account customers across Lagos',
      'Build and coach a team of sales officers, relationship managers and agents',
      'Partner with the Credit function to structure appropriate lending solutions for clients',
      'Report on sales performance, pipeline health and market share against plan',
      'Represent the Bank at industry events, forums and community engagements'
    ],
    experience:
      '8+ years in banking, fintech or financial services with at least 3 years leading a sales team. Proven track record of delivering on revenue and deposit targets.',
    skills:
      'Sales leadership, team coaching, financial product knowledge, CRM discipline, negotiation, communication, targets and KPI management.'
  },
  {
    id: 2,
    title: 'Credit Risk Manager',
    dept: 'risk',
    level: 'Management',
    type: 'Full Time',
    workplaceType: 'On-site',
    location: 'Ikeja, Lagos, Nigeria',
    postedDate: '2026-09-11',
    deadline: '2026-10-25',
    jobPurpose:
      'To safeguard the quality of the Bank’s credit book by independently assessing risk in proposals, structuring facilities responsibly and monitoring the portfolio through the credit lifecycle.',
    education:
      "Bachelor's Degree in Finance, Economics, Accounting or a related discipline. A professional qualification such as ACA, ACIB or CFA is required.",
    responsibilities: [
      'Perform independent credit appraisal and risk grading on all proposals before approval',
      'Structure facilities with appropriate security, covenants and pricing',
      'Maintain and enforce the Bank’s credit policy and delegated authority framework',
      'Monitor portfolio quality, watchlist accounts and early-warning indicators',
      'Advise business units on structuring, documentation and risk mitigation',
      'Support regulatory examinations and internal audit reviews with credit documentation'
    ],
    experience:
      '6+ years in credit analysis, credit administration or relationship management within a bank, MFI or credit bureau. Strong understanding of Nigerian credit bureau and regulatory requirements.',
    skills:
      'Credit appraisal, financial statement analysis, risk grading, portfolio monitoring, regulatory knowledge, attention to detail, independent judgement.'
  },
  {
    id: 3,
    title: 'Business Developer',
    dept: 'sales',
    level: 'Officer',
    type: 'Full Time',
    workplaceType: 'Hybrid',
    location: 'Lagos, Nigeria',
    postedDate: '2026-09-08',
    deadline: '2026-10-20',
    jobPurpose:
      'To identify, engage and convert new business opportunities for the Bank by building relationships with entrepreneurs, SMEs and corporate clients across our target markets.',
    education:
      "Bachelor's Degree in Business, Marketing, Finance, Economics or a related discipline.",
    responsibilities: [
      'Source and qualify new business leads for deposit and loan products',
      'Conduct needs assessments and present appropriate banking solutions to prospects',
      'Onboard new account relationships and ensure complete KYC documentation',
      'Maintain a disciplined pipeline and report activity against monthly targets',
      'Coordinate with the Credit team to progress approved applications to disbursement',
      'Grow existing relationships through structured account reviews and cross-sell'
    ],
    experience:
      '3+ years in business development, sales or relationship management in banking, fintech or a service-led industry. Relationship-building skills matter more than tenure.',
    skills:
      'Relationship building, consultative selling, communication, CRM discipline, presentation, negotiation, target orientation, market knowledge.'
  },
  {
    id: 4,
    title: 'Loan Sales Officer',
    dept: 'operations',
    level: 'Officer',
    type: 'Full Time',
    workplaceType: 'On-site',
    location: 'Abuja, Nigeria',
    postedDate: '2026-09-05',
    deadline: '2026-10-18',
    jobPurpose:
      'To originate quality loan applications in the Abuja market by assessing borrower needs, structuring suitable products and ensuring every file meets our credit and documentation standards.',
    education:
      "Bachelor's Degree in Finance, Economics, Business Administration or a related discipline.",
    responsibilities: [
      'Engage prospective borrowers and identify suitable credit needs',
      'Explain product features, pricing, fees and repayment structures clearly',
      'Collect and verify all required applicant and guarantor documentation',
      'Prepare complete loan files for credit appraisal and committee approval',
      'Follow up on disbursement conditions and ensure mandates are properly executed',
      'Maintain a portfolio of serviced loans and support timely repayment'
    ],
    experience:
      '2+ years in loan sales, credit operations or banking operations. Prior exposure to consumer or SME lending is a strong advantage.',
    skills:
      'Sales, credit assessment fundamentals, documentation discipline, customer service, communication, numerical accuracy, persistence.'
  },
  {
    id: 5,
    title: 'Government Relations Manager',
    dept: 'corporate',
    level: 'Management',
    type: 'Full Time',
    workplaceType: 'On-site',
    location: 'Ikeja, Lagos State, Nigeria',
    postedDate: '2026-09-02',
    deadline: '2026-10-15',
    jobPurpose:
      'To strengthen the Bank’s institutional relationships with government bodies, regulators and industry stakeholders, supporting business development and safeguarding our licence to operate.',
    education:
      "Bachelor's Degree in Law, Public Affairs, Business Administration, Political Science or a related discipline. A law qualification is strongly preferred.",
    responsibilities: [
      'Map and manage relationships with regulators, ministries, agencies and industry bodies',
      'Track and interpret regulatory developments that affect the Bank and advise management',
      'Support licence applications, examinations and regulatory filings',
      'Coordinate industry association membership and representation',
      'Advise business units on policy, public sector lending and institutional partnerships',
      'Manage the Bank’s position on industry matters, campaigns and stakeholder communications'
    ],
    experience:
      '7+ years in government affairs, regulatory compliance, public policy or legal practice, ideally within banking or financial services. An existing regulatory network is highly valuable.',
    skills:
      'Stakeholder management, regulatory interpretation, policy analysis, written and verbal communication, discretion, negotiation, judgement.'
  }
]

export { departments }
export default jobOpenings
