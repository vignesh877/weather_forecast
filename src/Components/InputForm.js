import { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert'

function InputForm(props) {

  const [place, setPlace] = useState() 
  
  const fetchData =  (e) =>{
    if(e.key === 'Enter'){
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=f0ba153c6ed888e6b3b95c452616b1d0`)
        .then(res =>  props.changeData(res.data)  )
        .catch(err => {
            if(err.message === 'Network Error')
            swal("Oops!", "Network Error", "warning");
            else swal("Oops!", "Enter a valid location" , "error");
        })
      }
   
  }
  

  return (
    <div className='inpt'>
        <input
          type='text'
          value={place}
          onKeyUp={fetchData}
          onChange={e => setPlace(e.target.value)}
          placeholder='Enter the city name'
          size='sm'
        />    
    </div>
  )
}

export default InputForm