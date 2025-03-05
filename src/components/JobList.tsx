import Job from "./Job";
import { JobType } from "@/lib/types";

type JobListProps = { jobs: JobType[] };

const userSkills = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
];

export default function JobList({ jobs }: JobListProps) {
  return (
    <div className="max-w-7xl mx-auto mt-6">
      <div className="grid sm:grid-cols-[repeat(auto-fill,_minmax(260px,_1fr))] gap-4">
        {jobs.map((job) => (
          <Job key={job.id} job={job} userSkills={userSkills} />
        ))}
      </div>
    </div>
  );
}
