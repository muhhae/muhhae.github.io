export interface Project {
  title: string;
  description:string;
  explanation?: string;
  tech?: string[];
  link?: string;
  demo?: string;
  web?: string;
  csv?: string;
  featured?: boolean;
  images?: string[];
}

export const projectsData: Project[] = [
  {
    title: "Complete Example Project",
    description: "<strong>Project featured title.</strong><br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Here you briefly describe your project. <strong>Feature 1</strong>, <strong>Feature 2</strong>, <strong>Feature 3</strong>.",
    explanation:"Here goes the EXTENDED explanation of the project (optional).<br><br><strong>Section 1:</strong><br>• Point 1<br>• Point 2<br>• Point 3<br><br><strong>Section 2:</strong><br>• Additional detail<br>• More information<br><br>Use this field to give detailed context of the project.",
    tech: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"], // CHANGE: Replace with real technologies (React, Node, etc.)
    link: "https://github.com/yourusername/repo-name", // CHANGE: URL of your GitHub repository
    demo: "https://demo.yourproject.com", // CHANGE: URL of your live demo (Vercel, Netlify, etc.)
    web: "https://www.yourproject.com", // CHANGE: URL of the official website
    csv: "/assets/example-data/sample-data.csv", // CHANGE: Path to your CSV file in public/assets/
    featured: true, // true = appears as "PINNED" at the top
    images: [ // CHANGE: Paths to your screenshots (without .png, .jpg extension)
      "/screenshots/example-project/screenshot-01",
      "/screenshots/example-project/screenshot-02",
      "/screenshots/example-project/screenshot-03"
    ]
  },
  {
    title: "Another Example Project",
    description: "<strong>Another featured title.</strong><br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Here you briefly describe your project. <strong>Feature 1</strong>, <strong>Feature 2</strong>, <strong>Feature 3</strong>.",
    explanation:"Here goes the EXTENDED explanation of the project (optional).<br><br><strong>Section 1:</strong><br>• Point 1<br>• Point 2<br>• Point 3<br><br><strong>Section 2:</strong><br>• Additional detail<br>• More information<br><br>Use this field to give detailed context of the project.",
    tech: ["Skill 5", "Skill 6", "Skill 7", "Skill 8"], // CHANGE: Replace with real technologies (React, Node, etc.)
    link: "https://github.com/yourusername/repo-name-2", // CHANGE: URL of your GitHub repository
    demo: "https://demo.yourproject2.com", // CHANGE: URL of your live demo (Vercel, Netlify, etc.)
    web: "https://www.yourproject2.com", // CHANGE: URL of the official website
    csv: "/assets/example-data/sample-data.csv", // CHANGE: Path to your CSV file in public/assets/
    featured: false, // true = appears as "PINNED" at the top
    images: [ // CHANGE: Paths to your screenshots (without .png, .jpg extension)
      "/screenshots/example-project/screenshot-01",
      "/screenshots/example-project/screenshot-02",
      "/screenshots/example-project/screenshot-03"
    ]
  },
]



