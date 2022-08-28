import React , {useState}from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import  ToggleButton from 'react-bootstrap/ToggleButton';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import MENU from './menu.png' ;
import CAM from './cam.png' ;
import ThumbNail from './thumbnail.jpeg' ;



export default function NavBar(){
    return(<div className='div-nav'>
    
    <Navbar classNmae="navbar">

        <img src={CAM}   className='h-cam'/><span>.</span>
        <p id='album'>Album</p>
        <img src={MENU}   className='h-menu'/>
      
    </Navbar>
  </div>);
}

function Banner(){
    return(<div className='album-example'><h3>Album example</h3>
    <p>Something short and leading about the collection below - its</p>
    <p>content , the creator , etc . Make it short and sweet , but not too short</p>
    <p>so folks don't simply skip over it entirely .</p>
    <Button variant="primary" className='btn'>Make call to action</Button>{' '}
    <Button variant="secondary" className='btn'>Secondary action</Button>{' '}
    </div>);
}

function CardComponent(){
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'View', value: '1' },
    { name: 'Edit', value: '2' },
  ];
    return(<div id='card'>
        <center>
        <CardGroup id='card-group'>
  <Card id="c-1">
    <Card.Img variant="top" src={ThumbNail} className='thumb-nail'/>
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"> <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton 
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-secondary' : 'outline-secondary'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      </small>
    </Card.Footer>
  </Card>
  <Card id='c-2'>
  <Card.Img variant="top" src={ThumbNail} className='thumb-nail'/>
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton 
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-secondary' : 'outline-secondary'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      </small>
    </Card.Footer>
  </Card>
  <Card id='c-3'>
  <Card.Img variant="top" src={ThumbNail} className='thumb-nail'/>
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton 
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-secondary' : 'outline-secondary'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      </small>
    </Card.Footer>
  </Card>
</CardGroup>
</center>
    </div>);
}

function Footer(){
     return(
         <footer id='foot'>
          <p id='f-1'>Album  example bootstrap ,  but  please download and customize it for yourself  . <a href="#top" id='top1'>Back to top</a></p>
          <p>Now to bootstrap ? <a href='#'>visit home page</a>    or read our   <a href='#'> getting started guide</a></p>
         </footer>
      
     )
}


export {Banner ,CardComponent ,Footer};

