import { useState } from 'react';
import { useResume } from '@/context/ResumeContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Briefcase, Plus, Trash2, X } from 'lucide-react';

const ExperienceForm = () => {
  const { resumeData, updateResumeData } = useResume();
  const { experience } = resumeData;
  const [bulletInputs, setBulletInputs] = useState({});

  const addExperience = () => {
    const newExperience = {
      id: Date.now().toString(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      bulletPoints: [],
    };
    updateResumeData({ experience: [...experience, newExperience] });
  };

  const updateExperience = (id, field, value) => {
    updateResumeData({
      experience: experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    });
  };

  const removeExperience = (id) => {
    updateResumeData({ experience: experience.filter((exp) => exp.id !== id) });
  };

  const addBulletPoint = (id) => {
    const input = bulletInputs[id]?.trim();
    if (input) {
      const exp = experience.find((e) => e.id === id);
      if (exp) {
        updateExperience(id, 'bulletPoints', [...exp.bulletPoints, input]);
        setBulletInputs({ ...bulletInputs, [id]: '' });
      }
    }
  };

  const removeBulletPoint = (id, index) => {
    const exp = experience.find((e) => e.id === id);
    if (exp) {
      updateExperience(
        id,
        'bulletPoints',
        exp.bulletPoints.filter((_, i) => i !== index)
      );
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">Work Experience</h3>
          <p className="text-sm text-muted-foreground">Add your professional experience</p>
        </div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={addExperience}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Add Experience
        </Button>
      </div>

      {experience.length === 0 ? (
        <div className="text-center py-8 border-2 border-dashed border-border rounded-lg">
          <Briefcase className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground">No experience added yet</p>
          <Button
            type="button"
            variant="link"
            onClick={addExperience}
            className="mt-2"
          >
            Add your first experience
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className="relative p-5 bg-muted/30 rounded-lg border border-border animate-slide-up"
            >
              <div className="absolute -top-3 left-4 bg-card px-2 text-xs font-medium text-muted-foreground">
                Experience {index + 1}
              </div>
              <button
                type="button"
                onClick={() => removeExperience(exp.id)}
                className="absolute top-3 right-3 p-1.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-md transition-colors"
              >
                <Trash2 className="h-4 w-4" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Company</Label>
                  <Input
                    placeholder="Google"
                    value={exp.company}
                    onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Position</Label>
                  <Input
                    placeholder="Senior Software Engineer"
                    value={exp.position}
                    onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Start Date</Label>
                  <Input
                    placeholder="Jan 2020"
                    value={exp.startDate}
                    onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">End Date</Label>
                  <Input
                    placeholder="Present"
                    value={exp.endDate}
                    onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <Label className="text-sm font-medium">Responsibilities & Achievements</Label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a bullet point (e.g., Led team of 5 engineers...)"
                    value={bulletInputs[exp.id] || ''}
                    onChange={(e) =>
                      setBulletInputs({ ...bulletInputs, [exp.id]: e.target.value })
                    }
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addBulletPoint(exp.id);
                      }
                    }}
                    className="bg-background"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => addBulletPoint(exp.id)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <ul className="space-y-2">
                  {exp.bulletPoints.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="flex items-start gap-2 text-sm bg-background p-2 rounded-md group animate-fade-in"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span className="flex-1">{bullet}</span>
                      <button
                        type="button"
                        onClick={() => removeBulletPoint(exp.id, bulletIndex)}
                        className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive transition-all"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceForm;
