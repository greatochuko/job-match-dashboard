import React from "react";
import MatchScore from "./MatchScore";
import { JobType } from "@/lib/types";
import { calculateJobMatchScore } from "@/lib/utils";

interface JobDetailsProps {
  job: JobType;
  open: boolean;
  userSkills: string[];
  onClose: () => void;
}

export default function JobDetails({
  job,
  userSkills,
  open,
  onClose,
}: JobDetailsProps) {
  const matchScore = calculateJobMatchScore(userSkills, job.requiredSkills);

  return (
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur flex justify-center duration-200 items-center ${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className={`bg-white p-6 rounded-lg shadow-lg max-w-md w-full duration-200 ${
          open ? "scale-100" : "scale-95"
        }`}
      >
        <h2 className="text-2xl font-medium">{job.title}</h2>
        <p className="text-gray-600">
          {job.company} - {job.location}
        </p>
        <p className="text-green-600 font-medium">{job.salary}</p>

        <div className="mt-3">
          <span className="font-medium">Match Score: </span>
          <MatchScore score={matchScore} />
        </div>

        <h3 className="mt-4 font-medium">Required Skills:</h3>
        <ul className="list-disc pl-5 text-gray-700">
          {job.requiredSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <button
          className="mt-4 px-3 py-1.5 border border-rose-500 text-rose-600 rounded hover:bg-rose-50  cursor-pointer duration-200"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
