import "./flat.css";
import amazon from"../../images/amazon.png";
import github from"../../images/github.svg";
import facebook from"../../images/facebook.svg";
import nexflix from"../../images/nexflix.png";
import tiwtter from"../../images/tiwtter.png";     
import youtube from"../../images/youtube.png";
const Flat = () =>{
	return(
		<div className="flat">
			<div className="container">
				<div className="content">
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
							<img src={github} alt = "github" />
						</div>
						
						
						
						
				</div>
			</div>
		</div>

		);

}
export default Flat;