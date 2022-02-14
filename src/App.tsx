import { Col, Container, Row } from 'react-bootstrap'
import WordSidebar from './components/WordSidebar'
import TilesGrid from './components/TilesGrid'

export default function App() {
  return (
    <Container className="mt-5">
      <Row className="d-flex justify-content-center">
        <Col xs="3" className="d-flex justify-content-center">
          <WordSidebar heading="Possible Words" />
        </Col>
        <Col xs="6" className="tile-grid">
          <TilesGrid />
        </Col>
        <Col xs="3" className="d-flex justify-content-center">
          <WordSidebar heading="Suggested Words" />
        </Col>
      </Row>
    </Container>
  )
}