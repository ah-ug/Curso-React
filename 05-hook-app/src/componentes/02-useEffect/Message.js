import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x: 0, y: 0})
    const {x, y} = coords;

    useEffect(() => {
        //Cuando empieza a usarse el component
        const mouseMove = (e) =>{
            // console.log(' :D ')
            const coords = {x: e.x, y: e.y}
            setCoords( coords );
        }

        /* window.addEventListener('mousemove', (e) => {
            // console.log(e)
            // const coors = { x: e.x, y: e.y};
            // console.log(coors)
        }) */
        window.addEventListener('mousemove', mouseMove);

        return () => {
            // Cuando deja de usarse el component
            // console.log('componente desmontado')
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])

    return (
        <div>
            <h3>Eres genial</h3>
            <p>
                x: {x}
                y: {y}
            </p>
        </div>
    )
}
