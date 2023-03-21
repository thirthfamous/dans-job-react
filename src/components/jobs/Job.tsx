import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Job as JobType } from "../../types/job"

type JobProps = {
  job: JobType
}


export const Job = ({ job }: JobProps) => {
  return (
    <div>
      <Row>
        <Col lg={9}>
          <Link to={job.id} style={{ textDecoration: "none" }} ><b>{job.title}</b></Link>
          <p> <span className="text-secondary">{job.company}</span> - {job.type === 'Full Time' ? <b className="text-success">Full Time</b> : <b>{job.type}</b>} </p>
        </Col>
        <Col className="text-end">
          <p>{job.location}</p>
          <p className="text-secondary">{job.created_at}</p>
        </Col>
        <hr />
      </Row>
    </div>
  )
}