
import './App.css'

function App() {

  return (
    <>
      
      <h1>React Core Concept</h1>
      <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name="Zim" tech="Python"></Developer>
      <Developer name="Sahel" tech="JavaScript"></Developer>
      <Developer name="Jobaer" tech="Java"></Developer>
      <Device dname="acer" user="Jobaer" year="2"></Device>
      <Device dname="Walton" user="Shakil" year="unknown"></Device>
      <Device dname="hp" user="Abir" year="unknown"></Device>
      
    </>
  )
}

function Developer(props){
  console.log(props);
  return(
    <div style={{
      border: '2px solid green',
      borderRadius: '20px'
    }}>
      <h3>Developer:{props.name}</h3>
      <p>Technology:{props.tech}</p>
    </div>
  )
}

function Device(devinfo){
  return(
    <div>
      <h2>Device Name:{devinfo.dname}</h2>
      <h1>User:{devinfo.user}</h1>
      <p>Years:{devinfo.year}</p>
    </div>
  )
}

function Person(){
  const age = 24;
  const personStyle = {
    color: 'red',
    textAlign: 'right'
  }
  return (
    <p style={personStyle}>I am a person {age}</p>
  )
}

function Sports(){
  return(
    <div>
      <h1>Cricekt</h1>
      <p>Playing and loosing</p>
    </div>
  )
}

function Student(){
  return(
    <div className='student'>
      <p>Name:</p>
      <p>Department:</p>
    </div>
  )
}

export default App
