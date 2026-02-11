import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useResume } from '@/context/ResumeContext';
import { ArrowRight, Check, Layout } from 'lucide-react';

const templates = [
  {
    id: 'classic',
    name: 'Classic',
    image: '/ResumeX/images/classic.png',
    description: 'Traditional layout with centered header. Perfect for conservative industries.',
    tags: ['ATS-Friendly', 'Traditional', 'Professional'],
  },
  {
    id: 'modern',
    name: 'Modern',
    image: '/ResumeX/images/modern.png',
    description: 'Contemporary design with dark header and two-column layout.',
    tags: ['ATS-Friendly', 'Creative', 'Two-Column'],
  },
  {
    id: 'minimal',
    name: 'Minimal',
    image: '/ResumeX/images/minimal.png',
    description: 'Clean, elegant design with focus on typography and whitespace.',
    tags: ['ATS-Friendly', 'Elegant', 'Clean'],
  },
  {
    id: 'compact',
    name: 'Compact',
    image: '/ResumeX/images/compact.png',
    description: 'Space-efficient two-column layout perfect for fitting more content.',
    tags: ['ATS-Friendly', '1-Page', 'Two-Column'],
  },
  {
    id: 'clean',
    name: 'Clean',
    image: '/ResumeX/images/clean.png',
    description: 'Modern gradient accents with pill-shaped skill tags.',
    tags: ['ATS-Friendly', 'Modern', 'Colorful'],
  },
  {
    id: 'simple',
    name: 'Simple',
    image: '/ResumeX/images/simple.png',
    description: 'Classic serif typography with traditional formatting.',
    tags: ['ATS-Friendly', 'Traditional', 'Serif'],
  },
  {
    id: 'freshgrad',
    name: 'Fresh Grad',
    image: '/ResumeX/images/freshgrad.png',
    description: 'Education-focused layout ideal for recent graduates.',
    tags: ['ATS-Friendly', 'Fresher', 'Education-First'],
  },
  {
    id: 'boldheader',
    name: 'Bold Header',
    image: '/ResumeX/images/bold_header.png',
    description: 'Dark header section with contrasting body for impact.',
    tags: ['ATS-Friendly', 'Bold', 'Impactful'],
  },
  {
    id: 'timeline',
    name: 'Timeline',
    image: '/ResumeX/images/Timeline.png',
    description: 'Visual timeline for experience with centered alignment.',
    tags: ['ATS-Friendly', 'Visual', 'Timeline'],
  },
  {
    id: 'grid',
    name: 'Grid Layout',
    image: '/ResumeX/images/gridlayout.png',
    description: 'Structured grid-based layout with sidebar.',
    tags: ['ATS-Friendly', 'Grid', 'Organized'],
  },
  {
    id: 'accentbar',
    name: 'Accent Bar',
    image: '/ResumeX/images/Accentbar.png',
    description: 'Top accent bar with clean sections and hover effects.',
    tags: ['ATS-Friendly', 'Accent', 'Modern'],
  },
  {
    id: 'centered',
    name: 'Centered',
    image: '/ResumeX/images/centered.png',
    description: 'Elegant centered layout with balanced typography.',
    tags: ['ATS-Friendly', 'Elegant', 'Centered'],
  },
  {
    id: 'techfocus',
    name: 'Tech Focus',
    image: '/ResumeX/images/tech_focus.png',
    description: 'Developer-themed with code-style skill display.',
    tags: ['ATS-Friendly', 'Developer', 'Technical'],
  },
  {
    id: 'executive',
    name: 'Executive',
    image: '/ResumeX/images/executive.png',
    description: 'Leadership-focused layout with strong section hierarchy and emphasis on experience and impact.',
    tags: ['ATS-Friendly', 'Leadership', 'Senior'],
  },
  {
    id: 'sidebarpro',
    name: 'Sidebar Pro',
    image: '/ResumeX/images/sidebarpro.png',
    description: 'Modern left-sidebar layout separating profile and skills from main content.',
    tags: ['ATS-Friendly', 'Sidebar', 'Modern'],
  },
  {
    id: 'onepageats',
    name: 'One Page ATS',
    image: '/ResumeX/images/onepageats.png',
    description: 'Ultra-clean single-column layout strictly optimized for ATS parsing and job portals.',
    tags: ['ATS-Optimized', 'Single-Column', 'Recruiter-Friendly'],
  },
];

