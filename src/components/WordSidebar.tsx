interface IProps {
    heading: string
}

export default function WordSidebar({ heading }: IProps) {
    return (
        <div>
            <h5>{heading}</h5>
        </div>
    )
}
