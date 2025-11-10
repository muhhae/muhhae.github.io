export interface Publication {
  title: string;
  description: string;
  author: string[];
  explanation?: string;
  link?: string;
  demo?: string;
  web?: string;
  featured?: boolean;
  images?: string[];
}

export const pubsData: Publication[] = [
  {
    title: "Publications 1",
    description: "<strong>Project featured title.</strong><br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Here you briefly describe your project. <strong>Feature 1</strong>, <strong>Feature 2</strong>, <strong>Feature 3</strong>.",
    author:["Muhammad Haekal M. A."],
    explanation:"Here goes the EXTENDED explanation of the project (optional).<br><br><strong>Section 1:</strong><br>• Point 1<br>• Point 2<br>• Point 3<br><br><strong>Section 2:</strong><br>• Additional detail<br>• More information<br><br>Use this field to give detailed context of the project.",
    link: "https://github.com/yourusername/repo-name", // CHANGE: URL of your GitHub repository
    demo: "https://demo.yourproject.com", // CHANGE: URL of your live demo (Vercel, Netlify, etc.)
    web: "https://www.yourproject.com", // CHANGE: URL of the official website
    featured: true, // true = appears as "PINNED" at the top
    images: [ // CHANGE: Paths to your screenshots (without .png, .jpg extension)
      "/screenshots/example-project/screenshot-01",
      "/screenshots/example-project/screenshot-02",
      "/screenshots/example-project/screenshot-03"
    ]
  },
  {
    title: "Publications 2",
    description: "<strong>Another featured title.</strong><br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Here you briefly describe your project. <strong>Feature 1</strong>, <strong>Feature 2</strong>, <strong>Feature 3</strong>.",
    author:["John Doe", "Jane Doe"],
    explanation:"Here goes the EXTENDED explanation of the project (optional).<br><br><strong>Section 1:</strong><br>• Point 1<br>• Point 2<br>• Point 3<br><br><strong>Section 2:</strong><br>• Additional detail<br>• More information<br><br>Use this field to give detailed context of the project.",
    link: "https://github.com/yourusername/repo-name-2", // CHANGE: URL of your GitHub repository
    demo: "https://demo.yourproject2.com", // CHANGE: URL of your live demo (Vercel, Netlify, etc.)
    web: "https://www.yourproject2.com", // CHANGE: URL of the official website
    featured: false, // true = appears as "PINNED" at the top
    images: [ // CHANGE: Paths to your screenshots (without .png, .jpg extension)
      "/screenshots/example-project/screenshot-01",
      "/screenshots/example-project/screenshot-02",
      "/screenshots/example-project/screenshot-03"
    ]
  },
]

