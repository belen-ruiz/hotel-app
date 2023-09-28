import './App.css';
import { Router } from "./router/Router"
import { Header } from "./components/header/Header"
import { Footer } from "./components/footer/Footer"
import { Banner } from "./components/banner/Banner"
import { RoomProvider } from './context/RoomProvider';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        orange: {
          main: '#f39d09',
          light: "#ecedee",
          dark: "#1c1c1c",
          contrastText: "#7d7c7e",
        //secondary: "#7d7c7e",
        // white: '#fff',
      }
    },
  });


function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <RoomProvider>
            <Header />
            <Router />
            <Footer />
          </RoomProvider>
        </LocalizationProvider>
    </ThemeProvider>
    </>
  );
}

export default App;