const Templates = () => {
  const { selectedTemplate, setSelectedTemplate } = useResume();
  const navigate = useNavigate();

  const handleSelect = (id) => {
    setSelectedTemplate(id);

    // Redirect after 2 seconds ONLY on mobile & tablet
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        navigate('/builder');
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Layout className="h-4 w-4" />
            {templates.length} Templates Available
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your Template
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            All templates are ATS-optimized and designed by professionals to help you land your dream job
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12 select-none">
          {templates.map((template) => (
            <div
              key={template.id}
              className={`relative bg-card rounded-2xl border-2 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                selectedTemplate === template.id
                  ? 'border-primary shadow-md'
                  : 'border-border hover:border-muted-foreground/30'
              }`}
            >
              {selectedTemplate === template.id && (
                <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-primary flex items-center justify-center z-10">
                  <Check className="h-4 w-4 text-primary-foreground" />
                </div>
              )}

              {/* Preview */}
              <div className="aspect-[8.5/11] bg-muted/30 flex items-center justify-center p-4">
                <div className="w-full h-full bg-card rounded-lg shadow-sm border border-border overflow-hidden group flex items-center justify-center hover:shadow-md transition-shadow">
                  <img
                    className="h-full w-full transition-transform duration-300 ease-out group-hover:scale-105"
                    src={template.image}
                    alt={template.name}
                  />
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-base font-semibold text-foreground mb-1">
                  {template.name}
                </h3>

                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                  {template.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {template.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] bg-muted text-muted-foreground px-1.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  onClick={() => handleSelect(template.id)}
                  variant={selectedTemplate === template.id ? 'default' : 'outline'}
                  className="w-full h-8 text-xs hover:bg-blue-500 hover:text-white"
                  size="sm"
                >
                  {selectedTemplate === template.id ? (
                    <>
                      <Check className="h-3 w-3 mr-1" />
                      Selected
                    </>
                  ) : (
                    'Select Template'
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="text-center">
          <Link to="/builder">
            <Button size="lg" className="gradient-primary text-primary-foreground px-2 py-[4.5px]">
              Continue to Builder
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Templates;


// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { useResume } from '@/context/ResumeContext';
// import { ArrowRight, Check, Layout } from 'lucide-react';

// const templates = [
//   {
//     id: 'classic',
//     name: 'Classic',
//     image: '/images/classic.png',
//     description: 'Traditional layout with centered header. Perfect for conservative industries.',
//     tags: ['ATS-Friendly', 'Traditional', 'Professional'],
//   },
//   {
//     id: 'modern',
//     name: 'Modern',
//     image: '/images/modern.png',
//     description: 'Contemporary design with dark header and two-column layout.',
//     tags: ['ATS-Friendly', 'Creative', 'Two-Column'],
//   },
//   {
//     id: 'minimal',
//     name: 'Minimal',
//     image: '/images/minimal.png',
//     description: 'Clean, elegant design with focus on typography and whitespace.',
//     tags: ['ATS-Friendly', 'Elegant', 'Clean'],
//   },
//   {
//     id: 'compact',
//     name: 'Compact',
//     image: '/images/compact.png',
//     description: 'Space-efficient two-column layout perfect for fitting more content.',
//     tags: ['ATS-Friendly', '1-Page', 'Two-Column'],
//   },
//   {
//     id: 'clean',
//     name: 'Clean',
//     image: '/images/clean.png',
//     description: 'Modern gradient accents with pill-shaped skill tags.',
//     tags: ['ATS-Friendly', 'Modern', 'Colorful'],
//   },
//   {
//     id: 'simple',
//     name: 'Simple',
//     // Note: If simple.png is missing from your folder, use 'classic.png' as a fallback
//     image: '/images/classic.png', 
//     description: 'Classic serif typography with traditional formatting.',
//     tags: ['ATS-Friendly', 'Traditional', 'Serif'],
//   },
//   {
//     id: 'freshgrad',
//     name: 'Fresh Grad',
//     image: '/images/freshgrad.png',
//     description: 'Education-focused layout ideal for recent graduates.',
//     tags: ['ATS-Friendly', 'Fresher', 'Education-First'],
//   },
//   {
//     id: 'boldheader',
//     name: 'Bold Header',
//     image: '/images/bold_header.png',
//     description: 'Dark header section with contrasting body for impact.',
//     tags: ['ATS-Friendly', 'Bold', 'Impactful'],
//   },
//   {
//     id: 'timeline',
//     name: 'Timeline',
//     image: '/images/Timeline.png', // Fixed: Capital T
//     description: 'Visual timeline for experience with centered alignment.',
//     tags: ['ATS-Friendly', 'Visual', 'Timeline'],
//   },
//   {
//     id: 'grid',
//     name: 'Grid Layout',
//     image: '/images/gridlayout.png',
//     description: 'Structured grid-based layout with sidebar.',
//     tags: ['ATS-Friendly', 'Grid', 'Organized'],
//   },
//   {
//     id: 'accentbar',
//     name: 'Accent Bar',
//     image: '/images/Accentbar.png', // Fixed: Capital A
//     description: 'Top accent bar with clean sections and hover effects.',
//     tags: ['ATS-Friendly', 'Accent', 'Modern'],
//   },
//   {
//     id: 'centered',
//     name: 'Centered',
//     image: '/images/centered.png',
//     description: 'Elegant centered layout with balanced typography.',
//     tags: ['ATS-Friendly', 'Elegant', 'Centered'],
//   },
//   {
//     id: 'techfocus',
//     name: 'Tech Focus',
//     image: '/images/tech_focus.png',
//     description: 'Developer-themed with code-style skill display.',
//     tags: ['ATS-Friendly', 'Developer', 'Technical'],
//   },
//   {
//     id: 'executive',
//     name: 'Executive',
//     image: '/images/executive.png',
//     description: 'Leadership-focused layout with strong section hierarchy.',
//     tags: ['ATS-Friendly', 'Leadership', 'Senior'],
//   },
//   {
//     id: 'sidebarpro',
//     name: 'Sidebar Pro',
//     image: '/images/sidebarpro.png',
//     description: 'Modern left-sidebar layout separating profile and skills.',
//     tags: ['ATS-Friendly', 'Sidebar', 'Modern'],
//   },
//   {
//     id: 'onepageats',
//     name: 'One Page ATS',
//     image: '/images/onepageats.png',
//     description: 'Ultra-clean single-column layout strictly optimized for ATS.',
//     tags: ['ATS-Optimized', 'Single-Column', 'Recruiter-Friendly'],
//   },
// ];

// const Templates = () => {
//   const { selectedTemplate, setSelectedTemplate } = useResume();
//   const navigate = useNavigate();

//   const handleSelect = (id) => {
//     setSelectedTemplate(id);
//     if (window.innerWidth < 1024) {
//       setTimeout(() => {
//         navigate('/builder');
//       }, 2000);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-background py-12">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
//             <Layout className="h-4 w-4" />
//             {templates.length} Templates Available
//           </div>
//           <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//             Choose Your Template
//           </h1>
//           <p className="text-muted-foreground max-w-xl mx-auto">
//             All templates are ATS-optimized and designed by professionals.
//           </p>
//         </div>

//         {/* Templates Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12 select-none">
//           {templates.map((template) => (
//             <div
//               key={template.id}
//               className={`relative bg-card rounded-2xl border-2 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
//                 selectedTemplate === template.id
//                   ? 'border-primary shadow-md'
//                   : 'border-border hover:border-muted-foreground/30'
//               }`}
//             >
//               {selectedTemplate === template.id && (
//                 <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-primary flex items-center justify-center z-10">
//                   <Check className="h-4 w-4 text-primary-foreground" />
//                 </div>
//               )}

//               {/* Preview */}
//               <div className="aspect-[8.5/11] bg-muted/30 flex items-center justify-center p-4">
//                 <div className="w-full h-full bg-card rounded-lg shadow-sm border border-border overflow-hidden group flex items-center justify-center hover:shadow-md transition-shadow">
//                   <img
//                     className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
//                     src={template.image}
//                     alt={template.name}
//                     onError={(e) => {
//                        e.target.src = 'https://via.placeholder.com/400x500?text=Preview+Coming+Soon';
//                     }}
//                   />
//                 </div>
//               </div>

//               {/* Info */}
//               <div className="p-4">
//                 <h3 className="text-base font-semibold text-foreground mb-1">
//                   {template.name}
//                 </h3>
//                 <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
//                   {template.description}
//                 </p>
//                 <div className="flex flex-wrap gap-1 mb-3">
//                   {template.tags.slice(0, 2).map((tag) => (
//                     <span
//                       key={tag}
//                       className="text-[10px] bg-muted text-muted-foreground px-1.5 py-0.5 rounded-full"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 <Button
//                   onClick={() => handleSelect(template.id)}
//                   variant={selectedTemplate === template.id ? 'default' : 'outline'}
//                   className="w-full h-8 text-xs hover:bg-blue-500 hover:text-white"
//                   size="sm"
//                 >
//                   {selectedTemplate === template.id ? (
//                     <>
//                       <Check className="h-3 w-3 mr-1" />
//                       Selected
//                     </>
//                   ) : (
//                     'Select Template'
//                   )}
//                 </Button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Desktop CTA */}
//         <div className="text-center">
//           <Link to="/builder">
//             <Button size="lg" className="gradient-primary text-primary-foreground px-8 py-6">
//               Continue to Builder
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Templates;