//backdropFilter: scrolling ? 'blur(10px)' : 'none',

const OutlinedButton = {
    backgroundColor: "transparent",
    border: "2px solid #e49408",
    padding: "0.4rem 0.5rem",
    textTransform: "uppercase",
    color: "#e49408",
    fontSize: "0.8rem",
    fontWeight: "bold",
    cursor: "pointer",


    "&:hover": {
        transition: "background-color 0.3s ease",
        backgroundColor: "#e49408",
        color: "white",
        boxShadow: "0 0 30px rgba(69, 69, 68, 1)",
    },
};

const ContainedButton = {
    backgroundColor: "#e49408",
    border: "2px solid #e49408",
    padding: "0.4rem 0.5rem",
    textTransform: "uppercase",
    color: "white",
    fontSize: "0.8rem",
    fontWeight: "bold",
    cursor: "pointer",

    "&:hover": {
        backgroundColor: "transparent",
        boxShadow: "30px #454544",
        backdropFilter: "blur(10px)",
    },
};

export { OutlinedButton, ContainedButton };

//   '&:active': {
//     // boxShadow: 'none',
//     backgroundColor: '#0062cc',
//     borderColor: 'none',
//   },
//   '&:focus': {
//     boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',  },
