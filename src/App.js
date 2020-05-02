import React, {Fragment, useEffect, useState} from 'react';
import Formulario from "./components/Formulario";
import axios from 'axios'
import Cancion from "./components/Cancion";

function App() {

    //Definimos state
    const [busquedaLetra, guardarBusquedaLetra] = useState({});
    const [letra, guardarLetra] = useState('');

    useEffect(() => {
        if (Object.keys(busquedaLetra).length === 0) return;

        const consultarAPILetra = async () => {
            const {artista, cancion} = busquedaLetra
            const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
            const respuesta = await axios.get(url)
            guardarLetra(respuesta.data.lyrics)
        }
        consultarAPILetra()
    }, [busquedaLetra])

    return (
        <Fragment>
            <Formulario guardarBusquedaLetra={guardarBusquedaLetra}/>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        Artista
                    </div>
                    <div className="col-md-6">
                        <Cancion letra={letra}/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
