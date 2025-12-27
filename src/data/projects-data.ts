export interface Project {
  title: string;
  description: string;
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
    title: "Interpreted Programming Language",
    description:
      "Implemented core programming language features like <strong>variables, arithmetic, functions, and classes</strong>. Designed and implemented a <strong>custom IDE</strong> with syntax highlighting and an interactive shell.",
    link: "https://github.com/muhhae/interpreted-lang-py",
    images: ["/screenshots/pyhaekal.png"],
    featured: false,
  },
  {
    title: "Tetromino - Tetromania Castle",
    description:
      "Implemented the <strong>game mechanics and 2D collision detection</strong> from scratch using C++.",
    link: "https://github.com/muhhae/tetromania-castle",
    web: "https://muhhae.itch.io/tetromania-castle",
    images: ["/screenshots/tetromania.png", "/screenshots/tetromania.gif"],
    featured: false,
  },
  {
    title: "ESP32 PingPong Game",
    description:
      "A Ping-Pong game written in C++ for ESP32 and a dot-matrix display. Features <strong>dot-matrix display rendering</strong> and a <strong>buzzer-based music player</strong>.",
    link: "https://github.com/muhhae/esp32-pingpong",
    images: ["/screenshots/esp32pong.jpeg"],
    featured: false,
  },
  {
    title: "Image sharing platform - Lorem Ipsum",
    description:
      "Developed a web application for sharing random images using Go and HTMX. Includes <strong>authentication</strong> and a <strong>light-weight image loader</strong> algorithm.",
    link: "https://github.com/muhhae/lorem-ipsum",
    images: [
      "/screenshots/lorem-ipsum/1.jpg",
      "/screenshots/lorem-ipsum/2.jpg",
      "/screenshots/lorem-ipsum/3.jpg",
    ],
    featured: false,
  },
];
