import './App.css';
import NavBar from './Components/NavBar/NavBar'
import Sliderr from './Components/Sliderr/Sliderr'
import  ProductCard from './Components/Products/ProductCard';
import ReactCardSlider from './Components/Slider2/Slider2';
import ReactCardSlider1 from './Components/Slider3/Slider3';

function App() {
  return (
    <>
      <NavBar />
      <Sliderr />
      <ProductCard />
      <ReactCardSlider />
      <ReactCardSlider1 />
    </>
  );
}

export default App;
