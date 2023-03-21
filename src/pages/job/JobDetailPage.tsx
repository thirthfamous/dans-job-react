import { JobDetail } from "../../components/job/JobDetail";
import { withAuth } from "../../shared/auth";

export const JobDetailPage = withAuth(
  () => (
    <div>
      <JobDetail />
    </div>
  )

)
