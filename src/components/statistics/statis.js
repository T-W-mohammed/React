import"./statis.css";
import"./statisjs.js";
const Statis = ()=>{
	return(
		<div className="Statis">
			<div className="container">
				<div className="content">
					<div className="stats" data-num="45" >
						<div className="num">
							0
						</div>
						<div className="name">
							web designer
						</div>
					</div>
					<div className="stats" data-num="86">
						<div className="num">
							0
						</div>
						<div className="name">
							apps developers
						</div>
					</div>
					<div className="stats" data-num="400">
						<div className="num">
							0
						</div>
						<div className="name">
							happy clients
						</div>
					</div>
					<div className="stats" data-num="856">
						<div className="num">
							0
						</div>
						<div className="name">
							websites designed
						</div>
					</div>
				</div>
			</div>
		</div>

		);
}
export default Statis;