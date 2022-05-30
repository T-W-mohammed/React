import react from "react";
import Landing from "../components/land/landing";
import Feat from "../components/features/feat";
import Over from "../components/overlay/over";
import Guid from "../components/guiding/guid";
import Companies from "../components/standard/stand";
import Statis from "../components/statistics/statis";
import Work from "../components/working/work";
import Flat from "../components/flating/flat";
import Social from "../components/social/social";
import Footer from "../components/footer/foot";
const Home = ()=>{

	return(
		<div className="homeLink">  
		<Over/>
		<Landing />
		<Feat />
		<Guid  />
		< Companies />
		< Statis />
		< Work />
		< Flat />
		< Social />
		< Footer />

		</div> 
		);
}

export default Home;