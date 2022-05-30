
import "./work.css";
import printer from "../../images/printer.png";
import girl from "../../images/girl.png";
import medal from "../../images/medal.png";
import cloud from "../../images/cloud.png";
const Work = ()=>{
	return(
		<div className="work">
			<div className = "container">
				<div className="content">
					<div className="left">
						<h2>who we work with ? ! </h2>
						<p>  It has survived not only five
						     centuries, but also the leap into electronic typeset
						     ting, remaining essentially unchanged It has survived not only five
						     centuries, but also the leap into electronic typeset
						     ting, remaining essentially unchanged.
					     </p>
						
						<button> See more</button>
					</div>
					<div className="feats right">
						 	<div className="feat">
						 		<div className="icon">
						 			<img src= {cloud} alt="" />
						 		</div>
						 		<article>
						 			<h3>data backup</h3>
						 			
						 		</article>
						 	</div>
						 	<div className="feat">
						 		<div className="icon">
						 			<img src= {printer} alt="" />
						 		</div>
						 		<article>
						 			<h3>data backup</h3>
						 			
						 		</article>
						 	</div>
						 	<div className="feat">
						 		<div className="icon">
						 			<img src= {girl} alt="" />
						 		</div>
						 		<article>
						 			<h3>data backup</h3>
						 			
						 		</article>
						 	</div>
						 	<div className="feat">
						 		<div className="icon">
						 			<img src= {medal} alt="" />
						 		</div>
						 		<article>
						 			<h3>data backup</h3>
						 			
						 		</article>
						 	</div>
					</div>
				</div>
			</div>
		</div>

		);

}
export default Work ;