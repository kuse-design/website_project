import React from 'react'
import FeaturesSection from '../components/sections/FeaturesSection'
import OverviewSection from '../components/sections/OverviewSection'
import DocumentsSection, { SAVINGS_DOCUMENTS } from '../components/sections/DocumentsSection'
import WorkingSection from '../components/sections/WorkingSection'
import PageTitle from '../components/sections/PageTitle'

export default function SavingsAccountPage(){
  return (
    <>
    <div className="boxed_wrapper">
      <PageTitle title={"Ruby Savings Account"} crumbs={["Services", "Accounts"]} />
      <OverviewSection showRate={false} showEligibility={false} description="Save with confidence and take control of your financial future. Our Ruby Savings Account provides a secure and convenient way to manage your money, build your savings, and achieve your financial goals." />
      <FeaturesSection />
      <DocumentsSection documents={SAVINGS_DOCUMENTS} />
      <WorkingSection modClass="alternat-2 centred" icons={["icon-184.png","icon-185.png","icon-186.png","icon-187.png"]} />
    </div>
    </>
  )
}