import { useResume } from '@/context/ResumeContext';
import { Mail, Phone, MapPin, Linkedin, Github, Code, ExternalLink } from 'lucide-react';

const BoldHeaderTemplate = () => {
  const { resumeData } = useResume();
  const { header, summary, education, skills, experience, projects, certifications } = resumeData;

  return (
    <div className="w-full bg-white text-gray-800 font-sans text-sm">
      {/* Bold Header */}
      <header className="bg-gray-900 text-white p-6 mb-6">
        <h1 className="text-3xl font-bold tracking-tight mb-1">
          {header.fullName || 'Your Name'}
        </h1>
        <p className="text-lg text-gray-300">{header.jobTitle || 'Professional Title'}</p>
        
        <div className="flex flex-wrap gap-4 mt-4 text-xs text-gray-300">
         	{header.phone && (
						<span className="flex items-center gap-1 bg-slate-700/50 px-2 py-1 rounded">
							<Phone className="h-3 w-3" /><a href={`tel:${header.phone.replace(/\s+/g, '')}`}>{header.phone}</a>
						</span>
					)}
					{header.email && (
						<span className="flex items-center gap-1 bg-slate-700/50 px-2 py-1 rounded">
							<Mail className="h-3 w-3" /><a  href={`mailto:${header.email}`}>{header.email}</a>
						</span>
					)}
				
					{header.linkedin && (
						<span className="flex items-center gap-1 bg-slate-700/50 px-2 py-1 rounded">
							<Linkedin className="h-3 w-3" />{" "}
							<a href={header.linkedin} className="hover:text-white">{header.linkedin}</a>
						</span>
					)}
					{header.github && (
						<span className="flex items-center gap-1 bg-slate-700/50 px-2 py-1 rounded">
							<Github className="h-3 w-3" /> <a href={header.github} className="hover:text-white">{header.github}</a>
						</span>
					)}
					{header.leetcode && (
						<span className="flex items-center gap-1 bg-slate-700/50 px-2 py-1 rounded">
							<Code className="h-3 w-3" />{" "}
							<a href={header.leetcode}className="hover:text-white">{header.leetcode}</a>
						</span>
					)}
						{header.location && (
						<span className="flex items-center gap-1 bg-slate-700/50 px-2 py-1 rounded">
							<MapPin className="h-3 w-3" /> {header.location}
						</span>
					)}
        </div>
      </header>

      <div className="px-6 pb-6">
        {/* Summary */}
        {summary && (
          <section className="mb-5">
            <p className="text-gray-600 leading-relaxed">{summary}</p>
          </section>
        )}

        {/* Skills */}
        {(skills.technical.length > 0 || skills.soft.length > 0) && (
          <section className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3 pb-1 border-b-2 border-gray-900">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.technical.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="bg-gray-900 text-white px-2 py-1 rounded text-xs hover:bg-gray-700 transition-colors"
                >
                  {skill}
                </span>
              ))}
              {skills.soft.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="border border-gray-900 text-gray-900 px-2 py-1 rounded text-xs hover:bg-gray-900 hover:text-white transition-colors"
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
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3 pb-1 border-b-2 border-gray-900">
              Experience
            </h2>
            {experience.map((exp) => (
              <div key={exp.id} className="mb-4 group">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">{exp.position}</h3>
                  <span className="text-xs text-gray-500">{exp.startDate} - {exp.endDate}</span>
                </div>
                <p className="text-gray-500 text-sm">{exp.company}</p>
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
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3 pb-1 border-b-2 border-gray-900">
              Projects
            </h2>
            {projects.map((proj) => (
              <div key={proj.id} className="mb-3 group">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">{proj.title}</h3>
                  {proj.liveDemo && (
                    <span className='flex items-center gap-[2px] text-blue-800'>
                      <ExternalLink className="h-3 w-3 text-gray-400 group-hover:text-primary transition-colors" />
                      <a href={proj.liveDemo} target="_blank">Demo
													</a>
                    </span>
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

        {/* Education & Certifications */}
        <div className="grid grid-cols-2 gap-4">
          {/* Education */}
          {education.length > 0 && (
            <section>
              <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3 pb-1 border-b-2 border-gray-900">
                Education
              </h2>
              {education.map((edu) => (
                <div key={edu.id} className="mb-2">
                  <h3 className="font-bold text-gray-900 text-sm">{edu.degree}</h3>
                  <p className="text-gray-600 text-xs">{edu.school}</p>
                  <p className="text-gray-500 text-xs">{edu.date}</p>
                </div>
              ))}
            </section>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <section>
              <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3 pb-1 border-b-2 border-gray-900">
                Certifications
              </h2>
              {certifications.map((cert) => (
                <div key={cert.id} className="mb-2 hover:translate-x-1 transition-transform">
                  <h3 className="font-bold text-gray-900 text-sm">{cert.title}</h3>
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

export default BoldHeaderTemplate;
