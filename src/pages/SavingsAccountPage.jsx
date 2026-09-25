import React from 'react'
import FeaturesSection from '../components/sections/FeaturesSection'
import OverviewSection from '../components/sections/OverviewSection'
import DocumentsSection from '../components/sections/DocumentsSection'
import WorkingSection from '../components/sections/WorkingSection'
import PageTitle from '../components/sections/PageTitle'
import { Link } from 'react-router-dom'

export default function SavingsAccountPage(){
  return (
    <>


    <div className="boxed_wrapper">


        


        
         


        


        


        
        <PageTitle title={"Savings Account"} crumbs={["Services", "Accounts"]} />
        


        
        <OverviewSection showRate={false} showEligibility={false} description="Save with confidence and take control of your financial future. Our Savings Account provides a secure and convenient way to manage your money, build your savings, and achieve your financial goals." />
        


        
        <FeaturesSection />
        


        
        <DocumentsSection documents={[
          'Completed Application Form',
          'Resident [Identification Documents, Social Security Card]',
          'Non Resident [Passport, Visa, Social Security Number]',
          'Passport Size Photographs'
        ]} />
        


        
        <WorkingSection modClass="alternat-2 centred" icons={["icon-184.png","icon-185.png","icon-186.png","icon-187.png"]} />
        


        
        


        



        
        
        
    </div>


    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    


    </>
  )
}
