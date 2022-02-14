import { Col } from "react-bootstrap"

interface IProps {
    letter: string
    inputs: string[]
    character: number
}

export default function SingleTile({ letter, inputs, character }: IProps) {
    return (
        <Col xs="2" className="tile m-2 d-flex justify-content-center align-items-center text-uppercase">{inputs[character] || letter}</Col>
    )
}
