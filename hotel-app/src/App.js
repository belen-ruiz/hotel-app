import './App.css';
import { Router } from "./router/Router"
import { Header } from "./components/header/Header"
import { Footer } from "./components/footer/Footer"
import { Banner } from "./components/banner/Banner"
import { RoomProvider } from './context/RoomProvider';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


 
function App() {
  return (
   <>
<LocalizationProvider dateAdapter={AdapterDayjs}>
    <RoomProvider>
        <Banner />
        <Header />
        <Router />
        <Footer />
    </RoomProvider>
</LocalizationProvider>
   </>
  );
}

export default App;
                    