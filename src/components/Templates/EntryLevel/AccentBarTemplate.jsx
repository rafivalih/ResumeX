import { useResume } from '@/context/ResumeContext';
import { Mail, Phone, MapPin, Linkedin, Github, Code, ExternalLink } from 'lucide-react';

const AccentBarTemplate = () => {
  const { resumeData } = useResume();
  const { header, summary, education, skills, experience, projects, certifications } = resumeData;

  return (
    <div className="w-full bg-white text-gray-800 font-sans text-sm">
      {/* Header with accent bar */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary to-primary/60" />
        <header className="pt-6 pb-4 px-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">
            {header.fullName || 'Your Name'}
          </h1>
          <p className="text-lg text-gray-600">{header.jobTitle || 'Professional Title'}</p>
          
          <div className="flex flex-wrap gap-4 mt-3 text-xs text-gray-500">
            {header.phone && (
              <span className="flex items-center gap-1 ">
                <Phone className="h-3 w-3" /><a href={`tel:${header.phone.replace(/\s+/g, '')}`}>{header.phone}</a>              </span>
            )}
            {header.email && (
              <span className="flex items-center gap-1 ">
                <Mail className="h-3 w-3" /><a  href={`mailto:${header.email}`}>{header.email}</a>
              </span>
            )}
                {header.linkedin && (
                  <span className="flex items-center gap-1 ">
                    <Linkedin className="h-3 w-3" /> <a href={header.linkedin}className='text-blue-800 underline truncate '>{header.linkedin}</a>
                  </span>
                )}
                {header.github && (
                  <span className="flex items-center gap-1 ">
                    <Github className="h-3 w-3" /><a href={header.github}className='text-blue-800 underline truncate '>{header.github}</a>
                  </span>
                )}
                {header.leetcode && (
                  <span className="flex items-center gap-1 ">
                    <Code className="h-3 w-3" /> <a href={header.leetcode} className='text-blue-800 underline truncate '>{header.leetcode}</a>
                  </span>
                )}
            {header.location && (
              <span className="flex items-center gap-1 ">
                <MapPin className="h-3 w-3" /> {header.location}
              </span>
            )}
          </div>
        </header>
      </div>

      <div className="px-6 pb-6">
        {/* Summary */}
        {summary && (
          <section className="mb-5 pl-4 border-l-4 border-primary">
            <p className="text-gray-600">{summary}</p>
          </section>
        )}

        {/* Skills */}
        {(skills.technical.length > 0 || skills.soft.length > 0) && (
          <section className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
              Skills & Competencies
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {skills.technical.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
              {skills.soft.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs "
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
              Work Experience
            </h2>
            {experience.map((exp) => (
              <div key={exp.id} className="mb-4 relative pl-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gray-200 hover:before:bg-primary before:transition-colors before:rounded">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                  <span className="text-xs text-gray-500">{exp.startDate} - {exp.endDate}</span>
                </div>
                <p className="text-gray-500 text-sm">{exp.company}</p>
                {exp.bulletPoints.length > 0 && (
                  <ul className="mt-2 text-gray-700 space-y-1">
                    {exp.bulletPoints.map((point, idx) => (
                      <li key={idx} className="text-sm pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">
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
          <section className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
              Projects
            </h2>
            {projects.map((proj) => (
              <div key={proj.id} className="mb-3 group">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">{proj.title}</h3>
                  {proj.liveDemo && (
                    <span className='flex items-center gap-[2px] text-blue-800'>
                      <ExternalLink className="h-3 w-3 text-gray-400 group-hover:text-primary transition-colors" />
                    <a href={proj.liveDemo} target="_blank">Demo
													</a>
                    </span>
                  )}
                </div>
                {proj.bulletPoints.length > 0 && (
                  <ul className="text-sm text-gray-700 mt-1 space-y-0.5">
                    {proj.bulletPoints.map((point, idx) => (
                      <li key={idx} className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Education & Certifications */}
        <div className="grid grid-cols-2 gap-6">
          {/* Education */}
          {education.length > 0 && (
            <section>
              <h2 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                Education
              </h2>
              {education.map((edu) => (
                <div key={edu.id} className="mb-2 hover:bg-gray-50 p-2 -mx-2 rounded transition-colors">
                  <h3 className="font-semibold text-gray-900 text-sm">{edu.degree}</h3>
                  <p className="text-gray-500 text-xs">{edu.school}</p>
                  <p className="text-gray-400 text-xs">{edu.date}</p>
                </div>
              ))}
            </section>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <section>
              <h2 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                Certifications
              </h2>
              {certifications.map((cert) => (
                <div key={cert.id} className="mb-2 hover:translate-x-1 transition-transform">
                  <h3 className="font-semibold text-gray-900 text-sm">{cert.title}</h3>
                  <p className="text-gray-500 text-xs">{cert.organization}</p>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccentBarTemplate;
