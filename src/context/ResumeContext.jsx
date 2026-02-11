// import React, { createContext, useContext, useState } from 'react';

// const defaultResumeData = {
//   header: {
//     fullName: '',
//     jobTitle: '',
//     email: '',
//     phone: '',
//     linkedin: '',
//     github: '',
//     leetcode: '',
//     location: '',
//   },
//   summary: '',
//   education: [],
//   skills: {
//     technical: [],
//     soft: [],
//   },
//   experience: [],
//   projects: [],
//   certifications: [],
// };

// const ResumeContext = createContext(undefined);

// export const ResumeProvider = ({ children }) => {
//   const [resumeData, setResumeData] = useState(defaultResumeData);
//   const [selectedTemplate, setSelectedTemplate] = useState('classic');

//   const updateResumeData = (data) => {
//     setResumeData((prev) => ({ ...prev, ...data }));
//   };

//   const updateHeader = (header) => {
//     setResumeData((prev) => ({
//       ...prev,
//       header: { ...prev.header, ...header },
//     }));
//   };

//   return (
//     <ResumeContext.Provider
//       value={{
//         resumeData,
//         updateResumeData,
//         updateHeader,
//         selectedTemplate,
//         setSelectedTemplate,
//       }}
//     >
//       {children}
//     </ResumeContext.Provider>
//   );
// };

// export const useResume = () => {
//   const context = useContext(ResumeContext);
//   if (!context) {
//     throw new Error('useResume must be used within a ResumeProvider');
//   }
//   return context;
// };

// ================================================================

// import React, { createContext, useContext, useState, useEffect } from 'react';

// const STORAGE_KEY = 'resume-builder-data';

// const defaultResumeData = {
//   header: {
//     fullName: '',
//     jobTitle: '',
//     email: '',
//     phone: '',
//     linkedin: '',
//     github: '',
//     leetcode: '',
//     location: '',
//   },
//   summary: '',
//   education: [],
//   skills: {
//     technical: [],
//     soft: [],
//   },
//   experience: [],
//   projects: [],
//   certifications: [],
// };

// const ResumeContext = createContext(undefined);

// export const ResumeProvider = ({ children }) => {
//   // 1. Initialize state from localStorage or default
//   const [resumeData, setResumeData] = useState(() => {
//     if (typeof window !== "undefined") {
//       const saved = localStorage.getItem(STORAGE_KEY);
//       return saved ? JSON.parse(saved) : defaultResumeData;
//     }
//     return defaultResumeData;
//   });

//   const [selectedTemplate, setSelectedTemplate] = useState(() => {
//     if (typeof window !== "undefined") {
//       return localStorage.getItem('resume-template') || 'classic';
//     }
//     return 'classic';
//   });

//   // 2. Auto-save whenever data changes
//   useEffect(() => {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(resumeData));
//   }, [resumeData]);

//   useEffect(() => {
//     localStorage.setItem('resume-template', selectedTemplate);
//   }, [selectedTemplate]);

//   // Update logic
//   const updateResumeData = (data) => {
//     setResumeData((prev) => ({ ...prev, ...data }));
//   };

//   const updateHeader = (header) => {
//     setResumeData((prev) => ({
//       ...prev,
//       header: { ...prev.header, ...header },
//     }));
//   };

//   const clearResume = () => {
//     if (window.confirm("Are you sure you want to clear all data?")) {
//       setResumeData(defaultResumeData);
//       localStorage.removeItem(STORAGE_KEY);
//     }
//   };

//   return (
//     <ResumeContext.Provider
//       value={{
//         resumeData,
//         updateResumeData,
//         updateHeader,
//         selectedTemplate,
//         setSelectedTemplate,
//         clearResumecl
//       }}
//     >
//       {children}
//     </ResumeContext.Provider>
//   );
// };

// export const useResume = () => {
//   const context = useContext(ResumeContext);
//   if (!context) {
//     throw new Error('useResume must be used within a ResumeProvider');
//   }
//   return context;
// };

// ==========================================================

import React, { createContext, useContext, useState, useEffect } from "react";

const STORAGE_KEY = "resume-builder-data";
const TEMPLATE_KEY = "resume-template";

const defaultResumeData = {
	header: {
		fullName: "",
		jobTitle: "",
		email: "",
		phone: "",
		linkedin: "",
		github: "",
		leetcode: "",
		location: "",
	},
	summary: "",
	education: [],
	skills: { technical: [], soft: [] },
	experience: [],
	projects: [],
	certifications: [],
};

const ResumeContext = createContext(undefined);

// export const ResumeProvider = ({ children }) => {
// 	// 1. Safe Initialization
// 	const [resumeData, setResumeData] = useState(() => {
// 		try {
// 			if (typeof window !== "undefined") {
// 				const saved = localStorage.getItem(STORAGE_KEY);
// 				return saved ? JSON.parse(saved) : defaultResumeData;
// 			}
// 		} catch (error) {
// 			console.error("Failed to parse resume data:", error);
// 			return defaultResumeData;
// 		}
// 		return defaultResumeData;
// 	});


export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState(() => {
    try {
      if (typeof window !== "undefined") {
        const saved = localStorage.getItem(STORAGE_KEY);
        // Ensure we merge saved data with default to prevent "missing field" crashes
        return saved ? { ...defaultResumeData, ...JSON.parse(saved) } : defaultResumeData;
      }
    } catch (error) {
      return defaultResumeData;
    }
    return defaultResumeData;
  });
	const [selectedTemplate, setSelectedTemplate] = useState(() => {
		if (typeof window !== "undefined") {
			return localStorage.getItem(TEMPLATE_KEY) || "classic";
		}
		return "classic";
	});

	// 2. Auto-save
	useEffect(() => {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(resumeData));
	}, [resumeData]);

	useEffect(() => {
		localStorage.setItem(TEMPLATE_KEY, selectedTemplate);
	}, [selectedTemplate]);

	// Update logic
	const updateResumeData = (data) => {
		setResumeData((prev) => ({ ...prev, ...data }));
	};

	const updateHeader = (header) => {
		setResumeData((prev) => ({
			...prev,
			header: { ...prev.header, ...header },
		}));
	};

	useEffect(() => {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(resumeData));
	}, [resumeData]);

	const clearResume = () => {
		if (window.confirm("Are you sure you want to clear all data?")) {
			setResumeData(defaultResumeData);
			localStorage.removeItem(STORAGE_KEY);
		}
	};

	return (
		<ResumeContext.Provider
			value={{
				resumeData,
				updateResumeData,
				updateHeader,
				selectedTemplate,
				setSelectedTemplate,
				clearResume, // Fixed the typo here
			}}
		>
			{children}
		</ResumeContext.Provider>
	);
};

export const useResume = () => {
	const context = useContext(ResumeContext);
	if (!context) {
		throw new Error("useResume must be used within a ResumeProvider");
	}
	return context;
};
