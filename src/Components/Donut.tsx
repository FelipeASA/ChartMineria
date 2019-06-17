// @ts-ignore
import React, {useState} from 'react';
import {ChartData, Doughnut} from 'react-chartjs-2';
import { Modal, Button, Row, Col } from 'antd';
// @ts-ignore
//import uuidv4 from 'uuid/v4';



const data = {
    labels: [
        'Equidad de Genero',
        'Integración',
        'Maquinaria',
        'Sindicalización',
        "Nuevos Clientes",
        "Clima laboral",
        "Profesionales",
        "Costo por unidad",
        "Salud y Seguridad",
        "Sustentabilidad Ambiental",
        "Costo de calidad",
        "Stock",
        "Contratos",
        "Eficiencia"


    ],
    id: [
        '1',
        '2',
        '3',
        '4',
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14"
    ],
    values: [
        '50%',
        '50%',
        '50%',
        '50%',
        "50%",
        "50%",
        "50%",
        "50%",
        "20%",
        "20%",
        "20%",
        "20%",
        "20%",
        "20%"
    ],
    datasets: [{
        data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],

        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#0A5678',
            '#0A7C82',
            '#0A825D',
            '#099447',
            '#099426',
            '#34AD24',
            '#6DC126',
            '#D3B21F',
            '#DD3E14',
            '#850000',
            '#850085'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#0A5678',
            '#0A7C82',
            '#0A825D',
            '#099447',
            '#099426',
            '#34AD24',
            '#6DC126',
            '#D3B21F',
            '#DD3E14',
            '#850000',
            '#850085'
        ]
    },{
        data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],

        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#0A5678',
            '#0A7C82',
            '#0A825D',
            '#099447',
            '#099426',
            '#34AD24',
            '#6DC126',
            '#D3B21F',
            '#DD3E14',
            '#850000',
            '#850085'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#0A5678',
            '#0A7C82',
            '#0A825D',
            '#099447',
            '#099426',
            '#34AD24',
            '#6DC126',
            '#D3B21F',
            '#DD3E14',
            '#850000',
            '#850085'
        ]
    },{
        data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],

        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#0A5678',
            '#0A7C82',
            '#0A825D',
            '#099447',
            '#099426',
            '#34AD24',
            '#6DC126',
            '#D3B21F',
            '#DD3E14',
            '#850000',
            '#850085'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#0A5678',
            '#0A7C82',
            '#0A825D',
            '#099447',
            '#099426',
            '#34AD24',
            '#6DC126',
            '#D3B21F',
            '#DD3E14',
            '#850000',
            '#850085'
        ]
    },{
        data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],

        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#0A5678',
            '#0A7C82',
            '#0A825D',
            '#099447',
            '#099426',
            '#34AD24',
            '#6DC126',
            '#D3B21F',
            '#DD3E14',
            '#850000',
            '#850085'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#0A5678',
            '#0A7C82',
            '#0A825D',
            '#099447',
            '#099426',
            '#34AD24',
            '#6DC126',
            '#D3B21F',
            '#DD3E14',
            '#850000',
            '#850085'
        ]
    }]
};

type TDisplayData = {
    title: string,
    value: string
}
type TProps = {};
function Donut(props: TProps) {
    const [visible, setVisible] = useState<boolean>(false);
    const [displayData, setDisplayData] = useState<undefined | TDisplayData>(undefined);
    return <>
        <div >
            <h1>Gráficos KPI</h1>
            <Row>
                <Col>
                    <Doughnut data={data}
                              getElementAtEvent ={ (element)=> onElementClick(element)}
                              getElementsAtEvent={(elements) => onElementsClick(elements)}
                              getDatasetAtEvent={(dataset) => handleDatasetAtEvent(dataset)}
                    />
                </Col>
                <Col>
                    {
                        displayData &&
                        <Modal
                            title={displayData.title}
                            visible={visible}
                            onOk={() => setVisible(false)}
                            onCancel={() => setVisible(false)}
                        >
                            <h1> {displayData.value} de la meta </h1>
                        </Modal>
                    }

                </Col>
            </Row>

        </div>
    </>

    //@ts-ignore
    function onElementClick(elements){
        console.log('onElementClick', elements)
        console.log("elements[0]._chart", elements[0]._index)
        const data_index = elements[0]._index;
        setDisplayData({title: data.labels[data_index], value: data.values[data_index]});
        setVisible(true)

  //      alert(`Usted esta viendo ${data.labels[data_index]} \n Tiene un valor de ${data.values[data_index]}`)
    }
    function onElementsClick(elements: any){

    }
    function handleDatasetAtEvent(dataset: any){

    }
}

export default Donut



