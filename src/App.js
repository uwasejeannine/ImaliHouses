import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NewListings from "./components/NewListings";
import Footer from "./components/Footer";
import CardsHomes from "./components/CardsHomes";
function App() {
  return (
    <div className="  ">
      <Navbar />
      <Home />
      <NewListings />
      <CardsHomes />
      <Footer />
    </div>
  );
}

export default App;
