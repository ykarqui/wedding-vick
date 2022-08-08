import React from 'react';
import {
	FaRegCalendarAlt,
	FaChurch,
	FaGlassCheers,
	FaMapMarkedAlt,
} from 'react-icons/fa';

/*
* Pagar tarjeta
*/
const Detalles = () => {
    return ( <section className="section w-details-area center-text">
		<div className="container">
			<div className="row">
				<div className="col-sm-1"></div>
				<div className="col-sm-10">
					
					<div className="heading">
						<h2 className="title">Detalles</h2>
						<span className="heading-bottom"><i className="icon icon-star"></i></span>
					</div>
					
					<div className="wedding-details margin-bottom">
						
						<div className="w-detail right">
							<i className="icon icon-ciurclke"></i>
							<h3 className="title">Iglesia</h3>
							<p><FaChurch /> A confirmar</p>
							{/* <p><FaRegCalendarAlt /> 24 de marzo de 2023</p>
                            <p> <FaMapMarkedAlt/> Av. Fuerza Aerea Argentina 6500, Córdoba</p>
							<div>
								<div className="map-responsive">
									<iframe
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2313.8932351079957!2d-64.27515121864893!3d-31.43314658559257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a1d88cece70d%3A0x6e9a4aaa3780310f!2sNuestra%20Se%C3%B1ora%20de%20Loreto!5e0!3m2!1ses-419!2sar!4v1636692877419!5m2!1ses-419!2sar"
										width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" title="myFrame"></iframe>
								</div>
							</div> */}
						<br/>
						</div> 
						
						<div className="w-detail left">
							<i className="icon icon-cake"></i>
							<h3 className="title">SALÓN - 21hs</h3>
							<p> <FaGlassCheers/> 1915 Eventos</p>
							<p> <FaRegCalendarAlt /> 24 de marzo de 2023</p>
							<p> <FaMapMarkedAlt/> Progreso 59, Villa Allende</p>
                            <br/>
							<br/>
							<div>
								<div className="map-responsive">
									<iframe 
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3409.819321090834!2d-64.30063558438923!3d-31.281092596851835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329d2460dc6ec7%3A0xe8052cc1ef6f258!2s1915%20Eventos!5e0!3m2!1ses-419!2sar!4v1634704759010!5m2!1ses-419!2sar"
										width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" title="myFrame"></iframe>
								</div>
							</div>
						</div> 
						
					</div>
					
				</div>
			</div>
		</div>
    </section>    
    );
}

export default Detalles;