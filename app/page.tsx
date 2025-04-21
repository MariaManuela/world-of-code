import React from "react";
import WorldMap from "../components/WorldMap";

export default function Home(): JSX.Element {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-200 to-purple-300">
      <h1 className="text-5xl font-bold text-white drop-shadow-md">
        <WorldMap></WorldMap>
      </h1>
    </main>
  );
}
