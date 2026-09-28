import React from 'react'
import { useParams } from 'react-router-dom'
import PageTitle from '../components/sections/PageTitle'
import executives from './leadershipData.js'

export default function LeadershipDetailsPage(){
  const { id } = useParams()
  const exec = executives.find((e) => e.id === Number(id)) || executives[0]

  return (
    <>


    <div className="boxed_wrapper">


        


        


        


        


        


        
        <PageTitle title={"Executive Profile"} crumbs={[{ label: "About", to: "/about" }, { label: "Executive Management", to: "/team" }]} />
        


        
        <section className="team-details">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image-box mr_30">
                            <figure className="image"><img loading="lazy" src={`${exec.image}?v=5`} alt={exec.name} width={640} height={705} /></figure>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            <h2>{exec.name}</h2>
                            <span className="designation">{exec.designation}</span>
                            {exec.bio ? (
                                <>
                                    <h3>{exec.bioTitle || `About ${exec.name}`}</h3>
                                    {exec.bio.split('\n\n').map((para, i) => (
                                        <p key={i}>{para}</p>
                                    ))}
                                </>
                            ) : (
                                <>
                                    <p>Indignation and dislike men who are so beguiled & demoralized by charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound.</p>
                                    <h3>10 Years of Experience</h3>
                                    <ul className="list-item mt_15 mb_30 clearfix">
                                        <li>Demoralized by charms of pleasure of the moment</li>
                                        <li>Again is there anyone who loves or pursues</li>
                                    </ul>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        




        


    </div>


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    


    </>
  )
}