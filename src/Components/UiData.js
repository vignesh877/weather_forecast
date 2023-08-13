import React from 'react'
import { Card , Row , Col } from 'react-bootstrap'
import {FaEye , FaWind , FaTemperatureLow ,FaTemperatureHigh} from 'react-icons/fa'

const UiData = (props) => {
    const {data ,day}= props

  return (
    <Card className='cardOuter m-4'>
        <Card.Img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} style={{width:'30%'}}/>
        <Card.Body>
          
          <Card.Title style={{display:'flex' , justifyContent:'space-around'}}>{day}</Card.Title>
          <Row>
            <Col> 
              <p><FaTemperatureHigh className='icon'/>{Number(data.main.temp-273.15).toFixed(1)}°</p>
            </Col>
            <Col>
              <p><FaTemperatureLow  className='icon'/>{Number(data.main.temp_min-273.15).toFixed(1)}°</p>
            </Col>
          </Row>
          <Row>
            <Col>
            <Card.Text><FaWind className='icon'/>{data.wind.speed}</Card.Text>
            </Col>
            <Col>
              <Card.Text><FaEye className='icon'/>{data.visibility}</Card.Text>
            </Col>
          </Row>
          <div style={{padding:'0px' , margin:'0px'}}>
              <Card.Text className='para'>{data.weather[0].description}</Card.Text>
          </div>
        </Card.Body>
      </Card>
  )
}

export default UiData