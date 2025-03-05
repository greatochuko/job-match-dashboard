import { calculateJobMatchScore } from "@/lib/utils";
import React from "react";

interface ApplyButtonProps {
  userSkills: string[];
  requiredSkills: string[];
  onApply: () => void;
}

export default function ApplyButton({
  userSkills,
  requiredSkills,
  onApply,
}: ApplyButtonProps) {
  const missingSkills = requiredSkills.filter(
    (skill) => !userSkills.includes(skill)
  );

  const matchScore = calculateJobMatchScore(userSkills, requiredSkills);

  function handleApply() {
    if (matchScore < 80) {
      alert(
        `You are missing these skills: ${missingSkills.join(
          ", "
        )}. Consider upskilling.`
      );
    } else {
      onApply();
    }
  }

  return (
    <button
      className="cursor-pointer font-medium mt-3 px-3 duration-200 py-1.5 border border-blue-500 text-blue-500 rounded hover:bg-blue-50 "
      onClick={handleApply}
    >
      Apply Now
    </button>
  );
}
