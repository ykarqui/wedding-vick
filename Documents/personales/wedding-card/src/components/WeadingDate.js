import React from 'react';
import hand from '../images/mana2.jpg';
import '../WeadingDate.css';

const WeadingDate = () => {
    return (
        <div className="main-slider">
            <div className="display-table center-text">
                <div className="display-table-cell">
                    <div className="slider-content">
                        <img className="round-img" src={hand} alt="Sindur Dan"/> 
                        <h5 className="date">27 de febrero de 2022</h5>
                        <h3 className="pre-title">Save The Date</h3>
                        <h1 className="title">
                            Delfi & Juan
                        </h1>

                    </div>
			</div>
		</div>
	</div>
    );
}

export default WeadingDate;