const BASE_URL = process.env.BASE_URL;

export async function fetchJobs() {
  try {
    const response = await fetch(`${BASE_URL}/api/jobs`);
    if (!response.ok) throw new Error("Error fetching jobs");

    const data = await response.json();
    return { jobs: data, error: null };
  } catch (err) {
    const error = err as Error;
    return { jobs: [], error: error.message };
  }
}
