import { useResume } from '@/context/ResumeContext';
import { Mail, Phone, MapPin, Linkedin, Github, Code, ExternalLink } from 'lucide-react';

const CleanTemplate = () => {
  const { resumeData } = useResume();
  const { header, summary, education, skills, experience, projects, certifications } = resumeData;

  return (
    <div className="w-full bg-white text-gray-800 p-8 font-sans text-sm leading-relaxed">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-light text-gray-900 tracking-tight">
          {header.fullName || 'Your Name'}
        </h1>
        <p className="text-lg text-primary font-medium mt-1">{header.jobTitle || 'Professional Title'}</p>
        
        <div className="flex flex-wrap gap-4 mt-3 text-xs text-gray-500">
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
            {header.location && (
            <span className="flex items-center gap-1 ">
              <MapPin className="h-3 w-3" /> {header.location}  
            </span>
          )}
        </div>
      </header>

      <div className="h-px bg-gradient-to-r from-primary via-primary/50 to-transparent mb-6" />

      {/* Summary */}
      {summary && (
        <section className="mb-5">
          <p className="text-gray-600 leading-relaxed">{summary}</p>
        </section>
      )}

      {/* Skills */}
      {(skills.technical.length > 0 || skills.soft.length > 0) && (
        <section className="mb-5">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Skills & Competencies
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.technical.map((skill, idx) => (
              <span 
                key={idx} 
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-primary hover:text-white transition-all duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
            {skills.soft.map((skill, idx) => (
              <span 
                key={idx} 
                className="border border-gray-300 text-gray-600 px-3 py-1 rounded-full text-xs hover:border-primary hover:text-primary transition-all duration-200 cursor-default"
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
          <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Experience
          </h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-4 pl-4 border-l-2 border-gray-200 hover:border-primary transition-colors duration-200">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                <span className="text-xs text-gray-500">{exp.startDate} - {exp.endDate}</span>
              </div>
              <p className="text-gray-500 text-sm">{exp.company}</p>
              {exp.bulletPoints.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {exp.bulletPoints.map((point, idx) => (
                    <li key={idx} className="text-gray-600 text-sm pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-primary">
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
          <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Projects
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {projects.map((proj) => (
              <div key={proj.id} className="p-3 bg-gray-50 rounded-lg hover:bg-primary/5 transition-colors duration-200">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-gray-900 text-sm">{proj.title}</h3>
                  {proj.liveDemo && (
                    <span className='flex items-center gap-[2px] text-blue-800'>
                      <ExternalLink className="h-3 w-3 text-primary" />
                      <a href={proj.liveDemo} target="_blank">Demo
													</a>
                    </span>
                  )}
                </div>
                {proj.bulletPoints.length > 0 && (
                  <ul className="text-xs text-gray-600 space-y-0.5">
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

      {/* Education & Certifications Row */}
      <div className="grid grid-cols-2 gap-6">
        {/* Education */}
        {education.length > 0 && (
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Education
            </h2>
            {education.map((edu) => (
              <div key={edu.id} className="mb-2">
                <h3 className="font-semibold text-gray-900 text-sm">{edu.degree}</h3>
                <p className="text-gray-500 text-xs">{edu.school}</p>
                <p className="text-gray-400 text-xs">{edu.date} {edu.grade && `• ${edu.grade}`}</p>
              </div>
            ))}
          </section>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Certifications
            </h2>
            {certifications.map((cert) => (
              <div key={cert.id} className="mb-2 group">
                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-primary transition-colors">{cert.title}</h3>
                <p className="text-gray-500 text-xs">{cert.organization}</p>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
};

export default CleanTemplate;
