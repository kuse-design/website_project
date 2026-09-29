import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './CardMarquee.css'

/**
 * Infinite horizontal marquee of product cards, used in the home page
 * "Discover Our Range of Debit Cards" section.
 *
 * Two rows travel in opposite directions - the top row right-to-left, the
 * bottom row left-to-right - so the section reads as motion without needing
 * any controls.
 *
 * Loop mechanics: each row holds two identical `__group`s and the track is
 * translated by -50%. For that to be seamless the group must be at least as
 * wide as the viewport, otherwise the wrap point would be visible as a gap.
 * `repeats` is measured from the real tile width to guarantee that, and grows
 * on wider screens.
 *
 * Accessibility: the second group is aria-hidden and its links are taken out of
 * the tab order so each card is announced and reachable exactly once. The
 * animation is disabled under `prefers-reduced-motion`, where the rows become
 * horizontally scrollable instead.
 */

const TILE_GAP = 28

export const DEFAULT_CARDS = [
  {
    id: 'verve',
    name: 'Verve Card',
    image: '/assets/images/banner/kaizen_card_front.webp',
    to: '/card-details-verve'
  },
  {
    id: 'utility',
    name: 'Utility Card',
    // Transparent cutout: the source shot has a flat white studio background
    // that reads as a white box against this section's black background.
    image: '/assets/images/banner/utility_card.webp',
    to: '/card-details-utility'
  }
]

export default function CardMarquee({ cards = DEFAULT_CARDS }) {
  const tileRef = useRef(null)
  const [repeats, setRepeats] = useState(3)

  useEffect(() => {
    const measure = () => {
      const tileWidth = tileRef.current?.offsetWidth
      if (!tileWidth) return
      const perTile = tileWidth + TILE_GAP
      // The group must span the viewport or the wrap point shows as a gap. A
      // little over one screen keeps that guarantee with margin while avoiding
      // duplicating more cards than the loop actually needs.
      const needed = Math.ceil((window.innerWidth * 1.5) / perTile)
      setRepeats(Math.max(2, needed))
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const renderGroup = (isClone) => (
    <div className="card-marquee__group" key={isClone ? 'clone' : 'lead'} aria-hidden={isClone ? 'true' : undefined}>
      {Array.from({ length: repeats }).map((_, copyIndex) =>
        cards.map((card) => (
          <Link
            to={card.to}
            className="card-marquee__card"
            key={`${isClone ? 'c' : 'l'}-${copyIndex}-${card.id}`}
            tabIndex={isClone ? -1 : undefined}
            ref={isClone && copyIndex === 0 ? tileRef : undefined}
          >
            <span className="card-marquee__media">
              <img
                loading="lazy"
                src={card.image}
                alt={isClone ? '' : `${card.name} preview`}
              />
            </span>
          </Link>
        ))
      )}
    </div>
  )

  return (
    <div className="card-marquee">
      <div className="card-marquee__row card-marquee__row--rtl">
        <div className="card-marquee__track">{renderGroup(false)}{renderGroup(true)}</div>
      </div>
      <div className="card-marquee__row card-marquee__row--ltr">
        <div className="card-marquee__track">{renderGroup(false)}{renderGroup(true)}</div>
      </div>
    </div>
  )
}
