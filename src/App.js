import "./App.css";
import { Router } from "./router/Router";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { RoomProvider } from "./context/RoomProvider";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ThemeProvider, createTheme } from "@mui/material";
import { ScrollToTop } from "./router/ScrollToTop";



function App() {
    return (
        <>
        {/* //<ThemeProvider theme={theme}> */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <RoomProvider>
                        <ScrollToTop />
                            <Header />
                            <Router />
                            <Footer />
                    </RoomProvider>
                </LocalizationProvider>
        {/* </ThemeProvider> */} 
        </>
    );
}

export default App;
