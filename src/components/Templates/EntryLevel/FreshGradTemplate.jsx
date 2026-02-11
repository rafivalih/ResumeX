import { useResume } from '@/context/ResumeContext';
import { Mail, Phone, MapPin, Linkedin, Github, Code, ExternalLink, GraduationCap, Briefcase, Award, Wrench } from 'lucide-react';

const FreshGradTemplate = () => {
  const { resumeData } = useResume();
  const { header, summary, education, skills, experience, projects, certifications } = resumeData;

  return (
    <div className="w-full bg-white text-gray-800 p-6 font-sans text-sm">
      {/* Header with accent bar */}
      <header className="relative mb-5">
        <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-full" />
        <div className="pl-4">
          <h1 className="text-2xl font-bold text-gray-900">
            {header.fullName || 'Your Name'}
          </h1>
          <p className="text-base text-primary font-medium">{header.jobTitle || 'Recent Graduate'}</p>
          
          <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-600">
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
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-4 bg-gray-50 p-3 rounded-lg">
          <p className="text-gray-700 text-sm leading-relaxed">{summary}</p>
        </section>
      )}

      {/* Education - Featured for Fresh Grads */}
      {education.length > 0 && (
        <section className="mb-4 group">
          <h2 className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-2">
            <GraduationCap className="h-4 w-4 text-primary" />
            Education
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-2 p-3 border border-gray-200 rounded-lg hover:border-primary hover:shadow-sm transition-all duration-200">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-gray-600 text-sm">{edu.school}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-500">{edu.date}</span>
                  {edu.grade && (
                    <p className="text-xs font-medium text-primary mt-0.5">GPA: {edu.grade}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {(skills.technical.length > 0 || skills.soft.length > 0) && (
        <section className="mb-4">
          <h2 className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-2">
            <Wrench className="h-4 w-4 text-primary" />
            Skills & Competencies
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {skills.technical.map((skill, idx) => (
              <span 
                key={idx} 
                className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium hover:bg-primary hover:text-white transition-all duration-200"
              >
                {skill}
              </span>
            ))}
            {skills.soft.map((skill, idx) => (
              <span 
                key={idx} 
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs hover:bg-gray-200 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Projects - Important for Fresh Grads */}
      {projects.length > 0 && (
        <section className="mb-4">
          <h2 className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-2">
            <Briefcase className="h-4 w-4 text-primary" />
            Projects
          </h2>
          <div className="space-y-2">
            {projects.map((proj) => (
              <div key={proj.id} className="p-3 border border-gray-200 rounded-lg hover:border-primary transition-colors">
                <div className="flex items-center gap-2 mb-1">
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
                    {proj.bulletPoints.map((point, idx) => (
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

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-4">
          <h2 className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-2">
            <Briefcase className="h-4 w-4 text-primary" />
            Experience
          </h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-2 p-3 bg-gray-50 rounded-lg hover:bg-primary/5 transition-colors">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-gray-900 text-sm">{exp.position}</h3>
                <span className="text-xs text-gray-500">{exp.startDate} - {exp.endDate}</span>
              </div>
              <p className="text-gray-600 text-xs">{exp.company}</p>
              {exp.bulletPoints.length > 0 && (
                <ul className="text-xs text-gray-700 mt-1 space-y-0.5">
                  {exp.bulletPoints.slice(0, 3).map((point, idx) => (
                    <li key={idx} className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-primary">
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
          <h2 className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-2">
            <Award className="h-4 w-4 text-primary" />
            Certifications
          </h2>
          <div className="flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-xs hover:bg-primary/10 transition-colors">
                <span className="font-medium text-gray-900">{cert.title}</span>
                <span className="text-gray-500">• {cert.organization}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default FreshGradTemplate;
