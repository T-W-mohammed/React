import "./standard.css";
import MarkTrue from"../../images/true.png";
import amazon from"../../images/amazon.png";
import github from"../../images/github.svg";
import facebook from"../../images/facebook.svg";
import nexflix from"../../images/nexflix.png";
import tiwtter from"../../images/tiwtter.png";     
import youtube from"../../images/youtube.png"; 

const Companies = ()=>{
	return(
		<div className="companies">
			<div className="container">
				<div className="content">
					<div className="left goleft">
						<h2>we create a New standards for our business</h2>
						<p>  It has survived not only five
						     centuries, but also the leap into electronic typeset
						     ting, remaining essentially unchanged It has survived not only five
						     centuries, but also the leap into electronic typeset
						     ting, remaining essentially unchanged.
					     </p>
						<ul>
							<li><img src ={MarkTrue} alt="true"/> It has survived not only one .</li>
							<li><img src ={MarkTrue} alt="true"/>It has survived not only two .</li>
							<li><img src ={MarkTrue} alt="true"/>It has survived not only three .</li>
						</ul>
						<button> See more</button>
					</div>
					<div className="right goright">
						<div className="img">
						<img src={amazon} alt = "amazon" />
						</div>
						<div className="img">
							<img src={github} alt = "github" />
						</div>
						<div className="img">
							<img src={facebook} alt = "facebook" />
						</div>
						<div className="img">
							<img src={nexflix} alt = "nexflix" />
						</div>
						<div className="img">
							<img src={youtube} alt = "youtube" />
						</div>
						<div className="img">
							<img src={tiwtter} alt = "tiwtter" />
						</div>
						<div className="img">
							<img src={amazon} alt = "amazon" />
						</div>
						<div className="img">
							<img src={github} alt = "github" />
						</div>
						<div className="img">
							<img src={amazon} alt = "amazon" />
						</div>
					</div>
				</div>
			</div>
		</div>

		);
}
export default Companies;