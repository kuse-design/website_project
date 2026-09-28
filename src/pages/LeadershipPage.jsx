import React from 'react'
import { Link } from 'react-router-dom'
import executives from './leadershipData.js'
import './LeadershipPage.css'

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

        <section className="our-leaders-section">
          <div className="our-leaders-container">
            <header className="our-leaders-header">
              <h2 className="our-leaders-title">Our Leaders</h2>
            </header>
            <ul className="our-leaders-grid" role="list">
              {executives.map((leader) => (
                <li key={leader.id} className="leader-card">
                  <article className="leader-article">
                    <Link to={`/team-details/${leader.id}`} className="leader-link" aria-label={`View ${leader.name} profile`}>
                      <div className="leader-photo-wrapper">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          loading="lazy"
                          className="leader-photo"
                          width={480}
                          height={600}
                        />
                      </div>
                      <div className="leader-caption">
                        <h3 className="leader-name">{leader.name}</h3>
                        <p className="leader-title">{leader.designation}</p>
                      </div>
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}