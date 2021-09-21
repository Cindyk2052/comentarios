import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "antd";
import PropTypes from "prop-types";
import { SearchOutlined } from "@ant-design/icons";
import FavAdvices from "./FavAdvices";

function DayAdvice({fav, handleAddFav, handleDelete}) {
    const [dayAdvices, setDayAdvices] = useState();
    const [cambiarConsejos, setCambiarConsejos] = useState(0);


    useEffect(() => {
        const getConsejos = async () => {
            const response = await fetch("https://api.adviceslip.com/advice");
            const consejoArray = await response.json();
            if (consejoArray) {
                setDayAdvices(consejoArray.slip);
            } else {
                setDayAdvices([]);
            }
        };

        getConsejos();
    }, [cambiarConsejos]);



    const handleSearchAnother = () => {
        setCambiarConsejos(cambiarConsejos + 1);
    };



    return (
        <Row>
            <Col className = "Col">
                <h1>Consejo del día</h1>
                {dayAdvices === undefined ? (
                    <p>No hay consejos disponibles</p>
                ) : (
                    <p>{dayAdvices.advice}</p>
                )}

                <Row>
                    <Col>
                        <Button
                            type="primary"
                            onClick={() => handleAddFav(dayAdvices.advice)}
                            className ="Button"
                        >
                            Marcar como favorito
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            type="primary"
                            icon={<SearchOutlined />}
                            onClick={handleSearchAnother}
                            className ="Button"
                        >
                            Siguiente consejo
                        </Button>
                    </Col>
                </Row>
            </Col>

            <Col className = "Col">
                {dayAdvices === undefined ? (
                    <br />
                ) : (
                    <FavAdvices
                        consejos={fav}
                        deleteAdvice={handleDelete}
                    />
                )}
            </Col>

        </Row>








    );
}

DayAdvice.propTypes = {
    adviceArray: PropTypes.shape({
        advice: PropTypes.string,
        id: PropTypes.number,
    }),
};

export default DayAdvice;
