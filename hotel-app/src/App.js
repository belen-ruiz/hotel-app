import './App.css';
import { Router } from "./router/Router"
import { Header } from "./components/header/Header"
import { Footer } from "./components/footer/Footer"
import { Banner } from "./components/banner/Banner"
import { RoomProvider } from './context/RoomProvider';
 
function App() {
  return (
   <>
    <RoomProvider>
        <Banner />
        <Header />
        <Router />
        <Footer />
    </RoomProvider>
   </>
  );
}

export default App;
