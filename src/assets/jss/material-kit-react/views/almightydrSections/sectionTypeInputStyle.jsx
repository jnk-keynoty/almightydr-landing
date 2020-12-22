import { container } from "assets/jss/material-kit-react.jsx";

const sectionTypeInputStyle = {
    container,
    root: {
        height: "100%",
        textAlign: "center",
    },
    fullHeight: {
        height: "100%",
    },
    topRow: {
        height: "55%",
        color: props => props.topTextColor,
        background: props => props.topBgColor,
        paddingBottom: "20px",
    },
    topRowInner: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
    },
    bottomRow: {
        height: "45%",
        color: props => props.bottomTextColor,
        background: props => props.bottomBgColor,
        paddingTop: "20px",
    },
    inputs: {
        margin: "40px 0",
        '& input': {
            borderRadius: "10px",
            backgroundColor: "#FBFBFB",
            boxShadow: "inset 5px 5px 5px #d5d5d5, inset -5px -5px 5px #ffffff;"
        },
        '& fieldset': {
            borderRadius: "10px",
            borderWidth: "0"
        },
    },
    checkbox: {
        color: "rgba(0, 0, 0, 0.87)",
    }
  };
  
  export default sectionTypeInputStyle;
  