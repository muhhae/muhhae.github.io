export interface Publication {
  title: string;
  description: string;
  author: string[];
  explanation?: string;
  artifact?: string;
  abstract?: string;
  link?: string;
  web?: string;
  featured?: boolean;
  images?: string[];
}

export const MY_AUTHOR_MARKER = "MINE:";

export const pubsData: Publication[] = [
  {
    title: "Demystifying and Improving Lazy Promotion in Cache Eviction",
    description: "In submission <strong>VLDB 2026</strong>, <em>manuscripts available upon request</em>",
    author:["Qinghan Chen", `${MY_AUTHOR_MARKER}Muhammad Haekal Muhyidin Al-Araby`, "Ziyue Qiu", "Zhuofan Chen", "Rashmi Vinayak", "Juncheng Yang"],
    abstract:"Here goes the EXTENDED explanation of the project (optional).<br><br><strong>Section 1:</strong><br>• Point 1<br>• Point 2<br>• Point 3<br><br><strong>Section 2:</strong><br>• Additional detail<br>• More information<br><br>Use this field to give detailed context of the project.",
    featured: false, // true = appears as "PINNED" at the top
  },
]

