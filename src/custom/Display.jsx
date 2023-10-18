const disableGutters = {
  paddingLeft: { xs: 0, md: 0, lg: 0 },
  paddingRight: { xs: 0, md: 0, lg: 0 },
  marginLeft: { xs: 0, md: 0, lg: 0 },
  marginRight: { xs: 0, md: 0, lg: 0 },
}
const Pages = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "1280px",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",

    
};


const MainSections = {
    ...disableGutters,
    display: "flex",
    width: "100%",
    maxWidth: "1280px",
    height: "auto",
    justifyContent: "center",
    alignContent: "end",
    backgroundColor: "#182706",
}


const section = {
    width: "100%",
    maxWidth: "1280px",
    display: "flex",
    justifyContent: "center",
    padding: "2rem"
    
  };
  
  const alignCenter = {
    ...section,
    alignItems: "center",
  };
  
  const alignStart = {
    ...section,
    alignItems: "start",
    gap: "1.5rem",
  };
  




export { Pages, MainSections, alignCenter, alignStart, disableGutters };
