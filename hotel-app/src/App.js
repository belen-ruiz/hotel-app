import "./App.css";
import { Router } from "./router/Router";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Banner } from "./components/banner/Banner";
import { RoomProvider } from "./context/RoomProvider";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ThemeProvider, createTheme } from "@mui/material";



function App() {
    return (
        <>
        {/* //<ThemeProvider theme={theme}> */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <RoomProvider>
                        <Header />
                        <Router />
                        <Footer />
                        <Banner />
                    </RoomProvider>
                </LocalizationProvider>
        {/* </ThemeProvider> */} 
        </>
    );
}

export default App;
