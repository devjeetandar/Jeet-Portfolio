/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ImpactNumbers } from './components/ImpactNumbers';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SelectedWork } from './components/SelectedWork';
import { SkillsSection } from './components/SkillsSection';
import { BeyondTheCode } from './components/BeyondTheCode';
import { HowIWork } from './components/HowIWork';
import { ResumeCTA } from './components/ResumeCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative bg-[#050505] text-[#e5e7eb] min-h-screen selection:bg-blue-600 selection:text-white">
      {/* Subtle desktop cursor */}
      <CustomCursor />

      {/* Navigation bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <ImpactNumbers />
        <ExperienceTimeline />
        <SelectedWork />
        <SkillsSection />
        <BeyondTheCode />
        <HowIWork />
        <ResumeCTA onOpenResume={() => setIsResumeOpen(true)} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal Viewer & Downloader */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
