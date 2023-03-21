import { useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { useAppDispatch } from "../../store/hooks"
import { fetchJobs } from "../../store/job"

export const Filter = () => {

  const dispatch = useAppDispatch()

  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [fulltime, setFulltime] = useState(false)

  const handleClick = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    dispatch(fetchJobs(description, location, fulltime))
  }

  return (
    <Form style={{ marginTop: 5 }} onSubmit={handleClick}>
      <Row>
        <Col>
          <Form.Label><b>Job Description</b></Form.Label>
          <Form.Control
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </Col>
        <Col>
          <Form.Label><b>Location</b></Form.Label>
          <Form.Control
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </Col>
        <Col>
          <Row className="justify-content-center">
            <Col><b>Fulltime only</b></Col>
            <Col>
              <Form.Check
                checked={fulltime}
                onChange={(event) => setFulltime(event.target.checked)}
              />
            </Col>
          </Row>
        </Col>
        <Col>
          <Button variant="primary" type="submit">Search</Button>
        </Col>
      </Row>
    </Form>
  )
}
