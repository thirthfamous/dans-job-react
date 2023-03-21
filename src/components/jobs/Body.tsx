import { Button, Card } from "react-bootstrap"
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { useEffect, useState } from "react"
import { fetchJobs } from "../../store/job"
import { Job } from "./Job"

export const Body = () => {

  const dispatch = useAppDispatch();

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchJobs(undefined, undefined, false, page, true))
  }, [dispatch, page]);

  const jobs = useAppSelector((state) => state.jobs)

  const handleShowMore = () => {
    setPage(page + 1);
  }

  return (
    <Card style={{ marginTop: 5 }}>
      <Card.Body>
        <h1>Job List</h1>
        <hr />
        {!jobs.loading ? (
          <>
            {jobs.data.map(job => <Job key={job.id} job={job} />)}
            <div style={{ textAlign: 'center' }}>
              <Button variant="primary" onClick={handleShowMore} style={{width: "100%", marginLeft: 'auto', marginRight: 'auto'}}>More Jobs</Button>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}

      </Card.Body>
    </Card>

  )


}