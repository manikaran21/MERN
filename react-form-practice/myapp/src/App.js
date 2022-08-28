import logo from './logo.svg';
import './App.css';
import FormReact from './FormReact';

function App() {
  const Check = () => {
    console.log("form is submitted") ;
  }
  return (
    <div className="App">
      <FormReact/>
    </div>
  );
}

export default App;
