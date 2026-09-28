import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Reusable inner-page hero ("page title"): background image, shape layer,
 * page heading and breadcrumb trail. Rendered on every inner page.
 *
 * <PageTitle title="Accounts" crumbs={["Services"]} />
 * <PageTitle title="Current Account" crumbs={["Services", "Accounts"]} heading="h2">
 */
export default function PageTitle({ title, crumbs, heading = 'h1' }) {
  const Tag = heading
  return (
    <section className="page-title">
      <div className="pattern-layer" style={{ backgroundImage: 'url(/assets/images/shape/shape-4.webp)' }}></div>
      <div className="auto-container">
        <div className="content-box">
          <Tag>{title}</Tag>
        </div>
      </div>
    </section>
  )
}