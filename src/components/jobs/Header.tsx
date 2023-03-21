import { Col, Row } from "react-bootstrap"

export const Header = () => {
  return (
    <div style={{ fontSize: 30 }}>
      <Row>
        <Col className="text-white bg-primary">
          <b>GitHub</b> Jobs
        </Col>
      </Row>
    </div>
  )
}