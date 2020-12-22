import { container } from "assets/jss/material-kit-react.jsx";

const sectionType3Style = {
  container,
  root: {
      height: "100%",
      textAlign: "center",
  },
  fullHeight: {
      height: "100%",
  },
  topRow: {
      height: "50%",
      color: props => props.topTextColor,
      background: props => props.topBgColor,
      paddingBottom: "20px",
  },
  topRowInner: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center"
  },
  bottomRow: {
      height: "50%",
      color: props => props.bottomTextColor,
      background: props => props.bottomBgColor,
      paddingTop: "20px",
  },
};

export default sectionType3Style;
