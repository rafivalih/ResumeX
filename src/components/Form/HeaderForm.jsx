import { useResume } from '@/context/ResumeContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Briefcase, Mail, Phone, Linkedin, Github, Code, MapPin } from 'lucide-react';

const HeaderForm = () => {
  const { resumeData, updateHeader } = useResume();
  const { header } = resumeData;

  const fields = [
    { key: 'fullName', label: 'Full Name', icon: User, placeholder: 'RafiH' },
    { key: 'jobTitle', label: 'Job Title', icon: Briefcase, placeholder: 'Junior Software Engineer' },
    { key: 'email', label: 'Email', icon: Mail, placeholder: 'RH@example.com', type: 'email' },
    { key: 'phone', label: 'Phone', icon: Phone, placeholder: '+1 (555) 123-4567', type: 'tel' },
    { key: 'location', label: 'Location', icon: MapPin, placeholder: 'San Francisco, CA' },
    { key: 'linkedin', label: 'LinkedIn URL', icon: Linkedin, placeholder: 'linkedin.com/in/RH' },
    { key: 'github', label: 'GitHub URL', icon: Github, placeholder: 'github.com/RH' },
    { key: 'leetcode', label: 'LeetCode URL', icon: Code, placeholder: 'leetcode.com/RH' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-1">Personal Information</h3>
        <p className="text-sm text-muted-foreground">Add your contact details and professional links</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {fields.map((field) => {
          const Icon = field.icon;
          return (
            <div key={field.key} className="space-y-2">
              <Label htmlFor={field.key} className="text-sm font-medium flex items-center gap-2">
                <Icon className="h-4 w-4 text-muted-foreground"/>
                {field.label}
              </Label>
              <Input
                id={field.key}
                type={field.type || 'text'}
                placeholder={field.placeholder}
                value={header[field.key]}
                onChange={(e) => updateHeader({ [field.key]: e.target.value })}
                className="bg-background border-input focus:ring-2 focus:ring-primary/20"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderForm;
