import { useState } from 'react';
import { useResume } from '@/context/ResumeContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Code, Heart, Plus, X } from 'lucide-react';

const SkillsForm = () => {
  const { resumeData, updateResumeData } = useResume();
  const { skills } = resumeData;
  const [technicalInput, setTechnicalInput] = useState('');
  const [softInput, setSoftInput] = useState('');

  const addSkill = (type) => {
    const input = type === 'technical' ? technicalInput : softInput;
    const trimmedInput = input.trim();
    
    if (trimmedInput && !skills[type].includes(trimmedInput)) {
      updateResumeData({
        skills: {
          ...skills,
          [type]: [...skills[type], trimmedInput],
        },
      });
      if (type === 'technical') {
        setTechnicalInput('');
      } else {
        setSoftInput('');
      }
    }
  };

  const removeSkill = (type, skill) => {
    updateResumeData({
      skills: {
        ...skills,
        [type]: skills[type].filter((s) => s !== skill),
      },
    });
  };

  const handleKeyPress = (e, type) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill(type);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-1">Skills</h3>
        <p className="text-sm text-muted-foreground">Add your technical and soft skills</p>
      </div>

      {/* Technical Skills */}
      <div className="space-y-4">
        <Label className="text-sm font-medium flex items-center gap-2">
          <Code className="h-4 w-4 text-muted-foreground" />
          Technical Skills
        </Label>
        <div className="flex gap-2">
          <Input
            placeholder="e.g., React, Python, AWS"
            value={technicalInput}
            onChange={(e) => setTechnicalInput(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e, 'technical')}
            className="bg-background"
          />
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => addSkill('technical')}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex flex-wrap gap-2 min-h-[40px]">
          {skills.technical.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="px-3 py-1.5 text-sm flex items-center gap-1.5 animate-fade-in"
            >
              {skill}
              <button
                type="button"
                onClick={() => removeSkill('technical', skill)}
                className="hover:text-destructive transition-colors"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
          {skills.technical.length === 0 && (
            <p className="text-sm text-muted-foreground italic">
              Press Enter or click + to add skills
            </p>
          )}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="space-y-4">
        <Label className="text-sm font-medium flex items-center gap-2">
          <Heart className="h-4 w-4 text-muted-foreground" />
          Soft Skills
        </Label>
        <div className="flex gap-2">
          <Input
            placeholder="e.g., Leadership, Communication"
            value={softInput}
            onChange={(e) => setSoftInput(e.target.value)}
            onKeyPress={(e) => handleKeyPress(e, 'soft')}
            className="bg-background"
          />
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => addSkill('soft')}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex flex-wrap gap-2 min-h-[40px]">
          {skills.soft.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="px-3 py-1.5 text-sm flex items-center gap-1.5 animate-fade-in"
            >
              {skill}
              <button
                type="button"
                onClick={() => removeSkill('soft', skill)}
                className="hover:text-destructive transition-colors"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
          {skills.soft.length === 0 && (
            <p className="text-sm text-muted-foreground italic">
              Press Enter or click + to add skills
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillsForm;
