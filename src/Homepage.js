import './Homepage.css';
import Navbar from './components/Navbar/Navbar';
import Gallery from './components/Gallery/Gallery';

function Homepage() {
  return (
    <div className="App">
      <h1 className="site-title">Gallery</h1>
      <h3>A photo gallery to remember all the good times.</h3>
      <Navbar />
      <Gallery />
    </div>
  );
}

export default Homepage;
