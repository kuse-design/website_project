import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutUsPage from './AboutUsPage.jsx'
import CurrentAccountPage from './CurrentAccountPage.jsx'
import BusinessAccountPage from './BusinessAccountPage.jsx'
import SavingsAccountPage from './SavingsAccountPage.jsx'
import CareersPage from './CareersPage.jsx'
import ContactPage from './ContactPage.jsx'
import FaqPage from './FaqPage.jsx'
import HomePage from './HomePage.jsx'
import KaizenAssetLoanPage from './KaizenAssetLoanPage.jsx'
import KaizenEnterpriseLoanPage from './KaizenEnterpriseLoanPage.jsx'
import KaizenMicroLoanPage from './KaizenMicroLoanPage.jsx'
import KaizenPersonalLoanPage from './KaizenPersonalLoanPage.jsx'
import KaizenSalaryLoanPage from './KaizenSalaryLoanPage.jsx'
import PrivacyPolicyPage from './PrivacyPolicyPage.jsx'
import WhistleblowerPage from './WhistleblowerPage.jsx'
import LeadershipDetailsPage from './LeadershipDetailsPage.jsx'
import LeadershipPage from './LeadershipPage.jsx'
import TermsAndConditionsPage from './TermsAndConditionsPage.jsx'
import UtilityCardsPage from './UtilityCardsPage.jsx'
import VerveCardPage from './VerveCardPage.jsx'


export default function AppRoutes(){
  return (
    <Routes>
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/account-details-2" element={<CurrentAccountPage />} />
        <Route path="/account-details-6" element={<BusinessAccountPage />} />
        <Route path="/account-details" element={<SavingsAccountPage />} />
        <Route path="/card-details-utility" element={<UtilityCardsPage />} />
        <Route path="/card-details-verve" element={<VerveCardPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/kaizen-asset" element={<KaizenAssetLoanPage />} />
        <Route path="/kaizen-enterprise" element={<KaizenEnterpriseLoanPage />} />
        <Route path="/kaizen-micro" element={<KaizenMicroLoanPage />} />
        <Route path="/kaizen-personal" element={<KaizenPersonalLoanPage />} />
        <Route path="/kaizen-salary" element={<KaizenSalaryLoanPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/whistleblower" element={<WhistleblowerPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
        <Route path="/team-details" element={<LeadershipDetailsPage />} />
        <Route path="/team-details/:id" element={<LeadershipDetailsPage />} />
        <Route path="/team" element={<LeadershipPage />} />
    </Routes>
  )
}