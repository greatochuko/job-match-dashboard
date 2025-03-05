import React from "react";

interface MatchScoreProps {
  score: number;
}

export default function MatchScore({ score }: MatchScoreProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <span
      className={`px-2 py-1 rounded-full text-white text-sm ${getScoreColor(
        score
      )}`}
    >
      {score}%
    </span>
  );
}
