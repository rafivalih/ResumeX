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

const ModernTemplate = () => {
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
		<div className="w-full h-full bg-white text-gray-800 font-sans text-sm leading-relaxed">
			{/* Header with accent */}
			<header className="text-center bg-slate-800 text-white p-6 mb-6">
				<h1 className="text-2xl font-bold tracking-tight mb-1 uppercase">
					{header.fullName || "Your Name"}
				</h1>
				<p className="text-slate-300 text-base mb-4 uppercase">
					{header.jobTitle || "Professional Title"}
				</p>

				<div className="flex flex-wrap gap-3 text-xs text-slate-300">
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
						<h2 className="text-xs font-bold uppercase text-slate-800 tracking-wider flex items-center gap-2 mb-2">
							<span className="w-8 h-0.5 bg-slate-800"></span>
							Summary
						</h2>
						<p className="text-gray-600">{summary}</p>
					</section>
				)}

				{/* Two Column Layout */}
				<div className="grid grid-cols-3 gap-6">
					{/* Main Column */}
					<div className="col-span-2 space-y-5">
						{/* Experience */}
						{experience.length > 0 && (
							<section>
								<h2 className="text-xs font-bold uppercase text-slate-800 tracking-wider flex items-center gap-2 mb-3">
									<span className="w-8 h-0.5 bg-slate-800"></span>
									Experience
								</h2>
								{experience.map((exp) => (
									<div
										key={exp.id}
										className="mb-4 relative pl-4 border-l-2 border-slate-200"
									>
										<div className="absolute -left-1.5 top-1 w-2 h-2 rounded-full bg-slate-800"></div>
										<div className="flex justify-between items-baseline mb-1">
											<h3 className="font-semibold text-gray-900">
												{exp.position}
											</h3>
											<span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
												{exp.startDate} - {exp.endDate}
											</span>
										</div>
										<p className="text-slate-600 text-xs mb-2">{exp.company}</p>
										{exp.bulletPoints.length > 0 && (
											<ul className="text-gray-600 space-y-1">
												{exp.bulletPoints.map((point, idx) => (
													<li key={idx} className="flex items-start gap-2">
														<span className="text-slate-400 mt-1">▸</span>
														<span>{point}</span>
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
							<section>
								<h2 className="text-xs font-bold uppercase text-slate-800 tracking-wider flex items-center gap-2 mb-3">
									<span className="w-8 h-0.5 bg-slate-800"></span>
									Projects
								</h2>
								{projects.map((proj) => (
									<div key={proj.id} className="mb-3">
										<div className="flex items-center gap-2 mb-1">
											<h3 className="font-semibold text-gray-900">
												{proj.title}
											</h3>
											{proj.liveDemo && (
												<span className="text-xs text-blue-600 flex items-center gap-0.5">
													<ExternalLink className="h-3 w-3" />
													<a href={proj.liveDemo} target="_blank">
														Demo
													</a>
												</span>
											)}
										</div>
										{proj.bulletPoints.length > 0 && (
											<ul className="text-gray-600 space-y-1">
												{proj.bulletPoints.map((point, idx) => (
													<li key={idx} className="flex items-start gap-2">
														<span className="text-slate-400 mt-1">▸</span>
														<span>{point}</span>
													</li>
												))}
											</ul>
										)}
									</div>
								))}
							</section>
						)}
					</div>

					{/* Sidebar */}
					<div className="space-y-5">
						{/* Education */}
						{education.length > 0 && (
							<section>
								<h2 className="text-xs font-bold uppercase text-slate-800 tracking-wider mb-3">
									Education
								</h2>
								{education.map((edu) => (
									<div key={edu.id} className="mb-3 p-3 bg-slate-50 rounded-lg">
										<h3 className="font-semibold text-gray-900 text-xs">
											{edu.degree}
										</h3>
										<p className="text-slate-600 text-xs">{edu.school}</p>
										<p className="text-slate-500 text-xs mt-1">
											{edu.date} {edu.grade && `• ${edu.grade}`}
										</p>
									</div>
								))}
							</section>
						)}

						{/* Skills */}
						{(skills.technical.length > 0 || skills.soft.length > 0) && (
							<section>
								<h2 className="text-xs font-bold uppercase text-slate-800 tracking-wider mb-3">
									Skills
								</h2>
								{skills.technical.length > 0 && (
									<div className="mb-3">
										<p className="text-xs font-medium text-slate-700 mb-2">
											Technical
										</p>
										<div className="flex flex-wrap gap-1">
											{skills.technical.map((skill, idx) => (
												<span
													key={idx}
													className="text-xs bg-slate-800 text-white px-2 py-0.5 rounded"
												>
													{skill}
												</span>
											))}
										</div>
									</div>
								)}
								{skills.soft.length > 0 && (
									<div>
										<p className="text-xs font-medium text-slate-700 mb-2">
											Soft Skills
										</p>
										<div className="flex flex-wrap gap-1">
											{skills.soft.map((skill, idx) => (
												<span
													key={idx}
													className="text-xs border border-slate-300 text-slate-600 px-2 py-0.5 rounded"
												>
													{skill}
												</span>
											))}
										</div>
									</div>
								)}
							</section>
						)}

						{/* Certifications */}
						{certifications.length > 0 && (
							<section>
								<h2 className="text-xs font-bold uppercase text-slate-800 tracking-wider mb-3">
									Certifications
								</h2>
								{certifications.map((cert) => (
									<div key={cert.id} className="mb-2 text-xs">
										<p className="font-medium text-gray-900">{cert.title}</p>
										<p className="text-slate-500">{cert.organization}</p>
									</div>
								))}
							</section>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModernTemplate;
