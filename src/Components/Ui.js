import React  from 'react'
import { Container, Row , Col} from 'react-bootstrap'
import UiData from './UiData'
import WeatherChart from './WeatherChart'

const Ui = (props) => {

  const  details = props.details
  const week = props.week
 
  var datas =[]

  for(let i = 0 ; i < 5 ;i++){
    datas.push(details.list[(i+8)%40])
  }  
    
  return (
    <>
    <Container style={{display:'flex' , flexDirection:'row', paddingLeft:'10%' , justifyContent:'space-around'}} fluid >
      <Row>
        { datas.map((data , i ) =>{
         return( 
            <Col md={6} key={i}>
                <UiData data={data} day = {week[i]}/>
            </Col>
            )
         })}
      </Row>
    </Container>
    <Container className='chart'>
      <WeatherChart week = {week} datas ={datas}/>
    </Container>
    </>
  )
}

export default Ui