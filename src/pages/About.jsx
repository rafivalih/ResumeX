import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileText, Users, Shield, Sparkles, ArrowRight } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'ATS-First Design',
    description: 'Every template is tested against major applicant tracking systems to ensure your resume gets through.',
  },
  {
    icon: Users,
    title: 'User-Focused',
    description: 'Built with feedback from recruiters and hiring managers to highlight what matters most.',
  },
  {
    icon: Sparkles,
    title: 'Always Free',
    description: 'We believe everyone deserves access to professional resume tools without paying a premium.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background py-12 select-none">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary mb-6">
            <FileText className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About ResumeX
          </h1>
          <p className="text-lg text-muted-foreground">
            We're on a mission to help job seekers create professional, ATS-optimized resumes 
            that land interviews. No premium features, no hidden costs — just  tools 
            that work.
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Story */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-8 border border-border mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                ResumeX was born from frustration. After watching friends struggle with 
                expensive resume builders and templates that failed ATS scans, we knew there 
                had to be a better way.
              </p>
              <p>
                We built ResumeX with one goal: make professional resume creation 
                accessible to everyone. Our templates are designed by industry experts 
                and tested against real ATS systems.
              </p>
              
            </div>
          </div>
          <div className="bg-card rounded-2xl p-8 border border-border mb-12 select-text">
            <h2 className="text-2xl font-bold text-foreground mb-4">Instructions</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className='text-xl font-bold '>
                
              </p>
              <p>
               • Avoid generic buzzwords: Skip empty terms like "passionate," "team player," or "hard worker"; let your technical skills and results show your expertise.
              <br/>
              •  Focus on quantifiable impact: Use numbers, percentages, or metrics to prove your success (e.g., "Increased performance by 25%" vs. "Improved performance").
              <br/>
               • Eliminate repetition: Reusing the same verbs or skills can reduce ATS effectiveness, as systems look for varied keywords to understand your experience depth.
              <br/>
               • Prioritize high readability: Use clean formatting and concise bullet points so ATS scanners and recruiters can identify strengths within seconds.
              <br/>
               • Aim for 12–20 total points across your project section to provide enough technical detail while keeping the resume focused and impactful.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Ready to build your resume?
            </h3>
            <Link to="/builder">
              <Button size="lg" className="gradient-primary text-primary-foreground">
                Start Building Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
