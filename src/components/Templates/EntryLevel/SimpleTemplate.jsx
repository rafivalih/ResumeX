import { useResume } from '@/context/ResumeContext';
import { Mail, Phone, MapPin, Linkedin, Github, Code, ExternalLink } from 'lucide-react';

const SimpleTemplate = () => {
  const { resumeData } = useResume();
  const { header, summary, education, skills, experience, projects, certifications } = resumeData;

  return (
    <div className="w-full bg-white text-gray-800 p-8 font-serif text-sm leading-relaxed">
      {/* Header */}
      <header className="text-center mb-6 pb-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          {header.fullName || 'Your Name'}
        </h1>
        <p className="text-base text-gray-600">{header.jobTitle || 'Professional Title'}</p>
        
        <div className="flex flex-wrap justify-center gap-3 mt-3 text-xs text-gray-500">
          {header.email && (
            <span className="flex items-center gap-1 hover:text-gray-800 transition-colors">
              <Mail className="h-3 w-3" /> {header.email}
            </span>
          )}
          {header.phone && (
            <span className="flex items-center gap-1 hover:text-gray-800 transition-colors">
              <Phone className="h-3 w-3" /> {header.phone}
            </span>
          )}
          {header.location && (
            <span className="flex items-center gap-1 hover:text-gray-800 transition-colors">
              <MapPin className="h-3 w-3" /> {header.location}
            </span>
          )}
          {header.linkedin && (
            <span className="flex items-center gap-1 hover:text-gray-800 transition-colors">
              <Linkedin className="h-3 w-3" />  <a href={header.linkedin}className='text-blue-800 underline truncate '>{header.linkedin}</a>
            </span>
          )}
          {header.github && (
            <span className="flex items-center gap-1 hover:text-gray-800 transition-colors">
              <Github className="h-3 w-3" /> <a href={header.github}className='text-blue-800 underline truncate '>{header.github}</a>
            </span>
          )}
          {header.leetcode && (
            <span className="flex items-center gap-1 hover:text-gray-800 transition-colors">
              <Code className="h-3 w-3" /> <a href={header.leetcode} className='text-blue-800 underline truncate '>{header.leetcode}</a>
            </span>
          )}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-5">
          <h2 className="text-sm font-bold text-gray-900 mb-2">OBJECTIVE</h2>
          <p className="text-gray-700 italic">{summary}</p>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-5">
          <h2 className="text-sm font-bold text-gray-900 mb-2">EDUCATION</h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-3 hover:bg-gray-50 p-2 -mx-2 rounded transition-colors">
              <div className="flex justify-between items-baseline">
                <div>
                  <h3 className="font-semibold text-gray-900">{edu.school}</h3>
                  <p className="text-gray-600">{edu.degree}</p>
                </div>
                <span className="text-xs text-gray-500">{edu.date}</span>
              </div>
              {edu.grade && <p className="text-gray-500 text-xs mt-1">Grade: {edu.grade}</p>}
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {(skills.technical.length > 0 || skills.soft.length > 0) && (
        <section className="mb-5">
          <h2 className="text-sm font-bold text-gray-900 mb-2">SKILLS</h2>
          <div className="space-y-2">
            {skills.technical.length > 0 && (
              <div>
                <span className="font-medium text-gray-700">Technical: </span>
                <span className="text-gray-600">{skills.technical.join(', ')}</span>
              </div>
            )}
            {skills.soft.length > 0 && (
              <div>
                <span className="font-medium text-gray-700">Soft Skills: </span>
                <span className="text-gray-600">{skills.soft.join(', ')}</span>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-5">
          <h2 className="text-sm font-bold text-gray-900 mb-2">EXPERIENCE</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-4 hover:bg-gray-50 p-2 -mx-2 rounded transition-colors">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                <span className="text-xs text-gray-500">{exp.startDate} - {exp.endDate}</span>
              </div>
              <p className="text-gray-600 italic">{exp.company}</p>
              {exp.bulletPoints.length > 0 && (
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  {exp.bulletPoints.map((point, idx) => (
                    <li key={idx}>{point}</li>
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
          <h2 className="text-sm font-bold text-gray-900 mb-2">PROJECTS</h2>
          {projects.map((proj) => (
            <div key={proj.id} className="mb-3 hover:bg-gray-50 p-2 -mx-2 rounded transition-colors">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-gray-900">{proj.title}</h3>
                {proj.liveDemo && (
                  <div>
                    <ExternalLink className="h-3 w-3 text-gray-400 hover:text-primary transition-colors" />
                  <a href={proj.liveDemo} target="_blank">Demo
													</a>
                  </div>
                )}
              </div>
              {proj.bulletPoints.length > 0 && (
                <ul className="list-disc list-inside text-gray-700 mt-1 space-y-0.5">
                  {proj.bulletPoints.map((point, idx) => (
                    <li key={idx}>{point}</li>
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
          <h2 className="text-sm font-bold text-gray-900 mb-2">CERTIFICATIONS</h2>
          <ul className="space-y-1">
            {certifications.map((cert) => (
              <li key={cert.id} className="text-gray-700 hover:text-primary transition-colors">
                <span className="font-medium">{cert.title}</span>
                <span className="text-gray-500"> - {cert.organization}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default SimpleTemplate;
