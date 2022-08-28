import logo from './logo.svg';
import './App.css';
import Header from './Header' ;
import Summary ,{SummaryInfo} from './Summary' ;
import Experience ,{ExperienceInfo} from './Experience' ;
import Contact ,{ContactInfo} from './Contact' ;






function App() {
  return (
    <div className="App">
      <br></br>
      <section className='sect'>
        
        <img src={require('./images.jpeg')} className="image1"/>
       
        <Header/>
        
        </section>
        
      <section className='sect'>
      <Summary/>
      <SummaryInfo/>
      </section>
      <section className='sect'>
        <Experience/>
        <ExperienceInfo/>
      </section>
      <section className='sect'>
        <Contact/>
        <ContactInfo/>
      </section>
     
      
    </div>
  );
}

export default App;
