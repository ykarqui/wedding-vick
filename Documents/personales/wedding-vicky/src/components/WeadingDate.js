import React from 'react';
import hand from '../images/el-gif-casamiento.gif';

const WeadingDate = () => {
    return (
        <div className="main-slider">
            <div className="display-table center-text">
                <div className="display-table-cell">
                    <div className="slider-content">
                        <h3 className="pre-title">Nos casamos</h3>
                        <br/>
                        <img className="round-img" src={hand} alt="Sindur Dan"/> 
                        <h1 className="title">
                            Victoria
                        </h1>
                        <h1 className="title">
                            Yamil
                        </h1>
                        <br/>
                        <h5 className="date">Viernes</h5>
                        <h5 className="date">24 de marzo</h5>

                    </div>
			</div>
		</div>
	</div>
    );
}

export default WeadingDate;