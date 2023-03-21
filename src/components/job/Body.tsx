import { Card, Col, Image, Row } from "react-bootstrap"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getJob } from "../../api/jobApi"
import { Job } from "../../types/job"


export const Body = () => {

  const [job, setJob] = useState({} as Job)

  
  let { id } = useParams()

  useEffect(() => {
    getJob(id).then(data => {
      setJob(data)
    })
  }, [id]);

  return (
    <Card style={{ marginTop: 5 }}>
      <Card.Body>
        <p className="text-secondary">{job.type} / {job.location}</p>
        <h3>{job.title}</h3>
        <hr />
        <Row>
          <Col lg={8}>
            <div dangerouslySetInnerHTML={{ __html: job.description }}></div>
          </Col>
          <Col>
            <Card>
              <Card.Header>
                {job.company}
              </Card.Header>
              <Card.Body>
                <Image src={job.company_logo} />
                <a href={job.company_url}>{job.company_url}</a>
              </Card.Body>
            </Card>
            <br />
            <Card style={{backgroundColor: "#F9EFE2"}}>
              <Card.Header>
                How to apply
              </Card.Header>
              <Card.Body>
                <div dangerouslySetInnerHTML={{__html: job.how_to_apply}}></div>
              </Card.Body>
            </Card>

          </Col>
        </Row>
      </Card.Body>
    </Card>

  )


}