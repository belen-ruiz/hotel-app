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
        color: "#e49408",
        backgroundColor: "transparent",
        boxShadow: "30px #454544",
        backdropFilter: "blur(10px)",
    },
};

const WhiteButton = {
    color: "#d5d8d5",
    cursor: "pointer",
    transition: "transform 0.1s ease",

    "&:hover": {
        color: "#e49408",
        boxShadow: "2px 1px 4px rgba(232, 230, 230, 0.3)",
        borderRadius: "50%",
        transform: "scale(1.5)",
    },
};

export { OutlinedButton, ContainedButton, WhiteButton };

//   '&:active': {
//     // boxShadow: 'none',
//     backgroundColor: '#0062cc',
//     borderColor: 'none',
//   },
//   '&:focus': {
//     boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',  },
