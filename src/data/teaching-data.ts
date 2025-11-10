export interface Teaching {
  university: string;
  department: string;
  date: string;
  courseTitle: string;
  description?: string;
  link?: string;
}

export const teachingData: Teaching[] = [
  {
    university: "Sepuluh Nopember Institute of Technology",
    department: "Computer Engineering Department",
    date: "Fall 2024",
    courseTitle: "Teaching Assistant for Computer Security",
  },
  {
    university: "Sepuluh Nopember Institute of Technology",
    department: "Computer Engineering Department",
    date: "Fall 2024",
    courseTitle: "Teaching Assistant for Basic Programming",
  },
  {
    university: "Sepuluh Nopember Institute of Technology",
    department: "Computer Engineering Department",
    date: "Spring 2024",
    courseTitle: "Teaching Assistant for Digital Circuit",
  },
  {
    university: "Sepuluh Nopember Institute of Technology",
    department: "Computer Engineering Department",
    date: "Fall 2023",
    courseTitle: "Teaching Assistant for Basic Programming",
  },
];
