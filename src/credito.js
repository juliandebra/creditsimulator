import React from "react";
import './credito.css';



export default function Credit(props) {

    const value = props.value;  //se transfieren ambas props que son intervenidas por los sliders hacia este componente
    const plazo = props.plazo;
    const result = ((value+(value*0.9798))/plazo); //guardo el calculo entre el slider 1 y 2 en una variable
    
    return(  //Muestro el resultado y coloco dos botones que solo muestran un console log
        <div>
            <section className = "cuotafija">
                <p className = "text">CUOTA FIJA POR MES</p>
                <p className = "resultado">$ {result.toLocaleString('en-IN')}</p> 
            </section>
           
            <button className="button1" onClick={() => console.log("Obtuviste tu credito")}>
            OBTENÉ CREDITO
            </button>
            <button className="button2" onClick={() => console.log("Cuotas: $", {result}, "durante", {plazo}, "meses." )}>
                VER DETALLES DE CUOTAS
            </button>
        </div>
    );
};



