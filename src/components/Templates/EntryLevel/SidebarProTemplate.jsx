// import { useResume } from '@/context/ResumeContext';
// import { Mail, Phone, MapPin, Linkedin, Github, Code, ExternalLink } from 'lucide-react';

// const SidebarProTemplate = () => {
//   const { resumeData } = useResume();
//   const { header, summary, education, skills, experience, projects, certifications } = resumeData;

//   return (
//     <div className="w-full bg-white text-gray-800 font-sans text-sm">
//       <div className="grid grid-cols-3 min-h-[1000px]">
        
//         {/* LEFT SIDEBAR */}
//         <aside className="col-span-1 bg-gray-900 text-white p-6 space-y-6">
//           <div>
//             <h1 className="text-xl font-bold">
//               {header.fullName || 'Your Name'}
//             </h1>
//             <p className="text-sm text-gray-300">
//               {header.jobTitle || 'Professional Title'}
//             </p>
//           </div>

//           {/* Contact */}
//           <div className="space-y-2 text-xs">
//             {header.email && (
//               <div className="flex items-center gap-2">
//                 <Mail className="h-3 w-3" /> {header.email}
//               </div>
//             )}
//             {header.phone && (
//               <div className="flex items-center gap-2">
//                 <Phone className="h-3 w-3" /> {header.phone}
//               </div>
//             )}
//             {header.location && (
//               <div className="flex items-center gap-2">
//                 <MapPin className="h-3 w-3" /> {header.location}
//               </div>
//             )}
//             {header.linkedin && (
//               <div className="flex items-center gap-2">
//                 <Linkedin className="h-3 w-3" /> LinkedIn
//               </div>
//             )}
//             {header.github && (
//               <div className="flex items-center gap-2">
//                 <Github className="h-3 w-3" /> GitHub
//               </div>
//             )}
//             {header.leetcode && (
//               <div className="flex items-center gap-2">
//                 <Code className="h-3 w-3" /> LeetCode
//               </div>
//             )}
//           </div>

//           {/* Skills */}
//           {(skills.technical.length > 0 || skills.soft.length > 0) && (
//             <div>
//               <h2 className="text-sm font-semibold mb-2 border-b border-gray-600 pb-1">
//                 SKILLS
//               </h2>
//               <div className="space-y-2 text-xs">
//                 {skills.technical.length > 0 && (
//                   <div>
//                     <p className="font-medium">Technical</p>
//                     <p className="text-gray-300">{skills.technical.join(', ')}</p>
//                   </div>
//                 )}
//                 {skills.soft.length > 0 && (
//                   <div>
//                     <p className="font-medium">Soft Skills</p>
//                     <p className="text-gray-300">{skills.soft.join(', ')}</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}

//           {/* Certifications */}
//           {certifications.length > 0 && (
//             <div>
//               <h2 className="text-sm font-semibold mb-2 border-b border-gray-600 pb-1">
//                 CERTIFICATIONS
//               </h2>
//               <ul className="space-y-1 text-xs">
//                 {certifications.map(cert => (
//                   <li key={cert.id}>
//                     <span className="font-medium">{cert.title}</span>
//                     <div className="text-gray-300">{cert.organization}</div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </aside>

//         {/* RIGHT CONTENT */}
//         <main className="col-span-2 p-8 space-y-6">
          
//           {/* Summary */}
//           {summary && (
//             <section>
//               <h2 className="text-sm font-bold mb-2 text-gray-900">PROFILE</h2>
//               <p className="text-gray-700">{summary}</p>
//             </section>
//           )}

//           {/* Experience */}
//           {experience.length > 0 && (
//             <section>
//               <h2 className="text-sm font-bold mb-2 text-gray-900">EXPERIENCE</h2>
//               {experience.map(exp => (
//                 <div key={exp.id} className="mb-4">
//                   <div className="flex justify-between">
//                     <h3 className="font-semibold">{exp.position}</h3>
//                     <span className="text-xs text-gray-500">
//                       {exp.startDate} - {exp.endDate}
//                     </span>
//                   </div>
//                   <p className="italic text-gray-600">{exp.company}</p>

