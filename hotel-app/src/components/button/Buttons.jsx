import Button from "@mui/material/Button";


import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';



const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#f39d09',
  borderColor: '#0063cc',
  

  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});


export default function CustomizedButtons() {
  return (
    <Stack spacing={2} direction="row">
      <BootstrapButton variant="contained">Custom CSS</BootstrapButton>
      
    </Stack>
  );
}

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


export const Buttons = ({ data }) => {
    return (
        <>
            <Button
                variant="contained"
                //color={"hightlight"}
                sx={{
                    my: 2,
                    //backgroundColor: "primary",
                    display: "block",
                    //color: "var--(color-white)",
                }}
                onClick={() => {
                    alert("clicked");
                }}
            >
                {data}
            </Button>
            <BootstrapButton variant="contained">Custom CSS</BootstrapButton>
        </>
    );
};
