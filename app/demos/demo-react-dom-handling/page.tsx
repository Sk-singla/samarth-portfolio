"use client"

import { useState, memo, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

const ROWS = 10;

function generateRows() {
  return Array.from({ length: ROWS }, (_, i) => ({
    id: i,
    value: Math.floor(Math.random() * 100),
  }));
}

function ProblemDemo() {
  const [rows, setRows] = useState(generateRows());
  const [count, setCount] = useState(0);

  const updateOneRow = () => {
    setCount((c) => c + 1);
    const updated = [...rows];
    updated[0].value = Math.floor(Math.random() * 100);
    setRows(updated);
  };

  return (
    <Card>
      <CardContent className="p-4">
        <div className="mb-2 text-sm text-muted-foreground">Re-renders entire list unnecessarily</div>
        <ul className="space-y-2">
          {rows.map((row) => (
            <Row key={Math.random()} value={row.value} />
          ))}
        </ul>
        <Button onClick={updateOneRow} className="mt-4">Update First Row</Button>
      </CardContent>
    </Card>
  );
}

function Row({ value }: { value: number }) {
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    setFlash(true);
    const timeout = setTimeout(() => setFlash(false), 300);
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <li className={clsx(
      "p-2 rounded transition-colors duration-300",
      flash ? "bg-red-300 dark:bg-red-800" : "bg-secondary"
    )}>
      Row value: {value}
    </li>
  );
}


function SolutionDemo() {
  const [rows, setRows] = useState(generateRows());
  const [count, setCount] = useState(0);

  const updateOneRow = () => {
    setCount((c) => c + 1);
    const updated = rows.map((row) =>
      row.id === 0 ? { ...row, value: Math.floor(Math.random() * 100) } : row
    );
    setRows(updated);
  };

  return (
    <Card>
      <CardContent className="p-4">
        <div className="mb-2 text-sm text-muted-foreground">Only affected row re-renders</div>
        <ul className="space-y-2">
          {rows.map((row) => (
            <OptimizedRow key={row.id} value={row.value} />
          ))}
        </ul>
        <Button onClick={updateOneRow} className="mt-4">Update First Row</Button>
      </CardContent>
    </Card>
  );
}

const OptimizedRow = memo(({ value }: { value: number }) => {
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    setFlash(true);
    const timeout = setTimeout(() => setFlash(false), 300);
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <li className={clsx(
      "p-2 rounded transition-colors duration-300",
      flash ? "bg-green-300 dark:bg-green-700" : "bg-green-100 dark:bg-green-900"
    )}>
      Row value: {value}
    </li>
  );
});


export default function ReactRenderingProblemPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      <section>
        <h1 className="text-2xl font-bold mb-2">🔍 Problem: React Re-rendering Hidden Cost</h1>
        <p className="text-muted-foreground mb-4">
          When React keys are misused (e.g., using random keys), it can't correctly reuse elements, triggering unnecessary re-renders.
        </p>
        <Tabs defaultValue="demo">
          <TabsList>
            <TabsTrigger value="demo">Problem Demo</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="demo">
            <ProblemDemo />
          </TabsContent>
          <TabsContent value="code">
            <pre className="text-sm bg-muted p-4 rounded overflow-x-auto">
{`{rows.map((row) => (
  <Row key={Math.random()} value={row.value} />
))}`}
            </pre>
            <p className="text-sm text-muted-foreground mt-2">🔺 Using <code>Math.random()</code> as a key causes all rows to re-render every time.</p>
          </TabsContent>
        </Tabs>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">✅ Solution: Stable Keys + Immutable Updates</h2>
        <p className="text-muted-foreground mb-4">
          By using stable keys (like unique IDs) and updating state immutably, React can skip re-rendering unchanged components.
        </p>
        <Tabs defaultValue="demo">
          <TabsList>
            <TabsTrigger value="demo">Solution Demo</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="demo">
            <SolutionDemo />
          </TabsContent>
          <TabsContent value="code">
            <pre className="text-sm bg-muted p-4 rounded overflow-x-auto">
{`{rows.map((row) => (
  <OptimizedRow key={row.id} value={row.value} />
))}`}
            </pre>
            <p className="text-sm text-muted-foreground mt-2">✅ Stable keys + immutable updates = efficient rendering.</p>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
