import React from 'react'
import { Link } from 'react-router-dom'

const DEFAULT_ICONS = ['icon-184.png', 'icon-185.png', 'icon-186.png', 'icon-187.png']

const STEPS = [
  ['01', 'Verify Customer', ''],
  ['02', 'Documentation', ''],
  ['03', 'A/c Verification', ''],
  ['04', 'Start Banking', '']
]

export default function WorkingSection({ modClass = 'alternat-2 centred', icons, light = false }) {
  const icon = i => '/assets/images/icons/' + (icons?.[i] || DEFAULT_ICONS[i])
  return (
    <section className={'working-section ' + modClass}>
      <div className="auto-container">
        <div className="sec-title">
          <span className={light ? 'sub-title light' : 'sub-title'}>How It’s Work</span>
          <h2>Start Banking Within 5 Mins</h2>
        </div>
        <div className="row clearfix">
          {STEPS.map((s, idx) => (
            <div className="col-lg-3 col-md-6 col-sm-12 working-block" key={idx}>
              <div className="working-block-one">
                <div className="inner-box">
                  <span className="count-text">{s[0]}</span>
                  <h3>{s[1]}</h3>
                  <p>{s[2]}</p>
                  <div className="icon-box"><img loading="lazy" src={icon(idx)} alt="" /></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={light ? 'more-text light centred' : 'more-text centred'}>
          <h5><i className="flaticon-sparkle"></i>Your Financial Future Starts Here, <a href="https://kaizenmfb.qoreonline.com/" target="_blank" rel="noreferrer">Start Your Account.</a></h5>
        </div>
      </div>
    </section>
  )
}