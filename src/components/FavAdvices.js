import React from "react";
import PropTypes from "prop-types";
import {Button} from "antd";

function FavAdvices({ consejos, deleteAdvice }) {
    return (
        <div>
            <h1>Consejos favoritos</h1>
            <table>
                <tbody>
                {consejos.map((consejo, index) => (
                    <tr key={index}>
                        <td>{consejo}</td>
                        <td>
                            <Button type="primary" onClick={() => deleteAdvice(index)}>
                                Quitar Consejo
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

FavAdvices.propTypes = {
    advices: PropTypes.array,
};


export default FavAdvices;