import { Col, Row } from "react-bootstrap"
import SingleTile from './SingleTile'

interface IProps {
  inputs: string[]
}

export default function TilesGrid({ inputs }: IProps) {

  const letters = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']

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
