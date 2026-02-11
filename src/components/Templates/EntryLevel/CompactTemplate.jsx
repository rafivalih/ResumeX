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

const CompactTemplate = () => {
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
		<div className="w-full bg-white text-gray-800 p-6 font-sans text-xs leading-snug print:p-4">
			{/* Header */}
			<header className="mb-4">
				<h1 className="text-xl font-bold text-gray-900 mb-0.5">
					{header.fullName || "Your Name"}
				</h1>
				<p className="text-sm text-gray-600 font-medium">
					{header.jobTitle || "Professional Title"}
				</p>

				<div className="flex flex-wrap gap-x-3 gap-y-1 mt-2 text-[10px] text-gray-600">
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

			{/* Two Column Layout */}
			<div className="grid grid-cols-3 gap-4">
				{/* Left Column - Skills, Education, Certifications */}
				<div className="col-span-1 space-y-3">
					{/* Skills */}
					{(skills.technical.length > 0 || skills.soft.length > 0) && (
						<section className="group">
							<h2 className="text-[10px] font-bold uppercase text-gray-900 border-b border-gray-300 pb-0.5 mb-1.5 group-hover:border-primary transition-colors">
								Skills
							</h2>
							<div className="space-y-1">
								{skills.technical.length > 0 && (
									<div>
										<p className="font-semibold text-[9px] text-gray-700">
											Technical
										</p>
										<div className="flex flex-wrap gap-1 mt-0.5">
											{skills.technical.map((skill, idx) => (
												<span
													key={idx}
													className="bg-gray-100 px-1.5 py-0.5 rounded text-[9px] hover:bg-primary/10 transition-colors"
												>
													{skill}
												</span>
											))}
										</div>
									</div>
								)}
								{skills.soft.length > 0 && (
									<div>
										<p className="font-semibold text-[9px] text-gray-700">
											Soft Skills
										</p>
										<p className="text-[9px] text-gray-600 mt-0.5">
											{skills.soft.join(" • ")}
										</p>
									</div>
								)}
							</div>
						</section>
					)}

					{/* Education */}
					{education.length > 0 && (
						<section className="group">
							<h2 className="text-[10px] font-bold uppercase text-gray-900 border-b border-gray-300 pb-0.5 mb-1.5 group-hover:border-primary transition-colors">
								Education
							</h2>
							{education.map((edu) => (
								<div key={edu.id} className="mb-1.5">
									<h3 className="font-semibold text-gray-900 text-[10px]">
										{edu.degree}
									</h3>
									<p className="text-gray-600 text-[9px]">{edu.school}</p>
									<p className="text-gray-500 text-[9px]">{edu.date}</p>
									{edu.grade && (
										<p className="text-gray-500 text-[9px]">GPA: {edu.grade}</p>
									)}
								</div>
							))}
						</section>
					)}

					{/* Certifications */}
					{certifications.length > 0 && (
						<section className="group">
							<h2 className="text-[10px] font-bold uppercase text-gray-900 border-b border-gray-300 pb-0.5 mb-1.5 group-hover:border-primary transition-colors">
								Certifications
							</h2>
							{certifications.map((cert) => (
								<div key={cert.id} className="mb-1.5">
									<h3 className="font-semibold text-gray-900 text-[10px]">
										{cert.title}
									</h3>
									<p className="text-gray-600 text-[9px]">
										{cert.organization}
									</p>
								</div>
							))}
						</section>
					)}
				</div>

				{/* Right Column - Summary, Experience, Projects */}
				<div className="col-span-2 space-y-3">
					{/* Summary */}
					{summary && (
						<section className="group">
							<h2 className="text-[10px] font-bold uppercase text-gray-900 border-b border-gray-300 pb-0.5 mb-1.5 group-hover:border-primary transition-colors">
								Summary
							</h2>
							<p className="text-gray-700 text-[10px]">{summary}</p>
						</section>
					)}

					{/* Experience */}
					{experience.length > 0 && (
						<section className="group">
							<h2 className="text-[10px] font-bold uppercase text-gray-900 border-b border-gray-300 pb-0.5 mb-1.5 group-hover:border-primary transition-colors">
								Experience
							</h2>
							{experience.map((exp) => (
								<div
									key={exp.id}
									className="mb-2 hover:bg-gray-50 p-1 -m-1 rounded transition-colors"
								>
									<div className="flex justify-between items-baseline">
										<h3 className="font-semibold text-gray-900 text-[10px]">
											{exp.position}
										</h3>
										<span className="text-[9px] text-gray-500">
											{exp.startDate} - {exp.endDate}
										</span>
									</div>
									<p className="text-gray-600 text-[9px] italic">
										{exp.company}
									</p>
									{exp.bulletPoints.length > 0 && (
										<ul className="list-disc list-inside text-gray-700 text-[9px] mt-0.5 space-y-0.5">
											{exp.bulletPoints.slice(0, 3).map((point, idx) => (
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
						<section className="group">
							<h2 className="text-[10px] font-bold uppercase text-gray-900 border-b border-gray-300 pb-0.5 mb-1.5 group-hover:border-primary transition-colors">
								Projects
							</h2>
							{projects.map((proj) => (
								<div
									key={proj.id}
									className="mb-2 hover:bg-gray-50 p-1 -m-1 rounded transition-colors"
								>
									<div className="flex items-center gap-1">
										<h3 className="font-semibold text-gray-900 text-[10px]">
											{proj.title}
										</h3>
										{proj.liveDemo && (
											<span className='flex items-center gap-[2px] text-blue-800'>
												<ExternalLink className="h-2.5 w-2.5 text-primary" />
												<a href={proj.liveDemo} target="_blank">
													Demo
												</a>
											</span>
										)}
									</div>
									{proj.bulletPoints.length > 0 && (
										<ul className="list-disc list-inside text-gray-700 text-[9px] mt-0.5 space-y-0.5">
											{proj.bulletPoints.slice(0, 2).map((point, idx) => (
												<li key={idx}>{point}</li>
											))}
										</ul>
									)}
								</div>
							))}
						</section>
					)}
				</div>
			</div>
		</div>
	);
};

export default CompactTemplate;
