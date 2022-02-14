import { Col, Row } from "react-bootstrap"
import SingleTile from './SingleTile'

const letters = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']

export default function TilesGrid() {
  return (
    <Row>
      <Col xs="12">
        <Row className="d-flex justify-content-center">
          { letters.map((letter, idx) => <SingleTile key={idx} letter={letter} />) }
        </Row>
      </Col>
    </Row>
  )
}
