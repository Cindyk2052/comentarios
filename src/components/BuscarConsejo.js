import React, { useEffect, useState } from "react";
import ResultadosBuscar from "./ResultadosBuscar";
import { Button, Form, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";


function BuscarConsejo({ handleAddFav }) {
    const [buscarConsejo, setBuscarConsejo] = useState();
    const [buscarPalabra, setBuscarPalabra] = useState(null);

    useEffect(() => {
        const getBuscarConsejo = async () => {
            if (buscarPalabra) {
                const response = await fetch(
                    `https://api.adviceslip.com/advice/search/${buscarPalabra}`
                );
                const consejoArray = await response.json();
                if (consejoArray) {
                    setBuscarConsejo(consejoArray.slips);
                } else {
                    setBuscarConsejo([]);
                }
            }

            console.log("consejos", buscarConsejo);
        };

        getBuscarConsejo();
    }, [buscarPalabra]);

    const onFinish = (values) => {
        setBuscarPalabra(values.palabraclave);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className="Buscador">
            <h1 className="Buscar">Buscador de consejos</h1>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Palabra clave"
                    name="palabraclave"
                    rules={[
                        {
                            required: true,
                            message:
                                "No ha ingresado una palabra!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" icon={<SearchOutlined />}>
                        Buscar
                    </Button>
                </Form.Item>
            </Form>
            {buscarConsejo === undefined ? (
                <br />
            ) : (
                <ResultadosBuscar
                    listConsejos={buscarConsejo}
                    handleAddFav={handleAddFav}
                />
            )}
        </div>
    );
}

export default BuscarConsejo;
