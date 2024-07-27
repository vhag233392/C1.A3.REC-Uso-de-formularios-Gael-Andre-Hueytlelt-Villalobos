import "./Tabla.css";

function Tabla({ datos }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Fecha</th>
                    <th>Matrícula</th>
                </tr>
            </thead>
            <tbody>
                {datos.map((item, index) => (
                    <tr key={index}>
                        <td>{item.nombre}</td>
                        <td>{item.edad}</td>
                        <td>{item.fecha}</td>
                        <td>{item.matricula}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Tabla;
