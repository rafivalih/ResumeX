import { useResume } from '@/context/ResumeContext';
import { Mail, Phone, MapPin, Linkedin, Github, Code, ExternalLink, Terminal, Cpu, BookOpen, Trophy } from 'lucide-react';

const TechFocusTemplate = () => {
  const { resumeData } = useResume();
  const { header, summary, education, skills, experience, projects, certifications } = resumeData;

  return (
    <div className="w-full bg-white text-gray-800 font-mono text-sm">
      {/* Header */}
      <header className="bg-gray-900 text-white p-5 mb-5">
        <div className="flex items-center gap-2 mb-2">
          <Terminal className="h-5 w-5 text-green-400" />
          <span className="text-green-400 text-sm">~/</span>
          <h1 className="text-xl font-bold">
            {header.fullName || 'Your Name'}
          </h1>
        </div>
        <p className="text-gray-300 ml-7">{header.jobTitle || 'Developer'}</p>
        
        <div className="flex flex-wrap gap-4 mt-4 ml-7 text-xs text-gray-400">
          {header.email && (
            <span className="flex items-center gap-1 hover:text-green-400 transition-colors">
              <Mail className="h-3 w-3" /><a  href={`mailto:${header.email}`}>{header.email}</a>
            </span>
          )}
          {header.phone && (
            <span className="flex items-center gap-1 hover:text-green-400 transition-colors">
              <Phone className="h-3 w-3" /><a href={`tel:${header.phone.replace(/\s+/g, '')}`}>{header.phone}</a>
            </span>
          )}
          {header.location && (
            <span className="flex items-center gap-1 hover:text-green-400 transition-colors">
              <MapPin className="h-3 w-3" /> {header.location}
            </span>
          )}
          {header.linkedin && (
            <span className="flex items-center gap-1 hover:text-green-400 transition-colors">
              <Linkedin className="h-3 w-3" />  <a href={header.linkedin}className='text-blue-800 underline truncate '>{header.linkedin}</a>
            </span>
          )}
          {header.github && (
            <span className="flex items-center gap-1 hover:text-green-400 transition-colors">
              <Github className="h-3 w-3" /> <a href={header.github}className='text-blue-800 underline truncate '>{header.github}</a>
            </span>
          )}
          {header.leetcode && (
            <span className="flex items-center gap-1 hover:text-green-400 transition-colors">
              <Code className="h-3 w-3" /> <a href={header.leetcode} className='text-blue-800 underline truncate '>{header.leetcode}</a>
            </span>
          )}
        </div>
      </header>

      <div className="px-5 pb-5">
        {/* Summary */}
        {summary && (
          <section className="mb-4 p-3 bg-gray-50 border-l-4 border-green-500 font-sans">
            <p className="text-gray-700 text-sm">{summary}</p>
          </section>
        )}

        {/* Skills - Featured */}
        {(skills.technical.length > 0 || skills.soft.length > 0) && (
          <section className="mb-4">
            <h2 className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-3">
              <Cpu className="h-4 w-4 text-primary" />
              <span className="text-green-600">const</span> skills <span className="text-gray-500">=</span>
            </h2>
            <div className="ml-6 p-3 bg-gray-900 rounded text-white font-mono text-xs">
              <div className="text-gray-400">{'{'}</div>
              {skills.technical.length > 0 && (
                <div className="ml-4">
                  <span className="text-purple-400">technical</span>
                  <span className="text-gray-400">: [</span>
                  <div className="ml-4 flex flex-wrap gap-1">
                    {skills.technical.map((skill, idx) => (
                      <span key={idx} className="text-green-400 hover:text-yellow-400 transition-colors">
                        "{skill}"{idx < skills.technical.length - 1 ? ',' : ''}
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-400">],</span>
                </div>
              )}
              {skills.soft.length > 0 && (
                <div className="ml-4">
                  <span className="text-purple-400">soft</span>
                  <span className="text-gray-400">: [</span>
                  <span className="text-blue-400">{skills.soft.map(s => `"${s}"`).join(', ')}</span>
                  <span className="text-gray-400">]</span>
                </div>
              )}
              <div className="text-gray-400">{'}'}</div>
            </div>
          </section>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <section className="mb-4">
            <h2 className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-3">
              <Code className="h-4 w-4 text-primary" />
              Projects
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {projects.map((proj) => (
                <div key={proj.id} className="p-3 border border-gray-200 rounded-lg hover:border-green-500 hover:shadow-md transition-all group font-sans">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-gray-900 text-sm group-hover:text-green-600 transition-colors">{proj.title}</h3>
                    {proj.liveDemo && (
                      <span className='flex items-center gap-[2px] text-blue-800'>
                        <ExternalLink className="h-3 w-3 text-gray-400 group-hover:text-green-500 transition-colors" />
                      <a href={proj.liveDemo} target="_blank">Demo
													</a>
                      </span>
                    )}
                  </div>
                  {proj.bulletPoints.length > 0 && (
                    <ul className="text-xs text-gray-600 space-y-0.5">
                      {proj.bulletPoints.slice(0, 2).map((point, idx) => (
                        <li key={idx} className="pl-3 relative before:content-['>'] before:absolute before:left-0 before:text-green-500 before:font-mono">
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

        {/* Experience */}
        {experience.length > 0 && (
          <section className="mb-4 font-sans">
            <h2 className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-3 font-mono">
              <Terminal className="h-4 w-4 text-primary" />
              Experience
            </h2>
            {experience.map((exp) => (
              <div key={exp.id} className="mb-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-gray-900 text-sm">{exp.position}</h3>
                  <span className="text-xs text-gray-500 font-mono">{exp.startDate} - {exp.endDate}</span>
                </div>
                <p className="text-gray-600 text-xs">{exp.company}</p>
                {exp.bulletPoints.length > 0 && (
                  <ul className="text-xs text-gray-700 mt-1 space-y-0.5">
                    {exp.bulletPoints.slice(0, 3).map((point, idx) => (
                      <li key={idx} className="pl-3 relative before:content-['>'] before:absolute before:left-0 before:text-green-500 before:font-mono">
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
        <div className="grid grid-cols-2 gap-4 font-sans">
          {education.length > 0 && (
            <section>
              <h2 className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-2 font-mono">
                <BookOpen className="h-4 w-4 text-primary" />
                Education
              </h2>
              {education.map((edu) => (
                <div key={edu.id} className="mb-2 hover:translate-x-1 transition-transform">
                  <h3 className="font-semibold text-gray-900 text-xs">{edu.degree}</h3>
                  <p className="text-gray-600 text-xs">{edu.school}</p>
                  <p className="text-gray-400 text-xs">{edu.date}</p>
                </div>
              ))}
            </section>
          )}

          {certifications.length > 0 && (
            <section>
              <h2 className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-2 font-mono">
                <Trophy className="h-4 w-4 text-primary" />
                Certifications
              </h2>
              {certifications.map((cert) => (
                <div key={cert.id} className="mb-2 hover:translate-x-1 transition-transform">
                  <h3 className="font-semibold text-gray-900 text-xs">{cert.title}</h3>
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

export default TechFocusTemplate;
