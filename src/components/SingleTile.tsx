import { Col } from "react-bootstrap"

interface IProps {
    letter: string
}

export default function SingleTile({ letter }: IProps) {
    return (
        <Col xs="2" className="tile m-2 d-flex justify-content-center align-items-center text-uppercase">{letter}</Col>
    )
}
