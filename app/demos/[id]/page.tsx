import { demos } from "@/components/demos-data";
import { notFound } from "next/navigation";

export default function DemoDetail({ params }: { params: { id: string } }) {
  const demo = demos.find((d) => d.id === params.id);
  if (!demo) return notFound();

  return (
    <main className="min-h-screen py-10 px-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{demo.title}</h1>
      <div className="mb-2 text-gray-700">{demo.description}</div>
      <div className="mb-2 text-sm text-gray-500">Date: {demo.date}</div>
      {demo.linkedin && (
        <a
          href={demo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline text-sm"
        >
          View LinkedIn Post
        </a>
      )}
    </main>
  );
}
