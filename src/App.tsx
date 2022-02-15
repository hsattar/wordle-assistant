import { Col, Container, Row } from 'react-bootstrap'
import WordSidebar from './components/WordSidebar'
import TilesGrid from './components/TilesGrid'
import { useEffect, useState } from 'react'
import { ICorrectLetters } from './types/index'
import _ from 'lodash'

export default function App() {

  const [inputs, setInputs] = useState<string[] | []>([])
  const [correctLetters, setCorrectLetters] = useState<ICorrectLetters[] | []>([])

  const handleInput = (newLetter: string) => {
    if (inputs.length >= 30) return
    
    if (newLetter.match(/^[a-z]$/)) {
      setInputs(prevInputs => [...prevInputs, newLetter])
    }
    
    if (newLetter === 'Enter') {
      console.log(inputs.length);
      
      // const lastLetter = inputs[inputs.length - 1]
      // console.log(lastLetter);
      
      // const position = _.findLastIndex(inputs, newLetter)
      // console.log(position);
      
      // setCorrectLetters(prevArray => [...prevArray, { letter: lastLetter, position }])
    }

  }

  useEffect(() => {
    window.addEventListener('keydown', e => {
      handleInput(e.key)
    })
  }, [])

  return (
    <Container className="mt-5">
      <Row className="d-flex justify-content-center">
        <Col xs="3" className="d-flex justify-content-center">
          <WordSidebar heading="Possible Words" />
        </Col>
        <Col xs="6" className="tile-grid">
          <TilesGrid inputs={inputs}/>
        </Col>
        <Col xs="3" className="d-flex justify-content-center">
          <WordSidebar heading="Suggested Words" />
        </Col>
      </Row>
    </Container>
  )
}