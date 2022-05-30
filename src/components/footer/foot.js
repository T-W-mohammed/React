import "./foot.css";
import phone from"../../images/phone.png";
import location from"../../images/location.png";
import email from"../../images/email.png";
const Footer = ()=>{
	return(
		<footer>
			<div className="container">
				<div className="content">
					<div className="box">
						<h4>contact information</h4>
							<div><img src={location} alt="location"/>egypt - assyut - dairut</div>
							<div><img src={phone} alt="phone"/>+20 102 060 674 1</div>
							<div><img src={email} alt="email"/>mohamme@gmail.com</div>
					</div>
					<div className="box">
						<h4>companies</h4>
							<div>amazon</div>
							<div>google</div>
							<div>facebook</div>
							<div>youtube</div>
					</div>
					<div className="box">
						<h4>quict links</h4>
							<div><a>git hub acount</a></div>
							<div><a>facebook acount</a></div>
							<div><a>gmail acount</a></div>
							<div><a>liked in acount</a></div>
					</div>
					<div className="box">
						<h4>categories</h4>
							<div>templates</div>
							<div>backend projects</div>
							<div>layout designs</div>
							<div>programming guidence</div>
					</div>
					
				</div>
			</div>
		</footer>

		);
}
export default Footer;