//                   {exp.bulletPoints.length > 0 && (
//                     <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
//                       {exp.bulletPoints.map((point, idx) => (
//                         <li key={idx}>{point}</li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               ))}
//             </section>
//           )}

//           {/* Projects */}
//           {projects.length > 0 && (
//             <section>
//               <h2 className="text-sm font-bold mb-2 text-gray-900">PROJECTS</h2>
//               {projects.map(proj => (
//                 <div key={proj.id} className="mb-3">
//                   <div className="flex items-center gap-2">
//                     <h3 className="font-semibold">{proj.title}</h3>
//                     {proj.liveDemo && <ExternalLink className="h-3 w-3 text-gray-400" />}
//                   </div>

//                   {proj.bulletPoints.length > 0 && (
//                     <ul className="list-disc list-inside mt-1 text-gray-700 space-y-1">
//                       {proj.bulletPoints.map((point, idx) => (
//                         <li key={idx}>{point}</li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               ))}
//             </section>
//           )}

//           {/* Education */}
//           {education.length > 0 && (
//             <section>
//               <h2 className="text-sm font-bold mb-2 text-gray-900">EDUCATION</h2>
//               {education.map(edu => (
//                 <div key={edu.id} className="mb-3">
//                   <div className="flex justify-between">
//                     <div>
//                       <h3 className="font-semibold">{edu.school}</h3>
//                       <p className="text-gray-600">{edu.degree}</p>
//                     </div>
//                     <span className="text-xs text-gray-500">{edu.date}</span>
//                   </div>
//                   {edu.grade && (
//                     <p className="text-xs text-gray-500 mt-1">Grade: {edu.grade}</p>
//                   )}
//                 </div>
//               ))}
//             </section>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default SidebarProTemplate;




import React from 'react';
import { useResume } from '@/context/ResumeContext';
import { Mail, Phone, MapPin, Linkedin, Github, Code, ExternalLink, Award, Briefcase, GraduationCap } from 'lucide-react';

