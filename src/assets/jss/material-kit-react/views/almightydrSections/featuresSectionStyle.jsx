import { container } from "assets/jss/material-kit-react.jsx";

const featuresSectionStyle = theme => ({
    container,
      root: {
          color: "rgba(0, 0, 0, 0.87)",
          textAlign: "center",
          padding: "30px 0",
      },
      title: {
          lineHeight: "1.2em",
          marginBottom: "15px"
      },
      items: {
        display: "flex",
        flexWrap: "wrap",
        boxSizing: "border-box",
        marginLeft: "-5px",
        marginRight: "-5px",
      },
      item: {
          flexGrow: "0",
          width: "20%",
          flexBasis: "20%",
          paddingLeft: "5px",
          paddingRight: "5px",
      },
      [theme.breakpoints.down(768)]: {
        item: {
            flexGrow: "0",
            width: "33.33333%",
            flexBasis: "33.33333%",
        },
  
      },
      [theme.breakpoints.down(576)]: {
        item: {
            flexGrow: "0",
            width: "100%",
            flexBasis: "100%",
        },
      }
})

export default featuresSectionStyle;