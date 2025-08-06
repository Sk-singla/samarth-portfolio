export type Demo = {
  id: string;
  title: string;
  description: string;
  date: string;
  linkedin?: string;
};

export const demos: Demo[] = [
  {
    id: "demo-react-dom-handling",
    title: "React DOM Abstraction: The Hidden Cost",
    description: "React abstracts away the DOM for ease of development, but this abstraction isn't free. Here's a simple example showing how the entire table can re-render even for a small change.",
    date: "2025-08-06",
    linkedin: ""
  },
];
