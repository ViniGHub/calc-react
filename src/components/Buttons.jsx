import "./Button.css"

export default function Button(props) {
    return (
        <button
            onClick={_ => props.click && props.click(props.label, props.instant)}
            className={`button${props.operation ? " operation" : ""}${props.double ? " double" : ""}${props.triple ? " triple" : ""}`}>
            {props.text ?? props.label}
        </button>
    )
}