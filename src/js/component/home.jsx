import React from "react";
import Card from  "./card.jsx";
import Nav from "./nav.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";



function Cimiento (){

	return <div>
           <Nav/>
		   <div className="container">
		   <Jumbotron/>
		<h1>Landing Page With React</h1>
		<div className= "row">
			<Card/>
			<Card/>
			<Card/>
			<Card/>
		</div>
		</div>
		<Footer/>
	</div>
}
export default Cimiento;
