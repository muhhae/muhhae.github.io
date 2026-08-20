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
    date: "Fall 2023 - Fall 2024",
    courseTitle: "Teaching Assistant for Basic Programming, Digital Circuit, and Computer Security",
  },
];
