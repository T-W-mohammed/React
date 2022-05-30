import img2 from "../../images/img2.svg";
import "./feat.css";
import printer from "../../images/printer.png";
import girl from "../../images/girl.png";
import medal from "../../images/medal.png";
import cloud from "../../images/cloud.png";

const Feat = () =>{
	return(

			<div className = "features ">
				<h5>features</h5>
				<h2>our key features</h2>
				<div className="container">
					<div className="content">
						<div className="img">
							<img src={img2} alt=""/>
						</div>
						<div className="feats">
						 	<div className="feat">
						 		<div className="icon">
						 			<img src= {cloud} alt="" />
						 		</div>
						 		<article>
						 			<h3>data backup</h3>
						 			<p>
						 				It has survived not only five
					     				centuries, but also the leap into
					     				 electronic .
					     			</p>
						 		</article>
						 	</div>
						 	<div className="feat">
						 		<div className="icon">
						 			<img src= {printer} alt="" />
						 		</div>
						 		<article>
						 			<h3>data backup</h3>
						 			<p>
						 				It has survived not only five
					     				centuries, but also the leap into
					     				 electronic .
					     			</p>
						 		</article>
						 	</div>
						 	<div className="feat">
						 		<div className="icon">
						 			<img src= {girl} alt="" />
						 		</div>
						 		<article>
						 			<h3>data backup</h3>
						 			<p>
						 				It has survived not only five
					     				centuries, but also the leap into
					     				 electronic .
					     			</p>
						 		</article>
						 	</div>
						 	<div className="feat">
						 		<div className="icon">
						 			<img src= {medal} alt="" />
						 		</div>
						 		<article>
						 			<h3>data backup</h3>
						 			<p>
						 				It has survived not only five
					     				centuries, but also the leap into
					     				 electronic .
					     			</p>
						 		</article>
						 	</div>
						</div>
					</div>
				</div>
			</div>
		

		);
}
export default Feat;