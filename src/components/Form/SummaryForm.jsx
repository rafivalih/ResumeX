import { useResume } from '@/context/ResumeContext';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { FileText } from 'lucide-react';

const SummaryForm = () => {
  const { resumeData, updateResumeData } = useResume();

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-1">Professional Summary</h3>
        <p className="text-sm text-muted-foreground">
          Write a compelling 2-4 sentence summary highlighting your expertise and career goals
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="summary" className="text-sm font-medium flex items-center gap-2">
          <FileText className="h-4 w-4 text-muted-foreground" />
          Summary
        </Label>
        <Textarea
          id="summary"
          placeholder="Results-driven software engineer with 5+ years of experience building scalable web applications. Passionate about clean code, user experience, and solving complex problems..."
          value={resumeData.summary}
          onChange={(e) => updateResumeData({ summary: e.target.value })}
          className="min-h-[150px] bg-background border-input focus:ring-2 focus:ring-primary/20 resize-none"
        />
        <p className="text-xs text-muted-foreground text-right">
          {resumeData.summary.length} / 500 characters recommended
        </p>
      </div>
    </div>
  );
};

export default SummaryForm;
