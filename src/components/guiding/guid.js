import microphone from "../../images/microphone.png";
import bag from "../../images/bag.png";
import alarm from "../../images/alarm.png";
import "./guid.css";

const Guid = ()=>{
	return(

	<div className="guid">
		<h5>guiding tips</h5>
		<h2>guiding your business</h2>
		<div className="container">
			<div className="content">
				<div className="gui">
					<div className="img">
						<img src={microphone} alt="" />
					</div>
					<h3>mission statement</h3>
					<p> It has survived not only five
					     centuries, but also the leap into electronic typeset
					     ting, remaining essentially unchanged.
					 </p>
				</div>
				<div className="gui">
					<div className="img">
						<img src={bag} alt="" />
					</div>
					<h3>mission statement</h3>
					<p> It has survived not only five
					     centuries, but also the leap into electronic typeset
					     ting, remaining essentially unchanged.
					 </p>
				</div>
				<div className="gui">
					<div className="img">
						<img src={alarm} alt="" />
					</div>
					<h3>mission statement</h3>
					<p> It has survived not only five
					     centuries, but also the leap into electronic typeset
					     ting, remaining essentially unchanged.
					 </p>
				</div>
			</div>
			
		</div>

	</div>


		); 


}
export default Guid ;