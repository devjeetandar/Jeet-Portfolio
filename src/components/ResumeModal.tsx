import React, { useEffect, useState } from 'react';
import { X, Printer, Download, Check, Copy, ExternalLink, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, ACHIEVEMENTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
JEETANDAR N SILWANI
Bangalore, KA | +91 9663926665 | jeetandar.n.silwani@gmail.com
GitHub: https://github.com/JEETANDAR | LinkedIn: https://www.linkedin.com/in/jeetandar-n-silwani-6b6863213/

PROFILE SUMMARY:
Software development and full stack enthusiast with a strong foundation in MERN stack, data analytics, and business operations. Skilled in building scalable applications, analyzing data for insights, and supporting technical and operational workflows.

EDUCATION:
- Bachelor of Computer Applications (BCA) | St Pauls College, Bengaluru | 2023 – 2026 (CGPA: 7.45)
  Specialization: Artificial Intelligence & Cybersecurity
- Pre-University (CEBA) | Ascent PU College, Bengaluru | 2021 – 2023 (CGPA: 9.03)

EXPERIENCE:
- App Developer & Social Media Manager | Global Study Pro (May 2026 – Present)
- Marketing & Design Intern | Global Study Pro (March 2026 – April 2026)
- Software Development Intern | St Pauls College (October 2025 – March 2026)
- Full Stack Developer Intern | Ernst & Young Edunet Foundation (February 2025 – March 2025)
- Cybersecurity Intern | IBM SkillsBuild - Edunet Foundation (January 2025 – February 2025)
- AI Cloud Intern | IBM SkillsBuild - Edunet Foundation (July 2024 – August 2024)

KEY PROJECTS:
- CareerPath — AI-Powered Career Discovery App (Kotlin, Android, Firebase, Gemini AI API)
- ID Card Management System (React, Node.js, Express, SQL, Automated Batch Processing)
- Kairos — Event Management WebApp (MERN, Google OAuth, Razorpay Payment Gateway, 400+ users)
- Blinkit Data Analytics & Operational BI (Power BI, DAX, Python, 10,000+ records)
- Trinitas Global Education Portal (React, TypeScript, Institutional Website)
- Faculty Development Program Portal (React, Razorpay Payment Gateway, Participant Onboarding)

LEADERSHIP & CERTIFICATIONS:
- President – Department of Computer Science
- AI Challenge – National Level Winner
- Webathon – National Level Runner
- Coding & Debugging – State Level Winner
- Fest Organizer – KAIROS 2026
- IBM Data Analyst Certified Program
- Deloitte Software Development Certification
- Accenture Software Development Certification
- IBM Cyber Security Certified Program
- TCS iON EDGE Professional Skill Development
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadMarkdown = () => {
    const resumeText = `# JEETANDAR N SILWANI
Bangalore, KA | +91 9663926665 | jeetandar.n.silwani@gmail.com
GitHub: https://github.com/JEETANDAR | LinkedIn: https://www.linkedin.com/in/jeetandar-n-silwani-6b6863213/

## Profile Summary
Software development and full stack enthusiast with a strong foundation in MERN stack, data analytics, and business operations. Skilled in building scalable applications, analyzing data for insights, and supporting technical and operational workflows.

## Education
- **Bachelor of Computer Applications (BCA)** | St Pauls College, Bengaluru | 2023 – 2026 (CGPA: 7.45)
  *Specialization: Artificial Intelligence & Cybersecurity*
- **Pre-University (CEBA)** | Ascent PU College, Bengaluru | 2021 – 2023 (CGPA: 9.03)

## Technical Skills
- **Full Stack Development:** MERN Stack (MongoDB, Express.js, React.js, Node.js), REST APIs
- **Mobile & AI:** Kotlin, Android SDK, Firebase, Gemini AI API
- **Programming:** Python, Java, C, C++, JavaScript
- **Databases & Systems:** SQL, MySQL, MongoDB, Data Structures, OOP, OS, Networking
- **Data & Analytics:** Power BI, DAX, Data Visualization, Advanced Excel, Python Analytics
- **Software Engineering & QA:** SDLC, Testing, Root Cause Analysis, Secure Coding

## Experience
- **App Developer & Social Media Manager** | Global Study Pro (May 2026 – Present)
- **Marketing & Design Intern** | Global Study Pro (March 2026 – April 2026)
- **Software Development Intern** | St Pauls College (October 2025 – March 2026)
- **Full Stack Developer Intern** | Ernst & Young Edunet Foundation (February 2025 – March 2025)
- **Cybersecurity Intern** | IBM SkillsBuild - Edunet Foundation (January 2025 – February 2025)
- **AI Cloud Intern** | IBM SkillsBuild - Edunet Foundation (July 2024 – August 2024)

## Key Projects
- **CareerPath:** AI-powered mobile app built in Kotlin with Gemini API and Firebase for personalized career trajectories.
- **ID Card Management System:** Full-stack React & SQL system automating collegiate student identity card workflows and batch exports.
- **Kairos:** Flagship MERN event platform with Google Authentication and Razorpay payment integration for 400+ attendees.
- **Blinkit Data Analytics:** Operational business intelligence dashboard modeling quick-commerce fulfillment and unit metrics.
- **Trinitas Global:** Production higher education portal with curriculum discovery and admissions inquiries.
- **Faculty Development Program:** Academic conference platform with Razorpay payment processing and receipt generation.

## Leadership & Achievements
- **President** – Department of Computer Science
- **AI Challenge** – National Level Winner
- **Webathon** – National Level Runner
- **Coding & Debugging** – State Level Winner
- **Fest Organizer** – KAIROS 2026
- **Deloitte, Accenture, IBM, TCS** Professional Certifications
`;

    const blob = new Blob([resumeText], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Jeetandar_N_Silwani_Resume.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto">
      {/* Click outside backdrop */}
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#090a0f] border border-white/15 rounded-xl shadow-2xl overflow-hidden z-10 max-h-[94vh] flex flex-col my-auto">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#090a0f]/95 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400">
              Verified Executive Document
            </span>
            <span className="text-neutral-600 hidden sm:inline" aria-hidden="true">·</span>
            <span className="text-xs font-mono text-neutral-400 hidden sm:inline">
              Updated 2026
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-mono text-neutral-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded flex items-center gap-1.5 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={handleDownloadMarkdown}
              className="px-3 py-1.5 text-xs font-mono text-white bg-blue-600 hover:bg-blue-500 rounded flex items-center gap-1.5 transition-colors"
              title="Download text file"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </button>

            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 text-xs font-mono text-neutral-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded flex items-center gap-1.5 transition-colors"
              title="Copy to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors ml-1"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Container */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-[#0d0e14] text-neutral-200 print:bg-white print:text-black">
          <div className="max-w-3xl mx-auto space-y-8 font-sans">
            
            {/* Document Header */}
            <div className="text-center pb-6 border-b border-white/10 print:border-black/20">
              <h1 className="text-2xl sm:text-3xl font-bold text-white print:text-black tracking-tight font-display mb-1">
                JEETANDAR N SILWANI
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-mono text-neutral-300 print:text-neutral-700">
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-blue-400" /> +91 9663926665
                </span>
                <span className="text-neutral-600" aria-hidden="true">⋄</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-blue-400" /> Bangalore, KA
                </span>
                <span className="text-neutral-600" aria-hidden="true">⋄</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-blue-400" /> jeetandar.n.silwani@gmail.com
                </span>
              </div>
              <div className="flex items-center justify-center gap-4 text-xs font-mono text-blue-400 mt-2">
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
                <span className="text-neutral-600">⋄</span>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
                <span className="text-neutral-600">⋄</span>
                <span>Portfolio Profile</span>
              </div>
            </div>

            {/* Profile Summary */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold mb-2 pb-1 border-b border-white/10 print:border-black/20">
                PROFILE SUMMARY
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 print:text-neutral-800 leading-relaxed">
                Software development and full stack enthusiast with a strong foundation in MERN stack, data analytics, and business operations. Skilled in building scalable applications, analyzing data for insights, and supporting technical and operational workflows. Experienced in developing user-focused solutions, optimizing processes, and ensuring quality through testing and debugging. Demonstrates strong communication, problem-solving, and collaboration skills with the ability to perform in fast-paced, cross-functional environments.
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold mb-3 pb-1 border-b border-white/10 print:border-black/20">
                TECHNICAL SKILLS
              </h2>
              <div className="space-y-1.5 text-xs text-neutral-300 print:text-neutral-800 font-mono">
                <p><span className="text-white print:text-black font-semibold">Programming:</span> Python, Java, C, C++, JavaScript</p>
                <p><span className="text-white print:text-black font-semibold">Full Stack Development:</span> MERN Stack (MongoDB, Express.js, React.js, Node.js), REST APIs</p>
                <p><span className="text-white print:text-black font-semibold">Mobile & AI Development:</span> Kotlin, Android SDK, Firebase, Gemini AI API</p>
                <p><span className="text-white print:text-black font-semibold">Systems & Databases:</span> SQL, MySQL, MongoDB, Data Structures, OOP, OS, Networking (OSI, TCP/IP, HTTP/HTTPS)</p>
                <p><span className="text-white print:text-black font-semibold">Software Engineering & QA:</span> SDLC, Software Testing, Quality Assurance, Debugging, Root Cause Analysis</p>
                <p><span className="text-white print:text-black font-semibold">Data & Analytics:</span> Power BI, DAX, Data Visualization, Excel (Advanced Functions, Pivot Tables)</p>
                <p><span className="text-white print:text-black font-semibold">Tools & Applications:</span> MS Excel, Git, GitHub, VS Code, Android Studio, Postman, Figma, Framer, Webflow, Canva</p>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold mb-4 pb-1 border-b border-white/10 print:border-black/20">
                EXPERIENCE
              </h2>
              <div className="space-y-5">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                      <h3 className="text-xs sm:text-sm font-bold text-white print:text-black">
                        {exp.role} <span className="font-normal text-neutral-400 print:text-neutral-600">| {exp.company}</span>
                      </h3>
                      <span className="text-xs font-mono text-blue-300 print:text-neutral-600">{exp.period}</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-xs text-neutral-300 print:text-neutral-700">
                      {exp.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold mb-4 pb-1 border-b border-white/10 print:border-black/20">
                KEY PROJECTS
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white print:text-black">
                    CareerPath — AI-Powered Career Guidance App
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-xs text-neutral-300 print:text-neutral-700 mt-1">
                    <li>Developed native Android app in Kotlin with Firebase and Gemini AI API for personalized career discovery.</li>
                    <li>Integrated college discovery, eligibility checks, exam schedules, and fee comparison metrics.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white print:text-black">
                    ID Card Management System
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-xs text-neutral-300 print:text-neutral-700 mt-1">
                    <li>Built full-stack React, SQL, and Express platform automating student record processing and batch identity card generation.</li>
                    <li>Integrated barcode/QR code verification hashes and eliminated clerical printing errors.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white print:text-black">
                    KAIROS — Event Management WebApp
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-xs text-neutral-300 print:text-neutral-700 mt-1">
                    <li>Developed a full-stack MERN platform to manage event registrations and participant data for 400+ attendees.</li>
                    <li>Integrated Google Authentication and Razorpay payment gateway to streamline registration efficiency.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white print:text-black">
                    Blinkit & Sales Operations Analytics — Power BI
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-xs text-neutral-300 print:text-neutral-700 mt-1">
                    <li>Analyzed 10,000+ transactional records using DAX, Star Schema data models, and interactive heatmaps.</li>
                    <li>Modeled delivery compliance, inventory velocity, and customer cohort repeat metrics.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white print:text-black">
                    Faculty Development Program Portal
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-xs text-neutral-300 print:text-neutral-700 mt-1">
                    <li>Engineered responsive academic conference website with Razorpay payment processing and instant receipts.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold mb-3 pb-1 border-b border-white/10 print:border-black/20">
                EDUCATION
              </h2>
              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex justify-between font-bold text-white print:text-black">
                    <span>Bachelor of Computer Applications (BCA) | St Pauls College, Bengaluru</span>
                    <span className="font-mono text-neutral-400 font-normal">2023 – 2026</span>
                  </div>
                  <p className="text-neutral-300 print:text-neutral-700 font-mono">Specialization: Artificial Intelligence & Cybersecurity · CGPA: 7.45</p>
                </div>
                <div>
                  <div className="flex justify-between font-bold text-white print:text-black">
                    <span>Pre-University (CEBA) | Ascent PU College, Bengaluru</span>
                    <span className="font-mono text-neutral-400 font-normal">2021 – 2023</span>
                  </div>
                  <p className="text-neutral-300 print:text-neutral-700 font-mono">Computer Science, Economics, Business Studies, Accountancy · CGPA: 9.03</p>
                </div>
              </div>
            </div>

            {/* Certifications & Leadership */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold mb-3 pb-1 border-b border-white/10 print:border-black/20">
                CERTIFICATIONS & LEADERSHIP
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300 print:text-neutral-700 font-mono">
                <div>• IBM Data Analyst – Certified Program</div>
                <div>• Founder – 11:11 Community</div>
                <div>• Deloitte Software Development Certification</div>
                <div>• Under 25 – India's Largest Youth Community</div>
                <div>• Accenture Software Development Certification</div>
                <div>• Judge – Tech & Non-Tech Competitions</div>
                <div>• IBM Cyber Security – Certified Program</div>
                <div>• Hackathon Campus Crew</div>
                <div>• TCS iON EDGE – Professional Skill Development</div>
                <div>• President – Department of Computer Science</div>
                <div>• Fest Organizer – KAIROS 2026</div>
                <div>• AI Challenge – National Level Winner</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
