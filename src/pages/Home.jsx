import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
	FileText,
	Sparkles,
	Shield,
	Zap,
	ArrowRight,
	Check,
} from "lucide-react";

const features = [
	{
		icon: Sparkles,
		title: "Beautiful Templates",
		description: "Choose from 15+ ATS-optimized templates designed by experts",
	},
	{
		icon: Shield,
		title: "ATS-Friendly",
		description: "Every template passes applicant tracking systems",
	},
	{
		icon: Zap,
		title: "Real-time Preview",
		description: "See changes instantly as you build your resume",
	},
];

const benefits = [
	"No account required",
	"Export to PDF instantly",
	"Mobile-friendly builder",
	"100% free to use",
];

const Home = () => {
	return (
		<div className="min-h-screen overflow-x-hidden select-none">
			{/* Hero Section */}
			<section className="relative overflow-hidden py-12 md:py-20 lg:py-32">
				<div className="absolute inset-0 gradient-hero opacity-[0.03] -z-10" />
				<div className="container mx-auto px-4 relative">
					<div className="max-w-4xl mx-auto text-center">
						{/* Animated Badge */}
						<div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-6 animate-fade-in border border-primary/20">
							<Sparkles className="h-3.5 w-3.5 md:h-4 md:w-4" />
							Build your dream resume in minutes
						</div>

						<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-foreground mb-6 tracking-tight leading-[1.1]">
							Create Professional{" "}
							<span className="text-primary bg-clip-text ">ATS-Optimized</span>{" "}
							Resumes
						</h1>

						<p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed px-2">
							Stand out from the crowd with our powerful resume builder. Choose
							from beautiful templates, customize every detail, and land your
							dream job.
						</p>

						{/* CTA Buttons - Stacked on mobile, row on SM+ */}
						<div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-stretch sm:items-center mb-12 px-4 sm:px-0">
							<Link to="/builder" className="w-full sm:w-auto">
								<Button
									size="lg"
									className="w-full sm:w-auto gradient-primary text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 text-base h-12 px-8"
								>
									Start Building Free
									<ArrowRight className="ml-2 h-5 w-5" />
								</Button>
							</Link>
							<Link to="/templates" className="w-full sm:w-auto">
								<Button
									size="lg"
									variant="outline"
									className="w-full sm:w-auto text-base h-12 px-8 border-input hover:bg-accent transition-colors"
								>
									View Templates
								</Button>
							</Link>
						</div>

						{/* Benefits List - Improved Grid for Mobile */}
						<div className="grid grid-cols-1 xs:grid-cols-2 lg:flex lg:flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground/80 max-w-2xl mx-auto">
							{benefits.map((benefit) => (
								<span
									key={benefit}
									className="flex items-center justify-center sm:justify-start gap-2"
								>
									<div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
										<Check className="h-3 w-3 text-accent" />
									</div>
									{benefit}
								</span>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-16 md:py-24 bg-muted/30 border-y border-border/50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12 md:mb-16">
						<h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
							Everything You Need
						</h2>
						<div className="w-12 h-1 md:w-20 bg-primary mx-auto rounded-full mb-4" />
						<p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
							Our resume builder comes with all the features you need to create
							a standout resume
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
						{features.map((feature) => {
							const Icon = feature.icon;
							return (
								<div
									key={feature.title}
									className="group bg-card rounded-2xl p-8 shadow-sm border border-border hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
								>
									<div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
										<Icon className="h-7 w-7 text-primary-foreground" />
									</div>
									<h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
										{feature.title}
									</h3>
									<p className="text-muted-foreground text-sm leading-relaxed">
										{feature.description}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 md:py-24 px-4">
				<div className="container mx-auto">
					<div className="max-w-5xl mx-auto text-center bg-gradient-to-br from-primary/5 via-accent/5 to-transparent rounded-[2.5rem] p-8 md:p-16 border border-border/60 relative overflow-hidden shadow-2xl">
						{/* Background Decoration */}
						<div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

						<div className="relative z-10">
							<div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
								<FileText className="h-10 w-10 text-primary" />
							</div>
							<h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
								Ready to Build Your <br className="hidden md:block" />{" "}
								Professional Resume?
							</h2>
							<p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
								Join thousands of job seekers who have landed their dream jobs
								with our intuitive, free resume builder.
							</p>
							<Link to="/builder">
								<Button
									size="lg"
									className="w-full sm:w-auto h-12 p-2 md:h-14  md:px-10 text-base md:text-lg rounded-xl gradient-primary text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 text-[12px] sm:text-[12px]"
								>Create My Resume
									<ArrowRight className=" h-5 w-5 md:h-6 md:w-6" />
								</Button>
								<br/>
							</Link>
								<strong>or</strong> 
								<br/>
								<Link to="/about">
								<Button
									size="lg"
									className="w-full sm:w-auto h-12 p-2 md:h-14  md:px-10 text-base md:text-lg rounded-xl gradient-primary text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 text-[12px] pl-[15px]"
								> Know Instructions  
									<ArrowRight className=" h-5 w-5  md:h-6 md:w-6" />
								</Button>
								</Link>
								
						</div>
					</div>
				</div>
			</section>

			{/* Footer Branding - Optional */}
			<footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/40">
				<p>© 2026 ResumeX. All rights reserved.</p>
			</footer>
		</div>
	);
};

export default Home;



