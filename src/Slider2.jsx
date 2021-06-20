import React, {Fragment } from 'react';
import { Slider} from '@material-ui/core';
import './App.css'

 const Slider1 = (props)  => {
    const min = 3;  //Paso el minimo y el maximo del range en dos variables, de forma tal que sea mas comodo querer cambiar sus valores
    const max = 24;

    //función para setear el valor cuando el slider se corra 
    const handleChange = (event, newValue) => {
          props.setPlazo(newValue);
        };

        
    return(   
        //Muestra de que trata el slider, el valor actual a medida que se va cambiando, el mínimo del slider y el máximo. 
        //Dentro del Slider se colocan las props a tener en cuenta para que funcione según el parametro que queremos medir
        <Fragment  >
            <p className="title">MONTO TOTAL</p>
            <p className="value">{props.plazo}</p>
        
            <Slider className="slider"
                defaultValue={props.plazo}
                min={min} max={max}
                step={1}
                onChange={handleChange}
                />
    
            <p className="min">{min}</p>
            <p className="max1">{max}</p>
    </Fragment>       
    );
    
    }
  

    export default Slider1;