import './App.css';
import { Router } from "./router/Router"
import { Header } from "./components/header/Header"
import { Footer } from "./components/footer/Footer"
import { Banner } from "./components/banner/Banner"
 
function App() {
  return (
   <>
    <Banner />
    <Header />
    <Router />
    <Footer />
   </>
  );
}

export default App;
