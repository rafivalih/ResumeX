import { useResume } from "@/context/ResumeContext";
import {
	Mail,
	Phone,
	MapPin,
	Linkedin,
	Github,
	Code,
	ExternalLink,
} from "lucide-react";

const CenteredTemplate = () => {
	const { resumeData } = useResume();
	const {
		header,
		summary,
		education,
		skills,
		experience,
		projects,
		certifications,
	} = resumeData;

	return (
		<div className="w-full bg-white text-gray-800 p-8 font-sans text-sm">
			{/* Header - Centered */}
			<header className="text-center mb-6">
				<h1 className="text-3xl font-light text-gray-900 tracking-wide mb-1">
					{header.fullName?.toUpperCase() || "YOUR NAME"}
				</h1>
				<p className="text-primary font-medium">
					{header.jobTitle || "Professional Title"}
				</p>

				<div className="flex flex-wrap justify-center gap-4 mt-4 text-xs text-gray-500">
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

			<div className="flex justify-center mb-6">
				<div className="w-16 h-px bg-primary" />
			</div>

			{/* Summary */}
			{summary && (
				<section className="mb-6 text-center max-w-2xl mx-auto">
					<p className="text-gray-600 leading-relaxed">{summary}</p>
				</section>
			)}

			{/* Skills */}
			{(skills.technical.length > 0 || skills.soft.length > 0) && (
				<section className="mb-6 text-center">
					<h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">
						Skills
					</h2>
					<div className="flex flex-wrap justify-center gap-2">
						{skills.technical.map((skill, idx) => (
							<span
								key={idx}
								className="px-3 py-1 border border-gray-300 rounded-full text-xs text-gray-700 hover:border-primary hover:text-primary transition-colors"
							>
								{skill}
							</span>
						))}
						{skills.soft.map((skill, idx) => (
							<span
								key={idx}
								className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600 hover:bg-gray-200 transition-colors"
							>
								{skill}
							</span>
						))}
					</div>
				</section>
			)}

			{/* Experience */}
			{experience.length > 0 && (
				<section className="mb-6">
					<h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 text-center mb-4">
						Experience
					</h2>
					{experience.map((exp) => (
						<div
							key={exp.id}
							className="mb-4 text-center hover:bg-gray-50 p-3 -mx-3 rounded-lg transition-colors"
						>
							<h3 className="font-semibold text-gray-900">{exp.position}</h3>
							<p className="text-primary text-sm">{exp.company}</p>
							<p className="text-xs text-gray-500 mb-2">
								{exp.startDate} - {exp.endDate}
							</p>
							{exp.bulletPoints.length > 0 && (
								<ul className="text-left max-w-xl mx-auto text-gray-700 space-y-1">
									{exp.bulletPoints.map((point, idx) => (
										<li
											key={idx}
											className="text-sm pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary"
										>
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
				<section className="mb-6">
					<h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 text-center mb-4">
						Projects
					</h2>
					<div className="grid grid-cols-2 gap-4">
						{projects.map((proj) => (
							<div
								key={proj.id}
								className="text-center p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-sm transition-all group"
							>
								<div className="flex items-center justify-center gap-2 mb-2">
									<h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
										{proj.title}
									</h3>
									{proj.liveDemo && (
										<span className='flex items-center gap-[2px] text-blue-800'>
											<ExternalLink className="h-3 w-3 text-gray-400 group-hover:text-primary transition-colors" />
											<a href={proj.liveDemo} target="_blank">
												Demo
											</a>
										</span>
									)}
								</div>
								{proj.bulletPoints.length > 0 && (
									<ul className="text-xs text-gray-600 text-left space-y-0.5">
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
			<div className="grid grid-cols-2 gap-6">
				{/* Education */}
				{education.length > 0 && (
					<section className="text-center">
						<h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">
							Education
						</h2>
						{education.map((edu) => (
							<div
								key={edu.id}
								className="mb-2 hover:bg-gray-50 p-2 rounded transition-colors"
							>
								<h3 className="font-semibold text-gray-900">{edu.degree}</h3>
								<p className="text-gray-600 text-sm">{edu.school}</p>
								<p className="text-gray-500 text-xs">{edu.date}</p>
							</div>
						))}
					</section>
				)}

				{/* Certifications */}
				{certifications.length > 0 && (
					<section className="text-center">
						<h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-3">
							Certifications
						</h2>
						{certifications.map((cert) => (
							<div
								key={cert.id}
								className="mb-2 hover:bg-gray-50 p-2 rounded transition-colors"
							>
								<h3 className="font-semibold text-gray-900">{cert.title}</h3>
								<p className="text-gray-500 text-xs">{cert.organization}</p>
							</div>
						))}
					</section>
				)}
			</div>
		</div>
	);
};

export default CenteredTemplate;
