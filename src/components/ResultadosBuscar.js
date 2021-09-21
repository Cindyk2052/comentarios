import React from "react";
import { Button } from "antd";

function ResultadosBuscar({ listConsejos, handleAddFav }) {
    return (
        <div>
            <h1>Resultados de la búsqueda</h1>
            <table>
                <thead>
                <tr>
                    <th>Consejos</th>
                    <th>Marcar como Favorito</th>
                </tr>
                </thead>
                <tbody>
                {listConsejos.map((consejo, index) => (
                    <tr key={index}>
                        <td>{consejo.advice}</td>
                        <td>
                            <Button
                                type="primary"
                                onClick={() => handleAddFav(consejo.advice)}
                            >
                                Marcar como Favorito
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ResultadosBuscar;