import './Homepage.css';
import Navbar from './components/Navbar/Navbar';
import Gallery from './components/Gallery/Gallery';

function Homepage() {
  return (
    <div className="App">
      <h1 className="site-title">Photo Gallery</h1>
      <h4>...because life is beautiful</h4>
      <Navbar />
      <Gallery />
    </div>
  );
}

export default Homepage;
