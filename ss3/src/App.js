import './App.css';

function App() {
  return (
    <div className='App'>
       <input className='Input' type='text' placeholder='ENTER YOUR TASKS HERE ...'/>  
        <ul className='Task-list'>
            <li> <input type='radio'/> Clean up bed room </li>
            <li> <input type='radio'/> Buy some milk</li>
            <li> <input type='radio'/> Jogging</li>
            <li> <input type='radio'/> Learn React</li>
            <li> <input type='radio'/> Do Exercises</li>
        </ul>  

        <div className='Footer'> 
          <div> 5 tasks left !</div>
          <div> MindXtodolist</div>
        </div>
    </div>
  );
}

export default App;
