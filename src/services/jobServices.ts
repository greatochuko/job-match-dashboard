import jobs from "@/data/jobs.json";
import { JobType } from "@/lib/types";

export async function fetchJobs(): Promise<JobType[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(jobs);
    }, 1000);
  });
}
