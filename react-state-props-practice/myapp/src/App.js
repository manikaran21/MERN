import logo from './logo.svg';
import './App.css';
import Header from './Header' ;
import Reusable from './Reusable' ;






function App() {
  const ele = <p className="txt">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown</p> ;
  const reuse = {
   "summary":<h2 className="txt">Summary</h2> ,
   "experience":<h2 className="txt">Experience</h2>,
   "contact": <h2 className="txt">Contact</h2> 
  }
  return (
    <div className="App">
      <br></br>
      <section className='sect'>
        
        <img src={require('./images.jpeg')} className="image1"/>
       
        <Header/>
        
        </section>
        
      <section className='sect'>
      <Reusable prop={reuse.summary}/>
      {ele}
      </section>
      <section className='sect'>
      <Reusable prop={reuse.experience}/>
        {ele}
      </section>
      <section className='sect'>
      <Reusable prop={reuse.contact}/>
        {ele}
      </section>
     
      
    </div>
  );
}

export default App;
