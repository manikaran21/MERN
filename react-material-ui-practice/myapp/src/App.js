import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Poster from './Poster';
import BlogBody from './BlogBody';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='border'>
        
        <hr></hr>
      </div>
      <Poster/>
      <BlogBody/>
      <Footer/>
    </div>
  );
}

export default App;
