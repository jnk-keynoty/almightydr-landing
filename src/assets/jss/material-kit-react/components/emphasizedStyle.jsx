const emphasizedStyle = {
    root: {
        fontWeight: "bold",
        "& span": {
            display: "inline-block",
            background: "#FFFFFF",
            padding: "0px 1.5em",
            color: (props) => (props.color),
        }
    }
}

export default emphasizedStyle;