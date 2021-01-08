const customButtonStyle = theme => ({
    button: {
        width: "100%",
        maxWidth: "400px",
        fontSize: "24px",
        fontWeight: "bold",
        paddingTop: "14px",
        paddingBottom: "14px",
          borderRadius: "35px",
    },
    default: {
      backgroundColor: "#FFFFFF",
      boxShadow: "10px 10px 20px #d9d9d9, -10px -10px 20px #ffffff",
      color: "rgba(0, 0, 0, 0.87)",
    },
    primary: {
      boxShadow: "10px 10px 20px #552d83, -10px -10px 20px #733db1",
    },
    danger: {
      backgroundColor: "#FFEF81",
      boxShadow: "10px 10px 20px #d9cb6e, -10px -10px 20px #ffff94",
      color: "rgba(0, 0, 0, 0.87)",
    },
    [theme.breakpoints.down(768)]: {
      button: {
        maxWidth: "300px",
        fontSize: "18px",
      }
    },
})

export default customButtonStyle;