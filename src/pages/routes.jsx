import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutUsPage from './AboutUsPage.jsx'
import CurrentAccountPage from './CurrentAccountPage.jsx'
import BusinessAccountPage from './BusinessAccountPage.jsx'
import SavingsAccountPage from './SavingsAccountPage.jsx'
import BlogWideGridPage from './BlogWideGridPage.jsx'
import BlogListPage from './BlogListPage.jsx'
import BlogListStyledPage from './BlogListStyledPage.jsx'
import BlogPostDetailsPage from './BlogPostDetailsPage.jsx'
import BlogGridPage from './BlogGridPage.jsx'
import PlatinumCardPage from './PlatinumCardPage.jsx'
import CareerDetailsPage from './CareerDetailsPage.jsx'
import CareersPage from './CareersPage.jsx'
import ContactPage from './ContactPage.jsx'
import FaqPage from './FaqPage.jsx'
import HomePage from './HomePage.jsx'
import KaizenAssetLoanPage from './KaizenAssetLoanPage.jsx'
import KaizenEnterpriseLoanPage from './KaizenEnterpriseLoanPage.jsx'
import KaizenMicroLoanPage from './KaizenMicroLoanPage.jsx'
import KaizenPersonalLoanPage from './KaizenPersonalLoanPage.jsx'
import KaizenSalaryLoanPage from './KaizenSalaryLoanPage.jsx'
import PartnersPage from './PartnersPage.jsx'
import PrivacyPolicyPage from './PrivacyPolicyPage.jsx'
import WhistleblowerPage from './WhistleblowerPage.jsx'
import LeadershipDetailsPage from './LeadershipDetailsPage.jsx'
import LeadershipPage from './LeadershipPage.jsx'
import TestimonialsPage from './TestimonialsPage.jsx'
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
        <Route path="/blog-2" element={<BlogWideGridPage />} />
        <Route path="/blog-3" element={<BlogListPage />} />
        <Route path="/blog-4" element={<BlogListStyledPage />} />
        <Route path="/blog-details" element={<BlogPostDetailsPage />} />
        <Route path="/blog" element={<BlogGridPage />} />
        <Route path="/card-details-utility" element={<UtilityCardsPage />} />
        <Route path="/card-details-verve" element={<VerveCardPage />} />
        <Route path="/card-details" element={<PlatinumCardPage />} />
        <Route path="/career-details" element={<CareerDetailsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/kaizen-asset" element={<KaizenAssetLoanPage />} />
        <Route path="/kaizen-enterprise" element={<KaizenEnterpriseLoanPage />} />
        <Route path="/kaizen-micro" element={<KaizenMicroLoanPage />} />
        <Route path="/kaizen-personal" element={<KaizenPersonalLoanPage />} />
        <Route path="/kaizen-salary" element={<KaizenSalaryLoanPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/whistleblower" element={<WhistleblowerPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
        <Route path="/team-details" element={<LeadershipDetailsPage />} />
        <Route path="/team-details/:id" element={<LeadershipDetailsPage />} />
        <Route path="/team" element={<LeadershipPage />} />
        <Route path="/testimonial" element={<TestimonialsPage />} />
    </Routes>
  )
}