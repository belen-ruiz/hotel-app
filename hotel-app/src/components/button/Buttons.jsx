import Button from "@mui/material/Button";


import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';



const BookButtonStyled = styled(Button)({
  boxShadow: 'none',
  textTransform: 'uppercase',
  fontSize: 16,
  padding: '6px 12px',
  lineHeight: 1.5,
  backgroundColor: '#b47201',  
  transform: "scale(1)",
  transition: "transform 0.3s ease",

  '&:hover': {
    backgroundColor: '#b47201',
    borderColor: 'none',
    boxShadow: "30px #454544",
    transform: "scale(1.1)"
  },
//   '&:active': {
//     // boxShadow: 'none',
//     backgroundColor: '#0062cc',
//     borderColor: 'none',
//   },
//   '&:focus': {
//     boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',  },
});




export const Buttons = ({ data }) => {
    return (
        <>
            <BookButtonStyled
                variant="contained">
                {data}
            </BookButtonStyled>
            
        </>
    );
};



// const theme = createTheme({
//     palette: {
//     //   primary: {
//     //     main: '#f39d09',
//     //     light: '#ecedee',
//     //     dark: '#1c1c1c',
//     //     contrastText: '#7d7c7e',
//     //   },
//       grey: "#7d7c7e",
//       hightlight: '#f39d09',
// //         // white: '#fff',
//     },
//   });