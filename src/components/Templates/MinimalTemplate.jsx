import { useResume } from '@/context/ResumeContext';
import { Mail, Phone, MapPin, Linkedin, Github, Code, ExternalLink } from 'lucide-react';

const MinimalTemplate = () => {
  const { resumeData } = useResume();
  const { header, summary, education, skills, experience, projects, certifications } = resumeData;

  return (
    <div className="w-full h-full bg-white text-gray-900 p-8 font-sans text-sm leading-relaxed">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-light text-gray-900 uppercase">
          {header.fullName || 'Your Name'}
        </h1>
        <p className="text-lg text-gray-500 font-light">{header.jobTitle || 'Professional Title'}</p>
        
        <div className="mt-[3px] flex flex-wrap gap-x-6 gap-y-1 text-xs text-gray-500">
          {header.phone && (
            <span className="flex items-center gap-1.5">
               <Phone className="h-3 w-3" /><a href={`tel:${header.phone.replace(/\s+/g, '')}`}>{header.phone}</a>
            </span>
          )}
          {header.email && (
            <span className="flex items-center gap-1.5">
             <Mail className="h-3 w-3" /><a  href={`mailto:${header.email}`}>{header.email}</a>
            </span>
          )}
              {header.linkedin && (
                <span className="flex items-center gap-1.5">
                  <Linkedin className="h-3 w-3" /><a href={header.linkedin} className=' text-blue-800 underline'>{header.linkedin}</a>
    
                </span>
              )}
              {header.github && (
                <span className="flex items-center gap-1.5">
                  <Github className="h-3 w-3" />	<a href={header.github} className=' text-blue-800 underline'>{header.github}</a>
    
                </span>
              )}
              {header.leetcode && (
                <span className="flex items-center gap-1.5">
                  <Code className="h-3 w-3" /><a href={header.leetcode} className=' text-blue-800 underline'>{header.leetcode}</a>
                </span>
              )}
          {header.location && (
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3" /> {header.location}
            </span>
          )}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-4">
          <h2 className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-4">
            SUMMARY
          </h2>
          <p className="text-gray-600 leading-relaxed">{summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-4">
            Experience
          </h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-5">
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 className="font-medium text-gray-900">{exp.position}</h3>
                <span className="text-xs text-gray-400">
                  {exp.startDate} — {exp.endDate}
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-2">{exp.company}</p>
              {exp.bulletPoints.length > 0 && (
                <ul className="text-gray-600 space-y-1">
                  {exp.bulletPoints.map((point, idx) => (
                    <li key={idx} className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-gray-300">
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-4">
            Education
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <div className="flex justify-between items-baseline">
                <h3 className="font-medium text-gray-900">{edu.degree}</h3>
                <span className="text-xs text-gray-400">{edu.date}</span>
              </div>
              <p className="text-gray-500 text-sm">
                {edu.school} {edu.grade && <span className="text-gray-400">· {edu.grade}</span>}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {(skills.technical.length > 0 || skills.soft.length > 0) && (
        <section className="mb-6">
          <h2 className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-4">
            Skills
          </h2>
          <div className="space-y-2">
            {skills.technical.length > 0 && (
              <p className="text-gray-700">
                {skills.technical.join(' · ')}
              </p>
            )}
            {skills.soft.length > 0 && (
              <p className="text-gray-500 text-sm">
                {skills.soft.join(' · ')}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-4">
            Projects
          </h2>
          {projects.map((proj) => (
            <div key={proj.id} className="mb-4">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-medium text-gray-900">{proj.title}</h3>
                {proj.liveDemo && (
                  <span className='flex items-center gap-[2px] text-blue-800'>
                  <ExternalLink className="h-3 w-3 text-gray-400" />
                  <a href={proj.liveDemo} target="_blank">Demo
													</a>
                  </span>
                )}
              </div>
              {proj.bulletPoints.length > 0 && (
                <ul className="text-gray-600 space-y-1">
                  {proj.bulletPoints.map((point, idx) => (
                    <li key={idx} className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-gray-300">
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section>
          <h2 className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-4">
            Certifications
          </h2>
          <div className="space-y-2">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex justify-between items-baseline">
                <div>
                  <span className="font-medium text-gray-900">{cert.title}</span>
                  <span className="text-gray-500 text-sm"> · {cert.organization}</span>
                </div>
                <span className="text-xs text-gray-400">
                  {cert.startDate}
                  {cert.noExpiry ? '' : cert.endDate ? ` — ${cert.endDate}` : ''}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default MinimalTemplate;
