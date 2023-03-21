import { Container } from "react-bootstrap"
import { Body } from "./Body"
import { Filter } from "./Filter"
import { Header } from "./Header"

export const Jobs = () => {
  return (
    <Container>
      <Header/>
      <Filter/>
      <Body/>
    </Container>
  )
}