import { useResume } from "@/context/ResumeContext";
import ClassicTemplate from "./ClassicTemplate";
import ModernTemplate from "./ModernTemplate";
import MinimalTemplate from "./MinimalTemplate";
import CompactTemplate from "./EntryLevel/CompactTemplate";
import CleanTemplate from "./EntryLevel/CleanTemplate";
import SimpleTemplate from "./EntryLevel/SimpleTemplate";
import FreshGradTemplate from "./EntryLevel/FreshGradTemplate";
import BoldHeaderTemplate from "./EntryLevel/BoldHeaderTemplate";
import TimelineTemplate from "./EntryLevel/TimelineTemplate";
import GridTemplate from "./EntryLevel/GridTemplate";
import AccentBarTemplate from "./EntryLevel/AccentBarTemplate";
import CenteredTemplate from "./EntryLevel/CenteredTemplate";
import TechFocusTemplate from "./EntryLevel/TechFocusTemplate";
// import OnePageATSTemplate from './EntryLevel/OnePageATSTemplate';
import SidebarProTemplate from './EntryLevel/SidebarProTemplate';
import OnePageATSTemplate from './EntryLevel/OnePageATSTemplate';


const templates = {
	classic: ClassicTemplate,
	modern: ModernTemplate,
	minimal: MinimalTemplate,
	compact: CompactTemplate,
	clean: CleanTemplate,
	simple: SimpleTemplate,
	freshgrad: FreshGradTemplate,
	boldheader: BoldHeaderTemplate,
	timeline: TimelineTemplate,
	grid: GridTemplate,
	accentbar: AccentBarTemplate,
	centered: CenteredTemplate,
	techfocus: TechFocusTemplate,
	 sidebarpro: SidebarProTemplate,
  onepageats: OnePageATSTemplate,
};

const TemplateRenderer = () => {
	const { selectedTemplate } = useResume();
	const Template = templates[selectedTemplate] || ClassicTemplate;

	return (
		<div className="resume-paper w-full max-w-[8.5in] mx-auto overflow-hidden rounded-lg">
			<Template />
		</div>
	);
};

export default TemplateRenderer;
