
import api from "../shared/axios";
import { Job, JobResponse } from "../types/job";

export const getJobs = async (description?: string, location?: string, full_time: boolean = false, page?: number): Promise<JobResponse> => {
  const response = await api.get('/jobs', {
    params: {
      description: description,
      location: location,
      full_time: full_time,
      page: page
    }
  });

  const jobsData = response.data.data
  const metaData = response.data.meta
  
  return {
    jobs: jobsData,
    meta: metaData
  }
}

export const getJob = async (id: string | undefined): Promise<Job> => {
  const response = await api.get('/jobs/'+id);

  return response.data.data
}