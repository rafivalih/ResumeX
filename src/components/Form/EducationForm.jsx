import { useResume } from '@/context/ResumeContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { GraduationCap, Plus, Trash2 } from 'lucide-react';

const EducationForm = () => {
  const { resumeData, updateResumeData } = useResume();
  const { education } = resumeData;

  const addEducation = () => {
    const newEducation = {
      id: Date.now().toString(),
      school: '',
      degree: '',
      date: '',
      grade: '',
    };
    updateResumeData({ education: [...education, newEducation] });
  };

  const updateEducation = (id, field, value) => {
    updateResumeData({
      education: education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    });
  };

  const removeEducation = (id) => {
    updateResumeData({ education: education.filter((edu) => edu.id !== id) });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">Education</h3>
          <p className="text-sm text-muted-foreground">Add your educational background</p>
        </div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={addEducation}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Add Education
        </Button>
      </div>

      {education.length === 0 ? (
        <div className="text-center py-8 border-2 border-dashed border-border rounded-lg">
          <GraduationCap className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground">No education added yet</p>
          <Button
            type="button"
            variant="link"
            onClick={addEducation}
            className="mt-2"
          >
            Add your first education
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="relative p-5 bg-muted/30 rounded-lg border border-border animate-slide-up"
            >
              <div className="absolute -top-3 left-4 bg-card px-2 text-xs font-medium text-muted-foreground">
                Education {index + 1}
              </div>
              <button
                type="button"
                onClick={() => removeEducation(edu.id)}
                className="absolute top-3 right-3 p-1.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-md transition-colors"
              >
                <Trash2 className="h-4 w-4" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">School/University</Label>
                  <Input
                    placeholder="Stanford University"
                    value={edu.school}
                    onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Degree</Label>
                  <Input
                    placeholder="Bachelor of Science in Computer Science"
                    value={edu.degree}
                    onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Graduation Date</Label>
                  <Input
                    placeholder="May 2020"
                    value={edu.date}
                    onChange={(e) => updateEducation(edu.id, 'date', e.target.value)}
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">GPA/Grade (Optional)</Label>
                  <Input
                    placeholder="3.8/4.0"
                    value={edu.grade}
                    onChange={(e) => updateEducation(edu.id, 'grade', e.target.value)}
                    className="bg-background"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EducationForm;
