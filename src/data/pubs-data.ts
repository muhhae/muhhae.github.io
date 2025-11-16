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
    description: "Accepted <strong>VLDB 2026</strong>, <em>manuscripts available upon request</em>",
    author:["Qinghan Chen", `${MY_AUTHOR_MARKER}Muhammad Haekal Muhyidin Al-Araby`, "Ziyue Qiu", "Zhuofan Chen", "Rashmi Vinayak", "Juncheng Yang"],
    abstract: "Cache eviction algorithms play a critical role in the performance of modern data systems, yet their scalability is often limited by the high computational overhead associated with object promotions. Lazy Promotion techniques have emerged as relaxations of traditional Least-Recently-Used (LRU) methods, designed to alleviate lock contention and increase throughput. This work uses production traces from real-world systems to benchmark five Lazy Promotion strategies: Probabilistic-LRU, Batch-LRU, Delay-LRU, FIFO-reinsertion, and Random-LRU. We evaluate these techniques across miss ratio, scalability, promotion count, and a novel metric called promotion efficiency, which measures the number of hits per promotion. Our results reveal that Delay-LRU and FIFO-reinsertion significantly improve promotion efficiency, whereas Batch-LRU and Probabilistic-LRU struggle to reduce promotions without significantly increasing miss ratio. Moreover, we uncover substantial optimization potential, showing that most cache promotions are unnecessary when equipped with oracle knowledge. To further reduce promotions in LRU, we propose two novel enhancements—Delayed FIFO-reinsertion (D-FR) and Age-Guided Eviction (AGE) that reduce promotions by 20—60% while achieving a similar or lower miss ratio.",
    featured: false, // true = appears as "PINNED" at the top
  },
]

