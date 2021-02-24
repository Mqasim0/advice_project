import axios from 'axios';
import React,{useState, useEffect} from 'react'
import './App.css';

function App() {
  const [advice, setAdvice] = useState('')
  useEffect(() => {
     fetchApi()
  },[])

  const fetchApi = async() => {
    try {
      const response= await axios.get('https://api.adviceslip.com/advice')
      const {advice } = response.data.slip;
      setAdvice(advice)
    } catch (error) {
      console.log(error)
    }
   
  }
  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={fetchApi}>
          <span>Give me advice</span>  
        </button>
      </div>
      
    </div>
  );
}

export default App;
