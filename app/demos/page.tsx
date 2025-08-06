import Link from "next/link";
import { demos } from "@/components/demos-data";

export default function DemosPage() {
  return (
    <main className="min-h-screen py-10 px-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Demo Experiments</h1>
      <ul className="space-y-6">
        {demos.map((demo) => (
          <li key={demo.id} className="border rounded-lg p-4 hover:shadow-lg transition">
            <Link href={`/demos/${demo.id}`} className="block">
              <h2 className="text-xl font-semibold mb-1">{demo.title}</h2>
              <p className="text-gray-700 mb-2">{demo.description}</p>
              <div className="text-sm text-gray-500 mb-2">Date: {demo.date}</div>
            </Link>
            {demo.linkedin && (
              <a
                href={demo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline text-sm mt-2 block"
              >
                LinkedIn Post
              </a>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
