import { useResume } from '@/context/ResumeContext';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

const templates = [
  {
    id: 'classic',
    name: 'Classic',
    description: 'Traditional ATS-friendly format',
    preview: 'Classic centered header with clean sections',
  },
  {
    id: 'modern',
    name: 'Modern',
    description: 'Contemporary two-column layout',
    preview: 'Dark header with sidebar layout',
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Clean and elegant design',
    preview: 'Lightweight typography-focused layout',
  },
];

const TemplateSwitcher = () => {
  const { selectedTemplate, setSelectedTemplate } = useResume();

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-1">Choose Template</h3>
        <p className="text-sm text-muted-foreground">Select an ATS-friendly template</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => setSelectedTemplate(template.id)}
            className={cn(
              "relative p-4 rounded-xl border-2 text-left transition-all duration-200",
              selectedTemplate === template.id
                ? "border-primary bg-primary/5 shadow-md"
                : "border-border bg-card hover:border-muted-foreground/30 hover:shadow-sm"
            )}
          >
            {selectedTemplate === template.id && (
              <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                <Check className="h-3 w-3 text-primary-foreground" />
              </div>
            )}
            <h4 className="font-semibold text-foreground mb-1">{template.name}</h4>
            <p className="text-xs text-muted-foreground">{template.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TemplateSwitcher;
