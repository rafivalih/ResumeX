import { useResume } from "@/context/ResumeContext";

const OnePageATSTemplate = () => {
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
		<div className="w-full bg-white text-black p-8 font-sans text-sm leading-relaxed">
			{/* HEADER */}
			<header className="mb-4 border-b pb-3">
				<h1 className="text-3xl font-bold">{header.fullName || "Your Name"}</h1>
				<p className="text-[18px] uppercase m-0 p-0">
					{header.jobTitle || "Professional Title"}
				</p>

				<div className="text-[13px] mt-2 flex flex-wrap gap-x-4">
					{header.email && (
						<span className="underline text-blue-800">{header.email}</span>
					)}
					{header.phone && <span>{header.phone}</span>}
					{header.linkedin && (
						<span>
							<a
								href={header.linkedin}
								className="truncate text-blue-800 underline"
							>
								{" "}
								<a
									href={header.linkedin}
									className="text-blue-800 underline truncate "
								>
									{header.linkedin}
								</a>
							</a>
						</span>
					)}
					{header.github && (
						<span>
							<a
								href={header.github}
								className="truncate text-blue-800 underline"
							>
								<a
									href={header.github}
									className="text-blue-800 underline truncate "
								>
									{header.github}
								</a>
							</a>
						</span>
					)}
					{header.leetcode && (
						<span>
							<a
								href={header.leetcode}
								className="truncate text-blue-800 underline"
							>
								<a
									href={header.leetcode}
									className="text-blue-800 underline truncate "
								>
									{header.leetcode}
								</a>
							</a>
						</span>
					)}
					{header.location && <span>{header.location}</span>}
				</div>
			</header>

			{/* SUMMARY */}
			{summary && (
				<section className="mb-4">
					<h2 className="font-bold text-sm mb-1">PROFESSIONAL SUMMARY</h2>
					<p>{summary}</p>
				</section>
			)}

			{/* SKILLS */}
			{(skills.technical.length > 0 || skills.soft.length > 0) && (
				<section className="mb-4">
					<h2 className="font-bold text-sm mb-1">SKILLS</h2>
					<h />
					{skills.technical.length > 0 && (
						<p>
							<span className="font-semibold">Technical: </span>
							{skills.technical.join(", ")}
						</p>
					)}

					{skills.soft.length > 0 && (
						<p>
							<span className="font-semibold">Soft Skills: </span>
							{skills.soft.join(", ")}
						</p>
					)}
				</section>
			)}

			{/* EXPERIENCE */}
			{experience.length > 0 && (
				<section className="mb-4">
					<h2 className="font-bold text-sm mb-1">EXPERIENCE</h2>

					{experience.map((exp) => (
						<div key={exp.id} className="mb-3">
							<div className="flex justify-between">
								<span className="font-semibold">{exp.position}</span>
								<span className="text-xs">
									{exp.startDate} - {exp.endDate}
								</span>
							</div>

							<p className="italic">{exp.company}</p>

							{exp.bulletPoints.length > 0 && (
								<ul className="list-disc list-inside mt-1">
									{exp.bulletPoints.map((point, idx) => (
										<li key={idx}>{point}</li>
									))}
								</ul>
							)}
						</div>
					))}
				</section>
			)}

			{/* PROJECTS */}
			{projects.length > 0 && (
				<section className="mb-4">
					<h2 className="font-bold text-sm mb-1">PROJECTS</h2>

					{projects.map((proj) => (
						<div key={proj.id} className="mb-2">
							<p className="font-semibold">
								{proj.title}{" "}
								<span>
									<a href=""></a>
								</span>
							</p>

							{proj.bulletPoints.length > 0 && (
								<ul className="list-disc list-inside">
									{proj.bulletPoints.map((point, idx) => (
										<li key={idx}>{point}</li>
									))}
								</ul>
							)}
						</div>
					))}
				</section>
			)}

			{/* EDUCATION */}
			{education.length > 0 && (
				<section className="mb-4">
					<h2 className="font-bold text-sm mb-1">EDUCATION</h2>

					{education.map((edu) => (
						<div key={edu.id} className="mb-2">
							<div className="flex justify-between">
								<div>
									<p className="font-semibold">{edu.school}</p>
									<p>{edu.degree}</p>
								</div>
								<span className="text-xs">{edu.date}</span>
							</div>

							{edu.grade && <p className="text-xs">Grade: {edu.grade}</p>}
						</div>
					))}
				</section>
			)}

			{/* CERTIFICATIONS */}
			{certifications.length > 0 && (
				<section>
					<h2 className="font-bold text-sm mb-1">CERTIFICATIONS</h2>
					<ul>
						{certifications.map((cert) => (
							<li key={cert.id}>
								<span className="font-semibold">{cert.title}</span> –{" "}
								{cert.organization}
							</li>
						))}
					</ul>
				</section>
			)}
		</div>
	);
};

export default OnePageATSTemplate;
