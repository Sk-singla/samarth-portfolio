import React from "react";
import { cn } from "@/lib/utils";

interface CodeProps {
  children: string;
  className?: string;
}

export const Code: React.FC<CodeProps> = ({ children, className }) => {
  return (
    <pre
      className={cn(
        "bg-gray-900 text-green-300 text-sm font-mono p-4 rounded-lg overflow-x-auto",
        className
      )}
    >
      <code>{children}</code>
    </pre>
  );
};
