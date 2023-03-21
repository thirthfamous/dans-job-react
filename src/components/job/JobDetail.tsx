import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Header } from "../jobs/Header"
import { Body } from "./Body"

export const JobDetail = () => {
  return (
    <Container>
      <Header />
      <Link to={'/jobs'}>Back</Link>
      <Body />
    </Container>
  )
}