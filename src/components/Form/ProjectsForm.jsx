import { useState } from 'react';
import { useResume } from '@/context/ResumeContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { FolderGit2, Plus, Trash2, X, ExternalLink } from 'lucide-react';

const ProjectsForm = () => {
  const { resumeData, updateResumeData } = useResume();
  const { projects } = resumeData;
  const [bulletInputs, setBulletInputs] = useState({});

  const addProject = () => {
    const newProject = {
      id: Date.now().toString(),
      title: '',
      bulletPoints: [],
      liveDemo: '',
      Github: '',
    };
    updateResumeData({ projects: [...projects, newProject] });
  };

  const updateProject = (id, field, value) => {
    updateResumeData({
      projects: projects.map((proj) =>
        proj.id === id ? { ...proj, [field]: value } : proj
      ),
    });
  };

  const removeProject = (id) => {
    updateResumeData({ projects: projects.filter((proj) => proj.id !== id) });
  };

  const addBulletPoint = (id) => {
    const input = bulletInputs[id]?.trim();
    if (input) {
      const proj = projects.find((p) => p.id === id);
      if (proj) {
        updateProject(id, 'bulletPoints', [...proj.bulletPoints, input]);
        setBulletInputs({ ...bulletInputs, [id]: '' });
      }
    }
  };

  const removeBulletPoint = (id, index) => {
    const proj = projects.find((p) => p.id === id);
    if (proj) {
      updateProject(
        id,
        'bulletPoints',
        proj.bulletPoints.filter((_, i) => i !== index)
      );
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">Projects</h3>
          <p className="text-sm text-muted-foreground">Showcase your personal or professional projects</p>
        </div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={addProject}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Add Project
        </Button>
      </div>

      {projects.length === 0 ? (
        <div className="text-center py-8 border-2 border-dashed border-border rounded-lg">
          <FolderGit2 className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground">No projects added yet</p>
          <Button
            type="button"
            variant="link"
            onClick={addProject}
            className="mt-2"
          >
            Add your first project
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          {projects.map((proj, index) => (
            <div
              key={proj.id}
              className="relative p-5 bg-muted/30 rounded-lg border border-border animate-slide-up"
            >
              <div className="absolute -top-3 left-4 bg-card px-2 text-xs font-medium text-muted-foreground">
                Project {index + 1}
              </div>
              <button
                type="button"
                onClick={() => removeProject(proj.id)}
                className="absolute top-3 right-3 p-1.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-md transition-colors"
              >
                <Trash2 className="h-4 w-4" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Project Title</Label>
                  <Input
                    placeholder="E-commerce Platform"
                    value={proj.title}
                    onChange={(e) => updateProject(proj.id, 'title', e.target.value)}
                    className="bg-background border-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium flex items-center gap-2">
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live Demo URL
                  </Label>
                  <Input
                    placeholder="https://myproject.com"
                    value={proj.liveDemo}
                    onChange={(e) => updateProject(proj.id, 'liveDemo', e.target.value)}
                    className="bg-background border-gray-400"
                  />
                </div>
                
                
              </div>

              <div className="mt-4 space-y-3">
                <Label className="text-sm font-medium">Key Features & Technologies</Label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a bullet point (e.g., Built with React and Node.js...)"
                    value={bulletInputs[proj.id] || ''}
                    onChange={(e) =>
                      setBulletInputs({ ...bulletInputs, [proj.id]: e.target.value })
                    }
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addBulletPoint(proj.id);
                      }
                    }}
                    className="bg-background border-gray-400"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => addBulletPoint(proj.id)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <ul className="space-y-2">
                  {proj.bulletPoints.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="flex items-start gap-2 text-sm bg-background p-2 rounded-md group animate-fade-in"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span className="flex-1">{bullet}</span>
                      <button
                        type="button"
                        onClick={() => removeBulletPoint(proj.id, bulletIndex)}
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

export default ProjectsForm;
