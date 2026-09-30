import React, { useMemo, useState, useEffect } from 'react'
import PageTitle from '../components/sections/PageTitle'
import jobOpenings, { departments } from './careersData.js'
import './CareersPage.css'

const PER_PAGE = 5
const HR_EMAIL = 'hr@kaizenmfb.com'
const DRAWER_BP = 1199

function useIsDrawerLayout() {
  const [isDrawer, setIsDrawer] = useState(
    () => typeof window !== 'undefined' && window.innerWidth <= DRAWER_BP
  )

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${DRAWER_BP}px)`)
    const onChange = (e) => setIsDrawer(e.matches)
    setIsDrawer(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return isDrawer
}

const WHY_JOIN = [
  {
    icon: 'icon-199.png',
    title: 'People First Culture',
    text: 'Great outcomes start with empowered teams. We give our people ownership, trust and room to grow.'
  },
  {
    icon: 'icon-204.png',
    title: 'Grow Your Career',
    text: 'We invest in continuous learning, professional development and long-term career progression.'
  },
  {
    icon: 'icon-203.png',
    title: 'Real Impact',
    text: 'Work on solutions that directly shape financial outcomes for the people and businesses we serve.'
  },
  {
    icon: 'icon-205.png',
    title: 'Purpose Driven',
    text: 'Every decision we make is measured by how far it advances financial inclusion in our communities.'
  }
]

const formatPosted = (value) =>
  new Date(value).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })

const formatDeadline = (value) =>
  new Date(value).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

function RoleBadges({ job }) {
  const dept = departments.find((d) => d.id === job.dept)
  return (
    <div className="role-badges">
      {dept && <span className="role-badge role-badge--dept">{dept.name}</span>}
      {dept && <span className="role-badge role-badge--dot">•</span>}
      <span className="role-badge">{job.level}</span>
      <span className="role-badge role-badge--dot">•</span>
      <span className="role-badge">{job.type}</span>
      <span className="role-badge role-badge--dot">•</span>
      <span className="role-badge">{job.location}</span>
    </div>
  )
}

function RoleCard({ job, isActive, onSelect }) {
  return (
    <button
      type="button"
      className={`role-card ${isActive ? 'is-active' : ''}`}
      onClick={() => onSelect(job)}
      aria-expanded={isActive}
    >
      <div className="role-card__body">
        <h3 className="role-card__title">{job.title}</h3>
        <RoleBadges job={job} />
        <p className="role-card__summary">{job.jobPurpose}</p>
        <div className="role-card__foot">
          <span className="role-card__deadline">
            <img loading="lazy" src="/assets/images/icons/icon-210.png" alt="" />
            Deadline: {formatDeadline(job.deadline)}
          </span>
          <span className="role-card__posted">Posted {formatPosted(job.postedDate)}</span>
        </div>
      </div>
    </button>
  )
}

function RoleDetail({ job, isOpen, onClose, onToggleMore, isExpanded }) {
  if (!job) return null

  const applyHref = `mailto:${HR_EMAIL}?subject=${encodeURIComponent(
    `Application: ${job.title}`
  )}&body=${encodeURIComponent(
    `Dear Kaizen MFB Recruitment,\n\nI am writing to apply for the ${job.title} position (${job.location}).\n\nKindly find my CV attached.\n\nName:\nEmail:\nPhone:\n\nThank you.`
  )}`

  return (
    <div className={`roles-detail ${isOpen ? 'is-drawer-open' : ''}`} aria-live="polite">
      <button type="button" className="roles-detail__close" onClick={onClose} aria-label="Close role details">
        &times;
      </button>
      <div className="roles-detail__inner">
        <h3 className="roles-detail__title">{job.title}</h3>
        <RoleBadges job={job} />

        <div className="roles-detail__section">
          <h5>Job Purpose</h5>
          <p>{job.jobPurpose}</p>
        </div>

        <div hidden={!isExpanded}>
          <div className="roles-detail__section">
            <h5>Education</h5>
            <p>{job.education}</p>
          </div>
          <div className="roles-detail__section">
            <h5>Primary Responsibilities</h5>
            <ul>
              {job.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="roles-detail__section">
            <h5>Experience</h5>
            <p>{job.experience}</p>
          </div>
          <div className="roles-detail__section">
            <h5>Skills</h5>
            <p>{job.skills}</p>
          </div>
        </div>

        <div className="roles-detail__meta">
          <div>
            <span>Employment Type</span>
            <strong>{job.type}</strong>
          </div>
          <div>
            <span>Workplace</span>
            <strong>{job.workplaceType}</strong>
          </div>
          <div>
            <span>Deadline</span>
            <strong className="is-deadline">{formatDeadline(job.deadline)}</strong>
          </div>
        </div>

        <div className="roles-detail__actions">
          <button type="button" className="roles-detail__readmore" onClick={onToggleMore}>
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
          <a className="theme-btn" href={applyHref}>
            <span>Apply Now</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function CareersPage() {
  const [activeDept, setActiveDept] = useState('all')
  const [sortOrder, setSortOrder] = useState('newest')
  const [page, setPage] = useState(1)
  const [activeId, setActiveId] = useState(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const filtered = useMemo(() => {
    const list = activeDept === 'all' ? jobOpenings : jobOpenings.filter((j) => j.dept === activeDept)
    return [...list].sort((a, b) => {
      const diff = new Date(b.postedDate) - new Date(a.postedDate)
      return sortOrder === 'newest' ? diff : -diff
    })
  }, [activeDept, sortOrder])

  const pageCount = Math.ceil(filtered.length / PER_PAGE)
  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  const activeJob = filtered.find((j) => j.id === activeId) || null
  const isDrawerLayout = useIsDrawerLayout()

  // Keep a role selected so the detail column is never empty on first paint.
  useEffect(() => {
    if (!filtered.length) {
      setActiveId(null)
      return
    }
    if (!filtered.some((j) => j.id === activeId)) setActiveId(filtered[0].id)
  }, [filtered, activeId])

  const handleFilter = (id) => {
    setActiveDept(id)
    setPage(1)
    setActiveId(null)
    setIsExpanded(false)
  }

  const handleSort = (e) => {
    setSortOrder(e.target.value)
    setPage(1)
  }

  const handleSelect = (job) => {
    setActiveId(job.id)
    setIsExpanded(false)
    if (isDrawerLayout) setDrawerOpen(true)
  }

  const handleClose = () => setDrawerOpen(false)

  const handleToggleMore = () => setIsExpanded((v) => !v)

  // Scroll lock only while the panel is a full-screen drawer.
  useEffect(() => {
    if (!isDrawerLayout || !drawerOpen) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [isDrawerLayout, drawerOpen])

  // Escape closes the drawer; switching back to desktop should never leave it stuck open.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setDrawerOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    if (!isDrawerLayout) setDrawerOpen(false)
  }, [isDrawerLayout])

  return (
    <>
      <div className="boxed_wrapper">
        <PageTitle title={"Careers"} crumbs={[{ label: "About", to: "/about" }]} />

        {/* Why Work With Us */}
        <section className="why-join">
          <div className="auto-container">
            <div className="sec-title centred">
              <span className="sub-title">Why Work With Us</span>
              <h2>Build a Career That Matters</h2>
            </div>
            <div className="why-join__grid">
              {WHY_JOIN.map((item, i) => (
                <div className="why-join__item" key={i}>
                  <div className="icon-box">
                    <img loading="lazy" src={`/assets/images/icons/${item.icon}`} alt="" />
                  </div>
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Available Roles */}
        <section className="open-roles" id="open-roles">
          <div className="auto-container">
            <div className="open-roles__header">
              <div className="open-roles__head-row">
                <div className="sec-title">
                  <span className="sub-title">Open Roles</span>
                  <h2>Available Roles</h2>
                </div>
                <p className="open-roles__intro">
                  Explore current opportunities across our departments and find the role that fits you.
                </p>
              </div>
              <div className="open-roles__filters">
                <button
                  type="button"
                  className={`open-roles__filter ${activeDept === 'all' ? 'is-active' : ''}`}
                  onClick={() => handleFilter('all')}
                >
                  All<span>{jobOpenings.length}</span>
                </button>
                {departments.map((dept) => {
                  const count = jobOpenings.filter((j) => j.dept === dept.id).length
                  // A department with no live vacancy would render a filter that
                  // always lands on the empty state, so it is left out entirely.
                  if (count === 0) return null
                  return (
                    <button
                      type="button"
                      key={dept.id}
                      className={`open-roles__filter ${activeDept === dept.id ? 'is-active' : ''}`}
                      onClick={() => handleFilter(dept.id)}
                    >
                      {dept.name}
                      <span>{count}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="roles-list">
                <div className="roles-empty">
                  <div className="roles-empty__icon">
                    <img loading="lazy" src="/assets/images/icons/icon-102.png" alt="" />
                  </div>
                  <h4>No open roles right now</h4>
                  <p>
                    We do not have any active openings in this department at the moment. Check back soon,
                    or view all of our current openings.
                  </p>
                  <button type="button" className="theme-btn" onClick={() => handleFilter('all')}>
                    <span>View All Open Roles</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="roles-layout">
                <div className="roles-list">
                  <div className="roles-list__bar">
                    <span className="roles-list__count">Open Roles ({filtered.length})</span>
                    <label className="roles-list__sort">
                      Sort:
                      <select value={sortOrder} onChange={handleSort}>
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                      </select>
                    </label>
                  </div>

                  {paged.map((job) => (
                    <RoleCard
                      key={job.id}
                      job={job}
                      isActive={activeJob?.id === job.id}
                      onSelect={handleSelect}
                    />
                  ))}

                  {pageCount > 1 && (
                    <div className="roles-pagination">
                      <button type="button" onClick={() => setPage((p) => p - 1)} disabled={page === 1} aria-label="Previous page">
                        &lsaquo;
                      </button>
                      {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
                        <button
                          type="button"
                          key={n}
                          className={n === page ? 'is-active' : ''}
                          onClick={() => setPage(n)}
                          aria-current={n === page ? 'page' : undefined}
                        >
                          {n}
                        </button>
                      ))}
                      <button
                        type="button"
                        onClick={() => setPage((p) => p + 1)}
                        disabled={page === pageCount}
                        aria-label="Next page"
                      >
                        &rsaquo;
                      </button>
                    </div>
                  )}
                </div>

                <RoleDetail
                  job={activeJob}
                  isOpen={drawerOpen && !!activeJob}
                  onClose={handleClose}
                  isExpanded={isExpanded}
                  onToggleMore={handleToggleMore}
                />
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  )
}
