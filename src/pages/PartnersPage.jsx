import React from "react";
import PageTitle from "../components/sections/PageTitle";
import CircularBadge from "../components/ui/CircularBadge";
import { Link } from "react-router-dom";

const REGULATORY_BODIES = [
  {
    src: "/assets/images/partners/CBN-logo.jpg",
    alt: "Central Bank of Nigeria",
    title: "Central Bank of Nigeria",
    code: "CBN",
  },
  {
    src: "/assets/images/partners/NDIC.png",
    alt: "NDIC",
    title: "Nigeria Deposit Insurance Corporation",
    code: "NDIC",
  },
  {
    src: "/assets/images/partners/NIBSS.png",
    alt: "NIBSS",
    title: "Nigeria Inter-Bank Settlement System",
    code: "NIBSS",
  },
  {
    src: "/assets/images/partners/CAC bureau Limited .jpeg",
    alt: "Corporate Affairs Commission",
    title: "Corporate Affairs Commission",
    code: "CAC",
  },
];

const TRUSTED_PARTNERS = [
  {
    src: "/assets/images/partners/bankOne logo.jpeg",
    alt: "BankOne",
    title: "BankOne",
    role: "Core Banking Technology",
  },
  {
    src: "/assets/images/partners/Epay plus.jpeg",
    alt: "ePay Plus",
    title: "ePay Plus",
    role: "Digital & Agent Banking",
  },
  {
    src: "/assets/images/partners/lendgrid.jpg.webp",
    alt: "Lendgrid",
    title: "Lendgrid",
    role: "Lending Infrastructure",
  },
  {
    src: "/assets/images/partners/paystack.jpeg",
    alt: "Paystack",
    title: "Paystack",
    role: "Online & Card Payments",
  },
  {
    src: "/assets/images/partners/providusBank.png",
    alt: "Providus Bank",
    title: "Providus Bank",
    role: "Commercial Banking",
  },
  {
    src: "/assets/images/partners/verve.jpeg",
    alt: "Verve",
    title: "Verve",
    role: "Card & Payment Scheme",
  },
  {
    src: "/assets/images/partners/remita logo.webp",
    alt: "Remita",
    title: "Remita",
    role: "Payments & Collections",
  },
  {
    src: "/assets/images/partners/Sterling_bank_logo_wk.png",
    alt: "Sterling Bank",
    title: "Sterling Bank",
    role: "Commercial Bank",
  },
  {
    src: "/assets/images/partners/CBN-logo.jpg",
    alt: "Central Bank of Nigeria",
    title: "Central Bank of Nigeria",
    role: "CBN",
  },
  {
    src: "/assets/images/partners/NDIC.png",
    alt: "NDIC",
    title: "Nigeria Deposit Insurance Corporation",
    role: "NDIC",
  },
  {
    src: "/assets/images/partners/NIBSS.png",
    alt: "NIBSS",
    title: "Nigeria Inter-Bank Settlement System",
    role: "NIBSS",
  },
  {
    src: "/assets/images/partners/CAC bureau Limited .jpeg",
    alt: "Corporate Affairs Commission",
    title: "Corporate Affairs Commission",
    role: "CAC",
  },
  {
    src: "/assets/images/partners/CreditRegistry.jpeg",
    alt: "CreditRegistry",
    title: "CreditRegistry",
    role: "Nigeria's Largest Credit Bureau",
  },
  {
    src: "/assets/images/partners/FirstCentral.png",
    alt: "FirstCentral Credit Bureau",
    title: "FirstCentral Credit Bureau",
    role: "Nigeria's First Licensed Credit Bureau",
  },
];

function PartnerBlock({ src, alt, title, subtitle }) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="partner-block">
        <div className="inner-box">
          <div className="image-box">
            <img loading="lazy" src={src} alt={alt} />
          </div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

function MarqueeLogo({ src, alt }) {
  return (
    <div className="marquee-item">
      <img loading="lazy" src={src} alt={alt} />
    </div>
  );
}

export default function PartnersPage() {
  return (
    <>
      <div className="boxed_wrapper partners-dark">
        <PageTitle
          title={"Our Partners & Regulatory Bodies"}
          crumbs={[{ label: "About", to: "/about" }]}
        />

        <section className="partners-intro sec-pad">
          <div className="auto-container">
            <div className="partner-intro">
              <div className="sec-title centred">
                <span className="sub-title">Trusted Partners</span>
                <h2>Our Regulatory Bodies & Partners</h2>
              </div>
              <p>
                We are proudly regulated and partnered with Nigeria's leading
                financial institutions, ensuring the highest standards of
                banking excellence, security, and customer protection.
              </p>
              <div className="badge-wrap">
                <CircularBadge
                  text="Regulated by the Central Bank of Nigeria"
                  label="CBN Regulated"
                  subtitle="Trusted & Deposit Insured"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="partners-section regulatory pt_0 pb_60">
          <div className="auto-container">
            <div className="partner-category">
              <div className="partner-category-title">
                <h2>Regulatory Bodies</h2>
              </div>
              <div className="row clearfix">
                {REGULATORY_BODIES.map((p) => (
                  <div className="col-lg-3 col-md-6 col-sm-12" key={p.code}>
                    <div className="partner-block">
                      <div className="inner-box">
                        <div className="image-box">
                          <img loading="lazy" src={p.src} alt={p.alt} />
                        </div>
                        <h3>{p.title}</h3>
                        <p>{p.code}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="partners-section pt_0 pb_60">
          <div className="auto-container">
            <div className="partner-category">
              <div className="partner-category-title">
                <h2>Trusted Partners</h2>
              </div>
              <div className="row clearfix trusted-partners-grid">
                {TRUSTED_PARTNERS.map((p) => (
                  <PartnerBlock
                    key={p.title}
                    src={p.src}
                    alt={p.alt}
                    title={p.title}
                    subtitle={p.role}
                  />
                ))}
              </div>
              <div className="partners-marquee">
                <div className="marquee-track">
                  <div className="marquee-group">
                    {TRUSTED_PARTNERS.map((p) => (
                      <MarqueeLogo key={p.title} src={p.src} alt={p.alt} />
                    ))}
                  </div>
                  <div className="marquee-group" aria-hidden="true">
                    {TRUSTED_PARTNERS.map((p) => (
                      <MarqueeLogo key={p.title} src={p.src} alt="" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="outer-container clearfix">
            <div className="cta-block-one">
              <div className="inner-box">
                <div
                  className="shape"
                  style={{
                    backgroundImage: "url(/assets/images/shape/shape-20.webp)",
                  }}
                ></div>
                <div
                  className="bg-layer"
                  style={{
                    backgroundImage: "url(/assets/images/banner/banner-1.jpg)",
                  }}
                ></div>
                <div className="content-box">
                  <h2>
                    Ready to Experience
                    <br /> Premium Banking?
                  </h2>
                  <div className="btn-box">
                    <Link to="/contact">
                      <span>Get Started Today</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}