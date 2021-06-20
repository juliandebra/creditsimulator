import React, {useState} from "react";
import './App.css';
import Slider1 from './Slider1.jsx';
import Slider2 from './Slider2.jsx';
import Credit from './credito.js';

//Coloco los 3 componentes (2 sliders y 1 para el resultado) en el App donde seteo los props y los paso a cada child
export default function App(){
    const [value, setValue] = useState(27500);
    const [plazo, setPlazo] = useState(14);

    return(
        <div className="borde">
          <section className="cuadro">
              <p className="header">Simulá tu crédito</p>
      
          
              <Slider1 value={value} setValue={setValue}/>
              <Slider2 plazo = {plazo} setPlazo={setPlazo}/>
              <Credit value={value} plazo = {plazo} setValue={setValue} setPlazo={setPlazo}/>
            
          </section>
        </div>
        );
}



















// export default function Slider2() {
//     const [value, setValue] = useState(14);
//     const min = 3;
//     const max = 24;
    

//     const handleChange = (event, newValue) => {
//       setValue(newValue);
//     };
//     return (
//       <Fragment>
//           <p className="title1">PLAZO</p>
//           <p className="value">{value}</p>
            
//       <Slider className ="slider"
//         defaultValue={value}
//         min={min} max={max}
//         step={1}
//         onChange={handleChange}   
//         />
//             <p className="min">{min}</p>
//             <p className="max1">{max}</p>
//       </Fragment>
//     );
    
// };

