import { Jobs } from "../../components/jobs/Jobs";
import { withAuth } from "../../shared/auth";

export const JobsPage = withAuth(
  () => (
    <div>
      <Jobs />
    </div>
  )

)
