import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import HeaderForm from "@/components/Form/HeaderForm";
import SummaryForm from "@/components/Form/SummaryForm";
import EducationForm from "@/components/Form/EducationForm";
import SkillsForm from "@/components/Form/SkillsForm";
import ExperienceForm from "@/components/Form/ExperienceForm";
import ProjectsForm from "@/components/Form/ProjectsForm";
import CertificationsForm from "@/components/Form/CertificationsForm";
import TemplateSwitcher from "@/components/TemplateSwitcher";
import TemplateRenderer from "@/components/Templates/TemplateRenderer";
import {
    Download,
    Eye,
    EyeOff,
    User,
    FileText,
    GraduationCap,
    Code,
    Briefcase,
    FolderGit2,
    Award,
    ChevronLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const formSteps = [
    { id: "header", label: "Personal", icon: User, component: HeaderForm },
    { id: "summary", label: "Summary", icon: FileText, component: SummaryForm },
    { id: "education", label: "Education", icon: GraduationCap, component: EducationForm },
    { id: "skills", label: "Skills", icon: Code, component: SkillsForm },
    { id: "experience", label: "Experience", icon: Briefcase, component: ExperienceForm },
    { id: "projects", label: "Projects", icon: FolderGit2, component: ProjectsForm },
    { id: "certifications", label: "Certificates", icon: Award, component: CertificationsForm },
];

const Builder = () => {
    const [showPreview, setShowPreview] = useState(false); 
    const printRef = useRef(null);
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/my-resume");
    };

    return (
        <div className="min-h-screen bg-background pb-10">
            <div className="container mx-auto px-4 py-4 md:py-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 m-3">
                    <div className="space-y-1">
                        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                            Resume Builder
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Fill in your details to create your professional resume
                        </p>
                    </div>
                    
                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setShowPreview(!showPreview)}
                            className="flex-1 md:hidden h-10"
                        >
                            {showPreview ? (
                                <><EyeOff className="h-4 w-4 mr-2" /> Hide</>
                            ) : (
                                <><Eye className="h-4 w-4 mr-2" /> Preview</>
                            )}
                        </Button>

                        <Button 
                            onClick={handleRedirect} 
                            className="bg-primary hover:bg-blue-600 transition-colors"
                        >
                            Done
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    
                    {/* LEFT COLUMN: Form Section */}
                    <div className={`space-y-6 ${showPreview ? "hidden lg:block" : "block"}`}>
                        <div className="form-section transition-all duration-300">
                            <TemplateSwitcher />
                        </div>

                        <div className="form-section">
                            <Tabs defaultValue="header" className="w-full">
                                <ScrollArea className="w-full whitespace-nowrap rounded-md border bg-muted/30">
                                    <TabsList className="inline-flex w-max h-12 items-center justify-start p-1 bg-transparent">
                                        {formSteps.map((step) => {
                                            const Icon = step.icon;
                                            return (
                                                <TabsTrigger
                                                    key={step.id}
                                                    value={step.id}
                                                    className="flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-medium transition-all data-[state=active]:bg-background data-[state=active]:text-primary"
                                                >
                                                    <Icon className="h-4 w-4" />
                                                    <span>{step.label}</span>
                                                </TabsTrigger>
                                            );
                                        })}
                                    </TabsList>
                                    <ScrollBar orientation="horizontal" className="hidden" />
                                </ScrollArea>

                                {formSteps.map((step) => {
                                    const FormComponent = step.component;
                                    return (
                                        <TabsContent
                                            key={step.id}
                                            value={step.id}
                                            className="mt-6 focus-visible:outline-none animate-in fade-in-50 slide-in-from-bottom-2 duration-300"
                                        >
                                            <FormComponent />
                                        </TabsContent>
                                    );
                                })}
                            </Tabs>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Preview Section */}
                    <div className={`
                        ${showPreview ? "fixed inset-0 z-50 bg-background p-4 flex flex-col lg:relative lg:inset-auto lg:z-0 lg:p-0 lg:block" : "hidden lg:block"}
                    `}>
                        {/* Mobile Preview Header */}
                        <div className="flex lg:hidden items-center justify-between mb-4 flex-shrink-0">
                            <Button variant="ghost" size="sm" onClick={() => setShowPreview(false)}>
                                <ChevronLeft className="h-4 w-4 mr-1" /> Back to Editor
                            </Button>
                            <p className="font-semibold text-sm">Live Preview</p>
                            <div className="w-10" /> 
                        </div>

                        {/* Responsive Height Wrapper */}
                        <div className="sticky top-6 lg:h-[calc(100vh-120px)] flex flex-col flex-1 min-h-0">
                            <div className="bg-muted/30 rounded-2xl p-3 md:p-6 border border-border shadow-inner flex flex-col flex-1 min-h-0">
                                <div className="hidden lg:flex items-center justify-between mb-4 flex-shrink-0">
                                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                                        Live Preview
                                    </h3>
                                    <span className="text-[10px] font-bold text-muted-foreground bg-muted border border-border px-2 py-0.5 rounded uppercase">
                                        A4 Format
                                    </span>
                                </div>
                                
                                {/* Resume Paper Container: Fixes height cut-off and enables internal scrolling */}
                                <div className="relative w-full flex-1 min-h-0 overflow-hidden rounded-lg shadow-2xl bg-white">
                                    <div 
                                        ref={printRef}
                                        className="h-full overflow-y-auto custom-scrollbar md:max-h-full"
                                    >
                                        {/* Scaling logic for mobile view to fit content */}
                                        <div className="origin-top scale-[0.7] sm:scale-90 md:scale-100 transition-transform duration-300">
                                            <TemplateRenderer />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Builder;