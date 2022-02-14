import { Col, Row } from "react-bootstrap"
import SingleTile from './SingleTile'

interface IProps {
  letters: string[]
  inputs: string[]
}

export default function TilesGrid({ letters, inputs }: IProps) {
  return (
    <Row>
      <Col xs="12">
        <Row className="d-flex justify-content-center">
          { letters.map((letter, idx) => <SingleTile key={idx} letter={letter} inputs={inputs} character={idx} />) }
        </Row>
      </Col>
    </Row>
  )
}
