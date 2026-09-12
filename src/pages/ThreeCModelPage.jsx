import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { ArrowRight, CheckCircle2, Target, Building2, ShieldCheck } from 'lucide-react';
import LeadFormSection from '../components/LeadFormSection';
import { AVIATE_3C_MODEL } from '../data/consultancyData';

export default function ThreeCModelPage({ onOpenCounselling }) {
  const completeSteps = [
    "Profile Evaluation",
    "Counselling",
    "Course Selection",
    "Country Selection",
    "University Shortlisting",
    "Application",
    "Offer Letter",
    "Scholarship",
    "Documentation",
    "Visa Application",
    "Visa Approval",
    "Pre-Departure",
    "Ready to Fly"
  ];

  const studentBenefits = [
    "Personalized guidance",
    "Profile-based recommendations",
    "Career-oriented course selection",
    "Best-fit university selection",
    "Country guidance",
    "Scholarship guidance",
    "Application assistance",
    "Documentation support",
    "Financial guidance",
    "Visa assistance",
    "Visa interview preparation",
    "Pre-departure support",
    "Travel guidance",
    "Accommodation guidance",
    "End-to-end support"
  ];

  const outcomesList = [
    { icon: "🎯", title: "Right Course Selected", desc: "Aligned with your profile & future global skill demand." },
    { icon: "🎓", title: "Best-Fit University", desc: "Top-ranked accredited institution matching your budget." },
    { icon: "📩", title: "Offer Letter Received", desc: "Timely admission offer from official university boards." },
    { icon: "💰", title: "Scholarship Secured", desc: "Merit bursaries and tuition fee waivers unlocked." },
    { icon: "✅", title: "Admission Confirmed", desc: "Final seat confirmation and enrollment complete." },
    { icon: "🛂", title: "Visa Approved", desc: "99.2% success record through 9-month advance prep." },
    { icon: "✈️", title: "Ready to Fly", desc: "Complete pre-departure, travel & housing assistance." }
  ];

  const whyUsPoints = [
    "Personalized 1-on-1 Approach",
    "Profile-Based Guidance",
    "Career-Focused Recommendations",
    "Best-Fit University Selection",
    "Complete Application Support",
    "Scholarship & Bursary Guidance",
    "Expert Visa Assistance",
    "Transparent & Zero Hidden Fees",
    "One-to-One Senior Counsellor Support",
    "End-to-End Assistance Until Departure"
  ];

  return (
    <div className="three-c-model-page">
      {/* Reusable Hero Banner with Home Page Design */}
      <Hero
        badgeTag=""
        badgeIcon={null}
        titlePrefix="The Aviate "
        titleHighlight="3C Model"
        titleSuffix=""
        subtitle="Choosing the right overseas education path shouldn't be complicated. Our 3C Model simplifies your international journey into three seamless, connected pillars: Right Course (C1), Right College (C2), and Right Country / Visa Completion (C3)."
        imageSrc="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80"
        imageAlt="Structured Study Planning"
        bottomCurveColor="#F4F7FB"
        onOpenCounselling={onOpenCounselling}
      />

      {/* 1. 3C Overview Pillars Summary on Light Blue (#F4F7FB) */}
      <section style={{ backgroundColor: '#F4F7FB', paddingTop: '1rem', paddingBottom: '2.5rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', textAlign: 'left' }} className="grid-3">
            {AVIATE_3C_MODEL.pillars.map((p) => (
              <div key={p.code} style={{ background: '#FFFFFF', borderRadius: '18px', padding: '1.75rem', border: '1px solid #E2E8F0', boxShadow: '0 10px 25px rgba(11,25,48,0.04)' }}>
                <span className="badge" style={{ backgroundColor: '#F58220', color: '#FFFFFF', marginBottom: '0.75rem', fontSize: '0.85rem' }}>{p.code}</span>
                <h3 style={{ fontSize: '1.25rem', color: '#0B1930', fontWeight: 800, marginBottom: '0.2rem' }}>{p.name}</h3>
                <div style={{ fontSize: '0.8rem', color: '#F58220', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>{p.subtitle}</div>
                <p style={{ color: '#475569', fontSize: '0.875rem', lineHeight: 1.5 }}>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. C1 — COUNSELLING on Light Blue (#F4F7FB) */}
      <section className="section-padding" style={{ backgroundColor: '#F4F7FB' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '3.5rem', alignItems: 'center' }} className="grid-2">
            <div>
              <h2 className="section-title">C1 — Counselling & Profile Alignment</h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Before recommending any course or university, we take time to thoroughly understand you. We analyze your academic background, career ambitions, financial plan, and personal strengths to design a customized study-abroad roadmap.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {["Profile Evaluation", "Academic Assessment", "Career Goal Assessment", "Course Guidance", "Country Selection", "Budget Planning", "Intake Planning", "Eligibility Roadmap"].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', color: '#0B1930', fontWeight: 600 }}>
                    <CheckCircle2 size={16} color="#F58220" /> {item}
                  </div>
                ))}
              </div>
              <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: '12px', border: '1px solid #CBD5E1', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                <strong style={{ color: '#F58220', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.05em' }}>Key Outcomes of C1:</strong>
                <p style={{ color: '#0B1930', fontSize: '0.95rem', fontWeight: 700, marginTop: '0.3rem' }}>
                  Clear career direction identified • Optimal course match selected • Suitable country framework determined • Personalized 1-on-1 study roadmap created.
                </p>
              </div>
            </div>

            <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '2.5rem', border: '2px solid #F58220', boxShadow: '0 20px 40px rgba(245,130,32,0.12)' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: '#FFF7ED', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F58220', marginBottom: '1.25rem' }}>
                <Target size={28} />
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#0B1930', fontWeight: 800, marginBottom: '0.75rem' }}>Why Counselling First?</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1rem' }}>
                Many students waste time and application fees applying to universities that don't match their career goals or visa requirements. Our C1 Counselling ensures you apply strategically with 100% clarity from day one.
              </p>
              <button onClick={onOpenCounselling} className="btn btn-orange" style={{ width: '100%' }}>
                Start C1 Profile Evaluation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. C2 — COLLEGE / UNIVERSITY SELECTION on Light Blue (#F4F7FB) */}
      <section className="section-padding" style={{ backgroundColor: '#F4F7FB' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '3.5rem', alignItems: 'center' }} className="grid-2">
            <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '2.5rem', border: '1px solid #CBD5E1', boxShadow: '0 20px 40px rgba(11,25,48,0.06)' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563EB', marginBottom: '1.25rem' }}>
                <Building2 size={28} />
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#0B1930', fontWeight: 800, marginBottom: '0.75rem' }}>Targeting Best-Fit Colleges</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1rem' }}>
                We compare global university rankings, accreditation status (WHO, NMC, ABET, AACSB), tuition fees, scholarship availability, and post-study work opportunities to match you with top-fit institutions.
              </p>
              <button onClick={onOpenCounselling} className="btn btn-navy" style={{ width: '100%' }}>
                Explore Best-Fit Universities
              </button>
            </div>

            <div>
              <h2 className="section-title">C2 — College & Course Selection</h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                With your profile roadmap established, we guide you in selecting the best-fit university and managing error-free application submissions to secure official offer letters and maximum scholarship bursaries.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {["Course Selection", "University Shortlisting", "Best-Fit Identification", "Eligibility Checking", "University Comparison", "Application Strategy", "Scholarship Guidance", "Application & SOP Support"].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', color: '#0B1930', fontWeight: 600 }}>
                    <CheckCircle2 size={16} color="#F58220" /> {item}
                  </div>
                ))}
              </div>
              <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: '12px', border: '1px solid #CBD5E1', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                <strong style={{ color: '#F58220', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.05em' }}>Key Outcomes of C2:</strong>
                <p style={{ color: '#0B1930', fontSize: '0.95rem', fontWeight: 700, marginTop: '0.3rem' }}>
                  Right course confirmed • Best-fit college shortlisted • Error-free application submitted • Official offer letter received • Scholarship secured.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. C3 — COMPLETION / VISA on Light Blue (#F4F7FB) */}
      <section className="section-padding" style={{ backgroundColor: '#F4F7FB' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '3.5rem', alignItems: 'center' }} className="grid-2">
            <div>
              <h2 className="section-title">C3 — Completion & Student Visa Approval</h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                Once your university offer letter is secured, our dedicated visa experts take charge of your final visa preparation, financial documentation, mock interviews, housing setup, and pre-departure briefings.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {["Offer Letter Support", "Admission Confirmation", "Documentation Support", "Financial Proofing", "Visa Application Prep", "Visa Documentation", "Mock Interview Drills", "Pre-Departure Briefing", "Travel Guidance", "Accommodation Booking"].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', color: '#0B1930', fontWeight: 600 }}>
                    <CheckCircle2 size={16} color="#16A34A" /> {item}
                  </div>
                ))}
              </div>
              <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: '12px', border: '1px solid #CBD5E1', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                <strong style={{ color: '#16A34A', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.05em' }}>Key Outcomes of C3:</strong>
                <p style={{ color: '#0B1930', fontSize: '0.95rem', fontWeight: 700, marginTop: '0.3rem' }}>
                  Admission completed • Financial proofing verified • Student visa approved • Pre-departure orientation done • Ready to fly abroad!
                </p>
              </div>
            </div>

            <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '2.5rem', border: '2px solid #16A34A', boxShadow: '0 20px 40px rgba(22,163,74,0.12)' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: '#DCFCE7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16A34A', marginBottom: '1.25rem' }}>
                <ShieldCheck size={28} />
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#0B1930', fontWeight: 800, marginBottom: '0.75rem' }}>99.2% Visa Success Rate</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1rem' }}>
                We conduct 9-month advance visa preparation and rigorous 1-on-1 mock interviews to ensure your student visa application is flawless.
              </p>
              <button onClick={onOpenCounselling} className="btn btn-orange" style={{ width: '100%' }}>
                Get Visa Assistance
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMPLETE 3C JOURNEY TIMELINE on Light Blue (#F4F7FB) */}
      <section className="section-padding" style={{ backgroundColor: '#F4F7FB' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">The Complete 3C Journey</h2>
            <p className="section-subtitle">
              From your initial profile evaluation to boarding your flight, see how our 3C Model connects as one complete journey.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', alignItems: 'center', maxWidth: '1000px', margin: '0 auto' }}>
            {completeSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div style={{
                  background: idx === completeSteps.length - 1 ? '#F58220' : '#FFFFFF',
                  color: idx === completeSteps.length - 1 ? '#FFFFFF' : '#0B1930',
                  padding: '0.65rem 1.1rem',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  boxShadow: '0 4px 12px rgba(11,25,48,0.06)',
                  border: '1px solid #CBD5E1',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}>
                  <span>{idx + 1}.</span> {step}
                </div>
                {idx < completeSteps.length - 1 && (
                  <ArrowRight size={14} color="#94A3B8" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHAT STUDENTS GET on Light Blue (#F4F7FB) */}
      <section className="section-padding" style={{ backgroundColor: '#F4F7FB', paddingBottom: 0 }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Students Get with the 3C Model</h2>
            <p className="section-subtitle">
              Comprehensive end-to-end benefits designed for a stress-free study abroad experience.
            </p>
          </div>

          <div className="grid-3" style={{ gap: '1.25rem' }}>
            {studentBenefits.map((benefit, idx) => (
              <div key={idx} style={{ background: '#FFFFFF', padding: '1.1rem 1.25rem', borderRadius: '14px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '0.75rem', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#FFF7ED', color: '#F58220', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <CheckCircle2 size={16} />
                </div>
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0F172A' }}>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Seamless Color Blend from Light Blue (#F4F7FB) into Soft Blush Pink (#F8E4E1) before Success Outcomes */}
        <div style={{
          width: '100%',
          height: '140px',
          background: 'linear-gradient(180deg, #F4F7FB 0%, #F8E4E1 100%)',
          marginTop: '3.5rem'
        }} />
      </section>

      {/* 7. SUCCESS OUTCOMES on Soft Blush Pink (#F8E4E1) */}
      <section className="section-padding" style={{ backgroundColor: '#F8E4E1' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Success Outcomes You Will Achieve</h2>
            <p className="section-subtitle">
              The 3C Model is outcome-driven. Here are the clear results we help every student achieve.
            </p>
          </div>

          <div className="grid-4" style={{ gap: '1.5rem' }}>
            {outcomesList.map((item, idx) => (
              <div key={idx} style={{ background: '#FFFFFF', borderRadius: '16px', padding: '1.5rem', border: '1px solid #E2E8F0', textAlign: 'center', boxShadow: '0 8px 20px rgba(0,0,0,0.03)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem', lineHeight: 1 }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.1rem', color: '#0B1930', fontWeight: 700, marginBottom: '0.35rem' }}>{item.title}</h3>
                <p style={{ color: '#64748B', fontSize: '0.85rem', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY OUR 3C MODEL on Soft Blush Pink (#F8E4E1) */}
      <section className="section-padding" style={{ backgroundColor: '#F8E4E1' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="section-header">
            <h2 className="section-title">Why Our 3C Model Stands Out</h2>
            <p className="section-subtitle">
              Unlike generic overseas education consultancies, Aviate provides a structured methodology where you are never left to navigate the process alone.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '1.25rem' }}>
            {whyUsPoints.map((point, idx) => (
              <div key={idx} style={{ background: '#FFFFFF', padding: '1.1rem 1.25rem', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '0.75rem', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                <CheckCircle2 size={18} color="#F58220" />
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0B1930' }}>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CONNECTION TO SUCCESS STORIES */}
      <section style={{ backgroundColor: '#F8E4E1', color: '#0B1930', padding: '3.5rem 0', textAlignment: 'center', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', color: '#0B1930', fontWeight: 800, marginBottom: '0.75rem' }}>
            Want to See Where the 3C Model Can Take You?
          </h2>
          <p style={{ color: '#475569', fontSize: '1.05rem', marginBottom: '1.75rem', maxWidth: '650px', margin: '0 auto 1.75rem auto' }}>
            Explore real student achievements, scholarship grants, and visa approvals powered by our 3C Model.
          </p>
          <Link to="/our-success-stories" className="btn btn-orange btn-lg">
            Explore Our Success Stories <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* 10. FINAL CONVERSION CTA */}
      <LeadFormSection />
    </div>
  );
}
