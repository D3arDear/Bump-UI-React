import React from "react";
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
// import Layout from "./layout"

export default function() {
	return (
		<div>
			<div>
				<h2>First example</h2>
				<Layout className="hi" style={{ height: "500px" }}>
					<Header></Header>
					<Content></Content>
					<Footer></Footer>
				</Layout>
			</div>
		</div>
	);
}
