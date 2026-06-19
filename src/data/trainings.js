const CDN_BASE_URL = 'https://pub-33737b2aa9d84562932483aa2479fcaa.r2.dev';

const trainings = [
  // Artificial Intelligence Category (3 trainings)
  {
    id: 1,
    category: "Artificial Intelligence",
    title: "AI System Thinking",
    image: `${CDN_BASE_URL}/aisystemthinking.webp`,
    pages: [1]
  },
  {
    id: 2,
    category: "Artificial Intelligence",
    title: "Vibe Coding",
    image: `${CDN_BASE_URL}/vibe-coding-1.webp`,
    images: [`${CDN_BASE_URL}/vibe-coding-1.webp`, `${CDN_BASE_URL}/vibe-coding-2.webp`],
    pages: [1, 2]
  },
  // Data Science Category (2 trainings)
  {
    id: 3,
    category: "Data Science",
    title: "Certified Data Science Practitioner",
    image: `${CDN_BASE_URL}/certified-data-science-practitioner-1.webp`,
    images: [`${CDN_BASE_URL}/certified-data-science-practitioner-1.webp`, `${CDN_BASE_URL}/certified-data-science-practitioner-2.webp`],
    pages: [1, 2]
  },
  // Information Security Category (2 trainings)
  {
    id: 4,
    category: "Information Security",
    title: "Cybersecurity",
    image: `${CDN_BASE_URL}/cybersecurity-1.webp`,
    images: [`${CDN_BASE_URL}/cybersecurity-1.webp`, `${CDN_BASE_URL}/cybersecurity-2.webp`],
    pages: [1, 2]
  },
  // Engineering Category (2 trainings)
  {
    id: 5,
    category: "Engineering",
    title: "Electrical Engineering",
    image: `${CDN_BASE_URL}/electrical-engineering-1.webp`,
    images: [`${CDN_BASE_URL}/electrical-engineering-1.webp`, `${CDN_BASE_URL}/electrical-engineering-2.webp`],
    pages: [1, 2]
  },
  // Project Management Category (1 training)
  {
    id: 6,
    category: "Project Management",
    title: "PMP",
    image: `${CDN_BASE_URL}/pmp.webp`,
    pages: [1]
  },
  // Semiconductor Category (4 training)
  {
    id: 7,
    category: "Semiconductor",
    title: "Wafer Fabrication",
    image: `${CDN_BASE_URL}/wafer-fabrication.webp`,
    pages: [1]
  },
  {
    id: 8,
    category: "Semiconductor",
    title: "CMOS Amplifier Design",
    image: `${CDN_BASE_URL}/cmosamplifierdesign.webp`,
    pages: [1]
  },
  {
    id: 9,
    category: "Semiconductor",
    title: "Analytical & Failure Analysis",
    image: `${CDN_BASE_URL}/analytical-failure-analysis.webp`,
    pages: [1]
  },
  {
    id: 10,
    category: "Semiconductor",
    title: "Nanoindentation",
    image: `${CDN_BASE_URL}/nanoindentation.webp`,
    pages: [1]
  },
  // TTT Category (1 training)
  {
    id: 11,
    category: "Train The Trainer",
    title: "Train The Trainer",
    image: `${CDN_BASE_URL}/ttt-1.webp`,
    images: [`${CDN_BASE_URL}/ttt-1.webp`, `${CDN_BASE_URL}/ttt-2.webp`],
    pages: [1, 2]
  }
];

export default trainings;
