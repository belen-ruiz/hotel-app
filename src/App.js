import "./App.css";
import "./styles/styles.js";
import { Router } from "./router/Router";
import { Header } from "./components/sections/header/Header";
import { Footer } from "./components/sections/footer/Footer";
import { RoomProvider } from "./context/RoomProvider";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ThemeProvider, createTheme } from "@mui/material";
import { ScrollToTop } from "./router/ScrollToTop";
import { UserProvider } from "./context/UserProvider";



function App() {
    return (
        <>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <UserProvider>
                        <RoomProvider>
                            <ScrollToTop />
                                <Header />
                                <Router />
                                <Footer />
                        </RoomProvider>
                    </UserProvider>
                </LocalizationProvider>
        </>
    );
}

export default App;
