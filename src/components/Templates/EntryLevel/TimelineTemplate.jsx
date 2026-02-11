import { useResume } from '@/context/ResumeContext';
import { Mail, Phone, MapPin, Linkedin, Github, Code, ExternalLink, Circle } from 'lucide-react';

const TimelineTemplate = () => {
  const { resumeData } = useResume();
  const { header, summary, education, skills, experience, projects, certifications } = resumeData;

  return (
    <div className="w-full bg-white text-gray-800 p-6 font-sans text-sm">
      {/* Header */}
      <header className="mb-5 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          {header.fullName || 'Your Name'}
        </h1>
        <p className="text-base text-primary font-medium">{header.jobTitle || 'Professional Title'}</p>
        
        <div className="flex flex-wrap justify-center gap-3 mt-3 text-xs text-gray-500">
          {header.email && (
            <span className="flex items-center gap-1 hover:text-primary transition-colors">
              <Mail className="h-3 w-3" /><a  href={`mailto:${header.email}`}>{header.email}</a>
            </span>
          )}
          {header.phone && (
            <span className="flex items-center gap-1 hover:text-primary transition-colors">
              <Phone className="h-3 w-3" /><a href={`tel:${header.phone.replace(/\s+/g, '')}`}>{header.phone}</a>
            </span>
          )}
          {header.location && (
            <span className="flex items-center gap-1 hover:text-primary transition-colors">
              <MapPin className="h-3 w-3" /> {header.location}
            </span>
          )}
          {header.linkedin && (
            <span className="flex items-center gap-1 hover:text-primary transition-colors">
              <Linkedin className="h-3 w-3" />  <a href={header.linkedin}className='text-blue-800 underline truncate '>{header.linkedin}</a>
            </span>
          )}
          {header.github && (
            <span className="flex items-center gap-1 hover:text-primary transition-colors">
              <Github className="h-3 w-3" /> <a href={header.github}className='text-blue-800 underline truncate '>{header.github}</a>
            </span>
          )}
          {header.leetcode && (
            <span className="flex items-center gap-1 hover:text-primary transition-colors">
              <Code className="h-3 w-3" /> <a href={header.leetcode} className='text-blue-800 underline truncate '>{header.leetcode}</a>
            </span>
          )}
        </div>
      </header>

      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-5" />

      {/* Summary */}
      {summary && (
        <section className="mb-5">
          <p className="text-gray-600 text-center italic">{summary}</p>
        </section>
      )}

      {/* Skills */}
      {(skills.technical.length > 0 || skills.soft.length > 0) && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase text-center text-gray-400 tracking-widest mb-3">
            Skills & Competencies
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.technical.map((skill, idx) => (
              <span 
                key={idx} 
                className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium hover:shadow-md transition-shadow"
              >
                {skill}
              </span>
            ))}
            {skills.soft.map((skill, idx) => (
              <span 
                key={idx} 
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs hover:bg-gray-200 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Experience Timeline */}
      {experience.length > 0 && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase text-center text-gray-400 tracking-widest mb-4">
            Experience
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gray-200" />
            {experience.map((exp) => (
              <div key={exp.id} className="relative pl-10 mb-4 group">
                <Circle className="absolute left-2.5 top-1 h-4 w-4 text-primary fill-white group-hover:fill-primary transition-colors" />
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">{exp.position}</h3>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{exp.startDate} - {exp.endDate}</span>
                </div>
                <p className="text-gray-500 text-sm">{exp.company}</p>
                {exp.bulletPoints.length > 0 && (
                  <ul className="text-gray-700 mt-1 space-y-0.5 text-xs">
                    {exp.bulletPoints.map((point, idx) => (
                      <li key={idx} className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-primary">
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase text-center text-gray-400 tracking-widest mb-3">
            Projects
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {projects.map((proj) => (
              <div key={proj.id} className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:shadow-sm transition-all group">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-gray-900 text-sm group-hover:text-primary transition-colors">{proj.title}</h3>
                  {proj.liveDemo && (
                    <span className='flex items-center gap-[2px] text-blue-800'>
                      <ExternalLink className="h-3 w-3 text-gray-400 group-hover:text-primary transition-colors" />
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

      {/* Education & Certifications */}
      <div className="grid grid-cols-2 gap-4">
        {/* Education */}
        {education.length > 0 && (
          <section>
            <h2 className="text-xs font-bold uppercase text-center text-gray-400 tracking-widest mb-3">
              Education
            </h2>
            {education.map((edu) => (
              <div key={edu.id} className="mb-2 text-center hover:bg-gray-50 p-2 rounded transition-colors">
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
            <h2 className="text-xs font-bold uppercase text-center text-gray-400 tracking-widest mb-3">
              Certifications
            </h2>
            {certifications.map((cert) => (
              <div key={cert.id} className="mb-2 text-center hover:bg-gray-50 p-2 rounded transition-colors">
                <h3 className="font-semibold text-gray-900 text-sm">{cert.title}</h3>
                <p className="text-gray-500 text-xs">{cert.organization}</p>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
};

export default TimelineTemplate;
