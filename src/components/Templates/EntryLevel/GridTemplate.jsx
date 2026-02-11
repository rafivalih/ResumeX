import { useResume } from '@/context/ResumeContext';
import { Mail, Phone, MapPin, Linkedin, Github, Code, ExternalLink } from 'lucide-react';

const GridTemplate = () => {
  const { resumeData } = useResume();
  const { header, summary, education, skills, experience, projects, certifications } = resumeData;

  return (
    <div className="w-full bg-white text-gray-800 p-6 font-sans text-sm">
      {/* Header */}
      <header className="mb-5">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {header.fullName || 'Your Name'}
            </h1>
            <p className="text-lg text-primary">{header.jobTitle || 'Professional Title'}</p>
          </div>
          <div className="text-right text-xs text-gray-600 space-y-1">
              {header.phone && (
            <span className="flex items-center gap-1 pl-[5px]">
              <Phone className="h-3 w-3" /><a href={`tel:${header.phone.replace(/\s+/g, '')}`}>{header.phone}</a>
            </span>
          )}
          {header.email && (
            <span className="flex items-center gap-1 text-[12px] ">
              <Mail className="h-3 w-3" /><a  href={`mailto:${header.email}`}>{header.email}</a>
            </span>
          )}
        
          
            {header.location && (
            <span className="flex items-center gap-1 ">
              <MapPin className="h-3 w-3" /> {header.location}  
            </span>
          )}
          </div>
        </div>
        <div className="flex gap-3 mt-2 text-xs">
        {header.linkedin && (
            <span className="flex items-center gap-1 pl-[5px]">
              <Linkedin className="h-3 w-3" /><a href={header.linkedin} className=' text-blue-800 underline'>{header.linkedin}</a> 
            </span>
          )}
          {header.github && (
            <span className="flex items-center gap-1 pl-[0px]">
              <Github className="h-3 w-3" /> <a href={header.github} className=' text-blue-800 underline'>{header.github}</a>
            </span>
          )}
          {header.leetcode && (
            <span className="flex items-center gap-1">
              <Code className="h-3 w-3" /><a href={header.leetcode} className=' text-blue-800 underline'>{header.leetcode}</a>
            </span>
          )}
        </div>
      </header>










      <div className="h-px bg-gray-200 mb-5" />

      {/* Summary */}
      {summary && (
        <section className="mb-5">
          <p className="text-gray-600 leading-relaxed">{summary}</p>
        </section>
      )}

      {/* Main Grid */}
      <div className="grid grid-cols-12 gap-4">
        {/* Left Column */}
        <div className="col-span-4 space-y-4">
          {/* Skills */}
          {(skills.technical.length > 0 || skills.soft.length > 0) && (
            <section>
              <h2 className="text-xs font-bold uppercase text-primary tracking-wider mb-2 pb-1 border-b border-primary">
                Skills
              </h2>
              <div className="space-y-2">
                {skills.technical.length > 0 && (
                  <div>
                    <p className="text-[10px] font-semibold text-gray-500 uppercase mb-1">Technical</p>
                    <div className="flex flex-wrap gap-1">
                      {skills.technical.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="bg-gray-100 px-2 py-0.5 rounded text-[10px] hover:bg-primary hover:text-white transition-all"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {skills.soft.length > 0 && (
                  <div>
                    <p className="text-[10px] font-semibold text-gray-500 uppercase mb-1">Soft Skills</p>
                    <ul className="text-[10px] text-gray-600 space-y-0.5">
                      {skills.soft.map((skill, idx) => (
                        <li key={idx} className="hover:text-primary transition-colors">• {skill}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Education */}
          {education.length > 0 && (
            <section>
              <h2 className="text-xs font-bold uppercase text-primary tracking-wider mb-2 pb-1 border-b border-primary">
                Education
              </h2>
              {education.map((edu) => (
                <div key={edu.id} className="mb-2 hover:bg-gray-50 p-1 -mx-1 rounded transition-colors">
                  <h3 className="font-semibold text-gray-900 text-xs">{edu.degree}</h3>
                  <p className="text-gray-600 text-[10px]">{edu.school}</p>
                  <p className="text-gray-400 text-[10px]">{edu.date}</p>
                  {edu.grade && <p className="text-primary text-[10px] font-medium">GPA: {edu.grade}</p>}
                </div>
              ))}
            </section>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <section>
              <h2 className="text-xs font-bold uppercase text-primary tracking-wider mb-2 pb-1 border-b border-primary">
                Certifications
              </h2>
              {certifications.map((cert) => (
                <div key={cert.id} className="mb-2 hover:translate-x-1 transition-transform">
                  <h3 className="font-semibold text-gray-900 text-xs">{cert.title}</h3>
                  <p className="text-gray-500 text-[10px]">{cert.organization}</p>
                </div>
              ))}
            </section>
          )}
        </div>

        {/* Right Column */}
        <div className="col-span-8 space-y-4">
          {/* Experience */}
          {experience.length > 0 && (
            <section>
              <h2 className="text-xs font-bold uppercase text-primary tracking-wider mb-2 pb-1 border-b border-primary">
                Experience
              </h2>
              {experience.map((exp) => (
                <div key={exp.id} className="mb-3 group">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">{exp.position}</h3>
                    <span className="text-[10px] text-gray-500">{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <p className="text-gray-500 text-xs">{exp.company}</p>
                  {exp.bulletPoints.length > 0 && (
                    <ul className="text-gray-700 mt-1 text-xs space-y-0.5">
                      {exp.bulletPoints.map((point, idx) => (
                        <li key={idx} className="pl-3 relative before:content-['→'] before:absolute before:left-0 before:text-primary">
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <section>
              <h2 className="text-xs font-bold uppercase text-primary tracking-wider mb-2 pb-1 border-b border-primary">
                Projects
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {projects.map((proj) => (
                  <div key={proj.id} className="p-2 bg-gray-50 rounded hover:bg-primary/5 transition-colors group">
                    <div className="flex items-center gap-1 mb-1">
                      <h3 className="font-semibold text-gray-900 text-xs group-hover:text-primary transition-colors">{proj.title}</h3>
                      {proj.liveDemo && (
                        <span className='flex items-center gap-[2px] text-blue-800'>
                          <ExternalLink className="h-2.5 w-2.5 text-gray-400 group-hover:text-primary transition-colors" />
                          <a href={proj.liveDemo} target="_blank">Demo
													</a>
                        </span>
                      )}
                    </div>
                    {proj.bulletPoints.length > 0 && (
                      <ul className="text-[10px] text-gray-600">
                        {proj.bulletPoints.slice(0, 2).map((point, idx) => (
                          <li key={idx}>• {point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default GridTemplate;
