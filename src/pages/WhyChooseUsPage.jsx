import React from 'react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import JourneyProcess from '../components/JourneyProcess';
import LeadFormSection from '../components/LeadFormSection';
import { Award } from 'lucide-react';

export default function WhyChooseUsPage({ onOpenCounselling }) {
  return (
    <div className="why-choose-us-page">
      {/* Reusable Hero Banner with Home Page Design */}
      <Hero
        badgeTag="Why Choose Aviate"
        badgeIcon={Award}
        titlePrefix="Empowering Your "
        titleHighlight="International Success"
        titleSuffix=""
        subtitle="From your very first consultation in Visakhapatnam to settling into your campus dormitory, experience 100% transparent, expert guidance at every single milestone."
        imageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
        imageAlt="Counselling and Student Success Team"
        bottomCurveColor="#F4F7FB"
        onOpenCounselling={onOpenCounselling}
      />

      {/* Why Choose Us & Features */}
      <WhyChooseUs onOpenCounselling={onOpenCounselling} />

      {/* 9-Step Student Journey Pathway */}
      <JourneyProcess onOpenCounselling={onOpenCounselling} />

      {/* Lead Form */}
      <LeadFormSection />
    </div>
  );
}
