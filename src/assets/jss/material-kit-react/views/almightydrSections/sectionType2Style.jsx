import { container } from "assets/jss/material-kit-react.jsx";

const sectionType2Style = theme => ({
  container,
  [theme.breakpoints.down(768)]: {
    fullHeight: {
        height: "auto",
        minHeight: "100%",
        position: "relative",
    },
    topRow: {
        height: "auto",
    },
    bottomRow: {
        height: "auto",
    },
    topText: {
        padding: "80px 0 30px"
    },
    bottomLists: {
        padding: "30px 0"
    },
    bottomList: {
        width: "100%",
        margin: "5px 0"
    },
    companyName: {
        width: "100%",
        textAlign: "right",
        margin: "10px 0"
    }
},
[theme.breakpoints.up(768)]: {
    fullHeight: {
        height: "100%",
        position: "relative",
    },
    topRow: {
        height: "70%",
    },
    bottomRow: {
        height: "30%",
    },
    companyName: {
        position: "absolute",
        left: "0px",
        bottom: "30px",
    },    
},
[theme.breakpoints.up(992)]: {
    topRow: {
        height: "calc(100vh - 300px)",
    },
    bottomRow: {
        height: "300px",
    },
}
});

export default sectionType2Style;
