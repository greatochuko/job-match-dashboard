"use client";

import React, { useState } from "react";
import MatchScore from "./MatchScore";
import ApplyButton from "./ApplyButton";
import { JobType } from "@/lib/types";
import JobDetails from "./JobDetails";
import { calculateJobMatchScore } from "@/lib/utils";

export default function Job({
  job,
  userSkills,
}: {
  job: JobType;
  userSkills: string[];
}) {
  const [showJobDetails, setShowJobDetails] = useState(false);

  const matchScore = calculateJobMatchScore(userSkills, job.requiredSkills);

  return (
    <>
      <div className="bg-white p-4 rounded-lg  border border-zinc-200">
        <h3 className="text-xl font-medium">{job.title}</h3>
        <p className="text-gray-600">
          {job.company} - {job.location}
        </p>
        <p className="text-green-600 ">{job.salary}</p>

        <div className="flex items-center mt-2">
          <span className="font-medium mr-2">Match Score:</span>
          <MatchScore score={matchScore} />
        </div>

        <div className="flex gap-2 items-center">
          <button
            className="mt-3 px-3 py-1.5 font-medium border border-zinc-200 rounded hover:bg-zinc-100 cursor-pointer duration-200"
            onClick={() => setShowJobDetails(true)}
          >
            View Details
          </button>

          <ApplyButton
            userSkills={userSkills}
            requiredSkills={job.requiredSkills}
            onApply={() => alert("Application submitted!")}
          />
        </div>
      </div>
      <JobDetails
        job={job}
        open={showJobDetails}
        userSkills={userSkills}
        onClose={() => setShowJobDetails(false)}
      />
    </>
  );
}
