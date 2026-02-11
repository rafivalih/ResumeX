import { useResume } from '@/context/ResumeContext';
import { Mail, Phone, MapPin, Linkedin, Github, Code, ExternalLink } from 'lucide-react';

const ClassicTemplate = () => {
  const { resumeData } = useResume();
  const { header, summary,experience, education, skills, projects, certifications } = resumeData;

  return (
    // <div className="w-full h-full bg-white text-gray-800 p-6 font-sans text-sm leading-relaxed">
    <div className="w-full h-auto min-h-screen bg-white text-gray-800 p-6 font-sans text-sm leading-relaxed">
      {/* Header */}
      <style>{`
        @media print {
          section { 
            break-inside: avoid; 
            display: block;
            margin-bottom: 5px;
          }
          header { break-inside: avoid; }
        }
      `}</style>
      <header className="text-left  pb-0 mb-1">
        <h1 className="text-2xl font-bold text-gray-900 uppercase leading-tight mb-[0px]">
          {header.fullName || 'Your Name'}
        </h1>
        <p className="text-base text-gray-600 uppercase" >{header.jobTitle || 'Professional Title'}</p>
        
        <div className="flex flex-wrap justify-start gap-1 text-xs text-gray-600">
          {header.phone && (
            <span className="flex items-center gap-1 pl-[1    px]">
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

      {/* Summary */}
      {summary && (
        <section className="mb-[1px]">
          <h2 className="text-sm font-bold uppercase text-gray-900 border-b border-gray-300 pb-0 mt-[0.5px]">
            Professional Summary
          </h2>
          <p className="text-gray-700 text-[12px]">{summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-1">
          <h2 className="text-sm font-bold uppercase text-gray-900 border-b border-gray-300 pb-[2px] mb-[2px]">
            Work Experience
          </h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-[2px]">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                <span className="text-[10px] text-gray-500 ">
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>
              <p className="text-gray-600 italic text-xs mb-[2px]">{exp.company}</p>
              {exp.bulletPoints.length > 0 && (
                <ul className="list-disc  text-gray-700 ml-[2px] text-[12px]">
                  {exp.bulletPoints.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-[1px]">
          <h2 className="text-sm font-bold uppercase text-gray-900 border-b border-gray-300 pb-[1px] mb-[0.2px]">
            Education
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-p2px ">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-[13px] text-gray-900">{edu.degree}</h3>
                <span className="text-[11px] text-gray-500">{edu.date}</span>
              </div>
              <p className="text-gray-600 text-[12px]">
                {edu.school} <span className='pr-[15px]'></span> {edu.grade && `• GPA: ${edu.grade}`}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {(skills.technical.length > 0 || skills.soft.length > 0) && (
        <section className="mb-[1px]">
          <h2 className="text-[14px] font-bold uppercase text-gray-900 border-b border-gray-300 pb-1 mb-[1px]">
            Skills
          </h2>
          {skills.technical.length > 0 && (
            <p className="mb-[1px]">
              <span className="font-medium text-[13px]"><strong>Technical: </strong></span><span className='text-[12px]'>{skills.technical.join(', ')}</span>
            </p>
          )}
          {skills.soft.length > 0 && (
            <p>
              <span className="font-medium text-[13px] "><strong>Soft Skills:</strong></span><span className='text-[12px]'>{skills.soft.join(', ')}</span>
            </p>
          )}
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-[2px]">
          <h2 className="text-sm font-bold uppercase text-gray-900 border-b border-gray-300 pb-1 mb-[2px]">
            Projects
          </h2>
          {projects.map((proj) => (
            <div key={proj.id} className="mb-[2px]">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-gray-900">{proj.title}</h3>
                {proj.liveDemo && (
                  <span className="text-xs text-blue-600 flex items-center gap-0.5">
                    <ExternalLink className="h-3 w-3" /><a href={proj.liveDemo} target='_blank'>Demo</a> 
                  </span>
                )}
              </div>
              {proj.bulletPoints.length > 0 && (
                <ul className="list-disc list-inside text-gray-700 ml-2">
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
        <section className="mb-[2px]">
          <h2 className="text-sm font-bold uppercase text-gray-900 border-b border-gray-300 pb-1 mb-2[]px]">
            Certifications
          </h2>
          {certifications.map((cert) => (
            <div key={cert.id} className="mb-[2px]">
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-gray-900">{cert.title}</h3>
                <span className="text-xs text-gray-500">
                  {cert.startDate} {!cert.noExpiry && cert.endDate && `- ${cert.endDate}`}
                  {cert.noExpiry && '(No Expiry)'}
                </span>
              </div>
              <p className="text-gray-600 text-xs">
                {cert.organization} {cert.certId && `• ID: ${cert.certId}`}
              </p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default ClassicTemplate;
