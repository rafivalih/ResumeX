import { useRef } from "react";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { Button } from "@/components/ui/button";
import { useResume } from "@/context/ResumeContext";
import TemplateRenderer from "@/components/Templates/TemplateRenderer";
import { Download, Edit, FileText, ChevronLeft } from "lucide-react";

const MyResume = () => {
	const { resumeData } = useResume();
	const printRef = useRef(null);

	const hasContent =
		resumeData.header.fullName ||
		resumeData.summary ||
		resumeData.experience.length > 0;

	const handlePrint = useReactToPrint({
		contentRef: printRef,
		documentTitle: resumeData.header.fullName || "Resume",
	});

	if (!hasContent) {
		return (
			<div className="min-h-screen bg-background flex items-center justify-center py-12">
				<div className="text-center max-w-md mx-auto px-4">
					<div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-muted mb-6">
						<FileText className="h-10 w-10 text-muted-foreground" />
					</div>
					<h1 className="text-2xl font-bold text-foreground mb-3">
						No Resume Yet
					</h1>
					<p className="text-muted-foreground mb-6">
						You haven't created a resume yet. Start building your professional
						resume now!
					</p>
					<Link to="/builder">
						<Button
							size="lg"
							className="gradient-primary text-primary-foreground"
						>
							<Edit className="h-5 w-5 mr-2" />
							Create Resume
						</Button>
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-background py-8 md:py-12">
			<style>
				{
					`
					@media print {
  @page { 
    size: A4; 
    margin: 0mm !important; 
  }
  body { 
    margin: 0;
    padding: 0;
    -webkit-print-color-adjust: exact; 
  }
  /* This prevents the "Scaling" logic from affecting the actual print output */
  .resume-preview-container {
    transform: none !important;
    width: 210mm !important;
    box-shadow: none !important;
    margin: 0 !important;
  }
  .no-print { display: none !important; }
}
  @media (max-width: 768px) {
  .resume-preview-container {
    width: 100% !important;
    min-height: auto !important;
    transform: scale(1) !important;
  }

  .preview-wrapper {
    width: 100%;
  }
}

					`
				}
			</style>

			<div className="container mx-auto px-4">
				{/* Header */}
				<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
					<div className="w-full md:w-auto">
						<Link
							to="/builder"
							className="inline-flex items-center text-sm text-primary mb-2 md:hidden"
						>
							<ChevronLeft className="h-4 w-4 mr-1" /> Back to Editor
						</Link>
						<h1 className="text-2xl md:text-3xl font-bold text-foreground">
							My Resume
						</h1>
						<p className="text-sm text-muted-foreground">
							Preview and download your resume
						</p>
					</div>
					<div className="flex items-center gap-2 w-full md:w-auto">
						<Link to="/builder" className="flex-1 md:flex-none">
							<Button variant="outline" className="w-full">
								<Edit className="h-4 w-4 mr-2" />
								Edit
							</Button>
						</Link>
						<Button
							onClick={() => handlePrint()}
							className="flex-1 md:flex-none gradient-primary text-primary-foreground"
						>
							<Download className="h-4 w-4 mr-2" />
							Download <span className="hidden sm:inline">PDF</span>
						</Button>
					</div>
				</div>

				<div className="max-w-4xl mx-auto">
					{/* Added 'preview-wrapper' and 'overflow-x-auto' to handle the fixed width on small screens */}
					<div className="bg-muted/30 rounded-xl p-4 md:p-6 border border-border overflow-x-auto custom-scrollbar">
						<div className="preview-wrapper flex justify-center">
							<div
								ref={printRef}
								className="resume-preview-container bg-white shadow-2xl mx-auto rounded-sm overflow-visible"
								style={{
									width: "210mm",
									minHeight: "297mm",
									height: "auto",
									backgroundColor: "white",
								}}
							>
								<TemplateRenderer />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyResume;
