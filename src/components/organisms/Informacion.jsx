import "./Informacion.css";
import Formulario from "../molecules/Formulario";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import Tabla from "../molecules/Tabla";
import { useState } from "react";

function Informacion() {
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [fecha, setFecha] = useState("");
    const [matricula, setMatricula] = useState("");
    const [informacion, setInformacion] = useState([]);

    const agregarInformacion = () => {
        const nuevaInfo = {
            nombre,
            edad,
            fecha,
            matricula,
        };

        setInformacion([...informacion, nuevaInfo]);
        
        setNombre("");
        setEdad("");
        setFecha("");
        setMatricula("");
    };

    return (
        <div id="ingresarDatos">
            <Text text="Ingresar Información" />
            <Formulario type="text" placeholder="Ingresar Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <Formulario type="number" placeholder="Ingresar Edad" value={edad} onChange={(e) => setEdad(e.target.value)} />
            <Formulario type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
            <Formulario type="number" placeholder="Ingresar Matrícula" value={matricula} onChange={(e) => setMatricula(e.target.value)} />
            <Button boton="Agregar Información" onClick={agregarInformacion} />

            <div id="listaInformacion">
                <Text text="Lista de Información" />
                <Tabla datos={informacion} />
            </div>
        </div>
    );
}

export default Informacion;
