import React from 'react'
import { Link } from 'react-router-dom'
import executives from './leadershipData.js'

export default function LeadershipPage(){
  return (
    <>
    <div className="boxed_wrapper">
        <section className="leadership-banner">
            <div className="pattern-layer" style={{ backgroundImage: 'url(/assets/images/shape/shape-4.png)' }}></div>
            <div className="auto-container">
                <div className="content-box">
                    <h1>Executive Management</h1>
                </div>
            </div>
        </section>
        
        <section className="team-section sec-pad-2">
            <div className="auto-container">
                <div className="sec-title centred">
                    <span className="sub-title">Our Leaders</span>
                    <h2>Executive Management Team</h2>
                </div>
                <div className="row clearfix executive-grid">
                    {executives.map((exec) => (
                        <article className="col-lg-4 col-md-6 col-sm-12 team-block" key={exec.id}>
                            <Link to={`/team-details/${exec.id}`} className="executive-card" aria-label={`View ${exec.name} profile`}>
                                <div className="image-wrapper">
                                    <figure className="image">
                                        <img loading="lazy" src={`${exec.image}?v=5`} alt={exec.name} width={480} height={600} />
                                    </figure>
                                </div>
                                <div className="content-wrapper">
                                    <h3 className="executive-name">{exec.name}</h3>
                                    <p className="executive-title">{exec.designation}</p>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    </div>
    </>
  )
}