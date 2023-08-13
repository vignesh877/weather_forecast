import { useState } from 'react';
import './App.css';
import Ui from './Components/Ui'
import InputForm from './Components/InputForm';




function App() {
  const [details , setDetails] = useState()
  // const [modifyData , setModifyData] = useState()

  var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var day = new Date() 
  var week =[]

  for(let i = 0 ; i < 5 ;i++){
    week.push(weekday[(day.getDay()+i)%7])
  }
  
  const changeData = (props) =>{
      setDetails(props)
  }
  

  return (
      <div className='App'>
        <InputForm changeData = {changeData}/>
       {  details   && <Ui details = {details} week={week} /> }
      </div>
   )
}

export default App