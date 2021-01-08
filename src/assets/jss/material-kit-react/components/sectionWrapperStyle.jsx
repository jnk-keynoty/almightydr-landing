const sectionWrapperStyle = theme => ({
    root: {
        [theme.breakpoints.down(768)]: {
            minHeight: "100vh",
        },
        [theme.breakpoints.up(768)]: {
            height: "100vh",
        },    
    },
})

export default sectionWrapperStyle;