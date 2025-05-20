
import './App.css'
import ToDo from './Todo';
import Actor from './Actor';
import Singer from './Singer';

function App() {

  const singers = [{id: 1, name:'Dr.Mahfuj',age:68},
              {id: 2, name:'Tahsan',age:40},
              {id: 3, name:'Shuvro deb',age:57}
  ]

  const actors = ['Bappa Raj', 'Omar Sunny', 'Salman SHah', 'Jasim','Anwar'];

  return (
    <>
      
      <h1>React Core Concept</h1>

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

      {
        actors.map(actor => <Actor actor = {actor}></Actor>)
      }
      {/* <ToDo task = 'Learn React' isDone={true}></ToDo>
      <ToDo task = 'Revise JS' isDone={false}></ToDo>
      <ToDo task = 'Take a shower' isDone={true}></ToDo> */}
      {/* <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name="Zim" tech="Python"></Developer>
      <Developer name="Sahel" tech="JavaScript"></Developer>
      <Developer name="Jobaer" tech="Java"></Developer>
      <Device dname="acer" user="Jobaer" year="2"></Device>
      <Device dname="Walton" user="Shakil" year="unknown"></Device>
      <Device dname="hp" user="Abir" year="unknown"></Device>
      <Player name="AB Deviliars" runs = "10,000"></Player> */}
    </>
  )
}

function Player({name, runs}){
  return(
    <div>
      <h3>Name: {name}</h3>
      <p>Runs:{runs}</p>
    </div>

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

function Person() {
  const age = 24;
  const personStyle = {
    color: 'red',
    textAlign: 'right',
  };

  return <p style={personStyle}>I am a person {age}</p>;
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
