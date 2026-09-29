const executives = [
  {
    id: 1,
    name: 'Omotade Odunowo',
    designation: 'CEO/Managing Director',
    image: '/assets/images/banner/executive1.webp',
    email: 'omotade@kaizenng.com',
    bio: "Omotade is an innovative and results-oriented Managing Director with a proven track record of transforming start-ups into multi-billion-dollar enterprises. Recognized as one of Nigeria's top 50 CEOs and recipient of multiple awards for operational excellence, business transformation, and risk management. Over 20 years of experience leading high-impact initiatives across fintech, e-commerce, banking, enterprise risk management, privacy, data protection, and network security. Adept at driving strategic growth, optimizing operations, and navigating complex regulatory landscapes to ensure compliance and sustainable business performance. Her core competencies lie in Business Growth & Transformation, Strategic Leadership & Execution, Financial Performance & Profitability, Enterprise Risk Management, Regulatory & Compliance Frameworks, Business Visioning & Market Expansion, Strategic Partnership & Stakeholder Engagement, Project & Operations Management, Data Security & Privacy Governance, and ERP Systems Development & Implementation."
  },
  {
    id: 2,
    name: 'Lorita Okwuagwu',
    designation: 'Chief Operating Officer',
    image: '/assets/images/banner/executive2.webp',
    email: 'lorita@kaizenng.com',
    bio: "Lorita Okwuagwu is a seasoned financial leader with over 18 years of experience in strategic growth, product innovation, and operational excellence. She has a proven track record of leadership and driving results in banking and microfinance. Her career journey began as a Senior Executive Assistant at Zenith Bank Plc, where she honed her skills in banking operations. She then moved to Rosabon Financial Services as Head of Treasury, overseeing treasury operations for one of Nigeria's leading non-bank financial institutions. Okwuagwu's leadership abilities led her to become Managing Director at BC Kash Microfinance Bank, where she established stakeholder partnerships and drove technology-driven financial solutions. She later joined Credit Afrique as Group Head of Business Development, leading strategic planning and digital transformation initiatives."
  },
  {
    id: 3,
    name: 'John Maleeq',
    designation: 'Chief Technology Officer',
    image: '/assets/images/banner/executive3.webp',
    email: 'john@kaizenng.com',
    bio: "John Maleeq is a seasoned IT professional and technology executive with over a decade of experience spanning financial technology, enterprise IT infrastructure, cloud operations, digital transformation, and regulatory technology across the banking, fintech, and telecommunications sectors.\n\nHe currently serves as Chief Technology Officer at Kaizen Microfinance Bank, where he leads the organisation's technology and digital transformation agenda, driving technology innovation, automation, systems integration, cybersecurity, infrastructure, and strategic technology partnerships.\n\nPrior to his current role, John held key technology positions including Head of Technology & Innovation at Blue Marina Group, where he led the implementation of core technology platforms, digital applications, API integrations, payment systems, cybersecurity initiatives, and broader technology transformation programmes; and Head of IT / Cloud Operations Engineer at Motion Yield Limited (Consumer Finance Bank), where he led the development and deployment of scalable cloud solutions. He also spent several years with Access Bank Plc, gaining extensive experience in enterprise systems, digital banking solutions, IT operations, and financial-sector technology.\n\nJohn combines strong technical expertise with strategic technology leadership, with experience across SQL, C#, ASP.NET, DevOps Engineering, system architecture, cloud technologies, enterprise infrastructure, cybersecurity, and systems integration. His technical depth enables him to design and implement secure, scalable, and resilient technology solutions that address complex business and regulatory requirements.\n\nHe holds a Bachelor's Degree in Computer Science from HEGT University and a Postgraduate Certificate in the Application of Tiny ML from Harvard Extension School. He also holds professional certifications including Certified Information Security Manager (CISM), among others.\n\nJohn is an Associate Member of the Computer Professionals Registration Council of Nigeria (CPN) and a Member of the Chartered Institute of Bankers of Nigeria (CIBN), reflecting his commitment to continuous professional development, industry standards, and excellence in technology and financial services.\n\nJohn is passionate about technology innovation, financial technology, cybersecurity, cloud computing, intelligent automation, and digital transformation, with a strong focus on using technology as a strategic enabler for operational efficiency, customer experience, regulatory compliance, and sustainable business growth."
  },
  {
    id: 4,
    name: 'Roy Benson ',
    designation: 'Financial Controller',
    image: '/assets/images/banner/executive4.2.webp',
    email: 'benson@kaizenng.com',
    bio: "Roy serves as the Financial Controller at Kaizen Microfinance Bank. In this capacity, he leads the company's financial strategy and oversees risk management, ensuring robust governance and long-term value creation.\n\nWith more than a decade of professional experience spanning banking operations, credit administration, risk management, internal audit, and financial controls, Roy has held senior roles at ClearPay, First Generation Mortgage Bank, and Aso Savings and Loans Plc. His diverse background equips him to drive prudent financial management while aligning risk oversight with organizational growth objectives.\n\nA Chartered Accountant, he holds a Bachelor's degree in Accounting, an advanced degree in Business Administration, and a Financial Management credential from the London School of Business Administration. He is certified in Financial Modelling & Valuation, Business Intelligence, Risk Management, Credit Analysis, and ESG, and is currently pursuing a Ph.D. in Business Administration to further deepen his expertise in corporate finance and strategic management."
  },
  {
    id: 5,
    name: 'Ayotomiwa Adedotun Adebayo',
    designation: 'Head, Credit Administration',
    image: '/assets/images/banner/executive5.0.webp',
    email: 'adebayo@kaizenng.com',
    bio: "Ayotomiwa Adedotun Adebayo is a banking and credit professional with experience spanning credit operations, loan structuring and restructuring, portfolio monitoring, operational risk, and credit governance.\n\nHe holds a B.Sc. in Economics from Tai Solarin University of Education and his professional foundation was developed within the banking environments of Access Bank and Fidelity Bank's Crest Academy, where he gained experience in financial operations, GL reconciliation, loan booking and restructuring, credit processes, and operational risk management. These experiences have shaped his approach to credit administration, with particular emphasis on disciplined execution, effective controls, regulatory compliance, and portfolio quality.\n\nAt Kaizen Microfinance Bank, Ayotomiwa serves as Head, Credit Administration, providing oversight across the Bank's credit administration and control processes. His responsibilities include ensuring that approved credit facilities are properly documented, accurately booked, compliant with approved terms and internal policies, and appropriately monitored through the credit lifecycle.\n\nHe is particularly focused on strengthening the Bank's credit governance and risk-management framework, improving documentation standards, driving process efficiency, supporting portfolio quality, and building a culture of accountability across the credit function. He also contributes to the development and implementation of credit policies, products, risk controls, portfolio monitoring frameworks, and credit initiatives designed to support responsible growth.\n\nHis professional interests include credit risk management, financial inclusion, SME and retail lending, credit process digitalisation, portfolio quality management, and banking operations. He is committed to combining sound credit principles with practical business solutions that enable financial institutions to grow sustainably while maintaining strong risk and governance standards."
  },
  {
    id: 6,
    name: 'Abimbola Afolabi',
    designation: 'Head, Business Development',
    image: '/assets/images/banner/executive6.0.webp',
    email: 'afolabi@kaizenng.com',
    bio: "Afolabi's career is positively identified by healthy achievement which spreads across well recognized financial institutions which include banking sectors and stock brokerage firm. He started his career with Eco Bank as Portfolio Manager and International Fund for Agric. Development as Technical Financial Advisor for rural farmers.\n\nFor being successful at these initial positions, he was identified by Advans La Fayette Microfinance Bank to be their country Loan Manager and to establish Agricultural loan portfolio which he accepted and established successfully. He also managed a huge loan portfolio reporting directly to head of business development. He worked as Team Lead for loan (Micro/SME) managers reporting to Regional Sales Manager at Renmoney MFBank.\n\nAdditionally, he worked as Stockbroker / Retail Sales Manager with Coronation Securities Limited which made him got a standout performance for bringing-in one billion naira for a single transaction in the history of the organization. He solidified his leadership path, leading directly to his appointment as Team-lead in Business Development Department at Kaizen Microfinance Bank."
  }
]

export default executives