//Functional component
import React from 'react';
//import React, {Fragment} from 'react';

const PrimeraApp = ( {saludo} ) => {

    // const saludo = "Hola mundo const";
    // const saludo = 123.342;
    // const saludo = [1,2,3,4,5]
    // const saludo = {
    //     nombre: 'Arturo',
    //     edad: 23
    // }
    return (
/*         
        <Fragment>
            <h1>Hola Mundo</h1>
            <p>Mi primera aplicacion</p>
        </Fragment>
 */
//        Esto es un fragment, pero mas corto
         <>
         <h1> { saludo } </h1>
         {/* <pre> { JSON.stringify(saludo, null, 3) } </pre> */}
         <p>Mi primera aplicacion</p>
        </>
    );
    
}

export default PrimeraApp;