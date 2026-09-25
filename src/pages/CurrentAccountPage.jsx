import React from 'react'
import FeaturesSection from '../components/sections/FeaturesSection'
import OverviewSection from '../components/sections/OverviewSection'
import DocumentsSection, { CURRENT_DOCUMENTS } from '../components/sections/DocumentsSection'
import WorkingSection from '../components/sections/WorkingSection'
import PageTitle from '../components/sections/PageTitle'

export default function CurrentAccountPage(){
  return (
    <>
    <div className="boxed_wrapper">
      <PageTitle title={"Current Account"} crumbs={["Services", "Accounts"]} />
      <OverviewSection h2="Current Accounts" eligibility="Current Account Eligibility" showRate={false} showEligibility={false} description="Our Current Account is designed to give individuals and businesses the flexibility they need to manage their everyday finances. Whether you are receiving payments, making transfers, paying bills, or handling regular expenses, our account provides convenient access to your money while keeping your finances organized." />
      <FeaturesSection heading="Key Current Account Features" />
      <DocumentsSection documents={CURRENT_DOCUMENTS} />
      <WorkingSection modClass="alternat-2 centred" icons={["icon-184.png","icon-185.png","icon-186.png","icon-187.png"]} />
    </div>
    </>
  )
}