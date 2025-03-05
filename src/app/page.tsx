import React from "react";
import JobList from "@/components/JobList";
import { fetchJobs } from "@/services/jobServices";

export default async function App() {
  const jobs = await fetchJobs();

  return (
    <div className="flex-1 bg-zinc-50 px-[5%] py-4">
      <JobList jobs={jobs} />
    </div>
  );
}
