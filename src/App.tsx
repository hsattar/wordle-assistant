import { Col, Container, Row } from 'react-bootstrap'
import WordSidebar from './components/WordSidebar'
import TilesGrid from './components/TilesGrid'
import { useEffect, useState } from 'react'

export default function App() {

  const [letters, setLetters] = useState(['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''])
  const [inputs, setInputs] = useState<string[] | []>([])

  const handleInput = (newLetter: string) => {
    setInputs(prevInputs => [...prevInputs, newLetter])
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
          <TilesGrid letters={letters} inputs={inputs}/>
        </Col>
        <Col xs="3" className="d-flex justify-content-center">
          <WordSidebar heading="Suggested Words" />
        </Col>
      </Row>
    </Container>
  )
}