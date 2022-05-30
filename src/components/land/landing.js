
import img1 from "../../images/img1.svg";
import magni from "../../images/magni.png";
import arrowDown from "../../images/arrowDown.png";
import "./landing.css";
import "./landjs.js";
const Landing = () =>{

	return (
	<div className="landing ">
		
			<nav>
				<div className="container">
					<div className="left">
						<div className ="logo">
							<span>TM</span>
							carpal
							<span>link </span>
						</div>
					</div>
					<div className="right">
						<ul>
							<li><a to=" \ ">link</a></li>
							<li><a to=" \ ">link</a></li>
							<li><a to=" \ ">link</a></li>
							
						</ul>
						<form>
						<input type="search" placeholder="search "/>
						<button type="submit">
							<img src={magni} alt="search icon"/>

							
						</button>
						</form>
					</div>
					<div className="navbtn">
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			</nav>

			<header className="container">
				<div className="left goleft">
					<h5>Our Business</h5>
					<h2>We help innovators bring their Business to life . </h2>
					<p> simply dummy text of the printing and typesetting
					 industry. Lorem Ipsum has been the industrys standard
					  dummy text ever since the when an unknown printer
					   took a galley of type and scrambled it to make a
					    type specimen book. It has survived not only five
					     centuries, but also the leap into electronic typeset
					     ting, remaining essentially unchanged.
					</p>
					<a>see more <span>+</span></a> <button>get a account</button>
				</div>
				<div className="right goright">
					<img src ={img1} alt="image header" />
				</div>

			</header>
			<div className = "arrow">
				<a href="#features"><img src={arrowDown} alt="arrowDown"/></a>
			</div>
		

	</div>
	);

}
export default Landing;


