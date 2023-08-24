import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TextForm from './components/TextForm'
import Navbar from './components/navbar';

// import About from './about';

// function App() {
//   const names = ['sakib', 'sajib', 'sayeb', 'sajjad']
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Person name={names[0]} nayika='mousumi'></Person>
//         <Person name={names[1]} nayika='Dhinchak'></Person>
//         <Person name={names[2]} nayika="bubli"></Person>
//       </header>
//     </div>
//   );
// }
// function Person (props){
//   const personStyle={
//     border: "2px solid red",
//     margin:'20px'
//   }
//   return (
  
//   <div style={personStyle}>
//     <Counter style={{border: "5px solid yello", margin: "40px"}}></Counter>
//     <h1>Name of Hero: {props.name}</h1>
//     <h3>Name of heroin:{props.nayika}</h3>
//   </div>
//   )
// }

// function Counter (){
//   const [count, setCount] = useState(10);
//   const handleIncrease = () => {
//     setCount(count + 1);
//   };
//   const handleDecrease = () => {
//     setCount(count - 1)
//   }
//   return(
//     <div>
//       <h1>Count: {count}</h1>
//       <button onMouseMove={handleDecrease}>Decrease</button>
//       <button onMouseMove={handleIncrease}>Increase</button>
//       <User></User>
//     </div>
//   )
// }



function App(){

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return(
    <div className={`App ${theme === 'dark' ? 'dark' : 'light'}`}>
    <Navbar theme={theme} toggleTheme={toggleTheme} title="TextUtils" ></Navbar>
    <TextForm/>
    {/* <About/> */}
    </div>
  )
}

export default App;
