import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Carousel from "./components/carousel/Carousel";
import CardGrid from "./components/card-grid/CardGrid";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h1 className="text-center">Nand Jashoda Jewelers</h1>
        <Carousel />
        <CardGrid />
      </div>
      <Footer />
    </div>
  );
}

export default App;
