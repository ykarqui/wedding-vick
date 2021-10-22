import React, { useState } from 'react';
import '../WeadingDate.css';
import { Button, Modal } from 'react-bootstrap';
import {
	FaRegEnvelopeOpen,
    FaCopy
} from 'react-icons/fa';
import '../Tarjeta.css';

const WeadingDate = () => {

    const getPriceOnMonth = () => {
        const month = new Date().getMonth();

        if ( month >= 2 ) {
            this.setState({price: '5200'});;
        }
        if ( month === 0 ) {
            this.setState({price: '5350'});;
        }
        
        if ( month === 1 ) {
            this.setState({price: '5500'});;
        }
    }

    const [price, setPrice] = useState('5200');

    const redirectForm = () => {
        window.location.href="https://forms.gle/ebuTrw2tfTSzjuvL6";
    }
    
    const copyAlias = () => {
        navigator.clipboard.writeText('JUAN.CRUZ.DUARTE');
    }

    return (
        <div className="main-slider">
            <div className="display-table center-text">
                <div className="display-table-cell">
                    <div className="slider-content">
                    <FaRegEnvelopeOpen /> 
                    <h1 className="title"> Tarjeta </h1>
                    <br/><br/>

                    <h3>Pagar por transferencia [$ {price} ]</h3>
                        
                    Alias/CBU: JUAN.CRUZ.DUARTE
                    
                    <Button 
                    className="btn-margin-left"
                    onClick={ copyAlias }
                    title="Notificar pago">
                        <FaCopy/>
                    </Button><br/>
                    CA $ 928 0020275307 <br/>
                    Nombre: JUAN CRUZ DUARTE MENOCHIO <br/>
                    CUIL: 20399345104 <br/>
                    CBU: 0200928911000020275376
                    <br/><br/>
                    <Button 
                        onClick={ redirectForm }
                        variant="link" 
                        size="lg"
                        title="Notificar pago">
                            Notificar pago
                    </Button>
                        
                            
                    </div>
			</div>
		</div>
	</div>
    );
}

export default WeadingDate;