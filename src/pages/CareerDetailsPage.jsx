import React from 'react'
import PageTitle from '../components/sections/PageTitle'
import { Link } from 'react-router-dom'

export default function CareerDetailsPage(){
  return (
    <>


    <div className="boxed_wrapper">


        


        
         


        


        


        
        <PageTitle title={"Career Details"} crumbs={[{ label: "About", to: "/about" }, { label: "Careers", to: "/careers" }]} />
        


        
        <section className="career-details">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                        <div className="career-details-content">
                            <div className="upper-box">
                                <span className="text">Finance Department</span>
                                <h3>Sales Representative</h3>
                                <span className="location"><img loading="lazy" src="/assets/images/icons/icon-210.png" alt="" />Lagos, Nigeria</span>
                                <div className="btn-box"><a href="mailto:hr@kaizenmfb.com"><i className="flaticon-right-arrow"></i><span>Apply Now</span></a></div>
                            </div>
                            <div className="content-one mb_35">
                                <h3>Job Description</h3>
                                <p>To take a trivial example, which of us ever undertake laborious physical exercise except to obtain some to advantage from it? But who has any right to find off fault with a man who chooses to enjoy a pleasure that has no annoying consequences.</p>
                                <p>Exercise except to obtain some advantage from it? But who has any right to find fault with a man who all chooses to enjoy a pleasure that has no annoying consequences.</p>
                            </div>
                            <div className="content-two mb_35">
                                <h3>Responsibilities</h3>
                                <ul className="list-item clearfix">
                                    <li>Don’t just make a deposit, make an investment today</li>
                                    <li>Known for trust, honesty, and customer care</li>
                                    <li>We’re more than just someone’s ATM. We’re here for life’s big moments</li>
                                    <li>A bank for people who want to live life better</li>
                                </ul>
                            </div>
                            <div className="content-two mb_50">
                                <h3>Requirements</h3>
                                <ul className="list-item clearfix">
                                    <li><h5>Age</h5>:&nbsp;&nbsp;&nbsp;&nbsp;28+</li>
                                    <li><h5>Pronoun</h5>:&nbsp;&nbsp;&nbsp;&nbsp;Male / Female</li>
                                    <li><h5>Education</h5>:&nbsp;&nbsp;&nbsp;&nbsp;Bachelor’s Degree in Related Field</li>
                                    <li><h5>Experience</h5>:&nbsp;&nbsp;&nbsp;&nbsp;1-3 Yrs</li>
                                    <li><h5>Skills</h5>:&nbsp;&nbsp;&nbsp;&nbsp;Something Related this Job</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                        <div className="career-sidebar ml_30">

                            <div className="info-box">
                                <ul className="info-list">
                                    <li>
                                        <h5>Salary</h5>
                                        <p>₦85,000 - ₦90,000 Per Year</p>
                                    </li>
                                    <li>
                                        <h5>Vacancy</h5>
                                        <p>2 Vacancy Available</p>
                                    </li>
                                    <li>
                                        <h5>Allowances</h5>
                                        <p>Medical Expenses & Travel</p>
                                    </li>
                                    <li>
                                        <h5>Paid Leave</h5>
                                        <p>26 Days of Annual Leave</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        



        
        
        
    </div>


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    


    </>
  )
}
