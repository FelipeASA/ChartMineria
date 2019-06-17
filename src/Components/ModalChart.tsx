// @ts-ignore
import { Modal, Button } from 'antd';
import * as React from "react";
import 'antd/dist/antd.css';
import Gauge from "../Components/Gauge";
// @ts-ignore
import ReactSpeedometer from "react-d3-speedometer";
// @ts-ignore


class ModalChart extends React.Component {
    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };



    handleOk = (e: any) => {
        console.log(e);
        this.setState({
            visible: false,
        });
        console.log("hola")

    };

    handleCancel = (e: any) => {
        console.log(e);
        this.setState({
            visible: false,
        });
        console.log("hola")
    };

    render() {
        // @ts-ignore
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Ejemplo
                </Button>
                <Modal
                    title="Indicadores en Minería"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                <h3>Indicador de equidad de género</h3>
                <h6>    Presencia de mujeres en altos cargos</h6>
                    <ReactSpeedometer
                    className={"container mt-5"}
                    segments={3}
                    startColor = "red"
                    endColor = "green"
                    needleHeightRatio = {0.5}
                    width = {475}
                    value = {500}
                    />
                </Modal>
            </div>
        );
    }
}
export default ModalChart
