import { Col, Container, Row } from 'react-bootstrap'
import PossibleWords from './components/PossibleWords'
import SuggestedWords from './components/SuggestedWords'
import TilesGrid from './components/TilesGrid'

export default function App() {
  return (
    <Container>
      <Row>
        <Col xs="3">
          <PossibleWords />
        </Col>
        <Col xs="6">
          <TilesGrid />
        </Col>
        <Col xs="3">
          <SuggestedWords />
        </Col>
      </Row>
    </Container>
  )
}