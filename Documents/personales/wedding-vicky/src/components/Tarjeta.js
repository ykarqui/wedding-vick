import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import {
	FaGifts,
    FaCopy
} from 'react-icons/fa';
import '../Tarjeta.css';

const WeadingDate = () => {

    const [price] = useState('11500');

    const redirectForm = () => {
        window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSfKSCGevncLpNsLJ3DY5ilxATFcI8wAGrwrzN0R7hnWGCTaBQ/viewform?usp=sf_link";
    }
    
    const copyAlias = () => {
        navigator.clipboard.writeText('victoria.yamil.boda');
    }

    return (
        <div className="main-slider">
            <div className="display-table center-text">
                <div className="display-table-cell">
                    <div className="slider-content">
                    <FaGifts /> 
                    <h1 className="title"> Regalos </h1>
                    <br/><br/>
   
                    <h5>Alias/CBU: <b><strong>victoria.yamil.boda</strong></b></h5>
                    <br/>
                    <Button 
                    className="btn-margin-left"
                    onClick={ copyAlias }
                    title="Notificar pago">
                        <FaCopy/>
                    </Button>
                    <br/>
                    <br/>
                    <br/>
                    <h5>Nombre: Yamil Karqui <br/>
                    CUIL: 20390711078 <br/></h5>
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
