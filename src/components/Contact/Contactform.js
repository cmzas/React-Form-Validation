import React from "react";
import Form from "./NewForm";


const Contactform = () => {

    return(
        <>
        <div className="jumbotron-fluid contact-banner">
		<div className="container">
			<div className="row">
				<div className="col-lg-12 form-right">
					<div className="container">
						<div className="form-right-heading">
						<h1>Get in touch</h1>
					</div>
					<Form/>
					  </div>

				</div>
			</div>

		</div>

	</div>
	

        </>
    )
}
export default Contactform;