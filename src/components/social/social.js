import "./social.css";
import amazon from"../../images/amazon.png";
import github from"../../images/github.svg";
import facebook from"../../images/facebook.svg";
import tiwtter from"../../images/tiwtter.png";     
import youtube from"../../images/youtube.png";
const Social = ()=>{
	return(
		<div className="social">
			<div className = "container">
				<div className="content">
					<div className="left">
						Do not miss to follow us on our social networks .
					</div>
					<div className="right">
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
							<img src={tiwtter} alt = "tiwtter" />
						</div>
						<div className="img">
							<img src={youtube} alt = "youtube" />
						</div>
						
					</div>
				</div>
			</div>
		</div>
		);
}
export default Social;