import React, { useState } from 'react';
import '../WeadingDate.css';
import { Button, Modal } from 'react-bootstrap';
import {
	FaRegEnvelopeOpen
} from 'react-icons/fa';

const WeadingDate = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const redirectTarjeta = () => {
        window.location.href="https://mpago.la/1rXZUnz";
    }
    
    const redirectForm = () => {
        window.location.href="https://forms.gle/ebuTrw2tfTSzjuvL6";
    }
    const btnStyle = {
        'margin-bottom': '15px'
    }
    return (
        <div className="main-slider">
            <div className="display-table center-text">
                <div className="display-table-cell">
                    <div className="slider-content">
                    <FaRegEnvelopeOpen /> 
                    <h1 className="title"> Tarjeta </h1>
                    <br/><br/>

                        <Button 
                            variant="success" 
                            onClick={handleShow} 
                            size="lg"
                            style={btnStyle}>
                                Pagar por transferencia [$5000]
                        </Button>
                        
                        <Button 
                            onClick={ redirectTarjeta} 
                            variant="primary" size="lg"
                            title="Pagar con tarjeta $5500"
                            style={btnStyle}>
                                Pagar con tarjeta [$5500]
                        </Button>
                        
                        
                        <Button 
                            onClick={ redirectForm}
                            variant="success" 
                            size="lg"
                            title="Notificar pago"
                            style={btnStyle}>
                                Notificar pago
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>Alias/CBU: JUAN.CRUZ.DUARTE</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            CA $ 928 0020275307 <br/>
                            Nombre: JUAN CRUZ DUARTE MENOCHIO <br/>
                            CUIL: 20399345104 <br/>
                            CBU: 0200928911000020275376
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cerrar
                            </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
			</div>
		</div>
	</div>
    );
}

export default WeadingDate;