const SidebarProTemplate = () => {
  const { resumeData } = useResume();
  const { header, summary, education, skills, experience, projects, certifications } = resumeData;

  return (
    <div className="w-full bg-white shadow-lg min-h-[1100px] font-sans text-gray-800">
      <div className="grid grid-cols-12 min-h-[1100px]">
        
        {/* LEFT SIDEBAR (Dark Theme) */}
        <aside className="col-span-4 bg-[#444444] text-white p-8 flex flex-col gap-8">
          {/* Header Section */}
          <section>
            <h1 className="text-2xl font-bold tracking-tight uppercase leading-tight">
              {header.fullName || 'SHAIK RAFIVALI'}
            </h1>
            <p className="text-sm font-medium text-gray-300 mt-1 uppercase tracking-wider">
              {header.jobTitle || 'Frontend Developer'}
            </p>
          </section>

          {/* Contact Details */}
          <section className="space-y-3">
            <div className="flex items-start gap-3 text-[11px] break-all">
              <Mail className="h-4 w-4 mt-0.5 text-gray-400 shrink-0" />
              <span>{header.email || 'rafivalihshaik@gmail.com'}</span>
            </div>
            <div className="flex items-center gap-3 text-[11px]">
              <Phone className="h-4 w-4 text-gray-400 shrink-0" />
              <span>{header.phone || '9392473521'}</span>
            </div>
            <div className="flex items-start gap-3 text-[11px]">
              <MapPin className="h-4 w-4 mt-0.5 text-gray-400 shrink-0" />
              <span>{header.location || 'Tadipatri, Andhra Pradesh'}</span>
            </div>
            {header.linkedin && (
              <div className="flex items-center gap-3 text-[11px]">
                <Linkedin className="h-4 w-4 text-gray-400 shrink-0" />
                <span className="truncate text-blue-300 underline"><a href={header.linkedin}>{header.linkedin}</a></span>
              </div>
            )}
            {header.github && (
              <div className="flex items-center gap-3 text-[11px]">
                <Github className="h-4 w-4 text-gray-400 shrink-0" />
                <span className="truncate text-blue-300 underline"><a href={header.github}>{header.github}</a></span>
              </div>
            )}
            {header.leetcode && (
              <div className="flex items-center gap-3 text-[11px]">
                <Code className="h-4 w-4 text-gray-400 shrink-0" />
                <span className="truncate text-blue-300 underline"><a href={header.leetcode}>{header.leetcode}</a></span>
              </div>
            )}
          </section>

          {/* Skills Section */}

           {education.length > 0 && (
            <section>
              <h2 className="text-base font-bold text-white border-b-2 border-gray-200 pb-1 mb-4 uppercase tracking-wide">
                Education
              </h2>
              <div className="space-y-4 text-white">
                {education.map((edu) => (
                  <div key={edu.id} className="flex justify-between">
                    <div>
                      <h3 className="font-bold text-white text-[13px]">{edu.school}</h3>
                      <p className="text-[11.5px] text-white">{edu.degree}</p>
                      {edu.grade && (
                        <p className="text-[11px] font-medium text-white mt-1 uppercase">Grade: {edu.grade}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] font-bold text-white italic">{edu.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
         

          {/* Certifications Section */}
          {certifications.length > 0 && (
            <section>
              <h2 className="text-sm font-bold border-b border-gray-500 pb-2 mb-4 tracking-widest uppercase">
                Certifications
              </h2>
              <ul className="space-y-3 text-[11px]">
                {certifications.map((cert) => (
                  <li key={cert.id} className="flex gap-2">
                    <span className="text-gray-400">•</span>
                    <div>
                      <span className="font-semibold block">{cert.title}</span>
                      <span className="text-gray-300">{cert.organization}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </aside>

        {/* RIGHT CONTENT AREA */}
        <main className="col-span-8 p-10 space-y-8 bg-white">
          
          {/* Professional Summary */}
          {summary && (
            <section>
              <h2 className="text-base font-bold text-gray-900 border-b-2 border-gray-200 pb-1 mb-3 uppercase tracking-wide flex items-center gap-2">
                Professional Summary
              </h2>
              <p className="text-[12px] leading-relaxed text-gray-700 text-justify">
                {summary}
              </p>
            </section>
          )}


           <section>
            <h2 className="text-sm font-bold border-b border-gray-500 pb-2 mb-4 tracking-widest uppercase text-gray-900">
              Skills & Competencies
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-[11px] font-bold text-gray-900 mb-[2px] uppercase italic">• Technical</p>
                <p className="text-[11px] leading-relaxed text-gray-600">
                  {skills.technical.join(', ') || 'React, Tailwind CSS, JavaScript, HTML5, Core Java'}
                </p>
              </div>
              <div>
                <p className="text-[11px] font-bold text-gray-600 mb-[2px] uppercase italic">• Tools & Platforms</p>
                <p className="text-[11px] leading-relaxed text-gray-900">
                  Postman, Vercel, Git, GitHub, VS Code
                </p>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          {projects.length > 0 && (
            <section>
              <h2 className="text-base font-bold text-gray-900 border-b-2 border-gray-200 pb-1 mb-4 uppercase tracking-wide flex items-center justify-between">
                Projects
                <ExternalLink className="h-4 w-4 text-gray-400" />
              </h2>
              <div className="space-y-5">
                {projects.map((proj) => (
                  <div key={proj.id}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-gray-800 text-[13px]">{proj.title}</h3>
                    </div>
                    <ul className="mt-1 space-y-1">
                      {proj.bulletPoints.map((point, idx) => (
                        <li key={idx} className="text-[11.5px] text-gray-600 flex gap-2">
                          <span className="text-gray-400 shrink-0">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education Section */}
         

        </main>
      </div>
    </div>
  );
};

export default SidebarProTemplate;